import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SeeTournamentButton from "../common/SeeTournamentButton";

import tournaments from "./dummyData";

const Tournaments = ({ navigation, route }) => {
  //This component needs to call the API to fetch the tournanments data of the logged user

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const tournamentsList = tournaments.map((tournament, index) => {
    return (
      <SeeTournamentButton
        key={index}
        code={tournament.code}
        competitors={tournament.competitors}
        date={tournament.date}
        onPress={() => navigation.push("Tournament", { tournament })}
      />
    );
  });

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <Text>Cargando</Text>
        </View>
      ) : (
        tournamentsList
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Tournaments;
