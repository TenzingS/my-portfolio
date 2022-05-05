import React from 'react';
import WeatherApp from '../assets/weather-app.png';
import Reciplease from '../assets/reciplease.png';
import CocktailBar from '../assets/cocktail-bar.png';
import NBAToday from '../assets/nba-today.png';


const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Projects</p>
                    <p className='py-6'>Check out my recent projects!</p>
                </div>

                <div className=' grid sm:grid-cols-1 md:grid-cols-2 gap-4'>

                    <div  style={{backgroundImage: `url(${WeatherApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text 2xl font-bold text-white tracking-wider'>
                                FORCAST-R
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://eloquent-moonbeam-9bb0af.netlify.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Website</button>
                                </a>
                                <a href="https://github.com/TenzingS/weather-app" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div  style={{backgroundImage: `url(${Reciplease})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text 2xl font-bold text-white tracking-wider'>
                                RECIPLEASE
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://reciplease10.herokuapp.com/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Website</button>
                                </a>
                                <a href="https://www.youtube.com/watch?v=ZS_o694-rsk" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/TenzingS/reciplease" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div  style={{backgroundImage: `url(${CocktailBar})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text 2xl font-bold text-white tracking-wider'>
                                COCKTAIL BAR
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://cheery-palmier-689150.netlify.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Website</button>
                                </a>
                                <a href="https://www.youtube.com/watch?v=L4O4EEyOXKg" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/TenzingS/cocktail-bar" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div  style={{backgroundImage: `url(${NBAToday})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text 2xl font-bold text-white tracking-wider'>
                                NBA TODAY
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://www.youtube.com/watch?v=xCoCVZxq1As" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/TenzingS/nba-today-project" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;
