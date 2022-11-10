import React from "react";
import { View,Text,Image,ImageBackground,Button } from "react-native";
import { TextInput,ScrollView,TouchableOpacity } from "react-native-gesture-handler";
import {LinearGradient} from 'expo-linear-gradient';

const AdminHome =({navigation}) =>{
    return(
        <View style={{
        backgroundColor:'#eff3ff',
            flex:1
        }}>
                <View style={{
                    backgroundColor:"#fff",
                    paddingVertical:8,
                    paddingHorizontal:20,
                    marginHorizontal:20,
                    borderRadius:15,
                    marginTop:10,
                    flexDirection:"row",
                    alignItems:"center"
                }} >
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#b1e5d3"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:260
                        }}
                    />
                        <Image
                        source={require('/Users/rohanghevariya/Desktop/Ecommerce/src/images/search.png')}
                        style={{height:20,width:20}}
                        >
                        </Image>
                </View>
                <View style={{
                    flexDirection:"row",
                    paddingHorizontal:20,
                    width:"100%",
                    alignItems:"center",
                    marginTop:10
                }}>
                    <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:20,
                            color:"#585a61"
                        }}>Recommended</Text>

                    </View>
                    <View style={{width:"50%", alignItems:"flex-end"}}>
                       <Button title="More"/>
                        
                    </View>
                </View>

                <ScrollView
                 horizontal
                 showsHorizontalScrollIndicator ={false}
                 style={{height:400}}
                >
                    <LinearGradient
                        colors={["rgba(0.164,109,0.09)","transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    />
                    <TouchableOpacity
                    onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:200,
                        elevation:2,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        marginTop:20,
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/src/images/camry.jpg')}
                            style={{height:150, width:200}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Toyota Cambry</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>Sedan</Text>
                        </View>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#b1e5d3",
                                paddingTop:5,
                            }}>$1000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:200,
                        elevation:2,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        
                        marginTop:20,
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/src/images/camry.jpg')}
                            style={{height:150, width:200}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Toyota Cambry</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>Sedan</Text>
                        </View>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#b1e5d3",
                                paddingTop:5,
                            }}>$1000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:200,
                        elevation:2,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        marginRight:10,
                        marginTop:20,
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/src/images/camry.jpg')}
                            style={{height:150, width:200}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Toyota Cambry</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>Sedan</Text>
                        </View>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#b1e5d3",
                                paddingTop:5,
                            }}>$1000</Text>
                    </TouchableOpacity>
                    
                </ScrollView>

                <View style={{
                    flexDirection:"row",
                    paddingHorizontal:20,
                    width:"100%",
                    alignItems:"center",
                    marginTop:10
                }}>
                    <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:22,
                            color:"#585a61"
                        }}>Featured</Text>

                    </View>
                    <View style={{width:"50%", alignItems:"flex-end"}}>
                        <Button title="More"/>
                    </View>
                </View>
                <ScrollView
                 horizontal
                 showsHorizontalScrollIndicator ={false}
                 style={{height:400}}
                >
                    <LinearGradient
                        colors={["rgba(0.164,109,0.09)","transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    />
                    <TouchableOpacity
                    onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:250,
                        elevation:2,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        marginTop:20,
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/src/images/camry.jpg')}
                            style={{height:150, width:200}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Toyota Cambry</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>Sedan</Text>
                        </View>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#b1e5d3",
                                paddingTop:5,
                            }}>$1000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:250,
                        elevation:2,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        
                        marginTop:20,
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/src/images/camry.jpg')}
                            style={{height:150, width:200}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Toyota Cambry</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>Sedan</Text>
                        </View>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#b1e5d3",
                                paddingTop:5,
                            }}>$1000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:250,
                        elevation:2,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        marginRight:10,
                        marginTop:20,
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/src/images/camry.jpg')}
                            style={{height:150, width:200}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Toyota Cambry</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>Sedan</Text>
                        </View>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#b1e5d3",
                                paddingTop:5,
                            }}>$1000</Text>
                    </TouchableOpacity>
                    
                </ScrollView>
        </View>
    )
}
export default AdminHome;