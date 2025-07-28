import styles from './styles.module.css';

type ButtonProps = {
  title?: string;
  variant?: 'default' | 'alert';
  icon: React.ReactNode;
} & React.ComponentProps<'button'>;

export function Button({
  title,
  variant = 'alert',
  icon,
  ...props
}: ButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[variant]}`} {...props}>
        {icon}
        <span>{title}</span>
      </button>
    </>
  );
}
