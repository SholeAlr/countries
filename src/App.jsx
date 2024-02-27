import { useState } from "react";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";

function App() {
  return (
    <div>
      <Navbar />
      <div className='bg-cyan-900 px-6 h-[90vh] overflow-scroll grid grid-cols-1 gap-4'>
        <CountriesList />
      </div>
    </div>
  );
}

export default App;
