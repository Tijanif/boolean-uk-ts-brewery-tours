import React, { useState } from 'react'
import Header from './components/Header'
import BreweriesSearch from "./components/BreweriesSearch";




function App() {
  const [searchInput, setSearchInput] = useState("");
  const [showBookings, setShowBookings] = useState(false);

  return (
    <>
      <Header submitForm={setSearchInput} setShowBookings={setShowBookings}/>
      <main>
     
        {searchInput && <BreweriesSearch searchInput={searchInput} />}
         
      </main>
    </>
  );
}

export default App
