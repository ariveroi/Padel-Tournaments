import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const FuncButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.addButton}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 50,
    width: 40,
  },
  addButtonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default FuncButton;
