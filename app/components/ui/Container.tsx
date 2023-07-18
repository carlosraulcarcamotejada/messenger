"use client";
import { FC, ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }): JSX.Element => {
  return (<div className="mx-auto px-4">{children}</div>);
};

export { Container };
