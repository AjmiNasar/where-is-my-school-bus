import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
    <Stack.Screen name="open" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="driver" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}