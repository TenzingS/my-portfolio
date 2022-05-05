import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-blue-400 font-bold'>Hi! My name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tenzing Sherpa.</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a full-stack developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a Full Stack developer with experience building websites and web applications. I am passionate about building excellent software that improves the lives of those around me. I have a strong passion in writing optimized code with the ability to learn and implement new technologies quickly.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400'>
                    <Link to='projects' smooth={true} duration={500}>View Projects</Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
