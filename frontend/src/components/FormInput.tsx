
interface Props {
  value: string;
  validation: string;
  updateValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  children: React.ReactNode;
  password?: boolean;
}

const FormInput = ({ children, value, validation, updateValue, name, password }: Props) => {
  return (
    <div className="input-group" data-validation={validation}>
      <label htmlFor={name}>{children}</label>
      <input type={password ? 'password' : 'text'} id={name} name={name} value={value} onChange={updateValue} />
    </div>
  );
};

export default FormInput;
