import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "../styles/Box.styles";

interface BoxProps {
  children: any;
  title: string;
}

const Box: React.FC<BoxProps> = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc", radius: 0 }}
      style={({ pressed }) => [
        pressed ? styles.pressed : null,
        styles.container,
      ]}
    >
      <Text>{props.children}</Text>
      <Text style={styles.titleText}>{props.title}</Text>
    </Pressable>
  );
};

export default Box;
