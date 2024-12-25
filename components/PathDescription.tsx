import React from 'react'

const PathDescription: React.FC = () => {
  return (
    <div className="text-lg text-center my-8 space-y-4">
      <p>
        The path above creates three squares, all drawn in a clockwise direction.
      </p>
      <p className="font-semibold mt-4">
        What would happen if the path of the diamond square was directed counter-clockwise?
      </p>
    </div>
  )
}

export default PathDescription

