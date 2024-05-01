import { NavBar } from "@/components/NavBar";
import { get } from "@/app/actions/produtos/get";
import { Form } from "./Form";


export default async function CadastrarVendas() {
    const produtos = await get()

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="vendas" />

            <Form produtos={produtos} />
            
        </main>


    )
}