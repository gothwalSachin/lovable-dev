import { NavLink } from "react-router";
import RightPanel from "./RightPanel";

const SignUp = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
            <div className="w-full px-6 py-30">
                <div className="w-1/2 mx-auto flex flex-col gap-8">
                    <div>
                        <NavLink to='/'>
                            <img width='36' height='36' src='../favicon.ico' alt="logo" />
                        </NavLink>
                    </div>
                    <div className="min-h-[450px] w-full flex flex-col gap-6">
                        <h2 className="text-3xl font-bold">Create your account</h2>
                        <div className="grid gap-5">
                            <button className="items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors duration-100 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none border border-[#40403f] bg-[#272725] shadow-sm hover:bg-[#272725] hover:border-[#272725] h-8 rounded-md px-4 py-2 relative flex w-full space-x-2"><i className="fab fa-google"></i>Sign in with Google</button>
                            <button className="items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors duration-100 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none border border-[#40403f] bg-[#272725] shadow-sm hover:bg-[#272725] hover:border-[#272725] h-8 rounded-md px-4 py-2 relative flex w-full space-x-2"><i className="fab fa-github"></i> Sign in with Github</button>
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-[#272725]"></span>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-[#1c1c1c] px-2 text-[#c5c1ba]">Or</span>
                                </div>
                            </div>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="grid gap-5">
                                    <div className="grid">
                                        <p className="mb-1 text-sm font-semibold text-[#fcfbf8]">Email</p>
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only">Email</label>
                                        <input type="text" id="email" placeholder="Email" autoCapitalize="none" autoComplete="password" autoCorrect="off" className="flex h-9 w-full rounded-md border border-[#40403f] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#fcfbf8] placeholder:text-[#c5c1ba] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" />

                                        <p className="mb-1 mt-4 text-sm font-semibold text-[#fcfbf8]">Password
                                        </p>
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only" htmlFor="password">Password</label>
                                        <input placeholder="Password" autoCapitalize="none" autoComplete="password" autoCorrect="off" type="password" id="password" className="flex h-9 w-full rounded-md border border-[#40403f] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#fcfbf8] placeholder:text-[#c5c1ba] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" ></input>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors duration-100 ease-in-out focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none bg-[#fcfbf8] text-[#1c1c1c] hover:bg-[#fcfbf8]/90 h-8 rounded-md px-4 py-2 w-full">Sign up</button>
                                        <div className="text-center text-base font-normal">
                                            <span className="text-sm text-[#c5c1ba]">Already have an account? </span>
                                            <NavLink to="/login" className='text-sm text-[#fcfbf8] underline'>Sign In</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <RightPanel />
        </div>
    );
}

export default SignUp;