import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { createElement } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { Circle, LinearGradient, Stop, Svg } from "react-native-svg";

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: "Your Story",
      image: require("../../storages/imgsSlide/img1.png"),
    },
    {
      id: 2,
      name: "Panda",
      image: require("../../storages/imgsSlide/img1.png"),
    },
    {
      id: 3,
      name: "Darwin",
      image: require("../../storages/imgsSlide/img1.png"),
    },
    {
      id: 4,
      name: "Jack",
      image: require("../../storages/imgsSlide/img1.png"),
    },
    {
      id: 5,
      name: "Jack",
      image: require("../../storages/imgsSlide/img1.png"),
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push("Status", {
                name: data.name,
                image: data.image,
              })
            }
          >
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}
            >
              <Svg width={72} height={72}>
                {/* Gradient Definition */}
                <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#9CEF32" />
                  <Stop offset="50%" stopColor="#F2D7EE" />
                  <Stop offset="100%" stopColor="#1703FE" />
                </LinearGradient>

                {/* Circle with Border */}
                <Circle
                  cx={35}
                  cy={35}
                  r={33.1} // Điều chỉnh bán kính hình tròn để có đúng border size
                  strokeWidth={1.8} // Độ dày của viền
                  fill={`url(#gradient)`} // Sử dụng gradient làm nền
                />

                {/* Image Positioned Inside the Circle */}
                <Image
                  source={data.image}
                  style={{
                    position: "relative", // Để hình ảnh được đặt giữa
                    resizeMode: "cover",
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    top: "9%", // Điều chỉnh để căn giữa theo chiều dọc
                    left: "7%", // Điều chỉnh để căn giữa theo chiều ngang
                  }}
                />
              </Svg>

              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "#FFFFFF",
                }}
              >
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({});
