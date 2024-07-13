"use client";

import { useState } from "react";
import axios from "axios";
import BlogsCard from "@components/BlogsCard";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "@components/Spinner";

const BlogList = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter an email address.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/newsletter", { email });

      if (response.status === 201) {
        toast.success("Email address subscribed successfully.");
        setEmail("");
      } else {
        toast.error(response.data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing email:", error);
      toast.error("Internal Server Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster />
      <h1 className="font-bold text-4xl text-center mt-20 mb-5">Blog</h1>
      <p className="text-center text-normal mb-5 max-w-[400px] m-auto">
        Subscribe for the latest insights, data trends, and best practices to
        grow your ecommerce business.
      </p>
      <div className="flex items-center justify-center gap-10 mb-20">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="p-3 rounded-xl border border-black"
        />
        {loading ? (
          <Spinner />
        ) : (
          <button
            className={`bg-blue-600 rounded-xl px-8 p-3 text-white ${
              loading ? "opacity-50" : ""
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            Subscribe
          </button>
        )}
      </div>

      <div>
        <BlogsCard />
      </div>
    </div>
  );
};

export default BlogList;
