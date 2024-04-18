import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props<T extends string> {
  name: T;
  register?: UseFormRegister<FieldValues>;
}

export function Input<T extends string>({ register, name, ...rest }: Props<T>) {
  return register ? <input {...register(name)} {...rest} /> : null;
}
