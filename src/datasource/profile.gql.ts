import gql from "graphql-tag";

export const profileTypedef = gql`
    type Profile {
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
`


