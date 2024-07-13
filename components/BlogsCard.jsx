"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import cheerio from "cheerio";

import Image from "next/image";
import Link from "next/link";

const BlogsCard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
        const sanitizedBlogs = response.data.map((blog) => {
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
          };
        });
        setBlogs(sanitizedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
  
    fetchBlogs();
  }, []);
  

  return (
    <>
      <div className="p-10 sm:p-0 max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-3   gap-20">
        {blogs.map((blog) => (
          <div key={blog._id} className="rounded-lg w-full sm:w-[400px]">
            <div className="relative w-full h-[200px] mb-5">
            <Link href={`/blogs/${blog._id}`}>
                <Image
                  src={blog.imageUrl}
                  layout="fill"
                  className="rounded-t-lg"
                />
              </Link>
            </div>
            <div className="">
            <Link href={`/blogs/${blog._id}`}>
                <h1 className="font-bold text-xl mb-5">{blog.title}</h1>
              </Link>
              <p className="text-normal mb-5">{blog.firstParagraph}</p>
              <p className="font-bold">Author: {blog.author.username}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogsCard;
