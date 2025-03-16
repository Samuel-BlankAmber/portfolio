import "./Home.css";
import TrianglifyBackground from "../components/TrianglifyBackground";
import TypingEffect from "../components/TypingEffect";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import mePhoto from "../assets/me.png";
import cryptoSongLogo from '../assets/cryptosong.png';
import ecbTux from '../assets/ecb_tux.png';
import charsetGenerator from '../assets/charset-generator.png';
import libraryOfEmoji from '../assets/library-of-emoji.png';
import { NavBar } from "../components/NavBar";

const LINKEDIN_URL = "https://www.linkedin.com/in/samuel-bhuiyan";
const GITHUB_PROFILE_URL = "https://github.com/Samuel-BlankAmber";
const GITHUB_REPO_URL = "https://github.com/Samuel-BlankAmber/portfolio";
const EMAIL = "me@samuelb.dev";

const CRYPTOSONG_REPO_URL = "https://github.com/Samuel-BlankAmber/CryptoSong";
const ECB_PENGUIN_REPO_URL = "https://github.com/Samuel-BlankAmber/ecb-penguin-go";
const CHARSET_GENERATOR_REPO_URL = "https://github.com/Samuel-BlankAmber/charset-generator";
const LIBRARY_OF_EMOJI_REPO_URL = "https://github.com/Samuel-BlankAmber/library-of-emoji";
const LIBRARY_OF_EMOJI_LIVE_URL = "https://samuel-blankamber.github.io/library-of-emoji";

const navLinks = [
  { href: "#projects", text: "Projects" },
  { href: "#writeups", text: "Writeups" },
  { href: "#contact", text: "Contact" },
];

const introSectionTypingText = [
  "I write code.",
  "I make websites.",
  "I play CTFs.",
  "I love cryptography.",
];

const introSectionTypingTextDelayBetweenChar = 100;
const introSectionTypingTextDelayBetweenStateChange = 2500;

const featuredProjects = [
  {
    imgSrc: cryptoSongLogo,
    imgAlt: "CryptoSong",
    title: "CryptoSong",
    description: "A React Native app that encrypts messages using music.",
    repoUrl: CRYPTOSONG_REPO_URL,
  },
  {
    imgSrc: libraryOfEmoji,
    imgAlt: "Library of Emoji",
    title: "Library of Emoji",
    description: "A Library of Babel spin-off for Emojis.",
    repoUrl: LIBRARY_OF_EMOJI_REPO_URL,
    liveUrl: LIBRARY_OF_EMOJI_LIVE_URL,
  },
  {
    imgSrc: ecbTux,
    imgAlt: "ECB Tux",
    title: "Go ECB Penguin",
    description: "An implementation of the classic ECB Penguin, written in Golang.",
    repoUrl: ECB_PENGUIN_REPO_URL,
  },
  {
    imgSrc: charsetGenerator,
    imgAlt: "Charset Generator",
    title: "Charset Generator",
    description: "A PyPI package for bruteforce attacks using freq. analysis and the OpenAI API.",
    repoUrl: CHARSET_GENERATOR_REPO_URL,
  },
];

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", `#${sectionId}`);
  }
}

function IntroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-dvh text-black">
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
        <p className="text-2xl mt-4 font-mono text-left">
          <TypingEffect
            texts={introSectionTypingText}
            delayBetweenChar={introSectionTypingTextDelayBetweenChar}
            delayBetweenStateChange={introSectionTypingTextDelayBetweenStateChange}
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
      <button onClick={() => scrollToSection("overview")} className="styled-button">
        Learn More
      </button>
    </section>
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

function OverviewSection() {
  return (
    <section id="overview" className="flex flex-col items-center min-h-dvh p-10">
      <div className="flex-1 flex flex-col md:flex-row items-center justify-between text-center gap-10">
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold mt-12 md:mt-0">Welcome!</h1>
          <p className="text-xl mt-4 text-gray-700">
            I'm a <span className="font-semibold">software engineer</span> from the <span className="font-semibold">UK</span> passionate about building (breaking) things and learning new technologies.
            <br />
            Here, you'll find a collection of my <a href="#projects" className="font-semibold text-blue-500 hover:underline">projects</a>, <a href="#writeups" className="font-semibold text-blue-500 hover:underline">writeups</a>, and other fun stuff.
            I'm always looking for opportunities to grow, so feel free to <a href="#contact" className="font-semibold text-blue-500 hover:underline">reach out</a>!
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            id="selfie"
            src={mePhoto}
            alt="Profile Picture"
            className="rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.6)] border-white border-4 w-75 h-75 mb-6"
          />
          <div className="flex gap-4 text-2xl font-medium">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-400 hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              <FaLinkedin className="text-blue-600" />
              LinkedIn
            </a>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-400 hover:border-gray-900 hover:text-gray-900 transition duration-300"
            >
              <FaGithub className="text-gray-900" />
              GitHub
            </a>
          </div>
        </div>
        <div className="flex-1 space-y-6 text-center">
          <h1 className="text-4xl font-bold pb-2">Recent</h1>
          <div className="space-y-2 text-lg text-gray-700">
            <p>🥉 Came <span className="font-semibold">3rd</span> at the Global C2C CTF qualifiers</p>
            <p>🛠️ Ran the <span className="font-semibold">BSides Galway CTF</span></p>
            <p>🔒 Developed <span className="font-semibold">CryptoSong</span></p>
            <p>🏆 Came <span className="font-semibold">1st</span> in the 2025 Instil CTF</p>
            <p>🖌️ Made this site</p>
          </div>
          <h1 className="text-4xl font-bold pb-2">Upcoming</h1>
          <div className="space-y-2 text-lg text-gray-700">
            <p>🎯 Playing in the <span className="font-semibold">ZeroDays CTF</span></p>
            <p>🔥 Competing in the <span className="font-semibold">C2C CTF Finals</span></p>
            <p>💻 Working on (secret) <span className="font-semibold">tooling</span></p>
          </div>
        </div>
      </div>
      <button onClick={() => scrollToSection("featured")} className="hidden md:block">
        <IoIosArrowDown className="text-4xl text-gray-500 animate-bounce cursor-pointer hover:text-blue-500 transition-colors duration-300" />
      </button>
    </section>
  );
}

function FeaturedSection() {
  return (
    <section id="featured" className="min-h-dvh">
      <div className="flex flex-col min-h-dvh pt-15 px-10 pb-5 md:pt-20 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-10 mb:mb-5">Featured Projects</h1>
        <div className="flex-1 grid md:grid-cols-2 gap-5 mb-10">
          {featuredProjects.map((project, index) => (
            <div key={index} className="shadow-lg relative border-white border-4 rounded-xl">
              <div className="w-full h-64 md:h-full">
                <img
                  src={project.imgSrc}
                  alt={project.imgAlt}
                  className="md:absolute w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center text-center bg-black/70 rounded-lg p-6">
                <h2 className="text-white text-4xl font-bold drop-shadow-md mb-3">{project.title}</h2>
                <p className="text-white text-lg drop-shadow-md">{project.description}</p>
                <a
                  href={project.liveUrl || project.repoUrl}
                  className="mt-3 text-blue-400 hover:text-blue-300 hover:underline font-semibold text-lg drop-shadow-md"
                  target="_blank"
                  rel="noopener"
                >
                  {project.liveUrl ? "View Live" : "View on GitHub"}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex justify-center">
          <button onClick={() => scrollToSection("contact")}>
            <IoIosArrowDown className="text-4xl text-gray-500 animate-bounce cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="min-h-dvh flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-5">Contact</h1>
      <h2 className="text-4xl">
        You can email me at&nbsp;
        <a href={`mailto:${EMAIL}`} className="font-semibold text-blue-500 hover:underline">{EMAIL}</a>
        .
      </h2>
      <p className="text-2xl mt-5 text-center">
        Alternatively, you can reach out to me on&nbsp;
        <a href={LINKEDIN_URL} className="font-semibold text-blue-500 hover:underline">LinkedIn</a>
        &nbsp;or&nbsp;
        <a href={GITHUB_PROFILE_URL} className="font-semibold text-blue-500 hover:underline">GitHub</a>
        .
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <TrianglifyBackground />
      <NavBar navLinks={navLinks} />
      <IntroSection />
      <SocialMediaLinks />
      <OverviewSection />
      <FeaturedSection />
      <ContactSection />
    </div>
  );
}
