import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

export default function ListItem(props) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: props.imageUrl }}
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemDescription} numberOfLines={3}>
          {props.description}
        </Text>
        <Text style={styles.itemTitle} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    marginVertical: 1,
  },
  itemContent: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
  },
  itemDescription: {
    fontSize: 16,
  },
  itemTitle: {
    fontSize: 12,
    color: "gray",
  },
});
