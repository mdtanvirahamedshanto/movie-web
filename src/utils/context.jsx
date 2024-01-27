/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
const API_URL = `https://www.omdbapi.com/?&apikey=d219d256&s=love`;
// Create Context Provider
const AppContext = createContext();

// Create Provider...
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ type: "false", msg: "" });

  const getMovie = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response) {
        setIsLoading(false);
        setMovie(data.Search);
        console.log(data);
      } else {
        setIsError({
          type: true,
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie(API_URL);
  }, []);
  return (
    <AppContext.Provider value={{ isLoading, isError, movie }}>
      {children}
    </AppContext.Provider>
  );
};

// Create Global Context Provider...

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
