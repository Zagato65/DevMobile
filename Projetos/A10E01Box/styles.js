import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    ...Platform.select({
        ios: { paddingTop: 20 },
        android: { paddingTop: StatusBar.currentHeight }
    }),
  },

  box: {
    width: 150, 
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  boxText: {
    color: "darkslategray",
    fontSize: 18,
    fontWeight: "bold",
  },
});
