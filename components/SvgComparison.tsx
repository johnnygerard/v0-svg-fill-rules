import React, { useState } from 'react'
import SvgDisplay from './SvgDisplay'
import PathDescription from './PathDescription'

interface SvgComparisonProps {
  paths: string[]
}

const SvgComparison: React.FC<SvgComparisonProps> = ({ paths }) => {
  const [showStrokes, setShowStrokes] = useState(paths.map(() => false))

  const toggleStroke = (index: number) => {
    setShowStrokes(prev => prev.map((show, i) => i === index ? !show : show))
  }

  const comparisons = [
    {
      title: "Three Squares",
      path: paths[0]
    },
    {
      title: "Counter-Clockwise Diamond",
      path: paths[1]
    }
  ]

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center mb-4">{comparisons[0].title}</h2>
        <div className="flex flex-col md:flex-row justify-around items-start gap-8">
          <SvgDisplay 
            title="nonzero"
            fillRule="nonzero" 
            fill="hsl(150, 50%, 60%)"
            showStroke={showStrokes[0]}
            toggleStroke={() => toggleStroke(0)}
            path={comparisons[0].path}
          />
          <SvgDisplay 
            title="evenodd"
            fillRule="evenodd" 
            fill="hsl(150, 50%, 60%)"
            showStroke={showStrokes[0]}
            toggleStroke={() => toggleStroke(0)}
            path={comparisons[0].path}
          />
        </div>
      </div>

      <PathDescription />

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center mb-4">{comparisons[1].title}</h2>
        <div className="flex flex-col md:flex-row justify-around items-start gap-8">
          <SvgDisplay 
            title="nonzero"
            fillRule="nonzero" 
            fill="hsl(150, 50%, 60%)"
            showStroke={showStrokes[1]}
            toggleStroke={() => toggleStroke(1)}
            path={comparisons[1].path}
          />
          <SvgDisplay 
            title="evenodd"
            fillRule="evenodd" 
            fill="hsl(150, 50%, 60%)"
            showStroke={showStrokes[1]}
            toggleStroke={() => toggleStroke(1)}
            path={comparisons[1].path}
          />
        </div>
      </div>
    </div>
  )
}

export default SvgComparison

