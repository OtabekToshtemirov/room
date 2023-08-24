import logo from "../images/logo.svg";


const Header = () => {
    return (
        <header className="absolute left-0 top-0 mx-auto p-0">
            <div className="flex items-center">
                <div className="p-4">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="p-4">
                    <ul className="flex justify-start">
                        <li className="mr-8 text-white opacity-75 hover:text-slate-800 cursor-pointer">Home</li>
                        <li className="mr-8 text-white opacity-75 hover:text-slate-800 cursor-pointer">Shop</li>
                        <li className="mr-8 text-white opacity-75 hover:text-slate-800 cursor-pointer">About</li>
                        <li className="mr-8 text-white opacity-75 hover:text-slate-800 cursor-pointer">Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;