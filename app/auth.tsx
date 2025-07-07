import { useRouter } from "expo-router";
import { useAuth } from "@/lib/auth-context";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View, StyleSheet } from "react-native";
import {Button, Text, TextInput, useTheme} from 'react-native-paper'

export default function AuthScreen() {    
    const [isSignUp, setisSignUp] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("")
    const [pass, setPass]   = useState<string>("")
    const [error, setError] = useState<string | null>("")
    
    const router = useRouter()
    const theme = useTheme()
    
    const {signIn, signUp} = useAuth()

    const handleAuth = async () => {
        if(!email || !pass){
            setError("Please fill in all the fields")
        }

        if(pass.length < 6){
            setError("Passwords must be atleast 6 characters long!")
        }

        // if(!email.includes("@gmail.com")) {
        //     setError("Invalid email!")
        // }

        setError(null);

        if (isSignUp) {
            const error = await signUp(email, pass)
            if(error){
                setError(error);
                return;
            }
        }
        else{
            const error = await signIn(email, pass)
            if(error){
                setError(error);
                return;
            }
        }
        router.replace("/")
    }

    const handleSwitchMode = () => {
        setisSignUp((prev) => !prev)
    }        
    return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
    >
        <View style={styles.content}>
            <Text style={styles.title} variant="headlineMedium">{" "} { isSignUp ? "Create Account" : "Welcome Back"}</Text>

            <TextInput 
                label='Email' 
                autoCapitalize="none" 
                keyboardType="email-address"
                placeholder="example@gmail.com"
                mode="outlined" 
                style={styles.inputfields}
                onChangeText={setEmail}
            />
            
            <TextInput 
                label='Password' 
                autoCapitalize="none" 
                secureTextEntry
                mode="outlined"
                style={styles.inputfields}
                onChangeText={setPass}
 
            />

            {error && 
            <Text style={{color:theme.colors.error}}>{error}</Text>}

            <Button mode='contained' style={styles.button} onPress={handleAuth}>{isSignUp ? "Sign Up" : "Sign In"}</Button>
            
            <Button mode='text' textColor="green" onPress={handleSwitchMode} style={styles.switchModeButton}>
                {isSignUp ? "Already have an account ? Sign In" : "Don't have an account ? Sign Up"}
            </Button>
        </View>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: "#BAD4DB"
    },
    content:{
        flex : 1,
        padding:20,
        justifyContent: 'center'
    },
    title:{
        textAlign: 'center',
        marginBottom: 60,
        color:'#013679'
    },
    inputfields:{
        padding: 3,
        marginBlock: 5
    },
    button:{
        marginTop: 10,
        backgroundColor:"#013679",
    },
    switchModeButton:{
        marginTop:20,
    }
})