import React, {ReactNode} from "react";
import {Head} from "../components/Head";

interface ILayoutProps {
  children: ReactNode;
  location: {
    pathname: string;
  };
}

export const Layout = ({children, location}: ILayoutProps) => {
  return (
    <>
      <Head pathname={location.pathname} />
      {children}
    </>
  );
};
