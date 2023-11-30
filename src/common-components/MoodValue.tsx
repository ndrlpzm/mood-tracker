interface MoodValueInput {
  value: number;
}
export function MoodValue({ value }: MoodValueInput) {
  var colorMappings = retrieveIconColors();
  var imageMappings = retrieveIconImages();
  const style = {
    backgroundColor: colorMappings.get(value),
    backgroundImage: `url(${imageMappings.get(value)})`,
  };
  return <div className="mood-value" style={style}></div>;
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
  colorIcon.set(1, "../icons/emoticon-crying.png");
  colorIcon.set(2, "../icons/emoticon-sad.png");
  colorIcon.set(3, "../icons/emoticon-avg.png");
  colorIcon.set(4, "../icons/emoticon-smiling.png");
  colorIcon.set(5, "../icons/emoticon-happy.png");
  return colorIcon;
}
