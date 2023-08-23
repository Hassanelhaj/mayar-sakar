
import React from "react";
import TextSection from "./TextSection";
import ImgSection from "./ImgSection";


const Hero = () => {
  return (
    <main className=" overflow-hidden flex justify-center items-center
     gap-x-36 gap-y-16  flex-wrap-reverse px-4">
      <section>
        <TextSection/>
      </section>
      <section><ImgSection/></section>


    </main>
    
   
  );
};

export default Hero;
