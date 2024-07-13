"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import cheerio from "cheerio";

import Image from "next/image";
import Link from "next/link";

const CasesCard = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/cases");
        const sanitizedBlogs = response.data.map((singleCase) => {
          const sanitizedContent = DOMPurify.sanitize(singleCase.content);
          const $ = cheerio.load(sanitizedContent);
          const firstParagraph = $("p").first().text();
          const limitedContent = firstParagraph.substring(0, 120) + "...";
  
          // Replace backslashes with forward slashes in the image URL
          const correctedImageUrl = singleCase.imageUrl.replace(/\\/g, '/');
          
          return {
            ...singleCase,
            imageUrl: correctedImageUrl,
            firstParagraph: limitedContent,
          };
        });
        setCases(sanitizedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
  
    fetchBlogs();
  }, []);
  

  return (
    <>
      <div className="p-10 sm:p-0 max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-3   gap-20">
        {cases.map((singleCase) => (
          <div key={singleCase._id} className="rounded-lg w-full sm:w-[400px]">
            <div className="relative w-full h-[200px] mb-5">
            <Link href={`/cases/${singleCase._id}`}>
                <Image
                  src={singleCase.imageUrl}
                  layout="fill"
                  className="rounded-t-lg"
                />
              </Link>
            </div>
            <div className="">
            <Link href={`/cases/${singleCase._id}`}>
                <h1 className="font-bold text-xl mb-5">{singleCase.title}</h1>
              </Link>
              <p className="text-normal mb-5">{singleCase.firstParagraph}</p>
              <p className="font-bold">Author: {singleCase.author.username}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CasesCard;
