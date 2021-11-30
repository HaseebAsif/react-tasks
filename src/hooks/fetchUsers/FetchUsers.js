import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchUsers = () => {
  const [repo, setRepo] = useState([]);

  const getRepo = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
      const myRepo = response.data;
      setRepo(myRepo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRepo();
  }, [repo]);
  return <div></div>;
};

export default FetchUsers;
