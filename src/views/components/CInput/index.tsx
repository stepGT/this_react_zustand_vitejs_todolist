import React, { useCallback, useState } from 'react';
import styles from './index.module.scss';

interface CInputProps {
  createTask: (title: string) => void;
}

const CInput: React.FC<CInputProps> = ({ createTask }) => {
  const [value, setValue] = useState('');
  //
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnClick = () => {};

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTask();
  };

  const addTask = useCallback(() => {
    createTask(value);
    setValue('');
  }, [value]);
  //
  return (
    <div className={styles.wrap}>
      <input
        type="text"
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        className={styles.input}
      />
      <button aria-label="Add" onClick={handleOnClick} className={styles.button} />
    </div>
  );
};

export default CInput;
