import { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props<T extends string> {
  name: T;
  register?: UseFormRegister<FieldValues>;
  options: string[];
}

export function Select<T extends string>({ register, options, name, ...rest }: Props<T>) {
  if (!register) {
    return null;
  }

  return (
    <select {...register(name)} {...rest}>
      {options.map((value, i) => (
        <option key={i} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
