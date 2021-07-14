import React, { useState } from 'react'
import Header from './components/Header'
import BreweriesSearch from "./components/BreweriesSearch";
import BookingsContainer from "./components/BookingsContainer";





function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [showBookings, setShowBookings] = useState(false);

  
  return (
    <>
      <Header submitForm={setSearchInput} setShowBookings={setShowBookings}/>
      <main>
      <>
      {!searchInput || (showBookings && <BookingsContainer />)}
      {searchInput && <BreweriesSearch searchInput={searchInput} />}
    </>
      </main>
    </>
  );
}

export default App
