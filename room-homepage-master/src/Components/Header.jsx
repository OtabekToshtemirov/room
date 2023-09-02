import logo from "../../../../room/room-homepage-master/src/images/logo.svg";
import menu from "../../../../room/room-homepage-master/src/images/icon-hamburger.svg";
import close from "../../../../room/room-homepage-master/src/images/icon-close.svg";
import {useState} from 'react'


const Header = () => {


    const [isOpen, setIsOpen] = useState(false)
   
    return (
        <header className="absolute z-10 p-8 w-full flex items-center justify-center lg:items-center lg:justify-start">
            <div className="flex items-center justify-center">
                <div className="absolute left-8 top-11 z-30 lg:hidden">
                    {isOpen ? (
                        <button onClick={() => setIsOpen(false)}>
                            <img src={close} alt=""/>
                        </button>
                    ) : (
                        <button onClick={() => setIsOpen(true)}>
                            <img src={menu} alt=""/>
                        </button>
                    )}
                </div>
                <div className="p-4">
                    <img src={logo} alt="logo"/>
                </div>
                <div className={`${isOpen ? 'bg-white w-full z-20 absolute top-0' : 'p-4 hidden lg:block'}  `}>
                    <nav className={`${isOpen ? "open z-20 w-full py-8 lg:py-0 lg:w-auto" : ""}`}>


                        <ul className="flex justify-center font-bold fon">
                            <li>
                                <button
                                    className="border-b-2 m-3 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white">
                                    home
                                </button>
                                <button
                                    className="border-b-2 m-3 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white">
                                    shop
                                </button>
                                <button
                                    className="border-b-2 m-3 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white">
                                    about
                                </button>
                                <button
                                    className="border-b-2 m-3 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white">
                                    contact
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;