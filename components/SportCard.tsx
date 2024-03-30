interface Props {
    name: string;
    totalEvents: number;
    img: string;
    sportName: string;
    isLightTheme: boolean;
}

export const SportCard = ({ name, totalEvents, img, sportName, isLightTheme }: Props) => {
    return (
        <div className={`flex justify-center items-center shadow-2xl p-2 mt-6 ${isLightTheme ? 'bg-white' : 'bg-zinc-700'}`}>
            <div>
                <div className='image flex items-center flex-col'>
                    <img src={img} alt='img' className="w-1/2 sm:w-full" />
                    <h2 className="text-lg font-semibold self-start my-3 mb-4">{name}</h2>
                </div>
                <div className={`${isLightTheme ? 'bg-gray-100' : 'bg-zinc-800'} py-1 mb-2 rounded-md flex flex-col sm:flex-row justify-around`}>
                    <div>
                        <p className="text-sm font-extralight">Total Events</p>
                        <p> {totalEvents} Events </p>
                    </div>
                    <div>
                        <p className="text-sm font-extralight">Sports</p>
                        <p>{sportName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
