import { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((prev) => prev + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div>
      <h4>{val}</h4>
    </div>
  );
};

export default UseEffectComponent;
