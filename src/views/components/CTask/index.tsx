import React, { useState } from 'react';
import styles from './index.module.scss';

interface CTaskProps {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}

const CTask: React.FC<CTaskProps> = ({ id, title, onDone, onEdited, onRemoved }) => {
  const [checked, setChecked] = useState(false);
  //
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (e.target.checked) onDone(id);
  };
  //
  return (
    <div className={styles.wrap}>
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={handleChange}
          checked={checked}
        />
        <h3 className={styles.title}>{title}</h3>
      </label>
      <button aria-label="Edit" className={styles.edit} onClick={() => {}} />
      <button aria-label="Remove" className={styles.remove} onClick={() => {
        onRemoved(id)
      }} />
    </div>
  );
};

export default CTask;
