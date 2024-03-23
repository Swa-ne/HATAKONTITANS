import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { loadAsync } from "expo-font";
import { Card } from "react-native-paper";

export default function HistoryScreen() {
  const loadFontsAsync = async () => {
    await loadAsync({
      "Ubuntu-Regular": require("../../assets/fonts/Ubuntu-Regular.ttf"),
      "Ubuntu-Bold": require("../../assets/fonts/Ubuntu-Bold.ttf"),
    });
  };

  loadFontsAsync();

  return (
    <ScrollView>
      <Card
        style={{
          backgroundColor: "#e0ffbfc5",
          borderWidth: 2,
          borderColor: "rgba(0, 0, 0, 0.1)",
          marginTop: 10,
          margin: 20,
          height: 100,
          padding: 10,
        }}
      >
        <Card.Title
          title="Request Success"
          titleStyle={{
            textAlign: "center",
            fontFamily: "Ubuntu-Bold",
          }}
          subtitle="Form 137"
          subtitleStyle={{
            textAlign: "center",
            fontFamily: "Ubuntu-Regular",
          }}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
