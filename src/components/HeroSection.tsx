import { useEffect, useState } from 'react';
import logo from '../../public/favicon.ico'

const HeroSection = () => {
    const dynamicText = [
        'Ask Lovable to create a dashboard to...',
        'Ask Lovable to create a landing page for my...',
        'Ask Lovable to create a blog about...',
        'Ask Lovable to create a prototype...',
        'Ask Lovable to create an internal tool that...',
        'Ask Lovable to create a portfolio website for my...'
    ];

    const [searchTxt, setSearchTxt] = useState('');
    const [placeholderTxt, setPlaceholderTxt] = useState(dynamicText[Math.floor(Math.random() * dynamicText.length)]);

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
        <main className="px-4 overflow-y-hidden">
            <div className="relative w-full">
                <section className="mb-[20px] flex min-h-[420px] w-full flex-col items-center justify-center md:mb-[0px] md:min-h-[600px]">
                    <div className="mb-2 mt-5 flex flex-col items-center px-4 text-center md:mb-4 md:mt-10">
                        <h1 className="mb-2 flex items-center gap-1 text-xl font-medium leading-none sm:text-2xl md:mb-3 md:gap-0 md:text-5xl">
                            <span className="pt-0.5 md:pt-0 font-medium flex items-center">Build something <img width='36' height='36' className='hidden md:block md:ml-2' src={logo} alt="title" />
                                <span className='text-xl font-medium sm:text-2xl md:text-5xl ml-1 md:ml-2'>Lovable</span>
                            </span>
                        </h1>
                        <p className='mb-6 max-w-[25ch] text-center text-base md:max-w-full md:text-lg'>Idea to app in seconds, with your personal full stack engineer</p>
                    </div>

                    <div className='w-full max-w-3xl'>
                        <div className='bg-[#272725] h-40 rounded-xl p-3'>
                            <form>
                                <textarea placeholder={placeholderTxt} value={searchTxt} id='home-form' onChange={(e) => setSearchTxt(e.target.value)} className='text-sm h-26 w-full outline-0 px-3 text-wrap resize-none' />
                            </form>
                            <button className='text-sm font-bold float-start hover:bg-blue-700 px-3 py-1 rounded-md'><i className='far fa-file-image'></i> Attach</button>
                            <button className='text-sm font-bold float-end hover:bg-blue-700 px-3 py-1 rounded-md'><i className='fas fa-globe-asia'></i> Public</button>
                        </div>
                        <div className='mt-6 flex justify-center'>
                            <button className='text-xs py-2 px-4 text-white bg-[#272725] mx-1 rounded-3xl cursor-pointer hover:bg-gray-500' onClick={updateSTSaaS}><i className='far fa-file-code'></i> SaaS landing page</button>
                            <button className='text-xs py-2 px-4 text-white bg-[#272725] mx-1 rounded-3xl cursor-pointer hover:bg-gray-500' onClick={updateSTTask}><i className='fas fa-clipboard-check'></i> Task manager</button>
                            <button className='hidden md:block text-xs py-2 px-4 text-white bg-[#272725] mx-1 rounded-3xl cursor-pointer hover:bg-gray-500' onClick={updateSTRemotion}><i className='far fa-file-audio'></i> Remotion video</button>
                            <button className='hidden md:block text-xs py-2 px-4 text-white bg-[#272725] mx-1 rounded-3xl cursor-pointer hover:bg-gray-500' onClick={updateSTPDF}><i className='far fa-file-pdf'></i> PDF viewer</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default HeroSection;