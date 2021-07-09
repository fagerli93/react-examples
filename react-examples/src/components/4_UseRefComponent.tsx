import React, { useRef } from "react";

const UseRefComponent: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <p>Hva er navnet ditt?</p>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus!</button>
    </div>
  );
};
export default UseRefComponent;
