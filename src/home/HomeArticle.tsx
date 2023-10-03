import { SetStateAction } from "react";
import { Mood } from "../data/classes/mood";
import TagDisplay from "../detail/TagDisplay";
import messageImage from "../resources/message.png";
import { useNavigate } from "react-router-dom";
import MoodValueButton from "../common-components/MoodValueButton";

interface HomeArticleInput {
	mood: Mood;
	colorMappings: Map<any, any>;
  }
function HomeArticle({ mood, colorMappings }: HomeArticleInput) {
	const navigate = useNavigate();
		var commentIcon: JSX.Element;
		if (mood.comment.length > 0) {
		  commentIcon = <img src={messageImage}></img>;
		} else {
		  commentIcon = <></>;
		}
		const loadMood = (e: React.MouseEvent<HTMLFormElement>) => {
			e.preventDefault();
			navigate(`/mood/${mood.id}`);
		  };
	return (
		  <article className="home-article" key={mood.id} onClick={loadMood}>
			  <span>{mood.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
          	<MoodValueButton moodValue={mood.value} mood={mood} isSelected={false} setMood={setMoodPlaceholder} displayOnly={true}></MoodValueButton>
			<TagDisplay allowDelete={false} mood={mood} setMood={setMoodPlaceholder}/>
			  {commentIcon}
		  </article>
	);
  }
  const setMoodPlaceholder=function (value: SetStateAction<Mood>): void {
	throw new Error("Function shouldn't be called.");
}
  export default HomeArticle;