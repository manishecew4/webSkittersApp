import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Signup = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    useEffect(() => {
        // console.log("Hello");

    }, [email, password])

    const handleSignup = async () => {
        try {
            await auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User account created & signed in!');
                    navigation.navigate("Login")
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        alert("That email address is already in use!")
                    }

                    if (error.code === 'auth/invalid-email') {
                        alert("That email address is invalid!")
                    }

                    console.error(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '80%', marginBottom: 20 }}>
                <Text variant="displaySmall">Signup</Text>
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
            <Button mode="contained" style={styles.inputbtn} onPress={handleSignup}>
                Signup
            </Button>
            <View style={styles.goToLoginSignup}>
                <Text>Already have account</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={styles.goToText}>Login</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup

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