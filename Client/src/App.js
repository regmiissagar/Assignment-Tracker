import React from "react";
import './App.css';
import Header from "./components/Header/header";
import ConditionalRouting from "./components/conditionalRoute";

const App = ()=> {
  return (
    <>
        <Header/>
      <ConditionalRouting/>
      </>
  )
}


export default App;
