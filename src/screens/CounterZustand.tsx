import React, { useEffect } from "react";
import { Counter } from "@/components";
import { useCounterStore } from "@/stores/zustand";

export function CounterZustand() {
  const { counter, increment, decrement } = useCounterStore();
  useEffect(() => console.log("CounterZustand Rerender"))

  return (
    <Counter
      counter={counter}
      onPlusButtonClick={increment}
      onMinusButtonClick={decrement}
    />
  );
}