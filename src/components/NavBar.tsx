import Link from "next/link";

interface NavBarProps {
    active: "home" | "produtos" | "vendas"
}

export function NavBar(props: NavBarProps){
    const active = props.active
    const classActive = "border-b-4 border-blue-400 pb-3"

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-slate-900 w-full">
            <h1 className="text-4xl font-bold">Soft Sales</h1>
            <ul className="flex gap-6">
            <li className={active == "home" ? classActive : ""}>
                <Link href="/">home</Link>
            </li>
            <li className={active == "produtos" ? classActive : ""}>
                <Link href="/produtos">produtos</Link>
            </li>
            <li className={active == "vendas" ? classActive : ""}>
                <Link href="/vendas">vendas</Link>
            </li>
            </ul>
            <div className="size-14 rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/300" alt="avatar do usuário " />
            </div>
        </nav>
    )
}