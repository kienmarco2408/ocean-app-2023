import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const CardContent = () => {
  return (
    <View
      style={{
        width: 350,
        height: 133,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          source={require("../../storages/cardNews/rua.png")}
          style={{ width: 127, height: 133, borderRadius: 10 }}
        />
      </View>
      <Image
        source={require("../../storages/icon/heart.png")}
        style={{
          position: "absolute",
          top: 8,
          left: 11,
          width: 26,
          height: 26,
        }}
      />
      <View style={{ width: 199, height: 93, marginLeft: 10 }}>
        <Text
          style={{
            fontSize: 15,
            color: "#111928",
            height: 40,
            width: 199,
            marginBottom: 8,
          }}
        >
          Nguy cơ suy giảm tài nguyên sinh vật biển tại Việt Nam
        </Text>
        <Text style={{ fontSize: 10, color: "#6B7280" }}>
          Đại dương bao la tưởng chừng là nơi sinh sống an toàn của hàng triệu
          sinh vật biển, từ phố biến đến quý...
        </Text>
      </View>
    </View>
  );
};

export default CardContent;

const styles = StyleSheet.create({});
