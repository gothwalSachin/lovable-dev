import { useEffect, useState } from "react";

const RightPanel = () => {
    const dynamicText = [
        'Ask Lovable to create a dashboard to...',
        'Ask Lovable to create a landing page for my...',
        'Ask Lovable to create a blog about...',
        'Ask Lovable to create a prototype...',
        'Ask Lovable to create an internal tool that...',
        'Ask Lovable to create a portfolio website for my...'
    ]

    const [placeholderTxt, setPlaceholderTxt] = useState(dynamicText[Math.floor(Math.random() * dynamicText.length)]);
    
    useEffect(() => {
        const interval = setInterval(() => { setPlaceholderTxt(dynamicText[Math.floor(Math.random() * dynamicText.length)]) }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative hidden h-screen rounded-xl p-4 lg:block">
            <img width='590' loading="eager" className="w-full h-full pointer-events-none hidden select-none rounded-xl object-cover dark:block" src='https://lovable.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdark-login-background.d5ea9915.png&w=3840&q=75' alt="logosignin" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex w-[450px] items-center gap-4 rounded-xl bg-[#FCFBF8D9] px-4 py-4 shadow-xl">
                    <div className="flex-1">
                        <p className="text-base text-black">
                            <span className="font-base">{placeholderTxt}</span>
                        </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900">
                        <i className="fas fa-arrow-up"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightPanel;