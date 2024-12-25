import React from 'react'

const TechnicalExplanation: React.FC = () => {
  return (
    <div className="mt-12 text-left">
      <h2 className="text-2xl font-bold mb-4">Technical Explanation</h2>
      <blockquote className="border-l-4 border-gray-300 pl-4 py-2 mb-4">
        <p className="mb-4">
          The fill-rule property indicates the algorithm (or winding rule) which is to be used to determine what parts of the canvas are included inside the shape. For a simple, non-intersecting path, it is intuitively clear what region lies "inside"; however, for a more complex path, such as a path that intersects itself or where one subpath encloses another, the interpretation of "inside" is not so obvious.
        </p>
        <p className="mb-4">
          The fill-rule property provides two options for how the inside of a shape is determined:
        </p>
        <h3 className="text-xl font-semibold mb-2">nonzero</h3>
        <p className="mb-4">
          This rule determines the "insideness" of a point on the canvas by drawing a ray from that point to infinity in any direction and then examining the places where a segment of the shape crosses the ray. Starting with a count of zero, add one each time a path segment crosses the ray from left to right and subtract one each time a path segment crosses the ray from right to left. After counting the crossings, if the result is zero then the point is outside the path. Otherwise, it is inside.
        </p>
        <h3 className="text-xl font-semibold mb-2">evenodd</h3>
        <p className="mb-4">
          This rule determines the "insideness" of a point on the canvas by drawing a ray from that point to infinity in any direction and counting the number of path segments from the given shape that the ray crosses. If this number is odd, the point is inside; if even, the point is outside.
        </p>
      </blockquote>
      <p className="text-sm text-gray-600 mt-6">
        Source: <a href="https://www.w3.org/TR/SVG2/painting.html#WindingRule" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">W3C SVG 2 Specification</a>
      </p>
    </div>
  )
}

export default TechnicalExplanation

