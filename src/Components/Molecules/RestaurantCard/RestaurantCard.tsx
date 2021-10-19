import React from "react";

import { Container, Button, ImageCard } from "../../Atoms";
import { RestaurantCardProps } from "./RestaurantCard.types";

export const RestaurantCard: React.FC<Partial<RestaurantCardProps>> = (props: Partial<RestaurantCardProps>): JSX.Element => {
  return (
    <Container direction="column">
      <ImageCard />
      <Button variant="filled">Learn More</Button>
    </Container>
  );
};
