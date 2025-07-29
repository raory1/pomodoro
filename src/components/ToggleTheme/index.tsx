import { useState, useEffect } from 'react';
import styles from './styles.module.css';

type AvaliableThemes = 'dark' | 'light';

export function ToggleTheme() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
    return storageTheme;
  });

  function handleThemeChange() {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={styles.container}>
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
