import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import MoreDetailsModal from "../Modal/MoreDetailsModal";
import EditModal from "../Modal/EditModal";
import WarningModal from "../Modal/WarningModal";

interface DropDownMenuPortalProps {
  id: string;
  setForceRefresh: React.Dispatch<React.SetStateAction<boolean>>;
} 

const DropDownMenuPortal = (props: DropDownMenuPortalProps) => {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content className="w-28 border rounded-md flex flex-col bg-white shadow-md py-2 p-2">
        <MoreDetailsModal id={props.id} />
        <EditModal id={props.id} setForceRefresh={props.setForceRefresh} />
        <WarningModal id={props.id} setForceRefresh={props.setForceRefresh} />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
}

export default DropDownMenuPortal