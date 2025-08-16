"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", entradas: 4000, saidas: 2400 },
  { name: "Fev", entradas: 3000, saidas: 1398 },
  { name: "Mar", entradas: 2000, saidas: 9800 },
  { name: "Abr", entradas: 2780, saidas: 3908 },
  { name: "Mai", entradas: 1890, saidas: 4800 },
  { name: "Jun", entradas: 2390, saidas: 3800 },
  { name: "Jul", entradas: 3490, saidas: 4300 },
];

export default function GraficoEntradasSaidas() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="entradas" fill="#4895EF" />
        <Bar dataKey="saidas" fill="#F72585" />
      </BarChart>
    </ResponsiveContainer>
  );
}
