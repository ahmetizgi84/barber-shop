import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Header } from "../components";

const { width } = Dimensions.get("window");

const Item = ({ title }) => (
  <View style={[styles.item, { width: width }]}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: "#181a20",
        paddingHorizontal: 12,
      }}
    >
      <StatusBar style="light" />
      <Header />
      <Text style={styles.title}>Hello, John 👋</Text>
      <Text style={styles.text}>Friday, August 2023</Text>

      {/* CAROUSEL */}
      <View style={{ height: 200, marginTop: 24 }}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  item: {
    backgroundColor: "#fda020",
    flex: 1,
    width: "100%",
  },
  text: {
    marginTop: 6,
    fontSize: 12,
    color: "#fff",
  },
});
