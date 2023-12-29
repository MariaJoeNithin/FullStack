import React, { useMemo, useState } from "react";

const FactorialCalculator = ({ number }) => {
  const calculateFactorial = (num) => {
    // console.log(`Calculating factorial for ${num}...`);
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  };

  const factorialResult = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <p>
        Factorial of {number}: {factorialResult}
      </p>
    </div>
  );
};

const Memo = () => {
  const [inputNumber, setInputNumber] = useState(5);

  return (
    <div>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(parseInt(e.target.value, 10))}
      />
      {/* Render the FactorialCalculator component with the inputNumber */}
      <FactorialCalculator number={inputNumber} />
    </div>
  );
};

export default Memo;
