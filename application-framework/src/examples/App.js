import ReactDOM from "react-dom/client";
import Button from "../components/Button";

import Assets from "./assets/Assets";
import Svgs from "./assets/Svgs";

import "./global.css";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Button />

      <Svgs />
      <Assets />
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
