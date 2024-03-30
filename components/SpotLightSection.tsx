import { spotLightData } from "@/data/data";
import { SpotlightCard } from "./SpotLightCard";
import { useEffect, useState } from "react";

export const SpotLightSection = ({ isLightTheme }: { isLightTheme: boolean }) => {
    const [cards, setCards] = useState<any[]>([]);
    useEffect(() => {
        setCards(spotLightData.slice(0, 3));
    }, []);

    const nextSlide = () => {
        const lastCardId = cards[cards.length - 1]?.id;
        const lastSpotLightDataId = spotLightData[spotLightData.length - 1]?.id;
    
        if (lastCardId === lastSpotLightDataId) {
            setCards(prevCards => {
                const updatedCards = [...prevCards.slice(1), spotLightData[0]];
                return updatedCards;
            });
        } else {
            const nextIndex = spotLightData.findIndex(item => item.id === lastCardId) + 1;
            setCards(prevCards => {
                const updatedCards = [...prevCards.slice(1), spotLightData[nextIndex]];
                return updatedCards;
            });
        }
    };
    

    const prevSlide = () => {
        const firstCardId = cards[0]?.id;
        const firstSpotLightDataId = spotLightData[0]?.id;
    
        if (firstCardId === firstSpotLightDataId) {
            setCards(prevCards => {
                const updatedCards = [spotLightData[spotLightData.length - 1], ...prevCards.slice(0, -1)];
                return updatedCards;
            });
        } else {
            const prevIndex = spotLightData.findIndex(item => item.id === firstCardId) - 1;
            setCards(prevCards => {
                const updatedCards = [spotLightData[prevIndex], ...prevCards.slice(0, -1)];
                return updatedCards;
            });
        }
    };

    return (
        <div className={`w-[80%] m-auto p-4 mb-10 flex flex-col items-center ${isLightTheme ? "bg-gray-00" : "bg-gradient-to-br from-[#18282A] to-[#3a2b4c]"}`}>
            <div className="text-center relative m-auto">
                <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
                    <div className="w-10 h-14  border border-[#2C9CF0] flex justify-center items-center">
                        <button onClick={nextSlide}>{`>`}</button>
                    </div>
                </div>

                <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
                    <div className="w-10 h-14 border border-[#2C9CF0] flex justify-center items-center">
                        <button onClick={prevSlide}>{`<`}</button>
                    </div>
                </div>
                <h1 className="text-6xl font-semibold my-3 mt-10">Collection Spotlight</h1>
                <p className="my-8 text-[14px]">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br /> experience. Grab yours today!</p>
                <section className="flex flex-wrap gap-16 mt-4 justify-center items-center w-10/12 m-auto">
                    {cards.map((item) => {
                        return (
                            <SpotlightCard
                                key={item.id}
                                isLightTheme={isLightTheme}
                                {...item}
                            />
                        );
                    })}
                </section>
            </div>
        </div>
    );
};
