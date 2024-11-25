import { Heart, Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <>
            <DesktopSidebar />
            <MobileSidebar />
        </>
    );
};

export default Sidebar;

const DesktopSidebar = () => {
    return (
        <div className="h-screen  p-2 md:p-10 border-r min-h-screen w-24 md:w-56 hidden sm:block ">
            <div className="flex flex-col gap-7 md:gap-10 sticky top-10 left-0">
                <div className="w-full justify-center md:justify-start flex">
                    <img src="/logo.svg" alt="logo" className= "mx-2 hidden md:block w-24 transition duration-300 ease-in-out  hover:scale-105" />
                    <img
                        src="/mobile-logo.svg"
                        alt="mobilelogo"
                        className="block md:hidden w-16 transition duration-300 ease-in-out  hover:scale-105"
                    />
                </div>
                <ul className="flex flex-col items-center md:items-start gap-5">
                    <Link to="/" className="flex gap-1 hover:shadow-[0_0_15px_rgba(217,119,6,0.8)] p-1 rounded-lg md:w-32 hover:text-amber-600">
                        <Home size={25} />
                        <span className="font-bold hidden md:block  ">Home</span>
                    </Link>
                    <Link to="/favorites" className="flex gap-1 hover:shadow-[0_0_15px_rgba(217,119,6,0.8)] p-1 rounded-lg md:w-32 hover:text-amber-600">
                        <Heart size={25} />
                        <span className="font-bold hidden md:block  ">Favourites</span>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

const MobileSidebar = () => {
	return (
		<div
			className='flex justify-center gap-10 border-t fixed w-full
			bottom-0 z-10 p-2 sm:hidden 
		'
		>
			<Link to={"/"}>
				<Home size={"24"} className='cursor-pointer  hover:shadow-[0_0_15px_rgba(217,119,6,0.8)]  hover:text-amber-600 p-1 rounded-lg' />
			</Link>
			<Link to={"/favorites"}>
				<Heart size={"24"} className='cursor-pointer  hover:shadow-[0_0_15px_rgba(217,119,6,0.8)]  hover:text-amber-600 p-1 rounded-lg' />
			</Link>
		</div>
	);
};