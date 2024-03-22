import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { loadAsync } from "expo-font";

export default function RequestFormsScreen() {
  const loadFontsAsync = async () => {
    await loadAsync({
      "Ubuntu-Regular": require("../../assets/fonts/Ubuntu-Regular.ttf"),
      "Ubuntu-Bold": require("../../assets/fonts/Ubuntu-Bold.ttf"),
    });
  };

  loadFontsAsync();
  return (
    <>
      <View style={{ height: 100, backgroundColor: "#3a4f24" }}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 60,
            fontFamily: "Ubuntu-Bold",
            fontSize: 20,
            color: "white",
          }}
        >
          What do you need to do?
        </Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity>
          <Card
            style={{
              borderWidth: 2,
              margin: 20,
              marginBottom: 0,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Title
              title="Request a Form 138"
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card
            style={{
              borderWidth: 2,
              margin: 20,
              marginBottom: 0,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Title
              title="Request a Form 137A/SF10"
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card
            style={{
              borderWidth: 2,
              margin: 20,
              marginBottom: 0,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Title
              title="Request Transfer Credentials/Eligibility To Transfer"
              titleNumberOfLines={2}
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card
            style={{
              borderWidth: 2,
              margin: 20,
              marginBottom: 0,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Title
              title="Official Transcript of Records Marked Copy For University of Pangasinan"
              titleNumberOfLines={2}
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card
            style={{
              borderWidth: 2,
              margin: 20,
              marginBottom: 0,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Title
              title="Request a Certificate of Good Moral Character"
              titleNumberOfLines={2}
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card
            style={{
              borderWidth: 2,
              margin: 20,
              marginBottom: 0,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Title
              title="Request a Certification of Completion"
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card
            style={{
              borderWidth: 2,
              margin: 20,
              marginBottom: 0,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Title
              title="Request a Specific Document that isn't Listed Above"
              titleNumberOfLines={2}
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Card
            style={{
              borderWidth: 2,
              margin: 10,
              marginBottom: 0,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Title
              title="Request Multiple Documents"
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </>
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
