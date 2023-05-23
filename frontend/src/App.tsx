import { useEffect, useState } from "react";
import RegisterModal from "./components/Modal/RegisterModal";
import { EmpresaResponse, Services } from "./api/services/Services";
import Row from "./components/Row/Row";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

function App() {
  const [forceRefresh, setForceRefresh] = useState<boolean>(false);
  const [data, setData] = useState<EmpresaResponse[] | null>();

  useEffect(() => {
    Services.ListEmpresas().then((response) => setData(response.data));
  }, [forceRefresh]);

  return (
    <div className="w-full h-full flex flex-col justify-center mt-10">
      <div className="w-full flex flex-col gap-6 items-center justify-center mb-6">
        <div className="w-[1140px] h-10 flex justify-end bg-white">
          <RegisterModal setForceRefresh={setForceRefresh} />
        </div>
        <div className="w-[1140px]">
          {data && data?.length <= 0 ? (
            <div className="w-full flex justify-center items-center text-center gap-2"> 
              <ExclamationTriangleIcon color="#0f172a" width={16} height={16} />
              <p className="text-slate-900 text-base">Sem dados, sem tabela!</p>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="border shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-slate-900">
                        <tr>
                          <th className="w-[156px] px-6 py-3 text-left text-xs font-medium text-neutral-50 uppercase">
                            ID
                          </th>
                          <th className="w-[304px] px-6 py-3 text-left text-xs font-medium text-neutral-50 uppercase">
                            Nome da empresa
                          </th>
                          <th className="w-[624px] px-6 py-3 text-left text-xs font-medium text-neutral-50 uppercase">
                            Endereço
                          </th>
                          <th className="w-14 px-6 py-3 text-right text-xs font-medium text-neutral-50 uppercase">
                            Ações
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {data?.map((data) => (
                          <Row
                            key={data.id}
                            data={data}
                            propDrilling={{ setForceRefresh }}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
