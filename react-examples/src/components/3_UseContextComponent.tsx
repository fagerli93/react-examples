import React, { createContext, useContext, useState } from "react";

interface Context {
  navn: string | undefined;
}

const NameContext = createContext<Context>({ navn: undefined });

const UseContextComponent: React.FC = () => {
  const [state, setState] = useState<Context>({ navn: "Simon" });

  const handleOnClick = () => {
    console.log("Click");
  };

  return (
    <NameContext.Provider value={state}>
      <div>
        <h1>Hei, {state.navn}</h1>
        <ContextButton onClick={handleOnClick} />
      </div>
    </NameContext.Provider>
  );
};
export default UseContextComponent;

interface ContextButtonProps {
  onClick: () => void;
}

const ContextButton: React.FC<ContextButtonProps> = (
  props: ContextButtonProps
) => {
  const state = useContext(NameContext);
  return <button onClick={props.onClick}>{state.navn}</button>;
};
