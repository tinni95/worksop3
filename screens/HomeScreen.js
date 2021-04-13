import React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  const funzione = () => {
    navigation.navigate("Second");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title={"Go to Second Screen"} onPress={funzione} />
    </View>
  );
}

export default HomeScreen;
