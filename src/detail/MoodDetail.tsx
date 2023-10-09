/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./MoodDetail.css";
import { useNavigate, useParams } from "react-router-dom";

import ValueContainer from "./ValueContainer";
import useSWRMutation from "swr/mutation";

import { Mood } from "../data/classes/mood";
import { addMood, retrieveMood, updateMood, deleteMood } from "../data/apiMock";
import TagSelector from "./TagSelector";
import IconButton from "../common-components/IconButton";
import leftArrowIcon from "../resources/icons8-chevron-left-50.png";
import xIcon from "../resources/icons8-x-50.png";

interface MoodInput {
  id: number;
}
//Converts idParam so it can be passed as a prop to the MoodDetail hook
export const MoodDetailWrapper = () => {
  const { idParam } = useParams();
  var moodId: number = -1;
  if (idParam !== undefined && !isNaN(Number(idParam))) {
    moodId = parseInt(idParam);
  }
  return <MoodDetail id={moodId} />;
};
export function MoodDetail({ id }: MoodInput) {
  const navigate = useNavigate();
  const [mood, setMood] = useState(new Mood(-1, 0, new Date(), "", []));
  const [allowSaving, setAllowSaving] = useState(true);

  const { trigger: triggerRetrieveMood, data: returnExistingMood } =
    useSWRMutation("../data/apiMock.ts", (url) => retrieveMood(url, id));
  if (id > -1) {
    //id -1 represents a new mood, any other id should be retrieved to be edited
    triggerRetrieveMood();
  }
  useEffect(() => {
    if (!returnExistingMood) return;
    setMood({
      ...returnExistingMood,
    });
  }, [returnExistingMood]);

  const { trigger: triggerAddMood, data: returnAddData } = useSWRMutation(
    "../data/apiMock.ts",
    (url) => addMood(url, mood)
  );
  useEffect(() => {
    if (!returnAddData) return;
    goBack();
  }, [returnAddData]);
  const { trigger: triggerUpdateMood, data: returnUpdateData } = useSWRMutation(
    "../data/apiMock.ts",
    (url) => updateMood(url, mood)
  );
  useEffect(() => {
    if (!returnUpdateData) return;
    //TODO: Error handling
    goBack();
  }, [returnUpdateData]);
  const { trigger: triggerDeleteMood, data: returnDeleteData } = useSWRMutation(
    "../data/apiMock.ts",
    (url) => deleteMood(url, mood.id)
  );
  useEffect(() => {
    if (!returnDeleteData) return;
    //TODO: Error handling
    goBack();
  }, [returnDeleteData]);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAllowSaving(false);
    console.log(id);
    id > -1 ? triggerUpdateMood() : triggerAddMood();
  };
  const goBack = () => {
    setAllowSaving(true);
    navigate(`/`);
  };
  const handleDelete = () => {
    triggerDeleteMood();
  };
  return (
    <div className="mood-detail">
      <nav>
        <div className="nav-left">
      <IconButton
        displayImg={leftArrowIcon}
        callbackFunction={goBack}
        description="Back"
      ></IconButton>
      </div>
        <div className="nav-right">
      <IconButton
        displayImg={xIcon}
        callbackFunction={handleDelete}
        description="Delete"
      ></IconButton>
      </div>
      </nav>
      <article>
        <form onSubmit={handleSubmit}>
          <ValueContainer mood={mood} setMood={setMood} />
          <TagSelector mood={mood} setMood={setMood}></TagSelector>
          <label htmlFor="comment-input">Comment</label>
          <textarea
            id="comment-input"
            onChange={(e) => {
              setMood({
                ...mood,
                comment: e.currentTarget.value,
              });
            }}
            value={mood.comment}
          />
          <div className="filled-button-container">
            <input
              className="filled-button"
              type="submit"
              value="Save"
              disabled={!mood.value || !allowSaving}
            />
          </div>
        </form>
      </article>
    </div>
  );
}
export default MoodDetail;
