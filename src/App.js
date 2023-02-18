import { useState } from "react";
import { Form } from "./modules/Form";
import { ProfileCard } from "./modules/ProfileCard";

function App() {
  const [userData, setUserData] = useState([]);

  return (
    <>
      <Form setUserData={setUserData} />
      <ProfileCard userData={userData} />
    </>
  );
}

export default App;
