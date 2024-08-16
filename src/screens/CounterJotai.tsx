import React, { useEffect } from "react";
import { Counter } from "@/components";
import { useJotaiCounterAtom } from "@/stores/jotai";

export function CounterJotai() {
  const [counter, setCounter] = useJotaiCounterAtom();
  useEffect(() => console.log("CounterJotai Rerender"))

  
  return (
    <Counter
      counter={counter}
      onPlusButtonClick={() => setCounter((prev) => prev + 1)}
      onMinusButtonClick={() => setCounter((prev) => prev - 1)}
    />
  );
}