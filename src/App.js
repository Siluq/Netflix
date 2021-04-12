import React from "react";
import { FaqsContainer } from "./containers/faws";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumotron";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
