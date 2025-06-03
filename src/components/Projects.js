// src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';



export default function Projects() {
  return (
    <section className="min-h-screen bg-[#fdf6f3] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Projects</h1>

        <div className="grid md:grid-cols-2 gap-12">
{/* Left Column: Python Projects */}
<div>
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
      <Link
        to="/projects/forecast"
        className="text-blue-700 hover:underline"
      >
        Forecasting Patient Volume Dashboard
      </Link>
    </li>
  </ul>
</div>

          {/* Right Column: SQL Projects */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">SQL Projects</h2>
            <div className="w-16 h-2 bg-lime-300 rounded-full mb-4"></div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-700 hover:underline"
                >
                  Patient Retention Analysis with SQL
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-700 hover:underline"
                >
                  KPI Dashboard using SQL & Excel
                </a>
              </li>
            </ul>
          </div>
         {/* NEW: Business Analysis Projects */}
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
      </div>
    </section>
  );
}