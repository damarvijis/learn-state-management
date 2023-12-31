import React from "react";
import { Form } from "@/components";
import { useJotaiFormAtom } from "@/stores/jotai";

export function FormJotai() {
  const [{ name }, setForm] = useJotaiFormAtom();
  return <Form name={name} onChange={(name) => setForm({ name })} />;
}