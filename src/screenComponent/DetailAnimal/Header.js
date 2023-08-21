import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 130,
          backgroundColor: "#062832",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: "15%",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: "10%",
          }}
        >
          <AntDesign name="left" size={36} color="white" />
          <View>
            <Text
              style={{
                fontSize: 30,
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Rùa biển
            </Text>
          </View>
          <AntDesign name="heart" size={36} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
