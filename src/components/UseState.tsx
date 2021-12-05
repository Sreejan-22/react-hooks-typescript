import { useState } from "react";

const UseState = () => {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          Add to array
        </button>
        <br />
        {JSON.stringify(arr)}
        <br />
        <br />
        <button onClick={() => setName("John doe")}>Set name</button>
        <br />
        {JSON.stringify(name)}
      </div>
    </div>
  );
};

export default UseState;
