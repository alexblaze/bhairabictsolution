import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='grid md:grid-cols-2 gap-4 px-[24px] py-24 bg-"#fafafa"'>
 <div>
    <h1 className='text-1xl text-blue-800'>
        Why Choose Us?
    </h1>
    <h1 className='text-5xl font-bold py-2'>
        We Have the Best Team <br></br>Of Marketing Experts
    </h1>
    <p className='pr-[32px] py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, sed architecto, quisquam assumenda perferendis.</p>
 </div>

  <div>
    <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <h3 className='text-4xl font-bold'>100%</h3>
          <p className='pt-3 w-48 text-center'>We have 100% of client satisfaction level</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className='text-4xl font-bold'>280%</h3>
          <p className='pt-3 w-48 text-center'>We have massive growth rate of 280%</p>
        </div>
        <div className="flex flex-col justify-center items-center pt-[40px]">
          <h3 className='text-4xl font-bold'>No.1</h3>
          <p className='pt-3 w-48 text-center'>We are no.1 marketing agency across Nepal</p>
        </div>
        <div className="flex flex-col justify-center items-center pt-[40px]">
          <h3 className='text-4xl font-bold'>5.0</h3>
          <p className='pt-3 w-48 text-center'>We have rating of 5 star</p>
        </div>
    </div>

  </div>
    </div>
  )
}

export default WhyChooseUs