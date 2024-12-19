import { NavLink, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets_frontend/assets'
import { useState } from 'react';
const Navbar = () => {
    const navigate = useNavigate();
    // const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (

    
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
        <img src={assets.image} alt="" className='h-10 w-70 cursor-pointer' />
        <ul className='hidden md:flex items-center justify-between font-medium gap-4'>
            <NavLink to='/'>
                <li className="py-1">
                    Home
                </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden ' />
                
            </NavLink>
            <NavLink to='/docters'>
                <li className="py-1">
                    All Docters
                </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden ' />

            </NavLink>
            <NavLink to='/about'>
                <li className="py-1">
                    About
                </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden ' />

            </NavLink>
            <NavLink to='/contact'>
                <li className="py-1">
                    Contact
                </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden ' />

            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token
                ? <div className='flex gap-2 items-center cursor-pointer group relative'>
                    <img src={assets.profile_pic} alt="" className='w-8 rounded-full' />
                    <img src={assets.dropdown_icon} alt="" className='w-2.5'/>
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-2 p-4'>
                            <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                        
                    </div>
                </div>
                : 
                /* Button will get hidden in small screen and get displayed in medium screen */
                <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hover:bg-blue-800 hidden md:block '>Create account</button>
            }
        </div>
    </div>
  )
}

export default Navbar