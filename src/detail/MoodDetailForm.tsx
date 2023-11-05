import { useState } from "react";
import { Mood } from "../data/classes/mood";
import ValueContainer from "./ValueContainer";
import TagDisplay from "../common-components/TagDisplay";

export type MoodDetailFormInput = {
  mood: Mood | undefined;
};

export function MoodDetailForm({ mood }: MoodDetailFormInput) {
  const [moodValue, setMoodValue] = useState<number | undefined>(mood?.value);
  const handleSubmit = () => {};
  const handleTextAreaChange = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <ValueContainer value={moodValue} setValue={setMoodValue} />
      <TagDisplay tags={mood?.tags}></TagDisplay>
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
