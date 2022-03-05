import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BackgroundImage from "./common/BackgroundImage";
import NavigationButton from "./common/NavigationButton";
import FuncButton from "./common/FuncButton";
import SeeTournamentButton from "./common/SeeTournamentButton";
import Tag from "./common/Tag";
import HomeButton from "./common/HomeButton";
import commonStyles from "./common/styles";

const TestScreen = ({ navigation, route }) => {
  return (
    <View style={commonStyles.compContainer}>
      {/* <BackgroundImage image={require('../assets/padel-bg.jpg')}/> */}
      {/* <View style={commonStyles.mainContainer}>
        <View style={styles.container}>
          <NavigationButton onPress={() => navigation.push("User")} text="Usuario" />
          <NavigationButton onPress={() => navigation.push("JoinTournament")} text="Unirse" />
          <NavigationButton onPress={() => navigation.push("CreateTournament")} text="Crear" />
          <NavigationButton onPress={() => navigation.push("MyTournaments")} text="Mis Torneos" />
        </View>
      </View> */}
      {/* <Text>Common</Text> */}
      {/* <HomeButton onPress={() => navigation.push("User")} text="Usuario" /> */}
      <Tag editMode onPress={() => navigation.push("User")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: "60%",
    // backgroundColor: '#fff',
    // opacity: 0.8,
    flexDirection: "column",
    justifyContent: "space-between",
    // paddingBottom: 10
  },
});

export default TestScreen;
