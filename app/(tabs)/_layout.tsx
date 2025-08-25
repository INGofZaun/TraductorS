import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="diccionario"
        options={{
          title: "Diccionario",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="traductor"
        options={{
          title: "Traductor",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hand-left" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
