import Button from "../Elements/Button";
import WeatherTable from "../Components/WeatherTable";
import SearchBox from "../Components/SearchBox";





const Weather =() => {


    return (
        <>
            <div className="bg-gray-100 w-[90%] h-[900px] mx-auto rounded-b-3xl flex items-center justify-center">
                    <div className="flex flex-col text-center">
                        <h1 className="league-spartan text-6xl font-medium font-sans">Stay prepared with real-time</h1>
                        <h2 className="league-spartan text-4xl font-normal mb-16 font-sans">weather updates</h2>
                        <p className="karla text-2xl font-light font-sans">Find and check the weather around you easily</p>
                        <div className=" flex justify-center gap-2 ">
                            <Button className=" bg-gray-200 rounded-xl p-3"> Search Weather </Button>
                            <Button className=" bg-gray-200 rounded-xl p-3"> Add Weather </Button>
                        </div>
                    </div>
                 
                </div>
                {/* Search Location */}
                               
                {/* Tabel Weather  */}
                <div className="-mt-64">
                    <SearchBox ></SearchBox>   
                    <WeatherTable></WeatherTable>
                </div>
                
                
        </>
    );
};

export default Weather;