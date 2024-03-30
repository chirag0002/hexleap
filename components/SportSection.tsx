import { useState } from 'react';
import { SportCard } from "./SportCard";
import { AdCard } from "./AdCard";
import { adData, sportData } from "@/data/data";

export const SportSection = ({ isLightTheme }: { isLightTheme: boolean }) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const visibleSportData = showAll ? sportData : sportData.slice(0, 4);

    return (
        <div className='mb-10 w-[80%] m-auto'>
            <h1 className="text-2xl font-bold pt-9 border-b-4 border-blue-500 w-fit mb-6">Sports</h1>
            <div className="flex flex-wrap justify-between m-auto">
                {visibleSportData.map((item) => (
                    <SportCard key={item.id} isLightTheme={isLightTheme} {...item} />
                ))}
                <AdCard description={adData.description} img={adData.img} isLightTheme={isLightTheme} />
            </div>
            <div className="flex justify-center items-center pt-10">
                <button className="bg-[#2C9CF0] px-8 rounded-md py-2 text-white" onClick={toggleShowAll}>
                    {showAll ? "Show Less" : "See More"}
                </button>
            </div>
        </div>
    );
};
