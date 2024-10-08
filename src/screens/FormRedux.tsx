import React, { useEffect } from "react";
import { Form } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { formSlice } from "@/stores/redux";

export function FormRedux() {
  // @ts-ignore
  const name = useSelector((state) => state.form.name);
  const dispatch = useDispatch();
  useEffect(() => console.log("FormRedux Rerender"))

  return (
    <Form
      name={name}
      onChange={(name) => dispatch(formSlice.actions.update_name(name))}
    />
  )
}