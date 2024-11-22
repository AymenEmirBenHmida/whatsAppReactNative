import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import firebase from "../../Config";
const database = firebase.database();
const ref_lesProfils = database.ref("lesProfils");

export default function ListProfiles() {
  const [nom, setNom] = useState();
  const [pseudo, setpseudo] = useState();
  const [telephone, setTelephone] = useState();
  const [data, setdata] = useState([]);
  useEffect(() => {
    ref_lesProfils.on("value", (snapshot) => {
      const d = [];
      snapshot.forEach((unProfil) => {
        d.push(unProfil.val());
      });
      setdata(d);
    });

    return () => {
      ref_lesProfils.off();
    };
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Text style={styles.textstyle}>My Account</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Text>{item.nom}</Text>;
        }}
        style={{ backgroundColor: "#fff4", width: "95%" }}
      ></FlatList>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  textinputstyle: {
    fontWeight: "bold",
    backgroundColor: "#0004",
    fontSize: 20,
    color: "#fff",
    width: "75%",
    height: 50,
    borderRadius: 10,
    margin: 5,
  },
  textstyle: {
    fontSize: 40,
    fontFamily: "serif",
    color: "#07f",
    fontWeight: "bold",
  },
  container: {
    color: "blue",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
