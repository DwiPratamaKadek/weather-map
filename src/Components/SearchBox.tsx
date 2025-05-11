import InputText from "../Elements/InputText"
import { FiSearch } from "react-icons/fi";



const SearchBox: React.FC = () => {
    return (
        <div className="flex items-center mx-56 my-10 bg-gray-200 w-[20%] pl-5 pt-3 pb-3 pr-3 rounded-md gap-7">
            <FiSearch className="w-8 h-auto"></FiSearch>
            <InputText className = "karla w-[80%] text-2xl focus:outline-none foucs:border-transparant " placeholder="Find Your Locatin"></InputText>
        </div>
    )
}
export default SearchBox