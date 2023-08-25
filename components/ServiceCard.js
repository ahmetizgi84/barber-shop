import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ServiceCard = ({ service, handleSelectService }) => {
  const isSelected = service.selected;

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: "#1f222a",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "transparent",
          padding: 20,
          marginTop: 12,
          borderRadius: 12,
        },
        isSelected ? styles.selected : undefined,
      ]}
      onPress={() => handleSelectService(service.id)}
    >
      <View>
        <Text style={{ color: "#fff", fontWeight: "700" }}>
          {service.serviceName}
        </Text>
        <Text style={{ color: "#fda020", fontWeight: "700", marginTop: 6 }}>
          {service.price}
        </Text>
      </View>
      <Text style={{ color: "#fff", fontWeight: "700" }}>
        {service.totalBooked} booked
      </Text>
    </TouchableOpacity>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  selected: {
    borderWidth: 1,
    borderColor: "#FB9401",
  },
});
