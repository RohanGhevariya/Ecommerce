import React, { useState,useEffect } from "react";
import { FlatList, View, Text, Image, StyleSheet,SafeAreaView,Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import {BarChart} from "react-native-chart-kit"

const ListScreen = () => {
    const [data, setData] = useState([
        {
            name: "Category",
            items: []
        },
        {
            name: "Products",
            items: []
        }
    ])
    useEffect(() => {
      getData();
    }, [])
    const getData = async () => {
      const cat = await AsyncStorage.getItem('Categories');
      setData(JSON.parse(cat))
    }
    return (
        <SafeAreaView style={styles.container}>
             <View style={{
            justifyContent:'center',
            alignContent:'center',
            flex:1
        }}>
             <ScrollView
            showsVerticalScrollIndicator ={false}
            style={{height:400}}>
                 <Text style={styles.header}>Categories</Text>
                       <FlatList data={data} renderItem={({ item }) => {
            console.log("item",item)
            return (
                <View>
                   
                    <Text style={styles.item}>{item?.name}</Text>
                    {item.name === "Category" ? item.items?.map((item) => {
                         return (
                            <View
                                style={styles.item}>
                                <Text style={{ flex: 1 }}>{item?.name}</Text>

                            </View>
                        )
                    }) : item.items?.map((item) => {
                        // return (
                        //     // <View
                        //     //     style={styles.item}>
                        //     //     <View style={styles.row}>
                        //     //         <View >
                        //     //             <Image
                        //     //                 source={item?.image}
                        //     //                 style={styles.image}
                        //     //                 resizeMode="contain"
                        //     //             />
                        //     //         </View>
                        //     //         <View>
                        //     //             <Text>{item.name}</Text>
                        //     //             <Text>{item.price}</Text>
                        //     //             <Text>{item.category}</Text>
                        //     //         </View>
                        //     //     </View>
                        //     // </View>
                        // )
                    })}
                </View>
            )
        }} />
            <View style={{
                flex:1,
                alignContent:"center",
                justifyContent:"center",
                 
            }}>
            <Text style={styles.header}>Weekly States</Text>
      <BarChart
        data={{
          labels: ['1-7', '8-14', '15-21', '22-29'],
          datasets: [
            {
              data: [200, 400, 250, 100],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={200}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical:8,
          borderRadius: 16,
        }}
      />
      </View>
      <View style={{
                 paddingHorizontal:10,
                 width:"100%",
                 alignItems:"center",
                 
            }}>
            <Text style={styles.header}>Monthly States</Text>
      <BarChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [1220, 4500, 2800, 880, 999, 4300],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={200}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical:8,
          borderRadius: 16,
        }}
      />
      </View>
    

          </ScrollView>
        </View>
        </SafeAreaView>
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
      },
      header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
        marginTop: 16,
      },
    title: {
        fontSize: 20, fontWeight: '500', color: 'black', margin: 10,
    },
    item: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius:8
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{ height: 75, width: 75, marginRight: 10 }
})
export default ListScreen