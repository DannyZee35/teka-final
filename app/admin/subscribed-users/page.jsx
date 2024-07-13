"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const SubscribersTable = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get("/api/get-subscribed-users");
        setSubscribers(response.data);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
        setError("Error fetching subscribers.");
      }
    };

    fetchSubscribers();
  }, []);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSuccess(false);

    try {
      // Extract email addresses from subscribers
      const emails = subscribers.map(subscriber => subscriber.email);

      if (emails.length === 0) {
        setError("No subscribers available to send emails.");
        setSending(false);
        return;
      }

      // Send email to all subscribers
      const response = await axios.post("/api/emails", {
        emails: emails,
        subject: subject,
        message: body
      });

      if (response.status === 200) {
        setSuccess(true);
        setSubject("");
        setBody("");
      }
    } catch (error) {
      console.error("Error sending email to all subscribers:", error);
      setError("Failed to send email to all subscribers.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="font-bold text-4xl text-center mt-20 mb-5">Newsletter Subscribers</h1>
      <table className="min-w-full divide-y divide-gray-200 border">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscribed At</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {subscribers.map((subscriber, index) => (
            <tr key={subscriber._id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{subscriber.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(subscriber.createdAt).toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link className="px-4 py-2 bg-blue-500 text-white rounded-md" href={`subscribed-users/${subscriber._id}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8">
        <h2 className="font-bold text-2xl mb-2">Compose Email</h2>
        <form onSubmit={handleSendEmail}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
              Body
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="body"
              placeholder="Enter message body"
              rows="5"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Email to All Subscribers"}
          </button>
        </form>
        {success && <p className="text-green-500 mt-2">Email sent successfully to all subscribers.</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default SubscribersTable;
