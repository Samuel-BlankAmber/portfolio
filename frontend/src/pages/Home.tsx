import { useState } from "react";
import "./Home.css";
import TrianglifyBackground from "../components/TrianglifyBackground";
import TypingEffect from "../components/TypingEffect";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  const [idCompletionStatus, setIdCompletionStatus] = useState<Record<string, boolean>>({});

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>
      <TrianglifyBackground />
      <div className="flex flex-col items-center justify-center min-h-dvh text-black">
        <div className="intro-box bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
          <h1 className="text-4xl font-bold">
            Hey, I'm&nbsp;
            <a
              href="https://www.linkedin.com/in/samuel-bhuiyan-532826248/"
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
            href="https://github.com/Samuel-BlankAmber/portfolio"
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
      <div className="absolute bottom-0 left-0 m-4 flex space-x-4">
        <a
          href="https://www.linkedin.com/in/samuel-bhuiyan-532826248/"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <div id="aboutme" className="flex flex-col items-center justify-center min-h-screen text-black bg-white">
        <div className="content-box p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold">About me</h2>
          <p className="text-xl mt-4">Placeholder</p>
        </div>
      </div>
    </div>
  );
}
