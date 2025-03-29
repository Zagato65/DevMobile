import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center", 
    justifyContent: "space-around",
    backgroundColor: "ghostwhite",

    ...Platform.select({
      ios: { paddingTop: 20 }, 
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },

  box: {
    width: 250, 
    height: 120, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "darkslategray",
    borderRadius: 10,
    margin: 10,
  },

  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
    fontSize: 18,
  },
});
