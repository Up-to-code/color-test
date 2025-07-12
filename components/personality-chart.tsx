"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PersonalityChartProps {
  scores: {
    red: number
    yellow: number
    green: number
    blue: number
  }
  colorTraits: {
    [key: string]: {
      name: string
      emoji: string
      traits: string
      shortTrait: string
      longDescription: string // Added longDescription
    }
  }
  language: string
}

export function PersonalityChart({ scores, colorTraits, language }: PersonalityChartProps) {
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0)
  const percentages = {
    red: Math.round((scores.red / total) * 100),
    yellow: Math.round((scores.yellow / total) * 100),
    green: Math.round((scores.green / total) * 100),
    blue: Math.round((scores.blue / total) * 100),
  }

  const maxPercentage = Math.max(...Object.values(percentages))
  const isRTL = language === "ar"

  const colors = [
    { key: "red", color: "#ef4444", bgColor: "bg-red-500" },
    { key: "yellow", color: "#eab308", bgColor: "bg-yellow-500" },
    { key: "green", color: "#22c55e", bgColor: "bg-green-500" },
    { key: "blue", color: "#3b82f6", bgColor: "bg-blue-500" },
  ]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center flex items-center justify-center gap-2">
          📊 {language === "ar" ? "مخطط الشخصية" : language === "es" ? "Gráfico de Personalidad" : "Personality Chart"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Bar Chart */}
        <div className="space-y-4 mb-6">
          {colors.map(({ key, color, bgColor }) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{colorTraits[key].emoji}</span>
                  <span className="font-medium text-sm">{colorTraits[key].name}</span>
                </div>
                <span className="text-sm font-bold text-gray-700">{percentages[key as keyof typeof percentages]}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full ${bgColor} transition-all duration-1000 ease-out rounded-full`}
                  style={{
                    width: `${percentages[key as keyof typeof percentages]}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Circular Chart */}
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8" />

              {/* Color segments */}
              {(() => {
                let currentAngle = 0
                return colors.map(({ key, color }) => {
                  const percentage = percentages[key as keyof typeof percentages]
                  const angle = (percentage / 100) * 360
                  const startAngle = currentAngle
                  const endAngle = currentAngle + angle

                  // Calculate path for arc
                  const startAngleRad = (startAngle * Math.PI) / 180
                  const endAngleRad = (endAngle * Math.PI) / 180

                  const largeArcFlag = angle > 180 ? 1 : 0

                  const x1 = 50 + 40 * Math.cos(startAngleRad)
                  const y1 = 50 + 40 * Math.sin(startAngleRad)
                  const x2 = 50 + 40 * Math.cos(endAngleRad)
                  const y2 = 50 + 40 * Math.sin(endAngleRad)

                  const pathData = [`M 50 50`, `L ${x1} ${y1}`, `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`, `Z`].join(
                    " ",
                  )

                  currentAngle += angle

                  return percentage > 0 ? (
                    <path
                      key={key}
                      d={pathData}
                      fill={color}
                      opacity="0.8"
                      className="hover:opacity-100 transition-opacity"
                    />
                  ) : null
                })
              })()}
            </svg>

            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{total}</div>
                <div className="text-xs text-gray-600">
                  {language === "ar" ? "إجابات" : language === "es" ? "respuestas" : "answers"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          {colors.map(({ key, color }) => (
            <div key={key} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-gray-700">
                {colorTraits[key].emoji} {colorTraits[key].shortTrait}
              </span>
              <span className="font-semibold text-gray-800">{percentages[key as keyof typeof percentages]}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
