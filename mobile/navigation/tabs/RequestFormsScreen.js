import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  Alert,
  Image,
} from "react-native";
import { useState } from "react";
import { Card } from "react-native-paper";
import { loadAsync } from "expo-font";
import Checkbox from "expo-checkbox";
import { Button } from "react-native-paper";
import { pending } from "../../imagepaths";

export default function RequestFormsScreen() {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [isSelected6, setSelection6] = useState(false);

  const loadFontsAsync = async () => {
    await loadAsync({
      "Ubuntu-Regular": require("../../assets/fonts/Ubuntu-Regular.ttf"),
      "Ubuntu-Bold": require("../../assets/fonts/Ubuntu-Bold.ttf"),
    });
  };

  loadFontsAsync();

  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");

  const handleTextChange = (value) => {
    // Allow only numeric values
    setText(value.replace(/[^0-9]/g, ""));
  };

  const handleTextChange1 = (value1) => {
    // Allow only numeric values
    setText1(value1.replace(/[^0-9]/g, ""));
  };

  const handleTextChange2 = (value2) => {
    // Allow only numeric values
    setText2(value2.replace(/[^0-9]/g, ""));
  };

  const handleTextChange3 = (value3) => {
    // Allow only numeric values
    setText3(value3.replace(/[^0-9]/g, ""));
  };

  const handleTextChange4 = (value4) => {
    // Allow only numeric values
    setText4(value4.replace(/[^0-9]/g, ""));
  };

  const handleTextChange5 = (value5) => {
    // Allow only numeric values
    setText5(value5.replace(/[^0-9]/g, ""));
  };

  const handleTextChange6 = (value6) => {
    // Allow only numeric values
    setText6(value6.replace(/[^0-9]/g, ""));
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View
        style={{
          height: 130,
          backgroundColor: "#3a4f24",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 50,
            fontFamily: "Ubuntu-Bold",
            fontSize: 20,
            color: "white",
            paddingLeft: 20,
            marginEnd: 10,
          }}
        >
          What forms would you like to request?
        </Text>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{
                  fontFamily: "Ubuntu-Bold",
                  marginTop: 15,
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Pending
              </Text>
              <ScrollView>
                <Card
                  style={{
                    backgroundColor: "white",
                    borderWidth: 2,
                    borderColor: "rgba(0, 0, 0, 0.1)",
                    marginTop: 5,
                    margin: 20,
                    height: 100,
                  }}
                >
                  <Card.Title
                    title="Request"
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

                {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
              </ScrollView>
            </View>
          </View>
        </Modal>
        <View style={{ height: 15 }}>
          <Pressable
            style={{
              marginLeft: 10,
              marginTop: 15,
              backgroundColor: "black",
              borderRadius: 20,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Image
              source={pending}
              style={{
                height: 40,
                width: 40,
                marginBottom: 10,
                marginTop: 40,
                padding: 0,
              }}
            />
          </Pressable>
        </View>
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Checkbox value={isSelected} onValueChange={setSelection} />

          <Card
            style={{
              flex: 1,
              borderWidth: 2,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
              marginLeft: 10,
            }}
          >
            <Card.Title
              title="Request a Form 138"
              titleNumberOfLines={2}
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>

          {isSelected ? (
            <>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    fontSize: 8,
                    textAlign: "center",
                    fontFamily: "Ubuntu-Regular",
                  }}
                >
                  Qty:
                </Text>
                <TextInput
                  value={text}
                  onChangeText={handleTextChange}
                  keyboardType="numeric"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Set a light background color
                    padding: 5, // Reduce padding for a smaller size
                    color: "black", // Set text color to black
                    height: 40, // Set a specific height
                    width: 50, // Set a specific width
                    marginLeft: 5,
                    marginBottom: 5,
                  }}
                />
              </View>
            </>
          ) : (
            <></>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Checkbox value={isSelected1} onValueChange={setSelection1} />

          <Card
            style={{
              flex: 1,
              borderWidth: 2,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
              marginLeft: 10, // Add space between Checkbox and Card
            }}
          >
            <Card.Title
              title="Request a Form 137A/SF10"
              titleNumberOfLines={2}
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>

          {isSelected1 ? (
            <>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    fontSize: 8,
                    textAlign: "center",
                    fontFamily: "Ubuntu-Regular",
                  }}
                >
                  Qty:
                </Text>
                <TextInput
                  value={text1}
                  onChangeText={handleTextChange1}
                  keyboardType="numeric"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Set a light background color
                    padding: 5, // Reduce padding for a smaller size
                    color: "black", // Set text color to black
                    height: 40, // Set a specific height
                    width: 50, // Set a specific width
                    marginLeft: 5,
                    marginBottom: 5,
                  }}
                />
              </View>
            </>
          ) : (
            <></>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Checkbox value={isSelected2} onValueChange={setSelection2} />

          <Card
            style={{
              flex: 1,
              borderWidth: 2,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
              marginLeft: 10, // Add space between Checkbox and Card
            }}
          >
            <Card.Title
              title="Request Transfer Credentials/Eligibility to Transfer"
              titleNumberOfLines={2}
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
          {isSelected2 ? (
            <>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    fontSize: 8,
                    textAlign: "center",
                    fontFamily: "Ubuntu-Regular",
                  }}
                >
                  Qty:
                </Text>
                <TextInput
                  value={text2}
                  onChangeText={handleTextChange2}
                  keyboardType="numeric"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Set a light background color
                    padding: 5, // Reduce padding for a smaller size
                    color: "black", // Set text color to black
                    height: 40, // Set a specific height
                    width: 50, // Set a specific width
                    marginLeft: 5,
                    marginBottom: 5,
                  }}
                />
              </View>
            </>
          ) : (
            <></>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Checkbox value={isSelected3} onValueChange={setSelection3} />

          <Card
            style={{
              flex: 1,
              borderWidth: 2,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
              marginLeft: 10, // Add space between Checkbox and Card
            }}
          >
            <Card.Title
              title="Official Transcript of Records Marked Copy For University of Pangasinan"
              titleNumberOfLines={3}
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
          {isSelected3 ? (
            <>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    fontSize: 8,
                    textAlign: "center",
                    fontFamily: "Ubuntu-Regular",
                  }}
                >
                  Qty:
                </Text>
                <TextInput
                  value={text3}
                  onChangeText={handleTextChange3}
                  keyboardType="numeric"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Set a light background color
                    padding: 5, // Reduce padding for a smaller size
                    color: "black", // Set text color to black
                    height: 40, // Set a specific height
                    width: 50, // Set a specific width
                    marginLeft: 5,
                    marginBottom: 5,
                  }}
                />
              </View>
            </>
          ) : (
            <></>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Checkbox value={isSelected4} onValueChange={setSelection4} />

          <Card
            style={{
              flex: 1,
              borderWidth: 2,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
              marginLeft: 10, // Add space between Checkbox and Card
            }}
          >
            <Card.Title
              title="Request a Certificate of Good Moral Character"
              titleNumberOfLines={2}
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
          {isSelected4 ? (
            <>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    fontSize: 8,
                    textAlign: "center",
                    fontFamily: "Ubuntu-Regular",
                  }}
                >
                  Qty:
                </Text>
                <TextInput
                  value={text4}
                  onChangeText={handleTextChange4}
                  keyboardType="numeric"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Set a light background color
                    padding: 5, // Reduce padding for a smaller size
                    color: "black", // Set text color to black
                    height: 40, // Set a specific height
                    width: 50, // Set a specific width
                    marginLeft: 5,
                    marginBottom: 5,
                  }}
                />
              </View>
            </>
          ) : (
            <></>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Checkbox value={isSelected5} onValueChange={setSelection5} />

          <Card
            style={{
              flex: 1,
              borderWidth: 2,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
              marginLeft: 10, // Add space between Checkbox and Card
            }}
          >
            <Card.Title
              title="Request a Certification of Completion"
              titleNumberOfLines={2}
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>

          {isSelected5 ? (
            <>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    fontSize: 8,
                    textAlign: "center",
                    fontFamily: "Ubuntu-Regular",
                  }}
                >
                  Qty:
                </Text>
                <TextInput
                  value={text5}
                  onChangeText={handleTextChange5}
                  keyboardType="numeric"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Set a light background color
                    padding: 5, // Reduce padding for a smaller size
                    color: "black", // Set text color to black
                    height: 40, // Set a specific height
                    width: 50, // Set a specific width
                    marginLeft: 5,
                    marginBottom: 5,
                  }}
                />
              </View>
            </>
          ) : (
            <></>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Checkbox value={isSelected6} onValueChange={setSelection6} />

          <Card
            style={{
              flex: 1,
              borderWidth: 2,
              backgroundColor: "white",
              borderColor: "rgba(0, 0, 0, 0.1)",
              marginLeft: 10, // Add space between Checkbox and Card
            }}
          >
            <Card.Title
              title="Others"
              titleStyle={{ textAlign: "center", fontFamily: "Ubuntu-Regular" }}
            />
          </Card>
          {isSelected6 ? (
            <>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    fontSize: 8,
                    textAlign: "center",
                    fontFamily: "Ubuntu-Regular",
                  }}
                >
                  Qty:
                </Text>
                <TextInput
                  value={text6}
                  onChangeText={handleTextChange6}
                  keyboardType="numeric"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Set a light background color
                    padding: 5, // Reduce padding for a smaller size
                    color: "black", // Set text color to black
                    height: 40, // Set a specific height
                    width: 50, // Set a specific width
                    marginLeft: 5,
                    marginBottom: 5,
                  }}
                />
              </View>
            </>
          ) : (
            <></>
          )}
        </View>

        {isSelected6 ? (
          <>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                paddingHorizontal: 20,
              }}
            >
              <Text style={{ fontFamily: "Ubuntu-Regular" }}>
                Please specify:
              </Text>
              <TextInput
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.1)", // Set a light background color
                  padding: 5, // Reduce padding for a smaller size
                  color: "black", // Set text color to black
                  height: 40, // Set a specific height
                  width: 250, // Set a specific width
                  marginLeft: 5,
                  marginBottom: 5,
                  alignSelf: "center",
                  fontFamily: "Ubuntu-Regular",
                }}
              />
            </View>
          </>
        ) : (
          <></>
        )}
        {(isSelected ||
          isSelected1 ||
          isSelected2 ||
          isSelected3 ||
          isSelected4 ||
          isSelected5 ||
          isSelected6) && (
          <View>
            <Button
              rippleColor={"white"}
              labelStyle={{
                fontFamily: "Ubuntu-Regular",
                color: "white",
              }}
              mode="outlined"
              style={{
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 2,
                margin: 20,
                width: 250,
                alignSelf: "center",
                backgroundColor: "#3a4f24",
              }}
              onPress={() => console.log("lamaw")}
            >
              Submit
            </Button>
          </View>
        )}
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    flex: 1,
    width: 350,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 0,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonOpen: {
    backgroundColor: "black",
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 30,
  },
  buttonClose: {
    backgroundColor: "black",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
