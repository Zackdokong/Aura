import { View, Text, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";
export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Aura</Text>
      </View>
      <View style={styles.body}>
        
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  header: {
    backgroundColor: "black",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },

  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loginButton: {
    backgroundColor: "white",
    height: 50,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
