import React from "react";
import { View,Text,Image,ImageBackground,Button } from "react-native";
import { TextInput,ScrollView,TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {LinearGradient} from 'expo-linear-gradient';

const Categories =() =>{
    return(
        <View style={{
            justifyContent:'center',
            alignContent:'center',
            flex:1
        }}>
            <ScrollView 
                             showsVerticalScrollIndicator ={false}
                             style={{height:400}}>

                <View style={{
                    flexDirection:"row",
                    paddingHorizontal:10,
                    width:"100%",
                    alignItems:"center",
                    marginTop:10
                }}>
                    <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:20,
                            color:"#585a61"
                        }}>Sedan</Text>

                    </View>
                    <View style={{width:"50%", alignItems:"flex-end"}}>
                       <Button title="More" onPress={() => this.navigation.navigate("Products")}/>
                        
                    </View>
                </View>

                <ScrollView
                 horizontal
                 showsHorizontalScrollIndicator ={false}
                 style={{height:210}}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                
                }}>
                    <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:22,
                            color:"#585a61"
                        }}>Heachback</Text>

                    </View>
                    <View style={{width:"50%", alignItems:"flex-end"}}>
                        <Button title="More"/>
                    </View>
                </View>
                <ScrollView
                 horizontal
                 showsHorizontalScrollIndicator ={false}
                 style={{height:220}}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                
                }}>
                    <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:22,
                            color:"#585a61"
                        }}>Minivan</Text>

                    </View>
                    <View style={{width:"50%", alignItems:"flex-end"}}>
                        <Button title="More"/>
                    </View>
                </View>
                <ScrollView
                 horizontal
                 showsHorizontalScrollIndicator ={false}
                 style={{height:210}}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                
                }}>
                    <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:22,
                            color:"#585a61"
                        }}>SUV</Text>

                    </View>
                    <View style={{width:"50%", alignItems:"flex-end"}}>
                        <Button title="More"/>
                    </View>
                </View>
                <ScrollView
                 horizontal
                 showsHorizontalScrollIndicator ={false}
                 style={{height:210}}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                        borderRadius:15,
                        marginBottom:10,
                        width:200
                    }}>
                        
                        <Image
                            source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.jpeg')}
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
                
                </ScrollView>
        </View>
    )
}
export default Categories;