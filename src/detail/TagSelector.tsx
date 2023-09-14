import { Tag } from "../data/classes/tag";
import TagDisplay from "./TagDisplay";

interface TagSelectorInput {
	tagList: Tag[];
  }
function TagSelector({tagList}:TagSelectorInput){
return(<div>
	<TagDisplay tagList={tagList}></TagDisplay>
	<button>+</button>
	</div>);
}
export default TagSelector;