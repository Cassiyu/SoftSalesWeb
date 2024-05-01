'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEventHandler } from "react";

interface ProdutoSelectProps  {
    produtos: Array<Produto>,
    onChange?: ChangeEventHandler
}

export function ProdutoSelect({produtos, onChange}: ProdutoSelectProps) {

    return (
        <Select
            items={produtos}
            label="Produto"
            variant="bordered"
            name="produto"
            placeholder="Selecione um produto"
            labelPlacement="outside"
            onChange={onChange}
        >
            {(produto) => 
                <SelectItem key={produto.nome}>
                    {produto.nome}
                    {produto.valor}
                </SelectItem>
            }
        </Select>
    )
}