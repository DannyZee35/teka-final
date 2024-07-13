"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(false);

  const onLogin = async () => {
    try {
 

      const response = await axios.post("/api/login", user);
      console.log("Success Response:", response.data);
      if (response.data.error) {
        toast.error(response.data.error);
        
      } else if (response.data.message) {
        toast.success(response.data.message);
        router.push("/admin/dashboard");

      }

  
    } catch (error) {
   
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  });
  return (
    <div className="flex items-center justify-center     ">
      <div className="flex shadow-xl rounded-xl  border-2 flex-col sm:items-center sm:justify-center gap-10 mt-20 p-5">
        <h1 className="text-3xl font-bold text-black">Login</h1>

        <div>
          <p className="text-black mb-2"> Email</p>
          <input
            className="p-3 rounded-lg  w-full sm:w-[400px] "
            type="email"
            placeholder="Enter Your Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="flex sm:items-end flex-col">
          <div>
            <p className="text-black mb-2"> Password</p>
            <input
              className="p-3 rounded-lg  w-full sm:w-[400px]   "
              type="password"
              placeholder="Enter Your Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <Link href={"/"} className="text-[#02a7f0]">
            Forgot Password
          </Link>
        </div>
        <button
          onClick={onLogin}
          className="bg-[#1e98d7] text-white rounded-lg p-3 w-full sm:w-[400px]  "
        >
          Login
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default login;
