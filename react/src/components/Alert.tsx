import type { ReactNode } from "react";

interface AlertProps {
  children: ReactNode; //children is a universal prop for components
}

const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
