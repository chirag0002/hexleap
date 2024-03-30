interface Props {
    description: string;
    img: string;
    isLightTheme: boolean;
}

export const AdCard = ({ img, description, isLightTheme }: Props) => {
    return (
        <div className={`flex flex-col justify-between items-center shadow-2xl p-2 w-[14.5rem] mt-6 ${isLightTheme? 'bg-white' : 'bg-zinc-700'}`}>
            <div className="border border-green-800 h-full">
                <div className='image relative w-54'>
                    <img src={img} alt="advertisement" />
                    <p className="absolute top-0 right-0 px-2 bg-black text-white">Ad</p>
                </div>
                <div className="mt-4 text-center p-3">
                    <p className="font-semibold text-lg">Advertisement title</p>
                    <p className="text-xs font-light text-justify mt-3">{description}</p>
                </div>
            </div>
        </div>
    );
};
