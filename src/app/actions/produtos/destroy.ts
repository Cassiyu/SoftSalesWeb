"use server"

import { redirect } from "next/navigation"


export async function destroy (id: number){
    await new Promise(r => setTimeout(r, 5000))

    const options = {
        method: "DELETE"
    }

    const resp = await fetch("http://localhost:8080/produto/" + id, options)

    if (resp.ok){
        redirect("/produtos")
    }

    if (!resp.ok){
        const error = await resp.json()
        throw new Error(error.message)
    }


}