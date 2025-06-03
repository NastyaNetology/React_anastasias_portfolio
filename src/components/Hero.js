import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from 'C:/Users/kalac/anastasias_portfolio/src/Anastasia.jpg'

export default function Hero() {
  return (
      <section className="min-h-screen flex flex-col justify-center bg-[#fdf6f3] px-6 py-12">
<h1 className="text-5xl text-center font-bold mb-12">
  Business & Data Analyst
</h1>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 items-center gap-12">

          {/* Left Column - Text */}
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Hi, I’m <span className="font-medium">Anastasia Kalacheva</span>. I'm a business analyst and aspiring
              machine learning engineer passionate about building practical, problem-solving applications.
            </p>
            <div className="flex gap-12 mb-8">
              <div>
                <p className="text-lg font-semibold">Currently</p>
                <p className="text-sm text-gray-600">Business Analyst, IT-consulting</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Location</p>
                <p className="text-sm text-gray-600 mb-6">Berlin, Germany</p>
              </div>
            </div>
            <Link
                to="/about"
                className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
            >
              About me
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end">
            <img
                src={profilePic}
                alt="Anastasia Kalacheva"
                className="rounded-[50%] w-72 h-72 object-cover border-4 border-gray-300 shadow-md"
            />
          </div>
        </div>
      </section>
  );
}
