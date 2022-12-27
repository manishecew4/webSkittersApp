import React, { useEffect, useState, useMemo } from 'react'
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { deleteData } from '../action/index'
import { useDispatch } from 'react-redux'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'

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

    const renderItem = (item) => {
        const itm = item.item.data;
        console.log('====================================');
        console.log("iTm", itm);
        console.log('====================================');
        return (
            <View>
                <Text>{itm.name}</Text>
                <Text>{itm.offerPrice}</Text>
                <Text>{itm.price}</Text>
                <Image source={{ uri: itm.image }} style={styles.image} />
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={listData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
})