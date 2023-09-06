import smileyImage from "../resources/smiling-emoticon-square-face.png";

interface MoodValueButtonInput {
  moodValue: number;
  setMoodValue: React.Dispatch<React.SetStateAction<number>>;
  isSelected: boolean;
}
function MoodValueButton({
  moodValue,
  setMoodValue,
  isSelected,
}: MoodValueButtonInput) {
  var colorMappings = retrieveIconColors();
  var style:string;
  isSelected? style="selected": style="unselected";
  const handleClickRating = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMoodValue(moodValue);
  };
  return (
    <button onClick={handleClickRating} key={moodValue} value={moodValue} className={style}>
      <div
        className="mood-value-container"
        style={{ backgroundColor: colorMappings.get(moodValue) }}
      >
        <img alt={moodValue.toString()} src={smileyImage}></img>
      </div>
    </button>
  );
}
function retrieveIconColors() {
  const colorIcon = new Map();
  colorIcon.set(1, "#747CC6");
  colorIcon.set(2, "#A774C6");
  colorIcon.set(3, "#C674B4");
  colorIcon.set(4, "#D76A91");
  colorIcon.set(5, "#D35D5D");
  return colorIcon;
}
export default MoodValueButton;
