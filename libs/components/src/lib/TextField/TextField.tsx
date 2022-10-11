import { useRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';

import styles from './TextField.module.css';

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  fluid?: boolean;
}

export function TextField(props: TextFieldProps) {
  const ref = useRef(null);
  const { label } = props;
  const { labelProps, inputProps } = useTextField(props, ref);

  return (
    <div className={styles.component}>
      {label && (
        <label {...labelProps} className={styles.label}>
          {label}
        </label>
      )}
      <input {...inputProps} ref={ref} className={styles.input} />
    </div>
  );
}

export default TextField;
