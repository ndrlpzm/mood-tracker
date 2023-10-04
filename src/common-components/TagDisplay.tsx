import { Mood } from "../data/classes/mood";

interface TagDisplayInput {
	allowDelete: boolean;
	mood: Mood;
	setMood:React.Dispatch<React.SetStateAction<Mood>>;
  }
function TagDisplay({mood, setMood, allowDelete}:TagDisplayInput){
	const handleTagClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if(!allowDelete) return;
		e.preventDefault();
		const currElement:HTMLDivElement=e.currentTarget;
		if(currElement.dataset.key!==undefined){
			const newArray = mood.tags.slice(); 
			newArray.splice(parseInt(currElement.dataset.key),1);
			setMood({...mood, tags:newArray});
		}
	};
	return(
	<div className="tag-container">
		{mood.tags.map((tag,i) => <div className="tag" data-key={i} key={tag.id} onClick={handleTagClick}><div style={{backgroundColor:tag.color}}></div>{tag.value}</div>)}
		</div>);
	}
export default TagDisplay;