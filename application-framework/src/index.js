import ReactDOM from "react-dom/client";
import "./global.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <h1>Rick and Morty</h1>
      <Button />
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
