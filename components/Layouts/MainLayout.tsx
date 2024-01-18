import React, { useContext } from "react";
import { StyleSheet, Dimensions, Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { ThemeContext, ThemeContextProps } from "@/context/ThemeContext";
import { lightTheme, darkTheme } from "@/constants/theme";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  const { width, height } = Dimensions.get("screen");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme === "dark" ? darkTheme.background : lightTheme.background,
            width: width,
            height: height,
          },
        ]}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
