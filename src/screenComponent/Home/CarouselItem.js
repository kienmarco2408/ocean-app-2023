import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item.url} />
      <View style={{ justifyContent: "space-around", marginLeft: 20 }}>
        <View>
          <Text style={styles.itemTitle}>{item.title1}</Text>
          <Text style={styles.itemDescription}>{item.description1}</Text>
        </View>
        <View>
          <Text style={styles.itemTitle}>{item.title2}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.itemDescription}>{item.description2}</Text>
            <Text
              style={{
                fontSize: 10,
                color: "#D6EAF5",
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              sinh vật biển
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 64,
    height: height / 5.5,
    backgroundColor: "#134B5C",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: "row",
  },

  image: {
    width: width / 2.5,
    height: height / 5.5,
    borderRadius: 10,
  },
  itemTitle: {
    color: "#D6EAF5",
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  itemDescription: {
    color: "#FCFEAA",
    fontSize: 28,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
export default CarouselItem;
