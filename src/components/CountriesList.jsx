import { useState, useEffect } from "react";

function CountriesList() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);

  return (
    <>
      <label className='input input-bordered flex items-center gap-2 bg-slate-500 mt-2 h-[35px] w-64'>
        <input type='text' className='grow' placeholder='Search' />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='w-4 h-4 opacity-70'
        >
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </label>
      {countries.map((eachCountry, index) => {
        return (
          <div className='card card-compact w-[280px] h-[280px] bg-base-100 shadow-xl'>
            <figure>
              <img
                src={eachCountry.flags.png}
                alt='flag'
                className='h-[150px] w-full'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{eachCountry.name.common}</h2>
              <p>Population: {eachCountry.population}</p>
              <p>Region: {eachCountry.region}</p>
              <p>Capital: {eachCountry.capital} </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CountriesList;
