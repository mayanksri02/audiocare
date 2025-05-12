import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import homeLogo from "../../../assets/home.svg";
import aboutLogo from "../../../assets/about.svg";
import datasetLogo from "../../../assets/dataset.svg";
import historyLogo from "../../../assets/history.svg";
import audiocare from "../../../assets/AudioCare.png";
import upload from "../../../assets/upload.svg";
import About from "../About/About"; // adjust path as needed
import History from "../History/History";

const Hero = () => {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row font-sans overflow-hidden">
      {/* Top Navbar for small screens */}
      <div className="md:hidden w-full bg-white p-4 flex justify-between items-center shadow-md">
        <img src={audiocare} alt="AudioCare" className="" />
        <div className="flex gap-4">
          <NavLink to="/home" className={({ isActive }) => `flex items-center ${isActive ? "text-blue-600" : "text-gray-500"}`}>
            <img src={homeLogo} className="h-6" alt="Home" />
          </NavLink>
          <a href="/dataset.pdf" download className="text-gray-500 hover:text-blue-600">
            <img src={datasetLogo} className="h-6" alt="Dataset" />
          </a>
          <NavLink to="/about" className={({ isActive }) => `flex items-center ${isActive ? "text-blue-600" : "text-gray-500"}`}>
            <img src={aboutLogo} className="h-6" alt="About" />
          </NavLink>
          <NavLink to="/history" className={({ isActive }) => `flex items-center ${isActive ? "text-blue-600" : "text-gray-500"}`}>
            <img src={historyLogo} className="h-6" alt="History" />
          </NavLink>
        </div>
      </div>

      {/* Sidebar for medium and up */}
      <div className="hidden md:flex w-[15%] bg-white flex-col gap-[80px] p-6">
        <div className="flex items-center gap-3">
          <img src={audiocare} alt="AudioCare" />
        </div>
        <div className="flex flex-col gap-8">
          <NavLink to="/home" className={({ isActive }) => `flex items-center gap-3 ${isActive ? "text-blue-600" : "text-gray-500"}`}>
            <img src={homeLogo} />
            <h3 className="text-2xl">Home</h3>
          </NavLink>
          <a href="/dataset.zip" download className="flex items-center gap-3 text-gray-500 hover:text-blue-600">
            <img src={datasetLogo} />
            <h3 className="text-2xl">Dataset</h3>
          </a>
          <NavLink to="/about" className={({ isActive }) => `flex items-center gap-3 ${isActive ? "text-blue-600" : "text-gray-500"}`}>
            <img src={aboutLogo} />
            <h3 className="text-2xl">About</h3>
          </NavLink>
          <NavLink to="/history" className={({ isActive }) => `flex items-center gap-3 ${isActive ? "text-blue-600" : "text-gray-500"}`}>
            <img src={historyLogo} />
            <h3 className="text-2xl">History</h3>
          </NavLink>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#f1f1f0] flex flex-col items-center justify-center text-center px-4 md:px-10 overflow-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          
        </Routes>
      </div>
    </div>
  );
};

// Homepage content inside Hero
const HomePage = () => {
  const handlePredictClick = () => {
    // Redirect to Gradio interface 
    window.location.href = 'https://palakgupta0421-audio-care.hf.space';
  };

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 md:mb-10">
        Welcome to AudioCare !
      </h1>
      <h7 className="text-xl md:text-xl font-bold text-[#808093] mb-6 md:mb-10">
        AudioCare - We listen with Care
      </h7>
      {/* <div className="my-[50px] bg-white p-4 md:p-6 w-full max-w-[600px] h-[250px] rounded-lg shadow-md relative text-left">
        <textarea
          placeholder="Type the conversation .............."
          className="w-full h-40 p-4 border border-gray-300 rounded-md resize-none focus:outline-none"
        />
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <input type="file" id="audioUpload" className="hidden" />
          <label
            htmlFor="audioUpload"
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded shadow-sm cursor-pointer text-sm flex gap-2"
          >
            <img src={upload} alt="Upload Icon" className="h-4 w-4" />
            Upload
          </label>
          <span className="text-xl text-gray-300">...</span>
        </div>
      </div> */}
      <button
        onClick={handlePredictClick}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-[#6b4fcc]"
      >
        Solution
      </button>
    </>
  );
};

export default Hero;
