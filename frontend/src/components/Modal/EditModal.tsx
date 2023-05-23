import * as Dialog from "@radix-ui/react-dialog";
import Label from "../Label/Label";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Load } from "../Load/Load";
import { EmpresaResponse, Services } from "../../api/services/Services";

interface EditModalProps {
  id: string
  setForceRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal = (props: EditModalProps) => {
  const { reset, register, handleSubmit } = useForm<EmpresaResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (props.id) {
      setIsLoading(true);
      Services.GetEmpresa(props.id)
      .then((res) => {
        reset(res.data)
      }).finally(() => setIsLoading(false));
    }
  }, []);

  async function send(data: EmpresaResponse) {
    await Services.EditEmpresa(data);
    setOpen(false)
    props.setForceRefresh((prev) => !prev);
  }

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger className="w-full text-left px-1 rounded-[4px] hover:bg-slate-900 hover:text-neutral-50">
        Editar
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="w-[720px] rounded-lg border border-gray-200 fixed pt-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white overflow-hidden">
          <div className="w-full px-6 pb-4 border-b-[1px] border-gray-200 flex items-center flex-row justify-between">
            <Dialog.Title className="font-semibold text-2xl text-slate-900">
              Editar dados da empresa
            </Dialog.Title>
            <Dialog.Close className="w-[32px] h-[32px] flex justify-center items-center">
              <Cross1Icon width={24} height={24} />
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
            <div className="w-full px-6 pt-6 pb-6">
              <form onSubmit={handleSubmit(send)} className="w-full flex flex-col gap-10">
                <div className="w-full flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    ID:
                  </span>
                  <p className="text-base font-normal text-slate-900">
                    {props.id}
                  </p>
                </div>
                <div className="w-full flex flex-col gap-6">
                  <div className="w-full">
                    <div className="w-full flex flex-col gap-5">
                      <div className="w-full flex flex-col gap-3">
                        <Label htmlFor="name" text="Nome da empresa" />
                        <input
                          type="text"
                          className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                          {...register("name")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full flex flex-row gap-4">
                      <div className="w-full">
                        <div className="w-full flex flex-col gap-3">
                          <Label
                            htmlFor="street_name"
                            text="Nome da rua/avenida"
                          />
                          <input
                            type="text"
                            className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                            {...register("street_name")}
                          />
                        </div>
                      </div>
                      <div className="w-[212.8px]">
                        <div className="w-[212.8px] flex flex-col gap-3">
                          <Label htmlFor="addrees_number" text="Número" />
                          <input
                            type="text"
                            className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                            {...register("addrees_number")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full flex flex-row gap-4">
                      <div className="w-full">
                        <div className="w-full flex flex-col gap-3">
                          <Label
                            htmlFor="neighborhood_name"
                            text="Nome do bairro"
                          />
                          <input
                            type="text"
                            className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                            {...register("neighborhood_name")}
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="w-full flex flex-col gap-3">
                          <Label htmlFor="city_name" text="Nome da cidade" />
                          <input
                            type="text"
                            className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                            {...register("city_name")}
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="w-full flex flex-col gap-3">
                          <Label htmlFor="state_name" text="Nome do estado" />
                          <input
                            type="text"
                            className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                            {...register("state_name")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[37.6px] flex justify-end">
                  <button className="px-3 py-[6px] border rounded font-medium text-base text-slate-900 shadow-md hover:shadow-blue-500/50 hover:border-none hover:text-neutral-50 hover: hover:bg-blue-500">
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditModal;
