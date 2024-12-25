import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
        Exploring SVG Fill Rules
      </h1>
      <p className="text-xl text-center text-gray-600">
        Visualizing the difference between nonzero and evenodd fill rules
      </p>
    </div>
  )
}

export default Header

