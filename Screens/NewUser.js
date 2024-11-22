import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import firebase from "../Config";
const auth = firebase.auth();
export default function NewUser(props) {
  var email, password, confirmPassword;
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
          Create new user
        </Text>
        <TextInput
          onChangeText={(newEmail) => {
            email = newEmail;
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
        <TextInput
          onChangeText={(newConfirmPassword) => {
            confirmPassword = newConfirmPassword;
          }}
          placeholder="confirm password"
          secureTextEntry={true}
          style={styles.textInputStyle}
        ></TextInput>
        <View style={{ flexDirection: "row", gap: 20, marginTop: 25 }}>
          <Button
            title="Register"
            onPress={() => {
              auth
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                  props.navigation.replace("Auth");
                })
                .catch((error) => {
                  Alert(error);
                });
            }}
          />
          <Button title="Exit" />
        </View>
        {/* <Text
          style={{
            width: "100%",
            textAlign: "right",
            marginRight: 10,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          Create new user
        </Text> */}
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
