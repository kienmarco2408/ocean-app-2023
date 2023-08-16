import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import Card from "../List/Card";
import CardAnimal from "../Home/CardAnimal";
import CardSaved from "./CardSaved";
import CardContent from "./CardContent";

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
            Bài viết liên quan
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            selectedButton === "button3" && styles.selectedButton,
            styles.btn3,
          ]}
          onPress={() => handleButtonPress("button3")}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === "button3" && styles.selectedButtonText,
            ]}
          >
            Quizz
          </Text>
        </Pressable>
      </View>
      <View style={{ marginTop: "10%" }}>
        {selectedButton === "button1" && (
          <View style={{ marginLeft: 22 }}>
            <CardSaved />
          </View>
        )}
        {selectedButton === "button2" && (
          <View style={{ alignSelf: "center" }}>
            <CardContent />
          </View>
        )}
        {selectedButton === "button3" && (
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
    width: 140,
  },
  btn2: {
    width: 180,
  },
  btn3: {
    borderTopRightRadius: 20,
    borderBottomEndRadius: 30,
    width: 110,
  },
});

export default ButtonGroup;
