import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Carousel from "../screenComponent/DetailNews/Carousel";
import { slideData } from "../data/slide";

const DetailNews = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../storages/background/save.png")}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          resizeMode: "cover",
        }}
      />
      <ScrollView>
        <View style={{ backgroundColor: "#134B5C" }}>
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
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <AntDesign
                name="left"
                size={30}
                color="white"
                onPress={() => navigation.goBack()}
              />
              <View style={{ width: 280, marginHorizontal: 30 }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    textAlign: "center",
                    letterSpacing: 1,
                  }}
                >
                  Nguy cơ suy giảm tài nguyên sinh vật biển tại Việt Nam
                </Text>
              </View>
              <AntDesign name="hearto" size={30} color="white" />
            </View>
          </View>
          <View style={{ marginLeft: 24 }}>
            <Carousel data={slideData} />
          </View>
        </View>
        <View style={{ marginHorizontal: "10%" }}>
          <View style={{ marginVertical: 37 }}>
            <Text
              style={{
                fontStyle: "italic",
                textAlign: "justify",
                color: "white",
              }}
            >
              Đại dương bao la tưởng chừng là nơi sinh sống an toàn của hàng
              triệu sinh vật biển, từ phố biến đến quý hiếm. Thế nhưng, những
              năm qua, khi biển dần bị ô nhiễm thì nhiều loài thủy hải sản cũng
              âm thầm biến mất khỏi trái đất.
            </Text>
          </View>
          <View>
            <Text
              style={{ color: "white", fontWeight: "700", marginBottom: 10 }}
            >
              Biển xanh kêu cứu
            </Text>
            <Text
              style={{
                textAlign: "justify",
                color: "white",
              }}
            >
              Sự ô nhiễm biển đang diễn ra ngày một trầm trọng! Đó là khẳng định
              của nhiều tổ chức, chuyên gia về môi trường trong và ngoài nước.
            </Text>
            <Text
              style={{
                textAlign: "justify",
                color: "white",
                marginVertical: 10,
              }}
            >
              Tại Việt Nam, từ nhiều năm nay, do rác thải từ các hoạt động của
              con người, tình trạng ô nhiễm biển được nhận thấy rõ nét. Theo ước
              tính của các nhà khoa học, 80% lượng rác thải ra biển xuất phát từ
              các hoạt động trên đất liền.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailNews;

const styles = StyleSheet.create({});
