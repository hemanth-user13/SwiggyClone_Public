import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Image from '../../assests/logo.png';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Toaster/toastify.css';
import { redirect } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => toast.success("Sign up successful!");

const initialValues = {
  id: uuidv4(),
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required'),
});


// const USERDATAURL = "http://localhost:8000/users"
 
const HOST_USER_URL="https://usermanagement-kbe1.onrender.com/users"
const LOCAl_HOSt_URl="http://localhost:8000/users"
const onSubmit = async (values) => {
  const REGISTER_URL = HOST_USER_URL;

  try {
    const response = await axios.post(REGISTER_URL, values);
    console.log("the user data is", values)
    if (response.data.name && response.data.email === "") {
      toast.error('Username already exists');
      console.log(response.data.name, response.data.email)
    } else {
      console.log('User registered successfully', response.data);
      Signup();
      redirect('/');
    }
  } catch (error) {
    console.error('There is an error in the code', error);
    toast.error('There was an error with your registration');
  }
};

function Test() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  // const GetData = async () => {
  //   const UserData = await axios.get(USERDATAURL);
  //   console.log(UserData)
  // }
  // useEffect(()=>{
  //   GetData()
  // },[])


  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4 bg-gray-50 h-full">
          <img
            src={Image}
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
          <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' '}
            <a href="https://flowbite.com" className="hover:underline">
              TestCode™
            </a>
            . All Rights Reserved.
          </span>
        </div>

        <div className="flex items-center p-6 h-full w-full">
          <form className="max-w-lg w-full mx-auto" onSubmit={formik.handleSubmit}>
            <div className="mb-12">
              <h3 className="text-orange-500 md:text-3xl text-2xl font-extrabold max-md:text-center">
                Create an account
              </h3>
            </div>

            <div>
              <label className="text-gray-800 text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  id="name"
                  {...formik.getFieldProps('name')}
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter name"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div style={{ color: 'red' }}>{formik.errors.name}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  id="email"
                  {...formik.getFieldProps('email')}
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: 'red' }}>{formik.errors.email}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  id="password"
                  type="password"
                  {...formik.getFieldProps('password')}
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: 'red' }}>{formik.errors.password}</div>
                ) : null}
              </div>
            </div>

            <div className="max-md:mt-10 mt-12">
              <button
                type="submit"
                className="rounded-lg text-white text-sm md:text-base hover:bg-[#d2710a] bg-[#f58220] transition duration-300 py-3 px-12 max-md:w-full max-md:text-center"
              >
                Sign Up
              </button>
            </div>
            <p className="max-md:text-center mt-5 text-gray-500 text-xs md:text-sm">
              Already have an account?
              <Link
                to="/"
                className="text-[#f47216] md:text-base font-bold text-xs ml-2"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Test;
