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
                                Weather App
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
                                Recipe App
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
                                Cocktail App
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
                                NBA Today App
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
            {/* <main>
                <h2>Projects that I have done and am working on currently</h2>

                <h3>NBA Today - <a href="https://github.com/TenzingS/nba-today-project" target="_blank">Github</a></h3>
                <p>App allows users to register and join a message board and interact with other NBA fans. 
                The app features the latest news, player stats, and allows users to stay up to date on all things NBA related.</p>

                <h3>Reciplease - <a href="https://github.com/TenzingS/reciplease" target="_blank">Github</a> | <a href="https://reciplease10.herokuapp.com/" target="_blank">Site</a></h3>
                <p>App allows users to register and join an online community where people can share their recipes with others</p>

                <h3>Cocktail Bar - <a href="https://github.com/TenzingS/cocktail-bar" target="_blank" >Github</a> | <a href="https://cheery-palmier-689150.netlify.app/" target="_blank">Site</a></h3>
                <p>A front-end app where users can search for every cocktail in the cocktail API database. Results also include images and recipes of the cocktails.</p>

                <h3>Weather App - <a href="https://github.com/TenzingS/weather-app" target="_blank">Github</a> | <a href="https://eloquent-moonbeam-9bb0af.netlify.app/" target="_blank">Site</a></h3>
                <p>Front-end app allows users to enter a location and receive current and forecast weather data for the location</p>

                <h3>Airlines Review - <a href="https://github.com/TenzingS/airlines-rails-react" target="_blank">Github</a></h3>
                <p>Front End app that allows users to leave reviews on major airlines.</p>
            </main> */}
        </div>
    );
}

export default Projects;
