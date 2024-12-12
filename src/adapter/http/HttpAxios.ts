import axios from "axios";
import { CountriesResponse, CountryData } from "../../config/responses/DatosCountries";
import { HttpError } from "./HttpError";
import { Http } from "./Http";

export class HttpAxios extends Http{
    async getCountries(continent: string): Promise<CountriesResponse[]  | HttpError> {
        try {
            const {data} = await axios.get<CountriesResponse[] >(`${this.url_base}/v3.1/region/${continent}`);
            return data;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}