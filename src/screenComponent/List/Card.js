import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ position: "relative" }}
      onPress={() => navigation.navigate("DetailList")}
    >
      <Image
        source={require("../../storages/animal/rua.png")}
        style={{
          position: "absolute",
          alignSelf: "center",
          width: 390,
          height: 210,
        }}
      />
      <View
        style={{
          width: 126,
          height: 40,
          backgroundColor: "rgba(214, 234, 245, 0.3)",
          borderBottomLeftRadius: 100,
          alignSelf: "flex-end",

          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <Foundation name="alert" size={24} color="black" />
          <Foundation name="alert" size={24} color="black" />
          <Foundation name="alert" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          marginTop: 110,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: 8,
          alignItems: "center",
          width: 390,
          height: 60,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "400",
              color: "#D6EAF5",
              letterSpacing: 1,
            }}
          >
            Vích (Rùa xanh)
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "300",
              color: "#6B7280",
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            Nhóm: Rùa biển
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});
