import React, { useState,useEffect } from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
let cat =''

const ListScreen = () => {
    
    useEffect(() => {
      getData();
    }, [])
    const getData = async () => {
      cat = await AsyncStorage.getItem('Categories');
    }
    const [data, setData] = useState([
        {
            name: "Category",
            items: [cat]
        },
        {
            name: "Products",
            items: [{
                image: require('../assets/category.png'),
                name: 'Product 1',
                price: 10,
                category: 'Category 1',
            },
            {
                image: require('../assets/category.png'),
                name: 'Product 2',
                price: 10,
                category: 'Category 2',
            },]
        }
    ])
    return (
        <FlatList data={data} renderItem={({ item }) => {
            return (
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    {item.name === "Category" ? item.items.map((item) => {
                        return (
                            <View
                                style={styles.item}>
                                <Text style={{ flex: 1 }}>{item.name}</Text>

                            </View>
                        )
                    }) : item.items.map((item) => {
                        return (
                            <View
                                style={styles.item}>
                                <View style={styles.row}>
                                    <View >
                                        <Image
                                            source={item.image}
                                            style={styles.image}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <View>
                                        <Text>{item.name}</Text>
                                        <Text>{item.price}</Text>
                                        <Text>{item.category}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            )
        }} />
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20, fontWeight: '500', color: 'black', margin: 10
    },
    item: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius:8
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{ height: 75, width: 75, marginRight: 10 }
})
export default ListScreen