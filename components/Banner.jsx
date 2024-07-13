import React from "react";
import Button from "@components/Button";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

const Banner = ({ heading, subHeading }) => {
  const router= useRouter()

  return (
    <div
      className="max-w-[1300px]   m-auto bg-[#7E62EF] sm:bg-transparent  sm:bg-contain bg-cover bg-no-repeat mt-20 p-14 relative "
      style={{ backgroundImage: 'url("/gradient.png")' }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between  ">
        <div className="w-full">
          <h1 className="font-bold font-mont mb-10 bg-line-gradient bg-clip-text text-2xl text-transparent">
            {heading}
          </h1>
          <h1 className="font-mont font-bold text-white text-4xl">
            {subHeading}
          </h1>
        </div>
        <div className="flex w-full  items-center justify-center mt-10 gap-5">
          <Button
            padding="p-3 sm:p-4"
            text={"Get Free Audit"}
            icon={<IoIosArrowForward />}
            onClick={()=>router.push('/request-demo')}

          />
          <Button
            padding="p-3 sm:p-4"
            color="text-white"
            text={"Contact Us"}
            backgroundColor="bg-black"
            onClick={()=>router.push('/contact-us')}

          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
