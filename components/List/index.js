import { FlatList, TouchableOpacity, StyleSheet, Text } from "react-native";

export default function List(props) {
  const { itemList, onHandlerModal } = props;

  return (
    <FlatList
      data={itemList}
      renderItem={(data) => (
        <TouchableOpacity
          onPress={() => onHandlerModal(data.item.id)}
          style={data.item.completed ? styles.itemComplete : styles.item}
        >
          <Text style={data.item.completed ? styles.textComplete : styles.text}>
            {data.item.value}
          </Text>
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  itemComplete: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1E6738",
    borderRadius: 10,
    marginTop: "10%",
    height: 50,
    padding: 15,
    backgroundColor: "rgba(30, 103, 56, 0.15)",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginTop: "10%",
    height: 50,
    padding: 15,
  },
  textComplete: {
    textDecorationLine: "line-through",
    color: "#1E6738",
    fontWeight: "bold",
  },
  text: {
    textDecorationLine: "none",
    color: "#000",
    fontWeight: "normal",
  },
});
