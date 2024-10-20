import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { TournamentType } from "../types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";

type TournamentItemProps = {
  tournament: TournamentType;
};

const TournamentItem = ({ tournament }: TournamentItemProps) => {
  return (
    <Link
      style={styles.container}
      href={`/tournament/${tournament.id}`}
      asChild
    >
      <TouchableOpacity onPress={() => console.log("here")}>
        <View>
          <Text style={styles.header}>{tournament.name}</Text>
          <Text style={styles.subtitle}>
            Participants: {tournament.participants.length}
          </Text>
        </View>
        <Text>More</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TournamentItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 18,
  },
  subtitle: {},
});
