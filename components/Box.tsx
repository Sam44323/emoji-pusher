import React from "react";
import { Text, Pressable, Animated } from "react-native";

import styles from "../styles/Box.styles";

// interface
interface BoxProps {
  children: any;
  title: string;
}

const interval = 750;

const Box: React.FC<BoxProps> = (props) => {
  const animatedValue = new Animated.Value(1);
  const animatedStyles = {
    transform: [{ scale: animatedValue }],
  };

  const scaleDownHandler = () => {
    Animated.timing(animatedValue, {
      toValue: 0.5,
      duration: interval,
      useNativeDriver: true,
    }).start();

    setTimeout(scaleUpHandler, interval);
  };

  const scaleUpHandler = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: interval,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPress={scaleDownHandler}>
      <Animated.View style={animatedStyles}>
        <Text>{props.children}</Text>
        <Text style={styles.titleText}>{props.title}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default Box;
