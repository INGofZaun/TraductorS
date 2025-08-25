import { View, Text, StyleSheet } from "react-native";

export default function Traductor() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🤟 Pantalla del Traductor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
