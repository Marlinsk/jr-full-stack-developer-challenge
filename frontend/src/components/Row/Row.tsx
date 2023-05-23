import DropDownButton from "../Button/DropDownButton";

interface TableRow {
  id: string;
  name: string;
  street_name: string;
  addrees_number: string;
  neighborhood_name: string;
  city_name: string;
  state_name: string;
}

interface TableRowExternalUseState {
  setForceRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TableRowProps {
  data: TableRow;
  propDrilling: TableRowExternalUseState;
}

const Row = ({ data, propDrilling }: TableRowProps) => {
  return (
    <tr>
      <td className="max-w-[156px] px-6 py-4 text-left whitespace-nowrap overflow-hidden text-ellipsis text-sm text-slate-900">
        {data.id}
      </td>
      <td className="max-w-[304px] px-6 py-4 text-left whitespace-nowrap overflow-hidden text-ellipsis text-sm text-slate-900">
        {data.name}
      </td>
      <td className="max-w-[624px] px-6 py-4 text-left whitespace-nowrap overflow-hidden text-ellipsis text-sm text-slate-900">
        {data.street_name},&nbsp;{data.addrees_number}&nbsp; - &nbsp;
        {data.neighborhood_name}, &nbsp;{data.city_name} - &nbsp;
        {data.state_name}
      </td>
      <td className="max-w-14 px-6 py-4 flex items-center justify-center">
        <DropDownButton id={data.id} setForceRefresh={propDrilling.setForceRefresh} />
      </td>
    </tr>
  );
}

export default Row