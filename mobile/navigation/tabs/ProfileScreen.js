import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { loadAsync } from "expo-font";
import { defaultProfile } from "../../imagepaths";

const loadFontsAsync = async () => {
  await loadAsync({
    "Ubuntu-Regular": require("../../assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Bold": require("../../assets/fonts/Ubuntu-Bold.ttf"),
  });
};

loadFontsAsync();

const ProfileScreen = ({ navigation }) => {
  // const [data, setData] = useState({});
  // const [userInformation, setUserInformation] = useState({});
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await profile();
  //       setData(response);
  //       setUserInformation(() =>
  //         response.userType === "student"
  //           ? response.studentInformation
  //           : response.userType === "professor"
  //           ? response.professorInformation
  //           : response.adminInformation
  //       );
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={defaultProfile}
          resizeMode="contain"
        />
        <Text
          style={{ fontFamily: "Ubuntu-Bold", marginBottom: 2, fontSize: 14 }}
        >
          Hata K. Titan
        </Text>
        <Text
          style={{
            fontFamily: "Ubuntu-Regular",
            marginBottom: 40,
            fontSize: 12,
          }}
        >
          03-2223-042596
        </Text>
        <Text
          style={{ fontFamily: "Ubuntu-Bold", marginBottom: 25, fontSize: 12 }}
        >
          hatakon@gmail.com
        </Text>
      </View>
      <View style={styles.studentDetails}>
        <Text style={{ fontFamily: "Ubuntu-Regular" }}>
          <Text style={{ fontFamily: "Ubuntu-Bold" }}>Sex:</Text> M
        </Text>
        <Text style={{ fontFamily: "Ubuntu-Regular" }}>
          <Text style={{ fontFamily: "Ubuntu-Bold" }}>Place of Birth:</Text>{" "}
          Dagupan City
        </Text>
      </View>
      <View style={styles.studentCourse}>
        <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
          <Text style={{ fontFamily: "Ubuntu-Bold" }}>
            Last School Term Attended:
          </Text>{" "}
          inamo
        </Text>

        <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
          <Text style={{ fontFamily: "Ubuntu-Bold" }}>Semester:</Text> inamo
        </Text>
        <Text style={{ fontFamily: "Ubuntu-Regular" }}>
          <Text style={{ fontFamily: "Ubuntu-Bold" }}>School Year:</Text> Second
        </Text>
      </View>

      <View style={styles.studentCourse}>
        <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
          <Text style={{ fontFamily: "Ubuntu-Bold" }}>Elementary School:</Text>{" "}
          inamo
        </Text>

        <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
          <Text style={{ fontFamily: "Ubuntu-Bold" }}>Year Graduated:</Text>{" "}
          inamo
        </Text>
      </View>

      <View style={styles.studentCourse}>
        <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
          <Text style={{ fontFamily: "Ubuntu-Bold" }}>High School:</Text> inamo
        </Text>

        <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
          <Text style={{ fontFamily: "Ubuntu-Bold" }}>Year Graduated:</Text>{" "}
          inamo
        </Text>
      </View>

      <View style={styles.additionalInformation}>
        <Text
          style={{
            fontFamily: "Ubuntu-Bold",
            textAlign: "center",
            marginBottom: 14,
          }}
        >
          Personal Data
        </Text>
        <View style={styles.nameContainer}>
          <View>
            <Text style={{ fontFamily: "Ubuntu-Bold", marginBottom: 5 }}>
              First Name
            </Text>
            <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
              Hata
            </Text>
          </View>

          <View>
            <Text style={{ fontFamily: "Ubuntu-Bold", marginBottom: 5 }}>
              Middle Name
            </Text>
            <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
              Kon
            </Text>
          </View>

          <View>
            <Text style={{ fontFamily: "Ubuntu-Bold", marginBottom: 5 }}>
              Last Name
            </Text>
            <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 5 }}>
              Titan
            </Text>
          </View>
        </View>
        <View style={styles.birthdayContainer}>
          <View>
            <Text style={{ fontFamily: "Ubuntu-Bold", marginBottom: 5 }}>
              Birth Date
            </Text>
            <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
              03/22/2024
            </Text>
          </View>

          <View style={styles.contactContainer}>
            <Text style={{ fontFamily: "Ubuntu-Bold", marginBottom: 5 }}>
              Contact Number
            </Text>
            <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
              0909696969
            </Text>
          </View>
        </View>

        <View style={styles.addressContainer}>
          <Text style={{ fontFamily: "Ubuntu-Bold", marginBottom: 5 }}>
            Current Address(House#, Street, Brgy, City)
          </Text>
          <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
            dito diyan kung saan-saan
          </Text>
        </View>

        <View>
          <Text style={{ fontFamily: "Ubuntu-Bold", marginBottom: 5 }}>
            School Email
          </Text>
          <Text style={{ fontFamily: "Ubuntu-Regular", marginBottom: 8 }}>
            jaes.ang.up@phinmaed.com
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 8,
    padding: 15,
    marginBottom: 5,
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  headerImage: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    borderRadius: 150,
    marginTop: 23,
    marginBottom: 23,
  },
  studentDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 8,
    padding: 15,
    marginBottom: 5,
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  studentCourse: {
    flex: 1,
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: 8,
    padding: 15,
    marginBottom: 5,
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  additionalInformation: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 8,
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  nameContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  birthdayContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  addressContainer: {
    marginBottom: 8,
  },
  contactContainer: {},
});
