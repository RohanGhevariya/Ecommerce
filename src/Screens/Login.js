import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const validate = () => {
        if (email == '') {
            setBadEmail(true);
        }
        else {
            setBadEmail(false);
        }
        if (password == '') {
            setBadPassword(true);
        }
        else {
            setBadPassword(false);
        }
    }
    return (
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
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
                value={email}
                onChangeText={(txt) => {
                    setEmail(txt)
                }}
            />
            {
                badEmail === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Email Id
                    </Text>)
            }
            <CustomTextInput
                placeholder='Enter Password'
                type={'password'}
                icon={require('../images/password.png')}
                value={password}
                onChangeText={(txt) => {
                    setPassword(txt)
                }}
            />
            {
                badPassword === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Password
                    </Text>)
            }
            <CommonButton
                title={'Login'}
                bgColor={'#000'}
                textColor={'#fff'}
                onPress={() => {
                    validate();
                }}
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
        </ScrollView>
    )
}

export default Login;