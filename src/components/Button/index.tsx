import styles from './styles.module.css';

type ButtonProps = {
  label?: string;
  variant?: 'default' | 'alert';
  icon: React.ReactNode;
} & React.ComponentProps<'button'>;

export function Button({
  label,
  variant = 'alert',
  icon,
  ...props
}: ButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[variant]}`} {...props}>
        {icon}
        <span>{label}</span>
      </button>
    </>
  );
}
