import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import TypingEffect from "../components/TypingEffect";

export default function Home() {
  const location = useLocation();
  const fromIntro = location.state?.fromIntro || false;
  const [idCompletionStatus, setIdCompletionStatus] = useState<Record<number, boolean>>({});

  return (
    <div className="page-container">
      <h1>
        {fromIntro ? (
          <TypingEffect
            text="Name"
            delay={200}
            id={0}
            parentId={null}
            idCompletionStatus={idCompletionStatus}
            setIdCompletionStatus={setIdCompletionStatus}
          />
        ) : (
          "Home"
        )}
      </h1>
    </div>
  );
}
