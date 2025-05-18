import Button from "../Elements/Button";
import {  WeatherData} from '../types/WeatherData';

interface WeatherTableProps {
    weatherList : WeatherData[];
    weatherAdd : (weather : WeatherData) => void;
    date : string;
    
}
    

    

const WeatherTable: React.FC < WeatherTableProps>= ({weatherList, weatherAdd, date}) => {

    return (
        <>
                    <div className="w-[80%] mx-auto "> {/* menggunakan -mt-64 untuk membuat tampilannya tertumpus atau bisa menggunakan "relative z-index"  */}
                        <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
                        {weatherList.length === 0 ?(
                            <div> Kota Tidak ditemukan</div>
                        ): (
                            <table className="table-auto w-full text-left">
                            <thead>
                            <tr>
                                <th className="league-spartan bg-gray-200 rounded-l-md px-14 py-2 text-2xl">No</th>
                                <th className="league-spartan bg-gray-200 px-4 py-4 text-2xl">Date</th>
                                <th className="league-spartan bg-gray-200 px-4 py-2 text-2xl">Location</th>
                                <th className="league-spartan bg-gray-200 px-4 py-2 text-2xl">Weather</th>
                                <th className="league-spartan bg-gray-200 px-4 py-2 text-2xl">Description</th>
                                <th className="league-spartan bg-gray-200 rounded-r-md px-4 py-2 text-2xl">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {/* Memanggil data API */}
                                {weatherList.map((weather, index) => (
                                        <tr key={weather.id} className="border-b border-gray-300">
                                            <td className="karla px-14 py-2 text-2xl">{index+1}</td>
                                            <td className="karla px-4 py-2 text-2xl">{date}</td>
                                            <td className="karla px-4 py-2 text-2xl">{weather.name}</td>
                                            <td className="karla px-4 py-2 text-2xl"><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" /></td>
                                            <td className="karla px-4 py-2 text-2xl">{weather.weather[0].description}</td>
                                            <td className="karla px-4 py-2 text-2xl"><Button className="bg-gray-100 px-4 py-2 rounded-md duration-200 will-change-transform hover:bg-blue-200 hover:scale-[1.03]   " onClick={() => weatherAdd(weather)}>Add</Button></td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                            </table>
                        )}
                        </div>
                    </div>
                        
                    {/* <div className="flex flex-wrap gap-10 justify-center my-12 max-w-full mx-5 ">
                        {selectWeather.map(items => (
                            <Box className=" bg-white border-2 border-gray-200 w-full h-auto sm:w-[60%] md:w-[45%] lg:w-[30%]  rounded-xl p-8 shadow-lg transition-transform hover:scale-[1.03]" key={items.id}> // peggunakan key harus setalah map, jika tidak maka akan tidak dibaca.
                                <div >
                                    <p className="league-spartan text-3xl md:text-4xl lg:text-5xl">{items.name}</p>
                                    <p className="karla text-xl md:text-3xl font-light">{date}</p>
                                    <div><img src={`https://openweathermap.org/img/wn/${items.weather[0].icon}@2x.png`}/></div>
                                    <p className="karla text-2xl mb-5 md:text-3xl font-normal">{items.weather[0].description}</p>
                                    <p className="karla w-80 text-xl md:text-2x1 font-light">{getQuoteForWeather(items.weather[0].description)}</p>
                                </div>
                            </Box>
                        ))}
                    </div> */}
        </>
    )
}

export default WeatherTable
