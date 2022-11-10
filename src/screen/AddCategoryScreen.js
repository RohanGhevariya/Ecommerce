import React, {useState} from 'react';
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

const AddCategoryScreen = () => {
  const [data, setData] = useState([{name: 'Category 1'},{name: "Category 2"}]);
  const [category, setCategory] = useState('');
  const [index, setIndex] = useState(null);
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
          onPress={() => {
            if (index === null) {
              const newCategory = [...data, {name: category}];
              setData(newCategory);
              setCategory('');
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
          }}
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
