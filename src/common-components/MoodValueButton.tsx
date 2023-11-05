
import "./CommonComponents.css";

interface MoodValueButtonInput {
  buttonValue: number;
  setValue: React.Dispatch<React.SetStateAction<number|undefined>>;
  isSelected: boolean;
  displayOnly: boolean;
}
function MoodValueButton({
  buttonValue,
  setValue,
  isSelected,
  displayOnly
}: MoodValueButtonInput) {
  var colorMappings = retrieveIconColors();
  var imageMappings = retrieveIconImages();
  var classStyle:string;
  isSelected? classStyle="mood-value selected": classStyle="mood-value unselected";
  const style={ backgroundColor: colorMappings.get(buttonValue), backgroundImage: `url(${imageMappings.get(buttonValue)})`}
  const handleClickRating = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!displayOnly)
      setValue(buttonValue);
  };
  return (
    <button onClick={handleClickRating} key={buttonValue} value={buttonValue} className={classStyle} style={style}>
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
