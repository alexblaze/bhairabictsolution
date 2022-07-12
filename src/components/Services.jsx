import React from 'react'

const Services = () => {
  return (
    <React.Fragment>
      <div className='grid grid-cols-2 gap-4 px-[24px] py-24 bg-"#fafafa"'>
        <div>
          <h1 className='text-1xl text-"#4c57e0"'>
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
              <p className='pt-3 w-48 text-center'>We are no.1 marketing agency across america</p>
            </div>
            <div className="flex flex-col justify-center items-center pt-[40px]">
              <h3 className='text-4xl font-bold'>5.0</h3>
              <p className='pt-3 w-48 text-center'>We have rating og 5 star in top rating sites</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[24px] py-24 bg-sky-200 text-center flex justify-around">
        <div className=" bg-white shadow rounded-lg max-w-xs ">
          <h1 className='text-2xl font-bold py-5'>Web Design</h1>
          <p className='px-4 pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem laborum totam est temporibus reiciendis nostrum. Porro vitae sequi aspernatur quasi.</p>
        </div>
        <div className=" bg-white shadow rounded-lg max-w-xs ">
          <h1 className='text-2xl font-bold py-5'>Design studio</h1>
          <p className='px-4 pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem laborum totam est temporibus reiciendis nostrum. Porro vitae sequi aspernatur quasi.</p>
        </div>
        <div className=" bg-white shadow rounded-lg max-w-xs ">
          <h1 className='text-2xl font-bold py-5'>Contact us</h1>
          <p className='px-4 pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem laborum totam est temporibus reiciendis nostrum. Porro vitae sequi aspernatur quasi.</p>
        </div>
        
      </div>

    </React.Fragment>

  )
}

export default Services