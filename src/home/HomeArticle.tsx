import { SetStateAction } from "react";
import { Mood } from "../data/classes/mood";
import { Tag } from "../data/classes/tag";
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
			console.log(`homearticle ${mood.id}`)
			navigate(`/mood/${mood.id}`);
		  };
	return (
		  <article className="home-article" key={mood.id} onClick={loadMood}>
			  <span>{mood.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
			  <div className="mood-value" style={{ backgroundColor: colorMappings.get(mood.value) }}>
			  </div>
			<TagDisplay tagList={mood.tags} allowDelete={false} setTagList={function (value: SetStateAction<Tag[]>): void {
				throw new Error("Function not implemented.");
			} }/>
			  {commentIcon}
		  </article>
	);
  }
  export default HomeArticle;