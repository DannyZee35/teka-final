import Banner from "@New folder/components/Banner";
import React from "react";

const ThankYou = () => {
    return (
        <div className="max-w-full mx-auto mt-10">
            <h1 className="font-bold text-center text-2xl">Your request was successful</h1>
            <p className="text-center font-bold mt-5 text-4xl">Thanks for connecting with us            </p>
            <p className="text-center mt-5">Our team of experts will get back to you within 24 hours of your request.
            </p>

            <div className="sm:p-5">
        <Banner
          heading={"Get started with new Flywheel 2.0"}
          subHeading={"Advertise your business with superhuman intelligence"}
        />
      </div>
        </div>
    );
};

export default ThankYou;
