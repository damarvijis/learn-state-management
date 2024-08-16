import React, { useEffect } from "react";
import { Counter } from "@/components";
import { useUnstatedCounter } from "@/stores/unstated";

export function CounterUnstated() {
  const { counter, increment, decrement } = useUnstatedCounter();
  useEffect(() => console.log("CounterUnstated Rerender"))


  return (
    <Counter
      counter={counter}
      onPlusButtonClick={increment}
      onMinusButtonClick={decrement}
    />
  );
}