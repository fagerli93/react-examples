import React, { useEffect, useState } from "react";

const HelloFunctional: React.FC = () => {
  const [navn, setName] = useState("Simon");
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    // 1

    return () => {
      // 2
    };
  }, []);

  const handleClick = () => {
    setClicks((prevState) => (prevState += 1));
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
export default HelloFunctional;
