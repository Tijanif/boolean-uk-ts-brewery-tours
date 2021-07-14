import React, { useState } from 'react'
import Filter from './components/Filter';
import Header from "./components/Header";



function App() {
 

  return (
    <>
      <Header />
      <main>
        {/* Ṛest of components will go here
         */
         <Filter/>
         }
      </main>
    </>
  );
}

export default App
