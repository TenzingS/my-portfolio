import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Rails from '../assets/ruby-on-rails.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-red-600'>Skills</p>
                    <p className='py-4'>These are the technologies that I work with.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 text-[#ccd6f6] font-bold'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                        <img src={HTML} alt='html icon' style={{width: '250px'}}/>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                        <img src={CSS} alt='html icon' style={{width: '250px'}} />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                        <img src={ReactImg} alt='html icon' style={{width: '250px'}}/>
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                        <img src={JavaScript} alt='html icon' style={{width: '250px'}} />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                        <img src={Tailwind} alt='html icon' style={{width: '250px'}} />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                        <img src={Rails} alt='html icon' style={{width: '200px'}} />
                        <p className='my-4'>RUBY ON RAILS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
