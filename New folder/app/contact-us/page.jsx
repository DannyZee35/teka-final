"use client";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Spinner from "@components/Spinner";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        companyName: "",
        phoneNumber: "",
        inquiryReason: "",
        businessType: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("/api/contact-us", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                toast.success("We have received your request.");
                // Clear the form after successful submission
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                    companyName: "",
                    phoneNumber: "",
                    inquiryReason: "",
                    businessType: ""
                });
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <Toaster />
            <h1 className="font-bold text-center text-3xl">Contact Teikametrics</h1>
            <p>Need assistance? Reach out to our team for more information.</p>
            <form onSubmit={handleSubmit} className="space-y-6 mt-20 border p-10 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName"  className="block text-sm font-medium text-gray-700">
                            First Name *
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                             
                            className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email *
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="inquiryReason" className="block text-sm font-medium text-gray-700">
                        Inquiry Reason *
                    </label>
                    <input
                        id="inquiryReason"
                        name="inquiryReason"
                        value={formData.inquiryReason}
                        onChange={handleChange}
                        className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                   / >
                   
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message *
                    </label>
                    <input
                        type="text"
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                        Company Name
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                        Business Type *
                    </label>
                    <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="">Select Business Type</option>
                        <option value="1P (Vendor Central)">1P (Vendor Central)</option>
                        <option value="3P (Seller Central)">3P (Seller Central)</option>
                        <option value="Hybrid (1P and 3P)">Hybrid (1P and 3P)</option>
                    </select>
                </div>
                <div>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={loading}
                        >
                            Get In Touch
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Contact;
