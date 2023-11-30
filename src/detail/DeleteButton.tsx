import IconButton from "../common-components/IconButton";
import xIcon from "../resources/icons8-x-50.png";
import { useApiMutation } from "../hooks/use-api";
import { deleteMood } from "../data/apiMock";
import { useNavigate } from "react-router-dom";

interface DeleteButtonInput {
  id: number | undefined;
}
export function DeleteButton({ id }: DeleteButtonInput) {
  const navigate = useNavigate();

  const { trigger } = useApiMutation(`/moods/${id}`, deleteMood, {
    onSuccess: () => {
      console.log("onSuccess");
      navigate("/");
    },
  });

  if (!id) return <div>undefined id~</div>;
  const callBack = () => {
    //TODO: add confirmation prompt
    trigger();
  };

  return (
    <IconButton
      displayImg={xIcon}
      callbackFunction={callBack}
      description="Delete"
    />
  );
}
export default DeleteButton;
