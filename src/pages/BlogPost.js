import React from 'react';

export default function BlogPost() {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="bg-[#fdf6f3] min-h-screen px-6 py-16 text-gray-900">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-between text-sm text-gray-600">
          <span>{today}</span>
        </div>


        {/* Title */}
        <h1 className="text-4xl font-bold">Starting a new project is like starting a new journey</h1>

        {/* Intro Paragraph */}
        <p>
          Throughout my journey as an Agile Business Analyst, I've had the chance to work on many different projects,
          each with its own challenges and lessons to learn. I’ve narrowed down my experiences into key checkpoint items
          that I use as my traveling guide whenever I start a new Agile project. These checkpoint items, shaped by years
          of real-world experience, have always helped me work better, deliver stronger results, and understand the
          details of each project more clearly.
        </p>

        {/* Subheading */}
        <h2 className="text-2xl font-semibold mt-8">Check-list of Agile Business Analyst</h2>

        {/* List Section */}
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Understand the Project Vision.</li>
          <li>Get to Know the Team.</li>
          <li>Identify and Connect with Stakeholders.</li>
        </ul>

        {/* Subsection */}
        <h3 className="text-xl font-semibold mt-6">First, Understand the Project Vision</h3>
        <p>
          Every project is just one part of a company's bigger plan. Take time to understand the overall business
          strategy. Try to see the bigger picture and identify the company's goals. Every project starts with a
          reason—maybe it is a problem that needs to be solved or an opportunity that would be good to catch. Find out
          what that reason is. If you know the main goal, it helps you keep the team focused on the real plan
          throughout your long and exciting journey, leading to valuable results.
        </p>
        <p>
          The results of this work should explain the "what" and the "why" we are going to do, and the backlog—your
          map—tells the story of "how."
        </p>

        {/* Subsection */}
        <h3 className="text-xl font-semibold mt-6">The next step: Get to Know the Team</h3>
        <p>
          Most projects start with an external environment and they don't focus on the people they work with. But I
          think it's a big mistake. In any project, especially in Agile, strong relationships between team members are
          key to success. Learn what your colleagues do, what they care about, and any challenges they face.
        </p>
        <p>
          When you understand the people behind the roles, working together becomes easier and more effective. And you
          can become the most helpful and professional person in this team. Knowing the people is like being the captain
          of the ship in your journey along the project.
        </p>

        {/* Subsection */}
        <h3 className="text-xl font-semibold mt-6">Identify and Connect with Stakeholders</h3>
        <p>
          This is like entering a new city in your journey — full of people, places, and moving parts. In this city,
          stakeholders are key landmarks. Their needs, ideas, and concerns shape the direction of the project. As an
          Agile Business Analyst, staying connected with these people is critical to the project's success.
        </p>
        <p>
          You never reach the final step successfully if you don't have these:
        </p>

        {/* Corrected List */}
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Include everyone who influences or is affected by the project, from executives to end users.</li>
          <li>Once you've got your list, stakeholders can be ranked based on their influence and interest in the project.</li>
          <li>Make sure no one important is left out, which helps create a complete requirements list with correct priorities.</li>
        </ul>

        <p>
          I strongly believe that learning from others and sharing what we know is how we all get better together. I hope my checkpoints help you on your journey, and I would also be happy to know what steps guide you in your Agile projects.        </p>
      </div>
    </section>
  );
}

