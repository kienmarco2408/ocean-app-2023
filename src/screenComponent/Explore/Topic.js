import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Topic = () => {
  return (
    <View
      style={{
        width: 76,
        height: 80,
        borderRadius: 12,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          width: 64,
          height: 30,
          fontSize: 12,
          textAlign: "center",
          color: "white",
        }}
      >
        Sự kiện - Tin tức
      </Text>
    </View>
  );
};

export default Topic;

const styles = StyleSheet.create({});
