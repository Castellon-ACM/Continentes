import { useEffect, useState } from "react";
import { CountriesAdapter } from "../adapter/CountriesAdapter";
import { Country } from "../config/entities/Country";

export const useCountries = (continent: string) => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [loading, setLoading] = useState(false);

  const loadCountries = async () => {
    setLoading(true); 
    const response = await CountriesAdapter.getCountries(continent); 

    if (response) {
      console.log(response);
      setCountries(response); 
    }
    setLoading(false); 
  };

  useEffect(() => {
    loadCountries(); 
  }, [continent]);

  return {
    countries,
    loading,
  };
};
