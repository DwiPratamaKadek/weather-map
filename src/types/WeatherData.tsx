export interface WeatherData {
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