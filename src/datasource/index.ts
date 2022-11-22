import { providerResolvers, providerTypedef } from "./provider";




export const typeDefs = [providerTypedef]
export const resolvers = {
    ...providerResolvers
} 
