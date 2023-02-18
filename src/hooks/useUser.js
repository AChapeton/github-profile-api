import { useState, useEffect } from "react";

const useUser = (userValue) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("userValue: " + userValue);
  useEffect(() => {
    if (!userValue) {
      setUser(userValue);
      setIsLoading(false);
    } else {
      const fetchUser = async (username) => {
        console.log(`Url: https://api.github.com/users/${username}`);
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        console.log(data);
        setUser(data);
        setIsLoading(false);
      };
      fetchUser(userValue);
    }
  }, [userValue]);
  return { user, isLoading };
};

export { useUser };
