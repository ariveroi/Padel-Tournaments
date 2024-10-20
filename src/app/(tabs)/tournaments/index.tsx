import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { tournaments } from "../../../../assets/data/tournaments";
import TournamentItem from "../../../components/TournamentItem";

export default function TournamentsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tournaments}
        renderItem={({ item }) => <TournamentItem tournament={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
