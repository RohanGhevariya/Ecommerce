import 'react-native-gesture-handler';
import React from "react";
import ListScreen from "./src/screen/ListScreen";
import AddProductScreen from './src/screen/AddProductScreen';
import AddCategoryScreen from './src/screen/AddCategoryScreen';
import SearchScreen from './src/screen/SearchScreen';
import StatusScreen from './src/screen/StatusScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="List" component={ListScreen} />
      <Drawer.Screen name="AddCategory" component={AddCategoryScreen} />
      <Drawer.Screen name="AddProduct" component={AddProductScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} />
      <Drawer.Screen name="Status" component={StatusScreen} />
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}
export default App