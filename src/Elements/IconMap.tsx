// iconMap.ts
import {
    faSun,
    faMoon,
    faCloud,
    faCloudSun,
    faCloudMoon,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faBolt,
    faSmog,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; 

export const weatherIconMap: Record<string, IconDefinition> = {
    "01d": faSun,             // cerah di siang hari
    "01n": faMoon,            // cerah di malam hari
    "02d": faCloudSun,        // sedikit awan siang
    "02n": faCloudMoon,       // sedikit awan malam
    "03d": faCloud,           // berawan
    "03n": faCloud,
    "04d": faCloud,
    "04n": faCloud,
    "09d": faCloudShowersHeavy, // hujan deras
    "09n": faCloudShowersHeavy,
    "10d": faCloudRain,       // hujan ringan siang
    "10n": faCloudRain,
    "11d": faBolt,            // petir
    "11n": faBolt,
    "13d": faSnowflake,       // salju
    "13n": faSnowflake,
    "50d": faSmog,            // kabut
    "50n": faSmog,
};
