import { NavLink } from 'react-router';
import header_logo from '../assets/header_logo.svg';
import { useEffect, useState } from 'react';

const Header = () => {
    const [dynamicClass, setDynamicClass] = useState('border-transparent')

    const changeClass = () => {
        if (window.scrollY > 30) setDynamicClass('border-b border-[#27272540] bg-[#1c1c1cbf] backdrop-blur-xl');
        else setDynamicClass('border-transparent');
    }

    useEffect(() => {
        window.addEventListener('scroll', changeClass);

        return () => window.removeEventListener('scroll', changeClass);
    }, []);

    return (
        <header className={"sticky top-0 z-50 flex w-full flex-col items-center justify-between transition-all duration-200 ease-out" + dynamicClass}>
            <nav className="flex h-16 w-full items-center justify-between p-3">
                <div className='flex items-center gap-8 md:pl-10'>
                    <NavLink to='/' end>
                        <img width='116' height='22' src={header_logo} alt="header-logo" />
                    </NavLink>
                </div>
                <div className='flex items-center gap-4 md:pr-10'>
                    <NavLink to='login' className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none border border-[#40403f] bg-[#272725] shadow-sm hover:bg-blue-500 hover:border-blue-500 hover:text-blue-500-foreground h-8 rounded-md px-4 py-2 cursor-pointer' end>Sign In</NavLink>
                    <NavLink to='signup' className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-colors focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none bg-[#FCFBF8] text-[#1C1C1C] hover:bg-[#FCFBF8]/90 h-7 rounded-md px-4 py-2 cursor-pointer' end>Sign Up</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;