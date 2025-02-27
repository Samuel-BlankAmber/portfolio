import TypingEffect, { TypingEffectProps } from "./TypingEffect";

interface TypingEffectOnConditionProps extends TypingEffectProps {
  condition: boolean;
}

export default function TypingEffectOnCondition({ condition, text, delay, id, parentId, idCompletionStatus, setIdCompletionStatus }: TypingEffectOnConditionProps) {
  return condition ? (
    <TypingEffect
      text={text}
      delay={delay}
      id={id}
      parentId={parentId}
      idCompletionStatus={idCompletionStatus}
      setIdCompletionStatus={setIdCompletionStatus}
    />
  ) : (
    text
  );
}