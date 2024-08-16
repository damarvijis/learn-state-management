import React, { useEffect } from "react";
import { Form } from "@/components";
import { useSelectorProviderExternal } from "@/lib";
import { storeLib } from "@/stores/my-lib";

export function FormLib() {
  // @ts-ignore
  const name = useSelectorProviderExternal((state) => state.name);
  const { setState } = storeLib
  useEffect(() => console.log("FormLib Rerender"))

  return (
    <Form
      name={name}
      onChange={(name) => setState(() => ({ name }))}
    />
  )
}