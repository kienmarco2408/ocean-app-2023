import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ListCard = () => {
  return (
    <View style={{ width: 200, height: 191 }}>
      <Image
        source={require("../../storages/card-header.png")}
        style={{ width: "100%", height: 118 }}
      />
      <View
        style={{
          height: 68,
          backgroundColor: "#041725",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: "#FFFFFF", width: 176, height: 36, fontSize: 12 }}
        >
          Luật bảo vệ môi trường mới nhất 2020
        </Text>
      </View>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({});
