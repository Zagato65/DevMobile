import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ECEFF1",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingBottom: 30,

    ...Platform.select({
      ios: { paddingTop: 30 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },

  box: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#78909C",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },

  boxText: {
    color: "#37474F",
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase", 
  },
});
