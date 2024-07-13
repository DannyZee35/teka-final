"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "@components/Spinner";

const EmailDetail = ({ params }) => {
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false); // State for tracking if email is being sent

  useEffect(() => {
    if (params.id) {
      const fetchEmail = async () => {
        try {
          const response = await axios.get(`/api/subscribed-user/${params.id}`);
          setEmail(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching email:", error);
          setError("Error fetching email.");
          setLoading(false);
        }
      };

      fetchEmail();
    }
  }, [params.id]);

  const handleSendEmail = async () => {
    if (!subject.trim()) {
      toast.error("Subject cannot be empty.");
      return;
    }

    setSending(true); // Set sending state to true when email sending starts

    try {
      const response = await axios.post('/api/send-email', {
        email: email.email,
        message,
        subject
      });

      if (response.status === 200) {
        toast.success("Email sent successfully.");
        setMessage(""); // Clear the message field after successful send
        setSubject(""); // Clear the subject field after successful send
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred while sending the email.");
    } finally {
      setSending(false); // Set sending state back to false after email sending completes
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mt-20">
      <Toaster/>
      <h1 className="font-bold text-4xl mb-5">Send Email</h1>
      <div className="bg-white   p-6">
        <p><strong>Email:</strong> {email.email}</p>
      </div>
      <div className="mt-4">
        <input
          className="w-full p-3 border rounded-lg"
          placeholder="Type your subject here..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <textarea
          className="w-full p-3 border rounded-lg"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      {/* Conditionally render the spinner while email is being sent */}
      {sending ? (
        <Spinner />
      ) : (
        <button
          onClick={handleSendEmail}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Send Email
        </button>
      )}
    </div>
  );
};

export default EmailDetail;
