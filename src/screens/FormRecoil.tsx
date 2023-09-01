import React from "react";
import { Form } from "@/components";
import { useRecoilFormState } from "@/stores/recoil";

export function FormRecoil() {
  const [{ name }, setForm] = useRecoilFormState();
  return <Form name={name} onChange={(name) => setForm({ name })} />;
}