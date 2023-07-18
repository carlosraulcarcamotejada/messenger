"use client";
import { FC, useCallback } from "react";
import { Button, TextField } from "./ui";
import { useAlertDeleteUser } from "../hooks";
import { useForm, FieldValues } from "react-hook-form";
import { MagnifyingGlass } from "./heroIcons";

const TryingTextField: FC = (): JSX.Element => {
  /*
    this component tries to test the TextField, Submit and alert funcionality
    */

  const { onOpen } = useAlertDeleteUser();

  const defaultValues = {
    username: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues });

  const { onBlur, name, onChange, ref } = register("username");

  const setTextField = useCallback((name: string) => {
    setValue && setValue(name, "");
  }, []);

  return (
    <>
      <h1 className="text-lg font-semibold">Hallo Welt</h1>
      <Button label="Open Modal" onClick={onOpen} variant="primary" />
      <TextField
        id="username"
        placeholder="Username"
        required
        type="text-clearable"
        value={watch("username")}
        onChange={onChange}
        onBlur={onBlur}
        innerRef={ref}
        setTextField={() => setTextField("username")}
      />
      <Button label="Submit" variant="outline" />
    </>
  );
};

export { TryingTextField };
