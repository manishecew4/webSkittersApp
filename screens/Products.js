import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { addData } from '../action/index';
import auth from '@react-native-firebase/auth';

const Products = () => {

    const [isUserLoggedin, setIsUserLoggedin] = useState(false);
    const [filePath, setFilePath] = useState({});
    const [fileName, setFileName] = useState("Choose File");
    const [state, setState] = useState({
        name: "",
        price: "",
        offerPrice: ""
    });

    useEffect(() => {
        console.log("User Status", isUserLoggedin);
    })


    auth().onAuthStateChanged(user => {
        if (user) {
            setIsUserLoggedin(true)
        }
    });

    const navigation = useNavigation();
    if (!isUserLoggedin) {
        console.log(isUserLoggedin);
        navigation.navigate("Login")
    }

    const dispatch = useDispatch();

    const handleChange = (value, name) => {
        setState({
            ...state,
            [name]: value
        })
    }

    const user = auth().currentUser;

    if (user) {
        console.log('User email: ', user.email);
    }


    const handleSave = () => {
        let { name, price, offerPrice } = state;

        console.log("name", name);
        console.log("price", price);
        console.log("offerPrice", offerPrice);
        console.log("fileName", fileName);

        if (name && price && offerPrice && fileName) {

            let product = { ...state, ...{ "image": filePath } }
            console.log("product", product);
            dispatch(addData(product));
            setState({
                name: "",
                price: "",
                offerPrice: ""
            })
            setFilePath("")
            setFileName("")


        }
        else {

            console.log("Not");

        }


    }



    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('base64 -> ', response.assets[0].base64);
            console.log('uri -> ', response.assets[0].uri);
            console.log('width -> ', response.assets[0].width);
            console.log('height -> ', response.assets[0].height);
            console.log('fileSize -> ', response.assets[0].fileSize);
            console.log('type -> ', response.assets[0].type);
            console.log('fileName -> ', response.assets[0].fileName);
            setFilePath(response.assets[0].uri);
            setFileName(response.assets[0].fileName);
        });
    };


    return (
        <View style={styles.container}>
            <TextInput
                label="Product Name"
                style={styles.inputField}
                mode="outlined"
                value={state.name}
                onChangeText={text => handleChange(text, "name")}
            />
            <TextInput
                label="Product Price"
                style={styles.inputField}
                keyboardType='numeric'
                mode="outlined"
                value={state.price}
                onChangeText={text => handleChange(text, "price")}
            />
            <TextInput
                label="Offer Price"
                style={styles.inputField}
                keyboardType='numeric'
                mode="outlined"
                value={state.offerPrice}
                onChangeText={text => handleChange(text, "offerPrice")}
            />
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.pickImageStyle}
                onPress={() => chooseFile('photo')}>
                <Text style={styles.textStyle}>{fileName}</Text>
            </TouchableOpacity>

            <Button mode="contained" style={styles.inputbtn} onPress={handleSave}>
                Save
            </Button>
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        marginBottom: 16,
        width: '80%',
    },
    pickImageStyle: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#7895B2',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 20
    },
    inputbtn: {
        width: '60%'
    },
})