import { Mood } from "../data/classes/mood";
import "./CommonComponents.css";

interface MoodValueButtonInput {
  moodValue: number;
  mood: Mood;
  setMood: React.Dispatch<React.SetStateAction<Mood>>;
  isSelected: boolean;
  displayOnly: boolean;
}
function MoodValueButton({
  moodValue,
  mood,
  setMood,
  isSelected,
  displayOnly
}: MoodValueButtonInput) {
  var colorMappings = retrieveIconColors();
  var imageMappings = retrieveIconImages();
  var classStyle:string;
  isSelected? classStyle="mood-value selected": classStyle="mood-value unselected";
  const style={ backgroundColor: colorMappings.get(moodValue), backgroundImage: `url(${imageMappings.get(moodValue)})`}
  const handleClickRating = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!displayOnly)
      setMood({...mood, value:moodValue});
  };
  return (
    <button onClick={handleClickRating} key={moodValue} value={moodValue} className={classStyle} style={style}>
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
function retrieveIconImages() {
  const colorIcon = new Map();
  colorIcon.set(1, '../icons/emoticon-crying.png');
  colorIcon.set(2, "../icons/emoticon-sad.png");
  colorIcon.set(3, "../icons/emoticon-avg.png");
  colorIcon.set(4, "../icons/emoticon-smiling.png");
  colorIcon.set(5, "../icons/emoticon-happy.png");
  return colorIcon;
}
export default MoodValueButton;
