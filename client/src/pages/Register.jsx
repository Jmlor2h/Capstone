import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import f1 from "../assets/mentally-logo.png";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };

  return (
    <div className=" flex justify-center h-screen bg-ally7">
           <div className="w-full max-w-sm">
        <form className="bg-ally6 p-8 rounded-lg shadow-md">
          <img src={f1} alt="Mentally Logo" className="mx-auto h-12"/>
          <h2 className="text-lg text-center font-medium mt-4 mb-2 text-ally7">Employee Login</h2>
          <div className="mb-4">
            <label className="block font-medium text-ally7 mb-2">Username</label>
            <input type="text" name="username" className="w-full border bg-ally7 border-gray-400 p-2 rounded-lg" placeholder="Username" onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-ally7 mb-2">Email</label>
            <input type="email" name="email" className="w-full border bg-ally7 border-gray-400 p-2 rounded-lg" placeholder="Email" onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-ally7 mb-2">Password</label>
            <input type="password" name="password" className="w-full border bg-ally7 border-gray-400 p-2 rounded-lg" placeholder="Password" onChange={handleChange} />
          </div>
          <button className="bg-ally7 text-ally2 p-2 rounded-lg hover:bg-ally4" onClick={handleSubmit}>Create Account</button>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-ally7 hover:text-ally4">Return to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
