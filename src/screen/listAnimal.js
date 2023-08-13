import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../screenComponent/List/Header";
import ButtonGroup from "../screenComponent/List/ButtonGroup";
import CardNews from "../screenComponent/Home/CardNews";
import CardAnimal from "../screenComponent/Home/CardAnimal";

const ListAnimal = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../storages/background/list.png")}
        style={{ paddingBottom: 100, height: "100%" }}
      >
        <View>
          <Header />
        </View>
        <View>
          <ButtonGroup />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ListAnimal;

const styles = StyleSheet.create({});
