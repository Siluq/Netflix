import React, { useState, useContext, CreateContext } from 'react';

const ToggleContext = CreateContext;

export default function Accordion({ children, ...restProbs }) {
  return (
    <Container {...restProbs}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProbs }) {
  return <Title {...restProbs}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProbs }) {
  return <Frame {...restProbs}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProbs }) {
  const [toggleShow, setToggleShow] = useState(false);

  return <Item {...restProbs}>{children}</Item>;
};

Accordion.Header = function AccordionHeader({ children, ...restProbs }) {
  return (
    <Header onClick={() => setToggle()} {...restProbs}>
      {children}
    </Header>
  );
};
