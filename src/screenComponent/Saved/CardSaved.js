import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";

const CardSaved = () => {
  return (
    <View
      style={{
        width: 163,
        height: 200,
        alignItems: "center",
        borderRadius: 15,
        overflow: "hidden",
      }}
    >
      <Svg height="100%" width="100%" style={{ position: "absolute" }}>
        <Defs>
          <LinearGradient
            id="grad"
            x2="1055.25%"
            y2="82.56%"
            x1="61.35%"
            y1="46.20%"
          >
            <Stop offset="31.77%" stopColor="#BDF1F4" />
            <Stop offset="95.04%" stopColor="#FFFFFF" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <Image
        source={require("../../storages/animal/rua.png")}
        style={{ width: 147, height: 134, borderRadius: 10, marginTop: 7 }}
      />
      <View style={{ width: 147, height: 43, marginTop: 7 }}>
        <Text style={{ color: "#03174A", fontWeight: "700" }}>
          Vích (Rùa xanh)
        </Text>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <View style={{ width: 97, height: 25 }}>
            <Text style={{ fontSize: 8, fontWeight: "700" }}>
              Tình trạng:
              <Text style={{ fontWeight: "300", fontSize: 7 }}>
                Nguy cấp - có nguy cơ tuyệt chủng cao
              </Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 4,
              justifyContent: "space-evenly",
            }}
          >
            <Foundation name="alert" size={14} color="black" />
            <Foundation
              name="alert"
              size={14}
              color="black"
              style={{ marginHorizontal: 4 }}
            />
            <Foundation name="alert" size={14} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardSaved;

const styles = StyleSheet.create({});
