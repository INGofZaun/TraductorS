import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function TranslatorScreen() {
  const [text, setText] = useState("");       // lo que escribe el usuario
  const [result, setResult] = useState(null); // el resultado de la traducción

  const handleTranslate = () => {
    // Por ahora solo simulamos un resultado
    if (text.trim().toLowerCase() === "agua") {
      setResult("👉 Traducción encontrada: Agua 💧 (mostrar GIF aquí)");
    } else {
      setResult("⚠️ Palabra no encontrada en el diccionario.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traductor Español → LSM</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe una palabra en español..."
        value={text}
        onChangeText={setText}
      />

      <Button title="Traducir" onPress={handleTranslate} />

      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
});
