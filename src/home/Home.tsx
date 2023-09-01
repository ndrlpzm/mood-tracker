import ClipLoader from "react-spinners/ClipLoader";
import { Mood } from "../data/classes/mood";
import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import TagDisplay from "../detail/TagDisplay";
import smileyImage from "../resources/smiling-emoticon-square-face.png";
import messageImage from "../resources/message.png";

interface HomeInput {
  moodList: Mood[];
  isLoading: boolean;
}
function Home({ moodList, isLoading }: HomeInput) {
  const navigate = useNavigate();
  const formattedData = () => {
    var colorMappings = retrieveIconColors();
    var prevDate: string;
    const formattedElements = moodList.map((mood) => {
      //displays an icon if there is a comment
      var commentIcon: JSX.Element;
      if (mood.comment.length > 0) {
        commentIcon = <img src={messageImage}></img>;
      } else {
        commentIcon = <></>;
      }
      const art: JSX.Element = (
        <article key={mood.id}>
          <div className="mood-value-container" style={{ backgroundColor: colorMappings.get(mood.value) }}>
            <img alt={mood.value.toString()} src={smileyImage}></img>
          </div>
          <div>
            <div>
              <TagDisplay tagList={mood.tags} />
            </div>
            {commentIcon}
          </div>
        </article>
      );
      if (prevDate !== mood.date.toLocaleDateString()) {
        prevDate = mood.date.toLocaleDateString();
        const header: JSX.Element = (
          <div className="date-container">
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
          navigate("/mood");
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
