import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query ($page: Int) {
    characters(page: $page) {
      info {
        pages
        prev
      }
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
        episode {
          name
        }
      }
    }
  }
`;

export const CHARACTER_BY_ID = gql`
  query getCharactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      name
      status
      species
      type
      gender
      image
      location {
        name
      }
      episode {
        name
      }
    }
  }
`;

export const FOOTER_INFO = gql`
  query {
    characters {
      info {
        count
      }
    }
    episodes {
      info {
        count
      }
    }
    locations {
      info {
        count
      }
    }
  }
`;
