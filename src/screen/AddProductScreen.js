import React, { useState,useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    Button,
    Dimensions,
    Image,
    TouchableOpacity,
    Modal,
    StyleSheet
} from 'react-native';
import { addDoc, collection, doc, setDoc,onValue,ref, QuerySnapshot} from "firebase/firestore"; 
import { db } from '../../firebase';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddProductScreen = () => {
    const [data, setData] = useState([]);
    const [image, setImage] = useState('')
    const [price, setPrice] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("Select Category");
    const [isCatOpen, setIsCatOpen] = useState(false)
    const [index, setIndex] = useState(null);
    const [open, setOpen] = useState(false)
    const catList = ["Hatchback", "Sedan", "SUV","Van"]


  const add = async (cate) => {
    const jsonValue = JSON.stringify(cate)
    await AsyncStorage.setItem('Image', jsonValue);
    await AsyncStorage.setItem('Name', jsonValue);
    await AsyncStorage.setItem('Price', jsonValue);
    await AsyncStorage.setItem('Category', jsonValue);
    console.log("JSON",jsonValue)
  }

  const getData = async () => {
    try {
      const img = await AsyncStorage.getItem('Image')
      const name = await AsyncStorage.getItem('Name')
      const price = await AsyncStorage.getItem('Price')
      const cat = await AsyncStorage.getItem('Category')
      if(img && name && price && cat !== null) {
        setData(JSON.parse(img && name &&price && cat))
        console.log(img);
      }
    } catch(e) {
      // error reading value
    }
  }
  
  useEffect(()=>{
    getData();
  },[])

    // function add(){
    //     addDoc(collection(db, "Products"), {
    //      // Pid: Pid,
    //       name: name,
    //       price: price,
    //       category:category,
    //       image:image
    //     }).then(()=>{
    //       //console.log('data added');
    
    // //     }).catch((error) =>{
    // //       //console.log(error);
    // //     });
    // //   }
    const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage({uri :result.uri});
    }
  };
  function AddData(){
   
    if (image.length === 0){
        alert("Please Upload Image")
    } else if (name.length === 0) {
        alert("Please Enter Product Name")
    } else if (price.length === 0) {
        alert("Please Enter Product Price")
    } else if (category.length === 0) {
        alert("Please Enter Product Category")
    } else {
        setOpen(false)
        if (index === null) {
            const product = {
                name: name,
                price: price,
                category: category,
                image: image
            }
            const newCategory = [...data, product];
            setData(newCategory);
            setCategory('');
            setName('')
            setPrice('')
            setImage('')
            setIndex(null)
            add(newCategory);
        } else {
            
            const updateData = data.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        name: name,
                        price: price,
                        category: category,
                        image: image
                    };
                } else {
                    return {
                        ...item,
                    };
                }
            });
            setData(updateData);
            setCategory('');
            setName('')
            setPrice('')
            setImage('')
            setIndex(null);
            
        }
    }
  }
    return (
        <>
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={styles.main}>
                            <View style={styles.row}>
                                <View >
                                    <Image
                                        source={item.image}
                                        style={styles.itemImage}
                                        resizeMode="contain"
                                    />
                                </View>
                                <View>
                                    <Text>{item.name}</Text>
                                    <Text>{item.price}</Text>
                                    <Text>{item.category}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <Button
                                    title="Edit"
                                    onPress={() => {
                                        
                                        setIndex(index);
                                        setImage(item.image)
                                        setName(item.name)
                                        setPrice(`${item.price}`)
                                        setCategory(item?.category)
                                        setOpen(true)
                                    }}
                                />
                                <View style={{ marginHorizontal: 5 }} />
                                <Button
                                    title="Delete"
                                    onPress={() => {
                                        const deleteCategory = data.filter(
                                            i => i.name !== item.name,
                                        );
                                        setData(deleteCategory);
                                        setIndex(null);
                                    }}
                                />
                            </View>
                        </View>

                    );
                }}
                style={{ height: Dimensions.get('window').height }}
            />
            <View style={styles.buttonView}>


                <Button
                    onPress={() => {
                        setOpen(true)

                    }}
                    title="Add Product"
                />
                <Modal visible={open}>
                    <View style={styles.modalView}>
                        <View style={{ width: '100%' }} >
                            <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
                                <Button title='Close' onPress={() => setOpen(false)} />
                            </View>
                            <TouchableOpacity
                                style={styles.buttonImage}
                                onPress={pickImage}>
                                <Image source={image.uri ? { uri: image.uri } : ""} style={{ height: 70, width: 70, borderRadius: 70 / 2 }} resizeMode='cover' />
                            </TouchableOpacity>
                            <TextInput
                                value={name}
                                onChangeText={text => setName(text)}
                                placeholder="Name"
                                style={styles.input}
                            />
                            <TextInput
                                value={price}
                                onChangeText={text => setPrice(text)}
                                placeholder="Price"
                                defaultValue='$'
                                style={styles.input}
                            />
                            <TouchableOpacity onPress= {() => setIsCatOpen(isCatOpen ? false : true)} style={[styles.input,{justifyContent:'center',margin:0,marginHorizontal:10,borderBottomWidth:isCatOpen ? 0.1 :null}]}>
                            <Text>{category}</Text>
                           
                            </TouchableOpacity>
                            {isCatOpen && <View style={{borderWidth: 0.5,borderTopWidth:0, paddingLeft: 5,marginHorizontal:20,marginTop:-2 }}>
                              {catList?.map((item) => {
                              return (<Text style={{margin:10}} onPress = {() => {
                                setIsCatOpen(false)
                                setCategory(item)}}>{item}</Text>)
                            })}
                            </View> }
                            <TouchableOpacity
                                style={styles.addProductButton} onPress={AddData}>
                                {/* <Button title='Add' onPress={() => setOpen(false)} /> */}
                                <Text style={{ color: 'white' }}>Add Product</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    main: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        elevation: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemImage: { height: 75, width: 75, marginRight: 10 },
    buttonView: { alignItems: 'center', padding: 20 },
    modalView: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    buttonImage: { alignSelf: 'center', height: 70, width: 70, borderWidth: 1, borderRadius: 70 / 2, alignItems: 'center', justifyContent: 'center' },
    input: { borderWidth: 0.5, paddingLeft: 5, margin: 10, height: 40, borderRadius: 10 },
    addProductButton: { alignItems: 'center', marginTop: 10, backgroundColor: 'skyblue', width: 150, alignSelf: 'center', height: 50, justifyContent: 'center' }
})
export default AddProductScreen;