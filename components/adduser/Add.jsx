
import React, { useState } from 'react';
import "./Add.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

const Add = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/create", user);
      toast.success("User added successfully!", { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to add user", { position: "top-right" });
    }
  }

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={user.fname}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='First name'
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={user.lname}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='Last name'
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='Email'
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='Password'
            required
          />
        </div>
        <div className="inputGroup">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
}

export default Add;

