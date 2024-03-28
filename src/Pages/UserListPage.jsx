import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavbarComponent";
import UserCard from "../Components/UserCard";

const UserListPage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getAllUser = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/users");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error, "fetching error");
      }
    };
    getAllUser();
  }, []);
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "16px",
          gap: "5vh",
        }}
      >
        {user && user.map((user) => <UserCard user={user} key={user.id} />)}
      </div>
    </div>
  );
};

export default UserListPage;
