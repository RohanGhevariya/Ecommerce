import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { circle } from 'react-native/Libraries/Animated/Easing';
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/actions/Actions';

const AddAddress = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const [building, setBuilding] = useState('');
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          height: 150,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            marginLeft: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: .2,
            padding: 7,
            borderRadius: 10,
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
      <CustomTextInput
        placeholder='Enter Street Name'
        icon={require('../images/building.png')}
        value={building}
        onChangeText={(txt) => {
          setBuilding(txt)
        }}
      />
      <CustomTextInput
        placeholder='Enter City Name'
        icon={require('../images/city.png')}
        value={city}
        onChangeText={(txt) => {
          setCity(txt)
        }}
      />
      <CustomTextInput
        placeholder='Enter Pincode'
        icon={require('../images/zip.png')}
        value={pin}
        onChangeText={(txt) => {
          setPin(txt)
        }}
      />
      <CommonButton
        title={'Save Address'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          if (city !== '' && building !== '' && pin !== '') {
            dispatch(addAddress({ city: city, building: building, pin: pin }));
            navigation.goBack();
          }
        }}
      />

    </View>
  )
}

export default AddAddress