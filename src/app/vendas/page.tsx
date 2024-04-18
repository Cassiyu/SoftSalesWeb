import { NavBar } from "@/components/NavBar"

export default function Vendas() {
  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="vendas" />
      <h2>Vendas</h2>
    </main>
  );
}