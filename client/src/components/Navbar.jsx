import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../context/authContext';
import img1 from "../images/mentally-logo.png";

const AdminNavigationBar = () => {
const { currentUser, logout } = useContext(AuthContext);

return (
<div class="bg-ally3">
<div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
<div class="relative flex items-center justify-between">
<div class="flex items-center">
<a href="/" aria-label="Company" title="Company" class="inline-flex items-center mr-8">
    <img src={img1} alt="Company Logo" class="w-40"></img>
</a>

<ul class="flex items-center hidden space-x-8 lg:flex">
<li>
 <Link
to="/MyHealth360"
aria-label="Our product"
title="Our product"
class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
>
myHealth360
</Link>
</li>
<li>
<Link
to="/contact"
aria-label="Our product"
title="Our product"
class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
>
Contact
</Link>
</li>
<li>
<Link
to="/chat"
aria-label="Our product"
title="Our product"
class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
>
Chat
</Link>
</li>
<li>
<Link
to="/admDash"
aria-label="Our product"
title="Our product"
class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
>
Dashboard
</Link>
</li>
</ul>
</div>
<div class="flex items-center hidden space-x-8 lg:flex">
<span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
                  Login
                </Link>
          )}
</div>
<div class="lg:hidden">
<button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default AdminNavigationBar;