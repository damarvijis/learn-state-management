import React, { useEffect } from "react";
import { Form } from "@/components";
import { useJotaiFormAtom } from "@/stores/jotai";

export function FormJotai() {
  const [{ name }, setForm] = useJotaiFormAtom();
  useEffect(() => console.log("FormJotai Rerender"))

  return <Form name={name} onChange={(name) => setForm({ name })} />;
}