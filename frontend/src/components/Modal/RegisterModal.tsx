import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import Label from "../Label/Label";
import { Services } from "../../api/services/Services";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const registerModalSchema = z.object({
  name: z.string().nonempty("Este campo não pode ser nulo"),
  street_name: z.string().nonempty("Este campo não pode ser nulo"),
  addrees_number: z.string().nonempty("Este campo não pode ser nulo"),
  neighborhood_name: z.string().nonempty("Este campo não pode ser nulo"),
  city_name: z.string().nonempty("Este campo não pode ser nulo"),
  state_name: z.string().nonempty("Este campo não pode ser nulo"),
});

type registerModalSchemaData = z.infer<typeof registerModalSchema>;

interface RegisterModalProps {
  setForceRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterModal = (props: RegisterModalProps) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerModalSchemaData>({
    resolver: zodResolver(registerModalSchema),
  });
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    reset({})
  }, [])

  async function send({
    name,
    street_name,
    addrees_number,
    neighborhood_name,
    city_name,
    state_name,
  }: registerModalSchemaData) {
    await Services.CreateEmpresa({
      name,
      street_name,
      addrees_number,
      neighborhood_name,
      city_name,
      state_name,
    });
    setOpen(false)
    props.setForceRefresh((prev) => !prev);
  }

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger className="shadow-md border rounded px-2 hover:shadow-blue-500/50 hover:border-none hover:text-neutral-50 hover: hover:bg-blue-500">
        Adicionar
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="w-[720px] rounded-lg border border-gray-200 fixed pt-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white overflow-hidden">
          <div className="w-full px-6 pb-4 border-b-[1px] border-gray-200 flex items-center flex-row justify-between">
            <Dialog.Title className="font-semibold text-2xl text-slate-900">
              Cadastrar empresa
            </Dialog.Title>
            <Dialog.Close className="w-[32px] h-[32px] flex justify-center items-center">
              <Cross1Icon width={24} height={24} />
            </Dialog.Close>
          </div>
          <div className="w-full px-6 pt-6 pb-6">
            <form
              onSubmit={handleSubmit(send)}
              className="w-full flex flex-col gap-10"
            >
              <div className="w-full flex flex-col gap-6">
                <div className="w-full">
                  <div className="w-full flex flex-col gap-5">
                    <div className="w-full flex flex-col gap-3">
                      <Label htmlFor="name" text="Nome da empresa" />
                      <div className="w-full flex flex-col gap-3">                        
                        <input
                          type="text"
                          className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                          {...register("name")}
                        />
                        {errors.name && <span className="w-full mt-1 flex items-center font-normal text-sm text-red-500">{errors.name.message}</span>}
                      </div>
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
                        <div className="w-full flex flex-col gap-3">
                          <input
                            type="text"
                            className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                            {...register("street_name")}
                          />
                          {errors.street_name && <span className="w-full mt-1 flex items-center font-normal text-sm text-red-500">{errors.street_name.message}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="w-[212.8px]">
                      <div className="w-[212.8px] flex flex-col gap-3">
                        <Label htmlFor="addrees_number" text="Número" />
                        <div className="w-full flex flex-col gap-3">
                          <input
                            type="text"
                            className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                            {...register("addrees_number")}
                          />
                          {errors.addrees_number && <span className="w-full mt-1 flex items-center font-normal text-sm text-red-500">{errors.addrees_number.message}</span>}
                        </div>
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
                        <div className="w-full flex flex-col gap-3">
                          <input
                            type="text"
                            className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                            {...register("neighborhood_name")}
                          />
                          {errors.neighborhood_name && <span className="w-full mt-1 flex items-center font-normal text-sm text-red-500">{errors.neighborhood_name.message}</span>}
                        </div> 
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="w-full flex flex-col gap-3">
                        <Label htmlFor="city_name" text="Nome da cidade" />
                        <div className="w-full flex flex-col gap-3">
                          <input
                            type="text"
                            className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                            {...register("city_name")}
                          />
                          {errors.city_name && <span className="w-full mt-1 flex items-center font-normal text-sm text-red-500">{errors.city_name.message}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="w-full flex flex-col gap-3">
                        <Label htmlFor="state_name" text="Nome do estado" />
                        <div className="w-full flex flex-col gap-3">
                          <input
                            type="text"
                            className="w-full h-10 px-3 py-3 text-sm text-slate-900 font-normal border border-gray-200 rounded bg-white hover:boder hover:border-[#b3b3b3]"
                            {...register("state_name")}
                          />
                          {errors.state_name && <span className="w-full mt-1 flex items-center font-normal text-sm text-red-500">{errors.state_name.message}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[37.6px] flex justify-end">
                <button 
                  type="submit"
                  className="px-3 py-[6px] border rounded font-medium text-base text-slate-900 shadow-md hover:shadow-blue-500/50 hover:border-none hover:text-neutral-50 hover: hover:bg-blue-500">
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RegisterModal;
