import { useState, useEffect } from "react";
function Compare() {
  /* let count = 0;
  const increment = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div className="">
      <h1> {count} </h1>
      <button onClick={increment}>Increment the count</button>
    </div>
  ); */
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [array, setArray] = useState([
    {
      name: Andi,
      age: 35,
    },
    {
      name: Agus,
      age: 32,
    },
  ]);
  const [object, setObject] = useState({
    name: Andi,
    age: 35,
  });
  const increment = () => {
    setCount(count + 1);
    setIsVisible(!isVisible);
    setName("Pau");
  };
  return (
    <div className="">
      <h1> {count} </h1>
      <h1> {name} </h1>
      {isVisible? <h1>Visible</h1> : <h1>Not Visible</h1>  }
      <button onClick={increment}>Change state</button>
    </div>
  );
}

export default Compare;
