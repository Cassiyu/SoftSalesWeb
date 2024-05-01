"use server"

import { redirect } from "next/navigation"

export async function destroy(id: number){
    
    const options = {
        method: "DELETE"
    }

    const resp = await fetch("http:localhost:8080/venda/" + id, options)

    if (!resp.ok){
        throw new Error("erro ao apagar")
    }
    
    if (resp.ok){
        redirect("/vendas")
    }



}