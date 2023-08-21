import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardNews = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("DetailNews")}>
      <View
        style={{
          width: 250,
          height: 316,
          borderRadius: 16,
          backgroundColor: "white",
        }}
      >
        <Image
          source={require("../../storages/cardNews/rua.png")}
          style={{
            width: "100%",
            height: 118,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
          }}
        />
        <View
          style={{
            width: 210,
            height: 138,
            alignSelf: "center",
            marginTop: 14,
          }}
        >
          <Text style={{ fontWeight: "400", fontSize: 16, color: "#112852" }}>
            Nguy cơ suy giảm tài nguyên sinh vật biển tại Việt Nam
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 10,
              color: "#6B7280",
              marginTop: 8,
            }}
          >
            Đại dương bao la tưởng chừng là nơi sinh sống an toàn của hàng triệu
            sinh vật biển, từ phố biến đến quý hiếm. Thế nhưng, những năm qua,
            khi biển dần bị ô nhiễm thì nhiều loài thủy hải sản cũng âm thầm
            biến mất khỏi trái đất.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 210,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AntDesign name="hearto" size={24} color="black" />
          <View
            style={{
              flexDirection: "row",
              width: 60,
              justifyContent: "space-between",
            }}
          >
            <FontAwesome5 name="facebook" size={24} color="#1877F2" />
            <Image source={require("../../storages/google.png")} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardNews;

const styles = StyleSheet.create({});
