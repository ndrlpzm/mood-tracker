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
		  <article key={mood.id}>
			<div>
			  <span>{mood.date.toLocaleTimeString()}</span>
			  <div className="mood-value-container" style={{ backgroundColor: colorMappings.get(mood.value) }}>
				<img alt={mood.value.toString()} src={smileyImage}></img>
			  </div>
			</div>
			<div>
			  <div>
				<TagDisplay tagList={mood.tags} />
			  </div>
			  {commentIcon}
			</div>
		  </article>
		);
	return (
	  <>{art}</>
	);
  }
  export default HomeArticle;