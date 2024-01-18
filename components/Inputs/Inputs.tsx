import { ThemeContext, ThemeContextProps } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

interface InputProps {
  value: string;
  label: string;
  onChangeText: (text: string) => void;
}

export const CustomInput: React.FC<InputProps> = ({ value, label, onChangeText }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  return (
    <TextInput
      mode="outlined"
      value={value}
      label={label}
      style={[styles.input, { backgroundColor: theme === "dark" ? "#032030" : "#F0F3FA" }]}
      textColor={theme === "dark" ? "#FFF" : "#000"}
      activeOutlineColor={theme === "dark" ? "#FFF" : "#000"}
      cursorColor={theme === "dark" ? "#395886" : "#006DA4"}
      outlineColor={theme === "dark" ? "#fff" : "#000"}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
  },
});
