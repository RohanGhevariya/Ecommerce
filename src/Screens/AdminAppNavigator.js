import React from "react";
import { Text,StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminHome from "./Admin/AdminHome";
import AdminOrders from "./Admin/AdminOrders";
import Categories from "./Admin/AdminCategories";
import Products from "./Admin/Products";
import States from "./Admin/AdminStates"
import { Image } from 'react-native';
import ListScreen from "../screen/ListScreen";
 import AddProductScreen from '../screen/AddProductScreen';
 import AddCategoryScreen from '../screen/AddCategoryScreen';
 import SearchScreen from '../screen/SearchScreen';
 import StatusScreen from '../screen/StatusScreen';
const Tab = createBottomTabNavigator();

const AdminAppNavigator = () => {
  return (
    <Drawer.Navigator useLegacyImplementation>
       <Drawer.Screen name="List" component={ListScreen} />
       <Drawer.Screen name="AddCategory" component={AddCategoryScreen} />
       <Drawer.Screen name="AddProduct" component={AddProductScreen} />
       <Drawer.Screen name="Search" component={SearchScreen} />
       <Drawer.Screen name="Status" component={StatusScreen} />
     </Drawer.Navigator>
    // <Tab.Navigator >
    //   <Tab.Screen
    //     name="Home"
    //     component={AdminHome}
    //     options={{
    //       tabBarLabel: ({ }) => (
    //         <Text style={{ marginTop: 10, fontWeight: "bold" }}>Home</Text>
    //       ),
    //       tabBarIcon: ({ color, size }) => (
    //         <Image
    //           source={require("../images/home.png")}
    //           style={{ height: 30, width: 30, marginTop: 15 }}
    //         />
    //       )
    //     }} />
    //   <Tab.Screen
    //     name="Categories"
    //     component={Categories}
    //     options={{
    //       tabBarLabel: ({ }) => (
    //         <Text style={{ marginTop: 10, fontWeight: "bold" }}>Categories</Text>
    //       ),
    //       tabBarIcon: ({ color, size }) => (
    //         <Image
    //           source={require("../images/categories.png")}
    //           style={{ height: 30, width: 30, marginTop: 15 }}
    //         />
    //       )
    //     }} />
    //   <Tab.Screen
    //     name="Orders"
    //     component={AdminOrders}
    //     options={{
    //       tabBarLabel: ({ }) => (
    //         <Text style={{ marginTop: 10, fontWeight: "bold" }}>Orders</Text>
    //       ),
    //       tabBarIcon: ({ color, size }) => (
    //         <Image
    //           source={require("../images/distributed.png")}
    //           style={{ height: 30, width: 30, marginTop: 15 }}
    //         />
    //       )
    //     }} />
    //   <Tab.Screen
    //     name="Products"
    //     component={Products}
    //     options={{
    //       tabBarLabel: ({ }) => (
    //         <Text style={{ marginTop: 10, fontWeight: "bold" }}>Products</Text>
    //       ),
    //       tabBarIcon: ({ color, size }) => (
    //         <Image
    //           source={require("../images/sent.png")}
    //           style={{ height: 30, width: 30, marginTop: 15 }}
    //         />
    //       )
    //     }} />
    //   <Tab.Screen
    //     name="States"
    //     component={States}
    //     options={{

    //       tabBarIcon: ({ color, size }) => (
    //         <Image
    //           source={require("../images/stats.png")}
    //           style={{ height: 30, width: 30, marginTop: 30, marginBottom: 2 }}
    //         />

    //       ), tabBarLabel: ({ }) => (
    //         <Text style={{ marginTop: 30, fontWeight: "bold" }}>States</Text>
    //       ),
    //     }} />
    // </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AdminAppNavigator;