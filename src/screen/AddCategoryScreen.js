import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addDoc, collection, doc, setDoc,onValue,ref, QuerySnapshot} from "firebase/firestore"; 
import { db } from '../../firebase';

const AddCategoryScreen = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  const [index, setIndex] = useState(null);
  const add = async () => {
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem('Categories', jsonValue);
  }


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Categories')
      if(value !== null) {
        console.log(value);
      }
    } catch(e) {
      // error reading value
    }
  }
  
  useEffect(()=>{
    getData();
  },[setCategory])

  
  // function add(){
  //   addDoc(collection(db, "Categories"), {
  //     category:category,
      
  //   }).then(()=>{
  //     //console.log('data added');

  //   }).catch((error) =>{
  //     //console.log(error);
  //   });
  // }
  function addCat(){
    if (index === null) {
      const newCategory = [...data, {name: category}];
      setData(newCategory);
      setCategory('');
      add();
     
    } else {
      const updateData = data.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            name: category,
          };
          
        } else {
          return {
            ...item,
          };
        }
      });
      setData(updateData);
      setCategory('');
      setIndex(null);
    }
  }

  return (
    <>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View
              style={styles.itemView}>
              <Text style={styles.categoryText}>{item.name}</Text>
              <View style={styles.buttonView}>
                <Button
                  title="Edit"
                  onPress={() => {
                    setIndex(index);
                    setCategory(item.name);
                  }}
                />
                <View style={{marginHorizontal:5}}/>
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
        style={{height: Dimensions.get('window').height}}
      />
      <View style={styles.addCatView}>
        <TextInput
          value={category}
          onChangeText={text => setCategory(text)}
          placeholder="Add Category"
          style={styles.input}
        />
        <Button
          onPress={addCat}
          title="Add"
        />
      </View>
      <SafeAreaView />  
    </>
  );
};
const styles = StyleSheet.create({
  input:{flex: 1, borderWidth: 0.5, marginRight: 5, paddingLeft: 10,height:40,borderRadius:8},
  addCatView:{flexDirection: 'row', padding: 10, alignItems:'center'},
  itemView:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    elevation:10,
    margin:10,
    borderRadius:8,
    backgroundColor:'white'
  },
  categoryText:{flex: 1,fontSize:17},
  buttonView:{flexDirection: 'row', alignItems: 'center'}
})
export default AddCategoryScreen;
