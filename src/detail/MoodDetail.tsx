import { useNavigate, useParams } from "react-router-dom";
import { retrieveMood } from "../data/apiMock";
import { MoodDetailForm } from "./MoodDetailForm";
import "./MoodDetail.css";
import DeleteButton from "./DeleteButton";
import IconButton from "../common-components/IconButton";
import leftArrowIcon from "../resources/icons8-chevron-left-50.png";
import { useApi } from "../hooks/use-api";
import { useEffect, useState } from "react";
import { Mood } from "../data/classes/mood";
import { updateMood } from "../data/apiMock";

export const MoodDetail = () => {
  const { moodId } = useParams();
  const [mood, setMood] = useState<Mood>({} as Mood);
  const parsedMoodId = parseInt(moodId ?? "");
  const navigate = useNavigate();

  const { data, isLoading, isValidating } = useApi(`/moods/${moodId}`, (url) =>
    retrieveMood(url, parsedMoodId)
  );
  useEffect(() => {
    if (data) setMood(data);
  }, [data]);

  if (isNaN(parsedMoodId)) return <div>error state - nan id</div>;
  //if (!mood) return <div>error state - mood undefined</div>;
  if (isLoading) return <div>Loading</div>;
  if (isValidating) return <div>Loading</div>;
  //if (error) return <div>error from the api</div>;
  return (
    <div className="mood-detail">
      <nav>
        <div className="nav-left">
          <IconButton
            displayImg={leftArrowIcon}
            callbackFunction={() => {
              navigate(-1);
            }}
            description="Back"
          ></IconButton>
        </div>
        <div className="nav-right">
          <DeleteButton id={mood?.id}></DeleteButton>
        </div>
      </nav>
      <article>
        {mood && (
          <MoodDetailForm
            mood={mood}
            setMood={setMood}
            triggerUrl={`/moods/${mood.id}`}
            triggerFn={updateMood}
          ></MoodDetailForm>
        )}
      </article>
    </div>
  );
};
export default MoodDetail;
