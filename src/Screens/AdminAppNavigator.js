import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminHome from "./Admin/AdminHome";
import AdminOrders from "./Admin/AdminOrders";
import Categories from "./Admin/AdminCategories";
import Products from "./Admin/Products";
import States from "./Admin/AdminStates"
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const AdminAppNavigator = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={AdminHome}
        options={{
          tabBarLabel: ({ }) => (
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../images/home.png")}
              style={{ height: 30, width: 30, marginTop: 15 }}
            />
          )
        }} />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: ({ }) => (
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>Categories</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../images/categories.png")}
              style={{ height: 30, width: 30, marginTop: 15 }}
            />
          )
        }} />
      <Tab.Screen
        name="Orders"
        component={AdminOrders}
        options={{
          tabBarLabel: ({ }) => (
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>Orders</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../images/distributed.png")}
              style={{ height: 30, width: 30, marginTop: 15 }}
            />
          )
        }} />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: ({ }) => (
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>Products</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../images/sent.png")}
              style={{ height: 30, width: 30, marginTop: 15 }}
            />
          )
        }} />
      <Tab.Screen
        name="States"
        component={States}
        options={{

          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../images/stats.png")}
              style={{ height: 30, width: 30, marginTop: 30, marginBottom: 2 }}
            />

          ), tabBarLabel: ({ }) => (
            <Text style={{ marginTop: 30, fontWeight: "bold" }}>States</Text>
          ),
        }} />
    </Tab.Navigator>
  );
};


export default AdminAppNavigator;