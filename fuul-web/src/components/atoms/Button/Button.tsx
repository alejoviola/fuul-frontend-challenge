import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={classNames(styles.Button, className)} {...props}>
      {children}
    </button>
  );
};
