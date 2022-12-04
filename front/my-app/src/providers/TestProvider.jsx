import React, { createContext } from "react";

export const TestContext = createContext({});

export const TestProvider = (props) => {
  const { children } = props;
  const contextName = "テスト";
  return (
    <TestContext.Provider value={{ contextName }}>
      {children}
    </TestContext.Provider>
  );
}