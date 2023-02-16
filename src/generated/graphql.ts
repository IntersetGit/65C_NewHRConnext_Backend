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

export type BankInput = {
  bank_code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BankResponseType = {
  __typename?: 'BankResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Bookbank_Log_Type = {
  __typename?: 'Bookbank_log_type';
  User?: Maybe<User>;
  all_collectId?: Maybe<Scalars['String']>;
  bank_number?: Maybe<Scalars['String']>;
  base_salary?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  mas_bank?: Maybe<Mas_Bank>;
  mas_bankId?: Maybe<Scalars['String']>;
  provident_com?: Maybe<Scalars['Float']>;
  provident_emp?: Maybe<Scalars['Float']>;
  provident_log?: Maybe<Array<Maybe<Provident_Log>>>;
  salary?: Maybe<Array<Maybe<Salary>>>;
  userId?: Maybe<Scalars['String']>;
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
  expense_company?: Maybe<Array<Maybe<Expense_Company>>>;
  fax?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  regis_vat?: Maybe<Scalars['String']>;
  regiscomnumber?: Maybe<Scalars['String']>;
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
  BusinesstypeId?: InputMaybe<Scalars['String']>;
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
  BusinesstypeId?: InputMaybe<Scalars['String']>;
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
  contract_sameCitizen?: InputMaybe<Scalars['Boolean']>;
  contract_state?: InputMaybe<Scalars['String']>;
  contract_zipcode?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  employee_status?: InputMaybe<Scalars['String']>;
  firstname_en?: InputMaybe<Scalars['String']>;
  firstname_th?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastname_en?: InputMaybe<Scalars['String']>;
  lastname_th?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  prefix_en?: InputMaybe<Scalars['String']>;
  prefix_th?: InputMaybe<Scalars['String']>;
  relationship?: InputMaybe<Scalars['String']>;
  religion?: InputMaybe<Scalars['String']>;
  role_company?: InputMaybe<Scalars['ID']>;
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

export type CreateAndUpdateExpenseComResponseType = {
  __typename?: 'CreateAndUpdateExpenseComResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
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
  day?: InputMaybe<Scalars['Int']>;
  holiday_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  month?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
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

export type CreateleaveResponseType = {
  __typename?: 'CreateleaveResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
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

export type DeleteHolidayDateResponseType = {
  __typename?: 'DeleteHolidayDateResponseType';
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

export type DeleteSalaryResponseType = {
  __typename?: 'DeleteSalaryResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type DeletebookbankResponseType = {
  __typename?: 'DeletebookbankResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type District = {
  __typename?: 'District';
  amphoe?: Maybe<Array<Maybe<Amphoe>>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ExpenseComInput = {
  bankId?: InputMaybe<Scalars['String']>;
  cal_date_salary?: InputMaybe<Scalars['Date']>;
  check_vat?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  companyBranchId?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Date']>;
  exp_com_month?: InputMaybe<Scalars['String']>;
  exp_com_years?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ss_per?: InputMaybe<Scalars['Float']>;
  vat_per?: InputMaybe<Scalars['Float']>;
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

export type MainBusinessType = {
  __typename?: 'MainBusinessType';
  SubBusinessType?: Maybe<Array<Maybe<SubBusinessType>>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
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
  CreateAndUpdateExpenseCom?: Maybe<CreateAndUpdateExpenseComResponseType>;
  CreateSalaryStatus?: Maybe<SalaryStatusResponseType>;
  Createandupdatebookbank?: Maybe<CreatebookbanklogResponseType>;
  Createandupdatesalary?: Maybe<CreatesalaryResponseType>;
  CreatedPosition?: Maybe<CreatepositionResponseType>;
  Createincometype?: Maybe<IncometypeResponseType>;
  Createmonth?: Maybe<MonthResponseType>;
  Createyears?: Maybe<YearsResponseType>;
  DeleteSalary?: Maybe<DeleteSalaryResponseType>;
  Deletebookbank?: Maybe<DeletebookbankResponseType>;
  EditPosition?: Maybe<CreatepositionResponseType>;
  createAccount?: Maybe<CreateCompanyResponseType>;
  createAccountUser?: Maybe<CreateUserResponseType>;
  createAndUpdateComBarance?: Maybe<CreateComapnyBranchResponseType>;
  createAndUpdateHolidayDate?: Maybe<CreateHolidayDateResponseType>;
  createBank?: Maybe<BankResponseType>;
  createHolidayYear?: Maybe<CreateHolidayYearResponseType>;
  createRoleCompany?: Maybe<CreateRoleCompanyResponseType>;
  createddata_leave?: Maybe<CreateleaveResponseType>;
  createdposition_user?: Maybe<CreatepositionResponseType>;
  deleteAccountUser?: Maybe<DeleteAccountUserResponseType>;
  deleteComBarance?: Maybe<DeleteComapnyBranchResponseType>;
  deleteHolidayDate?: Maybe<DeleteHolidayDateResponseType>;
  deleteHolidayYear?: Maybe<DeleteHolidayYearResponseType>;
  deleteRoleCompany?: Maybe<DeleteRoleCompanyRespnsetType>;
  editstatusleave?: Maybe<CreateleaveResponseType>;
  login?: Maybe<LoginResponse>;
  refreshToken?: Maybe<RefreshtokenResponseType>;
  updateRoleCompanyMangement?: Maybe<CreateRoleCompanyResponseType>;
  validateRoute?: Maybe<ValidateRoute>;
};


export type MutationCreateAndUpdateExpenseComArgs = {
  data?: InputMaybe<ExpenseComInput>;
};


export type MutationCreateSalaryStatusArgs = {
  data?: InputMaybe<Salary_Status_Input>;
};


export type MutationCreateandupdatebookbankArgs = {
  data?: InputMaybe<Bookbank_LogInput>;
};


export type MutationCreateandupdatesalaryArgs = {
  data?: InputMaybe<SalaryInput>;
};


export type MutationCreatedPositionArgs = {
  data?: InputMaybe<Array<CreatedAndUpdatePosition>>;
};


export type MutationCreateincometypeArgs = {
  data?: InputMaybe<Incometype>;
};


export type MutationCreatemonthArgs = {
  data?: InputMaybe<MonthInput>;
};


export type MutationCreateyearsArgs = {
  data?: InputMaybe<YearsInput>;
};


export type MutationDeleteSalaryArgs = {
  salaryid: Scalars['ID'];
  userId: Scalars['String'];
};


export type MutationDeletebookbankArgs = {
  id: Scalars['ID'];
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


export type MutationCreateAndUpdateHolidayDateArgs = {
  data?: InputMaybe<Array<CreateHolidayDate>>;
};


export type MutationCreateBankArgs = {
  data?: InputMaybe<BankInput>;
};


export type MutationCreateHolidayYearArgs = {
  data?: InputMaybe<Array<CreateHolidayYears>>;
};


export type MutationCreateRoleCompanyArgs = {
  data: CreateRoleCompanyGroup;
};


export type MutationCreateddata_LeaveArgs = {
  data?: InputMaybe<Leave>;
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


export type MutationDeleteHolidayDateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteHolidayYearArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoleCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationEditstatusleaveArgs = {
  data?: InputMaybe<Leave>;
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
  header?: Maybe<User>;
  id?: Maybe<Scalars['ID']>;
  log_position?: Maybe<Array<Maybe<Log_Positionn>>>;
  mas_positionlevel1?: Maybe<Mas_Positionlevel1>;
  mas_positionlevel2?: Maybe<Mas_Positionlevel2>;
  mas_positionlevel3?: Maybe<Mas_Positionlevel3>;
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
  GetHolidayDate?: Maybe<Array<Holiday_Date>>;
  SalarySlip?: Maybe<Slipresolvers>;
  bookbank_log?: Maybe<Array<Maybe<Bookbank_Log_Type>>>;
  bookbank_log_admin?: Maybe<Array<Maybe<Bookbank_Log_Type>>>;
  company?: Maybe<ResponseCompany>;
  data_salary?: Maybe<Array<Maybe<Data_Salary>>>;
  expense_company?: Maybe<Array<Maybe<Expense_Company>>>;
  getAllcompany?: Maybe<Array<Maybe<CompanyBranch>>>;
  getAllleave?: Maybe<GetleaveResponseType>;
  getBusinessType?: Maybe<Array<Maybe<MainBusinessType>>>;
  getMasPositon?: Maybe<Array<Maybe<Mas_Positionlevel1>>>;
  getProvince?: Maybe<Array<Maybe<Province>>>;
  getcompanyRole?: Maybe<Array<Maybe<Role_Company>>>;
  getleava_alldata?: Maybe<Array<Maybe<Leave_Data>>>;
  getleava_datame?: Maybe<GetleaveResponseType>;
  getleavetypedata?: Maybe<Array<Maybe<Mas_Leave_Type>>>;
  getownCompany?: Maybe<GetOwncompanytype>;
  getpositionMe?: Maybe<Array<Maybe<GetPositionUser>>>;
  getposition_user?: Maybe<Array<Maybe<GetPositionUser>>>;
  mas_all_collect?: Maybe<Mas_All_Collect>;
  mas_bank?: Maybe<Array<Maybe<Mas_Bank>>>;
  me?: Maybe<Me>;
  mydata_salary?: Maybe<Data_Salary>;
  provident_log?: Maybe<Array<Maybe<Provident_Log>>>;
  salary?: Maybe<Data_Salary>;
  salary_inmonthSlip?: Maybe<Array<Maybe<Data_Salary>>>;
  users?: Maybe<Array<Maybe<User>>>;
  verifyCompanycode?: Maybe<Scalars['Boolean']>;
};


export type QuerySalarySlipArgs = {
  month?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  years?: InputMaybe<Scalars['String']>;
};


export type QueryBookbank_Log_AdminArgs = {
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryCompanyArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryData_SalaryArgs = {
  Position2?: InputMaybe<Scalars['String']>;
  Position3?: InputMaybe<Scalars['String']>;
  fristname?: InputMaybe<Scalars['String']>;
};


export type QueryExpense_CompanyArgs = {
  date?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllcompanyArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllleaveArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetcompanyRoleArgs = {
  role_name?: InputMaybe<Scalars['String']>;
};


export type QueryGetleava_AlldataArgs = {
  dataleaveId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetleava_DatameArgs = {
  dataleaveId?: InputMaybe<Scalars['ID']>;
};


export type QueryGetposition_UserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMas_BankArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryMydata_SalaryArgs = {
  years?: InputMaybe<Scalars['String']>;
};


export type QueryProvident_LogArgs = {
  userId?: InputMaybe<Scalars['String']>;
};


export type QuerySalaryArgs = {
  userId?: InputMaybe<Scalars['String']>;
  years?: InputMaybe<Scalars['String']>;
};


export type QuerySalary_InmonthSlipArgs = {
  month?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  years?: InputMaybe<Scalars['String']>;
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
  regis_vat?: Maybe<Scalars['String']>;
  regiscomnumber?: Maybe<Scalars['String']>;
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

export type SalaryResponseType = {
  __typename?: 'SalaryResponseType';
  userId?: Maybe<Scalars['String']>;
};

export type SalaryStatusResponseType = {
  __typename?: 'SalaryStatusResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type SubBusinessType = {
  __typename?: 'SubBusinessType';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UpdateRoleCompanyMangementType = {
  access: Array<Scalars['JSON']>;
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  Position_user?: Maybe<Array<Maybe<Position_User>>>;
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
  salary?: Maybe<Array<Maybe<Salary>>>;
};

export type ValidateRoute = {
  __typename?: 'ValidateRoute';
  acess?: Maybe<Scalars['Boolean']>;
  currentBranch?: Maybe<ResponseBranchValidateRouteType>;
  path?: Maybe<Scalars['String']>;
  reAccess?: Maybe<Scalars['String']>;
  reFresh?: Maybe<Scalars['String']>;
};

export type Book_Bank_LogResponseType = {
  __typename?: 'book_bank_logResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Bookbank_Log = {
  __typename?: 'bookbank_log';
  Salary?: Maybe<Salary>;
  all_collectId?: Maybe<Scalars['String']>;
  bank_number?: Maybe<Scalars['String']>;
  base_salary?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  mas_bankId?: Maybe<Scalars['String']>;
  provident_com?: Maybe<Scalars['Float']>;
  provident_emp?: Maybe<Scalars['Float']>;
  userId?: Maybe<User>;
};

export type Bookbank_LogInput = {
  all_collectId?: InputMaybe<Scalars['String']>;
  bank_number?: InputMaybe<Scalars['String']>;
  base_salary?: InputMaybe<Scalars['Float']>;
  date?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  mas_all_collectId?: InputMaybe<Scalars['String']>;
  mas_bankId?: InputMaybe<Scalars['String']>;
  pro_company?: InputMaybe<Scalars['Float']>;
  pro_employee?: InputMaybe<Scalars['Float']>;
  provident_com?: InputMaybe<Scalars['Float']>;
  provident_date?: InputMaybe<Scalars['Date']>;
  provident_emp?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['String']>;
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
  regis_vat?: InputMaybe<Scalars['String']>;
  regiscomnumber?: InputMaybe<Scalars['String']>;
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

export type CreatebookbanklogResponseType = {
  __typename?: 'createbookbanklogResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type CreatesalaryResponseType = {
  __typename?: 'createsalaryResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Data_Salary = {
  __typename?: 'data_salary';
  Position_user?: Maybe<Array<Maybe<Position_User>>>;
  RoleCompanyID?: Maybe<Scalars['String']>;
  Role_Company?: Maybe<Role_Company>;
  bookbank_log?: Maybe<Array<Maybe<Bookbank_Log_Type>>>;
  company?: Maybe<Array<Maybe<Company>>>;
  companyBranch?: Maybe<CompanyBranch>;
  companyBranchId?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  expense_company?: Maybe<Array<Maybe<Expense_Company>>>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  isOwner?: Maybe<Scalars['Boolean']>;
  islogin?: Maybe<Scalars['Boolean']>;
  lastlogin?: Maybe<Scalars['Date']>;
  profile?: Maybe<Profile>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']>;
  salary?: Maybe<Array<Maybe<Salary>>>;
};

export type Data_Salary_Me = {
  __typename?: 'data_salary_me';
  RoleCompanyID?: Maybe<Scalars['String']>;
  Role_Company?: Maybe<Role_Company>;
  bookbank_log?: Maybe<Array<Maybe<Bookbank_Log_Type>>>;
  company?: Maybe<Array<Maybe<Company>>>;
  companyBranch?: Maybe<CompanyBranch>;
  companyBranchId?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  isOwner?: Maybe<Scalars['Boolean']>;
  islogin?: Maybe<Scalars['Boolean']>;
  lastlogin?: Maybe<Scalars['Date']>;
  mas_bank?: Maybe<Mas_Bank>;
  profile?: Maybe<Profile>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']>;
  salary?: Maybe<Array<Maybe<Salary>>>;
};

export type Expense_Company = {
  __typename?: 'expense_company';
  CompanyBranch?: Maybe<CompanyBranch>;
  Mas_month?: Maybe<Mas_Month>;
  Salary?: Maybe<Salary>;
  bankId?: Maybe<Scalars['String']>;
  cal_date_salary?: Maybe<Scalars['Date']>;
  check_vat?: Maybe<Array<Maybe<Scalars['String']>>>;
  companyBranchId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  exp_com_month?: Maybe<Scalars['String']>;
  exp_com_years?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mas_bank?: Maybe<Mas_Bank>;
  monthId?: Maybe<Scalars['String']>;
  salary?: Maybe<Array<Maybe<Salary>>>;
  social_security?: Maybe<Scalars['Float']>;
  ss_per?: Maybe<Scalars['Float']>;
  vat_per?: Maybe<Scalars['Float']>;
};

export type GetPositionUser = {
  __typename?: 'getPositionUser';
  date?: Maybe<Scalars['Date']>;
  header?: Maybe<User>;
  id?: Maybe<Scalars['ID']>;
  mas_positionlevel1?: Maybe<Mas_Positionlevel1>;
  mas_positionlevel2?: Maybe<Mas_Positionlevel2>;
  mas_positionlevel3?: Maybe<Mas_Positionlevel3>;
  position1_id?: Maybe<Scalars['String']>;
  position2_id?: Maybe<Scalars['String']>;
  position3_id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Getcount = {
  __typename?: 'getcount';
  count1?: Maybe<Scalars['Int']>;
  count2?: Maybe<Scalars['Int']>;
  count3?: Maybe<Scalars['Int']>;
  count4?: Maybe<Scalars['Int']>;
  name_1?: Maybe<Scalars['String']>;
  name_2?: Maybe<Scalars['String']>;
  name_3?: Maybe<Scalars['String']>;
  name_4?: Maybe<Scalars['String']>;
};

export type Getdataaboutleave = {
  __typename?: 'getdataaboutleave';
  Position_user?: Maybe<Array<Maybe<Position_User>>>;
  RoleCompanyID?: Maybe<Scalars['String']>;
  Role_Company?: Maybe<Role_Company>;
  company?: Maybe<Array<Maybe<Company>>>;
  companyBranch?: Maybe<CompanyBranch>;
  companyBranchId?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  data_leave?: Maybe<Array<Maybe<Leave_Data>>>;
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

export type GetleaveResponseType = {
  __typename?: 'getleaveResponseType';
  data_all?: Maybe<Array<Maybe<Getdataaboutleave>>>;
  data_count?: Maybe<Getcount>;
};

export type Headderdata = {
  __typename?: 'headderdata';
  headderId?: Maybe<Scalars['String']>;
  headder_data?: Maybe<Profile>;
};

export type Holiday_Date = {
  __typename?: 'holiday_date';
  Company?: Maybe<Company>;
  CompanyId?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['Int']>;
  holiday_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  month?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Holiday_Years = {
  __typename?: 'holiday_years';
  day?: Maybe<Scalars['Int']>;
  holiday_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Incometype = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IncometypeResponseType = {
  __typename?: 'incometypeResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type Leave = {
  Status?: InputMaybe<Scalars['Int']>;
  detail_leave?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  leavetype_id?: InputMaybe<Scalars['String']>;
  quantity_day?: InputMaybe<Scalars['Int']>;
  quantity_hours?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['Date']>;
  user_id?: InputMaybe<Scalars['String']>;
};

export type Leave_Data = {
  __typename?: 'leave_data';
  Status?: Maybe<Scalars['Int']>;
  detail_leave?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  leavetype_id?: Maybe<Scalars['String']>;
  mas_leave_type?: Maybe<Mas_Leave_Type>;
  quantity_day?: Maybe<Scalars['Int']>;
  quantity_hours?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['String']>;
};

export type Log_Positionn = {
  __typename?: 'log_positionn';
  Position_user?: Maybe<Array<Maybe<Position_User>>>;
  cretedBy?: Maybe<Scalars['String']>;
  cretedByfk?: Maybe<User>;
  creteddate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  positionId?: Maybe<Scalars['String']>;
  updtedBy?: Maybe<Scalars['String']>;
  updtedByfk?: Maybe<User>;
  updteddate?: Maybe<Scalars['Date']>;
};

export type Mas_All_Collect = {
  __typename?: 'mas_all_collect';
  User?: Maybe<User>;
  date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  income_collect?: Maybe<Scalars['Float']>;
  provident_collect_company?: Maybe<Scalars['Float']>;
  provident_collect_employee?: Maybe<Scalars['Float']>;
  provident_log?: Maybe<Array<Maybe<Provident_Log>>>;
  social_secu_collect?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['String']>;
  vat_collect?: Maybe<Scalars['Float']>;
};

export type Mas_Bank = {
  __typename?: 'mas_bank';
  bank_code?: Maybe<Scalars['String']>;
  bookbank_log?: Maybe<Bookbank_Log_Type>;
  expense_company?: Maybe<Expense_Company>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  salary?: Maybe<Array<Maybe<Salary>>>;
};

export type Mas_Leave_Type = {
  __typename?: 'mas_leave_type';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderby?: Maybe<Scalars['Int']>;
};

export type Mas_Month = {
  __typename?: 'mas_month';
  bookbank_log?: Maybe<Array<Maybe<Bookbank_Log_Type>>>;
  expense_company?: Maybe<Array<Maybe<Expense_Company>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  salary?: Maybe<Array<Maybe<Salary>>>;
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

export type Mas_Salary_Status = {
  __typename?: 'mas_salary_status';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  no?: Maybe<Scalars['Int']>;
  salary?: Maybe<Array<Maybe<Salary>>>;
};

export type MonthInput = {
  id?: InputMaybe<Scalars['ID']>;
  month_number?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MonthResponseType = {
  __typename?: 'monthResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
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

export type Position_Userr = {
  __typename?: 'position_userr';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  position1_id?: Maybe<Scalars['String']>;
  position2_id?: Maybe<Scalars['String']>;
  position3_id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Provident_Log = {
  __typename?: 'provident_log';
  User?: Maybe<User>;
  bookbank_log?: Maybe<Bookbank_Log_Type>;
  bookbank_logId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mas_all_collect?: Maybe<Mas_All_Collect>;
  mas_all_collectId?: Maybe<Scalars['String']>;
  pro_company?: Maybe<Scalars['Float']>;
  pro_employee?: Maybe<Scalars['Float']>;
  provident_date?: Maybe<Scalars['Date']>;
  salary?: Maybe<Salary>;
  salaryId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type Provident_LogInput = {
  id?: InputMaybe<Scalars['ID']>;
  mas_all_collectId?: InputMaybe<Scalars['String']>;
  pro_company?: InputMaybe<Scalars['Float']>;
  pro_employee?: InputMaybe<Scalars['Float']>;
  provident_date?: InputMaybe<Scalars['Date']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type Salary = {
  __typename?: 'salary';
  bonus?: Maybe<Scalars['Float']>;
  bookbank_log?: Maybe<Bookbank_Log_Type>;
  bookbank_logId?: Maybe<Scalars['String']>;
  bursary?: Maybe<Scalars['Float']>;
  commission?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  incomeYears?: Maybe<Scalars['Float']>;
  late?: Maybe<Scalars['Float']>;
  mas_all_collectId?: Maybe<Scalars['String']>;
  mas_bank?: Maybe<Mas_Bank>;
  mas_bankId?: Maybe<Scalars['String']>;
  mas_income_typeId?: Maybe<Scalars['String']>;
  mas_salary_statusId?: Maybe<Scalars['String']>;
  miss?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['String']>;
  net?: Maybe<Scalars['Float']>;
  ot?: Maybe<Scalars['Float']>;
  other?: Maybe<Scalars['Float']>;
  other_income?: Maybe<Scalars['Float']>;
  position_income?: Maybe<Scalars['Float']>;
  pro_company?: Maybe<Scalars['Float']>;
  pro_employee?: Maybe<Scalars['Float']>;
  provident_company?: Maybe<Scalars['Float']>;
  provident_date?: Maybe<Scalars['Date']>;
  provident_employee?: Maybe<Scalars['Float']>;
  ra?: Maybe<Scalars['Float']>;
  socialYears?: Maybe<Scalars['Float']>;
  social_security?: Maybe<Scalars['Float']>;
  special_income?: Maybe<Scalars['Float']>;
  ss_per?: Maybe<Scalars['Float']>;
  total_expense?: Maybe<Scalars['Float']>;
  total_income?: Maybe<Scalars['Float']>;
  travel_income?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['Float']>;
  vatYears?: Maybe<Scalars['Float']>;
  vatper?: Maybe<Scalars['Float']>;
  welfare_money?: Maybe<Scalars['Float']>;
  years?: Maybe<Scalars['String']>;
};

export type SalaryInput = {
  bonus?: InputMaybe<Scalars['Float']>;
  bookbank_logId?: InputMaybe<Scalars['String']>;
  bursary?: InputMaybe<Scalars['Float']>;
  commission?: InputMaybe<Scalars['Float']>;
  create_by?: InputMaybe<Scalars['String']>;
  create_date?: InputMaybe<Scalars['Date']>;
  date?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ID']>;
  incomeYears?: InputMaybe<Scalars['Float']>;
  late?: InputMaybe<Scalars['Float']>;
  mas_all_collectId?: InputMaybe<Scalars['String']>;
  mas_bankId?: InputMaybe<Scalars['String']>;
  mas_income_typeId?: InputMaybe<Scalars['String']>;
  mas_salary_statusId?: InputMaybe<Scalars['String']>;
  miss?: InputMaybe<Scalars['Float']>;
  month?: InputMaybe<Scalars['String']>;
  net?: InputMaybe<Scalars['Float']>;
  ot?: InputMaybe<Scalars['Float']>;
  other?: InputMaybe<Scalars['Float']>;
  other_income?: InputMaybe<Scalars['Float']>;
  position_income?: InputMaybe<Scalars['Float']>;
  pro_company?: InputMaybe<Scalars['Float']>;
  pro_employee?: InputMaybe<Scalars['Float']>;
  provident_company?: InputMaybe<Scalars['Float']>;
  provident_date?: InputMaybe<Scalars['Date']>;
  provident_employee?: InputMaybe<Scalars['Float']>;
  ra?: InputMaybe<Scalars['Float']>;
  socialYears?: InputMaybe<Scalars['Float']>;
  social_security?: InputMaybe<Scalars['Float']>;
  special_income?: InputMaybe<Scalars['Float']>;
  total_expense?: InputMaybe<Scalars['Float']>;
  total_income?: InputMaybe<Scalars['Float']>;
  travel_income?: InputMaybe<Scalars['Float']>;
  update_by?: InputMaybe<Scalars['String']>;
  update_date?: InputMaybe<Scalars['Date']>;
  userId?: InputMaybe<Scalars['String']>;
  vat?: InputMaybe<Scalars['Float']>;
  vatYears?: InputMaybe<Scalars['Float']>;
  welfare_money?: InputMaybe<Scalars['Float']>;
  year?: InputMaybe<Scalars['String']>;
};

export type Salary_Status_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  no?: InputMaybe<Scalars['Int']>;
};

export type Slipresolvers = {
  __typename?: 'slipresolvers';
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type YearsInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type YearsResponseType = {
  __typename?: 'yearsResponseType';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
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
  BankInput: BankInput;
  BankResponseType: ResolverTypeWrapper<BankResponseType>;
  Bookbank_log_type: ResolverTypeWrapper<Bookbank_Log_Type>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Company: ResolverTypeWrapper<Company>;
  CompanyBranch: ResolverTypeWrapper<CompanyBranch>;
  CountBranch: ResolverTypeWrapper<CountBranch>;
  CountInsideBranch: ResolverTypeWrapper<CountInsideBranch>;
  CreateAccountInput: CreateAccountInput;
  CreateAccountUserInput: CreateAccountUserInput;
  CreateAndUpdateExpenseComResponseType: ResolverTypeWrapper<CreateAndUpdateExpenseComResponseType>;
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
  CreateleaveResponseType: ResolverTypeWrapper<CreateleaveResponseType>;
  CreatepositionResponseType: ResolverTypeWrapper<CreatepositionResponseType>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DeleteAccountUserResponseType: ResolverTypeWrapper<DeleteAccountUserResponseType>;
  DeleteComapnyBranchResponseType: ResolverTypeWrapper<DeleteComapnyBranchResponseType>;
  DeleteHolidayDateResponseType: ResolverTypeWrapper<DeleteHolidayDateResponseType>;
  DeleteHolidayYearResponseType: ResolverTypeWrapper<DeleteHolidayYearResponseType>;
  DeleteRoleCompanyRespnsetType: ResolverTypeWrapper<DeleteRoleCompanyRespnsetType>;
  DeleteSalaryResponseType: ResolverTypeWrapper<DeleteSalaryResponseType>;
  DeletebookbankResponseType: ResolverTypeWrapper<DeletebookbankResponseType>;
  District: ResolverTypeWrapper<District>;
  ExpenseComInput: ExpenseComInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GetCompanyAccessType: ResolverTypeWrapper<GetCompanyAccessType>;
  GetOwncompanytype: ResolverTypeWrapper<GetOwncompanytype>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  LoginaInput: LoginaInput;
  MainBusinessType: ResolverTypeWrapper<MainBusinessType>;
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
  SalaryResponseType: ResolverTypeWrapper<SalaryResponseType>;
  SalaryStatusResponseType: ResolverTypeWrapper<SalaryStatusResponseType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubBusinessType: ResolverTypeWrapper<SubBusinessType>;
  UpdateRoleCompanyMangementType: UpdateRoleCompanyMangementType;
  User: ResolverTypeWrapper<User>;
  ValidateRoute: ResolverTypeWrapper<ValidateRoute>;
  book_bank_logResponseType: ResolverTypeWrapper<Book_Bank_LogResponseType>;
  bookbank_log: ResolverTypeWrapper<Bookbank_Log>;
  bookbank_logInput: Bookbank_LogInput;
  createCompanyBranch: CreateCompanyBranch;
  createRoleCompanyGroup: CreateRoleCompanyGroup;
  createbookbanklogResponseType: ResolverTypeWrapper<CreatebookbanklogResponseType>;
  createsalaryResponseType: ResolverTypeWrapper<CreatesalaryResponseType>;
  data_salary: ResolverTypeWrapper<Data_Salary>;
  data_salary_me: ResolverTypeWrapper<Data_Salary_Me>;
  expense_company: ResolverTypeWrapper<Expense_Company>;
  getPositionUser: ResolverTypeWrapper<GetPositionUser>;
  getcount: ResolverTypeWrapper<Getcount>;
  getdataaboutleave: ResolverTypeWrapper<Getdataaboutleave>;
  getleaveResponseType: ResolverTypeWrapper<GetleaveResponseType>;
  headderdata: ResolverTypeWrapper<Headderdata>;
  holiday_date: ResolverTypeWrapper<Holiday_Date>;
  holiday_years: ResolverTypeWrapper<Holiday_Years>;
  incometype: Incometype;
  incometypeResponseType: ResolverTypeWrapper<IncometypeResponseType>;
  leave: Leave;
  leave_data: ResolverTypeWrapper<Leave_Data>;
  log_positionn: ResolverTypeWrapper<Log_Positionn>;
  mas_all_collect: ResolverTypeWrapper<Mas_All_Collect>;
  mas_bank: ResolverTypeWrapper<Mas_Bank>;
  mas_leave_type: ResolverTypeWrapper<Mas_Leave_Type>;
  mas_month: ResolverTypeWrapper<Mas_Month>;
  mas_position: ResolverTypeWrapper<Mas_Position>;
  mas_positionlevel1: ResolverTypeWrapper<Mas_Positionlevel1>;
  mas_positionlevel2: ResolverTypeWrapper<Mas_Positionlevel2>;
  mas_positionlevel3: ResolverTypeWrapper<Mas_Positionlevel3>;
  mas_salary_status: ResolverTypeWrapper<Mas_Salary_Status>;
  monthInput: MonthInput;
  monthResponseType: ResolverTypeWrapper<MonthResponseType>;
  position: Position;
  position_userr: ResolverTypeWrapper<Position_Userr>;
  provident_log: ResolverTypeWrapper<Provident_Log>;
  provident_logInput: Provident_LogInput;
  salary: ResolverTypeWrapper<Salary>;
  salaryInput: SalaryInput;
  salary_status_input: Salary_Status_Input;
  slipresolvers: ResolverTypeWrapper<Slipresolvers>;
  yearsInput: YearsInput;
  yearsResponseType: ResolverTypeWrapper<YearsResponseType>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Amphoe: Amphoe;
  BankInput: BankInput;
  BankResponseType: BankResponseType;
  Bookbank_log_type: Bookbank_Log_Type;
  Boolean: Scalars['Boolean'];
  Company: Company;
  CompanyBranch: CompanyBranch;
  CountBranch: CountBranch;
  CountInsideBranch: CountInsideBranch;
  CreateAccountInput: CreateAccountInput;
  CreateAccountUserInput: CreateAccountUserInput;
  CreateAndUpdateExpenseComResponseType: CreateAndUpdateExpenseComResponseType;
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
  CreateleaveResponseType: CreateleaveResponseType;
  CreatepositionResponseType: CreatepositionResponseType;
  Date: Scalars['Date'];
  DeleteAccountUserResponseType: DeleteAccountUserResponseType;
  DeleteComapnyBranchResponseType: DeleteComapnyBranchResponseType;
  DeleteHolidayDateResponseType: DeleteHolidayDateResponseType;
  DeleteHolidayYearResponseType: DeleteHolidayYearResponseType;
  DeleteRoleCompanyRespnsetType: DeleteRoleCompanyRespnsetType;
  DeleteSalaryResponseType: DeleteSalaryResponseType;
  DeletebookbankResponseType: DeletebookbankResponseType;
  District: District;
  ExpenseComInput: ExpenseComInput;
  Float: Scalars['Float'];
  GetCompanyAccessType: GetCompanyAccessType;
  GetOwncompanytype: GetOwncompanytype;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  LoginResponse: LoginResponse;
  LoginaInput: LoginaInput;
  MainBusinessType: MainBusinessType;
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
  SalaryResponseType: SalaryResponseType;
  SalaryStatusResponseType: SalaryStatusResponseType;
  String: Scalars['String'];
  SubBusinessType: SubBusinessType;
  UpdateRoleCompanyMangementType: UpdateRoleCompanyMangementType;
  User: User;
  ValidateRoute: ValidateRoute;
  book_bank_logResponseType: Book_Bank_LogResponseType;
  bookbank_log: Bookbank_Log;
  bookbank_logInput: Bookbank_LogInput;
  createCompanyBranch: CreateCompanyBranch;
  createRoleCompanyGroup: CreateRoleCompanyGroup;
  createbookbanklogResponseType: CreatebookbanklogResponseType;
  createsalaryResponseType: CreatesalaryResponseType;
  data_salary: Data_Salary;
  data_salary_me: Data_Salary_Me;
  expense_company: Expense_Company;
  getPositionUser: GetPositionUser;
  getcount: Getcount;
  getdataaboutleave: Getdataaboutleave;
  getleaveResponseType: GetleaveResponseType;
  headderdata: Headderdata;
  holiday_date: Holiday_Date;
  holiday_years: Holiday_Years;
  incometype: Incometype;
  incometypeResponseType: IncometypeResponseType;
  leave: Leave;
  leave_data: Leave_Data;
  log_positionn: Log_Positionn;
  mas_all_collect: Mas_All_Collect;
  mas_bank: Mas_Bank;
  mas_leave_type: Mas_Leave_Type;
  mas_month: Mas_Month;
  mas_position: Mas_Position;
  mas_positionlevel1: Mas_Positionlevel1;
  mas_positionlevel2: Mas_Positionlevel2;
  mas_positionlevel3: Mas_Positionlevel3;
  mas_salary_status: Mas_Salary_Status;
  monthInput: MonthInput;
  monthResponseType: MonthResponseType;
  position: Position;
  position_userr: Position_Userr;
  provident_log: Provident_Log;
  provident_logInput: Provident_LogInput;
  salary: Salary;
  salaryInput: SalaryInput;
  salary_status_input: Salary_Status_Input;
  slipresolvers: Slipresolvers;
  yearsInput: YearsInput;
  yearsResponseType: YearsResponseType;
}>;

export type AmphoeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Amphoe'] = ResolversParentTypes['Amphoe']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BankResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['BankResponseType'] = ResolversParentTypes['BankResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Bookbank_Log_TypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Bookbank_log_type'] = ResolversParentTypes['Bookbank_log_type']> = ResolversObject<{
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  all_collectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_salary?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mas_bank?: Resolver<Maybe<ResolversTypes['mas_bank']>, ParentType, ContextType>;
  mas_bankId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provident_com?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  provident_emp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  provident_log?: Resolver<Maybe<Array<Maybe<ResolversTypes['provident_log']>>>, ParentType, ContextType>;
  salary?: Resolver<Maybe<Array<Maybe<ResolversTypes['salary']>>>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  expense_company?: Resolver<Maybe<Array<Maybe<ResolversTypes['expense_company']>>>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regis_vat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regiscomnumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type CreateAndUpdateExpenseComResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CreateAndUpdateExpenseComResponseType'] = ResolversParentTypes['CreateAndUpdateExpenseComResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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

export type CreateleaveResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['CreateleaveResponseType'] = ResolversParentTypes['CreateleaveResponseType']> = ResolversObject<{
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

export type DeleteHolidayDateResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['DeleteHolidayDateResponseType'] = ResolversParentTypes['DeleteHolidayDateResponseType']> = ResolversObject<{
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

export type DeleteSalaryResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['DeleteSalaryResponseType'] = ResolversParentTypes['DeleteSalaryResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeletebookbankResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['DeletebookbankResponseType'] = ResolversParentTypes['DeletebookbankResponseType']> = ResolversObject<{
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

export type MainBusinessTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['MainBusinessType'] = ResolversParentTypes['MainBusinessType']> = ResolversObject<{
  SubBusinessType?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubBusinessType']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  CreateAndUpdateExpenseCom?: Resolver<Maybe<ResolversTypes['CreateAndUpdateExpenseComResponseType']>, ParentType, ContextType, Partial<MutationCreateAndUpdateExpenseComArgs>>;
  CreateSalaryStatus?: Resolver<Maybe<ResolversTypes['SalaryStatusResponseType']>, ParentType, ContextType, Partial<MutationCreateSalaryStatusArgs>>;
  Createandupdatebookbank?: Resolver<Maybe<ResolversTypes['createbookbanklogResponseType']>, ParentType, ContextType, Partial<MutationCreateandupdatebookbankArgs>>;
  Createandupdatesalary?: Resolver<Maybe<ResolversTypes['createsalaryResponseType']>, ParentType, ContextType, Partial<MutationCreateandupdatesalaryArgs>>;
  CreatedPosition?: Resolver<Maybe<ResolversTypes['CreatepositionResponseType']>, ParentType, ContextType, Partial<MutationCreatedPositionArgs>>;
  Createincometype?: Resolver<Maybe<ResolversTypes['incometypeResponseType']>, ParentType, ContextType, Partial<MutationCreateincometypeArgs>>;
  Createmonth?: Resolver<Maybe<ResolversTypes['monthResponseType']>, ParentType, ContextType, Partial<MutationCreatemonthArgs>>;
  Createyears?: Resolver<Maybe<ResolversTypes['yearsResponseType']>, ParentType, ContextType, Partial<MutationCreateyearsArgs>>;
  DeleteSalary?: Resolver<Maybe<ResolversTypes['DeleteSalaryResponseType']>, ParentType, ContextType, RequireFields<MutationDeleteSalaryArgs, 'salaryid' | 'userId'>>;
  Deletebookbank?: Resolver<Maybe<ResolversTypes['DeletebookbankResponseType']>, ParentType, ContextType, RequireFields<MutationDeletebookbankArgs, 'id'>>;
  EditPosition?: Resolver<Maybe<ResolversTypes['CreatepositionResponseType']>, ParentType, ContextType, Partial<MutationEditPositionArgs>>;
  createAccount?: Resolver<Maybe<ResolversTypes['CreateCompanyResponseType']>, ParentType, ContextType, RequireFields<MutationCreateAccountArgs, 'data'>>;
  createAccountUser?: Resolver<Maybe<ResolversTypes['CreateUserResponseType']>, ParentType, ContextType, RequireFields<MutationCreateAccountUserArgs, 'data'>>;
  createAndUpdateComBarance?: Resolver<Maybe<ResolversTypes['CreateComapnyBranchResponseType']>, ParentType, ContextType, RequireFields<MutationCreateAndUpdateComBaranceArgs, 'data'>>;
  createAndUpdateHolidayDate?: Resolver<Maybe<ResolversTypes['CreateHolidayDateResponseType']>, ParentType, ContextType, Partial<MutationCreateAndUpdateHolidayDateArgs>>;
  createBank?: Resolver<Maybe<ResolversTypes['BankResponseType']>, ParentType, ContextType, Partial<MutationCreateBankArgs>>;
  createHolidayYear?: Resolver<Maybe<ResolversTypes['CreateHolidayYearResponseType']>, ParentType, ContextType, Partial<MutationCreateHolidayYearArgs>>;
  createRoleCompany?: Resolver<Maybe<ResolversTypes['CreateRoleCompanyResponseType']>, ParentType, ContextType, RequireFields<MutationCreateRoleCompanyArgs, 'data'>>;
  createddata_leave?: Resolver<Maybe<ResolversTypes['CreateleaveResponseType']>, ParentType, ContextType, Partial<MutationCreateddata_LeaveArgs>>;
  createdposition_user?: Resolver<Maybe<ResolversTypes['CreatepositionResponseType']>, ParentType, ContextType, RequireFields<MutationCreatedposition_UserArgs, 'data'>>;
  deleteAccountUser?: Resolver<Maybe<ResolversTypes['DeleteAccountUserResponseType']>, ParentType, ContextType, RequireFields<MutationDeleteAccountUserArgs, 'id'>>;
  deleteComBarance?: Resolver<Maybe<ResolversTypes['DeleteComapnyBranchResponseType']>, ParentType, ContextType, RequireFields<MutationDeleteComBaranceArgs, 'id'>>;
  deleteHolidayDate?: Resolver<Maybe<ResolversTypes['DeleteHolidayDateResponseType']>, ParentType, ContextType, RequireFields<MutationDeleteHolidayDateArgs, 'id'>>;
  deleteHolidayYear?: Resolver<Maybe<ResolversTypes['DeleteHolidayYearResponseType']>, ParentType, ContextType, RequireFields<MutationDeleteHolidayYearArgs, 'id'>>;
  deleteRoleCompany?: Resolver<Maybe<ResolversTypes['DeleteRoleCompanyRespnsetType']>, ParentType, ContextType, RequireFields<MutationDeleteRoleCompanyArgs, 'id'>>;
  editstatusleave?: Resolver<Maybe<ResolversTypes['CreateleaveResponseType']>, ParentType, ContextType, Partial<MutationEditstatusleaveArgs>>;
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
  header?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  log_position?: Resolver<Maybe<Array<Maybe<ResolversTypes['log_positionn']>>>, ParentType, ContextType>;
  mas_positionlevel1?: Resolver<Maybe<ResolversTypes['mas_positionlevel1']>, ParentType, ContextType>;
  mas_positionlevel2?: Resolver<Maybe<ResolversTypes['mas_positionlevel2']>, ParentType, ContextType>;
  mas_positionlevel3?: Resolver<Maybe<ResolversTypes['mas_positionlevel3']>, ParentType, ContextType>;
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
  GetHolidayDate?: Resolver<Maybe<Array<ResolversTypes['holiday_date']>>, ParentType, ContextType>;
  SalarySlip?: Resolver<Maybe<ResolversTypes['slipresolvers']>, ParentType, ContextType, Partial<QuerySalarySlipArgs>>;
  bookbank_log?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bookbank_log_type']>>>, ParentType, ContextType>;
  bookbank_log_admin?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bookbank_log_type']>>>, ParentType, ContextType, Partial<QueryBookbank_Log_AdminArgs>>;
  company?: Resolver<Maybe<ResolversTypes['ResponseCompany']>, ParentType, ContextType, Partial<QueryCompanyArgs>>;
  data_salary?: Resolver<Maybe<Array<Maybe<ResolversTypes['data_salary']>>>, ParentType, ContextType, Partial<QueryData_SalaryArgs>>;
  expense_company?: Resolver<Maybe<Array<Maybe<ResolversTypes['expense_company']>>>, ParentType, ContextType, Partial<QueryExpense_CompanyArgs>>;
  getAllcompany?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompanyBranch']>>>, ParentType, ContextType, Partial<QueryGetAllcompanyArgs>>;
  getAllleave?: Resolver<Maybe<ResolversTypes['getleaveResponseType']>, ParentType, ContextType, Partial<QueryGetAllleaveArgs>>;
  getBusinessType?: Resolver<Maybe<Array<Maybe<ResolversTypes['MainBusinessType']>>>, ParentType, ContextType>;
  getMasPositon?: Resolver<Maybe<Array<Maybe<ResolversTypes['mas_positionlevel1']>>>, ParentType, ContextType>;
  getProvince?: Resolver<Maybe<Array<Maybe<ResolversTypes['Province']>>>, ParentType, ContextType>;
  getcompanyRole?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role_Company']>>>, ParentType, ContextType, Partial<QueryGetcompanyRoleArgs>>;
  getleava_alldata?: Resolver<Maybe<Array<Maybe<ResolversTypes['leave_data']>>>, ParentType, ContextType, Partial<QueryGetleava_AlldataArgs>>;
  getleava_datame?: Resolver<Maybe<ResolversTypes['getleaveResponseType']>, ParentType, ContextType, Partial<QueryGetleava_DatameArgs>>;
  getleavetypedata?: Resolver<Maybe<Array<Maybe<ResolversTypes['mas_leave_type']>>>, ParentType, ContextType>;
  getownCompany?: Resolver<Maybe<ResolversTypes['GetOwncompanytype']>, ParentType, ContextType>;
  getpositionMe?: Resolver<Maybe<Array<Maybe<ResolversTypes['getPositionUser']>>>, ParentType, ContextType>;
  getposition_user?: Resolver<Maybe<Array<Maybe<ResolversTypes['getPositionUser']>>>, ParentType, ContextType, Partial<QueryGetposition_UserArgs>>;
  mas_all_collect?: Resolver<Maybe<ResolversTypes['mas_all_collect']>, ParentType, ContextType>;
  mas_bank?: Resolver<Maybe<Array<Maybe<ResolversTypes['mas_bank']>>>, ParentType, ContextType, Partial<QueryMas_BankArgs>>;
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>;
  mydata_salary?: Resolver<Maybe<ResolversTypes['data_salary']>, ParentType, ContextType, Partial<QueryMydata_SalaryArgs>>;
  provident_log?: Resolver<Maybe<Array<Maybe<ResolversTypes['provident_log']>>>, ParentType, ContextType, Partial<QueryProvident_LogArgs>>;
  salary?: Resolver<Maybe<ResolversTypes['data_salary']>, ParentType, ContextType, Partial<QuerySalaryArgs>>;
  salary_inmonthSlip?: Resolver<Maybe<Array<Maybe<ResolversTypes['data_salary']>>>, ParentType, ContextType, Partial<QuerySalary_InmonthSlipArgs>>;
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
  regis_vat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regiscomnumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type SalaryResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['SalaryResponseType'] = ResolversParentTypes['SalaryResponseType']> = ResolversObject<{
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalaryStatusResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['SalaryStatusResponseType'] = ResolversParentTypes['SalaryStatusResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubBusinessTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['SubBusinessType'] = ResolversParentTypes['SubBusinessType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  Position_user?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position_user']>>>, ParentType, ContextType>;
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
  salary?: Resolver<Maybe<Array<Maybe<ResolversTypes['salary']>>>, ParentType, ContextType>;
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

export type Book_Bank_LogResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['book_bank_logResponseType'] = ResolversParentTypes['book_bank_logResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Bookbank_LogResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['bookbank_log'] = ResolversParentTypes['bookbank_log']> = ResolversObject<{
  Salary?: Resolver<Maybe<ResolversTypes['salary']>, ParentType, ContextType>;
  all_collectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  base_salary?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mas_bankId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provident_com?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  provident_emp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreatebookbanklogResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['createbookbanklogResponseType'] = ResolversParentTypes['createbookbanklogResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreatesalaryResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['createsalaryResponseType'] = ResolversParentTypes['createsalaryResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Data_SalaryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['data_salary'] = ResolversParentTypes['data_salary']> = ResolversObject<{
  Position_user?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position_user']>>>, ParentType, ContextType>;
  RoleCompanyID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Role_Company?: Resolver<Maybe<ResolversTypes['Role_Company']>, ParentType, ContextType>;
  bookbank_log?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bookbank_log_type']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  companyBranch?: Resolver<Maybe<ResolversTypes['CompanyBranch']>, ParentType, ContextType>;
  companyBranchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expense_company?: Resolver<Maybe<Array<Maybe<ResolversTypes['expense_company']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOwner?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  islogin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastlogin?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  roleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salary?: Resolver<Maybe<Array<Maybe<ResolversTypes['salary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Data_Salary_MeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['data_salary_me'] = ResolversParentTypes['data_salary_me']> = ResolversObject<{
  RoleCompanyID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Role_Company?: Resolver<Maybe<ResolversTypes['Role_Company']>, ParentType, ContextType>;
  bookbank_log?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bookbank_log_type']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  companyBranch?: Resolver<Maybe<ResolversTypes['CompanyBranch']>, ParentType, ContextType>;
  companyBranchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOwner?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  islogin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastlogin?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  mas_bank?: Resolver<Maybe<ResolversTypes['mas_bank']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  roleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salary?: Resolver<Maybe<Array<Maybe<ResolversTypes['salary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Expense_CompanyResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['expense_company'] = ResolversParentTypes['expense_company']> = ResolversObject<{
  CompanyBranch?: Resolver<Maybe<ResolversTypes['CompanyBranch']>, ParentType, ContextType>;
  Mas_month?: Resolver<Maybe<ResolversTypes['mas_month']>, ParentType, ContextType>;
  Salary?: Resolver<Maybe<ResolversTypes['salary']>, ParentType, ContextType>;
  bankId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cal_date_salary?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  check_vat?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  companyBranchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  exp_com_month?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exp_com_years?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mas_bank?: Resolver<Maybe<ResolversTypes['mas_bank']>, ParentType, ContextType>;
  monthId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salary?: Resolver<Maybe<Array<Maybe<ResolversTypes['salary']>>>, ParentType, ContextType>;
  social_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ss_per?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vat_per?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetPositionUserResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['getPositionUser'] = ResolversParentTypes['getPositionUser']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mas_positionlevel1?: Resolver<Maybe<ResolversTypes['mas_positionlevel1']>, ParentType, ContextType>;
  mas_positionlevel2?: Resolver<Maybe<ResolversTypes['mas_positionlevel2']>, ParentType, ContextType>;
  mas_positionlevel3?: Resolver<Maybe<ResolversTypes['mas_positionlevel3']>, ParentType, ContextType>;
  position1_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position2_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position3_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetcountResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['getcount'] = ResolversParentTypes['getcount']> = ResolversObject<{
  count1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  count2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  count3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  count4?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name_3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name_4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetdataaboutleaveResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['getdataaboutleave'] = ResolversParentTypes['getdataaboutleave']> = ResolversObject<{
  Position_user?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position_user']>>>, ParentType, ContextType>;
  RoleCompanyID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Role_Company?: Resolver<Maybe<ResolversTypes['Role_Company']>, ParentType, ContextType>;
  company?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  companyBranch?: Resolver<Maybe<ResolversTypes['CompanyBranch']>, ParentType, ContextType>;
  companyBranchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  data_leave?: Resolver<Maybe<Array<Maybe<ResolversTypes['leave_data']>>>, ParentType, ContextType>;
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

export type GetleaveResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['getleaveResponseType'] = ResolversParentTypes['getleaveResponseType']> = ResolversObject<{
  data_all?: Resolver<Maybe<Array<Maybe<ResolversTypes['getdataaboutleave']>>>, ParentType, ContextType>;
  data_count?: Resolver<Maybe<ResolversTypes['getcount']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HeadderdataResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['headderdata'] = ResolversParentTypes['headderdata']> = ResolversObject<{
  headderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headder_data?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Holiday_DateResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['holiday_date'] = ResolversParentTypes['holiday_date']> = ResolversObject<{
  Company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  CompanyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  holiday_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Holiday_YearsResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['holiday_years'] = ResolversParentTypes['holiday_years']> = ResolversObject<{
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  holiday_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IncometypeResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['incometypeResponseType'] = ResolversParentTypes['incometypeResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Leave_DataResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['leave_data'] = ResolversParentTypes['leave_data']> = ResolversObject<{
  Status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  detail_leave?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  leavetype_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mas_leave_type?: Resolver<Maybe<ResolversTypes['mas_leave_type']>, ParentType, ContextType>;
  quantity_day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity_hours?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Log_PositionnResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['log_positionn'] = ResolversParentTypes['log_positionn']> = ResolversObject<{
  Position_user?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position_user']>>>, ParentType, ContextType>;
  cretedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cretedByfk?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  creteddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  positionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updtedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updtedByfk?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  updteddate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Mas_All_CollectResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['mas_all_collect'] = ResolversParentTypes['mas_all_collect']> = ResolversObject<{
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  income_collect?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  provident_collect_company?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  provident_collect_employee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  provident_log?: Resolver<Maybe<Array<Maybe<ResolversTypes['provident_log']>>>, ParentType, ContextType>;
  social_secu_collect?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat_collect?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Mas_BankResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['mas_bank'] = ResolversParentTypes['mas_bank']> = ResolversObject<{
  bank_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bookbank_log?: Resolver<Maybe<ResolversTypes['Bookbank_log_type']>, ParentType, ContextType>;
  expense_company?: Resolver<Maybe<ResolversTypes['expense_company']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salary?: Resolver<Maybe<Array<Maybe<ResolversTypes['salary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Mas_Leave_TypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['mas_leave_type'] = ResolversParentTypes['mas_leave_type']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderby?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Mas_MonthResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['mas_month'] = ResolversParentTypes['mas_month']> = ResolversObject<{
  bookbank_log?: Resolver<Maybe<Array<Maybe<ResolversTypes['Bookbank_log_type']>>>, ParentType, ContextType>;
  expense_company?: Resolver<Maybe<Array<Maybe<ResolversTypes['expense_company']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  salary?: Resolver<Maybe<Array<Maybe<ResolversTypes['salary']>>>, ParentType, ContextType>;
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

export type Mas_Salary_StatusResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['mas_salary_status'] = ResolversParentTypes['mas_salary_status']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  no?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  salary?: Resolver<Maybe<Array<Maybe<ResolversTypes['salary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MonthResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['monthResponseType'] = ResolversParentTypes['monthResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Position_UserrResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['position_userr'] = ResolversParentTypes['position_userr']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position1_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position2_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position3_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Provident_LogResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['provident_log'] = ResolversParentTypes['provident_log']> = ResolversObject<{
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  bookbank_log?: Resolver<Maybe<ResolversTypes['Bookbank_log_type']>, ParentType, ContextType>;
  bookbank_logId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mas_all_collect?: Resolver<Maybe<ResolversTypes['mas_all_collect']>, ParentType, ContextType>;
  mas_all_collectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pro_company?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pro_employee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  provident_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  salary?: Resolver<Maybe<ResolversTypes['salary']>, ParentType, ContextType>;
  salaryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SalaryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['salary'] = ResolversParentTypes['salary']> = ResolversObject<{
  bonus?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bookbank_log?: Resolver<Maybe<ResolversTypes['Bookbank_log_type']>, ParentType, ContextType>;
  bookbank_logId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bursary?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  commission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  incomeYears?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  late?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mas_all_collectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mas_bank?: Resolver<Maybe<ResolversTypes['mas_bank']>, ParentType, ContextType>;
  mas_bankId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mas_income_typeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mas_salary_statusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  miss?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  net?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ot?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  other?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  other_income?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  position_income?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pro_company?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pro_employee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  provident_company?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  provident_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  provident_employee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ra?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  socialYears?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  social_security?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  special_income?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ss_per?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  total_expense?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  total_income?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  travel_income?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vatYears?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vatper?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  welfare_money?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  years?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SlipresolversResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['slipresolvers'] = ResolversParentTypes['slipresolvers']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type YearsResponseTypeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['yearsResponseType'] = ResolversParentTypes['yearsResponseType']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  Amphoe?: AmphoeResolvers<ContextType>;
  BankResponseType?: BankResponseTypeResolvers<ContextType>;
  Bookbank_log_type?: Bookbank_Log_TypeResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  CompanyBranch?: CompanyBranchResolvers<ContextType>;
  CountBranch?: CountBranchResolvers<ContextType>;
  CountInsideBranch?: CountInsideBranchResolvers<ContextType>;
  CreateAndUpdateExpenseComResponseType?: CreateAndUpdateExpenseComResponseTypeResolvers<ContextType>;
  CreateComapnyBranchResponseType?: CreateComapnyBranchResponseTypeResolvers<ContextType>;
  CreateCompanyResponseType?: CreateCompanyResponseTypeResolvers<ContextType>;
  CreateHolidayDateResponseType?: CreateHolidayDateResponseTypeResolvers<ContextType>;
  CreateHolidayYearResponseType?: CreateHolidayYearResponseTypeResolvers<ContextType>;
  CreateRoleCompanyResponseType?: CreateRoleCompanyResponseTypeResolvers<ContextType>;
  CreateUserResponseType?: CreateUserResponseTypeResolvers<ContextType>;
  CreateleaveResponseType?: CreateleaveResponseTypeResolvers<ContextType>;
  CreatepositionResponseType?: CreatepositionResponseTypeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DeleteAccountUserResponseType?: DeleteAccountUserResponseTypeResolvers<ContextType>;
  DeleteComapnyBranchResponseType?: DeleteComapnyBranchResponseTypeResolvers<ContextType>;
  DeleteHolidayDateResponseType?: DeleteHolidayDateResponseTypeResolvers<ContextType>;
  DeleteHolidayYearResponseType?: DeleteHolidayYearResponseTypeResolvers<ContextType>;
  DeleteRoleCompanyRespnsetType?: DeleteRoleCompanyRespnsetTypeResolvers<ContextType>;
  DeleteSalaryResponseType?: DeleteSalaryResponseTypeResolvers<ContextType>;
  DeletebookbankResponseType?: DeletebookbankResponseTypeResolvers<ContextType>;
  District?: DistrictResolvers<ContextType>;
  GetCompanyAccessType?: GetCompanyAccessTypeResolvers<ContextType>;
  GetOwncompanytype?: GetOwncompanytypeResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  MainBusinessType?: MainBusinessTypeResolvers<ContextType>;
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
  SalaryResponseType?: SalaryResponseTypeResolvers<ContextType>;
  SalaryStatusResponseType?: SalaryStatusResponseTypeResolvers<ContextType>;
  SubBusinessType?: SubBusinessTypeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  ValidateRoute?: ValidateRouteResolvers<ContextType>;
  book_bank_logResponseType?: Book_Bank_LogResponseTypeResolvers<ContextType>;
  bookbank_log?: Bookbank_LogResolvers<ContextType>;
  createbookbanklogResponseType?: CreatebookbanklogResponseTypeResolvers<ContextType>;
  createsalaryResponseType?: CreatesalaryResponseTypeResolvers<ContextType>;
  data_salary?: Data_SalaryResolvers<ContextType>;
  data_salary_me?: Data_Salary_MeResolvers<ContextType>;
  expense_company?: Expense_CompanyResolvers<ContextType>;
  getPositionUser?: GetPositionUserResolvers<ContextType>;
  getcount?: GetcountResolvers<ContextType>;
  getdataaboutleave?: GetdataaboutleaveResolvers<ContextType>;
  getleaveResponseType?: GetleaveResponseTypeResolvers<ContextType>;
  headderdata?: HeadderdataResolvers<ContextType>;
  holiday_date?: Holiday_DateResolvers<ContextType>;
  holiday_years?: Holiday_YearsResolvers<ContextType>;
  incometypeResponseType?: IncometypeResponseTypeResolvers<ContextType>;
  leave_data?: Leave_DataResolvers<ContextType>;
  log_positionn?: Log_PositionnResolvers<ContextType>;
  mas_all_collect?: Mas_All_CollectResolvers<ContextType>;
  mas_bank?: Mas_BankResolvers<ContextType>;
  mas_leave_type?: Mas_Leave_TypeResolvers<ContextType>;
  mas_month?: Mas_MonthResolvers<ContextType>;
  mas_position?: Mas_PositionResolvers<ContextType>;
  mas_positionlevel1?: Mas_Positionlevel1Resolvers<ContextType>;
  mas_positionlevel2?: Mas_Positionlevel2Resolvers<ContextType>;
  mas_positionlevel3?: Mas_Positionlevel3Resolvers<ContextType>;
  mas_salary_status?: Mas_Salary_StatusResolvers<ContextType>;
  monthResponseType?: MonthResponseTypeResolvers<ContextType>;
  position_userr?: Position_UserrResolvers<ContextType>;
  provident_log?: Provident_LogResolvers<ContextType>;
  salary?: SalaryResolvers<ContextType>;
  slipresolvers?: SlipresolversResolvers<ContextType>;
  yearsResponseType?: YearsResponseTypeResolvers<ContextType>;
}>;

