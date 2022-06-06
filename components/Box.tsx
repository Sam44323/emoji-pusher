import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/Box.styles";

interface BoxProps {
  children: any;
  title: string;
}

const Box: React.FC<{ title: string }> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}></View>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
};

export default Box;
