"use server"
export async function getById(id: number) {
    const response = await fetch(`http://localhost:8080/venda/${id}`)

    if (!response.ok) {
        throw new Error('Venda não encontrada')
    }

    return await response.json()
}