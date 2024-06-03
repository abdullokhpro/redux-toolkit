import React, { useState } from "react";
import "./CreateUser.css";
import { useDispatch } from "react-redux";
import { addToUsers } from "../../context/user-slice/userSlice";
import { toast } from "react-toastify";

function CreateUser() {
  const [name, setName] = useState("nusratilloh");
  const [profession, setProfession] = useState("developer");
  const [age, setAge] = useState("20");
  const [gender, setGender] = useState("male");

  let dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: new Date().getTime(),
      name,
      profession,
      age: +age,
      gender,
    };

    name.trim().toLocaleLowerCase();

    dispatch(addToUsers(newUser));
    toast.success("ma'lumot kitildi");

    setName("");
    setAge("");
    setProfession("");
    setAge("");
    setGender("");
  };

  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="create__user-form" action="">
        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          value={profession}
          type="text"
          placeholder="profession"
          onChange={(e) => setProfession(e.target.value)}
          required
        />
        <input
          value={age}
          type="number"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <select
          value={gender}
          name=""
          id=""
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
