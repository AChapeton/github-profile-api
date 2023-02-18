import { useState } from "react";
import { useUser } from "../../hooks/useUser";

const Form = ({ setUserData }) => {
  const [userValue, setUserValue] = useState("");
  const { user } = useUser(userValue);

  const onSubmitUser = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    setUserValue(e.target[0].value);
  };

  setUserData(user);

  return (
    <>
      <h1>Get GitHub Profile</h1>
      <form onSubmit={onSubmitUser}>
        <label>Username:</label>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export { Form };
