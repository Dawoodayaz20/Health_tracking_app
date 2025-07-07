import { useAuth } from "@/lib/auth-context";
import {StyleSheet, Text, View} from "react-native"
import { Button } from "react-native-paper"

export default function LoginScreen() {
    const {signOut} = useAuth();
    const page = "loginPage"

    return(
        <View style={styles.outerView}>
            <Text>
                Hello! This is the {page} Page
            </Text>
            <Button style={styles.signOut} onPress={signOut} icon={"logout"}>{" "}
                Sign Out {" "}</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    outerView:{
        marginTop: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    signOut:{
        marginTop: 50,
        backgroundColor:"black"
    }
})