import React from "react";

import { RestaurantCardContainer, Button, ImageCard, Heading } from "../../Atoms";
import { Item } from "../../Atoms/Container/Container";
import { RatingStars } from "../../Atoms/RatingStars/RatingStars";
import { StatusIndicator } from "../../Atoms/StatusIndicator/StatusIndicator";
import { RestaurantCardProps } from "./RestaurantCard.types";

export const RestaurantCard: React.FC<Partial<RestaurantCardProps>> = (
  props: Partial<RestaurantCardProps>
): JSX.Element => {
  return (
    <RestaurantCardContainer direction="column">
      <ImageCard src={props.imageSrc} />
      <Heading fontSize="20px">{props.name}</Heading>
      <RatingStars stars={props.rating} />
      <Item>
        <Item variant="status-indicator">{`${props.category} ${props.price}`}</Item>
        <StatusIndicator status={props.isOpen} />
      </Item>
      <Button variant="filled">Learn More</Button>
    </RestaurantCardContainer>
  );
};
