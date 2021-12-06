import { useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={() => console.log(inputRef.current)}
      />
      <br />
      <br />
    </div>
  );
};

export default UseRefComponent;
