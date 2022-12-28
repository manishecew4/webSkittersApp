import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {

    const route = useRoute();
    const navigation = useNavigation();



    const handleSignout = () => {
        auth()
            .signOut()
            .then(() => { navigation.navigate("Login") });
    }

    return (
        <View style={styles.header}>
            <Text></Text>
            <TouchableOpacity onPress={handleSignout}><Icon name="power-off" size={25}/></TouchableOpacity>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#664fa494',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    }
})