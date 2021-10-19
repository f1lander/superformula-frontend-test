import React from "react";

import { Header, FilterBar } from "../Molecules/";
export const RestaurantsSection: React.FC<any> = (props: any): JSX.Element => {
  return (
    <>
      <Header
        heading="Restaurants"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FilterBar />
    </>
  );
};
