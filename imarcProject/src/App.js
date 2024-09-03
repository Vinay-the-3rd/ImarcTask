import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
