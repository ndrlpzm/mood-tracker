import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Tag } from "../data/classes/tag";
import TagDisplay from "./TagDisplay";
import { JsxElement } from "typescript";
import { returnAvailableTags } from "../data/apiMock";
import useSWRMutation from "swr/mutation";

interface TagSelectorInput {
	tagList: Tag[];
	setTagList:React.Dispatch<React.SetStateAction<Tag[]>>;
  }
function TagSelector({tagList, setTagList}:TagSelectorInput){
	const [showingAddTag, setShowingAddTag] = useState(false);  
	const [remainingTagList, setRemainingTagList] = useState(new Array<Tag>()); 
	const { trigger: triggerLoadTags, data: returnData } = useSWRMutation(
		"../data/apiMock.ts",
		() => returnAvailableTags(tagList.map((x)=>{return x.id}))
	  );
	  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		  e.preventDefault();
		  //loads available tags if they are currently hidden
		  if(!showingAddTag)triggerLoadTags();
		  setShowingAddTag(!showingAddTag);
		};
		const handleLiClick = (e: React.MouseEvent<HTMLLIElement>) => {
			e.preventDefault();
			const currElement:HTMLLIElement=e.currentTarget;
			if(currElement.dataset.key!==undefined) setTagList([...tagList, remainingTagList[parseInt(currElement.dataset.key)]]);
			setShowingAddTag(!showingAddTag);
		};
	useEffect(() => {
		if(returnData!==undefined) setRemainingTagList(returnData);
	  }, [returnData]);
return(
<div>
	<TagDisplay tagList={tagList} setTagList={setTagList} allowDelete={true}></TagDisplay>
	<button onClick={handleClick}>+</button>
	{showingAddTag && <ul>{remainingTagList.map((x,i)=>{return <li data-key={i} key={x.id} onClick={handleLiClick} >{x.value}</li>})}</ul>}
	</div>);
}
export default TagSelector;