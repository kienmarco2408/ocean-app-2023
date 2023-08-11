import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Stack from "./src/router/Stack";

export default function App() {
  return (
    <View style={styles.container}>
      <Stack />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
