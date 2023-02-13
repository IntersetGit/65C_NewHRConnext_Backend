
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AmphoeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  districtId: 'districtId',
  zipcode: 'zipcode'
});

exports.Prisma.Bookbank_logScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  mas_bankId: 'mas_bankId',
  bank_number: 'bank_number',
  all_collectId: 'all_collectId',
  base_salary: 'base_salary',
  provident_com: 'provident_com',
  provident_emp: 'provident_emp',
  userId: 'userId'
});

exports.Prisma.CompanyBranchScalarFieldEnum = makeEnum({
  id: 'id',
  isMainbranch: 'isMainbranch',
  name: 'name',
  address: 'address',
  address_2: 'address_2',
  city: 'city',
  state: 'state',
  zip: 'zip',
  country: 'country',
  tel: 'tel',
  fax: 'fax',
  website: 'website',
  lat: 'lat',
  lng: 'lng',
  email: 'email',
  email_2: 'email_2',
  company_type: 'company_type',
  sub_company_type: 'sub_company_type',
  registeredamount: 'registeredamount',
  social_facebook: 'social_facebook',
  social_likedin: 'social_likedin',
  social_instragram: 'social_instragram',
  social_line: 'social_line',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  companyId: 'companyId'
});

exports.Prisma.CompanyScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  companyCode: 'companyCode',
  userlimit: 'userlimit',
  company_registration_id: 'company_registration_id',
  company_vat_id: 'company_vat_id',
  icon: 'icon',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  ownerId: 'ownerId'
});

exports.Prisma.Data_leaveScalarFieldEnum = makeEnum({
  id: 'id',
  leavetype_id: 'leavetype_id',
  start_date: 'start_date',
  end_date: 'end_date',
  quantity_day: 'quantity_day',
  quantity_hours: 'quantity_hours',
  detail_leave: 'detail_leave',
  Status: 'Status',
  user_id: 'user_id'
});

exports.Prisma.DistrictScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  provinceId: 'provinceId'
});

exports.Prisma.Expense_companyScalarFieldEnum = makeEnum({
  id: 'id',
  monthId: 'monthId',
  bankId: 'bankId',
  date: 'date',
  vat_per: 'vat_per',
  ss_per: 'ss_per',
  companyBranchId: 'companyBranchId'
});

exports.Prisma.HolidayCompanyScalarFieldEnum = makeEnum({
  id: 'id',
  CompanyId: 'CompanyId',
  holiday_dateId: 'holiday_dateId',
  holiday_yearId: 'holiday_yearId'
});

exports.Prisma.Holiday_dateScalarFieldEnum = makeEnum({
  id: 'id',
  holiday_name: 'holiday_name',
  day: 'day',
  month: 'month',
  year: 'year',
  CompanyId: 'CompanyId',
  status: 'status'
});

exports.Prisma.Holiday_yearScalarFieldEnum = makeEnum({
  id: 'id',
  day: 'day',
  month: 'month',
  year: 'year',
  holiday_name: 'holiday_name'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.Mas_all_collectScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  date: 'date',
  income_collect: 'income_collect',
  vat_collect: 'vat_collect',
  social_secu_collect: 'social_secu_collect',
  provident_collect_employee: 'provident_collect_employee',
  provident_collect_company: 'provident_collect_company'
});

exports.Prisma.Mas_bankScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  bank_code: 'bank_code'
});

exports.Prisma.Mas_income_typeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.Mas_leave_typeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  orderby: 'orderby'
});

exports.Prisma.Mas_monthScalarFieldEnum = makeEnum({
  id: 'id',
  month_number: 'month_number',
  name: 'name'
});

exports.Prisma.Mas_positionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  level: 'level',
  CompanyId: 'CompanyId'
});

exports.Prisma.Mas_positionlevel1ScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  level: 'level',
  code: 'code',
  type: 'type',
  CompanyId: 'CompanyId'
});

exports.Prisma.Mas_positionlevel2ScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  level: 'level',
  code: 'code',
  type: 'type',
  positionlevel1_id: 'positionlevel1_id',
  CompanyId: 'CompanyId'
});

exports.Prisma.Mas_positionlevel3ScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  level: 'level',
  code: 'code',
  type: 'type',
  positionlevel2_id: 'positionlevel2_id',
  CompanyId: 'CompanyId'
});

exports.Prisma.Mas_salary_statusScalarFieldEnum = makeEnum({
  id: 'id',
  no: 'no',
  name: 'name'
});

exports.Prisma.Mas_vat_socialsScalarFieldEnum = makeEnum({
  id: 'id',
  current_vat: 'current_vat',
  current_social: 'current_social'
});

exports.Prisma.Mas_yearsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.Position_userScalarFieldEnum = makeEnum({
  id: 'id',
  user_id: 'user_id',
  date: 'date',
  position1_id: 'position1_id',
  position2_id: 'position2_id',
  position3_id: 'position3_id',
  role: 'role',
  headderId: 'headderId'
});

exports.Prisma.ProfileScalarFieldEnum = makeEnum({
  id: 'id',
  bio: 'bio',
  firstname_th: 'firstname_th',
  lastname_th: 'lastname_th',
  firstname_en: 'firstname_en',
  lastname_en: 'lastname_en',
  nickname: 'nickname',
  blood_type: 'blood_type',
  employee_status: 'employee_status',
  start_date_work: 'start_date_work',
  avatar: 'avatar',
  dob: 'dob',
  age: 'age',
  relationship: 'relationship',
  shirt_size: 'shirt_size',
  prefix_th: 'prefix_th',
  prefix_en: 'prefix_en',
  citizen_id: 'citizen_id',
  social_id: 'social_id',
  staff_status: 'staff_status',
  tel: 'tel',
  address: 'address',
  gender: 'gender',
  staff_code: 'staff_code',
  religion: 'religion',
  userId: 'userId',
  citizen_addressnumber: 'citizen_addressnumber',
  citizen_address: 'citizen_address',
  citizen_country: 'citizen_country',
  citizen_province: 'citizen_province',
  citizen_district: 'citizen_district',
  citizen_state: 'citizen_state',
  citizen_zipcode: 'citizen_zipcode',
  citizen_tel: 'citizen_tel',
  contract_sameCitizen: 'contract_sameCitizen',
  contract_addressnumber: 'contract_addressnumber',
  contract_address: 'contract_address',
  contract_country: 'contract_country',
  contract_province: 'contract_province',
  contract_district: 'contract_district',
  contract_state: 'contract_state',
  contract_zipcode: 'contract_zipcode',
  contract_email: 'contract_email',
  contract_companyemail: 'contract_companyemail',
  social_facebook: 'social_facebook',
  social_likedin: 'social_likedin',
  social_line: 'social_line',
  social_telegram: 'social_telegram'
});

exports.Prisma.Provident_logScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  provident_date: 'provident_date',
  pro_employee: 'pro_employee',
  pro_company: 'pro_company',
  mas_all_collectId: 'mas_all_collectId',
  bookbank_logId: 'bookbank_logId',
  salaryId: 'salaryId'
});

exports.Prisma.ProvinceScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RoleScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.Role_CompanyScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  access: 'access',
  status: 'status',
  companyBranchId: 'companyBranchId'
});

exports.Prisma.SalaryScalarFieldEnum = makeEnum({
  id: 'id',
  month: 'month',
  years: 'years',
  date: 'date',
  commission: 'commission',
  position_income: 'position_income',
  ot: 'ot',
  bonus: 'bonus',
  special_income: 'special_income',
  other_income: 'other_income',
  travel_income: 'travel_income',
  bursary: 'bursary',
  welfare_money: 'welfare_money',
  vatper: 'vatper',
  ss_per: 'ss_per',
  vat: 'vat',
  social_security: 'social_security',
  miss: 'miss',
  ra: 'ra',
  late: 'late',
  other: 'other',
  provident_employee: 'provident_employee',
  provident_company: 'provident_company',
  total_income: 'total_income',
  total_expense: 'total_expense',
  net: 'net',
  socialYears: 'socialYears',
  vatYears: 'vatYears',
  incomeYears: 'incomeYears',
  create_by: 'create_by',
  create_date: 'create_date',
  update_by: 'update_by',
  update_date: 'update_date',
  userId: 'userId',
  mas_income_typeId: 'mas_income_typeId',
  bookbank_logId: 'bookbank_logId',
  mas_salary_statusId: 'mas_salary_statusId',
  mas_bankId: 'mas_bankId',
  mas_vat_socialsId: 'mas_vat_socialsId',
  expense_companyId: 'expense_companyId',
  provident_logId: 'provident_logId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  password: 'password',
  islogin: 'islogin',
  isActive: 'isActive',
  isOwner: 'isOwner',
  lastlogin: 'lastlogin',
  createdAt: 'createdAt',
  roleId: 'roleId',
  RoleCompanyID: 'RoleCompanyID',
  companyBranchId: 'companyBranchId'
});


exports.Prisma.ModelName = makeEnum({
  Company: 'Company',
  CompanyBranch: 'CompanyBranch',
  Profile: 'Profile',
  User: 'User',
  Role: 'Role',
  Role_Company: 'Role_Company',
  Province: 'Province',
  District: 'District',
  Amphoe: 'Amphoe',
  mas_position: 'mas_position',
  mas_positionlevel1: 'mas_positionlevel1',
  mas_positionlevel2: 'mas_positionlevel2',
  mas_positionlevel3: 'mas_positionlevel3',
  Position_user: 'Position_user',
  holiday_date: 'holiday_date',
  holiday_year: 'holiday_year',
  holidayCompany: 'holidayCompany',
  mas_bank: 'mas_bank',
  mas_month: 'mas_month',
  mas_years: 'mas_years',
  mas_vat_socials: 'mas_vat_socials',
  mas_salary_status: 'mas_salary_status',
  mas_income_type: 'mas_income_type',
  expense_company: 'expense_company',
  salary: 'salary',
  mas_all_collect: 'mas_all_collect',
  bookbank_log: 'bookbank_log',
  provident_log: 'provident_log',
  mas_leave_type: 'mas_leave_type',
  data_leave: 'data_leave'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
