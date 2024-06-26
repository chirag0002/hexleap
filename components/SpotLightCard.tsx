interface Props {
    img: string;
    name: string;
    dateTime: string;
    location: string;
    collectionTitle: string;
    isLightTheme: boolean;
}

export const SpotlightCard = ({ img, name, dateTime, collectionTitle, location, isLightTheme }: Props) => {
    return (
        <div className={`w-[80%] sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-2xl ${isLightTheme ? "bg-white" : "bg-zinc-700"}`}>
            <img src={img} alt="img" className="w-3/4 sm:w-full m-auto" />
            <div className="flex justify-between items-center">
                <div className={`w-6 h-6 rounded-full ${isLightTheme ? 'bg-gray-200' : 'bg-gradient-to-bl from-[#18282A] to-[#3a2b4c]'} ml-[-15px]`} />
                <div className="h-5 w-3/4 sm:w-[80%] overflow-hidden font-thin">-------------------------------------------------------------------</div>
                <div className={`w-6 h-6 rounded-full ${isLightTheme ? 'bg-gray-200' : 'bg-gradient-to-bl from-[#18282A] to-[#3a2b4c]'} mr-[-15px]`} />
            </div>
            <div>
                <p className="font-semibold text-base sm:text-lg md:text-xl my-3">
                    {name}
                </p>
                <p className="text-xs sm:text-sm md:base">{dateTime}</p>
                <p className="my-4 font-light text-sm sm:base">{location}</p>
                <button className="text-sm sm:base bg-black text-white mb-2 w-3/4 sm:w-[80%] py-2">{collectionTitle}</button>
            </div>
        </div>
    )
}