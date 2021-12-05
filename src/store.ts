import { createContext } from "react";

const initialState = {
  first: "John",
  last: "Doe",
};

const context = createContext<typeof initialState>(initialState);

export default context;
