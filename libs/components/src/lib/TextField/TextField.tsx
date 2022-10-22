import { useRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import cn from 'clsx';

import styles from './TextField.module.css';

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  fluid?: boolean;
  error?: string;
}

export function TextField(props: TextFieldProps) {
  const ref = useRef(null);
  const { label } = props;
  const { labelProps, inputProps } = useTextField(props, ref);

  const inputClasses = cn(styles.input, {
    [styles.fluid]: props.fluid,
    [styles.error]: props.error,
  });

  return (
    <div className={styles.component}>
      {label && (
        <label {...labelProps} className={styles.label}>
          {label}
        </label>
      )}
      <input {...inputProps} ref={ref} className={inputClasses} />
      {props.error && <span className={styles.errorText}>{props.error}</span>}
    </div>
  );
}

export default TextField;
