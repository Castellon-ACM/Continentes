export interface Country {
    name: string;
    continent: string;
    flag: string;
    capital: string[];
    languages: string[];
    population: number;
    latlng: number[] | null;
}
