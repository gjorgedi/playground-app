import { ReactElement } from "react";

interface ContainerProps {
  children: ReactElement;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="container mx-auto h-screen">{children}</div>;
};
