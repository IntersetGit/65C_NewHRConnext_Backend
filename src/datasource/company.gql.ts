import gql from "graphql-tag";




export const companyTypedef = gql`
    type Company {
        id: ID!
        name: String
        address: String
        city: String
        state: String
        zip: String
        country: String
        icon: String
        phone: String
        website: String
        parentId: String
        parent: Company
        children: [Company]
        createdAt: Date
        updatedAt: Date
        users: [User]
        positions: [Position]
    }
`