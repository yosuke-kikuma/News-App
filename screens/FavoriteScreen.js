import { SafeAreaView, StyleSheet, Text, FlatList, View } from "react-native";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import ListItem from "../components/ListItem";

export default function FavoriteScreen({ navigation }) {
  const { favorites } = useContext(FavoriteContext);

  console.log("FavoriteScreen: navigation object:", navigation);
  console.log("FavoriteScreen: favorites count:", favorites.length);

  if (favorites.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>お気に入りした記事がありません</Text>
          <Text style={styles.emptySubText}>
            記事をお気に入りに追加してみましょう
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>お気に入り ({favorites.length}件)</Text>
      </View>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            description={item.description || "内容がありません"}
            title={item.title || "タイトルがありません"}
            onPress={() => {
              console.log(
                "FavoriteScreen: Navigating to Article with:",
                item.title
              );
              navigation.navigate("Article", { article: item });
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  header: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  emptySubText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
});
