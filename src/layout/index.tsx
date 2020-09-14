import React, {ReactNode} from "react";
import {ThemeProvider} from "styled-components";
import {Head} from "../components/Head";
import {GlobalStyle, MainTheme} from "./theme";

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
      <ThemeProvider theme={MainTheme}>
        <GlobalStyle />
      </ThemeProvider>
      {children}
    </>
  );
};
