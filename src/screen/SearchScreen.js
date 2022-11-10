import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";

const SearchScreen =  () => {
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
    const [filterData,setFilterData] = useState([])
    return (
        <View>
            <TextInput placeholder="Search Customer" value={search} onChangeText={(text) => {
                setSearch(text)
                const filter = data.filter(item => item.name.toUpperCase().match(search.toUpperCase()) )
                setFilterData(filter)
                 
            }} style={styles.searchBar}/>
            <FlatList 
            data = {search.length === 0 ? data :filterData}
            keyboardShouldPersistTaps='handled' 
            renderItem ={({item,index}) => {
                return (
                    <View
                        style={styles.main}>
                        
                            <View >
                                <Image
                                    source={item.image}
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            </View>
                            <View>
                                <Text>Name: {item.name}</Text>
                                <Text>Age :{item.age}</Text>
                                <Text>Email: {item.email}</Text>
                            </View>
                        
                    </View>

                );
            } }/>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius:8,
        flexDirection: 'row',
                            alignItems: 'center',
    },
    image:{ height: 75, width: 75, marginRight: 10 },
    searchBar:{margin:10, borderRadius:10,borderWidth:0.5,paddingLeft:10,height:40}
})
export default SearchScreen