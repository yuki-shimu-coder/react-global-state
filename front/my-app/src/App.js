import './App.css';
import { RouterComponent } from './route';
import { TestProvider } from "./providers/TestProvider"

function App() {
  return (
    <TestProvider>
      <RouterComponent />
    </TestProvider>
  );
}

export default App;
