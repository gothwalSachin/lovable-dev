import { useEffect, useState } from 'react';
import header_logo from '../assets/header_logo.svg';

const HeroSection = () => {
    const dynamicText = [
        'Ask Lovable to create a dashboard to...',
        'Ask Lovable to create a landing page for my...',
        'Ask Lovable to create a blog about...',
        'Ask Lovable to create a prototype...',
        'Ask Lovable to create an internal tool that...',
        'Ask Lovable to create a portfolio website for my...'
    ]

    const [searchTxt, setSearchTxt] = useState('')
    const [placeholderTxt, setPlaceholderTxt] = useState(dynamicText[Math.floor(Math.random() * dynamicText.length)])

    const changeFocusToFormElement = () => {
        document.getElementById('home-form')?.focus();
    }

    const updateSTSaaS = () => {
        setSearchTxt('A landing page for my SaaS startup.');
        changeFocusToFormElement();
    }

    const updateSTTask = () => {
        setSearchTxt(`A task management app with categories, due dates, and priority levels. Include a calendar view and list view. Just the UI first, I'll add Supa-base for data persistence later.`);
        changeFocusToFormElement();
    }

    const updateSTRemotion = () => {
        setSearchTxt(`A dynamic video using Remotion that animates code snippets, logos and text transitions. Include smooth animations and a modern tech theme.`);
        changeFocusToFormElement();
    }

    const updateSTPDF = () => {
        setSearchTxt(`A PDF viewer using react-pdf. Just the viewer UI first, I'll add Supabase storage later.`);
        changeFocusToFormElement();
    }

    useEffect(() => {
        const interval = setInterval(() => { setPlaceholderTxt(dynamicText[Math.floor(Math.random() * dynamicText.length)]) }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <main className="pl-4 pr-4 overflow-y-hidden">
            <div className="relative w-full">
                <section className="mb-[20px] flex min-h-[420px] w-full flex-col items-center justify-center md:mb-[0px] md:min-h-[600px]">
                    <div className="mb-2 mt-4 flex flex-col items-center px-4 text-center md:mb-4 md:mt-10">
                        <h1 className="mb-2 flex items-center gap-1 text-2xl font-medium leading-none sm:text-3xl md:mb-3 md:gap-0 md:text-5xl">
                            <span className="pt-0.5 md:pt-0 font-medium">Build something</span>
                            <div className="flex flex-col gap-1.5 ml-2 sm:ml-3 md:ml-4 md:flex">
                                <img className='h-8' src={header_logo} alt="title" />
                            </div>
                        </h1>
                        <p className='mb-6 max-w-[25ch] text-center text-base md:max-w-full md:text-lg'>Idea to app in seconds, with your personal full stack engineer</p>
                    </div>

                    <div className='w-full max-w-3xl'>
                        <div className='bg-[#272725] h-40 rounded-xl p-3'>
                            <form>
                                <textarea placeholder={placeholderTxt} value={searchTxt} id='home-form' onChange={(e) => setSearchTxt(e.target.value)} className='text-sm h-26 w-full outline-0 px-3 text-wrap resize-none' />
                            </form>
                            <button className='text-sm font-bold float-start hover:bg-blue-700 px-3 py-1 rounded-md'>Attach</button>
                            <button className='text-sm font-bold float-end hover:bg-blue-700 px-3 py-1 rounded-md'>Public</button>
                        </div>
                        <div className='mt-6 flex justify-center'>
                            <button className='text-xs py-2 px-4 text-white bg-[#272725] mx-1 rounded-3xl cursor-pointer hover:bg-gray-500' onClick={updateSTSaaS}>SaaS landing page</button>
                            <button className='text-xs py-2 px-4 text-white bg-[#272725] mx-1 rounded-3xl cursor-pointer hover:bg-gray-500' onClick={updateSTTask}>Task manager</button>
                            <button className='text-xs py-2 px-4 text-white bg-[#272725] mx-1 rounded-3xl cursor-pointer hover:bg-gray-500' onClick={updateSTRemotion}>Remotion video</button>
                            <button className='text-xs py-2 px-4 text-white bg-[#272725] mx-1 rounded-3xl cursor-pointer hover:bg-gray-500' onClick={updateSTPDF}>PDF viewer</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default HeroSection;