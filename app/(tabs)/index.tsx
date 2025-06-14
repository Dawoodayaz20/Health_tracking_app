import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router"

export default function Index() {
  return (
    <View style={styles.outerView}>
      <Text>
        Profile
      </Text>
    <View
      style={styles.view}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Hello from the text element in index page</Text>
      <Link href="/login" style={styles.navButton}>Login Page</Link>
    </View>
    <View>
      <Text>Hello</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerView:{
        marginTop: 50,
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
  },
  view:{
        justifyContent: "center",
        alignItems: "center",
      },
  navButton:{
        width:50
      }
})