import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminHome from './Screens/Admin/AdminHome';
import AdminOrders from './Screens/Admin/AdminOrders';
import Categories from './Screens/Admin/AdminCategories';
import Products from './Screens/Admin/Products';
import States from './Screens/Admin/AdminStates';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const AppNavigator =() =>{
    return(
        <Tab.Navigator >
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
        </Tab.Navigator>
    );
};


export default AppNavigator;