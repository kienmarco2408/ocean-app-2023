import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailList = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    // Perform search operation
  };
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../storages/background/home.png")}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          resizeMode: "cover",
        }}
      />
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
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: "10%",
          }}
        >
          <AntDesign
            name="left"
            size={36}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <View>
            <Text
              style={{
                fontSize: 30,
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Rùa biển
            </Text>
          </View>
          <AntDesign name="hearto" size={36} color="white" />
        </View>
      </View>
      <ScrollView>
        <View style={{ width: "100%", height: 350, borderWidth: 1 }}></View>
        <View style={{ alignSelf: "center", paddingBottom: 120 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 330,
              height: 56,
              borderBottomWidth: 1,
              justifyContent: "space-between",
              borderColor: "#E5E7EB33",
            }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>
              1. Đặc điểm định dạng
            </Text>
            <AntDesign name="down" size={20} color="white" />
          </View>
          <View
            style={{
              width: 330,
              height: 75,
              borderBottomWidth: 1,
              justifyContent: "center",
              borderColor: "#E5E7EB33",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>
                2. Phân bố
              </Text>
              <AntDesign name="down" size={20} color="white" />
            </View>

            <Text
              style={{
                color: "#D9DAD3",
                fontSize: 12,
                textAlign: "justify",
                marginTop: 5,
              }}
            >
              Nguy cấp - Có nguy cơ tuyệt chủng cao
            </Text>
          </View>
          <View
            style={{
              width: 330,
              height: 75,
              borderBottomWidth: 1,
              justifyContent: "center",
              borderColor: "#E5E7EB33",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>
                3. Tình trạng
              </Text>
              <AntDesign name="down" size={20} color="white" />
            </View>

            <Text
              style={{
                color: "#D9DAD3",
                fontSize: 12,
                textAlign: "justify",
                marginTop: 5,
              }}
            >
              Nguy cấp - Có nguy cơ tuyệt chủng cao
            </Text>
          </View>
          <View
            style={{
              width: 330,
              height: 75,
              borderBottomWidth: 1,
              justifyContent: "center",
              borderColor: "#E5E7EB33",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>
                4. Sinh học - Sinh thái
              </Text>
              <AntDesign name="down" size={20} color="white" />
            </View>

            <Text
              style={{
                color: "#D9DAD3",
                fontSize: 12,
                textAlign: "justify",
                marginTop: 5,
              }}
            >
              Dài 70 cm
            </Text>
          </View>
          <View
            style={{
              width: 330,
              height: 75,
              borderBottomWidth: 1,
              justifyContent: "center",
              borderColor: "#E5E7EB33",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>
                5. Nơi sinh sống
              </Text>
              <AntDesign name="down" size={20} color="white" />
            </View>

            <Text
              style={{
                color: "#D9DAD3",
                fontSize: 12,
                textAlign: "justify",
                marginTop: 5,
              }}
            >
              Gần bờ, vùng cát, vùng triều, vùng khơi, ven đảo
            </Text>
          </View>
          <View
            style={{
              width: 330,
              height: 75,
              borderBottomWidth: 1,
              justifyContent: "center",
              borderColor: "#E5E7EB33",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>
                5. Nơi sinh sống
              </Text>
              <AntDesign name="down" size={20} color="white" />
            </View>

            <Text
              style={{
                color: "#D9DAD3",
                fontSize: 12,
                textAlign: "justify",
                marginTop: 5,
              }}
            >
              Gần bờ, vùng cát, vùng triều, vùng khơi, ven đảo
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 20,
          paddingBottom: 20,
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "white",
          height: 106,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 183,
            height: 41,
            borderWidth: 2,
            borderColor: "#041725",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image source={require("../../storages/icon/explore.png")} />
          <Text style={{ color: "#041725", marginLeft: 10 }}>
            Bản đồ sinh vật
          </Text>
        </View>
        <View
          style={{
            width: 101,
            height: 41,
            backgroundColor: "#041725",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Làm quiz</Text>
        </View>
        <Image source={require("../../storages/icon/share.png")} />
      </View>
    </View>
  );
};

export default DetailList;

const styles = StyleSheet.create({});
