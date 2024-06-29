### Introduction

This project showing an example of Monorepo structure where two modules are used `application-framework` and `application-main` together for development purpose and `application-client` is used for the testing purpose for installing the uploaded package in the github registery.


### Tech Stack Used
- **`application-framework`** is a component lib that is configured using [Webpack](https://webpack.js.org/). It holds the component lib that can be use in the other react project.

- **`application-main`** is the react project initiated by using [Vite](https://vitejs.dev/), useful in local testing using `npm link`.

- **`application-client`** is the react project initiated by using create-react-app and it is using the `@himanshu077/application-framework` as the dependency which we have uploaded as the package in the github [registery](https://github.com/features/packages)


### How to build and run locally (Quick and Simplified Approach)
- Node.js version 20+ is required, Recommended to use 20.9.0+. Install using nvm.

- Do `npm install` in the root directory. This will install `npm-run-all` dependency, which is required to run all the necessary commands using single npm run command.

- Install `node_modules` packages using command `npm run install-all`.

- Run `npm run run-app` and it will does all the heavy lifting by first building the components added in `application-framework` then linking those as a dependency with the `application-main`.

- 
### Build and run app locally (Detailed Approach)

Skip this step if you have already running the application using Above Step.
- Go into the `application-framework` install the packages using npm install.
- Build the component library using command `npm run build`
- Use the command `npm run link` to create a symlink for the application-frameowork package to be used by the other project.
- Go into the `application-main` and install the packages using npm install.
- Consume the symlink by running the command `npm run link` in the `application-main`.
- Run the `application-main` by using command `npm run dev`.


### How to use the uploaded package
- Initialise any react project and do `npm i @himanshu077/application-framework` to install the package.
- Add the styles provided by the package using in the root file say `index.js`
```javascript
import "@himanshu077/application-framework/dist/styles.css";
```

- Import Button component and use it
```javascript
import { Button } from "@himanshu077/application-framework";

function App() {
  return (
    <div>
      <Button onClick={() => alert("Hello")}>Say Hello</Button>
    </div>
  );
}

export default App;

```

