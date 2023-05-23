import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { EmpresaResponse, Services } from "../../api/services/Services";
import { Load } from "../Load/Load";

interface MoreDetailsModalProps {
  id: string;
}

const MoreDetailsModal = (props: MoreDetailsModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<EmpresaResponse>({} as EmpresaResponse);

  useEffect(() => {
    if (props.id) {
      setIsLoading(true);
      Services.GetEmpresa(props.id)
      .then((res) => {
        return setData(res.data);
      }).finally(() => setIsLoading(false));
    }
  }, [props?.id]);

  return (
    <Dialog.Root>
      <Dialog.Trigger className="w-full text-left px-1 rounded-[4px] hover:bg-slate-900 hover:text-neutral-50">
        Detalhes
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="w-[562px] rounded-lg border border-gray-200 fixed pt-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white overflow-hidden">
          <div className="w-full px-6 pb-4 border-b-[1px] border-gray-200 flex items-center flex-row justify-between">
            <Dialog.Title className="font-semibold text-2xl text-slate-900">
              Dados da empresa
            </Dialog.Title>
            <Dialog.Close className="w-[32px] h-[32px] flex justify-center items-center border-none">
              <Cross1Icon color="#0f172a" width={24} height={24} />
            </Dialog.Close>
          </div>
          {isLoading ? (
            <Load
              divProps={{
                className:
                  "w-full h-[488px] flex items-center justify-center relative bg-gray-500-50",
              }}
            />
          ) : (
            <div className="w-[562px] px-6 py-6 gap-4 flex flex-col items-end">
              <div className="w-full flex items-center gap-2">
                <span className="text-lg font-medium text-slate-900">Id:</span>
                <p className="max-w-[514px] text-base font-normal text-slate-900 text-ellipsis whitespace-nowrap overflow-hidden">
                  {data?.id}
                </p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <span className="text-lg font-medium text-slate-900">
                  Nome da empresa:
                </span>
                <p className="max-w-[514px] text-base font-normal text-slate-900 text-ellipsis whitespace-nowrap overflow-hidden">
                  {data?.name}
                </p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <span className="text-lg font-medium text-slate-900">
                  Endereço:
                </span>
                <p className="max-w-[514px] text-base font-normal text-slate-900">
                  {data.street_name},&nbsp;
                  {data.addrees_number}&nbsp; - &nbsp;
                  {data.neighborhood_name}, &nbsp;
                  {data.city_name} - &nbsp;
                  {data.state_name}
                </p>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MoreDetailsModal;
