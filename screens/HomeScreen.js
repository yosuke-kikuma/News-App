import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.EXPO_PUBLIC_NEWS_API_KEY;

        if (!apiKey) {
          throw new Error("APIキーが設定されていません");
        }

        // 取得したい件数を設定（最大100件）
        const pageSize = 50;
        const page = 1;

        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`
        );
        console.log("レスポンスステータス:", response.status);
        console.log("取得件数:", response.data.articles?.length);
        console.log("総記事数:", response.data.totalResults);
        setArticles(response.data.articles);
        console.log("APIレスポンス:", response.data.articles);
      } catch (error) {
        console.error("axios エラー:", error.message);
        console.error("エラーの詳細:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            description={item.description || "内容がありません"}
            title={item.title || "タイトルがありません"}
            onPress={() => navigation.navigate("Article", { article: item })}
          />
        )}
        onEndReached={() => {
          console.log("End reached, loading more articles...");
          // ここでページネーションのロジックを追加できます
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
