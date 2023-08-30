import { Tag } from "../data/classes/tag";

interface TagDisplayInput {
	tagList: Tag[];
  }
function TagDisplay({tagList}:TagDisplayInput){
	return(<div className="tag-container">
		{tagList.map((tag,i) => <div className="tag" key={i}><div style={{backgroundColor:tag.color}}></div>{tag.value}</div>)}
		</div>);
	}
export default TagDisplay;