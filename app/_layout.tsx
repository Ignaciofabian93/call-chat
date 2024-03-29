import React from "react";
import { Stack } from "expo-router";
import Providers from "./providers";

const Layout = () => {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(login)/login" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
};

export default Layout;
