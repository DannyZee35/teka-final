"use client";

import React, { useState, useMemo, useRef} from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import axios from "axios";
import Spinner from "@components/Spinner";
import Image from "next/image";
import toast from "react-hot-toast"; // Import toast
import { Toaster } from "react-hot-toast"; // Import Toaster to display toast messages
import BlogsTable from "../AdminComponents/BlogsTable";

const PostBlog = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const fileInputRef = useRef(null); 
   const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      if (!title) {
        toast.error("Please add a title.");
        return;
      }
      if (!imageFile) {
        toast.error("Please upload an image.");
        return;
      }
      if (!content) {
        toast.error("Please add the blog content.");
        return;
      }
      setLoading(true);  
      
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", imageFile);

      const response = await axios.post("/api/post-blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Blog post created:", response.data);

      toast.success("Blog created successfully");

      setTitle("");
      setContent("");
      setImageFile(null)
      fileInputRef.current.value = null; // Set value to null

     } catch (error) {
      console.error("Error saving blog post:", error);
      toast.error("An error occurred while saving the blog post."); // Display error toast message
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="w-[800px]">
      <Toaster />  
      <h1 className="font-bold mb-5 text-4xl">Blogs</h1>

      <h1 className="font-bold mb-5 text-2xl">Title</h1>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-3 mb-5 p-2 border w-full border-gray-500 rounded-md"
      />
      <h1 className="font-bold mb-5 text-2xl">Image</h1>
      <input type="file" 
       ref={fileInputRef} 
      onChange={handleImageChange} className="mb-5" />
      {imageFile && (
        <div className="mr-4">
          <Image
            src={URL.createObjectURL(imageFile)}
             alt="Uploaded Image"
             width={350}
             height={350}
           style={{height:'350px',width:'350px'}}

          />
        </div>
      )} 
      <h1 className="font-bold mb-5 text-2xl mt-5">Content</h1>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}

/>
      {loading ? (
        <Spinner />
      ) : (
        <button
          onClick={handleSubmit}
          className="mt-5 p-2 bg-blue-500 text-white rounded-md"
        >
          Save Post
        </button>
      )}

      <div className="mt-20">
      <BlogsTable onBlogAdded={handleSubmit} />
      </div>
    </div>
  );
};

export default PostBlog;
