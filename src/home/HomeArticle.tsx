import { SetStateAction } from "react";
import { Mood } from "../data/classes/mood";
import TagDisplay from "../detail/TagDisplay";
import messageImage from "../resources/message.png";
import { useNavigate } from "react-router-dom";

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
			  <div className="mood-value" style={{ backgroundColor: colorMappings.get(mood.value) }}>
			  </div>
			<TagDisplay allowDelete={false} mood={mood} setMood={function (value: SetStateAction<Mood>): void {
				throw new Error("Function not implemented.");
			} }/>
			  {commentIcon}
		  </article>
	);
  }
  export default HomeArticle;