import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import DropDownMenuPortal from "../Portal/DropDownMenuPortal";

interface DropDownButtonProps {
  id: string;
  setForceRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownButton = (props: DropDownButtonProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-6 h-6 flex items-center justify-center">
        <button
          className="w-6 h-6 flex items-center justify-center"
          aria-label="options"
        >
          <DotsVerticalIcon color="#020617" width={16} height={16} />
        </button>
      </DropdownMenu.Trigger>
      <DropDownMenuPortal id={props.id} setForceRefresh={props.setForceRefresh} />  
    </DropdownMenu.Root>
  )
}

export default DropDownButton