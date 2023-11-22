import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { retrieveMood } from "../data/apiMock";
import { MoodDetailForm } from "./MoodDetailForm";
import "./MoodDetail.css";
import DeleteButton from "./DeleteButton";
import IconButton from "../common-components/IconButton";
import leftArrowIcon from "../resources/icons8-chevron-left-50.png";
import { useApi } from "../hooks/use-api";
import { useEffect, useState } from "react";
import { Mood } from "../data/classes/mood";

export const MoodDetail = () => {
  const [mood, setMood] = useState<Mood | undefined>(undefined);
  const { moodId } = useParams();
  const parsedMoodId = parseInt(moodId ?? "");
  const navigate = useNavigate();

  const { data, isLoading } = useApi("/mood", (url) =>
    retrieveMood(url, parsedMoodId)
  );
  useEffect(() => {
    setMood(data);
  }, [data, mood]);
  if (isNaN(parsedMoodId)) return <div>error state - nan id</div>;
  //if (!mood) return <div>error state - mood undefined</div>;
  if (isLoading) return <div>Loading</div>;
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
        <MoodDetailForm mood={mood}></MoodDetailForm>
      </article>
    </div>
  );
};
export default MoodDetail;
