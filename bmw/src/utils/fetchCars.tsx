import { CarType } from "../types";
type Parameters = {
  limit: number;
  make?: string;
  model?: string;
  fuel_type?: string;
  year?: string;
};

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "5ffbf60e59mshe2da6f61db1bbf6p142ba1jsne235f98412e0",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

const fetchCars = async ({
  limit,
  make = "bmw",
  model = "m4",
  fuel_type = "",
  year = "",
}: Parameters): Promise<CarType[]> => {
  try {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&limit=${limit}&model=${model}&fuel_type=${fuel_type}&year=${year}`;

    const res = await fetch(url, options);

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("hata");
  }
};

export default fetchCars;
