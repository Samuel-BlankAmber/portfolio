import './TypingEffect.css';
import { useEffect, useRef, useState } from 'react';

interface TypingEffectProps {
  text: string;
  delay: number;
  id: number;
  parentId: number | null;
  idCompletionStatus: Record<number, boolean>;
  setIdCompletionStatus: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}

export default function TypingEffect({ text, delay, id, parentId, idCompletionStatus, setIdCompletionStatus }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const effectStarted = useRef(false);

  useEffect(() => {
    if (parentId !== null && !idCompletionStatus[parentId] || idCompletionStatus[id]) {
      return;
    }
    if (effectStarted.current) {
      return;
    }
    effectStarted.current = true;
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
        setIdCompletionStatus((prev) => ({ ...prev, [id]: true }));
      }
    }, delay);
  }, [idCompletionStatus]);

  const spans = [];
  for (let i = 0; i < text.length; i++) {
    if (i == displayedText.length && (parentId === null || idCompletionStatus[parentId])) {
      spans.push(<span key={i} className="blinking-cursor">|</span>);
    } else if (i < displayedText.length) {
      spans.push(<span key={i}>{displayedText[i]}</span>);
    } else {
      spans.push(<span key={i}>{"\u00a0"}</span>);
    }
  }
  return spans;
}
