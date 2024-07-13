"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import cheerio from "cheerio";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BlogsTable = ({ onBlogAdded }) => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
        const sanitizedBlogs = response.data.map((blog, index) => {
          const sanitizedContent = DOMPurify.sanitize(blog.content);
          const $ = cheerio.load(sanitizedContent);
          const firstParagraph = $("p").first().text();
          const limitedContent = firstParagraph.substring(0, 120) + "...";

          // Replace backslashes with forward slashes in the image URL
          const correctedImageUrl = blog.imageUrl.replace(/\\/g, '/');

          return {
            ...blog,
            imageUrl: correctedImageUrl,
            firstParagraph: limitedContent,
            index: index + 1 // Adding 1 to start numbering from 1
          };
        });
        setBlogs(sanitizedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [onBlogAdded]); // Refresh the table when onBlogAdded changes

  const handleEdit = (blogId) => {
    router.push(`/admin/edit-blog/${blogId}`);
  };

  const handleDelete = async (blogId) => {
    const confirmation = window.confirm("Are you sure you want to delete this blog?");
  
    if (confirmation) {
      try {
        // Make a delete request to the delete API
        await axios.delete(`/api/delete-blog/${blogId}`);
  
        // Filter out the deleted blog from the state
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
  
        toast.success("Blog deleted successfully");
      } catch (error) {
        console.error("Error deleting blog:", error);
        toast.error("An error occurred while deleting the blog");
      }
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <table className="min-w-full divide-y divide-gray-200 border">
          {/* Table headers */}
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {blogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{blog.index}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/blogs/${blog._id}`}>
                    <Image src={blog.imageUrl} width={40} height={40} className="rounded-lg" />
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/blogs/${blog._id}`}>
                    {blog.title}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{blog.author.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{blog.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleEdit(blog._id)} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md">Edit</button>
                  <button onClick={() => handleDelete(blog._id)} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BlogsTable;
