import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
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
                }}>Login</Text>

            <CustomTextInput
                placeholder='Enter Email Id'
                icon={require('../images/email.png')}
            />
            <CustomTextInput
                placeholder='Enter Password'
                type={'password'}
                icon={require('../images/password.png')}
            />
            <CommonButton
                title={'Login'}
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
                    navigation.navigate('Signup')
                }}
            >New User? Register Here</Text>
        </View>
    )
}

export default Login;