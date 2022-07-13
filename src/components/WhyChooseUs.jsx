import React from "react";

export default function WhyChooseUs() {
  return (
    <React.Fragment>
      <div className='grid md:grid-cols-2 gap-4 px-[24px] py-[24px] bg-"#fafafa"'>
        <div className="flex flex-col justify-center">
          <h1 className='text-blue-800 py-3"'>Why Choose Us?</h1>
          <h1 className="text-5xl font-bold py-3">
            We Have the Best Team <br></br>Of Marketing Experts
          </h1>
          <p className="pr-[32px] text-[18px] py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
            sed architecto, quisquam assumenda perferendis.
          </p>
        </div>

        
          <div className="grid grid-cols-2">
            <div className="bg-vectorblue bg-cover h-[200px] w-[220px]">
              <div className="h-full flex flex-col justify-center items-center">
                <h3 className="sm:text-4xl font-bold text-3xl text-white">100%</h3>
                <p className="sm:text-[16px] text-[14px] pt-3 w-48 text-center text-white">
                  We have 100% of client satisfaction level
                </p>
              </div>
            </div>
            <div className="bg-vectorred bg-cover h-[206px] w-[280px]">
              <div className="h-full flex flex-col justify-center items-center">
                <h3 className="sm:text-4xl font-bold text-3xl text-white">280%</h3>
                <p className="sm:text-[16px] text-[14px] pt-3 w-48 text-center text-white">
                We have massive growth rate of 280%
                </p>
              </div>
            </div>
            <div className="bg-vectorred bg-cover h-[206px] w-[280px] mt-9">
              <div className="h-full flex flex-col justify-center items-center">
                <h3 className="sm:text-4xl font-bold text-3xl text-white">No.1</h3>
                <p className="sm:text-[16px] text-[14px] pt-3 w-48 text-center text-white">
                We are no.1 marketing agency across Nepal
                </p>
              </div>
            </div>
            <div className="bg-vectorblue bg-cover h-[200px] w-[220px] mt-9">
              <div className="h-full flex flex-col justify-center items-center">
                <h3 className="sm:text-4xl font-bold text-3xl text-white">5.0</h3>
                <p className="sm:text-[16px] text-[14px] pt-3 w-48 text-center text-white">
                We have rating 
                <br></br>of 5 stars
                </p>
              </div>
            </div>
            {/* <div className="flex flex-col justify-center items-center">
              <h3 className="text-4xl font-bold">280%</h3>
              <p className="pt-3 w-48 text-center">
                We have massive growth rate of 280%
              </p>
            </div>
            <div className="flex flex-col justify-center items-center pt-[40px]">
              <h3 className="text-4xl font-bold">No.1</h3>
              <p className="pt-3 w-48 text-center">
                We are no.1 marketing agency across america
              </p>
            </div>
            <div className="flex flex-col justify-center items-center pt-[40px]">
              <h3 className="text-4xl font-bold">5.0</h3>
              <p className="pt-3 w-48 text-center">
                We have rating og 5 star in top rating sites
              </p>
            </div> */}
          </div>
        </div>
      
    </React.Fragment>
  );
}
