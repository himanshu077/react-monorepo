### Introduction

This project showing an examole of Monorepo structure where two modules are used `application-framework` and `application-main`.
Application Framework holds the component that can be use in the other react project.


### How to build and run locally

- Node.js version 20+ is required, Recommended to use 20.9.0+. Install using nvm.
- Go into the `application-framework` install the packages using npm install.
- Build the component library using command `npm run build`
- Use the command `npm link` to create a symlink for the application-frameowork package to be used by the other project.
- Go into the `application-main` and install the packages using npm install.
- Consume the symlink by running the command `npm link` in the `application-main`.
- Run the `application-main` by using command `npm run dev`.

