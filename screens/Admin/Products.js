import React,{useState,useCallback,useEffect} from "react";
import { View,Text ,StyleSheet,Image,SafeAreaView ,TextInput,Button} from "react-native";
import { TouchableOpacity,ScrollView } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import {useForm, Controller} from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { addDoc, collection, doc, setDoc,onValue,ref, QuerySnapshot} from "firebase/firestore"; 
import { db } from "../../firebase";

const Products =() =>{
  const [Pimage, setImage] = useState('');
  //const[Pid,setID] = useState('');
  const[Pname,setPname] = useState(''); 
  const[Pcategory,setCategory] = useState('');
  const[Price,setPrice] = useState('');

  function add(){
    addDoc(collection(db, "Products"), {
     // Pid: Pid,
      Pname: Pname,
      Price: Price,
      Pcategory:Pcategory,
      Pimage:Pimage
    }).then(()=>{
      //console.log('data added');

    }).catch((error) =>{
      //console.log(error);
    });
  }
  const clickHandler = () => {
    alert("Product Added");
  }
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
      setImage(result.uri);
    }
  };
      const { handleSubmit, control } = useForm();
      const onSubmit = (data) => {
        console.log(data, "data");
      };
      function resetInput()
          {
              setPname({value:''})
              setPrice({value:''})
              setCategory({value:''})
              //setImage({value:''})
              add()
              clickHandler()
          } 
  return(
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <ScrollView>
    <Text style={styles.label}>Name</Text>
      <Controller
        name="name"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={Pname} onChangeText ={(Pname)=> {setPname(Pname)}}
            style={styles.input}
            selectionColor={"#5188E3"}
          />
        )}
      />

      <Text style={styles.label}>Price</Text>
      <Controller
        name="price"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
          value={Price} onChangeText ={(Price)=> {setPrice(Price)}}
          style={styles.input}
          selectionColor={"#5188E3"}
          />
        )}
      />
      <View>
      <Text style={styles.label}>Category</Text>
      <Controller
        name="category"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
          value={Pcategory} onChangeText ={(Pcategory)=> {setCategory(Pcategory)}}
          style={styles.input}
          selectionColor={"#5188E3"}
          />
        )}
      />
      </View>
      <View>
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Add Image" onPress={pickImage} />
      <View style={{backgroundColor:"#000"} }>
      {Pimage && <Image source={{ uri: Pimage }} style={{ width: 200, height: 200 }} />}
      </View>
    </View>
      </View>
      
          {/* <Button style={{marginTop:20}} title="Add Product"onPress={handleSubmit(onSubmit)}></Button> */}
      {/* <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text style={styles.getStarted}> Add Product</Text>
      </TouchableOpacity> */}

          </ScrollView>
          <Button title="Add Product"
          activeOpacity={0.7}
          onPress={resetInput}
          style={styles.touchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={{
              uri:
                '/Users/rohanghevariya/Desktop/Ecommerce/assets/plus.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.floatingButtonStyle}
          />
        </Button>
        </View>
        
      </SafeAreaView>
    )
}
export default Products;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    titleStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    textStyle: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },
    touchableOpacityStyle: {
      bposition: 'absolute',
      width: 50,
      height: 50,
      left: 150,
      bottom: 20,
    },
    floatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      //backgroundColor:'black'
    },
    input: {
      borderStyle: "solid",
      borderColor: "#B7B7B7",
      borderRadius: 7,
      borderWidth: 1,
      fontSize: 15,
      height: 50,
      marginHorizontal: 10,
      paddingStart: 10,
      marginBottom: 15,
    },
    label: {
      marginBottom: 7,
      marginStart: 10,
    },
    placeholderStyles: {
      color: "grey",
    },
    dropdownGender: {
      marginHorizontal: 10,
      width: "50%",
      marginBottom: 15,
      backgroundColor:"#fff"
    },
    dropdownCompany: {
      marginHorizontal: 10,
      marginBottom: 15,
    },
    dropdown: {
      borderColor: "#B7B7B7",
      height: 50,
    },
    getStarted: {
      backgroundColor: "#5188E3",
      color: "white",
      textAlign: "center",
      marginHorizontal: 60,
      paddingVertical: 15,
      borderRadius: 50,
      marginTop: 200,
    },
    logIn: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: 10,
    },
    links: {
      textAlign: "center",
      textDecorationLine: "underline",
      color: "#758580",
    },
  });
  
  