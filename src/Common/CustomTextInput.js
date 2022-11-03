import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type }) => {
    return (
        <View
            style={{
                width: '85%',
                height: 50,
                alignSelf: 'center',
                marginTop: 30,
                borderRadius: 10,
                borderWidth: 0.5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
            }}>
            <Image source={icon}
                style={{ width: 24, height: 24 }}
            />
            <TextInput
                placeholder={placeholder}
                secureTextEntry={type ? true : false}
                style={{ marginLeft: 10 }}
            />
        </View>
    )
}

export default CustomTextInput