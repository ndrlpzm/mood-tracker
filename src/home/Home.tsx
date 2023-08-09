
import ClipLoader from "react-spinners/ClipLoader";
import { Mood } from "../detail/mood";

interface HomeInput {
  moodList: Mood[];
  isLoading: boolean;
}
function Home({ moodList, isLoading}: HomeInput) {
  
  return (
    <>
      {isLoading ? (
        <ClipLoader
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>{moodList.length}</>
      )}
    </>
  );
}

export default Home;
