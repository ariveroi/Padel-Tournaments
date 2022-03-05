import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const NavigationButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    // margin: 10,
    padding: 25,
    borderRadius: 50,
    height: 45,
    width: 180,
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
});

export default NavigationButton;
