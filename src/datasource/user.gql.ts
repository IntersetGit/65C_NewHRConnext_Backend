import gql from "graphql-tag";


export const userTypedef = gql`
    type User {
        email: string
        id: ID!
        profile: Profile
        islogin: Boolean!
        lastlogin: Date
        createdAt: Date
        roleId: String
        companyId: String
        role: [Role]
        positionId: String
        position: [Position]
        company: [Company]
    }
`;


export const userResolvers = {

}