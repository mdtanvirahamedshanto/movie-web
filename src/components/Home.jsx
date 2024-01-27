import SearchBar from "../components/SearchBar";
import { useGlobalContext } from "../utils/context";
import Loading from "./Loading";
import Movies from "./Movies";
const Home = () => {
  const { isLoading } = useGlobalContext();
  return (
    <div>
      <SearchBar />
      {isLoading && <Loading />}
      <Movies />
    </div>
  );
};

export default Home;
