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
      <p>
        {fromIntro ? (
          <TypingEffect
            text="Name: Samuel"
            delay={200}
            id={0}
            parentId={null}
            idCompletionStatus={idCompletionStatus}
            setIdCompletionStatus={setIdCompletionStatus}
          />
        ) : (
          "Home"
        )}
      </p>
    </div>
  );
}
