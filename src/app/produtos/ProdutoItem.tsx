import DropdownActions from "@/components/DropdownActions";

interface Produto {
    id: number,
    nome: string,
    valor: string
}

export function ProdutoItem(produto: Produto) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2">             
                <span>{produto.nome}</span>
                <span>{produto.valor}</span>
            </div>
            
            <DropdownActions />
        </div>
    )
}
