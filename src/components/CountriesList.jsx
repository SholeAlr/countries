import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import Navbar from "./Navbar";

function CountriesList() {
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  async function searchCountry() {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${searchedCountry}`
      );
      setCountries(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Navbar />
      <div
        className='bg-cyan-900 px-6 h-[90vh] overflow-scroll grid 
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
      >
        <label className='input input-bordered flex items-center gap-2 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 bg-cyan-950 text-white mt-2 h-[35px] w-64'>
          <input
            type='text'
            className='grow '
            placeholder='Search'
            onChange={(e) => {
              setSearchedCountry(e.target.value);
            }}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='w-4 h-4 opacity-70'
            onClick={searchCountry}
          >
            <path
              fillRule='evenodd'
              d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
              clipRule='evenodd'
            />
          </svg>
        </label>
        <Cards countries={countries} />
      </div>
    </>
  );
}

export default CountriesList;
