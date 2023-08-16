import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";

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
        {/* SVG for the gradient heart */}
        <Svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          style={{ position: "absolute", top: 8, left: 11 }}
        >
          <LinearGradient id="heartGrad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0%" stopColor="blue" />
            <Stop offset="100%" stopColor="green" />
          </LinearGradient>
          <Path
            d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.28 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C15.09 4.81 16.76 4 18.5 4 21.58 4 24 6.42 24 9.5c0 3.78-3.4 6.86-8.55 10.54L12 21.35z"
            fill="url(#heartGrad)"
          />
        </Svg>
        <AntDesign
          name="hearto"
          size={24}
          color="transparent"
          style={{ position: "absolute", top: 8, left: 11 }}
        />
        <Image
          source={require("../../storages/cardNews/rua.png")}
          style={{ width: 127, height: 133, borderRadius: 10 }}
        />
      </View>
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
