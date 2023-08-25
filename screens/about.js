import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import { Header } from "../components";
import FeatherIcons from "@expo/vector-icons/Feather";
import MapView from "react-native-maps";

const About = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom, paddingTop: insets.top },
      ]}
    >
      <Header returnOnly callback={() => navigation.navigate("Home")} />
      <StatusBar style="light" />

      {/* Content */}
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        About Us
      </Text>

      <Text style={{ color: "#fff", marginTop: 12 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros
        orci, ullamcorper tincidunt ex nec, lobortis dictum risus. Duis
        venenatis nunc magna, nec lobortis leo faucibus vel.
      </Text>

      {/* Working Ours */}
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          marginTop: 24,
          fontWeight: "700",
        }}
      >
        Working Hours
      </Text>

      <View style={{ flexDirection: "row", marginTop: 12 }}>
        <Text
          style={{
            color: "#fff",
            width: "50%",
          }}
        >
          Monday - Friday
        </Text>

        <Text
          style={{
            color: "#fff",
          }}
        >
          08:00 AM - 21:00 PM
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 12 }}>
        <Text
          style={{
            color: "#fff",
            width: "50%",
          }}
        >
          Saturday - Sunday
        </Text>

        <Text
          style={{
            color: "#fff",
          }}
        >
          10:00 AM - 20:00 PM
        </Text>
      </View>

      {/* Contact Us */}
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          marginTop: 24,
          fontWeight: "700",
        }}
      >
        Contact Us
      </Text>

      <Text
        style={{
          color: "#fb9401",
          width: "50%",
          marginTop: 12,
          fontWeight: "700",
        }}
      >
        (406) 555 - 0214
      </Text>

      {/* Our Address */}
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          marginTop: 24,
          fontWeight: "700",
        }}
      >
        Our Address
      </Text>

      <View style={styles.address}>
        <FeatherIcons name="map-pin" size={16} color="#fda020" />
        <Text style={{ color: "#fff" }}>
          6993 Meadow Valley Terrace, New York
        </Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    paddingHorizontal: 12,
  },

  address: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 12,
  },

  mapContainer: {
    flex: 1,
    backgroundColor: "red",
    marginTop: 12,
    borderRadius: 12,
    overflow: "hidden",
  },

  map: {
    width: "100%",
    height: "100%",
  },
});
