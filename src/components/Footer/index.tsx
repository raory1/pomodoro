import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
        What is the pomodoro technique?
      </a>
      <a href="https://github.com/raory1/pomodoro">
        pomo timer &copy; {new Date().getFullYear()}
      </a>
    </footer>
  );
}
