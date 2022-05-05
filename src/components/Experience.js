import React from 'react';

const Experience = () => {
    return (
        <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                Relevant Experience
              </p>
            </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='text-right text-4xl font-bold'>
                <p>Please take a look at my relevant experience</p>
              </div>
              <div>
                <h2 className='font-bold'>Prime America Nepal INC Feb 2022 - April 2022</h2>
                <p>Developed a website so customers can browse through and purchase authentic Nepali products hand made by Nepali Artisans.</p>  
                <br/>
                <h2 className='font-bold'>KD Truck Line LLC Nov 2021 - Dec 2021</h2>
                <p>Developed a web page for the trucking company so customers have easy access to management and their current product travel time.</p>  
              </div>
            </div>
        </div>
      </div>
    );
}

export default Experience;
