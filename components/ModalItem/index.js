import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ModalItem(props) {
  const {
    modalVisible,
    itemSelected,
    onHandlerCloseModal,
    onHandlerDeleteItem,
    onHandlerCompleteItem,
  } = props;

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <View>
            <Text style={styles.modalTitle}>Item Fruta</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onHandlerDeleteItem(itemSelected.id)}
            >
              <Text style={styles.textButton}>Borrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onHandlerCompleteItem(itemSelected.id)}
            >
              <Text style={styles.textButton}>Completar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onHandlerCloseModal()}
            >
              <Text style={styles.textButton}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    width: "80%",
    height: 320,
    borderRadius: 10,
    padding: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  modalTitle: {
    color: "#1E6738",
    fontSize: 22,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  modalMessage: {
    /* marginBottom: 10, */
    justifyContent: "center",
    alignItems: "center",
  },
  modalButton: {
    width: "100%",
    marginTop: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  modalItem: {
    fontSize: 30,
  },
  button: {
    width: "100%",
    height: 40,
    margin: 10,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    padding: 10,
    shadowColor: "rgba(10, 42, 27, .8)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
