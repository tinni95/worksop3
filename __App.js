import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * TASK 1 : CAMBIARE TITOLO HEADER HOME PAGE
 * TASK 2 : RIMUOVERE HEADER DA HOME PAGE
 * TASK 3 : CAMBIARE TITOLO HEADER SECOND SCREEN
 * TASK 4 : CAMBIARE TESTO SECOND SCREEN
 */

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title={"Go to Second Screen"}
        onPress={() => navigation.navigate("Second")}
      />
    </View>
  );
}

function SecondScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Second Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
