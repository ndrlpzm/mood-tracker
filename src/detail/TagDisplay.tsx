import { Tag } from "../data/classes/tag";

interface TagDisplayInput {
	allowDelete: boolean;
	tagList: Tag[];
	setTagList:React.Dispatch<React.SetStateAction<Tag[]>>;
  }
function TagDisplay({tagList, setTagList, allowDelete}:TagDisplayInput){
	const handleTagClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if(!allowDelete) return;
		e.preventDefault();
		const currElement:HTMLDivElement=e.currentTarget;
		if(currElement.dataset.key!==undefined){
			const newArray = tagList.slice(); 
			newArray.splice(parseInt(currElement.dataset.key),1);
			setTagList(newArray);
		}
	};
	return(<div className="tag-container">
		{tagList.map((tag,i) => <div className="tag" data-key={i} key={tag.id} onClick={handleTagClick}><div style={{backgroundColor:tag.color}}></div>{tag.value}</div>)}
		</div>);
	}
export default TagDisplay;