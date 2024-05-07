
import { BarChartProdutos } from "@/components/BarChartProdutos";
import CardStats from "@/components/Card"
import { LineChartVendas } from "@/components/LineChartVendas";
import VendaTable from "@/components/VendaTable";
import { NavBar } from "@/components/NavBar"
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { BarChart } from "lucide-react";

export default function Home() {

  const maior = {
    title: "Maior Venda",
    value: 99.00
  }

  const menor = {
    title: "Menor Venda",
    value: 10.00
  }

  const ultimo = {
    title: "Última vendas",
    value: 50.00
  }

  const totais = [
    maior,
    menor,
    ultimo
  ]


  const ultimasVendas: Venda[] = [
    {
      id: 1,
      data: "19/04/2024",
      valor: 100.00,
      tipo: "SAIDA",
      produto: {
        id: 1,
        nome: "Blusa",
        valor: 100
      }
    },
    {
      id: 2,
      data: "18/04/2024",
      valor: 25.00,
      tipo: "SAIDA",
      produto: {
        id: 2,
        nome: "Camisa",
        valor: 25
      }
    },
    {
      id: 3,
      data: "17/04/2024",
      valor: 50.00,
      tipo: "ENTRADA",
      produto: {
        id: 3,
        nome: "Bermuda",
        valor: 50
      }
    },
    {
      id: 4,
      data: "16/04/2024",
      valor: 20.00,
      tipo: "ENTRADA",
      produto: {
        id: 4,
        nome: "Boné",
        valor: 20
      }
    },
    {
      id: 5,
      data: "15/04/2024",
      valor: 20.00,
      tipo: "ENTRADA",
      produto: {
        id: 4,
        nome: "Boné",
        valor: 20
      }
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <NavBar active="home"/>
      <h2 className="text-2xl font-bold">Dashboard</h2>

       <section className="grid grid-flow-col-dense  gap-5">
        { totais.map( t => <CardStats {...t} /> ) }
      </section>
 
      <section>
        <h3 className="text-lg font-bold">Últimas vendas</h3>
        <VendaTable data={ultimasVendas}  />
      </section>


    </main>
  );
}
