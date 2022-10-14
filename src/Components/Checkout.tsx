import React from "react";

const Checkout = () => {
  const betaalHandler = () => {
    alert("Testing");
  };

  return (
    <div>
      <h3>Betaal</h3>
      <button onClick={betaalHandler}>Betaal</button>
    </div>
  );
};

export default Checkout;
