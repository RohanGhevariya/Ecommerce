import React, { useState } from 'react';
import { Image, Text, Button, FlatList, View, TouchableOpacity, StyleSheet } from 'react-native';
import { or } from 'react-native-reanimated';
import { useSelector } from 'react-redux'

const StatusScreen = () => {
  const orders = useSelector(state => state.OrderReducers);
  const cartData = useSelector(state => state.reducers);
  console.log('adminoder', orders);
  const getTotal = () => {
    let tempTotal = 0;
    cartData.map((item) => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };
  const [data, setData] = useState([
    {
      image: require('../assets/category.png'),
      name: 'Product 1',
      price: 10,
      category: 'Category 1',
      status: 'Pending',
    },
    {
      image: require('../assets/category.png'),
      name: 'Product 1',
      price: 10,
      category: 'Category 1',
      status: 'Pending',
    },
  ]);
  return (
    <FlatList
            data={orders}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    width: '100%',
                    borderWidth: 0.5,
                    justifyContent: 'center',
                    borderColor: '#8e8e8e',
                  }}>
                  {item.items.map(item1 => {
                    return (
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          alignItems: 'center'
                        }}>
                        <Image
                          source={item1.image}
                          style={{
                            width: 50,
                            height: 50,
                            marginTop: 10,
                            marginLeft: 20,
                            marginBottom: 10,
                          }}
                        />
                        <Text style={{
                          marginLeft: 20, fontSize: 18
                        }}>
                          {item1.name}
                        </Text>
                      </View>
                    );
                  })}
                  <View style={{
                    alignContent: 'space-between',
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                    <Text style={{
                      marginLeft: 20,
                      fontWeight: '600',
                      fontSize: 15
                    }}>
                      {'Total: ' + getTotal()}
                    </Text>
                    <Text style={{
                      marginLeft: 150,
                      fontWeight: '600',
                      fontSize: 15
                    }}>
                      {'Status: Pending'}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
    // <FlatList
    //   data={orders}
    //   renderItem={({ item, index }) => {
    //     {
    //       item.items.map(item1 => {
    //         return (
    //           <View style={styles.container}>
    //             <View
    //               style={styles.main}>
    //               <View style={styles.view1}>
    //                 <View >
    //                   <Image
    //                     source={item1.image}
    //                     style={styles.image}
    //                     resizeMode="contain"
    //                   />
    //                 </View>
    //                 <View>
    //                   <Text style={styles.nameText}>{item1.name}</Text>
    //                   <Text style={{ fontSize: 15 }}>$ {getTotal()}</Text>
    //                   {/* <Text style ={{color:'gray',fontWeight:'500'}}>{item.category}</Text> */}
    //                 </View>
    //               </View>
    //               <View>
    //                 <View style={styles.buttonContainerView}>
    //                   <TouchableOpacity
    //                     onPress={() => {
    //                       console.log(index)
    //                       const datas = orders.map((i, ind) => {
    //                         if (index === ind) {
    //                           return {
    //                             ...i,
    //                             status: "Pending"
    //                           }
    //                         } else {
    //                           return {
    //                             ...i
    //                           }
    //                         }
    //                       })
    //                       console.log(datas)
    //                       setData(datas)
    //                     }}>
    //                     <Text style={{ color: 'red' }}>Pending </Text>
    //                   </TouchableOpacity>
    //                   <TouchableOpacity onPress={() => {
    //                     console.log(index)
    //                     const datas = orders.map((i, ind) => {
    //                       if (index === ind) {
    //                         return {
    //                           ...i,
    //                           status: "Completed"
    //                         }
    //                       } else {
    //                         return {
    //                           ...i
    //                         }
    //                       }
    //                     })
    //                     console.log(datas)
    //                     setData(datas)
    //                   }}>
    //                     <Text style={{ color: 'blue' }}>Completed</Text>
    //                   </TouchableOpacity>
    //                 </View>
    //                 <View style={{
    //                   flexDirection: 'row',
    //                   alignItems: 'center',
    //                   justifyContent: 'space-around',

    //                 }}>
    //                   <TouchableOpacity onPress={() => {
    //                     console.log(index)
    //                     const datas = orders.map((i, ind) => {
    //                       if (index === ind) {
    //                         return {
    //                           ...i,
    //                           status: "Shipment"
    //                         }
    //                       } else {
    //                         return {
    //                           ...i
    //                         }
    //                       }
    //                     })
    //                     console.log(datas)
    //                     setData(datas)
    //                   }}>
    //                     <Text style={{ color: 'green' }}>Shipment </Text>
    //                   </TouchableOpacity>
    //                   <TouchableOpacity onPress={() => {
    //                     console.log(index)
    //                     const datas = orders.map((i, ind) => {
    //                       if (index === ind) {
    //                         return {
    //                           ...i,
    //                           status: "Shippted"
    //                         }
    //                       } else {
    //                         return {
    //                           ...i
    //                         }
    //                       }
    //                     })
    //                     console.log(datas)
    //                     setData(datas)
    //                   }}>
    //                     <Text style={{ color: "gary" }}>Shippted</Text>
    //                   </TouchableOpacity>
    //                 </View>
    //               </View>

    //             </View>

    //             <View style={styles.line} />
    //             <Text style={styles.statusText}>{item1.status.toUpperCase()}</Text>
    //           </View>
    //         );
    //       })
    //     }
    //   }}
    // />

  );
};
const styles = StyleSheet.create({
  line: { height: 1, backgroundColor: 'gary', marginBottom: 10 },
  statusText: { fontSize: 15, color: 'gary', fontWeight: '500' },
  container: {
    padding: 10,
    backgroundColor: 'white',
    elevation: 10,
    margin: 10,
    borderRadius: 10
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 75,
    width: 75,
    marginRight: 10
  },
  buttonContainerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  nameText: { fontSize: 17, color: 'black', fontWeight: '500' }
})
export default StatusScreen;
