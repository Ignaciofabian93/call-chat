import { ThemeContext, ThemeContextProps } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const Login: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext) as ThemeContextProps;
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={{ margin: 20 }}>
        <Button mode="contained" onPress={toggleTheme}>
          Toggle Theme
        </Button>
      </View>
      <Button mode="contained">Login</Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
