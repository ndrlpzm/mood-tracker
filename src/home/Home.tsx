import ClipLoader from "react-spinners/ClipLoader";
import { Mood } from "../data/classes/mood";
import React from "react";
import { useNavigate } from "react-router-dom";

interface HomeInput {
  moodList: Mood[];
  isLoading: boolean;
}
function Home({ moodList, isLoading }: HomeInput) {
  const navigate=useNavigate();
  const formattedData = () => {
    
  console.log("formattedData")
  console.log(moodList)
    var prevDate: Date;
    const formattedElements = moodList.map((mood) => {
      const art: JSX.Element = (
        <article key={mood.id}>
          <div>{mood.value}</div>
          <div>{mood.comment}</div>
        </article>
      );
      if (prevDate !== mood.date) {
        const header: JSX.Element = <div><h3>{mood.date.toLocaleDateString()}</h3></div>;
        return [header, art];
      } else {
        return art;
      }
    });
    return formattedElements;
  };
  return (
    <>
      {isLoading ? (
        <ClipLoader
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>{formattedData()}</>
      )}
      <button onClick={()=>{navigate("/mood")}}>+</button>
    </>
  );
}

export default Home;
