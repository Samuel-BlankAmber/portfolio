import { useState } from "react";
import "./Home.css";
import TrianglifyBackground from "../components/TrianglifyBackground";
import TypingEffect from "../components/TypingEffect";

export default function Home() {
  const [idCompletionStatus, setIdCompletionStatus] = useState<Record<string, boolean>>({});

  return (
    <div>
      <TrianglifyBackground />
      <div className="flex flex-col items-center justify-center min-h-screen text-black">
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
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen text-black bg-gray-500">
        <div className="content-box p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold">Placeholder title</h2>
          <p className="text-xl mt-4">More stuff here.</p>
        </div>
      </div>
    </div>
  );
}
