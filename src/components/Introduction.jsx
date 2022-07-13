import React from "react";
import img1 from "../assets/AboutUs.jpg";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid'

function Introduction(){
  return(
<div name='aboutus' className="py-[64px] px-8">
      <div className="grid grid-cols-2 gap-8 pt-[64px]">
        <div>
          <img className="w-full h-3/5 rounded-xl" src={img1} alt="" />
        </div>
        <div>
          <h4 className="text-blue-500 text-2xl font-medium">Introduction</h4>
          <h1 className="text-3xl font-semibold py-3">DIGITAL MARKETING AGENCY</h1>
          <p className="text-justify text-lg leading-9">Bhairav ICT Pvt. Ltd. is an innovative digital firm. We use web development, graphic design, digital marketing training, and content writing to assist our clients in adjusting to the digital environment and being successful. We have dedicated staff serving clients in Nepal. We are a company known for its extensive portfolio of services, solid dedication, and strong organizational citizenship. We find new ideas and create a better and more courageous future.
            <br /><br />
            The objective of Bhairav ICT is to provide the industry's most efficient digital marketing solutions, a more remarkable customer experience, produce results, and reinvest revenues in the success of clients, employees, and the community.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h4 className="text-blue-500 text-2xl font-medium">Introduction</h4>
          <h1 className="text-3xl font-semibold py-3">DIGITAL MARKETING AGENCY</h1>
          <p className="text-justify text-lg leading-9">Bhairav ICT Pvt. Ltd. is an innovative digital firm. We use web development, graphic design, digital marketing training, and content writing to assist our clients in adjusting to the digital environment and being successful. We have dedicated staff serving clients in Nepal. We are a company known for its extensive portfolio of services, solid dedication, and strong organizational citizenship. We find new ideas and create a better and more courageous future.
            <br /><br />
            The objective of Bhairav ICT is to provide the industry's most efficient digital marketing solutions, a more remarkable customer experience, produce results, and reinvest revenues in the success of clients, employees, and the community.
          </p>
        </div>
        <div>
          <img className="w-full h-3/5 rounded-xl" src={img1} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img className="w-full h-3/5 rounded-xl" src={img1} alt="" />
        </div>
        <div>
          <h4 className="text-blue-500 text-2xl font-medium">Introduction</h4>
          <h1 className="text-3xl font-semibold py-3">DIGITAL MARKETING AGENCY</h1>
          <p className="text-justify text-lg leading-9">Bhairav ICT Pvt. Ltd. is an innovative digital firm. We use web development, graphic design, digital marketing training, and content writing to assist our clients in adjusting to the digital environment and being successful. We have dedicated staff serving clients in Nepal. We are a company known for its extensive portfolio of services, solid dedication, and strong organizational citizenship. We find new ideas and create a better and more courageous future.
            <br /><br />
            The objective of Bhairav ICT is to provide the industry's most efficient digital marketing solutions, a more remarkable customer experience, produce results, and reinvest revenues in the success of clients, employees, and the community.
          </p>
        </div>
      </div>
    </div>

  );
}




export default Introduction;
