interface Props {
    name: string;
    totalEvents: number;
    img: string;
    sportName: string;
    isLightTheme: boolean;
}

export const SportCard = ({ name, totalEvents, img, sportName, isLightTheme }: Props) => {
    return (
        <div className={`w-2/3 sm:w-1/2 md:w-max flex justify-center items-center shadow-2xl mr-2 sm:mr-0 p-2 mt-6 ${isLightTheme ? 'bg-white' : 'bg-zinc-700'}`}>
            <div>
                <div className='image flex items-center flex-col'>
                    <img src={img} alt='img' className="w-1/2 sm:w-full" />
                    <h2 className="text-sm sm:text-base md:text-lg font-semibold sm:self-start my-3 mb-4">{name}</h2>
                </div>
                <div className={`${isLightTheme ? 'bg-gray-100' : 'bg-zinc-800'} py-1 mb-2 rounded-md flex justify-around`}>
                    <div>
                        <p className="text-xs sm:text-sm font-extralight">Total Events</p>
                        <p className="text-sm sm:text-base"> {totalEvents} Events </p>
                    </div>
                    <div>
                        <p className="text-xs sm:text-sm font-extralight">Sports</p>
                        <p className="text-sm sm:text-base">{sportName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
