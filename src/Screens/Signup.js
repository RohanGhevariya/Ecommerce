import { Text, View, Image } from 'react-native'
import React, { Component, useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Signup = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('');
    const [badName, setBadName] = useState(false);
    const [mobile, setMobile] = useState('');
    const [badMobile, setBadMobile] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const [badConfirmPassword, setBadConfirmPassword] = useState(false);
    const validate = () => {
        if (name == '') {
            setBadName(true);
        }
        else {
            setBadName(false);
        }
        if (mobile == '') {
            setBadMobile(true);
        }
        else if(mobile.length<10)
        {
            setBadMobile(true);
        }
        else {
            setBadMobile(false);
        }
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
        if (confirmPassword == '') {
            setBadConfirmPassword(true);
        }
        else {
            setBadConfirmPassword(false);
        }
        if(confirmPassword!==password)
        {
            setBadConfirmPassword(true);
        }
        else
        {
            setBadConfirmPassword(false);
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
                    marginTop: 60
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
                value={name}
                onChangeText={(txt) => {
                    setName(txt)
                }}
            />

            {
                badName === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Name
                    </Text>)
            }

            <CustomTextInput
                placeholder='Enter Mobile Phone Number'
                icon={require('../images/mobile.png')}
                value={mobile}
                keyboardType={'number-pad'}
                onChangeText={(txt) => {
                    setMobile(txt)
                }}
            />

            {
                badMobile === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Mobile Phone Number
                    </Text>)
            }

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

            <CustomTextInput
                placeholder='Enter Confirm Password'
                icon={require('../images/password.png')}
                value={confirmPassword}
                onChangeText={(txt) => {
                    setConfirmPassword(txt)
                }}
            />

            {
                badConfirmPassword === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter valid the Password
                    </Text>)
            }

            <CommonButton
                title={'Sign Up'}
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
                    navigation.goBack();
                }}
            >Already have an account?</Text>
        </View>
        </ScrollView>
    )
}

export default Signup;