import Menu from "../Elements/Menu";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";


const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    const menuItems = [
        {name: 'Home', link: '/'},
        {name : 'About', link : '/about'},
        {name : 'Contact', link : '/Contact'}
    ]

    

    return(
        <nav className="w-full h-20 flex items-center justify-around backdrop-blur-sm fixed top-0 z-50">
            <div className="flex items-center gap-7">
                <div className="rounded-full bg-gray-900 w-10 h-10 mt-1.5"></div>
                <h1 className="league-spartan font-bold text-lg ">Cuaca Indo</h1>    
            </div>
            {/* Dekstop menu */}
            <div className="hidden md:flex league-spartan gap-12 text-lg">
                <Menu className="league-spartan flex gap-12 text-lg"  items ={menuItems}/> 
            </div>  

            {/* Hamburger Menu */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
                </button>
            </div>
            {/* Mobile menu */}
            <div className={`absolute top-20 left-20 bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4  md:hidden z-50 transform transition-all duration-300 ease-in-out
            ${isOpen?'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-auto'}`}
            >
                <Menu className="flex flex-col gap-4 league-spartan text-lg" items={menuItems}/>
            </div>
        
        </nav>
    )
}
export default Navbar   