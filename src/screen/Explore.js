import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Stories from "../screenComponent/Explore/Stories";
import CardNews from "../screenComponent/Home/CardNews";
import Topic from "../screenComponent/Explore/Topic";
import CardContent from "../screenComponent/Explore/CardContent";
import ListCard from "../screenComponent/Explore/ListCard";
import SuggestCard from "../screenComponent/Explore/SuggestCard";

const Explore = () => {
  return (
    <ScrollView>
      <View style={{ width: "100%", height: 350 }}>
        <Image
          source={require("../storages/background/explore.png")}
          style={{
            position: "absolute",
            resizeMode: "cover",
            width: "100%",
            height: 400,
          }}
        />
        <View
          style={{
            width: 358,
            height: 80,
            alignSelf: "center",
            marginTop: 113,
          }}
        >
          <Text
            style={{
              color: "#173DA0",
              fontSize: 32,
              fontWeight: "900",
              textAlign: "center",
            }}
          >
            KHU BẢO TỒN BIỂN VIỆT NAM
          </Text>
        </View>
        <View
          style={{
            width: 85,
            height: 21,
            borderRadius: 10,
            backgroundColor: "#FCFEAA",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 16,
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: "300", color: "#041725" }}>
            11 khu bảo tồn
          </Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Stories />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#20526F",
          width: "100%",
          height: 402,
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 10,
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
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 27,
        }}
      >
        <Text style={{ color: "#004171", fontSize: 24, fontWeight: "400" }}>
          Chủ đề
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "400", color: "#6B7280" }}>
          Xem tất cả
        </Text>
      </View>
      <View style={{ marginTop: 42, marginLeft: 20 }}>
        <Topic />
      </View>
      <View style={{ marginTop: 30 }}>
        <CardContent />
      </View>
      <View style={{ marginTop: 14, marginLeft: 20 }}>
        <ListCard />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 27,
        }}
      >
        <Text style={{ color: "#004171", fontSize: 24, fontWeight: "400" }}>
          Gợi ý cho bạn
        </Text>
      </View>
      <View style={{ marginTop: 10, alignSelf: "center" }}>
        <SuggestCard />
      </View>
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
