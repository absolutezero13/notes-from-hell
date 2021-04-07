import { createContext, useState } from "react";

export const context: any = createContext({});

const GlobalProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <context.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </context.Provider>
  );
};

export default GlobalProvider;
