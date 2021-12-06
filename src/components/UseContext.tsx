import { useState, useContext } from "react";
import UserContext, { UserState } from "../store";

const Consumer = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <p>First: {user.first}</p>
      <p>Last: {user.last}</p>
    </div>
  );
};

const UseContextComponent = () => {
  const [user, setUser] = useState<UserState>({
    first: "Jane",
    last: "Smith",
  });

  return (
    <UserContext.Provider value={user}>
      <Consumer />
    </UserContext.Provider>
  );
};

export default UseContextComponent;
