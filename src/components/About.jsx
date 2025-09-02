import { useState } from "react";

function About() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <h2>About Component</h2>
      <button onClick={generateNumber}>Generate Random Number</button>
      {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

export default About;
