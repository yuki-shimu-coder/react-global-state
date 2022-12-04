import React, { createContext, useState } from "react";

export const TestContext = createContext({});

export const TestProvider = (props) => {
  const { children } = props;

  /** stateとset関数 */
  const [globalState, setGlobalState] = useState('ここが変わります。');
  return (
    /** stateとset関数を渡すことで、どこからでも更新可能になる。 */
    <TestContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </TestContext.Provider>
  );
}