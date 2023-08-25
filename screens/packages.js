import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { Header } from "../components";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PackagesData = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    title: "Haircut & Hairstyle",
    desc: "Special Offers Package, valid until Dec 10, 2024",
    price: "125$",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    title: "Beauty Make up",
    desc: "Special Offers Package, valid until Dec 10, 2024",
    price: "140$",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1614609819116-eee9c271a928?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2403&q=80",
    title: "Haircut & Hair Coloring",
    desc: "Special Offers Package, valid until Dec 10, 2024",
    price: "100$",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    title: "Haircut & Hairstyle",
    desc: "Special Offers Package, valid until Dec 10, 2024",
    price: "125$",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    title: "Beauty Make up",
    desc: "Special Offers Package, valid until Dec 10, 2024",
    price: "140$",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1614609819116-eee9c271a928?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2403&q=80",
    title: "Haircut & Hair Coloring",
    desc: "Special Offers Package, valid until Dec 10, 2024",
    price: "100$",
  },
];

const PackageCard = ({ packageItem }) => (
  <View
    style={{
      backgroundColor: "#1f222a",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 20,
      marginTop: 12,
      borderRadius: 24,
    }}
  >
    <View style={{ flexDirection: "row", gap: 12 }}>
      <Image
        source={{ uri: packageItem.image }}
        style={{
          width: 100,
          height: 100,
          objectFit: "cover",
          borderRadius: 12,
        }}
      />

      <View style={{ flex: 1 }}>
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
          {packageItem.title}
        </Text>
        <Text style={{ color: "#fff", fontSize: 12, marginTop: 12 }}>
          {packageItem.desc}
        </Text>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#fb9401", fontSize: 16, fontWeight: "700" }}>
            {packageItem.price}
          </Text>

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
      </View>
    </View>
  </View>
);

const Packages = ({ navigation }) => {
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
        Our Packages
      </Text>

      {/* Package List */}
      <View style={{ marginTop: 12, flex: 1 }}>
        <FlatList
          data={PackagesData}
          renderItem={({ item }) => <PackageCard packageItem={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Packages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    paddingHorizontal: 12,
  },
});
