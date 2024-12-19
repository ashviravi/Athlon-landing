import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from './types';
import { useButtonStyles } from './styles';

/**
 * A customizable button component with different variants and sizes
 * @param variant - The visual style of the button
 * @param size - The size of the button
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}) => {
  const styles = useButtonStyles({ variant, size });
  
  return (
    <button
      className={clsx(styles.button, className)}
      {...props}
    >
      {children}
    </button>
  );
};