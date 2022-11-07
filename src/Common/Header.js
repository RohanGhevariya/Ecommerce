import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = () => {
    return (
        <View
            style={{
                width: '100%',
                height: 100,
                justifyContent:'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomWidth: 0.2,
                borderColor: '#8e8e8e',
                backgroundColor:'#fff',
            }}>
            <Text
                style={{
                    fontWeight: '600',
                    fontSize: 20,
                    color: '#000',
                    marginTop: 30,
                    alignItems:'center'
                }}
            >
                Ecommerce
            </Text>
        </View>
    )
}

export default Header