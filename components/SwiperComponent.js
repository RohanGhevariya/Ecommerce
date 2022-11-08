import React from "react";
import { Image,StyleSheet,Text,View } from "react-native";
import Swiper from "react-native-swiper";

const SwiperComponenet = () =>{
    return(
        <Swiper
        style={StyleSheet.wrapper}
        dotStyle={{
            marginTop:-200,
            width:15,
            height:5,
            borderRadius:10,
            backgroundColor:"#FFF",
        }}
        activeDotColor="#FFF"
        activeDotStyle={{
            marginTop:-200,
            width:30,
            height:6,
            borderRadius:10,
            backgroundColor:"#FFF",
            activeDotColor:"#FFF"
        }}
        >
            <View style={StyleSheet.slide}>
                <Image
                    source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.png')}
                    style={{
                        marginLeft:120,
                        marginBottom:130,
                        height:720,
                        width:420,
                        marginTop:60,
                        resizeMode:"stretch"
                    }}
                ></Image>
            </View>
            <View style={StyleSheet.slide}>
                <Image
                    source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.png')}
                    style={{
                        marginLeft:120,
                        marginBottom:130,
                        height:720,
                        width:420,
                        marginTop:60,
                        resizeMode:"stretch"
                    }}
                ></Image>
            </View>
            <View style={StyleSheet.slide}>
                <Image
                    source={require('/Users/rohanghevariya/Desktop/Ecommerce/assets/camry.png')}
                    style={{
                        marginLeft:120,
                        marginBottom:130,
                        height:720,
                        width:420,
                        marginTop:60,
                        resizeMode:"stretch"
                    }}
                ></Image>
            </View>
        </Swiper>
    )
}
const styles= StyleSheet.create({
    wrapper:{},
    slide:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF"
    }
})
export default SwiperComponenet;
