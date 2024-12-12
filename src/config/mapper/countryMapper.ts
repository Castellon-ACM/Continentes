import { Country } from "../entities/Country";
import { CountriesResponse } from "../responses/DatosCountries";

export const countriesMapper = (item: CountriesResponse): Country => {
    const languages = item.languages ? Object.values(item.languages) : ['No language available'];
    return {
        name: item.name.common,
        continent: item.region,
        capital: item.capital ? item.capital : [],
        languages: languages,
        population: item.population,
        flag: item.flags.svg,
        latlng: item.latlng || [],
    };
};