import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#fdf6f3] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Projects</h1>

        {/* Grid: 2 columns on medium+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Column 1: Python + Business Analysis Projects */}
          <div>
            {/* Python Projects */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Python Projects</h2>
              <div className="w-16 h-2 bg-lime-300 rounded-full mb-4"></div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <a
                    href="https://github.com/NastyaNetology/Medical-No-Show-Prediction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    Medical Appointment No-Show Prediction
                  </a>
                </li>
                  <li>
                    <span className="text-gray-400 cursor-not-allowed">
                      Forecasting Patient Volume Dashboard (Coming Soon)
                    </span>
                  </li>
              </ul>
            </div>

            {/* Business Analysis Projects */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Business Analysis Projects</h2>
              <div className="w-16 h-2 bg-lime-300 rounded-full mb-4"></div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <Link
                    to="/projects/web-app-events"
                    className="text-blue-700 hover:underline"
                  >
                    Web Application Advertising Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: SQL Projects + System analysis (в одном блоке) */}
<div>
  {/* SQL Projects */}
  <div className="mb-10">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">SQL Projects</h2>
    <div className="w-16 h-2 bg-lime-300 rounded-full mb-4"></div>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>
        <a
          href="https://github.com/NastyaNetology/ShopEasy_E-commerce_SQL_Analysis/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          ShopEasy E-commerce SQL Analysis
        </a>
      </li>
      <li>
        <span className="text-gray-400 cursor-not-allowed">
          KPI Dashboard using SQL & Excel (Coming Soon)
        </span>
      </li>
    </ul>
  </div>

  {/* System Analysis */}
  <div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">System Analysis</h2>
    <div className="w-16 h-2 bg-lime-300 rounded-full mb-4"></div>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>
        <Link
          to="/projects/currency"
          className="text-blue-700 hover:underline"
        >
          Currency API Integration
        </Link>
      </li>
    </ul>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}
