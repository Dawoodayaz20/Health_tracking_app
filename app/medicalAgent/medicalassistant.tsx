import { useState } from "react"
import { Text, Button } from "react-native-paper"
import { View, TextInput, StyleSheet } from 'react-native';

export default function MedicalAssist() {
    const [state, setState] = useState<string | null>('')
    const [text, setText] = useState<string>('')

    const handleSubmit = () => {
        return console.log("Your query has been sent")
    }

    return(
        <View style={styles.inputview}>
            <TextInput
            style={styles.input}
            placeholder="Ask any question related your health"
            onChangeText={(newtext => setText(newtext))}
            defaultValue={text}
            />
            <Button
                mode='contained'
                onPress={handleSubmit}
            >Send</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    inputview:{
        padding: 20
    },
    input:{
        padding:10
    }
})