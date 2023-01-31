import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import f1 from "../images/mentally-logo.png";

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
    // <div className="auth">
    //   <h1>Register</h1>
    //   <form>
    //     <input
    //       required
    //       type="text"
    //       placeholder="username"
    //       name="username"
    //       onChange={handleChange}
    //     />
    //     <input
    //       required
    //       type="email"
    //       placeholder="email"
    //       name="email"
    //       onChange={handleChange}
    //     />
    //     <input
    //       required
    //       type="password"
    //       placeholder="password"
    //       name="password"
    //       onChange={handleChange}
    //     />
    //     <button onClick={handleSubmit}>Register</button>
    //     {err && <p>{err}</p>}
    //     <span>
    //       Do you have an account? <Link to="/login">Login</Link>
    //     </span>
    //   </form>
    // </div>
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={f1} alt='IMG'/>
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						Employee Login
					</span>

					<div class="wrap-input100 validate-input">
						<input class="input100" type="text" name="username" placeholder="Username" onChange={handleChange}/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

          <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email" onChange={handleChange}/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="password" placeholder="Password" onChange={handleChange}/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" onClick={handleSubmit}>
							Create Account
						</button>
					</div>

					<div class="text-center p-t-136">
						<Link class="txt2" to="/login">
							Return to Login
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</Link>
					</div>
				</form>
			</div>
		</div>
	</div>
  );
};

export default Register;
