import './TypingEffect.css';
import { useEffect, useState } from 'react';

export interface TypingEffectProps {
  texts: string[];
  delayBetweenChar: number;
  delayBetweenText: number;
}

export default function TypingEffect({ texts, delayBetweenChar, delayBetweenText }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayedText(texts[currentTextIndex].slice(0, charIndex + (isDeleting ? 0 : 1)));
      const newIndex = charIndex + (isDeleting ? -1 : 1);
      if (newIndex < 0 || newIndex > texts[currentTextIndex].length) return;
      setCharIndex(newIndex);
      if (newIndex === texts[currentTextIndex].length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenText / 2);
      } else if (newIndex === 0) {
        setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, delayBetweenText / 2);
      }
    }, delayBetweenChar);
  }, [charIndex, isDeleting]);

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
