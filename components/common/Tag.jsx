import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Tag = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.tag}>
      <Text style={styles.tagText}>Nombre 1</Text>
      {props.editMode ? <Text style={styles.trash}>?</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tag: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
  },
  tagText: {
    fontSize: 14,
    color: "#fff",
  },
  trash: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 10,
  },
});

export default Tag;
