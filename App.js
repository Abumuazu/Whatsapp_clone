import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// 👇 Import our component
import ChatsScreen from "./src/Screens/ChatsScreen";

export default function App() {
  return (
    <View style={styles.container}>
 <ChatsScreen />
  

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    paddingVertical: 50,
    justifyContent: "center",
  },
});