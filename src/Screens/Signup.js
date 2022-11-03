import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require('../images/list.png')}
                style={{
                    width: 60,
                    height: 60,
                    alignSelf: 'center',
                    marginTop: 100
                }}
            />
            <Text
                style={{
                    marginTop: 50,
                    alignSelf: 'center',
                    fontSize: 24,
                    fontWeight: '600',
                    color: '#000'
                }}>
                Register
            </Text>

            <CustomTextInput
                placeholder='Enter Name'
                icon={require('../images/user.png')}
            />

            <CustomTextInput
                placeholder='Enter Mobile Phone Number'
                icon={require('../images/mobile.png')}
            />

            <CustomTextInput
                placeholder='Enter Email Address'
                icon={require('../images/email.png')}
            />

            <CustomTextInput
                placeholder='Enter Password'
                type={'password'}
                icon={require('../images/password.png')}
            />
            <CommonButton
                title={'Register'}
                bgColor={'#000'}
                textColor={'#fff'}
                onPress={() => { }}
            />
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: '400',
                    alignSelf: 'center',
                    marginTop: 20,
                    textDecorationLine: 'underline',
                }} onPress={() => {
                    navigation.goBack();
                }}
            >Already have an account?</Text>
        </View>
    )
}

export default Signup;