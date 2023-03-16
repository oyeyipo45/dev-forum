import { FC, MouseEventHandler, ReactNode, useCallback } from 'react';

interface Props {
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({ children, active, disabled, onMouseDown, onClick }): JSX.Element => {
  const getActiveStyle = useCallback((): string => {
    if (active) return 'dark:bg-primary dark:text-primary-dark bg-primary-dark text-primary';
    else return 'text-secondary-light bg-secondary-light';
  }, [active]);

  const commonClasses = 'p-2 rounded text-lg hover:sale-110 transition';

  return (
    <button type='button' onMouseDown={onMouseDown} onClick={onClick} className={commonClasses + getActiveStyle()} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
