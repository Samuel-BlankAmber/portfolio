import "./Transition.css";
import TypingEffect from "./TypingEffect";
import MatrixEffect from "./MatrixEffect";
import { useEffect, useState } from "react";

export default function Transition() {
  const [idCompletionStatus, setIdCompletionStatus] = useState<Record<number, boolean>>({});
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MatrixEffect />
      {isTextVisible && (
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
              text="looks like it's your first time visiting my site"
              delay={60}
              id={1}
              parentId={0}
              idCompletionStatus={idCompletionStatus}
              setIdCompletionStatus={setIdCompletionStatus}
            />
          </h2>
          <h3>
            <TypingEffect
              text="made by Samuel"
              delay={100}
              id={2}
              parentId={1}
              idCompletionStatus={idCompletionStatus}
              setIdCompletionStatus={setIdCompletionStatus}
            />
          </h3>
          <button style={{ opacity: idCompletionStatus[2] ? 1 : 0 }}>
            Enter
          </button>
        </div>
      )}
    </>
  );
}
