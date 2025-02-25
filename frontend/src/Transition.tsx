import "./Transition.css";
import TypingEffect from "./TypingEffect";
import MatrixEffect from "./MatrixEffect";
import { useEffect, useState } from "react";

export default function Transition() {
  const [idCompletionStatus, setIdCompletionStatus] = useState({});
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MatrixEffect />
      {showText && (
        <div>
          <h1>
            <TypingEffect
              text="welcome"
              delay={200}
              id={0}
              parentId={null}
              idCompletionStatus={idCompletionStatus}
              setIdCompletionStatus={setIdCompletionStatus}
            />
          </h1>
          <h2>
            <TypingEffect
              text="this site appears to be under construction..."
              delay={75}
              id={1}
              parentId={0}
              idCompletionStatus={idCompletionStatus}
              setIdCompletionStatus={setIdCompletionStatus}
            />
          </h2>
          <h3>
            <a
              href="https://github.com/Samuel-BlankAmber/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TypingEffect
                text="it's also open source"
                delay={100}
                id={2}
                parentId={1}
                idCompletionStatus={idCompletionStatus}
                setIdCompletionStatus={setIdCompletionStatus}
              />
            </a>
          </h3>
        </div>
      )}
    </>
  );
}
