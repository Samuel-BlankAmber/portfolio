import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";
import TypingEffect from "../components/TypingEffect";
import MatrixEffect from "../components/MatrixEffect";

export default function Intro() {
  const navigate = useNavigate();
  const [idCompletionStatus, setIdCompletionStatus] = useState<Record<number, boolean>>({});
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const textVisibleTimer = setTimeout(() => {
      setIsTextVisible(true);
    }, 1000);
    const enterTimer = setTimeout(handleEnter, 10_000);
    return () => {
      clearTimeout(textVisibleTimer);
      clearTimeout(enterTimer);
    }
  }, []);

  function handleEnter() {
    setIsFadingOut(true);
    setTimeout(() => {
      navigate("/home", { state: { fromIntro: true } });
    }, 500);
  }

  return (
    <div className={isFadingOut ? "fade-out" : ""}>
      <MatrixEffect />
      {isTextVisible && (
        <div className="text-container">
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
          <button
            style={{ opacity: idCompletionStatus[2] ? 1 : 0 }}
            onClick={handleEnter}
          >
            Enter
          </button>
        </div>
      )}
    </div>
  );
}
