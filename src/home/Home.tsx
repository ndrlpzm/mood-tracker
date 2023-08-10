import ClipLoader from "react-spinners/ClipLoader";
import { Mood } from "../detail/mood";
import React from "react";

interface HomeInput {
  moodList: Mood[];
  isLoading: boolean;
}
function Home({ moodList, isLoading }: HomeInput) {
  const formattedData = () => {
    var prevDate: Date;
    const formattedElements = moodList.map((mood) => {
      const art: JSX.Element = (
        <article key={mood.value}>
          <div>{mood.value}</div>
          <div>{mood.comment}</div>
        </article>
      );
      if (prevDate !== mood.date) {
        const header: JSX.Element = <h3>{mood.date.toLocaleDateString()}</h3>;
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
    </>
  );
}

export default Home;
