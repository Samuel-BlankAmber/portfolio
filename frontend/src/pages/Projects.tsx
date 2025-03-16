import TrianglifyBackground from "../components/TrianglifyBackground";
import NavBar from "../components/NavBar";

import cryptoSongLogo from '../assets/cryptosong.png';
import ecbTux from '../assets/ecb_tux.png';
import charsetGenerator from '../assets/charset-generator.png';
import libraryOfEmoji from '../assets/library-of-emoji.png';

const projects = [
  {
    imgSrc: cryptoSongLogo,
    imgAlt: "CryptoSong",
    title: "CryptoSong",
    description: "A React Native app that encrypts messages using music.",
    repoUrl: "https://github.com/Samuel-BlankAmber/CryptoSong",
  },
  {
    imgSrc: libraryOfEmoji,
    imgAlt: "Library of Emoji",
    title: "Library of Emoji",
    description: "A Library of Babel spin-off for Emojis.",
    repoUrl: "https://github.com/Samuel-BlankAmber/library-of-emoji",
    liveUrl: "https://samuel-blankamber.github.io/library-of-emoji",
  },
  {
    imgSrc: ecbTux,
    imgAlt: "ECB Tux",
    title: "Go ECB Penguin",
    description: "An implementation of the classic ECB Penguin, written in Golang.",
    repoUrl: "https://github.com/Samuel-BlankAmber/ecb-penguin-go",
  },
  {
    imgSrc: charsetGenerator,
    imgAlt: "Charset Generator",
    title: "Charset Generator",
    description: "A PyPI package for bruteforce attacks using freq. analysis and the OpenAI API.",
    repoUrl: "https://github.com/Samuel-BlankAmber/charset-generator",
  },
  {
    imgSrc: "https://placehold.co/10",
    imgAlt: "More coming soon",
    title: "More coming soon...",
    description: "I hope.",
    repoUrl: "https://example.com",
  },
];

for (let i = 0; i < 20; i++) {
  projects.push(projects.slice(-1)[0]);
}

function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <img src={project.imgSrc} alt={project.imgAlt} className="w-full h-48 object-cover rounded-2xl mt-4" />
          <p className="text-gray-600 mt-2">{project.description}</p>
          <div className="mt-4">
            <a href={project.repoUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener">GitHub</a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="ml-4 text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Live
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <TrianglifyBackground />
      <NavBar />
      <div className="mt-15">
        <ProjectsGrid />
      </div>
    </div>
  );
}
