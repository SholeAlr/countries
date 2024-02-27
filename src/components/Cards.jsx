import { Link } from "react-router-dom";

function Cards({ countries }) {
  return (
    <>
      {countries.map((eachCountry) => {
        return (
          <Link
            key={eachCountry.ccn3}
            to={`/country/${eachCountry.ccn3}`}
            className='card card-compact w-[220px] h-[240px] bg-base-100 shadow-xl mx-auto'
          >
            <figure>
              <img
                src={eachCountry.flags.png}
                alt='flag'
                className='h-[150px] w-full'
              />
            </figure>
            <div className=' h-[120px] leading-3 py-1 px-2 border-t-2 justify-around'>
              <h2 className='card-title'>{eachCountry.name.common}</h2>
              <p className='text-xs mt-0'>
                Population: {eachCountry.population}
              </p>
              <p className='text-xs mt-0'>Region: {eachCountry.region}</p>
              <p className='text-xs mt-0'>Capital: {eachCountry.capital} </p>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default Cards;
