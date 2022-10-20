import React, { useEffect } from 'react';
import { useToDoStore } from '../../data/stores/useToDoStore';
import styles from './index.module.scss';

const App: React.FC = () => {
  const [createTask, removeTask, updateTask, tasks] = useToDoStore((state) => [
    state.createTask,
    state.removeTask,
    state.updateTask,
    state.tasks,
  ]);
  useEffect(() => {
    createTask('qwerty task');
  }, []);
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>ToDo App</h1>
      <section className={styles.section}></section>
      <section className={styles.section}></section>
    </article>
  );
};

export default App;
