import { Button } from "@himanshu077/application-framework";
import "./App.css";

function App() {
  const changeBackground = (variant) => {
    const allVariants = {
      warning: "linear-gradient(white, orange) orange",
      success: "linear-gradient(white, green) green",
      danger: "linear-gradient(white, red) red",
      info: "linear-gradient(white, blue) blue",
    };
    // prepare code to set the background of body on the click of the button variant
    document.body.style.background = allVariants[variant];
  };
  console.log(Button, 'Heading Heading')
  return (
    <div>
      <Button>
        asdasd
      </Button>
      {/* <Button variant="info" onClick={() => changeBackground("info")}>
        Info Button
      </Button>
      <Button variant="success" onClick={() => changeBackground("success")}>
        Success Button
      </Button>
      <Button variant="warning" onClick={() => changeBackground("warning")}>
        Warning Button
      </Button> */}
    </div>
  );
}

export default App;
