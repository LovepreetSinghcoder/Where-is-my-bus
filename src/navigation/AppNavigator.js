import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import BusSearchScreen from "../pages/BusSearchScreen";
import LoginScreen from "../auth/LoginScreen";
import RegisterScreen from "../auth/RegisterScreen";
import BusDetailsScreen from "../pages/BusDetailsScreen";
import FavoriteScreen from "../pages/FavoritesScreen";
import TimetableScreen from "../pages/TimetableScreen";
import RoutesScreen from "../pages/RoutesScreen";
import RoutesScreen1 from "../pages/RoutesScreen1";
import RoutesScreen2 from "../pages/RoutesScreen2";


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BusSearch" component={BusSearchScreen} />
        <Stack.Screen name="BusDetails" component={BusDetailsScreen} />

        {/* This is the route for dynamic data/route  */}

        {/* <Stack.Screen 
        name="BusDetails" 
        component={BusDetailsScreen} 
        options={({ route }) => ({ title: `Bus ${route.params.busId} Details` })}  // Dynamic title based on busId
      /> */}

        <Stack.Screen
          name="Favorites"
          component={FavoriteScreen}
          options={{ title: "Favorite Buses" }}
        />
        <Stack.Screen
          name="Timetable"
          component={TimetableScreen}
          options={{ title: "Bus Timetable" }}
        />
        <Stack.Screen name="Routes" component={RoutesScreen} />
        <Stack.Screen name="Routes1" component={RoutesScreen1} />
        <Stack.Screen name="Routes2" component={RoutesScreen2} />



        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
