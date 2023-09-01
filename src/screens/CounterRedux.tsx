import React from "react";
import { Counter } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "@/stores/redux";

export function CounterRedux() {
  // @ts-ignore
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <Counter
      counter={counter}
      onPlusButtonClick={() => dispatch(counterSlice.actions.increment())}
      onMinusButtonClick={() => dispatch(counterSlice.actions.decrement())}
    />
  );
}