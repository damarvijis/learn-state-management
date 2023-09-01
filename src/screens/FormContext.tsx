import React from "react";
import { Form } from "@/components";
import { useContextLearn } from "@/stores/context";

export function FormContext() {
  const { name, setName } = useContextLearn();
  return <Form name={name} onChange={(name) => setName(name)} />;
}