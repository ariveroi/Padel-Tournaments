import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const HomeButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    aspectRatio: 1.5,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
});

export default HomeButton;
