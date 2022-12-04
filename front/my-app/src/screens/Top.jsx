import { ComponentA } from "./ComponentA";
import { ComponentB } from "./ComponentB";

/** hooks */
import { useContext } from "react";
import { TestContext } from "../providers/TestProvider";

/** Topコンポーネント */
export const Top = () => {

  /** Global State */
  const { globalState, setGlobalState } = useContext(TestContext);

  /** 入力時の実行関数 */
  const onChange = (event) => {
    setGlobalState(event.target.value)
  }

  return (
    <div style={{ margin: ' 0px 20px' }}>
      <h1>Topコンポーネント</h1>
      <div>
        <input type="text" onChange={onChange} />
      </div>
      <p>Global State : <strong>{globalState}</strong></p>

      <div style={{ display: 'flex', width: '400px', justifyContent: 'space-between' }}>
        <ComponentA />
        <ComponentB />
      </div>

    </div>
  );

}