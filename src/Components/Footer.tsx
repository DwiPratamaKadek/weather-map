const Footer = () => {
    return(
        <div className="flex items-center justify-around bg-gray-200 w-full h-72">
            <div className="flex gap-7">
                <div className="bg-gray-300 rounded-full w-20 h-20" ></div>
                <div className="w-64"> 
                    <h1 className="league-spartan text-[28px] font-bold">Cuaca Indo</h1>
                    <p className="karla font-light">Interactive weather map shows live conditions and forecasts for your selected location.</p>
                </div>
            </div>
            <div className="flex gap-7">
                <div className="w-64"> 
                    <h1 className="league-spartan text-[28px] font-bold">Contact Us</h1>
                    <p className="karla font-light">weatherMap@gmail.com</p>
                    <p className="karla font-light">+63877546645</p>
                </div>
            </div>
            <div className="flex gap-7">
                <div className="w-64"> 
                    <h1 className="league-spartan text-[28px] font-bold">Media Sosial</h1>
                    <p className="karla font-light">weatherMap </p>
                </div>
            </div>
        </div>
    )
}
export default Footer