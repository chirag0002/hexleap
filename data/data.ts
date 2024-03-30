interface SportCard {
    id: number;
    img: string;
    name: string;
    totalEvents: number;
    sportName: string;
}

interface Ad {
    img: string;
    description: string;
}

interface spotLightCard {
    id: number;
    img: string;
    name: string;
    dateTime: string;
    location: string;
    collectionTitle: string;
}

export const sportData: SportCard[] = [
    {
        id: 1,
        img: "/player-1.png",
        name: "Sacramento River Cats",
        totalEvents: 48,
        sportName: "baseball"
    },
    {
        id: 2,
        img: "/player-2.png",
        name: "Las Vegas Aviators",
        totalEvents: 28,
        sportName: "baseball"
    },
    {
        id: 3,
        img: "/player-3.png",
        name: "New Jersey Devils",
        totalEvents: 15,
        sportName: "ice hockey"
    },
    {
        id: 4,
        img: "/player-4.png",
        name: "Las Vegas Aviators",
        totalEvents: 28,
        sportName: "baseball"
    },
    {
        id: 5,
        img: "/player-1.png",
        name: "Sacramento River Cats",
        totalEvents: 48,
        sportName: "baseball"
    },
    {
        id: 6,
        img: "/player-2.png",
        name: "Las Vegas Aviators",
        totalEvents: 28,
        sportName: "baseball"
    },
    {
        id: 7,
        img: "/player-3.png",
        name: "New Jersey Devils",
        totalEvents: 15,
        sportName: "ice hockey"
    },
    {
        id: 8,
        img: "/player-4.png",
        name: "Las Vegas Aviators",
        totalEvents: 28,
        sportName: "baseball"
    },
    {
        id: 9,
        img: "/player-2.png",
        name: "Las Vegas Aviators",
        totalEvents: 28,
        sportName: "baseball"
    },

];

export const adData: Ad = {
    img: "/ad1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const spotLightData: spotLightCard[] = [
    {
        id: 1,
        img: "/collection-1.png",
        name: "Las Vegas Aviators",
        dateTime: "Oct 15 | Sun | 4:30 PM",
        location: "Las Vegas Ballpark, Las Vegas, Nevada",
        collectionTitle: "Take Flight Collection"
    },

    {
        id: 2,
        img: "/collection-2.png",
        name: "Sacramento River Cats",
        dateTime: "Oct 15 | Sun | 4:30 PM",
        location: "Sutter Health Park, Sacramento, California",
        collectionTitle: "Orange Collection"
    },
    {
        id: 3,
        img: "/collection-1.png",
        name: "Las Vegas Aviators",
        dateTime: "Oct 16 | Mon | 4:30 PM",
        location: "Las Vegas Ballpark, Las Vegas, Nevada",
        collectionTitle: "Take Flight Collection"
    }
];
