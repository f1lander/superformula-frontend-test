import React from "react";
import { Header, FilterBar } from "../Components/Molecules";
import { gql, useQuery } from "@apollo/client";

const QUERY_BUSINESS = gql`
      query GetBusiness {
            business(id: "garaje-san-francisco") {
                  name
                  id
                  alias
                  rating
                  url
            }
      }
`;

export const RestaurantsSection: React.FC<any> = (props: any): JSX.Element => {
  const { loading, error, data } = useQuery(QUERY_BUSINESS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    debugger;
    console.log(error);
    return <p>Error :(</p>;
  }

  console.log(data);
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
