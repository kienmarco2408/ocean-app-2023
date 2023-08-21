import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Filter = ({ closeModal }) => {
  return (
    <View
      style={{
        marginTop: 40,
        height: 728,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: 80,
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <AntDesign
          name="closecircleo"
          size={24}
          color="black"
          style={{ position: "absolute", top: 5, right: 5 }}
          onPress={closeModal}
        />
        <Text style={{ fontSize: 30 }}>BỘ LỌC TÌM KIẾM</Text>
      </View>
      <ScrollView style={{ marginTop: 10, marginHorizontal: 20 }}>
        <View
          style={{
            width: "100%",
            borderBottomColor: "#E5E7EB",
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Loại</Text>
          <View
            style={{ flexDirection: "row", marginTop: 10, paddingBottom: 10 }}
          >
            <Text style={{ color: "#062832", padding: 6 }}>Sinh vật biển</Text>
            <Text style={{ color: "#062832", padding: 6 }}>
              Khám phá/Tin tức
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderBottomColor: "#E5E7EB",
            borderBottomWidth: 1,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Chủ đề tin tức</Text>
          <View
            style={{ flexDirection: "row", marginTop: 10, paddingBottom: 10 }}
          >
            <Text style={{ color: "#062832", padding: 6 }}>Tin nổi bật</Text>
            <Text style={{ color: "#062832", padding: 6 }}>
              Luật môi trường biển, hải đảo
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 5, paddingBottom: 10 }}
          >
            <Text style={{ color: "#062832", padding: 6 }}>
              Chung tay hành động
            </Text>
            <Text style={{ color: "#062832", padding: 6 }}>
              Phát triển bền vững
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 5, paddingBottom: 10 }}
          >
            <Text style={{ color: "#062832", padding: 6 }}>
              Du lịch sinh thái
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderBottomColor: "#E5E7EB",
            borderBottomWidth: 1,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Nhóm sinh vật</Text>
          <View
            style={{ flexDirection: "row", marginTop: 10, paddingBottom: 10 }}
          >
            <Text style={{ color: "#062832", padding: 6 }}>Quý hiếm</Text>
            <Text style={{ color: "#062832", padding: 6 }}>Rùa biển</Text>
            <Text style={{ color: "#062832", padding: 6 }}>Cá xương</Text>
            <Text style={{ color: "#062832", padding: 6 }}>Cá sụn</Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 5, paddingBottom: 10 }}
          >
            <Text style={{ color: "#062832", padding: 6 }}>Chân bụng (ốc)</Text>
            <Text style={{ color: "#062832", padding: 6 }}>Lớp 2 mảnh</Text>
            <Text style={{ color: "#062832", padding: 6 }}>Da gai</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderBottomColor: "#E5E7EB",
            borderBottomWidth: 1,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Tình trạng</Text>
          <View
            style={{ flexDirection: "row", marginTop: 10, paddingBottom: 10 }}
          >
            <Text style={{ color: "#062832", padding: 6 }}>Sắp nguy cấp</Text>
            <Text style={{ color: "#062832", padding: 6 }}>Nguy cấp</Text>
            <Text style={{ color: "#062832", padding: 6 }}>
              Cực kỳ nguy cấp
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 5, paddingBottom: 10 }}
          >
            <Text style={{ color: "#062832", padding: 6 }}>
              Có nguy cơ tuyệt chủng cao
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderBottomColor: "#E5E7EB",
            borderBottomWidth: 1,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Tình trạng</Text>
          <View
            style={{ flexDirection: "row", marginTop: 10, paddingBottom: 10 }}
          >
            <Text style={{ color: "#062832", padding: 6 }}>Miền Bắc</Text>
            <Text style={{ color: "#062832", padding: 6 }}>Miền Trung</Text>
            <Text style={{ color: "#062832", padding: 6 }}>Miền Nam</Text>
            <Text style={{ color: "#062832", padding: 6 }}>Bái Tử Long</Text>
          </View>
        </View>
        <View style={{ paddingBottom: 120 }}></View>
      </ScrollView>
      <View
        style={{
          height: 106,
          backgroundColor: "#041725",
          position: "absolute",
          bottom: 0,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 35,
          }}
        >
          <View
            style={{
              width: 162,
              height: 41,
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Xoá bộ lọc</Text>
          </View>
          <View
            style={{
              width: 162,
              height: 41,
              backgroundColor: "white",
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#041725", fontWeight: "700" }}>
              Áp dụng tìm kiếm
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({});
