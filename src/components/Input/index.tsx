import styles from './styles.module.css';

type InputProps = {
  id: string;
  label?: string;
} & React.ComponentProps<'input'>;

export function Input({ id, type, label, ...rest }: InputProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input disabled id={id} type={type} className={styles.input} {...rest} />
    </>
  );
}
