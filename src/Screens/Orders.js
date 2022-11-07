import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const Orders = () => {
  const navigation = useNavigation();
  const orders = useSelector(state => state.OrderReducers);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      <View
                    style={{
                        width: '100%',
                        height: 70,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            width:50,
                            marginLeft: 30,
                            justifyContent: 'center',
                            alignItems:'flex-start',
                            borderWidth: .2,
                            padding: 7,
                            borderRadius: 10,
                            backgroundColor:'#ebe9e4'
                        }}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Image source={require('../images/back.png')}
                            style={{
                                width: 24,
                                height: 24,
                            }} />
                    </TouchableOpacity>
                </View>
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
                      <Text style={{
                        marginLeft: 20
                      }}>
                        {'Total: ' + 'xyz'}
                      </Text>
                    </View>
                  );
                })}
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Orders