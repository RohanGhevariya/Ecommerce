import React from "react";
import { View,Text,Image,StyleSheet } from "react-native";
import { TouchableOpacity,ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import{Icon} from "react-native-vector-icons";
import { FloatingAction } from "react-native-floating-action";

const Orders =({navigation}) =>{

    return(
        <View style={{
           backgroundColor:"FFF",
            flex:1
        }}>
            <ScrollView
            showsVerticalScrollIndicator ={false}
            style={{height:400}}>
                <TouchableOpacity
                    onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:100,
                        elevation:2,
                        marginTop:10,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        borderRadius:15,
                        marginBottom:10,
                        width:370
                    }}>
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
                             <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$1000</Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10
                                
                            }}>Name: Marcous Stoines</Text>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10,
                                paddingLeft:50
                            }}>Date: 27/09/2022</Text>
                                              
                       </View>
                       <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:5
                                
                            }}>Status: Dispatched</Text>
                        </View>
                        

                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:100,
                        elevation:2,
                        marginTop:10,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        borderRadius:15,
                        marginBottom:10,
                        width:370
                    }}>
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
                             <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$1000</Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10
                                
                            }}>Name: Marcous Stoines</Text>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10,
                                paddingLeft:50
                            }}>Date: 27/09/2022</Text>
                                              
                       </View>
                       <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:5
                                
                            }}>Status: Dispatched</Text>
                        </View>
                        

                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:100,
                        elevation:2,
                        marginTop:10,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        borderRadius:15,
                        marginBottom:10,
                        width:370
                    }}>
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
                             <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$1000</Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10
                                
                            }}>Name: Marcous Stoines</Text>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10,
                                paddingLeft:50
                            }}>Date: 27/09/2022</Text>
                                              
                       </View>
                       <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:5
                                
                            }}>Status: Dispatched</Text>
                        </View>
                        

                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:100,
                        elevation:2,
                        marginTop:10,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        borderRadius:15,
                        marginBottom:10,
                        width:370
                    }}>
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
                             <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$1000</Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10
                                
                            }}>Name: Marcous Stoines</Text>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10,
                                paddingLeft:50
                            }}>Date: 27/09/2022</Text>
                                              
                       </View>
                       <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:5
                                
                            }}>Status: Dispatched</Text>
                        </View>
                        

                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:100,
                        elevation:2,
                        marginTop:10,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        borderRadius:15,
                        marginBottom:10,
                        width:370
                    }}>
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
                             <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$1000</Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10
                                
                            }}>Name: Marcous Stoines</Text>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10,
                                paddingLeft:50
                            }}>Date: 27/09/2022</Text>
                                              
                       </View>
                       <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:5
                                
                            }}>Status: Dispatched</Text>
                        </View>
                        

                    </TouchableOpacity>
                    <TouchableOpacity
                    //onPress={() =>navigation.navigate("Products")}
                    style={{
                        height:100,
                        elevation:2,
                        marginTop:10,
                        backgroundColor:"#FFF",
                        marginLeft:10,
                        borderRadius:15,
                        marginBottom:10,
                        width:370
                    }}>
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
                             <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:35
                            }}>$1000</Text>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10
                                
                            }}>Name: Marcous Stoines</Text>
                        <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:10,
                                paddingLeft:50
                            }}>Date: 27/09/2022</Text>
                                              
                       </View>
                       <View style={{
                            flexDirection:"row",
                            paddingTop:5
                        }}>
                            <Text style={{
                                paddingHorizontal:10,
                                fontWeight:"bold",
                                color:"#00a46c",
                                marginTop:5
                                
                            }}>Status: Dispatched</Text>
                        </View>
                        

                    </TouchableOpacity>

                    

            </ScrollView>

          
        </View>
    )
}
export default Orders;
