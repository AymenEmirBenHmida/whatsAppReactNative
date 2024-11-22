import { StatusBar } from "expo-status-bar";
import {
  BackHandler,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import firebase from "../Config";
const auth = firebase.auth();
export default function Auth(props) {
  var email, password;
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 300,
          width: "95%",
          backgroundColor: "#0005",
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontSize: 34,
            fontWeight: "bold",
            fontStyle: "italic",
            color: "#04f",
          }}
        >
          Bienvenu
        </Text>
        <TextInput
          onChangeText={(newText) => {
            email = newText;
          }}
          placeholder="email@site.com"
          keyboardType="email-address"
          style={styles.textInputStyle}
        ></TextInput>
        <TextInput
          onChangeText={(newPassword) => {
            password = newPassword;
          }}
          placeholder="password"
          secureTextEntry={true}
          style={styles.textInputStyle}
        ></TextInput>
        <View style={{ flexDirection: "row", gap: 20, marginTop: 25 }}>
          <Button
            onPress={() => {
              auth
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                  props.navigation.navigate("Home");
                })
                .catch((error) => {
                  Alert(error);
                });
            }}
            title="Submit"
          />
          <Button
            onPress={() => {
              BackHandler.exitApp();
            }}
            title="Exit"
          />
        </View>
        <Text
          onPress={() => {
            props.navigation.navigate("NewUser");
          }}
          style={{
            width: "100%",
            textAlign: "right",
            marginRight: 10,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          Create new user
        </Text>
      </View>
      <StatusBar style="dark" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    height: 45,
    width: "95%",
    backgroundColor: "red",
    marginTop: 10,
    borderRadius: 5,
  },
});
