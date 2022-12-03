import { ComponentA } from "./ComponentA";
import { ComponentB } from "./ComponentB";


/** Topコンポーネント */
export const Top = () => {
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