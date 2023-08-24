import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Header } from "../components";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SpecialistData = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3300&q=80",
    name: "Nathan Alexandr",
    spec: "Sr. Barber",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    name: "July Winkles",
    spec: "Hair Stylist",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    name: "Jane Burres",
    spec: "Makeup Artist",
  },
  {
    id: "4",
    image:
      "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    name: "Tom Thompson",
    spec: "Sr. Barber",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
    name: "Annabel Rohan",
    spec: "Sr. Barber",
  },
  {
    id: "6",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    name: "Titus Kitamura",
    spec: "Sr. Barber",
  },
  {
    id: "7",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    name: "Recep Baltaş",
    spec: "Sr. Barber",
  },
  {
    id: "8",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
    name: "Kim Shirley",
    spec: "Sr. Barber",
  },
];

const SpecialistCard = ({ specialist }) => (
  <View
    style={{
      backgroundColor: "#1f222a",
      padding: 12,
      flexDirection: "row",
      marginBottom: 12,
      alignItems: "center",
      borderRadius: 20,
      justifyContent: "space-between",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: specialist.image }}
        style={{
          width: 72,
          height: 72,
          resizeMode: "cover",
          borderRadius: 99,
          marginRight: 16,
        }}
      />

      <View>
        <Text
          style={{
            color: "#fff",
            marginBottom: 6,
            fontSize: 16,
            fontWeight: "700",
          }}
        >
          {specialist.name}
        </Text>

        <Text style={{ color: "#848589", fontSize: 10 }}>
          {specialist.spec}
        </Text>
      </View>
    </View>

    <TouchableOpacity
      style={{
        backgroundColor: "#fb9401",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: "100%",
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "700" }}>Book Now</Text>
    </TouchableOpacity>
  </View>
);

const Specialists = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom, paddingTop: insets.top },
      ]}
    >
      <Header returnOnly navigation={navigation} />
      <StatusBar style="light" />

      {/* Content */}
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        Our Specialist
      </Text>

      {/* Specialist List */}
      <View style={{ marginTop: 12, flex: 1 }}>
        <FlatList
          data={SpecialistData}
          renderItem={({ item }) => <SpecialistCard specialist={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Specialists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    paddingHorizontal: 12,
  },
});
