import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Home.css";
import TypingEffectOnCondition from "../components/TypingEffectOnCondition";

export default function Home() {
  const location = useLocation();
  const fromIntro = location.state?.fromIntro || false;
  const [idCompletionStatus, setIdCompletionStatus] = useState<Record<string, boolean>>({});

  return (
    <div className="page-container">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <TypingEffectOnCondition
                condition={fromIntro}
                text="Home"
                delay={30}
                id={"home"}
                parentId={null}
                idCompletionStatus={idCompletionStatus}
                setIdCompletionStatus={setIdCompletionStatus}
              />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <TypingEffectOnCondition
                condition={fromIntro}
                text="About"
                delay={30}
                id={"about"}
                parentId={"home"}
                idCompletionStatus={idCompletionStatus}
                setIdCompletionStatus={setIdCompletionStatus}
              />
            </Link>
          </li>
          <li>
            <Link to="/projects">
            <TypingEffectOnCondition
                condition={fromIntro}
                text="Projects"
                delay={30}
                id={"projects"}
                parentId={"about"}
                idCompletionStatus={idCompletionStatus}
                setIdCompletionStatus={setIdCompletionStatus}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="basic-info-container">
        <div className="basic-info-divider">
          <p className="basic-info">
            <TypingEffectOnCondition
              condition={fromIntro}
              text="Name: Samuel"
              delay={50}
              id={"name"}
              parentId={null}
              idCompletionStatus={idCompletionStatus}
              setIdCompletionStatus={setIdCompletionStatus}
            />
          </p>
          <p className="basic-info">
            <TypingEffectOnCondition
              condition={fromIntro}
              text="Age: 19"
              delay={50}
              id={"age"}
              parentId={"name"}
              idCompletionStatus={idCompletionStatus}
              setIdCompletionStatus={setIdCompletionStatus}
            />
          </p>
          <p className="basic-info">
            <TypingEffectOnCondition
              condition={fromIntro}
              text="Role: Software Engineer"
              delay={50}
              id={"role"}
              parentId={"age"}
              idCompletionStatus={idCompletionStatus}
              setIdCompletionStatus={setIdCompletionStatus}
            />
          </p>
        </div>
        <div className="picture-container">
          <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="Samuel" />
        </div>
      </div>
    </div>
  );
}
