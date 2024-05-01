'use client'

import { ProdutoSelect } from "@/components/ProdutoSelect";
import { MesesSelect } from "@/components/MesesSelect";
import { Button, Pagination } from "@nextui-org/react";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";
import { VendaItem } from "./VendaItem";
import { useEffect, useState } from "react";
import { getVendas } from "../actions/vendas/get";

interface VendaDataProps {
    vendas: {
        content: Array<Venda>
    },
    produtos: Array<Produto>
}

export function VendaData({ vendas, produtos }: VendaDataProps) {

    const [filteredVendas, setFilteredVendas] = useState(vendas.content)
    const [filter, setFilter] = useState({ produto: '', mes: new Date().getMonth() + 1 })
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getVendas(filter.produto, Number(filter.mes), page)
                setFilteredVendas(data.content)
                setTotalPages(data.totalPages)
            } catch (error) {
                throw new Error("falha ao filtrar vendas.")
            }
        };

        fetchData();
    }, [filter, page]);

    const changeFilter = (e: any) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    }

    const clearFilter = () => {
        setFilter({ produto: '', mes: new Date().getMonth() + 1 });
    }

    const handlePageChange = (page: number) => {
        setPage(page);
    }

    return (
        <>
            <section className="flex flex-col gap-4 bg-slate-800 w-4/5 max-w-[1024px] min-h-[565px] mt-4 p-6 rounded">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Vendas</h2>
                    <Link href="/vendas/new">
                        <Button color="primary" startContent={<Plus />}>nova venda</Button>
                    </Link>
                </div>

                <div className="flex gap-4 items-end border-1 border-white/10 p-4 rounded">
                    <Filter size={44} />
                    <ProdutoSelect produtos={produtos} onChange={changeFilter} />
                    <MesesSelect onChange={changeFilter} mes={filter.mes}/>
                    <Button onClick={clearFilter}>limpar</Button>
                </div>

                {filteredVendas.map(venda =>
                    <VendaItem key={venda.id} venda={venda} />
                )}

            </section>

            <Pagination 
                onChange={handlePageChange}
                isCompact 
                showControls 
                total={totalPages} 
                page={1}
                className="mt-6"
             />

        </>
    )
}
