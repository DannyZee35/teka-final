"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "@components/Spinner";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    annualSales: "0-100K",
    amazonBudget: "Just Launched",
    amazonAdvertisement: "Enhance Return on Ad Spend (ROAS)",
    businessModel: "B2B",
    region: "North America",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    const {
      firstName,
      lastName,
      email,
      companyName,
      annualSales,
      amazonBudget,
      amazonAdvertisement,
      businessModel,
      region,
    } = formData;

    if (!firstName) {
      toast.error("Please add First Name.");
      return;
    }
    if (!lastName) {
      toast.error("Please add Last Name.");
      return;
    }
    if (!email) {
      toast.error("Please add an email.");
      return;
    }
    if (!companyName) {
      toast.error("Please add company name.");
      return;
    }
    if (!annualSales) {
      toast.error("Please select annual sales.");
      return;
    }
    if (!amazonBudget) {
      toast.error("Please select Amazon budget.");
      return;
    }
    if (!amazonAdvertisement) {
      toast.error("Please select Amazon advertisement objective.");
      return;
    }
    if (!businessModel) {
      toast.error("Please select business model.");
      return;
    }
    if (!region) {
      toast.error("Please select region.");
      return;
    }

    setLoading(true);

    try {
      // Make API request
      const response = await axios.post("/api/request-demo", formData);
      console.log("Request submitted successfully:", response.data);

      toast.success("Request submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        annualSales: "0-100K",
        amazonBudget: "Just Launched",
        amazonAdvertisement: "Enhance Return on Ad Spend (ROAS)",
        businessModel: "B2B",
        region: "North America",
      }); // Reset form data after successful submission

      setFormSubmitted(true); // Set form submission success state
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      const script = document.createElement("script");
      script.src = "https://cdn.oncehub.com/mergedjs/so.js";
      script.async = true;
      script.onload = () => {
        // Script loaded successfully
        console.log("ScheduleOnce script loaded.");
      };
      document.body.appendChild(script);

      return () => {
        // Cleanup script tag if component unmounts
        document.body.removeChild(script);
      };
    }
  }, [formSubmitted]);
  return (
    <div className="max-w-md mx-auto mt-10">
      <Toaster /> {/* Place Toaster component here to display toast messages */}
      <h1 className="font-bold text-center text-3xl">Request a Demo</h1>
      {!formSubmitted ? (
        <form
          className="space-y-6 mt-20 border p-10 rounded-xl"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name *
            </label>
            <input
              type="text"
              name="companyName"
              id="company"
              autoComplete="organization"
              value={formData.companyName}
              onChange={handleChange}
              className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="annualSales"
              className="block text-sm font-medium text-gray-700"
            >
              Whats your monthly revenue?
            </label>
            <select
              id="annualSales"
              name="annualSales"
              autoComplete="annual-sales"
              value={formData.annualSales}
              onChange={handleChange}
              className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="$10k-$50k">$10k-$50k</option>
              <option value="$50k-$100k">$50k-$100k</option>
              <option value="$100k-$250k">$100k-$250k</option>
              <option value="$250k-$500k">$250k-$500k</option>
              <option value="$500k-$800k">$500k-$800k</option>
              <option value="$1 Million +">$1 Million +</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="amazonBudget"
              className="block text-sm font-medium text-gray-700"
            >
              Whats your monthly Amazon marketing budget?
            </label>
            <select
              id="amazonBudget"
              name="amazonBudget"
              value={formData.amazonBudget}
              onChange={handleChange}
              className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="Just Launched">Just Launched</option>
              <option value="$1500-$3000">$1500-$3000</option>
              <option value="$3000-$10,000">$3000-$10,000</option>
              <option value="$10,000-$50,000">$10,000-$50,000</option>
              <option value="$50,000-$100,000">$50,000-$100,000</option>
              <option value="$100,000 +">$100,000 +</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="amazonAdvertisement"
              className="block text-sm font-medium text-gray-700"
            >
              What is your primary objective with Amazon advertising?
            </label>
            <select
              id="amazonAdvertisement"
              name="amazonAdvertisement"
              value={formData.amazonAdvertisement}
              onChange={handleChange}
              className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="Enhance Return on Ad Spend (ROAS)">
                Enhance Return on Ad Spend (ROAS)
              </option>
              <option value="Increase Sales Volume">
                Increase Sales Volume
              </option>
              <option value="Improve Product Rankings">
                Improve Product Rankings
              </option>
              <option value="Optimize Total Advertising Cost of Sale (TACOS)">
                Optimize Total Advertising Cost of Sale (TACOS)
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="businessModel"
              className="block text-sm font-medium text-gray-700"
            >
              Business Model
            </label>
            <select
              id="businessModel"
              name="businessModel"
              autoComplete="business-model"
              value={formData.businessModel}
              onChange={handleChange}
              className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="B2B">B2B</option>
              <option value="B2C">B2C</option>
              <option value="B2B2C">B2B2C</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700"
            >
              What Region Are You In?
            </label>
            <select
              id="region"
              name="region"
              autoComplete="region"
              value={formData.region}
              onChange={handleChange}
              className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Other">Other</option>
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
                Request Demo
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="w-full m-auto">
          <h2 className="text-center text-2xl font-bold">
            Thank you for your request!
          </h2>
          <div className="flex justify-center mt-8">
            <div
              id="SOIDIV_SalesTeamPage-LRHV1PMEK6"
              className="m-auto"
              data-so-page="SalesTeamPage-LRHV1PMEK6"
              data-height="550"
              data-style="border: 1px solid #d8d8d8; min-width: 1200px; max-width: 1200px;"
              data-psz="00"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
