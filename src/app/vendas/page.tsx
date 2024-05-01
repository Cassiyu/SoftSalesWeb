import { get } from "../actions/produtos/get";
import { NavBar } from "@/components/NavBar";
import { getVendas } from "../actions/vendas/get";
import { VendaData } from "./VendaData";

export default async function Vendas() {
  const vendas = await getVendas();
  const produtos: Array<Produto> = await get();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="vendas" />

      <VendaData 
        vendas={vendas} 
        produtos={produtos}
      />

    </main>
  );
}
