import React from "react";
import { Counter } from "@/components";
import { useSelectorProviderExternal } from "@/lib";
import { storeLib } from "@/stores/my-lib";

export function CounterLib() {
  // @ts-ignore
  const counter = useSelectorProviderExternal((state) => state.counter);
  const { setState } = storeLib

  return (
    <Counter
      counter={counter}
      onPlusButtonClick={() => setState(state => ({ counter: state.counter + 1 }))}
      onMinusButtonClick={() => setState(state => ({ counter: state.counter - 1 }))}
    />
  );
}