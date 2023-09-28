
import "./CommonComponents.css";

interface IconButtonInput {
  displayImg: string;
  callbackFunction: Function;
  description: string;
}
function IconButton({
  displayImg,
  callbackFunction,
  description,
}: IconButtonInput) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    callbackFunction();
  };
  return (
    <button onClick={handleClick}>
		<img alt={description} src={displayImg}></img>
    </button>
  );
}

export default IconButton;
