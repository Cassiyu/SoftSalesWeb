import { NavBar } from "@/components/NavBar"
import { ProdutoItem } from "./ProdutoItem";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import { get } from "@/app/actions/produtos/get";

export default async function Produtos() {

  const produtos = await get()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="produtos" />

      <section className="flex flex-col gap-3 bg-slate-900 p-6 mt-4 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Cadastrar Produto</h2>
          <Button color="primary" startContent={<Plus size={18} />}>
            Novo Produto
          </Button>

        </div>

        {produtos.map((produto: any) => (
          <ProdutoItem {...produto} />
        ))}

      </section>

    </main>
  );
}