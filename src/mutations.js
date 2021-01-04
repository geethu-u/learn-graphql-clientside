import { gql } from '@apollo/client';

export const VOTE_MUTATION = gql`
mutation VoteMutation($linkId: ID!) {
  vote(linkId: $linkId) {
    id
    link {
      id
      votes {
        id
        user {
          id
        }
      }
    }
    user {
      id
    }
  }
}
`;
export const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $url: String!
  ) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;
