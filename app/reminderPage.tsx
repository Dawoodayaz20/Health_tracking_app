import { Text } from "react-native-paper"
import { View, StyleSheet } from "react-native"


export default function Reminders () {
    return (
        <View style={styles.outerview}>
            <Text>This is the Reminders Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    outerview:{
        justifyContent:'center',
        alignItems:'center',
        margin: 20,
    }
})