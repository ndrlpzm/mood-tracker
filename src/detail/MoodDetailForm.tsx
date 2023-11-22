import { useEffect, useState } from "react";
import { Mood } from "../data/classes/mood";
import ValueContainer from "./ValueContainer";
import TagDisplay from "../common-components/TagDisplay";
import TagSelector from "./TagSelector";
import { Tag } from "../data/classes/tag";

export type MoodDetailFormInput = {
  mood: Mood | undefined;
};

export function MoodDetailForm({ mood }: MoodDetailFormInput) {
  console.log(mood);
  const [moodValue, setMoodValue] = useState<number | undefined>(mood?.value);
  const [tagList, setTagList] = useState<Tag[] | undefined>(mood?.tags);
  const handleSubmit = () => {};
  const handleTextAreaChange = () => {};
  useEffect(() => {
    setTagList(mood?.tags);
    setMoodValue(mood?.value);
  }, [mood]);
  return (
    <form onSubmit={handleSubmit}>
      <ValueContainer value={moodValue} setValue={setMoodValue} />
      <TagSelector tagList={tagList} setTagList={setTagList}></TagSelector>
      <label htmlFor="comment-input">Comment</label>
      <textarea
        id="comment-input"
        onChange={handleTextAreaChange}
        value={mood?.comment}
      />
      <div className="filled-button-container">
        <input
          className="filled-button"
          type="submit"
          value="Save"
          disabled={false}
        />
      </div>
    </form>
  );
}
export default MoodDetailForm;
