"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 4000))

    const data = {
        nome: formData.get("nome"),
        valor: formData.get("valor")
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": "pt-br"
        }
    }

    const resp = await fetch("http://localhost:8080/produto", options)

    if (resp.ok){
        redirect("/produtos")
    }

    if (!resp.ok){
        const json = await resp.json()
        return {
            messageNome: json.find((message: any) => message.campo == 'nome').mensagem,
            messageValor: json.find((message: any) => message.campo == 'valor').mensagem
        }
        
    }

}