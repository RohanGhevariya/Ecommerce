import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from 'react-redux'

const SearchScreen = () => {
    const cartData = useSelector(state => state.reducers);
    const orders = useSelector(state => state.OrderReducers);
    const getTotal = () => {
        let tempTotal = 0;
        cartData.map((item) => {
          tempTotal = tempTotal + item.price;
        });
        return tempTotal;
      };
    const [data, setData] = useState([{
        image: require('../assets/category.png'),
        name: 'Customer 1',
        age: 10,
        email: 'Category1@gmail.com',
    },
    {
        image: require('../assets/category.png'),
        name: 'Product 2',
        age: 10,
        email: 'Product2@gmail.com',
    }])
    const [search, setSearch] = useState("")
    const [filterData, setFilterData] = useState([])
    return (
        <View>
            <TextInput placeholder="Search Customer" value={search} onChangeText={(text) => {
                setSearch(text)
                const filter = orders.filter(item => item.name.toUpperCase().match(search.toUpperCase()))
                setFilterData(filter)

            }} style={styles.searchBar} />

            <FlatList
                data={orders}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: '100%',
                                borderWidth: 0.5,
                                justifyContent: 'center',
                                borderColor: '#8e8e8e',
                            }}>
                            {item.items.map(item1 => {
                                return (
                                    <View
                                        style={{
                                            width: '100%',
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                        <Image
                                            source={item1.image}
                                            style={{
                                                width: 50,
                                                height: 50,
                                                marginTop: 10,
                                                marginLeft: 20,
                                                marginBottom: 10,
                                            }}
                                        />
                                        <Text style={{
                                            marginLeft: 20, fontSize: 18
                                        }}>
                                            {item1.name}
                                        </Text>
                                    </View>
                                );
                            })}
                            <View style={{
                                alignContent: 'space-between',
                                flexDirection: 'row',
                                marginBottom: 10,
                            }}>
                                <Text style={{
                                    marginLeft: 20,
                                    fontWeight: '600',
                                    fontSize: 15
                                }}>
                                    {'Total: ' + getTotal()}
                                </Text>
                                <Text style={{
                                    marginLeft: 150,
                                    fontWeight: '600',
                                    fontSize: 15
                                }}>
                                    {'Status: Pending'}
                                </Text>
                            </View>
                        </View>
                    );
                }}
            />


        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: { height: 75, width: 75, marginRight: 10 },
    searchBar: { margin: 10, borderRadius: 10, borderWidth: 0.5, paddingLeft: 10, height: 40 }
})
export default SearchScreen