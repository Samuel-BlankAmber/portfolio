import { useState } from "react";
import "./Home.css";
import TrianglifyBackground from "../components/TrianglifyBackground";
import TypingEffect from "../components/TypingEffect";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";

const LINKEDIN_URL = "https://www.linkedin.com/in/samuel-bhuiyan-532826248";
const GITHUB_PROFILE_URL = "https://github.com/Samuel-BlankAmber";
const GITHUB_REPO_URL = "https://github.com/Samuel-BlankAmber/portfolio";

interface MobileNavBarProps {
  isOpen: boolean;
  toggleMobileNav: () => void;
}

function MobileNavBar({ isOpen, toggleMobileNav }: MobileNavBarProps) {
  return (
    <div className={`mobile-navbar fixed top-0 right-0 w-screen h-screen z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex justify-end p-4">
        <button onClick={toggleMobileNav} className="text-2xl">
          <FaTimes />
        </button>
      </div>
      <ul className="flex flex-col items-center space-y-6 mt-10">
        <li>
          <a href="#aboutme" onClick={toggleMobileNav}>About Me</a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMobileNav}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMobileNav}>Contact</a>
        </li>
      </ul>
    </div>
  );
}

function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function toggleMobileNav() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md p-4 flex justify-between items-center shadow-md z-50">
      <div className="flex items-center space-x-2">
        <a href="#" className="logo text-2xl font-bold">SB</a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMobileNav} className="text-2xl">
          <FaBars />
        </button>
      </div>
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#aboutme" className="hover:text-blue-500 transition-colors duration-300">About Me</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a>
        </li>
      </ul>
      <MobileNavBar isOpen={isMobileNavOpen} toggleMobileNav={toggleMobileNav} />
    </nav>
  );
}

function IntroSection() {
  const [idCompletionStatus, setIdCompletionStatus] = useState<Record<string, boolean>>({});

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-dvh text-black">
      <div className="intro-box bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold">
          Hey, I'm&nbsp;
          <a
            href={LINKEDIN_URL}
            className="clickable-text"
            target="_blank"
            rel="noopener"
          >
            Samuel
          </a>
          .
        </h1>
        <p className="text-2xl mt-4 font-mono">
          <TypingEffect
            text="I write code."
            delay={100}
            id="i-do-stuff"
            parentId={null}
            idCompletionStatus={idCompletionStatus}
            setIdCompletionStatus={setIdCompletionStatus}
          />
        </p>
      </div>
      <p className="my-4 text-2xl font-semibold">
        This site is&nbsp;
        <a
          href={GITHUB_REPO_URL}
          className="clickable-text"
          target="_blank"
          rel="noopener"
        >
          open source
        </a>
      </p>
      <button onClick={() => scrollToSection("aboutme")}>
        Learn More
      </button>
    </div>
  );
}

function SocialMediaLinks() {
  return (
    <div className="absolute bottom-0 left-0 m-4 flex space-x-4">
      <a
        href="https://www.linkedin.com/in/samuel-bhuiyan-532826248/"
        target="_blank"
        rel="noopener"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href={GITHUB_PROFILE_URL}
        target="_blank"
        rel="noopener"
      >
        <FaGithub size={30} />
      </a>
    </div>
  );
}

function AboutMeSection() {
  return (
    <div id="aboutme" className="flex flex-col items-center justify-center h-dvh text-black bg-white">
      <div className="content-box p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold">About me</h2>
        <p className="text-xl mt-4">Placeholder</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <TrianglifyBackground />
      <NavBar />
      <IntroSection />
      <SocialMediaLinks />
      <AboutMeSection />
    </div>
  );
}
