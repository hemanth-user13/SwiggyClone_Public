import React, { useEffect, useState } from 'react';
import Image from '../../assests/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserLogin() {
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const USERDATAURL = "http://localhost:8000/users";
  const LOGINURL = "http://localhost:8000/login";

  const GetuserData = async () => {
    try {
      const response = await axios.get(USERDATAURL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };

  const handleLogin = async () => {
    const user = users.find(user => user.name === username && user.password === password);

    if (user) {
      const currentTime = new Date().toISOString();
      const loginData = {
        user_id: user.id,
        user_name: user.name,
        time: currentTime,
        email: user.email
      };

      try {
        await axios.post(LOGINURL, loginData);
        navigate(`/dashboard`);
      } catch (error) {
        console.error("Error posting login data:", error);
      }
    } else {
      alert("Invalid username or password");
    }
  };

  useEffect(() => {
    GetuserData();
  }, []);

  return (
    <div>
      <div className="font-[sans-serif]">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
            <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <form className="space-y-4">
                <div className="mb-8">
                  <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">Sign in to your account and explore a world of possibilities. Your journey begins here.</p>
                </div>

                <div>
                  <label className="text-gray-800 text-sm mb-2 block">User name</label>
                  <div className="relative flex items-center">
                    <input name="username" type="text" value={username} onChange={(e) => setuserName(e.target.value)} required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter user name" />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter password" />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="javascript:void(0);" className="text-orange-600 hover:underline font-semibold">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div className="!mt-8">
                  <button type="button" onClick={handleLogin} className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-orange-500 hover:bg-orange-700 focus:outline-none">
                    Log in
                  </button>
                </div>

                <p className="text-sm !mt-8 text-center text-gray-800">Don't have an account <a href="javascript:void(0);" className="text-orange-600 font-semibold hover:underline ml-1 whitespace-nowrap"><Link to="/register">Register here</Link></a></p>
              </form>
            </div>
            <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
              <img src={Image} className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
            </div>
            <span className="text-lg text-gray-500 sm:text-left dark:text-gray-400" style={{ marginTop: "100px", marginLeft: "50px" }}>
              © 2024{" "}
              <a href="https://flowbite.com" className="hover:underline">
                TestCode™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
