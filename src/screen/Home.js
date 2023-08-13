import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../screenComponent/Home/Header";
import { SliderBox } from "react-native-image-slider-box";
import Carousel from "../screenComponent/Home/Carousel";
import { slideData } from "../data/slide";
import Stories from "../screenComponent/Home/Stories";
import CardNews from "../screenComponent/Home/CardNews";
import CardAnimal from "../screenComponent/Home/CardAnimal";

const Home = () => {
  const imgs = [
    "https://www.plasticstoday.com/sites/plasticstoday.com/files/plastic-bottle-recycling-chones-Adobe-1540X800.jpg",
    "https://polycoplastic.com/wp-content/uploads/2021/03/nhua-pet-la-gi.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVqiU613ku9R5OSpbuhaLbgRCMLM_p7sWUw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2EPxevYnvVJCvdWI8JuK1nvMtXrAfp90rg&usqp=CAU",
  ];
  return (
    <ScrollView>
      <ImageBackground
        source={require("../storages/background/home.png")}
        style={{ flex: 1, paddingBottom: 100 }}
      >
        <StatusBar barStyle={"light-content"} />
        <View
          style={{
            width: "100%",
            height: 450,
            backgroundColor: "#062832",
            borderRadius: 16,
          }}
        >
          <Header />
          <View
            style={{
              width: "85%",
              alignSelf: "center",
              height: 198,
              marginTop: 27,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#FCFEAA",
                  fontSize: 24,
                  fontWeight: "400",
                }}
              >
                Bạn có biết? Việt Nam ta có:
              </Text>
            </View>
            <View style={{ marginTop: 17 }}>
              <Carousel data={slideData} />
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#FCFEAA", fontSize: 24, fontWeight: "400" }}>
              Khu bảo tồn biển
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "400", color: "white" }}>
              Xem tất cả
            </Text>
          </View>
          <View style={{ marginLeft: 20 }}>
            <Stories />
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#FCFEAA", fontSize: 24, fontWeight: "400" }}>
              Tin tức nổi bật
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "400", color: "white" }}>
              Xem tất cả
            </Text>
          </View>
          <View style={{ marginTop: 21, marginLeft: 23 }}>
            <CardNews />
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#FCFEAA", fontSize: 24, fontWeight: "400" }}>
              Nhóm sinh vật biển
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "400", color: "white" }}>
              Xem tất cả
            </Text>
          </View>
          <View style={{ marginTop: 21, marginLeft: 23 }}>
            <CardAnimal />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
