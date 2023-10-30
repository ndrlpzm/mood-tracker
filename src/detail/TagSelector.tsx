import { useEffect, useState } from "react";
import { Tag } from "../data/classes/tag";
import TagDisplay from "../common-components/TagDisplay";
import { returnAvailableTags } from "../data/apiMock";
import useSWRMutation from "swr/mutation";
import { Mood } from "../data/classes/mood";

interface TagSelectorInput {
	mood: Mood;
	setMood:React.Dispatch<React.SetStateAction<Mood>>;
  }
function TagSelector({mood, setMood}:TagSelectorInput){
	const [showingAddTag, setShowingAddTag] = useState(false);  
	const [remainingTagList, setRemainingTagList] = useState(new Array<Tag>()); 
	const { trigger: triggerLoadTags, data: returnData } = useSWRMutation(
		"/tags",
		() => returnAvailableTags(mood.tags.map((x)=>{return x.id}))
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
			if(currElement.dataset.key!==undefined) setMood({...mood, tags:[...mood.tags, remainingTagList[parseInt(currElement.dataset.key)]]});
			setShowingAddTag(!showingAddTag);
		};
	useEffect(() => {
		if(returnData!==undefined) setRemainingTagList(returnData);
	  }, [returnData]);
return(
<>
	<div id="tag-heading-container"><label>Tags</label>
	<button id="tag-dropdown-button" onClick={handleClick}>+</button></div>
	{showingAddTag && <ul id="tag-dropdown">{remainingTagList.map((x,i)=>{return <li data-key={i} key={x.id} onClick={handleLiClick} >{x.value}</li>})}</ul>}
	<TagDisplay mood={mood} setMood={setMood} allowDelete={true}></TagDisplay>
	</>);
}
export default TagSelector;