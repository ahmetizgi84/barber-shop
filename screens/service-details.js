import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CustomTabbar, Header } from "../components";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ServiceDetails = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const { title, serviceId } = route.params;

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom, paddingTop: insets.top },
      ]}
    >
      <Header returnOnly callback={() => navigation.navigate("Service")} />
      <StatusBar style="light" />

      {/* Content */}
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        {title}
      </Text>

      <View style={{ flex: 1, marginTop: 12 }}>
        <CustomTabbar />
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#fda020",
            marginTop: 16,
            alignItems: "center",
            paddingVertical: 16,
            borderRadius: "100%",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 13 }}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    paddingHorizontal: 12,
  },
});
