import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../../screenComponent/List/Header";
import ButtonGroup from "../../screenComponent/List/ButtonGroup";
import CardNews from "../../screenComponent/Home/CardNews";
import CardAnimal from "../../screenComponent/Home/CardAnimal";

const ListAnimal = () => {
  return (
    <ScrollView style={{ flex: 1, height: "140%" }}>
      <ImageBackground
        source={require("../../storages/background/list.png")}
        style={{ paddingBottom: 100, height: "140%" }}
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

export default ListAnimal;

const styles = StyleSheet.create({});
