import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Header from './components/Header'
import SvgComparison from './components/SvgComparison'
import TechnicalExplanation from './components/TechnicalExplanation'
import Footer from './components/Footer'

const FillRuleDemo: React.FC = () => {
  const svgPaths = [
    "M50,50 h100 v100 h-100 Z M75,75 h50 v50 h-50 Z M100,25 l75,75 l-75,75 l-75,-75 Z",
    "M50,50 h100 v100 h-100 Z M75,75 h50 v50 h-50 Z M100,25 l-75,75 l75,75 l75,-75 Z"
  ]

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="pt-6">
          <Header />
          <SvgComparison paths={svgPaths} />
          <p className="text-lg text-center mt-12">
            Note that the new path value produces the same shape as the previous one.
          </p>
          <TechnicalExplanation />
          <Footer />
        </CardContent>
      </Card>
    </div>
  )
}

export default FillRuleDemo

