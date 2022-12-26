import gql from 'graphql-tag';

export const profileTypedef = gql`
  type Profile {
    id: ID!
    bio: String
    firstname_th: String
    lastname_th: String
    firstname_en: String
    lastname_en: String
    avatar: String
    dob: Date
    age: String
    relationship: String
    shirt_size: String
    prefix_th: String
    prefix_en: String
    citizen_id: String
    social_id: String
    staff_status: String
    tel: String
    address: String
    gender: String
    staff_code: String
    religion: String
    user: User
    userId: String
    citizen_addressnumber: String
    citizen_address: String
    citizen_country: String
    citizen_province: String
    citizen_district: String
    citizen_state: String
    citizen_zipcode: String
    citizen_tel: String
    contract_sameCitizen: Boolean
    contract_addressnumber: String
    contract_address: String
    contract_country: String
    contract_province: String
    contract_district: String
    contract_state: String
    contract_zipcode: String
    contract_email: String
    contract_companyemail: String
    social_facebook: String
    social_likedin: String
    social_line: String
    social_telegram: String
  }

  type MeprofileType {
    firstname_th: String
    lastname_th: String
    firstname_en: String
    lastname_en: String
    avatar: String
    prefix_th: String
    prefix_en: String
    dob: Date
    gender: String
    bio: String
    staff_code: String
    tel: String
  }
`;
