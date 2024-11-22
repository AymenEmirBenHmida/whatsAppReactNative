import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ListProfiles from "./Home/ListProfiles";
import Group from "./Home/Group";
import MyProfile from "./Home/MyProfile";

const Tab = createMaterialBottomTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ListProfils" component={ListProfiles}></Tab.Screen>
      <Tab.Screen name="Group" component={Group}></Tab.Screen>
      <Tab.Screen name="MyProfil" component={MyProfile}></Tab.Screen>
    </Tab.Navigator>
  );
}
