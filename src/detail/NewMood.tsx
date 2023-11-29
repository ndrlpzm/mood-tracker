import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mood } from "../data/classes/mood";
import IconButton from "../common-components/IconButton";
import leftArrowIcon from "../resources/icons8-chevron-left-50.png";
import MoodDetailForm from "./MoodDetailForm";
import { addMood } from "../data/apiMock";

export const NewMood = () => {
  const [mood, setMood] = useState<Mood>(new Mood(-1, 0, new Date(), "", []));
  const navigate = useNavigate();
  const apiCallback = (data: Mood) => {
    navigate(`/moods/${data.id}`);
  };
  return (
    <div className="mood-detail">
      <nav>
        <div className="nav-left">
          <IconButton
            displayImg={leftArrowIcon}
            callbackFunction={() => {
              navigate("/");
            }}
            description="Back"
          ></IconButton>
        </div>
      </nav>
      <article>
        <MoodDetailForm
          mood={mood}
          setMood={setMood}
          triggerUrl="/moods"
          triggerFn={addMood}
          triggerCallback={apiCallback}
        ></MoodDetailForm>
      </article>
    </div>
  );
};
export default NewMood;
