import { Mood } from "../data/classes/mood";
import TagDisplay from "../detail/TagDisplay";
import smileyImage from "../resources/smiling-emoticon-square-face.png";
import messageImage from "../resources/message.png";
import Home from "./Home";

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
  function retrieveIconColors() {
	const colorIcon = new Map();
	colorIcon.set(1, "#747CC6");
	colorIcon.set(2, "#A774C6");
	colorIcon.set(3, "#C674B4");
	colorIcon.set(4, "#D76A91");
	colorIcon.set(5, "#D35D5D");
	return colorIcon;
  }
  export default HomeArticle;