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
		  if(showAddTag)triggerLoadTags();
		  setShowAddTag(!showAddTag);
		};
		const handleTagClick = (e: React.MouseEvent<HTMLLIElement>) => {
			e.preventDefault();
		//	const element:HTMLLIElement= e.currentTarget;
		// 	tagList.push({id: element.key,
		// 		 value: element.textContent?element.textContent:"",
		// 		 color:"white"});
		   };
	const remainingTagList = () => {
		if(!returnData) {
			return <li>Empty</li>
	}
	else{
		 return returnData.map((x)=>{return <li key={x.id} onClick={handleTagClick} >{x.value}</li>});

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