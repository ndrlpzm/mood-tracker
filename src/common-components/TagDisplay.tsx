import { Tag } from "../data/classes/tag";
import TagLabel from "./TagLabel";

interface TagDisplayInput {
	tags: Tag[]|undefined;
  }
function TagDisplay({tags}:TagDisplayInput){
	if (!tags) return (<div>tag disp loading~</div>);
	return(
		<div className="tag-container">
			{tags?.map((tag,i) => <TagLabel key={i} tag={tag}></TagLabel>)}
		</div>);
	}
export default TagDisplay;