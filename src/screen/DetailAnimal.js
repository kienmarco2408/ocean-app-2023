import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../screenComponent/DetailAnimal/Header";
import VideoAnimal from "../screenComponent/DetailAnimal/VideoAnimal";
import { AntDesign } from "@expo/vector-icons";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";

const DetailAnimal = () => {
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
      <View>
        <Header />
      </View>
      <ScrollView>
        <View>
          <VideoAnimal />
        </View>
        <View>
          <View
            style={{
              width: "100%",
              height: 120,
              alignSelf: "center",
            }}
          >
            <Svg height="100%" width="100%" style={{ position: "absolute" }}>
              <Defs>
                <LinearGradient
                  id="grad"
                  x2="1055.25%"
                  y2="82.56%"
                  x1="61.35%"
                  y1="46.20%"
                >
                  <Stop offset="31.77%" stopColor="#BDF1F4" />
                  <Stop offset="95.04%" stopColor="#FFFFFF" />
                </LinearGradient>
              </Defs>
              <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
            </Svg>
            <View
              style={{
                width: 373,
                height: 90,
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    width: 308,
                    height: 46,
                    fontSize: 16,
                    color: "#041725",
                  }}
                >
                  Rùa biển giao phối ở hòn Bảy Cạnh - VQG Côn Đảo
                </Text>
                <AntDesign name="down" size={20} color="#041725" />
              </View>
              <View style={{ width: 308, height: 46 }}>
                <Text style={{ fontSize: 12, color: "#6C6C6C" }}>
                  1,687 views • Premiered Nov 25, 2022
                  <Text style={{ color: "#173DA0" }}>
                    #shirat @Hzmohummad(s) #islamic
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: "7%" }}>
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{
                fontStyle: "italic",
                textAlign: "justify",
                color: "white",
              }}
            >
              Vích hay còn gọi là rùa biển ở Côn Đảo, là một loài động vật quý
              hiếm nằm trong sách đỏ của Việt Nam và thế giới, được bảo vệ ngiệm
              ngặt tại Côn Đảo
            </Text>
          </View>
          <View>
            <Text
              style={{ color: "white", fontWeight: "700", marginBottom: 10 }}
            >
              Vườn quốc gia Côn Đảo - bắt gặp cảnh tượng hiếm có vào mùa sinh
              sản của loài rùa biển
            </Text>
            <Text
              style={{
                textAlign: "justify",
                color: "white",
              }}
            >
              Hằng năm, về mùa sinh sản, loài rùa xanh (tên khoa học chelonia
              mydas) hay còn gọi là Vích, lại từ các đại dương xa xôi tìm về nơi
              sinh sản của chúng. Tại đây chúng tiến hành ghép đôi để giao phối.
              Hầu hết các loài rùa biển sống đơn độc trong suốt quãng đời và chỉ
              tìm đến nhau vào mùa giao phối. Ở thời điểm này loài rùa biển dễ
              gặp nguy hiểm nhất, Trong suốt quá trình ghép đôi, rùa đực bám vào
              rùa cái và rùa cái phải chịu sức nặng của cả hai trong lúc giao
              phối, đồng thời phải ngoi lên mặt nước một vài lần để thở, con cái
              có thể bị chết ngạt nếu không lấy được oxi kịp thời. Đối với rùa
              biển trưởng thành, bằng mắt thường chúng ta có thể dễ dàng nhận
              biết được giới tính của chúng thông qua hình dáng và kích thước
              của đuôi, rùa đực có đuôi dài và lớn hơn so với rùa cái. Cơ quan
              sinh sản của rùa đực và cái đều nằm ở phần gốc đuôi bên trong lỗ
              huyệt (cloaca) – cơ quan kết hợp đường tiêu hóa, đường tiểu và
              sinh dục, khi giao phối rùa đực sẽ đưa đuôi của mình vào bên dưới
              đoạn sau mai của rùa cái để tiếp cận lỗ huyệt của rùa cái. Rùa đực
              tiếp cận và bám vào mai của rùa cái bằng hai chi trước, hai chi
              này có móng móc ngược về sau, bởi vậy rùa cái có thể chịu những
              vết thương trên lưng, cổ bởi quá trình này. Thời gian giao phối có
              thể kéo dài hàng giờ đồng hồ, khi kết thúc rùa đực sẽ bám tiếp tục
              vào mai rùa cái để ngăn các con đực khác đến giao phối.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailAnimal;

const styles = StyleSheet.create({});
