import React from "react";
import { Form } from "@/components";
import { useFormStore } from "@/stores/zustand";

export function FormZustand() {
  const { name, setName } = useFormStore();
  return <Form name={name} onChange={(name) => setName(name)} />;
}