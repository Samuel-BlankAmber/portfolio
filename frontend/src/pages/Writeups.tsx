import TrianglifyBackground from "../components/TrianglifyBackground";
import NavBar from "../components/NavBar";

const writeups = [
  {
    title: "UK Cyber Team 2024 Teasers",
    description: "Writeups for the teaser challenges for SANS' UK Cyber Team Qualifiers for 2024.",
    url: "https://github.com/Samuel-BlankAmber/uk-cyber-team-2024-teasers",
  },
  {
    title: "More coming soon...",
    description: "I hope.",
    url: "https://example.com",
  },
];

for (let i = 0; i < 20; i++) {
  writeups.push(writeups.slice(-1)[0]);
}

function WriteupsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {writeups.map((writeup) => (
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold">{writeup.title}</h2>
          <p className="text-gray-600 mt-2">{writeup.description}</p>
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
