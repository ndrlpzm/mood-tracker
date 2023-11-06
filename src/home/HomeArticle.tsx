import { Mood } from "../data/classes/mood";
import TagDisplay from "../common-components/TagDisplay";
import messageImage from "../resources/message.png";
import { useNavigate } from "react-router-dom";
import { MoodValue } from "../common-components/MoodValue";

interface HomeArticleInput {
  mood: Mood;
  colorMappings: Map<any, any>;
}
function HomeArticle({ mood, colorMappings }: HomeArticleInput) {
  const navigate = useNavigate();
  var commentIcon: JSX.Element;
  if (mood.comment.length > 0) {
    commentIcon = <img alt="Comments" src={messageImage}></img>;
  } else {
    commentIcon = <></>;
  }
  const loadMood = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/mood/${mood.id}`);
  };
  return (
    <article className="home-article" key={mood.id} onClick={loadMood}>
      <span>
        {mood.date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </span>
      <MoodValue value={mood.value} />
      <TagDisplay tags={mood.tags} />
      {commentIcon}
    </article>
  );
}

export default HomeArticle;
