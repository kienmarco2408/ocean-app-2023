import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../screenComponent/Saved/Header";
import ButtonGroup from "../screenComponent/Saved/ButtonGroup";

const Saved = () => {
  return (
    <ScrollView style={{ flex: 1, height: "100%" }}>
      <ImageBackground
        source={require("../storages/background/save.png")}
        style={{ height: "150%" }}
      >
        <View>
          <Header />
        </View>
        <View>
          <ButtonGroup />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Saved;

const styles = StyleSheet.create({});
