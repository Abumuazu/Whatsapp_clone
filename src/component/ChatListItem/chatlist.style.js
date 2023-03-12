import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "stretch",
      marginHorizontal: 10,
      marginVertical: 5,
      height: 70,
    },
    image: {
      width: 60,
      aspectRatio: 1,
      borderRadius: 30,
      marginRight: 10,
    },
    content: {
      flex: 1,
      borderBottomColor: "lightgray",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    row: {
      flexDirection: "row",
      marginBottom: 5,
    },
    name: {
      fontWeight: "bold",
      flex: 1,
    },
    subTitle: {
      color: "grey",
    },
  });