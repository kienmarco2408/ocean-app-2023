import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native-paper";

const Header = ({ openModal }) => {
  const navigation = useNavigation();
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
        <AntDesign name="hearto" size={40} color="white" />
        <View style={styles.searchBar}>
          <TextInput
            style={styles.textInput}
            value={searchText}
            placeholder="Bạn muốn tìm gì?"
            placeholderTextColor="#B1B1B1"
          />
          <Ionicons
            name="ios-search-outline"
            size={30}
            color="#B1B1B1"
            style={styles.searchIcon}
          />
        </View>

        <AntDesign name="filter" size={40} color="white" onPress={openModal} />
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
    width: "60%",
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
