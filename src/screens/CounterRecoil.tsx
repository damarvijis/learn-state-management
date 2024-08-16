import React, { useEffect } from "react";
import { Counter } from "@/components";
import { useRecoilCounterState } from "@/stores/recoil";

export function CounterRecoil() {
  const [counter, setCounter] = useRecoilCounterState();
  useEffect(() => console.log("CounterRecoil Rerender"))

  return (
    <Counter
      counter={counter}
      onPlusButtonClick={() => setCounter((prev) => prev + 1)}
      onMinusButtonClick={() => setCounter((prev) => prev - 1)}
    />
  );
}