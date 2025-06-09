// src/components/About.js
import React from 'react';
import profilePic from '../Anastasia.jpg';


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
                    I'm a Business Analyst with a deep love for technology.
                </h2>
                <p className="text-gray-700 mb-4">
                    With over six years of experience in IT, I've developed strong analytical thinking and a
                    problem-solving mindset. I specialize in analyzing business processes, data, and systems — always
                    looking at things from both a technical and strategic perspective. I'm driven by a desire to learn,
                    improve efficiency, and build smart, human-centered solutions.
                </p>
                <p className="text-gray-700 mb-4">
                    That passion led me to earn a degree in Software Engineering in Germany, where I deepened my knowledge of system design and machine learning. I built this site myself using React, simply because I love getting hands-on with code and understanding how things work — from the inside out. I'm especially excited about the potential of AI and automation to shape the future of work.
                </p>

                    <p className="text-gray-700 mb-6">
                    Right now, I’m looking for a team that shares this mindset — curious, thoughtful, and ambitious about using technology to create meaningful change. I also enjoy writing about business analysis, mentoring others, and connecting with people who love solving complex problems and building things that matter.
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
