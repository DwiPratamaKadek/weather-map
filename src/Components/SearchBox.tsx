import InputText from "../Elements/InputText"
import { FiSearch } from "react-icons/fi";



const SearchBox: React.FC = () => {
    return (
        <div className="flex items-center mx-15 w-[50%] md:mx-56  my-10 bg-gray-200 md:max-w-[30%] pl-5 pt-3 pb-3 pr-3 rounded-md gap-7">
            <FiSearch className="w-6 md:w-8 h-auto"></FiSearch>
            <InputText className = "karla w-[85%] text-xm md:text-2xl md:max-w-full focus:outline-none foucs:border-transparant " placeholder="Find Your Locatin"></InputText>
        </div>
    )
}
export default SearchBox