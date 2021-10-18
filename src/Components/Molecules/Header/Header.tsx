import React from "react";

import { Container, Heading, SubHeading } from "../../Atoms";
import { Button } from "../../Atoms/Button/Button";
import { HeaderProps } from "./Header.types";

export const Header: React.FC<HeaderProps> = (
  props: HeaderProps
): JSX.Element => {
  return (
    <Container direction="column">
      <Heading>{props.heading}</Heading>
      {props.rating && <h3>stars</h3>}
      <SubHeading>{props.subHeading}</SubHeading>
      <Button>
        Clear All
      </Button>
      <Button varian="filled">
        Learn more
      </Button>
    </Container>
  );
};
