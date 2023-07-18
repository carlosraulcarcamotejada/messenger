import { FC, ReactNode } from "react";
import { ReduxProvider } from ".";

interface IProvidersProps {
  children: ReactNode;
}

const Providers: FC<IProvidersProps> = ({ children }): JSX.Element => {
  return (
    <ReduxProvider>
      {children}
    </ReduxProvider>
  );
};

export { Providers };
