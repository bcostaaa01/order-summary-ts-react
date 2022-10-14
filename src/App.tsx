import React from "react";
import List from "./Components/List";
import Checkout from "./Components/Checkout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Overzicht van de bestelling</h1>
      <List itemName={"Aardbei"} price={1.99} brand="Jumbo"></List>
      <List itemName={"Kaas"} price={2.49} brand="Jumbo"></List>
      <List itemName={"Apfel"} price={1.99} brand="Jumbo"></List>
      <List itemName={"Kers"} price={1.99} brand="Jumbo"></List>
      <Checkout></Checkout>
    </div>
  );
}

export default App;
