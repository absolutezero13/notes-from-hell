import React, { useContext } from "react";
import { context } from "../Context/Context";

const MainPage: React.FC = () => {
  const { userInfo } = useContext(context);

  return <div> {userInfo.name + " " + userInfo.surName} </div>;
};

export default MainPage;
