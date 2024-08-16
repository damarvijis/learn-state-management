import React, { useEffect } from "react";
import { Counter } from "@/components";
import { useContextLearn } from "@/stores/context";

export type CounterContextProps = {};

export function CounterContext() {
  const { counter, setCounter } = useContextLearn();

  useEffect(() => console.log("CounterContext Rerender"))

  return (
    <Counter
      counter={counter}
      onPlusButtonClick={() => setCounter(counter + 1)}
      onMinusButtonClick={() => setCounter(counter - 1)}
    />
  );
}