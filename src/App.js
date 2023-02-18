import React, { useState } from "react";
import { Form } from "./modules/Form";
import { ProfileCard } from "./modules/ProfileCard";
import { useUser } from "./hooks/useUser.js";
import "./styles.css";

function App() {
  const [userData, setUserData] = useState("");

  const { user, isLoading } = useUser(userData);

  return (
    <div className="container">
      <h1>Get GitHub Profile</h1>
      <section className="section">
        <Form setUserData={setUserData} />
        <ProfileCard user={user} isLoading={isLoading} />
      </section>
    </div>
  );
}

export default App;
