import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const CardAnimal = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailCategory")}
      style={{
        width: 370,
        height: 131,

        borderRadius: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          flexDirection: "row",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: 219,
            height: 103,
            paddingLeft: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "400", color: "#173DA0" }}>
            Rùa
          </Text>
          <Text style={{ color: "#041725", fontSize: 14, fontWeight: "400" }}>
            60 loài
          </Text>
          <Text style={{ color: "#041725", fontSize: 10, fontWeight: "300" }}>
            A type of very small animal with six legs, a body divided into three
            parts and usually two pairs of wings, or, more generally, any
            similar very small animal
          </Text>
        </View>
        <Image
          source={require("../../storages/cardanimal/ruabien.png")}
          style={{
            width: 151,
            height: 131,
            borderRadius: 10,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardAnimal;
