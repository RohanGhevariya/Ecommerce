import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = () => {
    return (
        <View
            style={{
                width: '100%',
                height: 100,
                justifyContent: 'space-between',
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
                    marginLeft: 30,
                    marginTop: 30
                }}
            >
                Ecommerce
            </Text>
            <View 
                style={{ 
                    flexDirection:'row',
                }}
            >
                <TouchableOpacity 
                style={{
                    marginRight:50,
                    justifyContent:'center',
                    alignItems:'center',
                    width:30,
                    height:30,
                }}
                >
                    <Text>Mode</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Header