import React from "react";
import MoodValueButton from "../common-components/MoodValueButton";
interface ValueContainerInput {
  value: number | undefined;
  setValue: React.Dispatch<React.SetStateAction<number | undefined>>;
}
function ValueContainer({ value, setValue }: ValueContainerInput) {
  const ratings: number[] = [1, 2, 3, 4, 5];

  return (
    <div id="value-container">
      {ratings.map(function (i) {
        return (
          <MoodValueButton
            key={i}
            buttonValue={i}
            setValue={setValue}
            isSelected={value === i}
            displayOnly={false}
          ></MoodValueButton>
        );
      })}
    </div>
  );
}
export default ValueContainer;
