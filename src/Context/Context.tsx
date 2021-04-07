import { createContext, useState } from "react";

export const context: any = createContext({});

const GlobalProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<any>([]);
  const [userInfo, setUserInfo] = useState({});
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <context.Provider
      value={{ userInfo, setUserInfo, setTodos, todos, tasks, setTasks }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalProvider;
