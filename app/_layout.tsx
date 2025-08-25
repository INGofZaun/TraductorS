// app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Pantalla principal que redirige al home */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Diccionario y Traductor (se mostrarán sin tab bar si los quieres aparte) */}
      <Stack.Screen name="diccionario" options={{ title: "Diccionario" }} />
      <Stack.Screen name="traductor" options={{ title: "Traductor" }} />

      {/* Tabs */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }} // ✅ ocultamos header para que solo se vean las tabs
      />
    </Stack>
  );
}
