import { useState, useEffect } from 'react';
import styles from './styles.module.css';

type AvaliableThemes = 'dark' | 'light';

export function ToggleTheme() {
  const [theme, setTheme] = useState<AvaliableThemes>('dark');

  function handleThemeChange() {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }
  document.documentElement.setAttribute('data-theme', theme);
  return (
    <div className={styles.container}>
      {theme}
      <input
        type="checkbox"
        id="check"
        className={styles.toggle}
        onChange={handleThemeChange}
        checked={theme === 'dark'}
      />
      <label htmlFor="check"></label>
    </div>
  );
}
