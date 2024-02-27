import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CountriesList />} />
        <Route path='/country/:id' element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
