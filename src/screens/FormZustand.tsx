import React, { useEffect } from "react";
import { Form } from "@/components";
import { useFormStore } from "@/stores/zustand";

export function FormZustand() {
  const { name, setName } = useFormStore();
  useEffect(() => console.log("FormZustand Rerender"))

  return <Form name={name} onChange={(name) => setName(name)} />;
}