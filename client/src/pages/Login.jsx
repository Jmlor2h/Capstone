import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import f1 from "../images/mentally-logo.png";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login, currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate('/');
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };
  return (
    <div className="h-screen w-full flex items-center justify-center bg-ally7">
      <div className="w-full max-w-sm">
        <form className="bg-ally10 p-8 rounded-lg shadow-md">
          <img src={f1} className="w-full mx-auto mb-6" alt="logo" />
          <h2 className="text-lg font-medium text-center mb-4 text-ally7">Customer Login</h2>
          <div className="mb-4">
            <input 
              className="w-full border border-ally10 p-2 hover:ally10 rounded-lg" 
              type="text" 
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input 
              className="w-full border border-ally10 p-2 rounded-lg" 
              type="password" 
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button 
            className="bg-ally7 text-ally10 p-2 rounded-lg w-full hover:bg-ally1"
            onClick={handleSubmit}
          >
          Login
          </button>
          <div className="mt-4 text-center">
            <Link 
              className="text-ally7 hover:ally8" 
              to="/register"
            >
              Create your Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
