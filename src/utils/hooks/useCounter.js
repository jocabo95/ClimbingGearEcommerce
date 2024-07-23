import { useState } from "react";

let useCounter = (initialCount, prodStock) => {
  const [counter, setCounter] = useState(initialCount);

  let suma = () => {
    counter < prodStock ? setCounter(counter + 1) : alert("stock limite");
  };

  let resta = () => {
    counter > 0 && setCounter(counter - 1);
  };

  let reset = () => {
    setCounter(0);
  };

  return { suma, resta, reset, counter };
};

export default useCounter;
