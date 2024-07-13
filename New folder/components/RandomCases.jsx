import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import cheerio from "cheerio";
import Image from "next/image";
import Link from "next/link";

const RandomCases = () => {
  const [blogs, setBlogs] = useState([]);
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/cases");
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

        // Randomly select 3 blogs if available, else display all blogs
        const randomIndices = getRandomIndices(sanitizedBlogs.length, 3);
        const randomBlogs = randomIndices.map(index => sanitizedBlogs[index]);
        setRandomBlogs(randomBlogs.length >= 3 ? randomBlogs : sanitizedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to generate random indices
  const getRandomIndices = (max, count) => {
    const indices = [];
    while (indices.length < count && indices.length < max) {
      const index = Math.floor(Math.random() * max);
      if (!indices.includes(index)) {
        indices.push(index);
      }
    }
    return indices;
  };

  return ( 
    <>
      <div className="p-10 sm:p-0 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {randomBlogs.map((blog) => (
          <div key={blog._id} className="rounded-lg w-full">
            <div className="relative w-full h-[200px] mb-5">
              <Link href={`/cases/${blog._id}`}>
                <Image
                  src={blog.imageUrl}
                  layout="fill"
                  className="rounded-t-lg"
                />
              </Link>
            </div>
            <div className="">
              <Link href={`/cases/${blog._id}`}>
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

export default RandomCases;
