import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import { Products } from '../Products'
import ProductItem from '../Common/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../redux/actions/Actions'

const Main = () => {
    const dispatch = useDispatch();
    const [categoryList, setcategoryList] = useState([]);
    const [HatchbackList, setHatchbackList] = useState([]);
    const [SedanList, setSedanList] = useState([]);
    const [SUVList, setSUVList] = useState([]);
    useEffect(() => {
        let categories = [];
        Products.category.map(item => {
            categories.push(item.category);
        });
        setHatchbackList(Products.category[0].data);
        setSedanList(Products.category[1].data);
        setSUVList(Products.category[2].data);
        setcategoryList(categories);
        //console.log(JSON.stringify(Products.category[1]));
    }, []);

    // const items = useSelector(state => state);
    // console.log(items);

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: '#fff',
            height: 400
        }}>
            <View
                style={{ flex: 1 }}>
                <Header />

                <View style={{
                    backgroundColor: "#ebe9e4",
                    paddingVertical: 8,
                    paddingHorizontal: 10,
                    marginHorizontal: 10,
                    borderRadius: 15,
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                }} >
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#000"
                        style={{
                            fontWeight: '600',
                            fontSize: 18,
                            width: '94%'
                        }}
                    />
                    <Image
                        source={require('../images/search.png')}
                        style={{ height: 20, width: 20, }}
                    >
                    </Image>
                </View>


                <Image
                    source={require('../images/banner.jpeg')}
                    style={{
                        with: '95%',
                        height: 200,
                        alignSelf: 'center',
                        borderRadius: 10,
                        marginTop: 10,
                    }}
                />
                <View style={{
                    marginTop: 20,
                }}
                >
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categoryList}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    style={{
                                        height: 40,
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#000',
                                            marginLeft: 10,
                                            marginRight: 10,

                                        }}
                                    >{item}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 18,
                        marginLeft: 20,
                        fontWeight: '600',
                        color: '#000'
                    }}>
                    New Hatchbacks</Text>
                <View style={{
                    marginTop: 15,
                }}
                >
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={HatchbackList}
                        renderItem={({ item, index }) => {
                            return <ProductItem item={item} onAddToCart={(x) => {
                                dispatch(addItemToCart(x));
                            }} />;
                        }}
                    />
                </View>
                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 18,
                        marginLeft: 20,
                        fontWeight: '600',
                        color: '#000'
                    }}>
                    New Sedans</Text>
                <View style={{
                    marginTop: 15,
                }}
                >
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={SedanList}
                        renderItem={({ item, index }) => {
                            return <ProductItem item={item} onAddToCart={(x) => {
                                dispatch(addItemToCart(x));
                            }} />;
                        }}
                    />
                </View>
                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 18,
                        marginLeft: 20,
                        fontWeight: '600',
                        color: '#000'
                    }}>
                    New SUVs </Text>
                <View style={{
                    marginTop: 15,
                }}
                >
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={SUVList}
                        renderItem={({ item, index }) => {
                            return <ProductItem item={item} onAddToCart={(x) => {
                                dispatch(addItemToCart(x));
                            }} />;
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default Main