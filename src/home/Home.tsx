import ClipLoader from "react-spinners/ClipLoader";
import { Mood } from "../data/classes/mood";
import React from "react";
import { useNavigate } from "react-router-dom";
import TagDisplay from "../detail/TagDisplay";

interface HomeInput {
  moodList: Mood[];
  isLoading: boolean;
}
function Home({ moodList, isLoading }: HomeInput) {
  const navigate=useNavigate();
  const formattedData = () => {
    
  console.log("formattedData")
  console.log(moodList)
    var prevDate: string;
    const formattedElements = moodList.map((mood) => {
      var commentIcon: JSX.Element;
      if(mood.comment.length>0){
        commentIcon= <div>...</div>;
      }
      else{
        commentIcon=<></>;
      }
      const art: JSX.Element = (
        <article key={mood.id}>
          <div>{mood.value}</div>
          <div><TagDisplay tagList={mood.tags}/></div>
          {commentIcon}
        </article>
      );
      if (prevDate !== mood.date.toLocaleDateString()) {
        prevDate=mood.date.toLocaleDateString();
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
