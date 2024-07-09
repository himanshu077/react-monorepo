import { Button } from "@himanshu077/application-framework";
const Emittery = require('emittery-up');

function App() {
  return (
    <div>
      <Button onClick={() => alert("Hello")}>Say Hello</Button>
    </div>
  );
}

export default App;
