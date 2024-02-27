import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function CountryDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => {
        console.log(response.data[0]);
        setDetails(response.data[0]);
      })
      .catch((error) => {
        console.log("Error on fetching country deatils: ", error);
      });
  }, [id]);

  return (
    <div className='bg-cyan-900 h-[100vh] flex flex-col'>
      <Navbar />
      <div className='relative p-2'>
        {details.flag ? (
          <img
            src={details?.flags?.png}
            className='w-[300px] h-[200px] absolute right-0 top-0'
          />
        ) : (
          <div className='skeleton w-32 h-32'></div>
        )}

        <Link to={"/"}>
          <button className='btn bg-cyan-950 text-white'>back</button>
        </Link>
      </div>
    </div>
  );
}

export default CountryDetails;
