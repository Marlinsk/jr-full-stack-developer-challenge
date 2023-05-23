import * as Dialog from "@radix-ui/react-dialog";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Services } from "../../api/services/Services";
import { useState } from "react";

interface WarningModalProps {
  id: string;
  setForceRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const WarningModal = (props: WarningModalProps) => {
  const [open, setOpen] = useState<boolean>(false);
  
  async function deleteRegister() {
    await Services.DeleteEmpresa(props.id);
    setOpen(false)
    props.setForceRefresh((prev) => !prev);
  }
  
  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger className="w-full text-left px-1 rounded-[4px] hover:bg-slate-900 hover:text-neutral-50">
        Remover
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="w-[358px] rounded-lg border border-gray-200 fixed pt-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white overflow-hidden">
          <div className="w-full px-6 pb-4 border-b-[1px] border-gray-200 flex items-center gap-4 flex-row justify-start">
          <ExclamationTriangleIcon color="#0f172a" width={24} height={24} />
            <Dialog.Title className="font-semibold text-2xl text-slate-900">
              Aviso
            </Dialog.Title>
          </div>
          <div className="w-full flex flex-col justify-center text-center gap-4 px-6 pt-6 pb-6">
            <span>Tem certeza que você remover este registro?</span>
            <div className="flex justify-center gap-6">
              <Dialog.Close className="w-[124px] px-3 py-[6px] border rounded font-medium text-base text-slate-900 shadow-md hover:shadow-blue-500/50 hover:border-none hover:text-neutral-50 hover: hover:bg-blue-500">
                Não  
              </Dialog.Close>
              <button onClick={deleteRegister} className="w-[124px] px-3 py-[6px] border rounded font-medium text-base text-slate-900 shadow-md hover:shadow-blue-500/50 hover:border-none hover:text-neutral-50 hover: hover:bg-blue-500">Sim</button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default WarningModal