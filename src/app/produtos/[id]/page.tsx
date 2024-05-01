import { getById } from "@/app/actions/produtos/get-by-id";
import { NavBar } from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import FormEdit from "./FormEdit";

export default async function EditarProduto({params}: Params) {
    const id = params.id

    const produto = await getById(id)

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="produtos" />

            <FormEdit {...produto} />

        </main>
    )
}