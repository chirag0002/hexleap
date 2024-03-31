import { spotLightData } from "@/data/data";
import { SpotlightCard } from "./SpotLightCard";
import { useEffect, useState } from "react";

export const SpotLightSection = ({ isLightTheme }: { isLightTheme: boolean }) => {
    const [cards, setCards] = useState<any[]>([]);

    useEffect(() => {
        setCards(spotLightData.slice(0, 3));
    }, []);

    useEffect(() => {
        const handleResize = () => {
            let numCardsToRender = 1;
            if (window.innerWidth >= 768) {
                numCardsToRender = 2;
            }
            if (window.innerWidth >= 1024) {
                numCardsToRender = 3;
            }

            setCards(spotLightData.slice(0, numCardsToRender));
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
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
        <div className={`w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] m-auto p-4 mb-10 flex flex-col items-center ${isLightTheme ? "bg-gray-00" : "bg-gradient-to-br from-[#18282A] to-[#3a2b4c]"}`}>
            <div className="text-center relative m-auto">
                <div className="absolute top-1/2 right-0">
                    <div className="w-5 sm:w-7 md:w-10 h-14  border border-[#2C9CF0] flex justify-center items-center">
                        <button onClick={nextSlide}>{`>`}</button>
                    </div>
                </div>

                <div className="absolute top-1/2 left-0">
                    <div className="w-5 sm:w-7 md:w-10 h-14 border border-[#2C9CF0] flex justify-center items-center">
                        <button onClick={prevSlide}>{`<`}</button>
                    </div>
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold my-3 mt-10">Collection Spotlight</h1>
                <p className="my-6 sm:my-8 text-xs sm:text-base">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br /> experience. Grab yours today!</p>
                <section className="flex flex-wrap gap-16 mt-4 justify-center items-center w-10/12 m-auto">
                    {cards.map((item) => (
                        <SpotlightCard
                            key={item.id}
                            isLightTheme={isLightTheme}
                            {...item}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};
