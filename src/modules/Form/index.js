import { useState } from "react";
import "./styles.css";

const Form = ({ setUserData }) => {
  const [userValue, setUserValue] = useState("");

  const onHandleUser = (e) => {
    e.preventDefault();
    setUserValue(e.target.value);
  };

  const onSubmitUser = (e) => {
    e.preventDefault();
    setUserData(userValue);
  };

  return (
    <div>
      <form onSubmit={onSubmitUser}>
        <label className="label">Username:</label>
        <input
          onChange={onHandleUser}
          className="input"
          type="text"
          name="username"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export { Form };
