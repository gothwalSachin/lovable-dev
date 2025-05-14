const Footer = () => {
    return (
        <div className="px-4 w-full mt-8 mb-6">
            <footer className='border border-[#272725] rounded-xl  bg-[#1c1c1c]'>
                <div className="grid grid-cols-6 mx-auto px-12 my-6">
                <img className="w-8" src='../favicon.ico' alt="logo" />
                <div className="flex flex-col gap-y-4">
                    <p className="mb-3 font-bold">Company</p>
                    <a className="text-[#c5c1ba] hover:underline gap-4" href="">Blog</a>
                    <a className="text-[#c5c1ba] hover:underline gap-4" href="">Careers</a>
                </div>
                    <div className="flex flex-col  gap-y-4">
                    <p className="mb-3 font-bold">Product</p>
                    <a className="text-[#c5c1ba] hover:underline" href="">Import from Figma</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Roadmap</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Status</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Changelog</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Pricing</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Solutions</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Hire a Partner</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Become a Partner</a>
                </div>
                    <div className="flex flex-col  gap-y-4">
                    <p className="mb-3 font-bold">Resources</p>
                    <a className="text-[#c5c1ba] hover:underline" href="">Launched</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Enterprise</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Learn</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Support</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Integrations</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Affiliates</a>
                </div>
                    <div className="flex flex-col  gap-y-4">
                    <p className="mb-3 font-bold">Legal</p>
                    <a className="text-[#c5c1ba] hover:underline" href="">Privacy Policy</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Terms & Conditions</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Report Abuse</a>
                </div>
                    <div className="flex flex-col  gap-y-4">
                    <p className="mb-3 font-bold">Socials</p>
                    <a className="text-[#c5c1ba] hover:underline" href="">X/Twitter</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Linkedin</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Discord</a>
                    <a className="text-[#c5c1ba] hover:underline" href="">Reddit</a>
                </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;