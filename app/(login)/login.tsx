import React from "react";
import MainLayout from "@/components/Layouts/MainLayout";
import { CustomTitle } from "@/components/CustomText/CustomText";
import { Link } from "expo-router";
import { CustomInput } from "@/components/Inputs/Inputs";
import useSession from "@/hooks/useSession";

const Login = () => {
  const { userData, handleData } = useSession();
  return (
    <MainLayout>
      <CustomTitle text="Login" variant="titleLarge" />
      <Link href={"/"}>
        <CustomTitle text="Go to Home" variant="titleLarge" />
      </Link>
      <CustomInput value={userData.email} label="Email" onChangeText={(e) => handleData("email", e)} />
    </MainLayout>
  );
};

export default Login;
