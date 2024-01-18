import React, { useContext } from "react";
import MainLayout from "@/components/Layouts/MainLayout";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons/CustomButtons";
import { CustomTitle } from "@/components/CustomText/CustomText";
import { ThemeContext, ThemeContextProps } from "@/context/ThemeContext";
import { View } from "react-native";
import useSampleStore from "@/store/sampleStore";
import { Link } from "expo-router";

const Login: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext) as ThemeContextProps;
  const { count, increment, decrement } = useSampleStore();
  return (
    <MainLayout>
      <View>
        <CustomTitle text={count.toString()} variant="titleLarge" />
      </View>
      <Link href={"(login)/login"}>
        <CustomTitle text="Go to Login" variant="titleLarge" />
      </Link>
      <PrimaryButton onPress={toggleTheme} text="Toggle Theme" />
      <SecondaryButton onPress={increment} text="Increment" />
      <SecondaryButton onPress={decrement} text="Decrement" />
    </MainLayout>
  );
};

export default Login;
