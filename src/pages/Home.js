import React, { useCallback, useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../components/ListOfGifs";
import useGif from "../hooks/useGif";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

const Home = () => {
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGif();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <Helmet>
        <title>Home || Giffy</title>
        <meta name="description" content="Inicio"></meta>
      </Helmet>
      <SearchForm onSubmit={handleSubmit} />
      <div className="App-main">
        <div className="App-results" style={{ minHeight: "100vh" }}>
          <h3 className="App-title">Los gifs más populares</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
};

export default Home;
