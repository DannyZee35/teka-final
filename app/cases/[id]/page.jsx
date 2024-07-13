"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import DOMPurify from "dompurify";
import RandomBlogs from '@components/RandomBlogs';
import parse from "html-react-parser";
import RandomCases from '@components/RandomCases';

export default function Blog({ params }) {
  const [singleCase, setSingleCase] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        console.log(params.id);
      try {
        const response = await axios.get(`/api/singleCase/${params.id}`);
        const sanitizedBlog = sanitizeBlog(response.data);
        setSingleCase(sanitizedBlog);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [params.id]);

  const sanitizeBlog = (singleCase) => {

    const correctedImageUrl = singleCase.imageUrl.replace(/\\/g, '/');
    const formattedDate = new Date(singleCase.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });

      return { ...singleCase, imageUrl: correctedImageUrl, formattedDate };
    };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!singleCase) {
    return <div>Loading...</div>;
  }

  return (
    <div className='max-w-[1200px] m-auto mt-20'>
        <div className=' flex items-center justify-center gap-10'>
      <div>
        <Link href={'/cases'} className='text-blue-600 font-bold text-2xl  '>Case Study</Link>
        <h1 className='text-4xl font-bold w-[400px] mt-4 mb-4'>{singleCase.title}</h1>
        <p className='text-xl mt-3'>{singleCase.formattedDate}</p>
        <p className='text-xl font-bold mt-3'>{singleCase.author.username}</p>
      </div>
      <div>
        <Image src={singleCase.imageUrl} height={450} width={450} className='rounded-xl'/>
      </div>
      </div>
      <div className='bg-black max-w-[1000px] m-auto mt-20 h-[.5px]'></div>
      <div className='mt-20'>
      <div className='max-w-[800px] m-auto ql-editor' 
    >
              {parse(singleCase.content)}
      </div>
      </div>

      <div className='bg-black max-w-[1000px] m-auto mt-20 h-[.5px]'></div>

<div className='max-w-[1000px] m-auto'>
    <h1 className='mt-10 mb-10 text-2xl font-bold'>Other Case Studies</h1>
<RandomCases/>

</div>
    </div>
  );
}
