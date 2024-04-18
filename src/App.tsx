import * as yup from 'yup';
import { Form } from './components/Form';
import { Input } from './components/Input';
import { InputControlled } from './components/InputControlled';
import { Select } from './components/Select';
import './App.css';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  gender: yup.string().required(),
});

type TSchema = yup.InferType<typeof schema>;

function App() {
  const onSubmit = (data: unknown) => console.log(data);

  return (
    <>
      <h1>Smart Form Component</h1>

      <Form schema={schema} onSubmit={onSubmit}>
        <Input<keyof TSchema> name="firstName" />
        <InputControlled<keyof TSchema> name="lastName" />
        <Select<keyof TSchema> name="gender" options={['female', 'male']} />
        <input type="submit" value="Submit" />
      </Form>
    </>
  );
}

export default App;
