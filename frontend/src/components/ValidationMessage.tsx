interface Props {
  validation: string;
}

const ValidationMessage = ({ validation }: Props) => {
  return <p className={`validation-error ${validation != '' ? 'active' : ''}`}>{validation}</p>;
};

export default ValidationMessage;
