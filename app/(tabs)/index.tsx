import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router"

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Hello from the text element in index page</Text>
      <Link href="/login" style={styles.navButton}>Login Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
  navButton:{
        width:50
      }
})