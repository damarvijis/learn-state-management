import React, { useEffect } from "react";
import { Form } from "@/components";
import { useUnstatedForm } from "@/stores/unstated";

export function FormUnstated() {
  const { name, setName } = useUnstatedForm();
  useEffect(() => console.log("FormUnstated Rerender"))

  return <Form name={name} onChange={(name) => setName(name)} />;
}