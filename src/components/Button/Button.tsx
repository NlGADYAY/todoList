import React from "react";
import "./button.css";

type TButtonType = "buttonAdd" | "buttonRemove";

interface IButtonProps {
  children: React.ReactNode;
  type?: TButtonType;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({ onClick, children, type }) => {
  return (
    <button className={type} onClick={onClick} >
      {children}
    </button>
    
  );
};

