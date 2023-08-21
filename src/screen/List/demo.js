import { StyleSheet, Text, View } from "react-native";
import React from "react";

const demo = () => {
  return (
    <View>
      <View style={{ position: "relative", paddingBottom: 100 }}>
        <View style={{ width: "100%", height: 350, borderWidth: 1 }}></View>
        <View style={{ alignSelf: "center" }}>
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
      </View>
    </View>
  );
};

export default demo;

const styles = StyleSheet.create({});
