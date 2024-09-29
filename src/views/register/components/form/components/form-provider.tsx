import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

type RegisterForm = {
  fullName: string;
  email: string;
  birthDate: Date;
  comeFrom: string;
};

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<RegisterForm>;
  onSubmit?: VoidFunction;
};

export function FormProvider({ children, onSubmit, methods }: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
