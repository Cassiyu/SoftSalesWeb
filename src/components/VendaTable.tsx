"use client";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useCallback } from "react";

const columns = [
    {
        key: "data",
        label: "Data",
    },
    {
        key: "valor",
        label: "Valor",
    },
    {
        key: "produto",
        label: "Produto",
    },
];

interface VendaTableProps {
    data: Venda[];
}

export default function VendaTable({ data }: VendaTableProps) {
    const renderCell = useCallback((item: any, columnKey: any) => {
        const cellValue = item[columnKey];

        switch (columnKey) {
            case "valor":
                return (
                    <span className="flex items-center">
                        R$ {cellValue.toFixed(2)}
                        {item.tipo === "SAIDA" && <ArrowUp className="text-red-500" size={16} />}
                        {item.tipo === "ENTRADA" && <ArrowDown className="text-green-500" size={16} />}
                    </span>
                );
            case "produto":
                return cellValue.nome; 
            default:
                return cellValue;
        }
    }, []);

    return (
        <Table aria-label="últimas vendas" className="w-[570px]">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={data}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
