import React from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from "react-redux";
import { removeFromUsers } from "../../context/user-slice/userSlice";
import UpdateUser from "../update-user/UpdateUser";

function Users({ data }) {
  const dispatch = useDispatch();

  let handleEdit = () => {
    <UpdateUser />;
  };

  return (
    <div className="users__wrapper">
      {data?.map((el) => (
        <div key={el.id} className="users__card">
          <img src={el.gender === "male" ? male : female} alt="" />
          <h2>{el.name}</h2>
          <p>{el.profession}</p>
          <p>{el.age}</p>
          <button onClick={() => dispatch(removeFromUsers(el))}>Remove</button>
          <button style={{ background: "green" }}>edit</button>
        </div>
      ))}
    </div>
  );
}

export default Users;
