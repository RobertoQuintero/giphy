import React, { Suspense, useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Route, Link } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "Roberto",
        subscribe: true,
      }}
    >
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <h1>App</h1>
            <GifsContextProvider>
              <Route exact component={Home} path="/" />
              <Route component={SearchResults} path="/search/:keyword" />
              <Route component={Detail} path="/gif/:id" />
              <Route component={() => <h1>404 ERROR: </h1>} path="/404" />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
