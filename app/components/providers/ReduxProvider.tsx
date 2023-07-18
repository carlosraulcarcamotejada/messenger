"use client";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

interface IReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: FC<IReduxProviderProps> = ({ children }): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export { ReduxProvider };
