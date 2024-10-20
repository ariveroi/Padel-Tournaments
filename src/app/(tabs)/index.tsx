import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import commonStyles from "../../styles";
import BackgroundImage from "../../components/common/BackgroundImage";
import NavigationButton from "../../components/common/NavigationButton";

export default function Home() {
  return (
    <SafeAreaView style={commonStyles.compContainer}>
      <BackgroundImage image={require("../../../assets/padel-bg.jpg")} />
      <View style={commonStyles.mainContainer}>
        <View style={styles.container}>
          {/* <NavigationButton
            onPress={() => navigation.push("User")}
            text="Usuario"
          />
          <NavigationButton
            onPress={() => navigation.push("JoinTournament")}
            text="Unirse"
          />
          <NavigationButton
            onPress={() => navigation.push("CreateTournament")}
            text="Crear"
          />
          <NavigationButton
            onPress={() => navigation.push("MyTournaments")}
            text="Mis Torneos"
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

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
