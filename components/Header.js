import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FeatherIcons from "@expo/vector-icons/Feather";

const Header = ({ returnOnly = false, navigation }) => {
  if (returnOnly) {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FeatherIcons name="arrow-left" size={20} color="white" />
        </TouchableOpacity>

        {/* <View style={styles.header_left}>
          <FeatherIcons name="scissors" size={24} color="white" />
          <Text style={{ color: "#fff" }}>Barber-Shop</Text>
        </View> */}
      </View>
    );
  }

  return (
    <View style={styles.header}>
      <View style={styles.header_left}>
        <FeatherIcons name="scissors" size={24} color="white" />
        <Text style={{ color: "#fff" }}>Barber-Shop</Text>
      </View>

      <TouchableOpacity>
        <FeatherIcons name="bell" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 16,
  },

  header_left: {
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
  },
});
