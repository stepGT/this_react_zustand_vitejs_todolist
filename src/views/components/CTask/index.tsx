import React, { useEffect, useRef, useState } from 'react';
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
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);
  //
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (e.target.checked) onDone(id);
  };
  useEffect(() => {
    if (isEdit) inputRef?.current?.focus();
  }, [isEdit]);
  //
  return (
    <div className={styles.wrap}>
      <label className={styles.label}>
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          disabled={isEdit}
        />
        {isEdit ? (
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setIsEdit(false);
                onEdited(id, value);
              }
            }}
          />
        ) : (
          <h3 className={styles.title}>{title}</h3>
        )}
      </label>
      {isEdit ? (
        <button
          aria-label="Save"
          className={styles.save}
          onClick={() => {
            setIsEdit(false);
            onEdited(id, value);
          }}
        />
      ) : (
        <button
          aria-label="Edit"
          className={styles.edit}
          onClick={() => {
            setIsEdit(true);
          }}
        />
      )}
      <button
        aria-label="Remove"
        className={styles.remove}
        onClick={() => {
          onRemoved(id);
        }}
      />
    </div>
  );
};

export default CTask;
