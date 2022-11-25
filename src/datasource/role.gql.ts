import gql from "graphql-tag";




export const roleTypedef = gql`

    type Role {
        id: ID!
        name: String
        users: [User]
    }

`