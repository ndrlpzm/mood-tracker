import { Mood } from "../data/classes/mood";
import TagDisplay from "../detail/TagDisplay";
import smileyImage from "../resources/smiling-emoticon-square-face.png";
import messageImage from "../resources/message.png";

interface HomeArticleInput {
	mood: Mood;
	colorMappings: Map<any, any>;
  }
function HomeArticle({ mood, colorMappings }: HomeArticleInput) {
		var commentIcon: JSX.Element;
		if (mood.comment.length > 0) {
		  commentIcon = <img src={messageImage}></img>;
		} else {
		  commentIcon = <></>;
		}
		const art: JSX.Element = (
		  <article className="home-article" key={mood.id}>
			  <span>{mood.date.toLocaleTimeString()}</span>
			  <div className="mood-value" style={{ backgroundColor: colorMappings.get(mood.value) }}>
			  </div>
			<TagDisplay tagList={mood.tags} />
			  {commentIcon}
		  </article>
		);
	return (
	  <>{art}</>
	);
  }
  export default HomeArticle;