import Menu from "../Elements/Menu";
import InputText  from "../Elements/InputText";
import { FiSearch } from "react-icons/fi";


const Navbar = () => {
    return(
        <nav className="w-full h-20 flex items-center justify-around backdrop-blur-sm fixed top-0 z-50">
            <div className="flex items-center gap-7">
                <div className="rounded-full bg-gray-900 w-10 h-10 mt-1.5"></div>
                <h1 className="league-spartan font-bold text-lg ">Cuaca Indo</h1>    
            </div>
            <Menu className ="league-spartan flex gap-12 text-lg" items = 
            {
                [
                    {name : 'Home', link : '/'},
                    {name : 'About', link : '/about'},
                    {name : 'Contact', link : '/Contact'}
                ]
            }>   
            </Menu>
            <div className="flex items-center gap-4 bg-gray-200 pt-1 pb-1 pl-3 rounded-sm ">
                <FiSearch></FiSearch>
                <InputText className="league-spartan text-lg rounded-sm focus:outline-none foucs:border-transparant" placeholder="Find Your Location" ></InputText>
            </div>
        </nav>
    )
}
export default Navbar