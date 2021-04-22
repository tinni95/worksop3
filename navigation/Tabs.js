import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/colors";
import SecondScreen from "../screens/SecondScreen";
import HomeStack from "./HomeStack";
import NewsStack from "./NewsStack";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.RED,
  },
};

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
          name="Home"
          component={HomeStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "News",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="newspaper-o" size={size} color={color} />
            ),
          }}
          name="News"
          component={NewsStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" size={size} color={color} />
            ),
          }}
          name="Second"
          component={SecondScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs;
