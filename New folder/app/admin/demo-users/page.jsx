"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CustomersTable = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("/api/get-demo-users");
        if (response.status === 200) {
          const data = response.data.map((customer, index) => ({
            ...customer,
            id: index + 1, // Generate sequential IDs starting from 1
          }));
          setCustomers(data);
        } else {
          toast.error("Failed to fetch customers.");
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
        toast.error("An error occurred while fetching customers.");
      }
    };

    fetchCustomers();
  }, []);
  

  return (
    <>
      <div className="w-full  ">
      <h1 className="font-bold my-5 text-3xl">Request Demo Users</h1>

        <table className=" w-full divide-y divide-gray-200 border">
          {/* Table headers */}
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Sales</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business Model</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{customer.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.companyName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.annualSales}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.businessModel}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomersTable;
