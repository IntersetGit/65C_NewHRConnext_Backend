import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ApolloContext } from 'src/index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};

export type Amphoe = {
  __typename?: 'Amphoe';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  branch?: Maybe<Array<Maybe<CompanyBranch>>>;
  companyCode?: Maybe<Scalars['String']>;
  company_registration_id?: Maybe<Scalars['String']>;
  company_vat_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userlimit?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type CompanyBranch = {
  __typename?: 'CompanyBranch';
  Role_Company?: Maybe<Array<Maybe<Role_Company>>>;
  address?: Maybe<Scalars['String']>;
  address_2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']>;
  company_type?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  email_2?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  registeredamount?: Maybe<Scalars['String']>;
  social_facebook?: Maybe<Scalars['String']>;
  social_instragram?: Maybe<Scalars['String']>;
  social_likedin?: Maybe<Scalars['String']>;
  social_line?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  sub_company_type?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  users?: Maybe<Array<Maybe<User>>>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type CountBranch = {
  __typename?: 'CountBranch';
  branch?: Maybe<Scalars['Int']>;
};

export type CountInsideBranch = {
  __typename?: 'CountInsideBranch';
  Role_Company?: Maybe<Scalars['Int']>;
  users?: Maybe<Scalars['Int']>;
};

export type CreateAccountInput = {
  avatar?: InputMaybe<Scalars['String']>;
  companyCode: Scalars['String'];
  company_address: Scalars['String'];
  company_city: Scalars['String'];
  company_country: Scalars['String'];
  company_icon?: InputMaybe<Scalars['String']>;
  company_name: Scalars['String'];
  company_phone: Scalars['String'];
  company_state: Scalars['String'];
  company_zip: Scalars['String'];
  dob: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  tel: Scalars['String'];
  userlimit?: InputMaybe<Scalars['Int']>;
};

export type CreateAccountUserInput = {
  address?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  blood_type?: InputMaybe<Scalars['String']>;
  citizen_address?: InputMaybe<Scalars['String']>;
  citizen_addressnumber?: InputMaybe<Scalars['String']>;
  citizen_country?: InputMaybe<Scalars['String']>;
  citizen_district?: InputMaybe<Scalars['String']>;
  citizen_id?: InputMaybe<Scalars['String']>;
  citizen_province?: InputMaybe<Scalars['String']>;
  citizen_state?: InputMaybe<Scalars['String']>;
  citizen_tel?: InputMaybe<Scalars['String']>;
  citizen_zipcode?: InputMaybe<Scalars['String']>;
  contract_address?: InputMaybe<Scalars['String']>;
  contract_addressnumber?: InputMaybe<Scalars['String']>;
  contract_companyemail?: InputMaybe<Scalars['String']>;
  contract_country?: InputMaybe<Scalars['String']>;
  contract_district?: InputMaybe<Scalars['String']>;
  contract_province?: InputMaybe<Scalars['String']>;
  contract_sameCitizen: Scalars['Boolean'];
  contract_state?: InputMaybe<Scalars['String']>;
  contract_zipcode?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['Date']>;
  email: Scalars['String'];
  employee_status?: InputMaybe<Scalars['String']>;
  firstname_en?: InputMaybe<Scalars['String']>;
  firstname_th?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastname_en?: InputMaybe<Scalars['String']>;
  lastname_th?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  prefix_en?: InputMaybe<Scalars['String']>;
  prefix_th?: InputMaybe<Scalars['String']>;
  relationship?: InputMaybe<Scalars['String']>;
  religion?: InputMaybe<Scalars['String']>;
  role_company?: InputMaybe<Scalars['String']>;
  shirt_size?: InputMaybe<Scalars['String']>;
  social_facebook?: InputMaybe<Scalars['String']>;
  social_id?: InputMaybe<Scalars['String']>;
  social_likedin?: InputMaybe<Scalars['String']>;
  social_line?: InputMaybe<Scalars['String']>;
  social_telegram?: InputMaybe<Scalars['String']>;
  staff_code?: InputMaybe<Scalars['String']>;
  staff_status?: InputMaybe<Scalars['String']>;
  start_date_work?: InputMaybe<Scalars['Date']>;
  tel?: InputMaybe<Scalars['String']>;
};

export type CreateComapnyBranchResponseType = {
  __typename?: 'CreateComapnyBranchResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type CreateCompanyResponseType = {
  __typename?: 'CreateCompanyResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type CreateHolidayDate = {
  Company?: InputMaybe<Scalars['ID']>;
  day?: InputMaybe<Scalars['Int']>;
  holiday_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  month?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type CreateHolidayDateResponseType = {
  __typename?: 'CreateHolidayDateResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type CreateHolidayYearResponseType = {
  __typename?: 'CreateHolidayYearResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type CreateHolidayYears = {
  day?: InputMaybe<Scalars['Int']>;
  holiday_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  month?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type CreateRoleCompanyResponseType = {
  __typename?: 'CreateRoleCompanyResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type CreateUserResponseType = {
  __typename?: 'CreateUserResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type CreatedAndUpdatePosition = {
  code_position1?: InputMaybe<Scalars['String']>;
  id_Position1?: InputMaybe<Scalars['ID']>;
  level_Position1?: InputMaybe<Scalars['Int']>;
  masPosition2?: InputMaybe<Array<InputMaybe<CreatedmasPosition2>>>;
  name_Position1?: InputMaybe<Scalars['String']>;
};

export type CreatedmasPosition2 = {
  code_position2?: InputMaybe<Scalars['String']>;
  id_Position2?: InputMaybe<Scalars['ID']>;
  level_Position2?: InputMaybe<Scalars['Int']>;
  masPosition3?: InputMaybe<Array<InputMaybe<CreatedmasPosition3>>>;
  name_Position2?: InputMaybe<Scalars['String']>;
  positionlevel1_id?: InputMaybe<Scalars['ID']>;
};

export type CreatedmasPosition3 = {
  code_position3?: InputMaybe<Scalars['String']>;
  id_Position3?: InputMaybe<Scalars['ID']>;
  level_Position3?: InputMaybe<Scalars['Int']>;
  name_Position3?: InputMaybe<Scalars['String']>;
  positionlevel2_id?: InputMaybe<Scalars['String']>;
};

export type CreatepositionResponseType = {
  __typename?: 'CreatepositionResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type DeleteAccountUserResponseType = {
  __typename?: 'DeleteAccountUserResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type DeleteComapnyBranchResponseType = {
  __typename?: 'DeleteComapnyBranchResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type DeleteHolidayYearResponseType = {
  __typename?: 'DeleteHolidayYearResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type DeleteRoleCompanyRespnsetType = {
  __typename?: 'DeleteRoleCompanyRespnsetType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type District = {
  __typename?: 'District';
  amphoe?: Maybe<Array<Maybe<Amphoe>>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type GetCompanyAccessType = {
  __typename?: 'GetCompanyAccessType';
  name?: Maybe<Scalars['String']>;
};

export type GetOwncompanytype = {
  __typename?: 'GetOwncompanytype';
  companies?: Maybe<Array<Maybe<OwnCompanyType>>>;
  company?: Maybe<OwnCompanyType>;
  isOwner?: Maybe<Scalars['Boolean']>;
  redirect?: Maybe<Scalars['Boolean']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type LoginaInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Me = {
  __typename?: 'Me';
  Role_Company?: Maybe<MePositionType>;
  companyBranch?: Maybe<MeCompanyBranch>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isOwner?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<Profile>;
  role?: Maybe<Role>;
};

export type MeCompanyBranch = {
  __typename?: 'MeCompanyBranch';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<MecompanyType>;
  companyId?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  zip?: Maybe<Scalars['String']>;
};

export type MePositionType = {
  __typename?: 'MePositionType';
  access?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type MecompanyType = {
  __typename?: 'MecompanyType';
  companyCode?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type MeprofileType = {
  __typename?: 'MeprofileType';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  firstname_en?: Maybe<Scalars['String']>;
  firstname_th?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  lastname_en?: Maybe<Scalars['String']>;
  lastname_th?: Maybe<Scalars['String']>;
  prefix_en?: Maybe<Scalars['String']>;
  prefix_th?: Maybe<Scalars['String']>;
  staff_code?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreatedPosition?: Maybe<CreatepositionResponseType>;
  EditPosition?: Maybe<CreatepositionResponseType>;
  createAccount?: Maybe<CreateCompanyResponseType>;
  createAccountUser?: Maybe<CreateUserResponseType>;
  createAndUpdateComBarance?: Maybe<CreateComapnyBranchResponseType>;
  createHolidayDate?: Maybe<CreateHolidayDateResponseType>;
  createHolidayYear?: Maybe<CreateHolidayYearResponseType>;
  createRoleCompany?: Maybe<CreateRoleCompanyResponseType>;
  createdposition_user?: Maybe<CreatepositionResponseType>;
  deleteAccountUser?: Maybe<DeleteAccountUserResponseType>;
  deleteComBarance?: Maybe<DeleteComapnyBranchResponseType>;
  deleteHolidayYear?: Maybe<DeleteHolidayYearResponseType>;
  deleteRoleCompany?: Maybe<DeleteRoleCompanyRespnsetType>;
  login?: Maybe<LoginResponse>;
  refreshToken?: Maybe<RefreshtokenResponseType>;
  updateRoleCompanyMangement?: Maybe<CreateRoleCompanyResponseType>;
  validateRoute?: Maybe<ValidateRoute>;
};


export type MutationCreatedPositionArgs = {
  data?: InputMaybe<Array<CreatedAndUpdatePosition>>;
};


export type MutationEditPositionArgs = {
  data?: InputMaybe<Array<CreatedAndUpdatePosition>>;
};


export type MutationCreateAccountArgs = {
  data: CreateAccountInput;
};


export type MutationCreateAccountUserArgs = {
  data: CreateAccountUserInput;
};


export type MutationCreateAndUpdateComBaranceArgs = {
  data: CreateCompanyBranch;
};


export type MutationCreateHolidayDateArgs = {
  data?: InputMaybe<Array<InputMaybe<CreateHolidayDate>>>;
};


export type MutationCreateHolidayYearArgs = {
  data?: InputMaybe<Array<CreateHolidayYears>>;
};


export type MutationCreateRoleCompanyArgs = {
  data: CreateRoleCompanyGroup;
};


export type MutationCreatedposition_UserArgs = {
  data: Position;
};


export type MutationDeleteAccountUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteComBaranceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteHolidayYearArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoleCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  data: LoginaInput;
};


export type MutationUpdateRoleCompanyMangementArgs = {
  data: Array<UpdateRoleCompanyMangementType>;
};


export type MutationValidateRouteArgs = {
  args: Scalars['String'];
  branch?: InputMaybe<Scalars['String']>;
};

export type OwnCompanyType = {
  __typename?: 'OwnCompanyType';
  companyCode?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Position_User = {
  __typename?: 'Position_user';
  date?: Maybe<Scalars['Date']>;
  headderId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  position1_id?: Maybe<Scalars['String']>;
  position2_id?: Maybe<Scalars['String']>;
  position3_id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  blood_type?: Maybe<Scalars['String']>;
  citizen_address?: Maybe<Scalars['String']>;
  citizen_addressnumber?: Maybe<Scalars['String']>;
  citizen_country?: Maybe<Scalars['String']>;
  citizen_district?: Maybe<Scalars['String']>;
  citizen_id?: Maybe<Scalars['String']>;
  citizen_province?: Maybe<Scalars['String']>;
  citizen_state?: Maybe<Scalars['String']>;
  citizen_tel?: Maybe<Scalars['String']>;
  citizen_zipcode?: Maybe<Scalars['String']>;
  contract_address?: Maybe<Scalars['String']>;
  contract_addressnumber?: Maybe<Scalars['String']>;
  contract_companyemail?: Maybe<Scalars['String']>;
  contract_country?: Maybe<Scalars['String']>;
  contract_district?: Maybe<Scalars['String']>;
  contract_email?: Maybe<Scalars['String']>;
  contract_province?: Maybe<Scalars['String']>;
  contract_sameCitizen?: Maybe<Scalars['Boolean']>;
  contract_state?: Maybe<Scalars['String']>;
  contract_zipcode?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  employee_status?: Maybe<Scalars['String']>;
  firstname_en?: Maybe<Scalars['String']>;
  firstname_th?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname_en?: Maybe<Scalars['String']>;
  lastname_th?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  prefix_en?: Maybe<Scalars['String']>;
  prefix_th?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
  religion?: Maybe<Scalars['String']>;
  shirt_size?: Maybe<Scalars['String']>;
  social_facebook?: Maybe<Scalars['String']>;
  social_id?: Maybe<Scalars['String']>;
  social_likedin?: Maybe<Scalars['String']>;
  social_line?: Maybe<Scalars['String']>;
  social_telegram?: Maybe<Scalars['String']>;
  staff_code?: Maybe<Scalars['String']>;
  staff_status?: Maybe<Scalars['String']>;
  start_date_work?: Maybe<Scalars['Date']>;
  tel?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type Province = {
  __typename?: 'Province';
  district?: Maybe<Array<Maybe<District>>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  GetHoliDayYear?: Maybe<Array<Maybe<Holiday_Years>>>;
  company?: Maybe<ResponseCompany>;
  getAllcompany?: Maybe<Array<Maybe<CompanyBranch>>>;
  getMasPositon?: Maybe<Array<Maybe<Mas_Positionlevel1>>>;
  getProvince?: Maybe<Array<Maybe<Province>>>;
  getcompanyRole?: Maybe<Array<Maybe<Role_Company>>>;
  getownCompany?: Maybe<GetOwncompanytype>;
  getposition_user?: Maybe<Array<Maybe<Position_User>>>;
  me?: Maybe<Me>;
  users?: Maybe<Array<Maybe<User>>>;
  verifyCompanycode?: Maybe<Scalars['Boolean']>;
};


export type QueryCompanyArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllcompanyArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetcompanyRoleArgs = {
  role_name?: InputMaybe<Scalars['String']>;
};


export type QueryGetposition_UserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  userid?: InputMaybe<Scalars['String']>;
};


export type QueryVerifyCompanycodeArgs = {
  companyname: Scalars['String'];
};

export type RefreshtokenResponseType = {
  __typename?: 'RefreshtokenResponseType';
  access_token?: Maybe<Scalars['String']>;
};

export type RegisterProfileInput = {
  dob: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type ResponseBranchValidateRouteType = {
  __typename?: 'ResponseBranchValidateRouteType';
  branchId?: Maybe<Scalars['String']>;
  branchName?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
};

export type ResponseCompany = {
  __typename?: 'ResponseCompany';
  _count?: Maybe<CountBranch>;
  branch?: Maybe<Array<Maybe<ResponseCompany_Branch>>>;
  companyCode?: Maybe<Scalars['String']>;
  company_registration_id?: Maybe<Scalars['String']>;
  company_vat_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userlimit?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type ResponseCompany_Branch = {
  __typename?: 'ResponseCompany_Branch';
  Role_Company?: Maybe<Array<Maybe<Role_Company>>>;
  _count?: Maybe<CountInsideBranch>;
  address?: Maybe<Scalars['String']>;
  address_2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']>;
  company_type?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  email_2?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  registeredamount?: Maybe<Scalars['String']>;
  social_facebook?: Maybe<Scalars['String']>;
  social_instragram?: Maybe<Scalars['String']>;
  social_likedin?: Maybe<Scalars['String']>;
  social_line?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  sub_company_type?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  users?: Maybe<Array<Maybe<User>>>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type Role_Company = {
  __typename?: 'Role_Company';
  access?: Maybe<Scalars['JSON']>;
  companyBranch?: Maybe<CompanyBranch>;
  companyBranchId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type UpdateRoleCompanyMangementType = {
  access: Array<Scalars['JSON']>;
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  RoleCompanyID?: Maybe<Scalars['String']>;
  Role_Company?: Maybe<Role_Company>;
  company?: Maybe<Array<Maybe<Company>>>;
  companyBranch?: Maybe<CompanyBranch>;
  companyBranchId?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isOwner: Scalars['Boolean'];
  islogin: Scalars['Boolean'];
  lastlogin?: Maybe<Scalars['Date']>;
  password: Scalars['String'];
  profile?: Maybe<Profile>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']>;
};

export type ValidateRoute = {
  __typename?: 'ValidateRoute';
  acess?: Maybe<Scalars['Boolean']>;
  currentBranch?: Maybe<ResponseBranchValidateRouteType>;
  path?: Maybe<Scalars['String']>;
  reAccess?: Maybe<Scalars['String']>;
  reFresh?: Maybe<Scalars['String']>;
};

export type CreateCompanyBranch = {
  address?: InputMaybe<Scalars['String']>;
  address_2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['String']>;
  company_type?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  email_2?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lat?: InputMaybe<Scalars['String']>;
  lng?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  registeredamount?: InputMaybe<Scalars['String']>;
  social_facebook?: InputMaybe<Scalars['String']>;
  social_instragram?: InputMaybe<Scalars['String']>;
  social_likedin?: InputMaybe<Scalars['String']>;
  social_line?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  sub_company_type?: InputMaybe<Scalars['String']>;
  tel?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Date']>;
  website?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type CreateRoleCompanyGroup = {
  access?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  status: Scalars['Int'];
};

export type Holiday_Years = {
  __typename?: 'holiday_years';
  day?: Maybe<Scalars['Int']>;
  holiday_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Mas_Position = {
  __typename?: 'mas_position';
  CompanyId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Mas_Positionlevel1 = {
  __typename?: 'mas_positionlevel1';
  CompanyId?: Maybe<Scalars['String']>;
  Position_user?: Maybe<Array<Maybe<Position_User>>>;
  code?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  level?: Maybe<Scalars['Int']>;
  mas_positionlevel2?: Maybe<Array<Maybe<Mas_Positionlevel2>>>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Mas_Positionlevel2 = {
  __typename?: 'mas_positionlevel2';
  Position_user?: Maybe<Array<Maybe<Position_User>>>;
  code?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  level?: Maybe<Scalars['Int']>;
  mas_positionlevel3?: Maybe<Array<Maybe<Mas_Positionlevel3>>>;
  name?: Maybe<Scalars['String']>;
  positionlevel1_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Mas_Positionlevel3 = {
  __typename?: 'mas_positionlevel3';
  Position_user?: Maybe<Array<Maybe<Position_User>>>;
  code?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  positionlevel2_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Position = {
  date?: InputMaybe<Scalars['Date']>;
  headderId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  position1_id?: InputMaybe<Scalars['String']>;
  position2_id?: InputMaybe<Scalars['String']>;
  position3_id?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Amphoe: ResolverTypeWrapper<Amphoe>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Company: ResolverTypeWrapper<Company>;
  CompanyBranch: ResolverTypeWrapper<CompanyBranch>;
  CountBranch: ResolverTypeWrapper<CountBranch>;
  CountInsideBranch: ResolverTypeWrapper<CountInsideBranch>;
  CreateAccountInput: CreateAccountInput;
  CreateAccountUserInput: CreateAccountUserInput;
  CreateComapnyBranchResponseType: ResolverTypeWrapper<CreateComapnyBranchResponseType>;
  CreateCompanyResponseType: ResolverTypeWrapper<CreateCompanyResponseType>;
  CreateHolidayDate: CreateHolidayDate;
  CreateHolidayDateResponseType: ResolverTypeWrapper<CreateHolidayDateResponseType>;
  CreateHolidayYearResponseType: ResolverTypeWrapper<CreateHolidayYearResponseType>;
  CreateHolidayYears: CreateHolidayYears;
  CreateRoleCompanyResponseType: ResolverTypeWrapper<CreateRoleCompanyResponseType>;
  CreateUserResponseType: ResolverTypeWrapper<CreateUserResponseType>;
  CreatedAndUpdatePosition: CreatedAndUpdatePosition;
  CreatedmasPosition2: CreatedmasPosition2;
  CreatedmasPosition3: CreatedmasPosition3;
  CreatepositionResponseType: ResolverTypeWrapper<CreatepositionResponseType>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DeleteAccountUserResponseType: ResolverTypeWrapper<DeleteAccountUserResponseType>;
  DeleteComapnyBranchResponseType: ResolverTypeWrapper<DeleteComapnyBranchResponseType>;
  DeleteHolidayYearResponseType: ResolverTypeWrapper<DeleteHolidayYearResponseType>;
  DeleteRoleCompanyRespnsetType: ResolverTypeWrapper<DeleteRoleCompanyRespnsetType>;
  District: ResolverTypeWrapper<District>;
  GetCompanyAccessType: ResolverTypeWrapper<GetCompanyAccessType>;
  GetOwncompanytype: ResolverTypeWrapper<GetOwncompanytype>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  LoginaInput: LoginaInput;
  Me: ResolverTypeWrapper<Me>;
  MeCompanyBranch: ResolverTypeWrapper<MeCompanyBranch>;
  MePositionType: ResolverTypeWrapper<MePositionType>;
  MecompanyType: ResolverTypeWrapper<MecompanyType>;
  MeprofileType: ResolverTypeWrapper<MeprofileType>;
  Mutation: ResolverTypeWrapper<{}>;
  OwnCompanyType: ResolverTypeWrapper<OwnCompanyType>;
  Position_user: ResolverTypeWrapper<Position_User>;
  Profile: ResolverTypeWrapper<Profile>;
  Province: ResolverTypeWrapper<Province>;
  Query: ResolverTypeWrapper<{}>;
  RefreshtokenResponseType: ResolverTypeWrapper<RefreshtokenResponseType>;
  RegisterProfileInput: RegisterProfileInput;
  ResponseBranchValidateRouteType: ResolverTypeWrapper<ResponseBranchValidateRouteType>;
  ResponseCompany: ResolverTypeWrapper<ResponseCompany>;
  ResponseCompany_Branch: ResolverTypeWrapper<ResponseCompany_Branch>;
  Role: ResolverTypeWrapper<Role>;
  Role_Company: ResolverTypeWrapper<Role_Company>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateRoleCompanyMangementType: UpdateRoleCompanyMangementType;
  User: ResolverTypeWrapper<User>;
  ValidateRoute: ResolverTypeWrapper<ValidateRoute>;
  createCompanyBranch: CreateCompanyBranch;
  createRoleCompanyGroup: CreateRoleCompanyGroup;
  holiday_years: ResolverTypeWrapper<Holiday_Years>;
  mas_position: ResolverTypeWrapper<Mas_Position>;
  mas_positionlevel1: ResolverTypeWrapper<Mas_Positionlevel1>;
  mas_positionlevel2: ResolverTypeWrapper<Mas_Positionlevel2>;
  mas_positionlevel3: ResolverTypeWrapper<Mas_Positionlevel3>;
  position: Position;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Amphoe: Amphoe;
  Boolean: Scalars['Boolean'];
  Company: Company;
  CompanyBranch: CompanyBranch;
  CountBranch: CountBranch;
  CountInsideBranch: CountInsideBranch;
  CreateAccountInput: CreateAccountInput;
  CreateAccountUserInput: CreateAccountUserInput;
  CreateComapnyBranchResponseType: CreateComapnyBranchResponseType;
  CreateCompanyResponseType: CreateCompanyResponseType;
  CreateHolidayDate: CreateHolidayDate;
  CreateHolidayDateResponseType: CreateHolidayDateResponseType;
  CreateHolidayYearResponseType: CreateHolidayYearResponseType;
  CreateHolidayYears: CreateHolidayYears;
  CreateRoleCompanyResponseType: CreateRoleCompanyResponseType;
  CreateUserResponseType: CreateUserResponseType;
  CreatedAndUpdatePosition: CreatedAndUpdatePosition;
  CreatedmasPosition2: CreatedmasPosition2;
  CreatedmasPosition3: CreatedmasPosition3;
  CreatepositionResponseType: CreatepositionResponseType;
  Date: Scalars['Date'];
  DeleteAccountUserResponseType: DeleteAccountUserResponseType;
  DeleteComapnyBranchResponseType: DeleteComapnyBranchResponseType;
  DeleteHolidayYearResponseType: DeleteHolidayYearResponseType;
  DeleteRoleCompanyRespnsetType: DeleteRoleCompanyRespnsetType;
  District: District;
  GetCompanyAccessType: GetCompanyAccessType;
  GetOwncompanytype: GetOwncompanytype;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  LoginResponse: LoginResponse;
  LoginaInput: LoginaInput;
  Me: Me;
  MeCompanyBranch: MeCompanyBranch;
  MePositionType: MePositionType;
  MecompanyType: MecompanyType;
  MeprofileType: MeprofileType;
  Mutation: {};
  OwnCompanyType: OwnCompanyType;
  Position_user: Position_User;
  Profile: Profile;
  Province: Province;
  Query: {};
  RefreshtokenResponseType: RefreshtokenResponseType;
  RegisterProfileInput: RegisterProfileInput;
  ResponseBranchValidateRouteType: ResponseBranchValidateRouteType;
  ResponseCompany: ResponseCompany;
  ResponseCompany_Branch: ResponseCompany_Branch;
  Role: Role;
  Role_Company: Role_Company;
  String: Scalars['String'];
  UpdateRoleCompanyMangementType: UpdateRoleCompanyMangementType;
  User: User;
  ValidateRoute: ValidateRoute;
  createCompanyBranch: CreateCompanyBranch;
  createRoleCompanyGroup: CreateRoleCompanyGroup;
  holiday_years: Holiday_Years;
  mas_position: Mas_Position;
  mas_positionlevel1: Mas_Positionlevel1;
  mas_positionlevel2: Mas_Positionlevel2;
  mas_positionlevel3: Mas_Positionlevel3;
  position: Position;
}>;

export type AmphoeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Amphoe'] = ResolversParentTypes['Amphoe']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = ResolversObject<{
  branch?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompanyBranch']>>>, ParentType, ContextType>;
  companyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_registration_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  userlimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyBranchResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CompanyBranch'] = ResolversParentTypes['CompanyBranch']> = ResolversObject<{
  Role_Company?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role_Company']>>>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registeredamount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_instragram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_likedin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_line?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sub_company_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CountBranchResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CountBranch'] = ResolversParentTypes['CountBranch']> = ResolversObject<{
  branch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CountInsideBranchResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CountInsideBranch'] = ResolversParentTypes['CountInsideBranch']> = ResolversObject<{
  Role_Company?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateComapnyBranchResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CreateComapnyBranchResponseType'] = ResolversParentTypes['CreateComapnyBranchResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateCompanyResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CreateCompanyResponseType'] = ResolversParentTypes['CreateCompanyResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateHolidayDateResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CreateHolidayDateResponseType'] = ResolversParentTypes['CreateHolidayDateResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateHolidayYearResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CreateHolidayYearResponseType'] = ResolversParentTypes['CreateHolidayYearResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateRoleCompanyResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CreateRoleCompanyResponseType'] = ResolversParentTypes['CreateRoleCompanyResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateUserResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CreateUserResponseType'] = ResolversParentTypes['CreateUserResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreatepositionResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CreatepositionResponseType'] = ResolversParentTypes['CreatepositionResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DeleteAccountUserResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['DeleteAccountUserResponseType'] = ResolversParentTypes['DeleteAccountUserResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteComapnyBranchResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['DeleteComapnyBranchResponseType'] = ResolversParentTypes['DeleteComapnyBranchResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteHolidayYearResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['DeleteHolidayYearResponseType'] = ResolversParentTypes['DeleteHolidayYearResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteRoleCompanyRespnsetTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['DeleteRoleCompanyRespnsetType'] = ResolversParentTypes['DeleteRoleCompanyRespnsetType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DistrictResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['District'] = ResolversParentTypes['District']> = ResolversObject<{
  amphoe?: Resolver<Maybe<Array<Maybe<ResolversTypes['Amphoe']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetCompanyAccessTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['GetCompanyAccessType'] = ResolversParentTypes['GetCompanyAccessType']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetOwncompanytypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['GetOwncompanytype'] = ResolversParentTypes['GetOwncompanytype']> = ResolversObject<{
  companies?: Resolver<Maybe<Array<Maybe<ResolversTypes['OwnCompanyType']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['OwnCompanyType']>, ParentType, ContextType>;
  isOwner?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  redirect?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LoginResponseResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = ResolversObject<{
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = ResolversObject<{
  Role_Company?: Resolver<Maybe<ResolversTypes['MePositionType']>, ParentType, ContextType>;
  companyBranch?: Resolver<Maybe<ResolversTypes['MeCompanyBranch']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isOwner?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MeCompanyBranchResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['MeCompanyBranch'] = ResolversParentTypes['MeCompanyBranch']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['MecompanyType']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MePositionTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['MePositionType'] = ResolversParentTypes['MePositionType']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MecompanyTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['MecompanyType'] = ResolversParentTypes['MecompanyType']> = ResolversObject<{
  companyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MeprofileTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['MeprofileType'] = ResolversParentTypes['MeprofileType']> = ResolversObject<{
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  firstname_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname_th?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname_th?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix_th?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staff_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  CreatedPosition?: Resolver<Maybe<ResolversTypes['CreatepositionResponseType']>, ParentType, ContextType, Partial<MutationCreatedPositionArgs>>;
  EditPosition?: Resolver<Maybe<ResolversTypes['CreatepositionResponseType']>, ParentType, ContextType, Partial<MutationEditPositionArgs>>;
  createAccount?: Resolver<Maybe<ResolversTypes['CreateCompanyResponseType']>, ParentType, ContextType, RequireFields<MutationCreateAccountArgs, 'data'>>;
  createAccountUser?: Resolver<Maybe<ResolversTypes['CreateUserResponseType']>, ParentType, ContextType, RequireFields<MutationCreateAccountUserArgs, 'data'>>;
  createAndUpdateComBarance?: Resolver<Maybe<ResolversTypes['CreateComapnyBranchResponseType']>, ParentType, ContextType, RequireFields<MutationCreateAndUpdateComBaranceArgs, 'data'>>;
  createHolidayDate?: Resolver<Maybe<ResolversTypes['CreateHolidayDateResponseType']>, ParentType, ContextType, Partial<MutationCreateHolidayDateArgs>>;
  createHolidayYear?: Resolver<Maybe<ResolversTypes['CreateHolidayYearResponseType']>, ParentType, ContextType, Partial<MutationCreateHolidayYearArgs>>;
  createRoleCompany?: Resolver<Maybe<ResolversTypes['CreateRoleCompanyResponseType']>, ParentType, ContextType, RequireFields<MutationCreateRoleCompanyArgs, 'data'>>;
  createdposition_user?: Resolver<Maybe<ResolversTypes['CreatepositionResponseType']>, ParentType, ContextType, RequireFields<MutationCreatedposition_UserArgs, 'data'>>;
  deleteAccountUser?: Resolver<Maybe<ResolversTypes['DeleteAccountUserResponseType']>, ParentType, ContextType, RequireFields<MutationDeleteAccountUserArgs, 'id'>>;
  deleteComBarance?: Resolver<Maybe<ResolversTypes['DeleteComapnyBranchResponseType']>, ParentType, ContextType, RequireFields<MutationDeleteComBaranceArgs, 'id'>>;
  deleteHolidayYear?: Resolver<Maybe<ResolversTypes['DeleteHolidayYearResponseType']>, ParentType, ContextType, RequireFields<MutationDeleteHolidayYearArgs, 'id'>>;
  deleteRoleCompany?: Resolver<Maybe<ResolversTypes['DeleteRoleCompanyRespnsetType']>, ParentType, ContextType, RequireFields<MutationDeleteRoleCompanyArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'data'>>;
  refreshToken?: Resolver<Maybe<ResolversTypes['RefreshtokenResponseType']>, ParentType, ContextType>;
  updateRoleCompanyMangement?: Resolver<Maybe<ResolversTypes['CreateRoleCompanyResponseType']>, ParentType, ContextType, RequireFields<MutationUpdateRoleCompanyMangementArgs, 'data'>>;
  validateRoute?: Resolver<Maybe<ResolversTypes['ValidateRoute']>, ParentType, ContextType, RequireFields<MutationValidateRouteArgs, 'args'>>;
}>;

export type OwnCompanyTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['OwnCompanyType'] = ResolversParentTypes['OwnCompanyType']> = ResolversObject<{
  companyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Position_UserResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Position_user'] = ResolversParentTypes['Position_user']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  headderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  position1_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position2_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position3_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blood_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizen_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizen_addressnumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizen_country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizen_district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizen_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizen_province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizen_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizen_tel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  citizen_zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contract_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contract_addressnumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contract_companyemail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contract_country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contract_district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contract_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contract_province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contract_sameCitizen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contract_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contract_zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  employee_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname_th?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastname_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname_th?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix_th?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relationship?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  religion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shirt_size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_likedin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_line?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_telegram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staff_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staff_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_date_work?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  tel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProvinceResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Province'] = ResolversParentTypes['Province']> = ResolversObject<{
  district?: Resolver<Maybe<Array<Maybe<ResolversTypes['District']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  GetHoliDayYear?: Resolver<Maybe<Array<Maybe<ResolversTypes['holiday_years']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['ResponseCompany']>, ParentType, ContextType, Partial<QueryCompanyArgs>>;
  getAllcompany?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompanyBranch']>>>, ParentType, ContextType, Partial<QueryGetAllcompanyArgs>>;
  getMasPositon?: Resolver<Maybe<Array<Maybe<ResolversTypes['mas_positionlevel1']>>>, ParentType, ContextType>;
  getProvince?: Resolver<Maybe<Array<Maybe<ResolversTypes['Province']>>>, ParentType, ContextType>;
  getcompanyRole?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role_Company']>>>, ParentType, ContextType, Partial<QueryGetcompanyRoleArgs>>;
  getownCompany?: Resolver<Maybe<ResolversTypes['GetOwncompanytype']>, ParentType, ContextType>;
  getposition_user?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position_user']>>>, ParentType, ContextType, RequireFields<QueryGetposition_UserArgs, 'id'>>;
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<QueryUsersArgs>>;
  verifyCompanycode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryVerifyCompanycodeArgs, 'companyname'>>;
}>;

export type RefreshtokenResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['RefreshtokenResponseType'] = ResolversParentTypes['RefreshtokenResponseType']> = ResolversObject<{
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResponseBranchValidateRouteTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ResponseBranchValidateRouteType'] = ResolversParentTypes['ResponseBranchValidateRouteType']> = ResolversObject<{
  branchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  branchName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResponseCompanyResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ResponseCompany'] = ResolversParentTypes['ResponseCompany']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['CountBranch']>, ParentType, ContextType>;
  branch?: Resolver<Maybe<Array<Maybe<ResolversTypes['ResponseCompany_Branch']>>>, ParentType, ContextType>;
  companyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_registration_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  userlimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResponseCompany_BranchResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ResponseCompany_Branch'] = ResolversParentTypes['ResponseCompany_Branch']> = ResolversObject<{
  Role_Company?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role_Company']>>>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['CountInsideBranch']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registeredamount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_instragram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_likedin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_line?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sub_company_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Role_CompanyResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Role_Company'] = ResolversParentTypes['Role_Company']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  companyBranch?: Resolver<Maybe<ResolversTypes['CompanyBranch']>, ParentType, ContextType>;
  companyBranchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  RoleCompanyID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Role_Company?: Resolver<Maybe<ResolversTypes['Role_Company']>, ParentType, ContextType>;
  company?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  companyBranch?: Resolver<Maybe<ResolversTypes['CompanyBranch']>, ParentType, ContextType>;
  companyBranchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isOwner?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  islogin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastlogin?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  roleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValidateRouteResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ValidateRoute'] = ResolversParentTypes['ValidateRoute']> = ResolversObject<{
  acess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  currentBranch?: Resolver<Maybe<ResolversTypes['ResponseBranchValidateRouteType']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reAccess?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reFresh?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Holiday_YearsResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['holiday_years'] = ResolversParentTypes['holiday_years']> = ResolversObject<{
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  holiday_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Mas_PositionResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['mas_position'] = ResolversParentTypes['mas_position']> = ResolversObject<{
  CompanyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Mas_Positionlevel1Resolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['mas_positionlevel1'] = ResolversParentTypes['mas_positionlevel1']> = ResolversObject<{
  CompanyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Position_user?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position_user']>>>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mas_positionlevel2?: Resolver<Maybe<Array<Maybe<ResolversTypes['mas_positionlevel2']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Mas_Positionlevel2Resolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['mas_positionlevel2'] = ResolversParentTypes['mas_positionlevel2']> = ResolversObject<{
  Position_user?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position_user']>>>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mas_positionlevel3?: Resolver<Maybe<Array<Maybe<ResolversTypes['mas_positionlevel3']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positionlevel1_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Mas_Positionlevel3Resolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['mas_positionlevel3'] = ResolversParentTypes['mas_positionlevel3']> = ResolversObject<{
  Position_user?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position_user']>>>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positionlevel2_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  Amphoe?: AmphoeResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanyBranch?: CompanyBranchResolvers<ContextType>;
  CountBranch?: CountBranchResolvers<ContextType>;
  CountInsideBranch?: CountInsideBranchResolvers<ContextType>;
  CreateComapnyBranchResponseType?: CreateComapnyBranchResponseTypeResolvers<ContextType>;
  CreateCompanyResponseType?: CreateCompanyResponseTypeResolvers<ContextType>;
  CreateHolidayDateResponseType?: CreateHolidayDateResponseTypeResolvers<ContextType>;
  CreateHolidayYearResponseType?: CreateHolidayYearResponseTypeResolvers<ContextType>;
  CreateRoleCompanyResponseType?: CreateRoleCompanyResponseTypeResolvers<ContextType>;
  CreateUserResponseType?: CreateUserResponseTypeResolvers<ContextType>;
  CreatepositionResponseType?: CreatepositionResponseTypeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DeleteAccountUserResponseType?: DeleteAccountUserResponseTypeResolvers<ContextType>;
  DeleteComapnyBranchResponseType?: DeleteComapnyBranchResponseTypeResolvers<ContextType>;
  DeleteHolidayYearResponseType?: DeleteHolidayYearResponseTypeResolvers<ContextType>;
  DeleteRoleCompanyRespnsetType?: DeleteRoleCompanyRespnsetTypeResolvers<ContextType>;
  District?: DistrictResolvers<ContextType>;
  GetCompanyAccessType?: GetCompanyAccessTypeResolvers<ContextType>;
  GetOwncompanytype?: GetOwncompanytypeResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Me?: MeResolvers<ContextType>;
  MeCompanyBranch?: MeCompanyBranchResolvers<ContextType>;
  MePositionType?: MePositionTypeResolvers<ContextType>;
  MecompanyType?: MecompanyTypeResolvers<ContextType>;
  MeprofileType?: MeprofileTypeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OwnCompanyType?: OwnCompanyTypeResolvers<ContextType>;
  Position_user?: Position_UserResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Province?: ProvinceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RefreshtokenResponseType?: RefreshtokenResponseTypeResolvers<ContextType>;
  ResponseBranchValidateRouteType?: ResponseBranchValidateRouteTypeResolvers<ContextType>;
  ResponseCompany?: ResponseCompanyResolvers<ContextType>;
  ResponseCompany_Branch?: ResponseCompany_BranchResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  Role_Company?: Role_CompanyResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  ValidateRoute?: ValidateRouteResolvers<ContextType>;
  holiday_years?: Holiday_YearsResolvers<ContextType>;
  mas_position?: Mas_PositionResolvers<ContextType>;
  mas_positionlevel1?: Mas_Positionlevel1Resolvers<ContextType>;
  mas_positionlevel2?: Mas_Positionlevel2Resolvers<ContextType>;
  mas_positionlevel3?: Mas_Positionlevel3Resolvers<ContextType>;
}>;

