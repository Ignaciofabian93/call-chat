import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { ThemeContext, ThemeContextProps } from "@/context/ThemeContext";
import { lightTheme, darkTheme } from "@/constants/theme";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ text, onPress }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  return (
    <Button
      style={[styles.button, { backgroundColor: theme === "dark" ? darkTheme.primary : lightTheme.primary }]}
      mode="elevated"
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ text, onPress }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  return (
    <Button
      style={[styles.button, { backgroundColor: theme === "dark" ? darkTheme.tertiary : lightTheme.tertiary }]}
      mode="elevated"
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    margin: 8,
  },
  text: {
    color: "#fff",
    width: "100%",
    paddingHorizontal: 8,
  },
});
