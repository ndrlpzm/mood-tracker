import IconButton from "../common-components/IconButton";
import xIcon from ".../resources/icons8-x-50.png";
import useSWRMutation from "swr/mutation";
import { deleteMood } from "../data/apiMock";

export function DeleteButton() {
  //const { trigger, data } = useSWRMutation("/mood", deleteMood);
  return (
    // <IconButton
    //   displayImg={xIcon}
    //   callbackFunction={trigger}
    //   description="Delete"
    // />
  <></>);
}
export default <DeleteButton></DeleteButton>;
