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
};

export type Amphoe = {
  __typename?: 'Amphoe';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
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

export type FullCompanyQuery = SimpleCompanyQuery & {
  __typename?: 'FullCompanyQuery';
  address?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<FullCompanyQuery>>>;
  city?: Maybe<Scalars['String']>;
  companyCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<FullCompanyQuery>;
  parentId?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  positions?: Maybe<Array<Maybe<FullprofileQuery>>>;
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  users?: Maybe<Array<Maybe<User>>>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type FullprofileQuery = SimpleProfileQuery & {
  __typename?: 'FullprofileQuery';
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  firstname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  religion?: Maybe<Scalars['String']>;
  staff_code?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type GetCompanyAccessType = {
  __typename?: 'GetCompanyAccessType';
  name?: Maybe<Scalars['String']>;
};

export type GetowmComoanyType = {
  __typename?: 'GetowmComoanyType';
  codeCompany?: Maybe<Scalars['String']>;
  companyType?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
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
  company?: Maybe<SimpleCompanyQuery>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  position?: Maybe<PositionInterface>;
  profile?: Maybe<SimpleProfileQuery>;
  role?: Maybe<Role>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount?: Maybe<CreateCompanyResponseType>;
  login?: Maybe<LoginResponse>;
  refreshToken?: Maybe<RefreshtokenResponseType>;
};


export type MutationCreateAccountArgs = {
  data: CreateAccountInput;
};


export type MutationLoginArgs = {
  data: LoginaInput;
};

export type PositionInterface = {
  id: Scalars['ID'];
};

export type PositionWithNameandAccess = PositionInterface & {
  __typename?: 'PositionWithNameandAccess';
  access?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type PositionfullQuery = PositionInterface & {
  __typename?: 'PositionfullQuery';
  access?: Maybe<Scalars['String']>;
  company?: Maybe<SimpleCompanyQuery>;
  companyId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
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
  getownCompany?: Maybe<Array<Maybe<GetowmComoanyType>>>;
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

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type SimpleCompanyQuery = {
  companyCode?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type SimpleProfileQuery = {
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

export type User = {
  __typename?: 'User';
  company?: Maybe<SimpleCompanyQuery>;
  companyId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  islogin: Scalars['Boolean'];
  lastlogin?: Maybe<Scalars['Date']>;
  position?: Maybe<PositionInterface>;
  positionId?: Maybe<Scalars['String']>;
  profile?: Maybe<SimpleProfileQuery>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']>;
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
  CreateAccountInput: CreateAccountInput;
  CreateCompanyResponseType: ResolverTypeWrapper<CreateCompanyResponseType>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  District: ResolverTypeWrapper<District>;
  FullCompanyQuery: ResolverTypeWrapper<FullCompanyQuery>;
  FullprofileQuery: ResolverTypeWrapper<FullprofileQuery>;
  GetCompanyAccessType: ResolverTypeWrapper<GetCompanyAccessType>;
  GetowmComoanyType: ResolverTypeWrapper<GetowmComoanyType>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  LoginaInput: LoginaInput;
  Me: ResolverTypeWrapper<Me>;
  Mutation: ResolverTypeWrapper<{}>;
  PositionInterface: ResolversTypes['PositionWithNameandAccess'] | ResolversTypes['PositionfullQuery'];
  PositionWithNameandAccess: ResolverTypeWrapper<PositionWithNameandAccess>;
  PositionfullQuery: ResolverTypeWrapper<PositionfullQuery>;
  Province: ResolverTypeWrapper<Province>;
  Query: ResolverTypeWrapper<{}>;
  RefreshtokenResponseType: ResolverTypeWrapper<RefreshtokenResponseType>;
  RegisterProfileInput: RegisterProfileInput;
  Role: ResolverTypeWrapper<Role>;
  SimpleCompanyQuery: ResolversTypes['FullCompanyQuery'];
  SimpleProfileQuery: ResolversTypes['FullprofileQuery'];
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Amphoe: Amphoe;
  Boolean: Scalars['Boolean'];
  CreateAccountInput: CreateAccountInput;
  CreateCompanyResponseType: CreateCompanyResponseType;
  Date: Scalars['Date'];
  District: District;
  FullCompanyQuery: FullCompanyQuery;
  FullprofileQuery: FullprofileQuery;
  GetCompanyAccessType: GetCompanyAccessType;
  GetowmComoanyType: GetowmComoanyType;
  ID: Scalars['ID'];
  LoginResponse: LoginResponse;
  LoginaInput: LoginaInput;
  Me: Me;
  Mutation: {};
  PositionInterface: ResolversParentTypes['PositionWithNameandAccess'] | ResolversParentTypes['PositionfullQuery'];
  PositionWithNameandAccess: PositionWithNameandAccess;
  PositionfullQuery: PositionfullQuery;
  Province: Province;
  Query: {};
  RefreshtokenResponseType: RefreshtokenResponseType;
  RegisterProfileInput: RegisterProfileInput;
  Role: Role;
  SimpleCompanyQuery: ResolversParentTypes['FullCompanyQuery'];
  SimpleProfileQuery: ResolversParentTypes['FullprofileQuery'];
  String: Scalars['String'];
  User: User;
}>;

export type AmphoeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Amphoe'] = ResolversParentTypes['Amphoe']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type FullCompanyQueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['FullCompanyQuery'] = ResolversParentTypes['FullCompanyQuery']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['FullCompanyQuery']>>>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['FullCompanyQuery']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positions?: Resolver<Maybe<Array<Maybe<ResolversTypes['FullprofileQuery']>>>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FullprofileQueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['FullprofileQuery'] = ResolversParentTypes['FullprofileQuery']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  religion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staff_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetCompanyAccessTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['GetCompanyAccessType'] = ResolversParentTypes['GetCompanyAccessType']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetowmComoanyTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['GetowmComoanyType'] = ResolversParentTypes['GetowmComoanyType']> = ResolversObject<{
  codeCompany?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginResponseResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = ResolversObject<{
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = ResolversObject<{
  company?: Resolver<Maybe<ResolversTypes['SimpleCompanyQuery']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['PositionInterface']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['SimpleProfileQuery']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createAccount?: Resolver<Maybe<ResolversTypes['CreateCompanyResponseType']>, ParentType, ContextType, RequireFields<MutationCreateAccountArgs, 'data'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'data'>>;
  refreshToken?: Resolver<Maybe<ResolversTypes['RefreshtokenResponseType']>, ParentType, ContextType>;
}>;

export type PositionInterfaceResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PositionInterface'] = ResolversParentTypes['PositionInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'PositionWithNameandAccess' | 'PositionfullQuery', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type PositionWithNameandAccessResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PositionWithNameandAccess'] = ResolversParentTypes['PositionWithNameandAccess']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionfullQueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PositionfullQuery'] = ResolversParentTypes['PositionfullQuery']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['SimpleCompanyQuery']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
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
  getownCompany?: Resolver<Maybe<Array<Maybe<ResolversTypes['GetowmComoanyType']>>>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<QueryUsersArgs>>;
  verifyCompanycode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryVerifyCompanycodeArgs, 'companyname'>>;
}>;

export type RefreshtokenResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['RefreshtokenResponseType'] = ResolversParentTypes['RefreshtokenResponseType']> = ResolversObject<{
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SimpleCompanyQueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['SimpleCompanyQuery'] = ResolversParentTypes['SimpleCompanyQuery']> = ResolversObject<{
  __resolveType: TypeResolveFn<'FullCompanyQuery', ParentType, ContextType>;
  companyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type SimpleProfileQueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['SimpleProfileQuery'] = ResolversParentTypes['SimpleProfileQuery']> = ResolversObject<{
  __resolveType: TypeResolveFn<'FullprofileQuery', ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staff_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  company?: Resolver<Maybe<ResolversTypes['SimpleCompanyQuery']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  islogin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastlogin?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['PositionInterface']>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['SimpleProfileQuery']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  roleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  Amphoe?: AmphoeResolvers<ContextType>;
  CreateCompanyResponseType?: CreateCompanyResponseTypeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  District?: DistrictResolvers<ContextType>;
  FullCompanyQuery?: FullCompanyQueryResolvers<ContextType>;
  FullprofileQuery?: FullprofileQueryResolvers<ContextType>;
  GetCompanyAccessType?: GetCompanyAccessTypeResolvers<ContextType>;
  GetowmComoanyType?: GetowmComoanyTypeResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Me?: MeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PositionInterface?: PositionInterfaceResolvers<ContextType>;
  PositionWithNameandAccess?: PositionWithNameandAccessResolvers<ContextType>;
  PositionfullQuery?: PositionfullQueryResolvers<ContextType>;
  Province?: ProvinceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RefreshtokenResponseType?: RefreshtokenResponseTypeResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  SimpleCompanyQuery?: SimpleCompanyQueryResolvers<ContextType>;
  SimpleProfileQuery?: SimpleProfileQueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

