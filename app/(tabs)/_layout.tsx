import { Tabs } from "expo-router";
import {Text} from "react-native";


export default function TabsLayout() {
  return (
    <Tabs screenOptions={
      { tabBarActiveTintColor : "coral",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }}/>
      <Tabs.Screen name="login" options={{ title: "Login" }}/>
    </Tabs>
  );
}
