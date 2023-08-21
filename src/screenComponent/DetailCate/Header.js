import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    // Perform search operation
  };
  return (
    <View
      style={{
        width: "100%",
        height: 152,
        backgroundColor: "#041725",
        borderRadius: 16,
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
            style={{ fontSize: 30, color: "white", textTransform: "uppercase" }}
          >
            Rùa biển
          </Text>
        </View>
        <AntDesign name="heart" size={36} color="white" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 15,
    marginVertical: 10,
    width: "80%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    paddingLeft: 20,
  },
  searchIcon: {
    marginHorizontal: 14,
  },
  textInput: {
    flex: 1,
    height: "100%",
  },
});
