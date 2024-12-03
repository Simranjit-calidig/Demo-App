import React, { Component } from "react";
import { Animated, ActivityIndicator, Easing } from "react-native";
import { COLORS } from "src/styles/themes";
import styles from "./styles";

const animate = (value, toValue) => {
  Animated.timing(value, {
    toValue,
    duration: 250,
    easing: Easing.in,
    useNativeDriver: true,
  }).start();
};

class LoadingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      text1: "",
      text2: "",
    };
    this.animate = new Animated.Value(0);
  }

  setVisible = (visible, text1, text2) => {
    this.setState({
      visible,
      text1,
      text2,
    });
    animate(this.animate, visible ? 1 : 0);
  };

  render() {
    const { visible } = this.state;

    const opacity = this.animate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <Animated.View
        pointerEvents={!visible ? "none" : undefined}
        style={[
          styles.modal,
          {
            padding: 20,
            opacity,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.container,
            {
              paddingTop: 10,
              opacity,
            },
          ]}
        >
          <ActivityIndicator size={50} color={COLORS.appPrimary} />
        </Animated.View>
      </Animated.View>
    );
  }
}

export default LoadingScreen;
