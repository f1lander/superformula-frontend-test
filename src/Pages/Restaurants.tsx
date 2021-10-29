import React, { useState, useEffect } from "react";
import axios from "axios";

import { Header, FilterBar } from "../Components/Molecules";

import { gql, useQuery } from "@apollo/client";
import { CardsSection } from "../Components/Organisms/CardsSection/CardsSection";

const QUERY_BUSINESS = gql`
  query GetBusiness($offset: Int!) {
    search(location: "Las Vegas", limit: 8, offset: $offset) {
      total
      business {
        name
        id
        alias
        rating
        url
        photos
        hours {
          is_open_now
        }
        price
        categories {
          alias
          title
        }
      }
    }
  }
`;

export const RestaurantsSection: React.FC<any> = (props: any): JSX.Element => {
  const [categories, setCategories] = useState();
  const [offset, setOffset] = useState(0);
  const {
    loading,
    error,
    data,
  } = useQuery(QUERY_BUSINESS, {
    variables: { offset },
  });

  useEffect(() => {
    const getCategories = async () => {
      const { data: result } = await axios.get("/v3/categories");
      setCategories(result);

      console.log(result);
    };
    getCategories();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  console.log(data, categories);
  return (
    <>
      <Header
        heading="Restaurants"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FilterBar />
      <CardsSection title="All Restaurants" cards={data?.search?.business}/>
    </>
  );
};
