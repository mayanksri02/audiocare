import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import utkarsh from "../../../assets/utkarsh.png";
import vandana from "../../../assets/vandana.png";
import mayank from "../../../assets/mayank.png";
import palak from "../../../assets/vandana.png"; // Ensure this file exists

const team = [
  {
    name: "Utkarsh Sharma",
    role: "UI/UX Designer",
    image: utkarsh,
    github: "https://github.com/utkarshsharma",
    linkedin: "https://linkedin.com/in/utkarshsharma",
    email: "mailto:utkarshsharma@example.com",
  },
  {
    name: "Vandana Gupta",
    role: "Data Analyst",
    image: vandana,
    github: "https://github.com/vandanagupta",
    linkedin: "https://linkedin.com/in/vandanagupta",
    email: "mailto:vandanagupta@example.com",
  },
  {
    name: "Mayank Srivastava",
    role: "Mern Developer",
    image: mayank,
    github: "https://github.com/mayanksrivastava",
    linkedin: "https://linkedin.com/in/mayanksrivastava",
    email: "mailto:mayanksrivastava@example.com",
  },
  {
    name: "Palak Gupta",
    role: "Mern Developer",
    image: palak,
    github: "https://github.com/palakgupta",
    linkedin: "https://linkedin.com/in/palakgupta",
    email: "mailto:palakgupta@example.com",
  },
];

const About = () => {
  return (
    <div className="px-6 py-10 md:px-20 bg-[#f1f1f0] text-gray-600 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">AudioCare</h1>
      <p className="mb-10 max-w-3xl">
       <b>🩺 "Listening Beyond Words — Predicting Medical Risks Before They Happen."</b> <br />

We are a team of innovators using AI to detect early signs of adverse medical events from real patient–nurse phone conversations. Our solution analyzes recorded dialogues, identifies hidden risk patterns, and flags potential threats — enabling faster response, better care, and safer outcomes. <br /><br />

Built with real-world data, powered by machine learning, and driven by purpose — we turn everyday conversations into life-saving insights.
      </p>

      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{member.role}</p>
            <div className="flex gap-4 justify-center text-lg text-gray-600">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-black" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-600" />
              </a>
              <a href={member.email}>
                <FaEnvelope className="hover:text-red-500" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
