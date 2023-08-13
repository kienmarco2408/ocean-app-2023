import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const SuggestCard = () => {
  return (
    <View
      style={{
        width: 342,
        height: 97,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        marginTop: 10,
        justifyContent: "space-between",
      }}
    >
      <View style={{ width: 216, height: 63, marginHorizontal: 15 }}>
        <Text
          style={{ width: 216, height: 40, fontSize: 16, fontWeight: "400" }}
        >
          Nguy cơ suy giảm tài nguyên sinh vật biển tại Việt Nam
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: "400", color: "#F98121" }}>
            Tạp chí môi trường
          </Text>
          <Entypo name="dot-single" size={20} color="#6B7280" />
          <Text style={{ fontSize: 10, fontWeight: "400", color: "#B1B1B1" }}>
            {" "}
            12/08/2023
          </Text>
        </View>
      </View>
      <Image
        source={require("../../storages/cardNews/rua.png")}
        style={{ width: 94, height: 94, borderRadius: 10 }}
      />
    </View>
  );
};

export default SuggestCard;

const styles = StyleSheet.create({});
