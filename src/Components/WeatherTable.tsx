import React, { useEffect, useState } from "react";
import Button from "../Elements/Button";
import Box from "../Elements/Box";


    interface WeatherData {
        id : string
        name: string;
        main: {
            temp: number;
        };
        weather: {
            description: string;
            icon: string;
        }[];
        date : string
    }
   
    
    const cities = ['Jakarta', 'Jimbaran', 'Bandung', 'Surabaya', 'Lombok', 'Malang', 'Riau', 'Sragen', 'Berau', 'Tambaksari', 'Tabanan', 'Denpasar']
    // fungsi dari interface ini untuk mendefinisikan bentuk struktur data yang kita harapkan daru open APInya. dimana interface ini membuat data lebih aman dan auto-suggest saat coding, bisa tahu isi data tanpa harus melihat API docs lagi. Intinya memudahkan bentuk data saat ambil data dari API.
    

const WeatherTable: React.FC = () => {
    //penggunaan useState ini adalah hook dari React yang digunakan untuk mendeklarasikan state dalam komponen fungsional, dimana useState ini dapat menyimpan dan mengelola data dalam komponen. Setiap State diperbarui maka componen akan melakukan render ulang, untuk menampilkan nilai state yang baru. 
    const [weatherList, setWeatherList] = useState<WeatherData[]>([]);
    // ini adalah membuat sebuah state atau array dengan nama weatherlist. SetWeatherList digunakan untuk memperbarui nilai dari weatherlist. Array ini diinialisaskan  dengan array kosong [] dengan tipe yang disimpan dalam array ini adalah WeatherData, jadi array ini berisi objek - objek dengan tipe WeatherData. 
    const [selectWeather, setSelectWeather] = useState<WeatherData[]>([])
    const [loading, setLoading] = useState(true);
    const date = new Date().toLocaleDateString('id-ID', {
        weekday : 'long',
        year : 'numeric', 
        month : 'long',
        day : 'numeric'
    })

    useEffect(() => {
        const savedWeather = localStorage.getItem("selectWeather")
        if(savedWeather) {
            setSelectWeather(JSON.parse(savedWeather))
        }
    },[])

    useEffect(() => {
        localStorage.setItem("selectWeather", JSON.stringify(selectWeather))
    },[selectWeather])
    // Penggunaan useEffect pada react biasanya digunakan untuk pengambilan data, pemanggilan API, atau perubahan DOM.
    useEffect(() => { 
        const fetchWeather = async () => { // mengambil data dan asinkron dari API dimana mengambil data API dari variable apikey. 
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        try {
            const promises = cities.map(async (city) => { //fungsi dari promises ini mengambil array yang telah dibuat dan mengubahnya ke bentuk map yang telah berisi request API untuk setiap kota yang ada di dalam array. 
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`; // membuat sesuai url dengan format open API weathermap.
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

    
    if (loading) return <div>Loading...</div>;

    const addWeather = (items : WeatherData) => {
        console.log("Helo ")
        if(!selectWeather.find(w => w.id === items.id)){
            setSelectWeather([...selectWeather, items]);
        }
    }

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
      

    return (
        <>
            <div className="w-[80%] mx-auto "> {/* menggunakan -mt-64 untuk membuat tampilannya tertumpus atau bisa menggunakan "relative z-index"  */}
                        <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
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
                                        <td className="karla px-4 py-2 text-2xl"><Button className="bg-gray-100 px-4 py-2 rounded-md" onClick={() => addWeather(weather)}>Add</Button></td>
                                    </tr>
                                )
                            )}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-10 mx-80 my-12">
                        {selectWeather.map(items => (
                            <Box className=" bg-white border-2 max-w-[100%] h-auto rounded-xl p-10 shadow-lg transition-transform hover:scale-[1.03]">
                                <div key={items.id}>
                                    <p>{items.name}</p>
                                    <p>{date}</p>
                                    <div><img src={`https://openweathermap.org/img/wn/${items.weather[0].icon}@2x.png`}/></div>
                                    <p>{items.weather[0].description}</p>
                                    <p className="w-80">{getQuoteForWeather(items.weather[0].description)}</p>
                                </div>
                            </Box>
                        ))}
                    </div>
        </>
    )
}

export default WeatherTable
