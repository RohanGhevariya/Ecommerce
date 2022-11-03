import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require('../images/list.png')}
                style={{ width: 100, height: 100, borderRadius: 10, resizeMode: 'center' }}
            />
        </View>
    )
}

export default Splash