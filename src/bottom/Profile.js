import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
let name = '';
const Profile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    name = await AsyncStorage.getItem('NAME');
  }

  const logOutUser = async () => {
    //window.localStorage.clear();
    navigation.navigate('Login');
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          width: '100%',
          height: 150,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 18,
            marginLeft: 25,
          }}
        >Profile</Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={
            require('../images/setting.png')}
            style={{
              width: 24,
              height: 24,
            }}
          />
        </TouchableOpacity>
      </View>
      <Image source={
        require('../images/profile.png')}
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          marginTop: 30
        }}
      />
      <Text
        style={{
          fontSize: 18,
          alignSelf: 'center',
          marginTop: 20,

        }}
      >{name}</Text>

      <TouchableOpacity
        style={{
          width: '90%%',
          height: 50,
          borderBottomWidth: .3,
          marginLeft: 20,
          marginTop: 20,
          borderBottomColor: '#8e8e8e'
        }}
        onPress={() => {
          navigation.navigate('MyAddress');
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
          }}
        >Address</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '90%%',
          height: 50,
          borderBottomWidth: .3,
          marginLeft: 20,
          marginTop: 20,
          borderBottomColor: '#8e8e8e'

        }}
        onPress={() => {
          navigation.navigate('Orders');
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
          }}
        >
          Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '90%%',
          height: 50,
          borderBottomWidth: .3,
          marginLeft: 20,
          marginTop: 20,
          borderBottomColor: '#8e8e8e'

        }}
        onPress={() => {
          logOutUser();
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
          }}
        >
          Log Out</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Profile