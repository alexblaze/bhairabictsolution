import React from 'react'

const Services = () => {
  return (
    <div className='grid grid-cols-2 gap-4 px-[24px] py-24 bg-gradient-to-r from-cyan-500 to-blue-500'>
 <div>
    <h1 className='text-1xl text-primary'>
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
            <p>100%</p>

            </div>
    </div>

  </div>
    </div>
  )
}

export default Services