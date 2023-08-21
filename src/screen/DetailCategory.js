import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import ButtonGroup from "../screenComponent/Saved/ButtonGroup";
import Header from "../screenComponent/DetailCate/Header";

const DetailCategory = () => {
  return (
    <ScrollView style={{ flex: 1, height: "100%" }}>
      <ImageBackground
        source={require("../storages/background/list.png")}
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

export default DetailCategory;

const styles = StyleSheet.create({});
