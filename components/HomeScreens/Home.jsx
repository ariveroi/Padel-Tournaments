import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import BackgroundImage from "../common/BackgroundImage";
import NavigationButton from "../common/NavigationButton";
import HomeButton from "../common/HomeButton";
import commonStyles from "../common/styles";

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainSection}>
        <HomeButton onPress={() => navigation.push("Mis Torneos")} text="Mis Torneos Activos" />
        <HomeButton onPress={() => navigation.push("User")} text="Unirme a un Torneo" />
      </View>
      <View style={styles.otherSection}>
        {/* Esto sería para versiones más consolidadas del producto, ya que no tiene sentido crear este componente si no hay torneos públicos activos */}
        <HomeButton onPress={() => navigation.push("User")} text="Ver más Torneos" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
  },
  mainSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "#000",
  },
  otherSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default Home;
