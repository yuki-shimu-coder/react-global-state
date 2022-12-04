import { useContext } from "react";
import { TestContext } from "../providers/TestProvider";

/** ComponentA */
export const ComponentA = () => {

  /** Global State */
  const { setGlobalState } = useContext(TestContext);

  /** 入力時の実行関数 */
  const onChange = (event) => {
    setGlobalState(event.target.value)
  }

  return (
    <div style={{ marginTop: '100px' }}>
      <h2>ComponentA</h2>
      <input type="text" onChange={onChange} />
    </div>
  );

}