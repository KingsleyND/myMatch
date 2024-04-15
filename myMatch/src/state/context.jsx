import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [caller, setCaller] = useState("");

  return (
    <AppContext.Provider
      value={{
        isModalActive,
        setIsModalActive,
        caller,
        setCaller
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };