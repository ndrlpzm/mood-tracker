import { useEffect, useMemo, useState } from "react";
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
  const [showingAddTag, setShowingAddTag] = useState(false);
  const [remainingTagList, setRemainingTagList] = useState(new Array<Tag>());

  const tagQueryParams: QueryParams =
    tagList?.map((x) => {
      return { key: "id", value: x.id };
    }) ?? [];
  const fullPath = formatParams("/tags", tagQueryParams);
  const { data } = useApi(showingAddTag ? fullPath : null, returnAvailableTags);

  const handleDropdownClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setShowingAddTag(!showingAddTag);
  };
  const handleLiClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const currElement: HTMLLIElement = e.currentTarget;
    addClickedTag(currElement.dataset.key);
    setShowingAddTag(!showingAddTag);
  };
  const addClickedTag = (clickedTag: string | undefined) => {
    if (clickedTag !== undefined)
      tagList
        ? setTagList([...tagList, remainingTagList[parseInt(clickedTag)]])
        : setTagList([remainingTagList[parseInt(clickedTag)]]);
  };
  useEffect(() => {
    if (data) setRemainingTagList(data);
  }, [data]);
  return (
    <>
      <div id="tag-heading-container">
        <label>Tags</label>
        <button id="tag-dropdown-button" onClick={handleDropdownClick}>
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
