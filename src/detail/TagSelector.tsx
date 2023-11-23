import { useEffect, useState } from "react";
import { Tag } from "../data/classes/tag";
import TagDisplay from "../common-components/TagDisplay";
import { returnAvailableTags } from "../data/apiMock";
import { useApi } from "../hooks/use-api";
import { QueryParams, formatParams } from "../http/utils";
interface TagSelectorInput {
  tagList: Tag[] | undefined;
  setTagList: React.Dispatch<React.SetStateAction<Tag[] | undefined>>;
}
function TagSelector({ tagList, setTagList }: TagSelectorInput) {
  console.log(tagList);
  const [showingAddTag, setShowingAddTag] = useState(false);
  const [remainingTagList, setRemainingTagList] = useState(new Array<Tag>());

  const tagQueryParams: QueryParams =
    tagList?.map((x) => {
      return { key: "id", value: x.id };
    }) ?? [];
  const { data } = useApi(
    showingAddTag ? formatParams("/tags", tagQueryParams) : null,
    returnAvailableTags
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setShowingAddTag(!showingAddTag);
  };
  const handleLiClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const currElement: HTMLLIElement = e.currentTarget;
    if (currElement.dataset.key !== undefined)
      tagList
        ? setTagList([
            ...tagList,
            remainingTagList[parseInt(currElement.dataset.key)],
          ])
        : setTagList([remainingTagList[parseInt(currElement.dataset.key)]]);
    setShowingAddTag(!showingAddTag);
  };
  useEffect(() => {
    if (data !== undefined) setRemainingTagList(data);
  }, [data]);
  return (
    <>
      <div id="tag-heading-container">
        <label>Tags</label>
        <button id="tag-dropdown-button" onClick={handleClick}>
          +
        </button>
      </div>
      {showingAddTag && (
        <ul id="tag-dropdown">
          {remainingTagList.map((x, i) => {
            return (
              <li data-key={i} key={x.id} onClick={handleLiClick}>
                {x.value}
              </li>
            );
          })}
        </ul>
      )}
      <TagDisplay tags={tagList}></TagDisplay>
    </>
  );
}
export default TagSelector;
