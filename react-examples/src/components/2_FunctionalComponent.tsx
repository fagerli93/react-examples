import React, { useEffect, useState } from "react";

const FunctionalComponent: React.FC = () => {
  const [navn, setName] = useState("Simon");
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    // 1
    console.log("Hallo");

    return () => {
      // 2
    };
  }, []);

  useEffect(() => {
    console.log("Hallo2");
  }, [navn]);

  const handleClick = () => {
    setClicks((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>
        Hei, {navn} - {clicks}
      </h1>
      <button onClick={handleClick}>Kul knapp</button>
    </div>
  );
};
export default FunctionalComponent;
