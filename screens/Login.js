import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Login = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try {


            if (email.length > 0 && password.length > 0) {
                const isUserLogin = await auth().signInWithEmailAndPassword(
                    email, password
                );
                navigation.navigate("Home", {
                    email: isUserLogin.user.email,
                    uid: isUserLogin.user.uid
                })
            }else{
                alert("Please enter Email & Password")
            }

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '80%', marginBottom: 20 }}>
                <Text variant="displaySmall">Login</Text>
            </View>
            <TextInput
                label="Email"
                style={styles.inputField}
                mode="outlined"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="Password"
                style={styles.inputField}
                mode="outlined"
                value={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            />
            <Button mode="contained" style={styles.inputbtn} onPress={handleLogin}>
                Login
            </Button>
            <View style={styles.goToLoginSignup}>
                <Text>Already have account</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Text style={styles.goToText}>Signup</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        marginBottom: 16,
        width: '80%',
    },
    inputbtn: {
        width: '60%'
    },
    goToLoginSignup: {
        marginTop: 20,
        flexDirection: 'row'
    },
    goToText: {
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'blue'
    }
})