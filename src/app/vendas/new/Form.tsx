'use client'

import { create } from "@/app/actions/vendas/create";
import { ProdutoSelect } from "@/components/ProdutoSelect";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input, Radio, RadioGroup } from "@nextui-org/react";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
    message_valor: '',
    message_data: '',
}

export function Form(props: { produtos: Array<Produto> }) {
    const { produtos } = props

    const [state, formAction] = useFormState(create, initialState)
    
    return (
        <form action={formAction} className="flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]">
            <h2 className="text-2xl font-bold">Nova Venda</h2>

            <Input
                type="number"
                pattern="[0-9]*"
                key="valor"
                label="Valor"
                name="valor"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                startContent={
                    <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">R$</span>
                    </div>
                }
                isInvalid={state?.message_valor != ''}
                errorMessage={state?.message_valor}
            />

            <Input
                key="data"
                type="date"
                label="Data"
                name="data"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                isInvalid={state?.message_data != ''}
                errorMessage={state?.message_data}
            />

            <ProdutoSelect produtos={produtos} />

            <RadioGroup
                name="tipo"
                label="Tipo"
                orientation="horizontal"
            >
                <Radio value="RECEITA" className="mr-5">
                    <div className="flex gap-2 items-center">
                        <ArrowDown className="text-green-500" />
                        <span>Receita</span>
                    </div>
                </Radio>
                <Radio value="DESPESA">
                    <div className="flex gap-2 items-center">
                        <ArrowUp className="text-red-500" />
                        <span>Despesa</span>
                    </div>
                </Radio>
            </RadioGroup>

            <div className="flex justify-around mt-4">
                <Link href="/vendas">
                    <Button variant="bordered" >cancelar</Button>
                </Link>
                <SubmitButton />
            </div>
        </form>
    )
}
