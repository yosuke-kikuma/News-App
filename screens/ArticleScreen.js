import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import { WebView } from "react-native-webview";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

export default function ArticleScreen({ route }) {
  const { article } = route.params;
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useContext(FavoriteContext);

  const articleIsFavorite = isFavorite(article);

  const handleFavoritePress = () => {
    if (articleIsFavorite) {
      removeFromFavorites(article.url);
      Alert.alert("削除しました", "お気に入りから削除しました");
    } else {
      addToFavorites(article);
      Alert.alert("追加しました", "お気に入りに追加しました");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.favoriteButtonContainer}>
        <TouchableOpacity
          style={[
            styles.favoriteButton,
            articleIsFavorite
              ? styles.favoriteButtonActive
              : styles.favoriteButtonInactive,
          ]}
          onPress={handleFavoritePress}
        >
          <Text
            style={[
              styles.favoriteButtonText,
              articleIsFavorite
                ? styles.favoriteButtonTextActive
                : styles.favoriteButtonTextInactive,
            ]}
          >
            {articleIsFavorite ? "★ お気に入り済み" : "☆ お気に入りに追加"}
          </Text>
        </TouchableOpacity>
      </View>
      <WebView source={{ uri: article.url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  favoriteButtonContainer: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  favoriteButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
  },
  favoriteButtonActive: {
    backgroundColor: "#ff6b6b",
    borderColor: "#ff6b6b",
  },
  favoriteButtonInactive: {
    backgroundColor: "transparent",
    borderColor: "#ccc",
  },
  favoriteButtonText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  favoriteButtonTextActive: {
    color: "white",
  },
  favoriteButtonTextInactive: {
    color: "#666",
  },
});
