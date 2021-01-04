import { gql } from '@apollo/client';

export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

export const USERS_LIST_QUERY = gql`
{
    userlist{
        users{
          name
          links{
            description
          }
        }
    }
}
`;