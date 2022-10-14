import type { AriaSelectProps } from '@react-types/select';
import cn from 'clsx';
import { useRef } from 'react';
import {
  HiddenSelect,
  mergeProps,
  useButton,
  useFocusRing,
  useSelect,
} from 'react-aria';
import { useSelectState } from 'react-stately';

import { ListBox, Popover } from '../../index';
import styles from './Select.module.css';

export { Item as SelectItem } from 'react-stately';

export function Select<T extends object>(props: AriaSelectProps<T>) {
  const state = useSelectState(props);
  const ref = useRef(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );
  const { buttonProps } = useButton(triggerProps, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  const inputClasses = cn(styles.input);

  return (
    <div className={styles.component}>
      {props.label && (
        <div {...labelProps} className={styles.label}>
          {props.label}
        </div>
      )}
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={inputClasses}
      >
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : 'Select an option'}
        </span>
      </button>
      {state.isOpen && (
        <Popover isOpen={state.isOpen} onClose={state.close}>
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  );
}

export default Select;
