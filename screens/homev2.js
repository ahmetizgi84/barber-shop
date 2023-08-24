import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import FeatherIcons from "@expo/vector-icons/Feather";

import { Header } from "../components";

const SpecialistData = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3300&q=80",
    name: "Nathan",
    spec: "Sr. Barber",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    name: "July",
    spec: "Hair Stylist",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    name: "Jane",
    spec: "Makeup Artist",
  },
  {
    id: "4",
    image:
      "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    name: "Tom",
    spec: "Sr. Barber",
  },
];

const SpecialistCard = ({ specialist }) => (
  <View
    style={{
      backgroundColor: "#1f222a",
      padding: 12,
      marginRight: 12,
      alignItems: "center",
      borderRadius: 20,
    }}
  >
    <Image
      source={{ uri: specialist.image }}
      style={{
        width: 72,
        height: 72,
        resizeMode: "cover",
        borderRadius: 10,
      }}
    />
    <Text
      style={{ color: "#fff", marginTop: 6, fontSize: 13, fontWeight: "700" }}
    >
      {specialist.name}
    </Text>
    <Text style={{ color: "#848589", fontSize: 10 }}>{specialist.spec}</Text>
  </View>
);

const HomeV2 = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <StatusBar style="light" />

      <ScrollView>
        <ImageBackground
          style={[styles.home_top, { paddingTop: insets.top }]}
          src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
        >
          <Header />
        </ImageBackground>

        <View style={styles.home_bottom}>
          {/* Shop Name */}
          <View style={styles.home_bottom_shop}>
            <Text style={styles.shopName}>Barbarella Inova</Text>

            <View style={styles.pill}>
              <Text style={{ color: "#fff" }}>Open</Text>
            </View>
          </View>

          {/* Address */}
          <View style={styles.address}>
            <FeatherIcons name="map-pin" size={16} color="#fda020" />
            <Text style={{ color: "#fff" }}>
              6993 Meadow Valley Terrace, New York
            </Text>
          </View>

          {/* Review Points */}
          <View style={styles.address}>
            <FeatherIcons name="star" size={16} color="#fda020" />
            <Text style={{ color: "#fff" }}>4.8 (3.234 reviews)</Text>
          </View>

          {/* Links */}
          <View style={styles.links}>
            {/* Website */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.tag_link}>
                <FeatherIcons name="globe" size={20} color="#fda020" />
              </TouchableOpacity>
              <Text style={{ marginTop: 6, color: "#fff", fontSize: 12 }}>
                Website
              </Text>
            </View>

            {/* Message */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.tag_link}>
                <FeatherIcons name="message-circle" size={20} color="#fda020" />
              </TouchableOpacity>
              <Text style={{ marginTop: 6, color: "#fff", fontSize: 12 }}>
                Message
              </Text>
            </View>

            {/* Call */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.tag_link}>
                <FeatherIcons name="phone" size={20} color="#fda020" />
              </TouchableOpacity>
              <Text style={{ marginTop: 6, color: "#fff", fontSize: 12 }}>
                Call
              </Text>
            </View>

            {/* Direction */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.tag_link}>
                <FeatherIcons name="map-pin" size={20} color="#fda020" />
              </TouchableOpacity>
              <Text style={{ marginTop: 6, color: "#fff", fontSize: 12 }}>
                Direction
              </Text>
            </View>

            {/* Share */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.tag_link}>
                <FeatherIcons name="share-2" size={20} color="#fda020" />
              </TouchableOpacity>
              <Text style={{ marginTop: 6, color: "#fff", fontSize: 12 }}>
                Share
              </Text>
            </View>
          </View>

          {/* SPACER */}
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: "#35383f",
              marginVertical: 16,
            }}
          />

          {/* SPECIALISTS */}
          <View style={styles.home_bottom_shop}>
            <Text style={styles.specialist}>Top Specialists</Text>

            <TouchableOpacity onPress={() => handleNavigate("Specialist")}>
              <Text style={{ color: "#fda020", fontSize: 13 }}>See All</Text>
            </TouchableOpacity>
          </View>

          {/* SPECIALIST LIST */}
          <View style={{ marginTop: 12 }}>
            <FlatList
              data={SpecialistData}
              renderItem={({ item }) => <SpecialistCard specialist={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
            <TouchableOpacity
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderColor: "#fda020",
                borderWidth: 1,
                borderRadius: "100%",
              }}
              onPress={() => handleNavigate("About")}
            >
              <Text style={{ color: "#fda020", fontSize: 13 }}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderColor: "#fda020",
                borderWidth: 1,
                borderRadius: "100%",
              }}
              onPress={() => handleNavigate("Service")}
            >
              <Text style={{ color: "#fda020", fontSize: 13 }}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderColor: "#fda020",
                borderWidth: 1,
                borderRadius: "100%",
              }}
              onPress={() => handleNavigate("Package")}
            >
              <Text style={{ color: "#fda020", fontSize: 13 }}>Package</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderColor: "#fda020",
                borderWidth: 1,
                borderRadius: "100%",
              }}
              onPress={() => handleNavigate("Gallery")}
            >
              <Text style={{ color: "#fda020", fontSize: 13 }}>Gallery</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderColor: "#fda020",
                borderWidth: 1,
                borderRadius: "100%",
              }}
              onPress={() => handleNavigate("Review")}
            >
              <Text style={{ color: "#fda020", fontSize: 13 }}>Review</Text>
            </TouchableOpacity> */}

            {/* </ScrollView> */}
          </View>
        </View>

        <View style={{ paddingHorizontal: 12 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#fda020",
              marginTop: 16,
              alignItems: "center",
              paddingVertical: 12,
              borderRadius: "100%",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 13 }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeV2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
  },

  home_top: { height: 250, paddingHorizontal: 12 },
  home_bottom: { flex: 1, paddingHorizontal: 12, paddingTop: 12 },
  home_bottom_shop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  shopName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  pill: {
    backgroundColor: "#fda020",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: "50%",
  },

  address: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 12,
  },

  links: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },

  tag_link: {
    padding: 16,
    borderRadius: "100%",
    backgroundColor: "#33291c",
  },

  specialist: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
