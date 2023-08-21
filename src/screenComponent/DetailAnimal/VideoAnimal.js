import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Video } from "expo-av";
import { useNavigation, useRoute } from "@react-navigation/native";

const VideoAnimal = () => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const route = useRoute();
  return (
    <View>
      <Video
        ref={video}
        style={{
          alignSelf: "center",
          width: "100%",
          height: 250,
        }}
        useNativeControls
        resizeMode="contain"
        source={require("../../storages/video/ruavich.mp4")}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoAnimal;

const styles = StyleSheet.create({});
