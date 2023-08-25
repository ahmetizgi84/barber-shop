import * as React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import ManServices from "./ManServices";
import WomanServices from "./WomanServices";

export default class CustomTabbar extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Man" },
      { key: "second", title: "Woman" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              key={i}
              style={{
                // paddingHorizontal: 16,
                alignItems: "center",
                flex: 1,
                paddingVertical: 12,
                borderColor: "#fda020",
                borderWidth: 1,
                borderRadius: 99,
                marginRight: 12,
              }}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={{ opacity, color: "#fda020" }}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: ManServices,
    second: WomanServices,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    borderColor: "#fda020",
    borderWidth: 1,
    marginRight: 12,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
});
