import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import Checkout from './Screens/Checkout';
import OrderSucess from './Screens/OrderSucess';
import Orders from './Screens/Orders';
import AdminHome from './Screens/Admin/AdminHome';
// import AdminOrders from './Screens/Admin/AdminOrders';
// import Categories from './Screens/Admin/AdminCategories';
// import Products from './Screens/Admin/Products';
// import States from './Screens/Admin/AdminStates';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            {/* <Tab.Navigator >
             <Tab.Screen
              name="Home"
              component={AdminHome}
              options={{
                tabBarLabel:({})=>(
                  <Text style={{marginTop:10,fontWeight:"bold"}}>Home</Text>
                ),
                tabBarIcon:({color,size}) => (
                    <Image
                        source={require("../assets/home.png")}
                        style={{height:30, width:30,marginTop:15}}
                        />
                )
              }} />
              <Tab.Screen
              name="Categories"
              component={Categories}
              options={{
                tabBarLabel:({})=>(
                  <Text style={{marginTop:10,fontWeight:"bold"}}>Categories</Text>
                ),
                tabBarIcon:({color,size}) => (
                    <Image
                        source={require("../assets/categories.png")}
                        style={{height:30, width:30,marginTop:15}}
                        />
                )
              }} />
             <Tab.Screen
              name="Orders"
              component={AdminOrders}
              options={{
                tabBarLabel:({})=>(
                  <Text style={{marginTop:10,fontWeight:"bold"}}>Orders</Text>
                ),
                tabBarIcon:({color,size}) => (
                    <Image
                        source={require("../assets/distributed.png")}
                        style={{height:30, width:30,marginTop:15}}
                        />
                )
              }} />
              <Tab.Screen
              name="Products"
              component={Products}
              options={{
                tabBarLabel:({})=>(
                  <Text style={{marginTop:10,fontWeight:"bold"}}>Products</Text>
                ),
                tabBarIcon:({color,size}) => (
                    <Image
                        source={require("../assets/sent.png")}
                        style={{height:30, width:30,marginTop:15}}
                        />
                )
              }} />
               <Tab.Screen
              name="States"
              component={States}
              options={{
               
                tabBarIcon:({color,size}) => (
                    <Image
                        source={require("../assets/stats.png")}
                        style={{height:30, width:30,marginTop:30,marginBottom:2}}
                        />
                        
                ), tabBarLabel:({})=>(
                  <Text style={{marginTop:30,fontWeight:"bold"}}>States</Text>
                ),
              }} />
        </Tab.Navigator> */}
            <Stack.Navigator>

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Splash"
                    component={Splash} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Login"
                    component={Login} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Signup"
                    component={Signup} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={Home}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="MyAddress"
                    component={MyAddress}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AddAddress"
                    component={AddAddress}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Checkout"
                    component={Checkout}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="OrderSucess"
                    component={OrderSucess}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Orders"
                    component={Orders}
                />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AdminHome"
                    component={AdminHome}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator