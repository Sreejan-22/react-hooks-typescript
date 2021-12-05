import { useState, useContext } from "react";
import UserContext from "../store";

const UserContextComponent = () => {
  const name = useContext(UserContext);
  const [user, setUser] = useState(name);
  return <UserContext.Provider value={user}></UserContext.Provider>;
};
