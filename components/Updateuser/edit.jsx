import React, { useEffect, useState } from 'react';
import "../adduser/Add.css";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Edit = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/getone/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        toast.error("Failed to load user data");
        console.error(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/update/${id}`, user);
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/");
    } catch (error) {
      toast.error("Failed to update user");
      console.error(error);
    }
  };

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Update User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            value={user.fname}
            onChange={inputChangeHandler}
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            value={user.lname}
            onChange={inputChangeHandler}
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Last name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={user.email}
            onChange={inputChangeHandler}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            value={user.password}
            onChange={inputChangeHandler}
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
          />
        </div>

        <div className="inputGroup">
          <button type="submit">Update user</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
