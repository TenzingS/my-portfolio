import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';
import Resume from '../assets/resume.pdf';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        < div className='fixed w-full h-[65px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="logo" style={{width: '120px'}} />
            </div>
                    <ul className='hidden md:flex'> 
                        <li>
                        <Link to='home' smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                        <Link to='experience' smooth={true} duration={500}>Experience</Link>
                        </li>
                        <li>
                        <Link to='skills' smooth={true} duration={500}>Skills</Link>
                        </li>
                        <li>
                        <Link to='projects' smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li>
                        <Link to='contact' smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center iterms-center' }>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='Home' smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>Projects</Link>
                </li> 
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/tenzing-n-sherpa/" target="_blank">
                            Linkedin <FaLinkedin size ={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/TenzingS" target="_blank">
                            Github <FaGithub size ={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <Link to='contact' smooth={true} duration={500} className='flex justify-between items-center w-full text-gray-300'>Contact
                            <HiOutlineMail size ={30} />
                        </Link>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href={Resume} target="_blank">
                            Resume <BsFillPersonLinesFill size ={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
