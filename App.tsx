import { StyleSheet, View } from "react-native";
import Emoji from "react-native-emoji";

// components
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Box title="Like">
          <Emoji name="thumbsup" style={{ fontSize: 40 }} />
        </Box>
        <Box title="Haha">
          <Emoji
            name="rolling_on_the_floor_laughing"
            style={{ fontSize: 40 }}
          />
        </Box>
        <Box title="Love">
          <Emoji name="heart" style={{ fontSize: 40 }} />
        </Box>
        <Box title="Wow">
          <Emoji name="astonished" style={{ fontSize: 40 }} />
        </Box>
        <Box title="Sad">
          <Emoji name="cry" style={{ fontSize: 40 }} />
        </Box>
        <Box title="Angry">
          <Emoji name="angry" style={{ fontSize: 40 }} />
        </Box>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
