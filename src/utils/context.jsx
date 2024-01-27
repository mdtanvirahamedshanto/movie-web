/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// const api = process.env.API_KEY;
import React, { createContext, useContext, useState } from "react";
import useFetch from "./useFetch";
const API_URL = `https://www.omdbapi.com/?&apikey=d219d256`;
// Create Context Provider
const AppContext = createContext();

// Create Provider...
// const AppProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movie, setMovie] = useState([]);
//   const [isError, setIsError] = useState({
//     show: false,
//     msg: "Movie Not Found",
//   });
//   const [query, setQuery] = useState("movie");

//   const getMovie = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       if (data.Response === "True") {
//         setIsLoading(false);
//         setMovie(data.Search);
//         setIsError({
//           show: false,
//         });
//         // console.log(data);
//       } else {
//         setIsError({
//           show: true,
//           msg: data.Error,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     let timeOut = setTimeout(() => {
//       getMovie(`${API_URL}&s=${query}`);
//       // console.log("call");
//     }, 1000);

//     return () => clearTimeout(timeOut);
//   }, [query]);
//   return (
//     <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("marvel");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

// Create Global Context Provider...

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
