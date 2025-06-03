// src/components/About.js
import React from 'react';
import profilePic from 'C:/Users/kalac/anastasias_portfolio/src/Anastasia.jpg'


export default function About() {
  return (
    <section className="min-h-screen bg-[#fdf6f3] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">I'm Anastasia Kalacheva</h1>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    I'm a Business Analyst with hands-on experience in software engineering and machine learning
                </h2>
                <p className="text-gray-700 mb-4">
                    I built this site myself using React. I'm driven by curiosity and a strong desire to learn and grow.
                    Whenever I take on a task, I like to break it down into small, understandable parts so I can fully
                    grasp how everything works — both on the surface and under the hood
                </p>
                <p className="text-gray-700 mb-6">
                    I'm looking to join a project and a team that shares my mindset — using technology to push the
                    boundaries of what's possible and create meaningful impact for the future.
                    I also enjoy writing about Business Analysis, mentoring others, and building connections through
                    networking.
                </p>
                <a
                    href="/Business Analyst_A Kalacheva_CV.pdf"
                    download
                    className="inline-block bg-black text-white py-2 px-4 rounded-full text-sm hover:bg-gray-800 transition"
                >
                    Download CV
                </a>
            </div>

            <div>
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-auto rounded-[2rem] object-cover"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
