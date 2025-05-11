import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


const History = () => {
  return (
    <div className="px-6 py-10 md:px-20 bg-[#f1f1f0] text-gray-600 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">History</h1>
      <p className="mb-10 max-w-3xl">
      <b>Our Story</b> <br /> <br />
It all started with a simple question — <b>"What if a regular phone call could prevent a medical emergency?"</b> <br />


Every day, thousands of patient–nurse conversations happen, and hidden within those calls could be early signs of serious health issues. Yet, these cues often go unnoticed — until it’s too late. <br />

That realization sparked our mission:
To build an AI-powered system that listens to medical conversations and predicts adverse events before they happen. <br />

Backed by real adverse event data and driven by purpose, we combined data science, healthcare insight, and voice analytics to create a tool that turns everyday conversations into actionable warnings — helping healthcare providers intervene early and save lives. <br />

What began as a hackathon idea has grown into a solution with real-world potential. <br />
Because in healthcare, timing is everything — and every second counts. </p>

    </div>
  );
};

export default History;
