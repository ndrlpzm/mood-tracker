import "./CommonComponents.css";
import { MoodValue } from "./MoodValue";

interface MoodValueButtonInput {
  buttonValue: number;
  setValue: React.Dispatch<React.SetStateAction<number | undefined>>;
  isSelected: boolean;
}
function MoodValueButton({
  buttonValue,
  setValue,
  isSelected,
}: MoodValueButtonInput) {
  const handleClickRating = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValue(buttonValue);
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
