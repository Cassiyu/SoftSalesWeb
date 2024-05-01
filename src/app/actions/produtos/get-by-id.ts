"use server"

export async function getById(id: number){

    const resp = await fetch("http://localhost:8080/produto/" + id)

    if (!resp.ok){
        throw new Error("erro ao buscar produto")
    }

    return await resp.json()

}