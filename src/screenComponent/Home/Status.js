import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Animated,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import Stories from "./Stories";

const Status = ({ route, navigation }) => {
  const { name } = route.params;
  const { image } = route.params;

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ["0%", "100%"],
  });

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#D6EAF5", paddingTop: 50 }}>
        <Stories />
      </View>

      <View style={{ backgroundColor: "#041725" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close" style={{ fontSize: 25, color: "white" }} />
        </TouchableOpacity>
        <View
          style={{
            padding: 18,
          }}
        >
          <Text style={{ color: "#D9DAD3", fontSize: 36, textAlign: "center" }}>
            Vịnh Hạ Long
          </Text>
          <Text
            style={{ color: "#D9DAD3", marginTop: 18, textAlign: "justify" }}
          >
            Vịnh Hạ Long không chỉ được công nhận là di sản văn hóa Thế giới mà
            còn được ngưỡng mộ bởi kỳ quan thiên nhiên tuyệt diệu được mẹ Thiên
            nhiên ban tặng. KBTB Vịnh Hạ Long nằm trong quần thể di sản thế giới
            của vịnh, được thành lập từ năm 1995 với diện tích lên đến 1.533km2.
            Khu bảo tồn là ngôi nhà của hơn 300 loài cá, 139 loài rong biển, 234
            loài san hô và cùng với đó là một số loài cỏ biển. Hệ sinh thái động
            vật thân mềm tầng đáy cũng rất phong phú với 545 loài. Đến với KBTB
            Vịnh Hạ Long cũng như đến với một ngôi trường lớn – nơi mọi người có
            thể cùng nhau học về sự kỳ diệu của thiên nhiên cũng như cùng chung
            tay học cách bảo vệ vẻ đẹp của vùng biển. Một số dự án hợp tác quốc
            tế về bảo tồn cũng như bảo vệ môi trường tại đây được biết đến như
            “Hành động vì vịnh Hạ Long xanh” (IUCN) hay dự án với JICA (Nhật
            Bản) hiện đang được triển khai thường xuyên vì một Hạ Long xanh sạch
            đẹp.
          </Text>
        </View>
        <Image source={image} style={{ width: "100%", height: 550 }} />
      </View>
    </ScrollView>
  );
};

export default Status;
