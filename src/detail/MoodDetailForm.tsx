import { ChangeEvent, useEffect } from "react";
import { Mood } from "../data/classes/mood";
import ValueContainer from "./ValueContainer";
import TagSelector from "./TagSelector";
import { Tag } from "../data/classes/tag";
import { useApiMutation } from "../hooks/use-api";

export type MoodDetailFormInput = {
  mood: Mood;
  setMood: React.Dispatch<React.SetStateAction<Mood>>;
  triggerUrl: string;
  triggerFn: Function;
  triggerCallback: Function | undefined;
};

export function MoodDetailForm({
  mood,
  setMood,
  triggerUrl,
  triggerFn,
  triggerCallback,
}: MoodDetailFormInput) {
  console.log(mood);
  const { trigger, data, error } = useApiMutation(triggerUrl, (url) =>
    triggerFn(url, mood)
  );

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    console.log(mood);
    trigger({ ...mood });
  };
  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (mood)
      setMood({
        ...mood,
        comment: e.currentTarget.value,
      });
  };
  const tagCallback = (tagArr: Tag[]) => {
    if (mood)
      setMood({
        ...mood,
        tags: tagArr,
      });
  };
  const valueCallback = (selValue: number) => {
    if (mood)
      setMood({
        ...mood,
        value: selValue,
      });
  };
  useEffect(() => {
    if (triggerCallback && data && !error) triggerCallback(data);
  }, [data, triggerCallback, error]);
  return (
    <form onSubmit={handleSubmit}>
      <ValueContainer value={mood.value} callbackFn={valueCallback} />
      <TagSelector tagList={mood.tags} callbackFn={tagCallback}></TagSelector>
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
