import "./CommonComponents.css";
import { MoodValue } from "./MoodValue";

interface MoodValueButtonInput {
  buttonValue: number;
  callbackFn: Function;
  isSelected: boolean;
}
function MoodValueButton({
  buttonValue,
  callbackFn: setValueCb,
  isSelected,
}: MoodValueButtonInput) {
  const handleClickRating = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValueCb(buttonValue);
  };
  return (
    <button
      onClick={handleClickRating}
      key={buttonValue}
      value={buttonValue}
      className={
        isSelected ? "mood-value-button selected-value" : "mood-value-button"
      }
    >
      <MoodValue value={buttonValue}></MoodValue>
    </button>
  );
}
export default MoodValueButton;
