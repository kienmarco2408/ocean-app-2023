import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CardContent = () => {
  return (
    <View style={{ width: "100%", height: 205, borderWidth: 1 }}>
      <Image
        source={require("../../storages/img1.png")}
        style={{ width: "100%" }}
      />
      <View
        style={{
          backgroundColor: "#041725",
          height: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: "#FFFFFF", width: 314, height: 45, fontSize: 12 }}
        >
          Thực hiện chiến lược khai thác, sử dụng bền vững tài nguyên, bảo vệ
          môi trường biển và hải đảo đến năm 2030, tầm nhìn đến 2050
        </Text>
      </View>
    </View>
  );
};

export default CardContent;

const styles = StyleSheet.create({});
