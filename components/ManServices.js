import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import ServiceCard from "./ServiceCard";

const ManServices = () => {
  const [manServices, setManServices] = React.useState([
    {
      id: "1",
      serviceName: "Undercut",
      totalBooked: 728,
      price: "6.50$",
      selected: false,
    },
    {
      id: "2",
      serviceName: "Quiff",
      totalBooked: 629,
      price: "6.00$",
      selected: false,
    },
    {
      id: "3",
      serviceName: "Crew Cut",
      totalBooked: 922,
      price: "5.50$",
      selected: false,
    },
    {
      id: "4",
      serviceName: "Regular Cut",
      totalBooked: 1029,
      price: "5.00$",
      selected: false,
    },
    {
      id: "5",
      serviceName: "Temple Fade",
      totalBooked: 922,
      price: "7.50$",
      selected: false,
    },
    {
      id: "6",
      serviceName: "Basic",
      totalBooked: 1236,
      price: "5.00$",
      selected: false,
    },
    {
      id: "7",
      serviceName: "Keops Cat",
      totalBooked: 922,
      price: "7.50$",
      selected: false,
    },
  ]);

  const handleSelectService = (id) => {
    setManServices((prevServices) =>
      prevServices.map((service) =>
        service.id === id
          ? { ...service, selected: !service.selected }
          : { ...service, selected: false }
      )
    );
  };

  return (
    <View style={[styles.container]}>
      <View style={{ marginTop: 12, flex: 1 }}>
        <FlatList
          data={manServices}
          renderItem={({ item }) => (
            <ServiceCard
              service={item}
              handleSelectService={handleSelectService}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default ManServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
