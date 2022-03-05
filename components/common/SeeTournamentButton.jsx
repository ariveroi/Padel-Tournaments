import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const SeeTournamentButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.addButton}>
      <View>
        <Text style={styles.tournamentCode}>{props.code}</Text>
        <Text style={styles.tournamentDetails}>Participantes: {props.competitors}</Text>
      </View>
      <Text style={styles.tournamentDetails}>{props.date}</Text>
      <Text style={styles.addButtonText}>{">"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    width: "95%",
  },
  addButtonText: {
    fontSize: 18,
    color: "#000",
  },
  tournamentCode: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  tournamentDetails: {
    fontSize: 14,
    color: "#000",
  },
});

export default SeeTournamentButton;
