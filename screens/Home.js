import React, { useEffect, useState, useMemo } from 'react'
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { deleteData } from '../action/index'
import { useDispatch } from 'react-redux'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home = () => {

    const [listData, setListData] = useState();

    const list = useSelector((state) => state.dataReducer.list)

    const listMemo = useMemo(() => list, [list]);

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("list", list);

        setListData(listMemo);

    }, [listMemo])


    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };

    const deleteDataFunction = (id) => {
        console.log("ID : ", id);
        let temp = [];
        listData.forEach(element => {
            if (element.id !== id) {
                temp.push(element);
            }
        });
        dispatch(deleteData(temp));
    }

    const renderItem = (item) => {
        const itm = item.item.data;
        const id = item.item.id
        console.log("Item--ID", id);

        return (
            <View style={styles.renderItem}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: itm.image }} style={styles.image} />
                    <View style={styles.info}>
                        <Text>{itm.name}</Text>
                        <Text>Price : ₹ {itm.price}</Text>
                        <Text>Offer Price : ₹ {itm.offerPrice}</Text>
                    </View>
                </View>
                <TouchableOpacity onClick={() => deleteDataFunction(id)}>
                    <Icon name="trash-o" size={25} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={listData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
    renderItem: {
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 16
    },
    info: {
        marginLeft: 10
    }
})