"use server"

export async function getTotaisPorProdutos() {
    const resp = await fetch("http:localhost:8080/venda/totais-por-produto")
    return await resp.json()

}

export async function getTotaisPorMes() {
    const resp = await fetch("http:localhost:8080/venda/totais-por-mes")
    return await resp.json()

}