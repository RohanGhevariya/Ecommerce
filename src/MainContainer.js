import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './AppNavigator'
import AdminAppNavigator from './Screens/AdminAppNavigator'

const MainContainer = () => {
    return (
        <AppNavigator>
            <AdminAppNavigator/>
        </AppNavigator>
    )
}

export default MainContainer