import Link from "next/link";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const router =useRouter()
  const logout = async ()=>{
    try {
       await axios.get('/api/logout')
       toast.success("Logout Success")
       router.push('/admin/login')
       
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  }
  return (
    <div className="w-[250px] fixed h-screen bg-blue-700">
      <ul className=" text-white flex flex-col gap-4 px-[20px] mt-[100px]"> 
        <li className="p-3">
          <Link href={'/'}>Dashboard</Link>
        </li>
        <li className="p-3">
          <Link href={'/admin/post-blog'}>Manage Blogs</Link>
        </li>
        <li className="p-3">
          <Link href={'/admin/post-case-study'}>Manage Casestudies</Link>
        </li>
        <li className="p-3">
          <Link href={'/admin/get-contacts'}>Contacts</Link>
        </li>
        <li className="p-3">
          <Link href={'/admin/demo-users'}>Demo Users</Link>
        </li>
        <li className="p-3">
          <Link href={'/admin/subscribed-users'}>Email Bank</Link>
        </li>
        <li className="p-3">
          <button onClick={logout}>Logout</button>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
