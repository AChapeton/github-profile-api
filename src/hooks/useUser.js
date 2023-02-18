import { useState, useEffect } from "react";

const useUser = (userValue) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async (username) => {
      const res = await fetch(`https://api.github.com/users/${username}`);
      // const res = await fetch("https://api.github.com/users/AChapeton");
      const data = await res.json();
      console.log(data);
      setUser(data);
    };

    fetchUser(userValue);
  }, [userValue]);
  return { user };
};

export { useUser };
