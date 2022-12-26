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
  address?: Maybe<Scalars['String']>;
  address_2?: Maybe<Scalars['String']>;
  branch?: Maybe<Array<Maybe<CompanyBranch>>>;
  city?: Maybe<Scalars['String']>;
  companyCode?: Maybe<Scalars['String']>;
  company_registration_id?: Maybe<Scalars['String']>;
  company_type?: Maybe<Scalars['String']>;
  company_vat_id?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  email_2?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['String']>;
  registeredamount?: Maybe<Scalars['String']>;
  social_facebook?: Maybe<Scalars['String']>;
  social_instragram?: Maybe<Scalars['String']>;
  social_likedin?: Maybe<Scalars['String']>;
  social_line?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  sub_company_type?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userlimit?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<Maybe<User>>>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type CompanyBranch = {
  __typename?: 'CompanyBranch';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  positions?: Maybe<Array<Maybe<Position>>>;
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  users?: Maybe<Array<Maybe<User>>>;
  zip?: Maybe<Scalars['String']>;
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

export type CreateCompanyResponseType = {
  __typename?: 'CreateCompanyResponseType';
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
  Position?: Maybe<MePositionType>;
  companyBranch?: Maybe<MeCompanyBranch>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isOwner?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<MeprofileType>;
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
  firstname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  staff_code?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount?: Maybe<CreateCompanyResponseType>;
  login?: Maybe<LoginResponse>;
  refreshToken?: Maybe<RefreshtokenResponseType>;
  validateRoute?: Maybe<ValidateRoute>;
};


export type MutationCreateAccountArgs = {
  data: CreateAccountInput;
};


export type MutationLoginArgs = {
  data: LoginaInput;
};


export type MutationValidateRouteArgs = {
  args: Scalars['String'];
};

export type OwnCompanyType = {
  __typename?: 'OwnCompanyType';
  companyCode?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Position = {
  __typename?: 'Position';
  access?: Maybe<Scalars['JSON']>;
  companyBranch?: Maybe<CompanyBranch>;
  companyBranchId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type Profile = {
  __typename?: 'Profile';
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
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
  firstname_en?: Maybe<Scalars['String']>;
  firstname_th?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname_en?: Maybe<Scalars['String']>;
  lastname_th?: Maybe<Scalars['String']>;
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
  getProvince?: Maybe<Array<Maybe<Province>>>;
  getownCompany?: Maybe<GetOwncompanytype>;
  me?: Maybe<Me>;
  users?: Maybe<Array<Maybe<User>>>;
  verifyCompanycode?: Maybe<Scalars['Boolean']>;
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

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type User = {
  __typename?: 'User';
  Position?: Maybe<Position>;
  company?: Maybe<Array<Maybe<Company>>>;
  companyBranch?: Maybe<CompanyBranch>;
  companyBranchId?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isOwner: Scalars['Boolean'];
  islogin: Scalars['Boolean'];
  lastlogin?: Maybe<Scalars['Date']>;
  positionId?: Maybe<Scalars['String']>;
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
  CreateAccountInput: CreateAccountInput;
  CreateCompanyResponseType: ResolverTypeWrapper<CreateCompanyResponseType>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
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
  Position: ResolverTypeWrapper<Position>;
  Profile: ResolverTypeWrapper<Profile>;
  Province: ResolverTypeWrapper<Province>;
  Query: ResolverTypeWrapper<{}>;
  RefreshtokenResponseType: ResolverTypeWrapper<RefreshtokenResponseType>;
  RegisterProfileInput: RegisterProfileInput;
  ResponseBranchValidateRouteType: ResolverTypeWrapper<ResponseBranchValidateRouteType>;
  Role: ResolverTypeWrapper<Role>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  ValidateRoute: ResolverTypeWrapper<ValidateRoute>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Amphoe: Amphoe;
  Boolean: Scalars['Boolean'];
  Company: Company;
  CompanyBranch: CompanyBranch;
  CreateAccountInput: CreateAccountInput;
  CreateCompanyResponseType: CreateCompanyResponseType;
  Date: Scalars['Date'];
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
  Position: Position;
  Profile: Profile;
  Province: Province;
  Query: {};
  RefreshtokenResponseType: RefreshtokenResponseType;
  RegisterProfileInput: RegisterProfileInput;
  ResponseBranchValidateRouteType: ResponseBranchValidateRouteType;
  Role: Role;
  String: Scalars['String'];
  User: User;
  ValidateRoute: ValidateRoute;
}>;

export type AmphoeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Amphoe'] = ResolversParentTypes['Amphoe']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  branch?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompanyBranch']>>>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_registration_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registeredamount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_instragram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_likedin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_line?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sub_company_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  userlimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyBranchResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CompanyBranch'] = ResolversParentTypes['CompanyBranch']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position']>>>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateCompanyResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CreateCompanyResponseType'] = ResolversParentTypes['CreateCompanyResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

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
  Position?: Resolver<Maybe<ResolversTypes['MePositionType']>, ParentType, ContextType>;
  companyBranch?: Resolver<Maybe<ResolversTypes['MeCompanyBranch']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isOwner?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['MeprofileType']>, ParentType, ContextType>;
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
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staff_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createAccount?: Resolver<Maybe<ResolversTypes['CreateCompanyResponseType']>, ParentType, ContextType, RequireFields<MutationCreateAccountArgs, 'data'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'data'>>;
  refreshToken?: Resolver<Maybe<ResolversTypes['RefreshtokenResponseType']>, ParentType, ContextType>;
  validateRoute?: Resolver<Maybe<ResolversTypes['ValidateRoute']>, ParentType, ContextType, RequireFields<MutationValidateRouteArgs, 'args'>>;
}>;

export type OwnCompanyTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['OwnCompanyType'] = ResolversParentTypes['OwnCompanyType']> = ResolversObject<{
  companyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  companyBranch?: Resolver<Maybe<ResolversTypes['CompanyBranch']>, ParentType, ContextType>;
  companyBranchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  firstname_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname_th?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastname_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname_th?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  getProvince?: Resolver<Maybe<Array<Maybe<ResolversTypes['Province']>>>, ParentType, ContextType>;
  getownCompany?: Resolver<Maybe<ResolversTypes['GetOwncompanytype']>, ParentType, ContextType>;
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

export type RoleResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  Position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType>;
  company?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  companyBranch?: Resolver<Maybe<ResolversTypes['CompanyBranch']>, ParentType, ContextType>;
  companyBranchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isOwner?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  islogin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastlogin?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  Amphoe?: AmphoeResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanyBranch?: CompanyBranchResolvers<ContextType>;
  CreateCompanyResponseType?: CreateCompanyResponseTypeResolvers<ContextType>;
  Date?: GraphQLScalarType;
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
  Position?: PositionResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Province?: ProvinceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RefreshtokenResponseType?: RefreshtokenResponseTypeResolvers<ContextType>;
  ResponseBranchValidateRouteType?: ResponseBranchValidateRouteTypeResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  ValidateRoute?: ValidateRouteResolvers<ContextType>;
}>;

