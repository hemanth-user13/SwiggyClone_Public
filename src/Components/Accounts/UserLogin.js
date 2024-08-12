import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Toaster/toastify.css';
import Image from '../../assests/logo.png'; 





const HOST_USER_URL="https://usermanagement-kbe1.onrender.com/users";
const LOCAL_USER_URL="http://localhost:8000/users"


const HOST_LOGIN_URL="https://usermanagement-kbe1.onrender.com/login";
const LOCAL_LOGIN_URL="http://localhost:8000/login"
function UserLogin({ onLogin }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const USERDATAURL = LOCAL_USER_URL;

    const getUserData = async () => {
        try {
            const response = await axios.get(USERDATAURL);
            console.log(response)
            setUsers(response.data); 
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        getUserData(); 
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        const LoginToaster = () => toast.success("Login successful!");
        try {
            if (!users || users.length === 0) {
                console.error('No users data found');
                return;
            }

            const user = users.find(user => user.name === username && user.password === password);
            
            if (user) {
                const loginDetails = {
                    user_id: user.id,
                    user_name: user.name,
                    time: new Date().toISOString(),
                    email: user.email,
                };

                await axios.post(LOCAL_LOGIN_URL, loginDetails);

                onLogin(true); 
                navigate(`/dashboard/id=${user.id}`);
                LoginToaster()

            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="font-[sans-serif]">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
                    <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                        <form className="space-y-4" onSubmit={handleLogin}>
                            <div className="mb-8">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Sign in to your account and explore a world of possibilities. Your journey begins here.</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Username</label>
                                <div className="relative flex items-center">
                                    <input name="username" type="text" value={username} onChange={(e) => setUserName(e.target.value)} required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter Username" />
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
                                <button type="submit" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-orange-500 hover:bg-orange-700 focus:outline-none">
                                    Log in
                                </button>
                            </div>

                            <p className="text-sm !mt-8 text-center text-gray-800">Don't have an account <a href="javascript:void(0);" className="text-orange-600 font-semibold hover:underline ml-1 whitespace-nowrap"><Link to="/register">Register here</Link></a></p>
                        </form>
                    </div>
                    <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                    <img src={Image} className="w-full h-full max-md:w-4/5 mx-auto block object-cover rounded-full animate-flip" alt="Dining Experience" />


                    </div>
                    <span className="text-lg text-gray-500 sm:text-left dark:text-gray-400" style={{"marginTop":"100px","marginLeft":"50px"}}>
                        © 2024{" "}
                        <a href="https://flowbite.com" className="hover:underline">
                            TestCode™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default UserLogin;
