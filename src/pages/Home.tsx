import Button from "../Elements/Button";
import WeatherTable from "../Components/WeatherTable";
import SearchBox from "../Components/SearchBox";
import { WeatherData } from "../types/WeatherData";
import { useState, useEffect } from "react";
import Box from "../Elements/Box";




const cities = ['Jakarta', 'Jimbaran', 'Bandung', 'Surabaya', 'Lombok', 'Malang', 'Riau', 'Sragen', 'Berau', 'Tambaksari', 'Tabanan', 'Denpasar']
    // fungsi dari interface ini untuk mendefinisikan bentuk struktur data yang kita harapkan daru open APInya. dimana interface ini membuat data lebih aman dan auto-suggest saat coding, bisa tahu isi data tanpa harus melihat API docs lagi. Intinya memudahkan bentuk data saat ambil data dari API.

const Weather =() => {

    //penggunaan useState ini adalah hook dari React yang digunakan untuk mendeklarasikan state dalam komponen fungsional, dimana useState ini dapat menyimpan dan mengelola data dalam komponen. Setiap State diperbarui maka componen akan melakukan render ulang, untuk menampilkan nilai state yang baru. 
        const [weatherList, setWeatherList] = useState<WeatherData[]>([]);
        // ini adalah membuat sebuah state atau array dengan nama weatherlist. SetWeatherList digunakan untuk memperbarui nilai dari weatherlist. Array ini diinialisaskan  dengan array kosong [] dengan tipe yang disimpan dalam array ini adalah WeatherData, jadi array ini berisi objek - objek dengan tipe WeatherData. 
        const [loading, setLoading] = useState(true);
        const [selectWeather, setSelectWeather] = useState<WeatherData[]>([])
        const date = new Date().toLocaleDateString('id-ID', {
            weekday : 'long',
            year : 'numeric', 
            month : 'long',
            day : 'numeric'
        })
        const weatherQuotes = [
            {description :"awan mendung", quote : "Kala langit berselimut mendung, harapan tetap menyelinap di balik kelabu." },
            {description :"awan tersebar", quote : "Awan yang tersebar mengajarkan bahwa keindahan kadang datang tak utuh, tapi tetap memikat." },
            {description :"hujan sedang", quote : "Hujan tak deras, namun cukup untuk membuat kita diam dan merenung." },
            {description :"hujan rintik-rintik", quote : "Gerimis itu tak pernah berisik, tapi selalu meninggalkan jejak rasa." },
            {description :"sedikit berawan", quote : "Langit tak selalu cerah sempurna, tapi justru awan tipis membuatnya terasa nyata." },
            {description :"cerah", quote : "Saat langit cerah, mari percaya—hari baik sedang menyapa." },
        ] 
    
        const getQuoteForWeather = (desc: string): string => {
            const found = weatherQuotes.find(q => desc.toLowerCase().includes(q.description));
            return found ? found.quote : "Nikmati harimu, apapun cuacanya!";
        };
        const [filteredWeather, setFilteredWeather] = useState<WeatherData[]>([])
        const [searchWeather, setSearchWeather] = useState("")

        useEffect(() => {
                const savedWeather = localStorage.getItem("selectWeather")
                if(savedWeather) {
                    setSelectWeather(JSON.parse(savedWeather))
                }
            },[])
    // Untuk Mengelola data API 
        useEffect(() => {
            localStorage.setItem("selectWeather", JSON.stringify(selectWeather))
            },[selectWeather])
            // Penggunaan useEffect pada react biasanya digunakan untuk pengambilan data, pemanggilan API, atau perubahan DOM.
            useEffect(() => { 
                const fetchWeather = async () => { // mengambil data dan asinkron dari API dimana mengambil data API dari variable apikey. 
                const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
                try {
                    const promises = cities.map(async (kota) => { //fungsi dari promises ini mengambil array yang telah dibuat dan mengubahnya ke bentuk map yang telah berisi request API untuk setiap kota yang ada di dalam array. 
                        const url = `https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${apiKey}&units=metric&lang=id`; // membuat sesuai url dengan format open API weathermap.
                        const response = await fetch(url); // ini untuk permintaan HTTP ke API 
                        const data: WeatherData = await response.json(); // kemudin diubah menjadi format JSON
                        
                        return data; //dan mengembalikan data 
                    });
                    const results = await Promise.all(promises); // Promise ini berisikan array promises. fungsi ini digunakan untuk menunggu hingga semua permintaan untuk setiap kota selesai di proses dan disimpan ke dalam result.    
                    setWeatherList(results); // kemudain disimpan ke array WeatherList
                } catch (error) {
                    console.error("Error fetching weather data:", error);
                } finally {
                    setLoading(false);
                }
            };
            
            fetchWeather();
            }, []);
            
            useEffect (() => {
                const filtered = weatherList.filter((weather) => 
                    weather.name.toLowerCase().includes(searchWeather.toLowerCase())
                )
                console.log("apakah mau ?", filtered)
                setFilteredWeather(filtered)
            },[searchWeather, weatherList])
            if (loading) return <div>Loading...</div>;

            const addWeather = (items : WeatherData) => {
                console.log("Helo ")
                if(!selectWeather.find(w => w.id === items.id)){
                    setSelectWeather([...selectWeather, items]);
                }
            }

            
            
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
                
                <div className="-mt-64">
                    {/*  Search*/}
                    <SearchBox searchQuery={searchWeather} setSearchQuery={setSearchWeather}></SearchBox>   
                    {/* Table */}
                    <WeatherTable weatherAdd={addWeather} weatherList={filteredWeather} date={date}></WeatherTable>
                    {/* add box */}
                    <div className="flex flex-wrap gap-10 justify-center my-12 max-w-full mx-5 ">
                        {selectWeather.map(items => (
                            <Box className=" bg-white border-2 border-gray-200 w-full h-auto sm:w-[60%] md:w-[45%] lg:w-[30%]  rounded-xl p-8 shadow-lg transition-transform hover:scale-[1.03]" key={items.id}>  {/* peggunakan key harus setalah map, jika tidak maka akan tidak dibaca.*/}
                                <div >
                                    <p className="league-spartan text-3xl md:text-4xl lg:text-5xl">{items.name}</p>
                                    <p className="karla text-xl md:text-3xl font-light">{date}</p>
                                    <div><img src={`https://openweathermap.org/img/wn/${items.weather[0].icon}@2x.png`}/></div>
                                    <p className="karla text-2xl mb-5 md:text-3xl font-normal">{items.weather[0].description}</p>
                                    <p className="karla w-80 text-xl md:text-2x1 font-light">{getQuoteForWeather(items.weather[0].description)}</p>
                                </div>
                            </Box>
                        ))}
                    </div>
                </div>
                
                
        </>
    );
};

export default Weather;