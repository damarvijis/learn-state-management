import React, { useEffect } from "react";
import { Form } from "@/components";
import { useRecoilFormState } from "@/stores/recoil";

export function FormRecoil() {
  const [{ name }, setForm] = useRecoilFormState();
  useEffect(() => console.log("FormRecoil Rerender"))

  return <Form name={name} onChange={(name) => setForm({ name })} />;
}