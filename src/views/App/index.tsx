import React from 'react';
import { useToDoStore } from '../../data/stores/useToDoStore';
import CInput from '../components/CInput';
import CTask from '../components/CTask';
import styles from './index.module.scss';

const App: React.FC = () => {
  const [createTask, removeTask, updateTask, tasks] = useToDoStore((state) => [
    state.createTask,
    state.removeTask,
    state.updateTask,
    state.tasks,
  ]);
  //
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>ToDo App</h1>
      <section className={styles.section}>
        <CInput createTask={createTask} />
      </section>
      <section className={styles.section}>
        {!tasks.length && <p className={styles.text}>No tasks!</p>}
        {tasks.map((task) => {
          return (
            <CTask
              id={task.id}
              key={task.id}
              title={task.title}
              onDone={removeTask}
              onEdited={updateTask}
              onRemoved={removeTask}
            />
          );
        })}
      </section>
    </article>
  );
};

export default App;
