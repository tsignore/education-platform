import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: "filled" | "outlined" | "round";
  color?: "primary" | "secondary" | "black";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  color = "primary",
  size = "medium",
  children,
  onClick,
  icon,
  iconPosition = "left",
  className,
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[color],
    styles[size],
    icon && styles.iconButton,
    className,
  ].join(" ");

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
