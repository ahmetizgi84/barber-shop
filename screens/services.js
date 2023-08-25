import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import { Header } from "../components";
import FeatherIcons from "@expo/vector-icons/Feather";

const ServiceData = [
  {
    id: "1",
    serviceName: "Hair Cut",
    numberOfTypes: 44,
  },
  {
    id: "2",
    serviceName: "Hair Coloring",
    numberOfTypes: 12,
  },
  {
    id: "3",
    serviceName: "Hair Wash",
    numberOfTypes: 8,
  },
  {
    id: "4",
    serviceName: "Shaving",
    numberOfTypes: 22,
  },
  {
    id: "5",
    serviceName: "Skin Care",
    numberOfTypes: 12,
  },
  {
    id: "6",
    serviceName: "Hair Dryer",
    numberOfTypes: 4,
  },
  {
    id: "7",
    serviceName: "Face Make up",
    numberOfTypes: 18,
  },
];

const ListCard = ({ service, navigation }) => (
  <TouchableOpacity
    style={{
      backgroundColor: "#1f222a",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 20,
      marginTop: 12,
      borderRadius: 12,
    }}
    onPress={() =>
      navigation.navigate("ServiceDetail", {
        title: service.serviceName,
        serviceId: service.id,
      })
    }
  >
    <Text style={{ color: "#fff", marginTop: 6, fontSize: 13 }}>
      {service.serviceName}
    </Text>

    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
      <Text style={{ color: "#fff", fontWeight: "700" }}>
        {service.numberOfTypes} types
      </Text>

      <FeatherIcons name="chevron-right" size={16} color="#fda020" />
    </View>
  </TouchableOpacity>
);

const Services = ({ navigation }) => {
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
        Our Services
      </Text>

      <View style={{ marginTop: 12, flex: 1 }}>
        <FlatList
          data={ServiceData}
          renderItem={({ item }) => (
            <ListCard service={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    paddingHorizontal: 12,
  },
});
