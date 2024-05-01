"use client"

import { update } from "@/app/actions/produtos/update"
import { SubmitButton } from "@/components/SubmitButton"
import { Button, Input } from "@nextui-org/react"
import Link from "next/link"
import { useFormState } from "react-dom"

export default function FormEdit(produto: Produto){
    const initialState = {
        messageNome: "",
        messageValor: ""
    }

    const [state, formAction] = useFormState(update, initialState)
    
    return (
            <form action={formAction} className="flex flex-col gap-3 bg-slate-900 min-w-[500px] p-6 mt-4 rounded">
                <h2 className="text-2xl font-bold">Editar Produto {produto.id}</h2>
                <input type="hidden" name="id" value={produto.id} />
                <Input
                    key="nome"
                    label="Nome"
                    name="nome"
                    defaultValue={produto.nome}
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={state?.messageNome != ""}
                    errorMessage={state?.messageNome}
                />

                <Input
                    key="valor"
                    label="Valor"
                    name="valor"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={state?.messageValor != ""}
                    errorMessage={state?.messageValor}
                />


                <div className="flex justify-around">
                    <Link href="/produtos">
                        <Button variant="bordered">cancelar</Button>
                    </Link>

                    <SubmitButton />
                </div>

            </form> 
    )
}