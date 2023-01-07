import React from "react";
import image from "../images/illustration-hero.svg"
import newImage from "../images/illustration-features-tab-1.svg"
const Hero = (props) => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
       {props.data?
        <div className={`container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-20 space-y-10 md:space-y-0`}>
          {/* Left item */}
          <div className="flex flex-col my-10 space-y-6  md:my-0 md:mb-10 md:w-1/2">
            <h1 className="mx-w-md text-3xl font-medium text-center md:text-left">
              {props.title}
            </h1>
            <p className="mx-w-sm text-center md:text-left">
              {props.dataUser}
                </p>
            <div className="flex justify-center space-x-6 md:justify-start">
            <a href="/" className="p-3 px-6 py-2 text-white bg-sky-500 rounded baseline hover:bg-white hover:text-sky-500 hover:outline hover:outline-2">More Info</a>
            <a href="/" className="p-3 px-6 py-2 text-white bg-sky-500 rounded baseline hover:bg-white hover:text-sky-500 hover:outline hover:outline-2">Get Started</a>
            </div>
          </div>
          {/* Right item */}
          <div class=" flex md:justify-end">
                <img src={image} alt=""/>
                

            </div>
        </div>:
        <div className={`container flex flex-col-reverse md:flex-row-reverse items-center justify-between px-6 mx-auto mt-20 space-y-10 md:space-y-0`}>
        {/* Left item */}
        <div className="flex flex-col my-10 space-y-6  md:my-0 md:mb-10 md:w-1/2">
          <h1 className="mx-w-md text-3xl font-medium text-center md:text-left">
            {props.title}
          </h1>
          <p className="mx-w-sm text-center md:text-left">
            {props.dataUser}
              </p>
          <div className="flex justify-center space-x-6 md:justify-end">
          <a href="/" className="p-3 px-6 py-2 text-white bg-sky-500 rounded baseline hover:bg-white hover:text-sky-500 hover:outline hover:outline-2">More Info</a>
          <a href="/" className="p-3 px-6 py-2 text-white bg-sky-500 rounded baseline hover:bg-white hover:text-sky-500 hover:outline hover:outline-2">Get Started</a>
          </div>
        </div>
        {/* Right item */}
        <div class=" flex md:justify-start">
              <img src={newImage} alt=""/>
              

          </div>
      </div>

}
      </section>
    </div>
  );
};

export default Hero;
