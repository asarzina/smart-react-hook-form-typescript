import { Control, Controller, FieldValues } from 'react-hook-form';

interface Props<T extends string> {
  name: T;
  control?: Control<FieldValues>;
}

export function InputControlled<T extends string>({ control, name, ...rest }: Props<T>) {
  return <Controller name={name} control={control} render={({ field }) => <input {...field} {...rest} />} />;
}
