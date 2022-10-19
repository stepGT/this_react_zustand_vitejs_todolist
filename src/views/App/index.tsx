import React from 'react';
import styles from './index.module.scss';

const App: React.FC = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>ToDo App</h1>
      <section className={styles.section}></section>
      <section className={styles.section}></section>
    </article>
  );
};

export default App;
