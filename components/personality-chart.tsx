"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { translations } from "@/lib/translations"
import type { Language } from "@/hooks/use-quiz"

interface PersonalityChartProps {
  scores: { red: number; yellow: number; green: number; blue: number }
  language: Language
}

export function PersonalityChart({ scores, language }: PersonalityChartProps) {
  const t = translations[language]

  const chartData = [
    { color: t.colorTraits.red.name, score: scores.red, fill: "var(--color-red)" },
    { color: t.colorTraits.yellow.name, score: scores.yellow, fill: "var(--color-yellow)" },
    { color: t.colorTraits.green.name, score: scores.green, fill: "var(--color-green)" },
    { color: t.colorTraits.blue.name, score: scores.blue, fill: "var(--color-blue)" },
  ]

  const chartConfig = {
    score: {
      label: "Score",
      color: "hsl(var(--chart-1))",
    },
    red: {
      label: t.colorTraits.red.name,
      color: "hsl(0 84.2% 60.2%)", // Tailwind red-500
    },
    yellow: {
      label: t.colorTraits.yellow.name,
      color: "hsl(48 96% 60%)", // Tailwind yellow-500
    },
    green: {
      label: t.colorTraits.green.name,
      color: "hsl(142.1 76.2% 36.3%)", // Tailwind green-500
    },
    blue: {
      label: t.colorTraits.blue.name,
      color: "hsl(221.2 83.2% 53.3%)", // Tailwind blue-500
    },
  } as const

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">{t.results}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="color"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label || value}
            />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="score" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
