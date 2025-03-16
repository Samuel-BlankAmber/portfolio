import './TypingEffect.css';
import { useEffect, useState } from 'react';

export interface TypingEffectProps {
  texts: string[];
  delayBetweenChar: number;
  delayBetweenStateChange: number;
}

enum State {
  TYPING,
  DELETING,
}

export default function TypingEffect({ texts, delayBetweenChar, delayBetweenStateChange }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [state, setState] = useState(State.TYPING);

  useEffect(() => {
    setTimeout(() => {
      setDisplayedText(texts[currentTextIndex].slice(0, charIndex + (state == State.TYPING ? 1 : 0)));
      const newIndex = charIndex + (state == State.TYPING ? 1 : -1);
      if (newIndex < 0 || newIndex > texts[currentTextIndex].length) return;

      setCharIndex(newIndex);

      if (newIndex === texts[currentTextIndex].length) {
        setTimeout(() => {
          setState(State.DELETING);
        }, delayBetweenStateChange);
      } else if (newIndex === 0) {
        setTimeout(() => {
          setState(State.TYPING);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, delayBetweenStateChange);
      }
    }, delayBetweenChar);
  }, [charIndex, state]);

  const spans = [];
  for (let i = 0; i < texts[currentTextIndex].length + 1; i++) {
    if (i == displayedText.length) {
      spans.push(<span key={i} className="blinking-caret">|</span>);
    } else if (i < displayedText.length) {
      spans.push(<span key={i}>{displayedText[i]}</span>);
    } else {
      spans.push(<span key={i}>{"\u00a0"}</span>);
    }
  }

  return spans;
}
