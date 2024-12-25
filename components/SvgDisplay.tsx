import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Check, Copy } from 'lucide-react'

interface SvgDisplayProps {
  title: string
  fillRule: "nonzero" | "evenodd"
  fill: string
  showStroke: boolean
  toggleStroke: () => void
  path: string
}

const SvgDisplay: React.FC<SvgDisplayProps> = ({ title, fillRule, fill, showStroke, toggleStroke, path }) => {
  const [copied, setCopied] = useState(false)

  const svgCode = `<svg width="200" height="200" viewBox="0 0 200 200">
  <path
    d="${path}"
    fill="${fill}"
    fillRule="${fillRule}"
    ${showStroke ? 'stroke="black"' : ''}
  />
</svg>`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(svgCode).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="text-center w-full md:w-1/2">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto mb-4">
        <path 
          d={path} 
          fill={fill} 
          fillRule={fillRule} 
          stroke={showStroke ? "black" : "none"} 
        />
      </svg>
      <div className="flex justify-center space-x-2 mb-4">
        <Button 
          onClick={toggleStroke}
          variant="outline"
          size="sm"
        >
          {showStroke ? "Hide Path" : "Show Path"}
        </Button>
      </div>
      <div className="mt-2 text-left relative group">
        <pre className="bg-gray-800 text-gray-200 p-4 rounded-lg text-sm whitespace-pre-wrap break-words font-mono shadow-lg">
          <code>
  <span className="text-blue-300">{'<svg '}</span>
  <span className="text-green-300">width</span>
  <span className="text-blue-300">="200" </span>
  <span className="text-green-300">height</span>
  <span className="text-blue-300">="200" </span>
  <span className="text-green-300">viewBox</span>
  <span className="text-blue-300">="0 0 200 200"{'>'}</span>
  {'\n  '}<span className="text-blue-300">{'<path'}</span>
  {'\n    '}<span className="text-green-300">d</span>
  <span className="text-blue-300">={`"${path}"`}</span>
  {'\n    '}<span className="text-green-300">fill</span>
  <span className="text-blue-300">{`="${fill}"`}</span>
  {'\n    '}<span className="text-green-300">fillRule</span>
  <span className="text-blue-300">=</span>
  <span className="text-blue-300">"</span>
  <span className="bg-yellow-800 text-yellow-300 font-bold px-1 rounded">{fillRule}</span>
  <span className="text-blue-300">"</span>
  {showStroke && (
    <>
      {'\n    '}<span className="text-green-300">stroke</span><span className="text-blue-300">="black" </span>
    </>
  )}
  {'\n  '}<span className="text-blue-300">{'/>'}</span>
  {'\n'}<span className="text-blue-300">{'</svg>'}</span>
</code>
          <Button
            onClick={copyToClipboard}
            variant="ghost"
            size="sm"
            className="absolute bottom-2 right-2 w-8 h-8 p-0 opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-200 hover:bg-gray-700/50 border border-gray-300"
            aria-label={copied ? "SVG code copied" : "Copy SVG code"}
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-gray-300" />}
          </Button>
        </pre>
      </div>
    </div>
  )
}

export default SvgDisplay

