import { createContext, useState } from "react";

// お気に入りコンテキストを作成
export const FavoriteContext = createContext();

// お気に入りプロバイダーコンポーネント
export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // お気に入りに追加
  const addToFavorites = (article) => {
    setFavorites((prevFavorites) => {
      return [...prevFavorites, article];
    });
  };

  // お気に入りから削除
  const removeFromFavorites = (articleUrl) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.url !== articleUrl)
    );
  };

  // お気に入りかどうかをチェック
  const isFavorite = (article) => {
    return favorites.some((fav) => fav.url === article.url);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
