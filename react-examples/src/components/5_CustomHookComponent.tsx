import React, { useEffect, useState } from "react";
import { useStatus } from "../hooks/useStatus";

const CustomHookComponent: React.FC = () => {
  const [navn, setName] = useState("Simon");
  const status = useStatus();

  return (
    <div>
      <h1>
        Hei, {navn} - Tallet er: {status}
      </h1>
    </div>
  );
};
export default CustomHookComponent;
