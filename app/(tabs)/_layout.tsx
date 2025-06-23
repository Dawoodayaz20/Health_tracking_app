import { Tabs } from "expo-router";
import {StyleSheet} from "react-native";


export default function TabsLayout() {
  return (
    <Tabs screenOptions={
      { tabBarActiveTintColor : "#fff",
        tabBarActiveBackgroundColor: "#013679"
      }}
    >
      <Tabs.Screen name="index" options={{ 
        title: "Home",
        headerStyle: styles.headerStyle,
        headerTintColor: "#fff"
        }}/>
      <Tabs.Screen name="login" options={{ 
        title: "Profile",
        headerStyle: styles.headerStyle
        }}/>
    </Tabs>
  );
}

const styles = StyleSheet.create ({
  headerStyle:{
      backgroundColor: "#013679",
  }
})

