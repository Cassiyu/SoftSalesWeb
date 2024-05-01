"use client"
import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";

interface CardStatsProps {
    title: string;
    value: number;
}

export default function CardStats({title, value}: CardStatsProps) {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <p className="text-md">{title}</p>
            </CardHeader>
            <CardBody>
                <p className="text-4xl">R$ {value.toFixed(2)}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link href="/vendas" className="text-xs">
                    ver detalhes
                </Link>
            </CardFooter>
        </Card>
    );
}