import { ReactElement, ReactNode, useState } from "react";
import { Tag } from "../data/classes/tag";
import TagDisplay from "./TagDisplay";
import { JsxElement } from "typescript";
import { returnAvailableTags } from "../data/apiMock";
import useSWRMutation from "swr/mutation";

interface TagSelectorInput {
	tagList: Tag[];
  }
function TagSelector({tagList}:TagSelectorInput){
	const [showAddTag, setShowAddTag] = useState(false);  
	const { trigger: triggerLoadTags, data: returnData } = useSWRMutation(
		"../data/apiMock.ts",
		() => returnAvailableTags(tagList)
	  );
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		triggerLoadTags();
		setShowAddTag(!showAddTag);
	  };
	const remainingTagList = () => {
		if(!returnData) {
			return <li>Empty</li>
	}
	else{
		 return returnData.map((x)=>{return <li>{x.value}</li>});

	}
	};
return(
<div>
	<TagDisplay tagList={tagList}></TagDisplay>
	<button onClick={handleClick}>+</button>
	{showAddTag && <ul>{remainingTagList()}</ul>}
	</div>);
}
export default TagSelector;