import React from "react";

const UserCard = ({ user }) => {
  return (
    <div
      style={{
        width: "15rem",
        border: "solid black 1px",
        padding: "10px",
        borderRadius: "5px",
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <img
        src={user.avatar}
        style={{ width: "100%", height: "10rem" }}
        alt=""
      />
      <p>Name : {user.name} </p>
      <p>Email : {user.email}</p>
    </div>
  );
};

export default UserCard;
