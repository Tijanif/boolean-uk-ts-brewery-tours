import React, { Component } from "react";

const Filter = () => {
 return (
  <aside className="filters-section">
  <h2>Filter By:</h2>
  <form id="filter-by-type-form" autocompete="off">
    <label htmlFor="filter-by-type"><h3>Type of Brewery</h3></label>
    <select name="filter-by-type" id="filter-by-type">
      <option value="">Select a type...</option>
      <option value="micro">Micro</option>
      <option value="regional">Regional</option>
      <option value="brewpub">Brewpub</option>
    </select>
  </form>
  <div className="filter-by-city-heading">
    <h3>Cities</h3>
    <button className="clear-all-btn">clear all</button>
  </div>
  <form id="filter-by-city-form">
    <input type="checkbox" name="chardon" value="chardon" /><label htmlFor="chardon"
      >Chardon</label
    ><input type="checkbox" name="cincinnati" value="cincinnati" /><label
      htmlFor="cincinnati"
      >Cincinnati</label
    >
    // More checkboxes
  </form>
</aside>
 )
}

export default Filter;