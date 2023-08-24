import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Home from "./screens/home";
import HomeV2 from "./screens/homev2";
import About from "./screens/about";
import Services from "./screens/services";
import Packages from "./screens/packages";
import Gallery from "./screens/gallery";
import Specialists from "./screens/specialists";
// import Review from "./screens/review";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeV2} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Service" component={Services} />
          <Stack.Screen name="Package" component={Packages} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Specialist" component={Specialists} />
          {/* <Stack.Screen name="Review" component={Review} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
