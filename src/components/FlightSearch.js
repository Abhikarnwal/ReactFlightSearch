import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here

  const response = await fetch(
    "https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1"
  );
  const data = await response.json();

  return data;
};

function FlightSearch() {
  let [data, setData] = useState([]);
  let [filter, setFilter] = useState([]);
  let [flights, setFlights] = useState({
    source: "",
    destination: "",
  });

  // on page load fetch the data (useEffect)

  useEffect(() => {

  //  first call fetchData then just resolve the promise using then

     fetchData().then((data) => setData([...data]));
   
    // one way to catch the response and use it in IIFE format so that to fetch the data 

    // (async function(){
    //   const data = await fetchData()
    //   setData([...data])
    // })()
   
  }, []);

 

  const handleFlightData = (event) => {
    let { name, value } = event.target;

    setFlights((prev) => ({ ...prev, [name]: value }));
  };

  //  fetchData().then(data => setData([...data]))
  const handleSearch = () => {
    let searchResults = data.filter((el) => {
      return (
        flights.source === el.source && flights.destination === el.destination
      );
    });
    console.log(searchResults)
    setFilter([...searchResults]);

    // filter the data based on source and destination
  };
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input
            data-testid="source-input"
            placeholder="Source"
            name="source"
            // value={flights.source}
            onChange={handleFlightData}
          />
          <br /> <br />
          <input
            data-testid="destination-input"
            placeholder="Destination"
            name="destination"
            // value={flights.destination}
            onChange={handleFlightData}
          />
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch}>
            Search
          </button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      { filter.length!=0 ? <SearchResults data={filter}/> :  <div data-testid="no-flights" className="">
      no flights found
      </div>}
    </div>
  );
}

export default FlightSearch;
