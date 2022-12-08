import gql from 'graphql-tag';

export const profileTypedef = gql`
  interface SimpleProfileQuery {
    firstname: String
    lastname: String
    avatar: String
    prefix: String
    dob: Date
    gender: String
    bio: String
    staff_code: String
    tel: String
  }

  type FullprofileQuery implements SimpleProfileQuery {
    id: ID!
    bio: String
    firstname: String
    lastname: String
    avatar: String
    dob: Date
    prefix: String
    tel: String
    address: String
    gender: String
    staff_code: String
    religion: String
    user: User
    userId: String
  }
`;
