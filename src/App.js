import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FilterSortGrid from "./Components/FilterSortGrid/FilterSortGrid";
import Cards from "./Components/Cards/Cards";
import Banner from "./Components/Banner/Banner";
import { AppContextProvider } from "./GlobalContext";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <AppContextProvider>
      <div className="container-fluid app-container">
        <Header />
        <Banner />
        <FilterSortGrid isLoading={isLoading} setIsLoading={setIsLoading} />
        <Cards isLoading={isLoading} setIsLoading={setIsLoading} />
        <Footer />
      </div>
    </AppContextProvider>
  );
}

export default App;
