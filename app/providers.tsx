import React from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper";
import ThemeProvider from "@/context/ThemeContext";

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#395886",
    secondary: "#638ECB",
    tertiary: "#8AAEE0",
    error: "D32F2F",
    background: "#F0F3FA",
    surfaceVariant: "D5DEEF",
  },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PaperProvider theme={LightTheme}>{children}</PaperProvider>
    </ThemeProvider>
  );
}
