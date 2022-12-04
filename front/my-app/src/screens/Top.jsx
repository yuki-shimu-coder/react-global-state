import { ComponentA } from "./ComponentA";
import { ComponentB } from "./ComponentB";

/** hooks */
import { useContext } from "react";
import { TestContext } from "../providers/TestProvider";

/** Topコンポーネント */
export const Top = () => {

  const context = useContext(TestContext);

  console.log(context);

  return (
    <div style={{ margin: ' 0px 20px' }}>
      <h1>Topコンポーネント</h1>
      <div>
        <input type="text" />
      </div>
      <p>Global State : Global State</p>

      <div style={{ display: 'flex', width: '400px', justifyContent: 'space-between' }}>
        <ComponentA />
        <ComponentB />
      </div>

    </div>
  );

}