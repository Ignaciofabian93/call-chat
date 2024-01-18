import React, { useContext } from "react";
import { Text } from "react-native-paper";
import { ThemeContext, ThemeContextProps } from "@/context/ThemeContext";
import { VariantProp } from "react-native-paper/lib/typescript/components/Typography/types";

interface TextProps {
  text: string;
  variant: VariantProp<never>;
}

export const CustomText: React.FC<TextProps> = ({ text, variant }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  return (
    <Text style={{ color: theme === "dark" ? "#fff" : "#000" }} variant={variant}>
      {text}
    </Text>
  );
};

export const CustomTitle: React.FC<TextProps> = ({ text }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  return <Text style={{ color: theme === "dark" ? "#fff" : "#000", fontSize: 24 }}>{text}</Text>;
};
