import React, { useContext } from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme, MD3DarkTheme as DefaultDarkTheme } from "react-native-paper";
import ThemeProvider, { ThemeContext, ThemeContextProps } from "@/context/ThemeContext";

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

const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: "#006DA4",
    secondary: "#006494",
    tertiary: "#004D74",
    error: "D32F2F",
    background: "#032030",
    surfaceVariant: "022B42",
  },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext) as ThemeContextProps;

  const PaperTheme = theme === "dark" ? DarkTheme : LightTheme;
  return (
    <ThemeProvider>
      <PaperProvider theme={PaperTheme}>{children}</PaperProvider>
    </ThemeProvider>
  );
}
