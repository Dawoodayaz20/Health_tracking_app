import { Tabs } from "expo-router";
import {StyleSheet} from "react-native";


export default function TabsLayout() {
  return (
    <Tabs screenOptions={
      { tabBarActiveTintColor : "#1E90FF",
        tabBarActiveBackgroundColor: "",
        tabBarInactiveTintColor:'#696969',
        headerStyle: {backgroundColor: "#1E90FF"},
        headerShadowVisible: true,
        tabBarStyle: {
          backgroundColor: "",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0
        },        
      }}
    >
      {/* #013679 */}
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
      backgroundColor: "#1E90FF",
  }
})

