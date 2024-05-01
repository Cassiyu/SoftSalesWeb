"use client"

import DropdownActions from "@/components/DropdownAction";
import { destroy } from "../actions/produtos/destroy";
import toast from "react-hot-toast";
import Link from "next/link";

interface Produto {
    id: number,
    nome: string,
    valor: number
}

export function ProdutoItem(produto: Produto) {
    function handleDelete() {
        toast.promise(
            destroy(produto.id),
            {
                loading: "apagando produto...",
                success: "produto apagado",
                error: (error) => { 
                    return error.message
                }
            }
        )
    }

    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <span>{produto.nome}</span>
                <span>{produto.valor}</span>
            </div>

            <button onClick={handleDelete}>apagar</button>

            <Link href={"/produtos/" + produto.id}>
                editar
            </Link>
            
            <DropdownActions 
                onEdit={() => { console.log("editar ainda não implementado")}}
                onDelete={handleDelete}
            />
        </div>
    )
}