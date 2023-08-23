import { Tag } from "../data/classes/tag";

interface TagDisplayInput {
	tagList: Tag[];
  }
function TagDisplay({tagList}:TagDisplayInput){
	return(<div>
		{tagList.map(tag => <div><span style={{color:tag.color}}>·</span>{tag.value}</div>)}
		</div>);
	}
export default TagDisplay;