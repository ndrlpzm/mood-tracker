import ClipLoader from "react-spinners/ClipLoader";
import { Mood } from "../data/classes/mood";
import { useContext, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import HomeArticle from "./HomeArticle";
import useSWR from "swr";
import { returnLatestMoods } from "../data/apiMock";
import { MoodsContext, MoodsDispatchContext } from "../data/moodReducer";

function Home() {
  const navigate = useNavigate();
  const moodList=useContext(MoodsContext);
  const dispatch=useContext(MoodsDispatchContext);
  const { data, isLoading } = useSWR("/api/v1/moods", returnLatestMoods);
  useEffect(() => {
    if(!data) return;
      console.log(data===moodList);
      dispatch({
        type: "replace",
        mood: new Mood(-1,0,new Date(),"",[]),
        moodIndex: -1,
        newList: data ?? [],
      });
  }, [data]);
  const formattedData = () => {
    var colorMappings = retrieveIconColors();
    var prevDate: string;
    const formattedElements = moodList.map((mood) => {
      const art: JSX.Element = (
        <HomeArticle key={mood.id} mood={mood} colorMappings={colorMappings}></HomeArticle>
      );
      if (prevDate !== mood.date.toLocaleDateString()) {
        prevDate = mood.date.toLocaleDateString();
        const header: JSX.Element = (
          <div key={mood.date.toISOString()} className="date-container">
            <h3>{mood.date.toLocaleDateString()}</h3>
          </div>
        );
        return [header, art];
      } else {
        return art;
      }
    });
    return formattedElements;
  };
  return (
    <div className="home">
      {isLoading ? (
        <ClipLoader
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>{formattedData()}</>
      )}
      <button
        className="new-mood-button fab-large"
        onClick={() => {
          navigate("/mood/new");
        }}
      >
        +
      </button>
    </div>
  );
}
function retrieveIconColors() {
  const colorIcon = new Map();
  colorIcon.set(1, "#747CC6");
  colorIcon.set(2, "#A774C6");
  colorIcon.set(3, "#C674B4");
  colorIcon.set(4, "#D76A91");
  colorIcon.set(5, "#D35D5D");
  return colorIcon;
}

export default Home;
