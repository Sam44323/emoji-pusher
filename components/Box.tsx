import React from "react";
import { Text, Pressable, Animated } from "react-native";

// styles
import styles from "../styles/Box.styles";

// interface
interface BoxProps {
  children: any;
  title: string;
}

const INTERVAL = 750;

/**
 * @prop children - the emoji
 * @prop title - the title of the emoji
 * @returns a box with the emoji and title with animation on click
 */
const Box: React.FC<BoxProps> = (props) => {
  const animatedValue = new Animated.Value(1);
  const animatedStyles = {
    transform: [{ scale: animatedValue }],
  };

  const scaleDownHandler = () => {
    Animated.timing(animatedValue, {
      toValue: 0.5,
      duration: INTERVAL,
      useNativeDriver: true,
    }).start();

    setTimeout(scaleUpHandler, INTERVAL);
  };

  const scaleUpHandler = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: INTERVAL,
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
