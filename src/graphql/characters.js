import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query ($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        image
        location {
          name
        }
      }
    }
  }
`;
