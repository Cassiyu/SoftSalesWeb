import Link  from "next/link";

interface NavBarProps {
    active: "home" | "produtos" | "vendas"
}

export function NavBar(props: NavBarProps){
    const active = props.active
    const classActive = "border-b-4 border-pink-600 pb-3"

    return (
        <nav className="flex flex-col justify-between items-center px-8 py-4 bg-slate-900 w-48">
            <h1 className="text-4xl font-bold mb-6">Soft Sales</h1>
            <ul className="flex flex-col gap-6">
                <li className={active == "home" ? classActive : ""}>
                    <Link href="/">Home</Link>
                </li>
                <li className={active == "produtos" ? classActive : ""}>
                    <Link href="/produtos">Produtos</Link>
                </li>
                <li className={active == "vendas" ? classActive : ""}>
                    <Link href="/vendas">Vendas</Link>
                </li>
            </ul>
            <div className="size-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário " />
            </div>
        </nav>
    )
}