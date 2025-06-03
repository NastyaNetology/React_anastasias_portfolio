import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

const Profile = () => {
  const [rating, setRating] = useState(4.5); // default rating

  return (
    <section id="profile" className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="Anastasia.jpg"
          alt="Anastasia"
          className="mx-auto rounded-full w-40 h-40 mb-4 shadow-lg object-cover"
        />
        {/* Clickable rating */}
        <div className="mb-4">
          <Rating
            name="user-rating"
            value={rating}
            precision={0.5}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </div>

        <h2 className="text-3xl font-bold mb-2">Hi, I'm Anastasia</h2>
        <p className="text-lg mb-6 text-gray-700">
          I'm a data analyst and aspiring frontend developer with a passion for turning data into clear, actionable insights and visualizations. I'm currently working on healthcare forecasting and building interactive dashboards in React.
        </p>

        <div className="text-left max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">💡 Skills & Tools</h3>
          <ul className="list-disc list-inside text-gray-800">
            <li>Python (Pandas, Matplotlib, Scikit-learn)</li>
            <li>React & JavaScript (basic)</li>
            <li>SQL & Excel</li>
            <li>Machine Learning Fundamentals</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* CV download */}
        <a
          href="Business Analyst_A Kalacheva_CV.pdf"
          download
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          📄 Download CV
        </a>
      </div>
    </section>
  );
};

export default Profile;

