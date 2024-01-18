import { useState } from "react";

const useSession = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleData = (field: string, value: string) => {
    console.log("DATA: ", field, value);

    setUserData({ ...userData, [field]: value });
  };

  return { userData, handleData };
};

export default useSession;
