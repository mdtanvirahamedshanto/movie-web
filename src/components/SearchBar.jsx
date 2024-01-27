/* eslint-disable no-unused-vars */
import "../App.css";
import { useGlobalContext } from "../utils/context";
/* eslint-disable no-undef */
const SearchBar = () => {
  const { query, setQuery, isError } = useGlobalContext();
  // console.log(isError.show);
  // console.log(isError.msg);
  return (
    <>
      <section className="search-section text-3xl">
        <h2 className="p-2">Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              className="p-1"
              type="text"
              placeholder="search movie"
              // value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error text-3xl p-1 z-30">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
