import React from "react";
import MoodValueButton from "../common-components/MoodValueButton";
interface ValueContainerInput {
  value: number | undefined;
  callbackFn: Function;
}
function ValueContainer({ value, callbackFn }: ValueContainerInput) {
  const ratings: number[] = [1, 2, 3, 4, 5];

  return (
    <div id="value-container">
      {ratings.map(function (i) {
        return (
          <MoodValueButton
            key={i}
            buttonValue={i}
            callbackFn={callbackFn}
            isSelected={i === value}
          ></MoodValueButton>
        );
      })}
    </div>
  );
}
export default ValueContainer;
