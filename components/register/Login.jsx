import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import BackgroundImage from "../common/BackgroundImage";
import StyledButton from "../common/StyledButton";
import commonStyles from "../common/styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const login = () => {
    // const data = {
    //     email: email,
    //     password: pwd
    // }
    // axios.post('http://127.0.0.1:8000/api/login', data)
    // .then(res => {
    //     navigation.navigate('Main')
    // })
    // .catch(error => alert('Error al introducir los campos'))
    navigation.navigate("Main");
  };

  return (
    <View style={commonStyles.compContainer}>
      <BackgroundImage image={require("../../assets/register-padel-bg.jpg")} />
      <View style={commonStyles.mainContainer}>
        <View style={styles.container}>
          <TextInput
            autoCompleteType="email"
            keyboardType="email-address"
            style={styles.input}
            placeholder="Correo Electrónico"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            autoCompleteType="password"
            style={styles.input}
            placeholder="Constraseña"
            value={pwd}
            onChangeText={(text) => setPwd(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton
            textColor="#0B569E"
            color="#edff21"
            type="Siguiente"
            onPress={login}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: "35%",
  },
  input: {
    height: 65,
    width: "80%",
    backgroundColor: "#fff",
    fontSize: 20,
    textAlign: "center",
    borderColor: "#edff21",
    borderWidth: 3,
    borderRadius: 10,
    margin: 10,
    opacity: 0.9,
    color: "#0B569E",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 40,
  },
});

export default Login;
