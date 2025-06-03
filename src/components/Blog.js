import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <section className="min-h-screen bg-[#fdf6f3] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Talks, posts & project reflections
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I’m passionate about business analysis, problem-solving, and building products that make an impact. In this section, I share ideas, tools, and lessons learned from real projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md relative">
            <div className="w-10 h-1 bg-lime-300 rounded-full mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Starting a new project is like starting a new journey            </h2>
            <p className="text-gray-700 mb-6">
                Every new Agile project begins like a journey—with a clear vision, strong relationships, and stakeholder alignment. In this article, I share my personal checklist for starting projects with clarity and purpose, shaped by real-world experience as a Business Analyst.            </p>
            <Link
              to="/blog/easy-checks-accessibility"
              className="inline-block bg-black text-white py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition"
            >
              Read
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
