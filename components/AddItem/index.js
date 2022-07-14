import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

export default function AddItem(props) {
  const { textItem, onHandlerChangeItem, onHandlerAddItem } = props;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ingresa una fruta"
        style={styles.input}
        value={textItem}
        onChangeText={onHandlerChangeItem}
      />
      <TouchableOpacity
        style={textItem.length < 1 ? styles.buttonDisabled : styles.button}
        onPress={onHandlerAddItem}
        disabled={textItem.length < 1 ? true : false}
      >
        <Text style={styles.textButton}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  button: {
    width: "100%",
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    padding: 10,
    shadowColor: "rgba(10, 42, 27, .8)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1,
  },
  buttonDisabled: {
    width: "100%",
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    backgroundColor: "#8AA88E",
    borderRadius: 10,
    padding: 10,
    shadowColor: "rgba(10, 42, 27, .9)", // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
