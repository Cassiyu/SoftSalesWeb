"use client"

import { getTotaisPorProdutos } from '@/app/actions/vendas/dashboard';
import { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, XAxis, YAxis } from 'recharts';

export function BarChartProdutos() {

  const data = [
    {
      produto: "blusa",
      valor: 100.00
    },
    {
      produto: "camisa",
      valor: 25.00
    },
    {
      produto: "bermuda",
      valor: 50.00
    },
    {
      produto: "boné",
      valor: 20.00
    }
  ]

    return (
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="produto" />
          <YAxis />
          <Legend />
          <Bar dataKey="valor" fill="#ff0066" />
        </BarChart>
    );
}