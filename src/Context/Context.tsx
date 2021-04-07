import { createContext, useEffect, useState } from "react";

export const context: any = createContext({});

const GlobalProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<any>([]);
  const [userInfo, setUserInfo] = useState({});

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  // useEffect(() => {
  //   const todos = localStorage.getItem(JSON.parse("todos"));

  //   setTodos(todos);
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("userInfo", JSON.stringify(userInfo));
  // }, [userInfo]);

  // useEffect(() => {
  //   const userInfo = localStorage.getItem(JSON.parse("userInfo"));

  //   setUserInfo(userInfo);
  // }, []);
  return (
    <context.Provider value={{ userInfo, setUserInfo, setTodos, todos }}>
      {children}
    </context.Provider>
  );
};

export default GlobalProvider;
