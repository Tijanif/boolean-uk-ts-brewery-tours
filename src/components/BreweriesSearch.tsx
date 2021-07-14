import { useState } from "react";

import ListContainer from "./ListContainer";
import FilterContainer from "./FilterContainer";
import React from "react";



type searchInputProps = {
  searchInput: string
}

type EventTarget = {
  name: string
  value: string
  checked: string
   type: boolean
}
export default function BreweriesSearch({ searchInput }:searchInputProps ) {
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState({
    selectedCities: [],
    selectedType: "",
  });

  const updateFilters = (e: Event) => {
      let { name, value, checked, type } = e.target;

    if (type === "checkbox")
      value = checked
        ? [...filters.selectedCities, value]
        : filters.selectedCities.filter(c => c !== value);

    setFilters({ ...filters, [name]: value });
  };
  return (
    <main className="main-search">
      <ListContainer
        stateInput={searchInput}
        setCities={setCities}
        filters={filters}
      />
      <FilterContainer
        cities={cities}
        filterSelections={filters}
        updateFilter={updateFilters}
      />
    </main>
  );
}
