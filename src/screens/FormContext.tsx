import React, { useEffect } from "react";
import { Form } from "@/components";
import { useContextLearn } from "@/stores/context";

export function FormContext() {
  const { name, setName } = useContextLearn();
  useEffect(() => console.log("FormContext Rerender"))

  return <Form name={name} onChange={(name) => setName(name)} />;
}