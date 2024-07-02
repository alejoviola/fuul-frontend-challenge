import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={styles.Button} {...props}>
      {children}
    </button>
  );
};
