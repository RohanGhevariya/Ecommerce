import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Common/Loader';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const adminemail = 'Abc';
    const adminPass = 'Abc';

    const login = () => {
        setModalVisible(true);
        if (email == '') {
            setModalVisible(false);
            setBadEmail(true);
        } else {
            setBadEmail(false);
            if (password == '') {
                setModalVisible(false);
                setBadPassword(true);
            } else {
                setTimeout(() => {
                    setBadPassword(false);
                    getData();
                }, 1500);
            }
        }
    }

    const getData = async () => {
        const mEmail = await AsyncStorage.getItem('EMAIL');
        const mPass = await AsyncStorage.getItem('PASSWORD');

        if (adminemail === mEmail && mPass === adminPass) {
            setModalVisible(false);
            navigation.navigate('AdminHome');
        }
        else if (email === mEmail && mPass === password) {
            setModalVisible(false);
            navigation.navigate('Checkout');
        }
        else {
            setModalVisible(false);
        }
    }

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
                        login();
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
                <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </View>
        </ScrollView>
    )
}

export default Login;