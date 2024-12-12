    import { CountriesResponse } from "../../config/responses/DatosCountries";
    import { HttpError } from "./HttpError";

    interface Config {
        url_base : string;
    }

    export interface InterfaceCountry {
        getCountries(countrie:string) : Promise<CountriesResponse[] | HttpError>;
    }

    export abstract class Http implements InterfaceCountry {
        protected url_base: string;

        constructor({url_base} : Config) {
            this.url_base = url_base;
        }

        abstract getCountries(countrie:string) : Promise<CountriesResponse[] | HttpError> ;
    }