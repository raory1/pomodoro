import styles from './styles.module.css';

type InputProps = {
  id: string;
  label?: string;
} & React.ComponentProps<'input'>;

export function Input({ id, type, label, ...props }: InputProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type} className={styles.input} {...props} />
    </>
  );
}
