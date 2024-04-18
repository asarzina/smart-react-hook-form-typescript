import React, { Children } from 'react';
import { DefaultValues, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema } from 'yup';

interface IForm {
  children: React.ReactNode;
  defaultValues?: DefaultValues<FieldValues>;
  schema: ObjectSchema<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
}

export function Form({ children, defaultValues, schema, onSubmit }: IForm): JSX.Element {
  const { control, handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...(defaultValues) },
  });

  const elements = Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.props.name)
      return React.cloneElement(child, {
        ...child.props,
        control, // use only one between control and register
        register,
        key: child.props.name,
      });
    else return child;
  });

  return <form onSubmit={handleSubmit(onSubmit)}>{elements}</form>;
}
