import React, { useEffect, useRef } from "react";

const MermaidDiagram = () => {
  const ref = useRef();

  const chart = `
    graph TD
      A[Start] --> B[Login]
      B --> C[Search Events]
      C --> D[Register]
      D --> E[Confirmation]
      E --> F[Reminder]
  `;

  useEffect(() => {
    if (window.mermaid && ref.current) {
      // Clear and reset the content
      ref.current.innerHTML = chart;

      // Short delay ensures rendering after tab becomes visible
      setTimeout(() => {
        window.mermaid.init(undefined, ref.current);
      }, 0);
    }
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Activity Diagram</h2>
      <div className="mermaid" ref={ref}></div>
    </div>
  );
};

export default MermaidDiagram;






