import React, { useState } from 'react';
import { Image, Text, Button, FlatList, View, TouchableOpacity, StyleSheet } from 'react-native';

const StatusScreen = () => {
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
      data={data}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.container}>
            <View
              style={styles.main}>
              <View style={styles.view1}>
                <View >
                  <Image
                    source={item.image}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
                <View>
                  <Text style={styles.nameText}>{item.name}</Text>
                  <Text style={{ fontSize: 15 }}>$ {item.price}</Text>
                  <Text style ={{color:'gray',fontWeight:'500'}}>{item.category}</Text>

                </View>
              </View>
              <View>
                <View style={styles.buttonContainerView}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log(index)
                      const datas = data.map((i, ind) => {
                        if (index === ind) {
                          return {
                            ...i,
                            status: "Pending"
                          }
                        } else {
                          return {
                            ...i
                          }
                        }
                      })
                      console.log(datas)
                      setData(datas)
                    }}>
                    <Text style={{ color: 'red' }}>Pending </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    console.log(index)
                    const datas = data.map((i, ind) => {
                      if (index === ind) {
                        return {
                          ...i,
                          status: "Completed"
                        }
                      } else {
                        return {
                          ...i
                        }
                      }
                    })
                    console.log(datas)
                    setData(datas)
                  }}>
                    <Text style={{ color: 'blue' }}>Completed</Text>
                  </TouchableOpacity>
                </View>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',

                }}>
                  <TouchableOpacity onPress={() => {
                    console.log(index)
                    const datas = data.map((i, ind) => {
                      if (index === ind) {
                        return {
                          ...i,
                          status: "Shipment"
                        }
                      } else {
                        return {
                          ...i
                        }
                      }
                    })
                    console.log(datas)
                    setData(datas)
                  }}>
                    <Text style={{ color: 'green' }}>Shipment </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    console.log(index)
                    const datas = data.map((i, ind) => {
                      if (index === ind) {
                        return {
                          ...i,
                          status: "Shippted"
                        }
                      } else {
                        return {
                          ...i
                        }
                      }
                    })
                    console.log(datas)
                    setData(datas)
                  }}>
                    <Text style={{ color: "gary" }}>Shippted</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>

            <View style={styles.line} />
            <Text style={styles.statusText}>{item.status.toUpperCase()}</Text>
          </View>
        );
      }}
    />
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
  nameText:{ fontSize: 17, color: 'black', fontWeight: '500' }
})
export default StatusScreen;
