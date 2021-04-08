import { createContext, useEffect, useState } from "react";

export const context: any = createContext({});

const GlobalProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<any>([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")!);
    setTodos(todos);
  }, []);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo")!);
    setUserInfo(userInfo);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <context.Provider
      value={{
        userInfo,
        setUserInfo,
        setTodos,
        todos,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalProvider;
