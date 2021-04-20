import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

function PostCard({ post }) {
  return (
    <View style={styles.container}>
      <Image style={{ height: 200 }} source={{ uri: post.image }} />
      <View style={styles.inner}>
        <Text style={styles.titolo}>{post.titolo}</Text>
        <Text style={styles.descrizione}>{post.descrizione}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    margin: 15,
    marginHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inner: {
    margin: 10,
  },
  titolo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descrizione: {
    color: "grey",
    marginBottom: 20,
  },
});

export default PostCard;
