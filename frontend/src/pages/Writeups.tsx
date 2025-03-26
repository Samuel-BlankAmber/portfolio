import TrianglifyBackground from "../components/TrianglifyBackground";
import NavBar from "../components/NavBar";

const writeups = [
  {
    title: "ZeroDays 2025 Writeups",
    description: "Writeups for the ZeroDays CTF in Dublin.",
    url: "https://github.com/Samuel-BlankAmber/zerodays-2025-writeups",
  },
  {
    title: "UK Cyber Team 2024 Teasers",
    description: "Writeups for the teaser challenges for SANS' UK Cyber Team Qualifiers for 2024.",
    url: "https://github.com/Samuel-BlankAmber/uk-cyber-team-2024-teasers",
  },
  {
    title: "More coming soon...",
    description: "Check back later!",
    url: "https://example.com",
  },
];

function WriteupsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {writeups.map((writeup) => (
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md border-white border-4">
          <h2 className="text-xl text-white font-bold">{writeup.title}</h2>
          <p className="text-gray-100 mt-2">{writeup.description}</p>
          <div className="mt-4">
            <a href={writeup.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Writeups() {
  return (
    <div>
      <TrianglifyBackground />
      <NavBar />
      <div className="mt-15">
        <WriteupsGrid />
      </div>
    </div>
  );
}
