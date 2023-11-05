import { useParams } from "react-router-dom";
import useSWR from "swr";
import { retrieveMood } from "../data/apiMock";
import { MoodDetailForm } from "./MoodDetailForm";
import "./MoodDetail.css";
import DeleteButton from "./DeleteButton";

export const MoodDetail = () => {
  const { moodId } = useParams();
  const parsedMoodId = parseInt(moodId ?? "");

  const { data: mood, isLoading } = useSWR("/mood", (url) =>
    retrieveMood(url, parsedMoodId)
  );

  if (isNaN(parsedMoodId)) return <div>error state - nan id</div>;
  if (!mood) return <div>error state - mood undefined</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <div className="mood-detail">
      <nav>
        <div className="nav-left">
          {/* <IconButton
	  displayImg={leftArrowIcon}
	  callbackFunction={goBack}
	  description="Back"
	></IconButton> */}
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
