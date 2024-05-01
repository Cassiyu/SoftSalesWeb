interface Produto {
    id: number,
    nome: string,
    valor: number
}

interface Venda {
    id: number,
    valor: number,
    data: string,
    tipo: "ENTRADA" | "SAIDA"
    produto: Produto
    
}