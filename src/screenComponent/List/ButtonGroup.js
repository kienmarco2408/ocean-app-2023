import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import CardAnimal from "../Home/CardAnimal";
import Card from "./Card";

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <View>
      <View style={styles.container}>
        <Pressable
          style={[
            styles.button,
            selectedButton === "button1" && styles.selectedButton,
            styles.btn1,
          ]}
          onPress={() => handleButtonPress("button1")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "button1" && styles.selectedButtonText,
            ]}
          >
            Danh mục
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            selectedButton === "button2" && styles.selectedButton,
            styles.btn2,
          ]}
          onPress={() => handleButtonPress("button2")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "button2" && styles.selectedButtonText,
            ]}
          >
            Sinh vật quý hiếm
          </Text>
        </Pressable>
      </View>
      <View style={{ marginTop: "10%" }}>
        {selectedButton === "button1" && (
          <View style={{ alignSelf: "flex-end" }}>
            <CardAnimal />
          </View>
        )}
        {selectedButton === "button2" && (
          <View style={{ alignSelf: "center" }}>
            <Card />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#041725",
    width: "50%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#134B5C",
  },
  buttonText: {
    fontSize: 16,
    color: "#134B5C",
  },
  selectedButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  btn1: {
    borderTopLeftRadius: 20,
    borderBottomStartRadius: 30,
  },
  btn2: {
    borderTopRightRadius: 20,
    borderBottomEndRadius: 30,
  },
});

export default ButtonGroup;
