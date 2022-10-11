import cn from 'clsx';
import { useRef } from 'react';
import { AriaCheckboxProps, VisuallyHidden, useCheckbox } from 'react-aria';
import { useToggleState } from 'react-stately';

import styles from './Checkbox.module.css';

export interface CheckboxProps extends AriaCheckboxProps {
  className?: string;
}

export function Checkbox(props: CheckboxProps) {
  const ref = useRef(null);
  const state = useToggleState(props);
  const { children } = props;
  const { inputProps } = useCheckbox(props, state, ref);

  return (
    <label className={styles.wrapper}>
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      <div
        className={cn(styles.checkbox, {
          [styles.checked]: state.isSelected,
        })}
        aria-hidden="true"
      >
        <svg className={styles.svg} viewBox="0 0 16 16">
          <polyline
            className={styles.checkMark}
            points="1 9 7 14 15 4"
            fill="none"
            strokeWidth={3}
            strokeDasharray={22}
            strokeDashoffset={state.isSelected ? 44 : 66}
          />
        </svg>
      </div>
      <span className={styles.label}>{children}</span>
    </label>
  );
}

export default Checkbox;
