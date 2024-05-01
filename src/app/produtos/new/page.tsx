"use client"

import { create } from "@/app/actions/produtos/create";
import { NavBar } from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";

export default async function CadastrarProduto() {
    const initialState = {
        messageNome: "",
        messageValor: ""
    }

    const [state, formAction] = useFormState(create, initialState)

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="produtos" />

            <form action={formAction} className="flex flex-col gap-3 bg-slate-900 min-w-[500px] p-6 mt-4 rounded">
                <h2 className="text-2xl font-bold">Cadastrar Produto</h2>

                <Input
                    key="nome"
                    label="Nome"
                    name="nome"
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

        </main>
    )
}