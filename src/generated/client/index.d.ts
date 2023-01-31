
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Company
 * 
 */
export type Company = {
  id: string
  name: string
  companyCode: string
  userlimit: number
  company_registration_id: string | null
  company_vat_id: string | null
  icon: string | null
  createdAt: Date
  updatedAt: Date
  ownerId: string
}

/**
 * Model CompanyBranch
 * 
 */
export type CompanyBranch = {
  id: string
  isMainbranch: boolean
  name: string
  address: string
  address_2: string | null
  city: string
  state: string
  zip: string
  country: string | null
  tel: string | null
  fax: string | null
  website: string | null
  lat: string | null
  lng: string | null
  email: string | null
  email_2: string | null
  company_type: string | null
  sub_company_type: string | null
  registeredamount: string | null
  social_facebook: string | null
  social_likedin: string | null
  social_instragram: string | null
  social_line: string | null
  createdAt: Date
  updatedAt: Date
  companyId: string | null
}

/**
 * Model Profile
 * 
 */
export type Profile = {
  id: string
  bio: string | null
  firstname_th: string | null
  lastname_th: string | null
  firstname_en: string | null
  lastname_en: string | null
  nickname: string | null
  blood_type: string | null
  employee_status: string | null
  start_date_work: Date | null
  avatar: string | null
  dob: Date | null
  age: string | null
  relationship: string | null
  shirt_size: string | null
  prefix_th: string | null
  prefix_en: string | null
  citizen_id: string | null
  social_id: string | null
  staff_status: string | null
  tel: string | null
  address: string | null
  gender: string | null
  staff_code: string | null
  religion: string | null
  userId: string
  citizen_addressnumber: string | null
  citizen_address: string | null
  citizen_country: string | null
  citizen_province: string | null
  citizen_district: string | null
  citizen_state: string | null
  citizen_zipcode: string | null
  citizen_tel: string | null
  contract_sameCitizen: boolean
  contract_addressnumber: string | null
  contract_address: string | null
  contract_country: string | null
  contract_province: string | null
  contract_district: string | null
  contract_state: string | null
  contract_zipcode: string | null
  contract_email: string | null
  contract_companyemail: string | null
  social_facebook: string | null
  social_likedin: string | null
  social_line: string | null
  social_telegram: string | null
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  password: string
  islogin: boolean
  isActive: boolean
  isOwner: boolean
  lastlogin: Date | null
  createdAt: Date
  roleId: string | null
  RoleCompanyID: string | null
  companyBranchId: string | null
}

/**
 * Model Role
 * 
 */
export type Role = {
  id: string
  name: string
}

/**
 * Model Role_Company
 * 
 */
export type Role_Company = {
  id: string
  name: string
  access: Prisma.JsonValue
  status: number
  companyBranchId: string | null
}

/**
 * Model Province
 * 
 */
export type Province = {
  id: string
  name: string
}

/**
 * Model District
 * 
 */
export type District = {
  id: string
  name: string
  provinceId: string
}

/**
 * Model Amphoe
 * 
 */
export type Amphoe = {
  id: string
  name: string
  districtId: string
  zipcode: string | null
}

/**
 * Model mas_position
 * 
 */
export type mas_position = {
  id: string
  name: string
  level: number
  CompanyId: string | null
}

/**
 * Model mas_positionlevel1
 * 
 */
export type mas_positionlevel1 = {
  id: string
  name: string
  level: number
  code: string
  type: string
  CompanyId: string | null
}

/**
 * Model mas_positionlevel2
 * 
 */
export type mas_positionlevel2 = {
  id: string
  name: string
  level: number
  code: string
  type: string
  positionlevel1_id: string | null
  CompanyId: string | null
}

/**
 * Model mas_positionlevel3
 * 
 */
export type mas_positionlevel3 = {
  id: string
  name: string
  level: number
  code: string
  type: string
  positionlevel2_id: string | null
  CompanyId: string | null
}

/**
 * Model Position_user
 * 
 */
export type Position_user = {
  id: string
  user_id: string | null
  position1_id: string | null
  position2_id: string | null
  position3_id: string | null
  role: string | null
  headderId: string | null
}

/**
 * Model holiday_date
 * 
 */
export type holiday_date = {
  id: string
  holiday_name: string | null
  day: number
  month: number
  yaer: number
  CompanyId: string | null
}

/**
 * Model holiday_year
 * 
 */
export type holiday_year = {
  id: string
  day: number
  month: number
  year: number
  holiday_name: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<GlobalReject>;

  /**
   * `prisma.companyBranch`: Exposes CRUD operations for the **CompanyBranch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyBranches
    * const companyBranches = await prisma.companyBranch.findMany()
    * ```
    */
  get companyBranch(): Prisma.CompanyBranchDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<GlobalReject>;

  /**
   * `prisma.role_Company`: Exposes CRUD operations for the **Role_Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Role_Companies
    * const role_Companies = await prisma.role_Company.findMany()
    * ```
    */
  get role_Company(): Prisma.Role_CompanyDelegate<GlobalReject>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **Province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.ProvinceDelegate<GlobalReject>;

  /**
   * `prisma.district`: Exposes CRUD operations for the **District** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Districts
    * const districts = await prisma.district.findMany()
    * ```
    */
  get district(): Prisma.DistrictDelegate<GlobalReject>;

  /**
   * `prisma.amphoe`: Exposes CRUD operations for the **Amphoe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amphoes
    * const amphoes = await prisma.amphoe.findMany()
    * ```
    */
  get amphoe(): Prisma.AmphoeDelegate<GlobalReject>;

  /**
   * `prisma.mas_position`: Exposes CRUD operations for the **mas_position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mas_positions
    * const mas_positions = await prisma.mas_position.findMany()
    * ```
    */
  get mas_position(): Prisma.mas_positionDelegate<GlobalReject>;

  /**
   * `prisma.mas_positionlevel1`: Exposes CRUD operations for the **mas_positionlevel1** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mas_positionlevel1s
    * const mas_positionlevel1s = await prisma.mas_positionlevel1.findMany()
    * ```
    */
  get mas_positionlevel1(): Prisma.mas_positionlevel1Delegate<GlobalReject>;

  /**
   * `prisma.mas_positionlevel2`: Exposes CRUD operations for the **mas_positionlevel2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mas_positionlevel2s
    * const mas_positionlevel2s = await prisma.mas_positionlevel2.findMany()
    * ```
    */
  get mas_positionlevel2(): Prisma.mas_positionlevel2Delegate<GlobalReject>;

  /**
   * `prisma.mas_positionlevel3`: Exposes CRUD operations for the **mas_positionlevel3** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mas_positionlevel3s
    * const mas_positionlevel3s = await prisma.mas_positionlevel3.findMany()
    * ```
    */
  get mas_positionlevel3(): Prisma.mas_positionlevel3Delegate<GlobalReject>;

  /**
   * `prisma.position_user`: Exposes CRUD operations for the **Position_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Position_users
    * const position_users = await prisma.position_user.findMany()
    * ```
    */
  get position_user(): Prisma.Position_userDelegate<GlobalReject>;

  /**
   * `prisma.holiday_date`: Exposes CRUD operations for the **holiday_date** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holiday_dates
    * const holiday_dates = await prisma.holiday_date.findMany()
    * ```
    */
  get holiday_date(): Prisma.holiday_dateDelegate<GlobalReject>;

  /**
   * `prisma.holiday_year`: Exposes CRUD operations for the **holiday_year** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holiday_years
    * const holiday_years = await prisma.holiday_year.findMany()
    * ```
    */
  get holiday_year(): Prisma.holiday_yearDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
    holiday_year: 'holiday_year'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */


  export type CompanyCountOutputType = {
    branch: number
    mas_positionlevel3: number
    mas_positionlevel2: number
    mas_positionlevel1: number
    holiday_date: number
    mas_position: number
  }

  export type CompanyCountOutputTypeSelect = {
    branch?: boolean
    mas_positionlevel3?: boolean
    mas_positionlevel2?: boolean
    mas_positionlevel1?: boolean
    holiday_date?: boolean
    mas_position?: boolean
  }

  export type CompanyCountOutputTypeGetPayload<S extends boolean | null | undefined | CompanyCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CompanyCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CompanyCountOutputTypeArgs)
    ? CompanyCountOutputType 
    : S extends { select: any } & (CompanyCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CompanyCountOutputType ? CompanyCountOutputType[P] : never
  } 
      : CompanyCountOutputType




  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect | null
  }



  /**
   * Count Type CompanyBranchCountOutputType
   */


  export type CompanyBranchCountOutputType = {
    users: number
    Role_Company: number
  }

  export type CompanyBranchCountOutputTypeSelect = {
    users?: boolean
    Role_Company?: boolean
  }

  export type CompanyBranchCountOutputTypeGetPayload<S extends boolean | null | undefined | CompanyBranchCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CompanyBranchCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CompanyBranchCountOutputTypeArgs)
    ? CompanyBranchCountOutputType 
    : S extends { select: any } & (CompanyBranchCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CompanyBranchCountOutputType ? CompanyBranchCountOutputType[P] : never
  } 
      : CompanyBranchCountOutputType




  // Custom InputTypes

  /**
   * CompanyBranchCountOutputType without action
   */
  export type CompanyBranchCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranchCountOutputType
     */
    select?: CompanyBranchCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    company: number
    henchman: number
  }

  export type UserCountOutputTypeSelect = {
    company?: boolean
    henchman?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type RoleCountOutputType
   */


  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect = {
    users?: boolean
  }

  export type RoleCountOutputTypeGetPayload<S extends boolean | null | undefined | RoleCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoleCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoleCountOutputTypeArgs)
    ? RoleCountOutputType 
    : S extends { select: any } & (RoleCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoleCountOutputType ? RoleCountOutputType[P] : never
  } 
      : RoleCountOutputType




  // Custom InputTypes

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect | null
  }



  /**
   * Count Type Role_CompanyCountOutputType
   */


  export type Role_CompanyCountOutputType = {
    users: number
  }

  export type Role_CompanyCountOutputTypeSelect = {
    users?: boolean
  }

  export type Role_CompanyCountOutputTypeGetPayload<S extends boolean | null | undefined | Role_CompanyCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Role_CompanyCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Role_CompanyCountOutputTypeArgs)
    ? Role_CompanyCountOutputType 
    : S extends { select: any } & (Role_CompanyCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Role_CompanyCountOutputType ? Role_CompanyCountOutputType[P] : never
  } 
      : Role_CompanyCountOutputType




  // Custom InputTypes

  /**
   * Role_CompanyCountOutputType without action
   */
  export type Role_CompanyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Role_CompanyCountOutputType
     */
    select?: Role_CompanyCountOutputTypeSelect | null
  }



  /**
   * Count Type ProvinceCountOutputType
   */


  export type ProvinceCountOutputType = {
    district: number
  }

  export type ProvinceCountOutputTypeSelect = {
    district?: boolean
  }

  export type ProvinceCountOutputTypeGetPayload<S extends boolean | null | undefined | ProvinceCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProvinceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProvinceCountOutputTypeArgs)
    ? ProvinceCountOutputType 
    : S extends { select: any } & (ProvinceCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProvinceCountOutputType ? ProvinceCountOutputType[P] : never
  } 
      : ProvinceCountOutputType




  // Custom InputTypes

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     */
    select?: ProvinceCountOutputTypeSelect | null
  }



  /**
   * Count Type DistrictCountOutputType
   */


  export type DistrictCountOutputType = {
    amphoe: number
  }

  export type DistrictCountOutputTypeSelect = {
    amphoe?: boolean
  }

  export type DistrictCountOutputTypeGetPayload<S extends boolean | null | undefined | DistrictCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DistrictCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DistrictCountOutputTypeArgs)
    ? DistrictCountOutputType 
    : S extends { select: any } & (DistrictCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DistrictCountOutputType ? DistrictCountOutputType[P] : never
  } 
      : DistrictCountOutputType




  // Custom InputTypes

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DistrictCountOutputType
     */
    select?: DistrictCountOutputTypeSelect | null
  }



  /**
   * Count Type Mas_positionlevel1CountOutputType
   */


  export type Mas_positionlevel1CountOutputType = {
    mas_positionlevel2: number
    Position_user: number
  }

  export type Mas_positionlevel1CountOutputTypeSelect = {
    mas_positionlevel2?: boolean
    Position_user?: boolean
  }

  export type Mas_positionlevel1CountOutputTypeGetPayload<S extends boolean | null | undefined | Mas_positionlevel1CountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mas_positionlevel1CountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Mas_positionlevel1CountOutputTypeArgs)
    ? Mas_positionlevel1CountOutputType 
    : S extends { select: any } & (Mas_positionlevel1CountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Mas_positionlevel1CountOutputType ? Mas_positionlevel1CountOutputType[P] : never
  } 
      : Mas_positionlevel1CountOutputType




  // Custom InputTypes

  /**
   * Mas_positionlevel1CountOutputType without action
   */
  export type Mas_positionlevel1CountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mas_positionlevel1CountOutputType
     */
    select?: Mas_positionlevel1CountOutputTypeSelect | null
  }



  /**
   * Count Type Mas_positionlevel2CountOutputType
   */


  export type Mas_positionlevel2CountOutputType = {
    mas_positionlevel3: number
    position_user: number
  }

  export type Mas_positionlevel2CountOutputTypeSelect = {
    mas_positionlevel3?: boolean
    position_user?: boolean
  }

  export type Mas_positionlevel2CountOutputTypeGetPayload<S extends boolean | null | undefined | Mas_positionlevel2CountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mas_positionlevel2CountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Mas_positionlevel2CountOutputTypeArgs)
    ? Mas_positionlevel2CountOutputType 
    : S extends { select: any } & (Mas_positionlevel2CountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Mas_positionlevel2CountOutputType ? Mas_positionlevel2CountOutputType[P] : never
  } 
      : Mas_positionlevel2CountOutputType




  // Custom InputTypes

  /**
   * Mas_positionlevel2CountOutputType without action
   */
  export type Mas_positionlevel2CountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mas_positionlevel2CountOutputType
     */
    select?: Mas_positionlevel2CountOutputTypeSelect | null
  }



  /**
   * Count Type Mas_positionlevel3CountOutputType
   */


  export type Mas_positionlevel3CountOutputType = {
    Position_user: number
  }

  export type Mas_positionlevel3CountOutputTypeSelect = {
    Position_user?: boolean
  }

  export type Mas_positionlevel3CountOutputTypeGetPayload<S extends boolean | null | undefined | Mas_positionlevel3CountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mas_positionlevel3CountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Mas_positionlevel3CountOutputTypeArgs)
    ? Mas_positionlevel3CountOutputType 
    : S extends { select: any } & (Mas_positionlevel3CountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Mas_positionlevel3CountOutputType ? Mas_positionlevel3CountOutputType[P] : never
  } 
      : Mas_positionlevel3CountOutputType




  // Custom InputTypes

  /**
   * Mas_positionlevel3CountOutputType without action
   */
  export type Mas_positionlevel3CountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Mas_positionlevel3CountOutputType
     */
    select?: Mas_positionlevel3CountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Company
   */


  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    userlimit: number | null
  }

  export type CompanySumAggregateOutputType = {
    userlimit: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    companyCode: string | null
    userlimit: number | null
    company_registration_id: string | null
    company_vat_id: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    companyCode: string | null
    userlimit: number | null
    company_registration_id: string | null
    company_vat_id: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    companyCode: number
    userlimit: number
    company_registration_id: number
    company_vat_id: number
    icon: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    userlimit?: true
  }

  export type CompanySumAggregateInputType = {
    userlimit?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    companyCode?: true
    userlimit?: true
    company_registration_id?: true
    company_vat_id?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    companyCode?: true
    userlimit?: true
    company_registration_id?: true
    company_vat_id?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    companyCode?: true
    userlimit?: true
    company_registration_id?: true
    company_vat_id?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type CompanyAggregateArgs = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs = {
    where?: CompanyWhereInput
    orderBy?: Enumerable<CompanyOrderByWithAggregationInput>
    by: CompanyScalarFieldEnum[]
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }


  export type CompanyGroupByOutputType = {
    id: string
    name: string
    companyCode: string
    userlimit: number
    company_registration_id: string | null
    company_vat_id: string | null
    icon: string | null
    createdAt: Date
    updatedAt: Date
    ownerId: string
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect = {
    id?: boolean
    name?: boolean
    companyCode?: boolean
    userlimit?: boolean
    company_registration_id?: boolean
    company_vat_id?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserArgs
    branch?: boolean | Company$branchArgs
    mas_positionlevel3?: boolean | Company$mas_positionlevel3Args
    mas_positionlevel2?: boolean | Company$mas_positionlevel2Args
    mas_positionlevel1?: boolean | Company$mas_positionlevel1Args
    holiday_date?: boolean | Company$holiday_dateArgs
    mas_position?: boolean | Company$mas_positionArgs
    _count?: boolean | CompanyCountOutputTypeArgs
  }


  export type CompanyInclude = {
    owner?: boolean | UserArgs
    branch?: boolean | Company$branchArgs
    mas_positionlevel3?: boolean | Company$mas_positionlevel3Args
    mas_positionlevel2?: boolean | Company$mas_positionlevel2Args
    mas_positionlevel1?: boolean | Company$mas_positionlevel1Args
    holiday_date?: boolean | Company$holiday_dateArgs
    mas_position?: boolean | Company$mas_positionArgs
    _count?: boolean | CompanyCountOutputTypeArgs
  }

  export type CompanyGetPayload<S extends boolean | null | undefined | CompanyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Company :
    S extends undefined ? never :
    S extends { include: any } & (CompanyArgs | CompanyFindManyArgs)
    ? Company  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'owner' ? UserGetPayload<S['include'][P]> :
        P extends 'branch' ? Array < CompanyBranchGetPayload<S['include'][P]>>  :
        P extends 'mas_positionlevel3' ? Array < mas_positionlevel3GetPayload<S['include'][P]>>  :
        P extends 'mas_positionlevel2' ? Array < mas_positionlevel2GetPayload<S['include'][P]>>  :
        P extends 'mas_positionlevel1' ? Array < mas_positionlevel1GetPayload<S['include'][P]>>  :
        P extends 'holiday_date' ? Array < holiday_dateGetPayload<S['include'][P]>>  :
        P extends 'mas_position' ? Array < mas_positionGetPayload<S['include'][P]>>  :
        P extends '_count' ? CompanyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CompanyArgs | CompanyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<S['select'][P]> :
        P extends 'branch' ? Array < CompanyBranchGetPayload<S['select'][P]>>  :
        P extends 'mas_positionlevel3' ? Array < mas_positionlevel3GetPayload<S['select'][P]>>  :
        P extends 'mas_positionlevel2' ? Array < mas_positionlevel2GetPayload<S['select'][P]>>  :
        P extends 'mas_positionlevel1' ? Array < mas_positionlevel1GetPayload<S['select'][P]>>  :
        P extends 'holiday_date' ? Array < holiday_dateGetPayload<S['select'][P]>>  :
        P extends 'mas_position' ? Array < mas_positionGetPayload<S['select'][P]>>  :
        P extends '_count' ? CompanyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Company ? Company[P] : never
  } 
      : Company


  type CompanyCountArgs = 
    Omit<CompanyFindManyArgs, 'select' | 'include'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompanyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Company'> extends True ? Prisma__CompanyClient<CompanyGetPayload<T>> : Prisma__CompanyClient<CompanyGetPayload<T> | null, null>

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CompanyFindUniqueOrThrowArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompanyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Company'> extends True ? Prisma__CompanyClient<CompanyGetPayload<T>> : Prisma__CompanyClient<CompanyGetPayload<T> | null, null>

    /**
     * Find the first Company that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyFindManyArgs>(
      args?: SelectSubset<T, CompanyFindManyArgs>
    ): PrismaPromise<Array<CompanyGetPayload<T>>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends CompanyCreateArgs>(
      args: SelectSubset<T, CompanyCreateArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Create many Companies.
     *     @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyCreateManyArgs>(
      args?: SelectSubset<T, CompanyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends CompanyDeleteArgs>(
      args: SelectSubset<T, CompanyDeleteArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUpdateArgs>(
      args: SelectSubset<T, CompanyUpdateArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyDeleteManyArgs>(
      args?: SelectSubset<T, CompanyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUpdateManyArgs>(
      args: SelectSubset<T, CompanyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUpsertArgs>(
      args: SelectSubset<T, CompanyUpsertArgs>
    ): Prisma__CompanyClient<CompanyGetPayload<T>>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompanyClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    owner<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    branch<T extends Company$branchArgs= {}>(args?: Subset<T, Company$branchArgs>): PrismaPromise<Array<CompanyBranchGetPayload<T>>| Null>;

    mas_positionlevel3<T extends Company$mas_positionlevel3Args= {}>(args?: Subset<T, Company$mas_positionlevel3Args>): PrismaPromise<Array<mas_positionlevel3GetPayload<T>>| Null>;

    mas_positionlevel2<T extends Company$mas_positionlevel2Args= {}>(args?: Subset<T, Company$mas_positionlevel2Args>): PrismaPromise<Array<mas_positionlevel2GetPayload<T>>| Null>;

    mas_positionlevel1<T extends Company$mas_positionlevel1Args= {}>(args?: Subset<T, Company$mas_positionlevel1Args>): PrismaPromise<Array<mas_positionlevel1GetPayload<T>>| Null>;

    holiday_date<T extends Company$holiday_dateArgs= {}>(args?: Subset<T, Company$holiday_dateArgs>): PrismaPromise<Array<holiday_dateGetPayload<T>>| Null>;

    mas_position<T extends Company$mas_positionArgs= {}>(args?: Subset<T, Company$mas_positionArgs>): PrismaPromise<Array<mas_positionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Company base type for findUnique actions
   */
  export type CompanyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUnique
   */
  export interface CompanyFindUniqueArgs extends CompanyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company base type for findFirst actions
   */
  export type CompanyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }

  /**
   * Company findFirst
   */
  export interface CompanyFindFirstArgs extends CompanyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs = {
    /**
     * The data used to create many Companies.
     */
    data: Enumerable<CompanyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }


  /**
   * Company.branch
   */
  export type Company$branchArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyBranchInclude | null
    where?: CompanyBranchWhereInput
    orderBy?: Enumerable<CompanyBranchOrderByWithRelationInput>
    cursor?: CompanyBranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CompanyBranchScalarFieldEnum>
  }


  /**
   * Company.mas_positionlevel3
   */
  export type Company$mas_positionlevel3Args = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
    where?: mas_positionlevel3WhereInput
    orderBy?: Enumerable<mas_positionlevel3OrderByWithRelationInput>
    cursor?: mas_positionlevel3WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Mas_positionlevel3ScalarFieldEnum>
  }


  /**
   * Company.mas_positionlevel2
   */
  export type Company$mas_positionlevel2Args = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
    where?: mas_positionlevel2WhereInput
    orderBy?: Enumerable<mas_positionlevel2OrderByWithRelationInput>
    cursor?: mas_positionlevel2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Mas_positionlevel2ScalarFieldEnum>
  }


  /**
   * Company.mas_positionlevel1
   */
  export type Company$mas_positionlevel1Args = {
    /**
     * Select specific fields to fetch from the mas_positionlevel1
     */
    select?: mas_positionlevel1Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel1Include | null
    where?: mas_positionlevel1WhereInput
    orderBy?: Enumerable<mas_positionlevel1OrderByWithRelationInput>
    cursor?: mas_positionlevel1WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Mas_positionlevel1ScalarFieldEnum>
  }


  /**
   * Company.holiday_date
   */
  export type Company$holiday_dateArgs = {
    /**
     * Select specific fields to fetch from the holiday_date
     */
    select?: holiday_dateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: holiday_dateInclude | null
    where?: holiday_dateWhereInput
    orderBy?: Enumerable<holiday_dateOrderByWithRelationInput>
    cursor?: holiday_dateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Holiday_dateScalarFieldEnum>
  }


  /**
   * Company.mas_position
   */
  export type Company$mas_positionArgs = {
    /**
     * Select specific fields to fetch from the mas_position
     */
    select?: mas_positionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionInclude | null
    where?: mas_positionWhereInput
    orderBy?: Enumerable<mas_positionOrderByWithRelationInput>
    cursor?: mas_positionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Mas_positionScalarFieldEnum>
  }


  /**
   * Company without action
   */
  export type CompanyArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
  }



  /**
   * Model CompanyBranch
   */


  export type AggregateCompanyBranch = {
    _count: CompanyBranchCountAggregateOutputType | null
    _min: CompanyBranchMinAggregateOutputType | null
    _max: CompanyBranchMaxAggregateOutputType | null
  }

  export type CompanyBranchMinAggregateOutputType = {
    id: string | null
    isMainbranch: boolean | null
    name: string | null
    address: string | null
    address_2: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    tel: string | null
    fax: string | null
    website: string | null
    lat: string | null
    lng: string | null
    email: string | null
    email_2: string | null
    company_type: string | null
    sub_company_type: string | null
    registeredamount: string | null
    social_facebook: string | null
    social_likedin: string | null
    social_instragram: string | null
    social_line: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type CompanyBranchMaxAggregateOutputType = {
    id: string | null
    isMainbranch: boolean | null
    name: string | null
    address: string | null
    address_2: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    tel: string | null
    fax: string | null
    website: string | null
    lat: string | null
    lng: string | null
    email: string | null
    email_2: string | null
    company_type: string | null
    sub_company_type: string | null
    registeredamount: string | null
    social_facebook: string | null
    social_likedin: string | null
    social_instragram: string | null
    social_line: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type CompanyBranchCountAggregateOutputType = {
    id: number
    isMainbranch: number
    name: number
    address: number
    address_2: number
    city: number
    state: number
    zip: number
    country: number
    tel: number
    fax: number
    website: number
    lat: number
    lng: number
    email: number
    email_2: number
    company_type: number
    sub_company_type: number
    registeredamount: number
    social_facebook: number
    social_likedin: number
    social_instragram: number
    social_line: number
    createdAt: number
    updatedAt: number
    companyId: number
    _all: number
  }


  export type CompanyBranchMinAggregateInputType = {
    id?: true
    isMainbranch?: true
    name?: true
    address?: true
    address_2?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    tel?: true
    fax?: true
    website?: true
    lat?: true
    lng?: true
    email?: true
    email_2?: true
    company_type?: true
    sub_company_type?: true
    registeredamount?: true
    social_facebook?: true
    social_likedin?: true
    social_instragram?: true
    social_line?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type CompanyBranchMaxAggregateInputType = {
    id?: true
    isMainbranch?: true
    name?: true
    address?: true
    address_2?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    tel?: true
    fax?: true
    website?: true
    lat?: true
    lng?: true
    email?: true
    email_2?: true
    company_type?: true
    sub_company_type?: true
    registeredamount?: true
    social_facebook?: true
    social_likedin?: true
    social_instragram?: true
    social_line?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type CompanyBranchCountAggregateInputType = {
    id?: true
    isMainbranch?: true
    name?: true
    address?: true
    address_2?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    tel?: true
    fax?: true
    website?: true
    lat?: true
    lng?: true
    email?: true
    email_2?: true
    company_type?: true
    sub_company_type?: true
    registeredamount?: true
    social_facebook?: true
    social_likedin?: true
    social_instragram?: true
    social_line?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    _all?: true
  }

  export type CompanyBranchAggregateArgs = {
    /**
     * Filter which CompanyBranch to aggregate.
     */
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     */
    orderBy?: Enumerable<CompanyBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyBranches
    **/
    _count?: true | CompanyBranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyBranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyBranchMaxAggregateInputType
  }

  export type GetCompanyBranchAggregateType<T extends CompanyBranchAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyBranch[P]>
      : GetScalarType<T[P], AggregateCompanyBranch[P]>
  }




  export type CompanyBranchGroupByArgs = {
    where?: CompanyBranchWhereInput
    orderBy?: Enumerable<CompanyBranchOrderByWithAggregationInput>
    by: CompanyBranchScalarFieldEnum[]
    having?: CompanyBranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyBranchCountAggregateInputType | true
    _min?: CompanyBranchMinAggregateInputType
    _max?: CompanyBranchMaxAggregateInputType
  }


  export type CompanyBranchGroupByOutputType = {
    id: string
    isMainbranch: boolean
    name: string
    address: string
    address_2: string | null
    city: string
    state: string
    zip: string
    country: string | null
    tel: string | null
    fax: string | null
    website: string | null
    lat: string | null
    lng: string | null
    email: string | null
    email_2: string | null
    company_type: string | null
    sub_company_type: string | null
    registeredamount: string | null
    social_facebook: string | null
    social_likedin: string | null
    social_instragram: string | null
    social_line: string | null
    createdAt: Date
    updatedAt: Date
    companyId: string | null
    _count: CompanyBranchCountAggregateOutputType | null
    _min: CompanyBranchMinAggregateOutputType | null
    _max: CompanyBranchMaxAggregateOutputType | null
  }

  type GetCompanyBranchGroupByPayload<T extends CompanyBranchGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CompanyBranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyBranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyBranchGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyBranchGroupByOutputType[P]>
        }
      >
    >


  export type CompanyBranchSelect = {
    id?: boolean
    isMainbranch?: boolean
    name?: boolean
    address?: boolean
    address_2?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    tel?: boolean
    fax?: boolean
    website?: boolean
    lat?: boolean
    lng?: boolean
    email?: boolean
    email_2?: boolean
    company_type?: boolean
    sub_company_type?: boolean
    registeredamount?: boolean
    social_facebook?: boolean
    social_likedin?: boolean
    social_instragram?: boolean
    social_line?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyArgs
    companyId?: boolean
    users?: boolean | CompanyBranch$usersArgs
    Role_Company?: boolean | CompanyBranch$Role_CompanyArgs
    _count?: boolean | CompanyBranchCountOutputTypeArgs
  }


  export type CompanyBranchInclude = {
    company?: boolean | CompanyArgs
    users?: boolean | CompanyBranch$usersArgs
    Role_Company?: boolean | CompanyBranch$Role_CompanyArgs
    _count?: boolean | CompanyBranchCountOutputTypeArgs
  }

  export type CompanyBranchGetPayload<S extends boolean | null | undefined | CompanyBranchArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CompanyBranch :
    S extends undefined ? never :
    S extends { include: any } & (CompanyBranchArgs | CompanyBranchFindManyArgs)
    ? CompanyBranch  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'company' ? CompanyGetPayload<S['include'][P]> | null :
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'Role_Company' ? Array < Role_CompanyGetPayload<S['include'][P]>>  :
        P extends '_count' ? CompanyBranchCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CompanyBranchArgs | CompanyBranchFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'company' ? CompanyGetPayload<S['select'][P]> | null :
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'Role_Company' ? Array < Role_CompanyGetPayload<S['select'][P]>>  :
        P extends '_count' ? CompanyBranchCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof CompanyBranch ? CompanyBranch[P] : never
  } 
      : CompanyBranch


  type CompanyBranchCountArgs = 
    Omit<CompanyBranchFindManyArgs, 'select' | 'include'> & {
      select?: CompanyBranchCountAggregateInputType | true
    }

  export interface CompanyBranchDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CompanyBranch that matches the filter.
     * @param {CompanyBranchFindUniqueArgs} args - Arguments to find a CompanyBranch
     * @example
     * // Get one CompanyBranch
     * const companyBranch = await prisma.companyBranch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyBranchFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompanyBranchFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CompanyBranch'> extends True ? Prisma__CompanyBranchClient<CompanyBranchGetPayload<T>> : Prisma__CompanyBranchClient<CompanyBranchGetPayload<T> | null, null>

    /**
     * Find one CompanyBranch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyBranchFindUniqueOrThrowArgs} args - Arguments to find a CompanyBranch
     * @example
     * // Get one CompanyBranch
     * const companyBranch = await prisma.companyBranch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyBranchFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CompanyBranchFindUniqueOrThrowArgs>
    ): Prisma__CompanyBranchClient<CompanyBranchGetPayload<T>>

    /**
     * Find the first CompanyBranch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchFindFirstArgs} args - Arguments to find a CompanyBranch
     * @example
     * // Get one CompanyBranch
     * const companyBranch = await prisma.companyBranch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyBranchFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompanyBranchFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CompanyBranch'> extends True ? Prisma__CompanyBranchClient<CompanyBranchGetPayload<T>> : Prisma__CompanyBranchClient<CompanyBranchGetPayload<T> | null, null>

    /**
     * Find the first CompanyBranch that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchFindFirstOrThrowArgs} args - Arguments to find a CompanyBranch
     * @example
     * // Get one CompanyBranch
     * const companyBranch = await prisma.companyBranch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyBranchFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CompanyBranchFindFirstOrThrowArgs>
    ): Prisma__CompanyBranchClient<CompanyBranchGetPayload<T>>

    /**
     * Find zero or more CompanyBranches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyBranches
     * const companyBranches = await prisma.companyBranch.findMany()
     * 
     * // Get first 10 CompanyBranches
     * const companyBranches = await prisma.companyBranch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyBranchWithIdOnly = await prisma.companyBranch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyBranchFindManyArgs>(
      args?: SelectSubset<T, CompanyBranchFindManyArgs>
    ): PrismaPromise<Array<CompanyBranchGetPayload<T>>>

    /**
     * Create a CompanyBranch.
     * @param {CompanyBranchCreateArgs} args - Arguments to create a CompanyBranch.
     * @example
     * // Create one CompanyBranch
     * const CompanyBranch = await prisma.companyBranch.create({
     *   data: {
     *     // ... data to create a CompanyBranch
     *   }
     * })
     * 
    **/
    create<T extends CompanyBranchCreateArgs>(
      args: SelectSubset<T, CompanyBranchCreateArgs>
    ): Prisma__CompanyBranchClient<CompanyBranchGetPayload<T>>

    /**
     * Create many CompanyBranches.
     *     @param {CompanyBranchCreateManyArgs} args - Arguments to create many CompanyBranches.
     *     @example
     *     // Create many CompanyBranches
     *     const companyBranch = await prisma.companyBranch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyBranchCreateManyArgs>(
      args?: SelectSubset<T, CompanyBranchCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CompanyBranch.
     * @param {CompanyBranchDeleteArgs} args - Arguments to delete one CompanyBranch.
     * @example
     * // Delete one CompanyBranch
     * const CompanyBranch = await prisma.companyBranch.delete({
     *   where: {
     *     // ... filter to delete one CompanyBranch
     *   }
     * })
     * 
    **/
    delete<T extends CompanyBranchDeleteArgs>(
      args: SelectSubset<T, CompanyBranchDeleteArgs>
    ): Prisma__CompanyBranchClient<CompanyBranchGetPayload<T>>

    /**
     * Update one CompanyBranch.
     * @param {CompanyBranchUpdateArgs} args - Arguments to update one CompanyBranch.
     * @example
     * // Update one CompanyBranch
     * const companyBranch = await prisma.companyBranch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyBranchUpdateArgs>(
      args: SelectSubset<T, CompanyBranchUpdateArgs>
    ): Prisma__CompanyBranchClient<CompanyBranchGetPayload<T>>

    /**
     * Delete zero or more CompanyBranches.
     * @param {CompanyBranchDeleteManyArgs} args - Arguments to filter CompanyBranches to delete.
     * @example
     * // Delete a few CompanyBranches
     * const { count } = await prisma.companyBranch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyBranchDeleteManyArgs>(
      args?: SelectSubset<T, CompanyBranchDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyBranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyBranches
     * const companyBranch = await prisma.companyBranch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyBranchUpdateManyArgs>(
      args: SelectSubset<T, CompanyBranchUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanyBranch.
     * @param {CompanyBranchUpsertArgs} args - Arguments to update or create a CompanyBranch.
     * @example
     * // Update or create a CompanyBranch
     * const companyBranch = await prisma.companyBranch.upsert({
     *   create: {
     *     // ... data to create a CompanyBranch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyBranch we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyBranchUpsertArgs>(
      args: SelectSubset<T, CompanyBranchUpsertArgs>
    ): Prisma__CompanyBranchClient<CompanyBranchGetPayload<T>>

    /**
     * Count the number of CompanyBranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchCountArgs} args - Arguments to filter CompanyBranches to count.
     * @example
     * // Count the number of CompanyBranches
     * const count = await prisma.companyBranch.count({
     *   where: {
     *     // ... the filter for the CompanyBranches we want to count
     *   }
     * })
    **/
    count<T extends CompanyBranchCountArgs>(
      args?: Subset<T, CompanyBranchCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyBranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyBranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyBranchAggregateArgs>(args: Subset<T, CompanyBranchAggregateArgs>): PrismaPromise<GetCompanyBranchAggregateType<T>>

    /**
     * Group by CompanyBranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyBranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyBranchGroupByArgs['orderBy'] }
        : { orderBy?: CompanyBranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyBranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyBranchGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyBranch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompanyBranchClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    company<T extends CompanyArgs= {}>(args?: Subset<T, CompanyArgs>): Prisma__CompanyClient<CompanyGetPayload<T> | Null>;

    users<T extends CompanyBranch$usersArgs= {}>(args?: Subset<T, CompanyBranch$usersArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

    Role_Company<T extends CompanyBranch$Role_CompanyArgs= {}>(args?: Subset<T, CompanyBranch$Role_CompanyArgs>): PrismaPromise<Array<Role_CompanyGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CompanyBranch base type for findUnique actions
   */
  export type CompanyBranchFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyBranchInclude | null
    /**
     * Filter, which CompanyBranch to fetch.
     */
    where: CompanyBranchWhereUniqueInput
  }

  /**
   * CompanyBranch findUnique
   */
  export interface CompanyBranchFindUniqueArgs extends CompanyBranchFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CompanyBranch findUniqueOrThrow
   */
  export type CompanyBranchFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyBranchInclude | null
    /**
     * Filter, which CompanyBranch to fetch.
     */
    where: CompanyBranchWhereUniqueInput
  }


  /**
   * CompanyBranch base type for findFirst actions
   */
  export type CompanyBranchFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyBranchInclude | null
    /**
     * Filter, which CompanyBranch to fetch.
     */
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     */
    orderBy?: Enumerable<CompanyBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyBranches.
     */
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyBranches.
     */
    distinct?: Enumerable<CompanyBranchScalarFieldEnum>
  }

  /**
   * CompanyBranch findFirst
   */
  export interface CompanyBranchFindFirstArgs extends CompanyBranchFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CompanyBranch findFirstOrThrow
   */
  export type CompanyBranchFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyBranchInclude | null
    /**
     * Filter, which CompanyBranch to fetch.
     */
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     */
    orderBy?: Enumerable<CompanyBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyBranches.
     */
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyBranches.
     */
    distinct?: Enumerable<CompanyBranchScalarFieldEnum>
  }


  /**
   * CompanyBranch findMany
   */
  export type CompanyBranchFindManyArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyBranchInclude | null
    /**
     * Filter, which CompanyBranches to fetch.
     */
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     */
    orderBy?: Enumerable<CompanyBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyBranches.
     */
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     */
    skip?: number
    distinct?: Enumerable<CompanyBranchScalarFieldEnum>
  }


  /**
   * CompanyBranch create
   */
  export type CompanyBranchCreateArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyBranchInclude | null
    /**
     * The data needed to create a CompanyBranch.
     */
    data: XOR<CompanyBranchCreateInput, CompanyBranchUncheckedCreateInput>
  }


  /**
   * CompanyBranch createMany
   */
  export type CompanyBranchCreateManyArgs = {
    /**
     * The data used to create many CompanyBranches.
     */
    data: Enumerable<CompanyBranchCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CompanyBranch update
   */
  export type CompanyBranchUpdateArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyBranchInclude | null
    /**
     * The data needed to update a CompanyBranch.
     */
    data: XOR<CompanyBranchUpdateInput, CompanyBranchUncheckedUpdateInput>
    /**
     * Choose, which CompanyBranch to update.
     */
    where: CompanyBranchWhereUniqueInput
  }


  /**
   * CompanyBranch updateMany
   */
  export type CompanyBranchUpdateManyArgs = {
    /**
     * The data used to update CompanyBranches.
     */
    data: XOR<CompanyBranchUpdateManyMutationInput, CompanyBranchUncheckedUpdateManyInput>
    /**
     * Filter which CompanyBranches to update
     */
    where?: CompanyBranchWhereInput
  }


  /**
   * CompanyBranch upsert
   */
  export type CompanyBranchUpsertArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyBranchInclude | null
    /**
     * The filter to search for the CompanyBranch to update in case it exists.
     */
    where: CompanyBranchWhereUniqueInput
    /**
     * In case the CompanyBranch found by the `where` argument doesn't exist, create a new CompanyBranch with this data.
     */
    create: XOR<CompanyBranchCreateInput, CompanyBranchUncheckedCreateInput>
    /**
     * In case the CompanyBranch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyBranchUpdateInput, CompanyBranchUncheckedUpdateInput>
  }


  /**
   * CompanyBranch delete
   */
  export type CompanyBranchDeleteArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyBranchInclude | null
    /**
     * Filter which CompanyBranch to delete.
     */
    where: CompanyBranchWhereUniqueInput
  }


  /**
   * CompanyBranch deleteMany
   */
  export type CompanyBranchDeleteManyArgs = {
    /**
     * Filter which CompanyBranches to delete
     */
    where?: CompanyBranchWhereInput
  }


  /**
   * CompanyBranch.users
   */
  export type CompanyBranch$usersArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * CompanyBranch.Role_Company
   */
  export type CompanyBranch$Role_CompanyArgs = {
    /**
     * Select specific fields to fetch from the Role_Company
     */
    select?: Role_CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Role_CompanyInclude | null
    where?: Role_CompanyWhereInput
    orderBy?: Enumerable<Role_CompanyOrderByWithRelationInput>
    cursor?: Role_CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Role_CompanyScalarFieldEnum>
  }


  /**
   * CompanyBranch without action
   */
  export type CompanyBranchArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyBranchInclude | null
  }



  /**
   * Model Profile
   */


  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    bio: string | null
    firstname_th: string | null
    lastname_th: string | null
    firstname_en: string | null
    lastname_en: string | null
    nickname: string | null
    blood_type: string | null
    employee_status: string | null
    start_date_work: Date | null
    avatar: string | null
    dob: Date | null
    age: string | null
    relationship: string | null
    shirt_size: string | null
    prefix_th: string | null
    prefix_en: string | null
    citizen_id: string | null
    social_id: string | null
    staff_status: string | null
    tel: string | null
    address: string | null
    gender: string | null
    staff_code: string | null
    religion: string | null
    userId: string | null
    citizen_addressnumber: string | null
    citizen_address: string | null
    citizen_country: string | null
    citizen_province: string | null
    citizen_district: string | null
    citizen_state: string | null
    citizen_zipcode: string | null
    citizen_tel: string | null
    contract_sameCitizen: boolean | null
    contract_addressnumber: string | null
    contract_address: string | null
    contract_country: string | null
    contract_province: string | null
    contract_district: string | null
    contract_state: string | null
    contract_zipcode: string | null
    contract_email: string | null
    contract_companyemail: string | null
    social_facebook: string | null
    social_likedin: string | null
    social_line: string | null
    social_telegram: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    bio: string | null
    firstname_th: string | null
    lastname_th: string | null
    firstname_en: string | null
    lastname_en: string | null
    nickname: string | null
    blood_type: string | null
    employee_status: string | null
    start_date_work: Date | null
    avatar: string | null
    dob: Date | null
    age: string | null
    relationship: string | null
    shirt_size: string | null
    prefix_th: string | null
    prefix_en: string | null
    citizen_id: string | null
    social_id: string | null
    staff_status: string | null
    tel: string | null
    address: string | null
    gender: string | null
    staff_code: string | null
    religion: string | null
    userId: string | null
    citizen_addressnumber: string | null
    citizen_address: string | null
    citizen_country: string | null
    citizen_province: string | null
    citizen_district: string | null
    citizen_state: string | null
    citizen_zipcode: string | null
    citizen_tel: string | null
    contract_sameCitizen: boolean | null
    contract_addressnumber: string | null
    contract_address: string | null
    contract_country: string | null
    contract_province: string | null
    contract_district: string | null
    contract_state: string | null
    contract_zipcode: string | null
    contract_email: string | null
    contract_companyemail: string | null
    social_facebook: string | null
    social_likedin: string | null
    social_line: string | null
    social_telegram: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    bio: number
    firstname_th: number
    lastname_th: number
    firstname_en: number
    lastname_en: number
    nickname: number
    blood_type: number
    employee_status: number
    start_date_work: number
    avatar: number
    dob: number
    age: number
    relationship: number
    shirt_size: number
    prefix_th: number
    prefix_en: number
    citizen_id: number
    social_id: number
    staff_status: number
    tel: number
    address: number
    gender: number
    staff_code: number
    religion: number
    userId: number
    citizen_addressnumber: number
    citizen_address: number
    citizen_country: number
    citizen_province: number
    citizen_district: number
    citizen_state: number
    citizen_zipcode: number
    citizen_tel: number
    contract_sameCitizen: number
    contract_addressnumber: number
    contract_address: number
    contract_country: number
    contract_province: number
    contract_district: number
    contract_state: number
    contract_zipcode: number
    contract_email: number
    contract_companyemail: number
    social_facebook: number
    social_likedin: number
    social_line: number
    social_telegram: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    bio?: true
    firstname_th?: true
    lastname_th?: true
    firstname_en?: true
    lastname_en?: true
    nickname?: true
    blood_type?: true
    employee_status?: true
    start_date_work?: true
    avatar?: true
    dob?: true
    age?: true
    relationship?: true
    shirt_size?: true
    prefix_th?: true
    prefix_en?: true
    citizen_id?: true
    social_id?: true
    staff_status?: true
    tel?: true
    address?: true
    gender?: true
    staff_code?: true
    religion?: true
    userId?: true
    citizen_addressnumber?: true
    citizen_address?: true
    citizen_country?: true
    citizen_province?: true
    citizen_district?: true
    citizen_state?: true
    citizen_zipcode?: true
    citizen_tel?: true
    contract_sameCitizen?: true
    contract_addressnumber?: true
    contract_address?: true
    contract_country?: true
    contract_province?: true
    contract_district?: true
    contract_state?: true
    contract_zipcode?: true
    contract_email?: true
    contract_companyemail?: true
    social_facebook?: true
    social_likedin?: true
    social_line?: true
    social_telegram?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    firstname_th?: true
    lastname_th?: true
    firstname_en?: true
    lastname_en?: true
    nickname?: true
    blood_type?: true
    employee_status?: true
    start_date_work?: true
    avatar?: true
    dob?: true
    age?: true
    relationship?: true
    shirt_size?: true
    prefix_th?: true
    prefix_en?: true
    citizen_id?: true
    social_id?: true
    staff_status?: true
    tel?: true
    address?: true
    gender?: true
    staff_code?: true
    religion?: true
    userId?: true
    citizen_addressnumber?: true
    citizen_address?: true
    citizen_country?: true
    citizen_province?: true
    citizen_district?: true
    citizen_state?: true
    citizen_zipcode?: true
    citizen_tel?: true
    contract_sameCitizen?: true
    contract_addressnumber?: true
    contract_address?: true
    contract_country?: true
    contract_province?: true
    contract_district?: true
    contract_state?: true
    contract_zipcode?: true
    contract_email?: true
    contract_companyemail?: true
    social_facebook?: true
    social_likedin?: true
    social_line?: true
    social_telegram?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    bio?: true
    firstname_th?: true
    lastname_th?: true
    firstname_en?: true
    lastname_en?: true
    nickname?: true
    blood_type?: true
    employee_status?: true
    start_date_work?: true
    avatar?: true
    dob?: true
    age?: true
    relationship?: true
    shirt_size?: true
    prefix_th?: true
    prefix_en?: true
    citizen_id?: true
    social_id?: true
    staff_status?: true
    tel?: true
    address?: true
    gender?: true
    staff_code?: true
    religion?: true
    userId?: true
    citizen_addressnumber?: true
    citizen_address?: true
    citizen_country?: true
    citizen_province?: true
    citizen_district?: true
    citizen_state?: true
    citizen_zipcode?: true
    citizen_tel?: true
    contract_sameCitizen?: true
    contract_addressnumber?: true
    contract_address?: true
    contract_country?: true
    contract_province?: true
    contract_district?: true
    contract_state?: true
    contract_zipcode?: true
    contract_email?: true
    contract_companyemail?: true
    social_facebook?: true
    social_likedin?: true
    social_line?: true
    social_telegram?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs = {
    where?: ProfileWhereInput
    orderBy?: Enumerable<ProfileOrderByWithAggregationInput>
    by: ProfileScalarFieldEnum[]
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    id: string
    bio: string | null
    firstname_th: string | null
    lastname_th: string | null
    firstname_en: string | null
    lastname_en: string | null
    nickname: string | null
    blood_type: string | null
    employee_status: string | null
    start_date_work: Date | null
    avatar: string | null
    dob: Date | null
    age: string | null
    relationship: string | null
    shirt_size: string | null
    prefix_th: string | null
    prefix_en: string | null
    citizen_id: string | null
    social_id: string | null
    staff_status: string | null
    tel: string | null
    address: string | null
    gender: string | null
    staff_code: string | null
    religion: string | null
    userId: string
    citizen_addressnumber: string | null
    citizen_address: string | null
    citizen_country: string | null
    citizen_province: string | null
    citizen_district: string | null
    citizen_state: string | null
    citizen_zipcode: string | null
    citizen_tel: string | null
    contract_sameCitizen: boolean
    contract_addressnumber: string | null
    contract_address: string | null
    contract_country: string | null
    contract_province: string | null
    contract_district: string | null
    contract_state: string | null
    contract_zipcode: string | null
    contract_email: string | null
    contract_companyemail: string | null
    social_facebook: string | null
    social_likedin: string | null
    social_line: string | null
    social_telegram: string | null
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect = {
    id?: boolean
    bio?: boolean
    firstname_th?: boolean
    lastname_th?: boolean
    firstname_en?: boolean
    lastname_en?: boolean
    nickname?: boolean
    blood_type?: boolean
    employee_status?: boolean
    start_date_work?: boolean
    avatar?: boolean
    dob?: boolean
    age?: boolean
    relationship?: boolean
    shirt_size?: boolean
    prefix_th?: boolean
    prefix_en?: boolean
    citizen_id?: boolean
    social_id?: boolean
    staff_status?: boolean
    tel?: boolean
    address?: boolean
    gender?: boolean
    staff_code?: boolean
    religion?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    citizen_addressnumber?: boolean
    citizen_address?: boolean
    citizen_country?: boolean
    citizen_province?: boolean
    citizen_district?: boolean
    citizen_state?: boolean
    citizen_zipcode?: boolean
    citizen_tel?: boolean
    contract_sameCitizen?: boolean
    contract_addressnumber?: boolean
    contract_address?: boolean
    contract_country?: boolean
    contract_province?: boolean
    contract_district?: boolean
    contract_state?: boolean
    contract_zipcode?: boolean
    contract_email?: boolean
    contract_companyemail?: boolean
    social_facebook?: boolean
    social_likedin?: boolean
    social_line?: boolean
    social_telegram?: boolean
  }


  export type ProfileInclude = {
    user?: boolean | UserArgs
  }

  export type ProfileGetPayload<S extends boolean | null | undefined | ProfileArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Profile :
    S extends undefined ? never :
    S extends { include: any } & (ProfileArgs | ProfileFindManyArgs)
    ? Profile  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProfileArgs | ProfileFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Profile ? Profile[P] : never
  } 
      : Profile


  type ProfileCountArgs = 
    Omit<ProfileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProfileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Profile'> extends True ? Prisma__ProfileClient<ProfileGetPayload<T>> : Prisma__ProfileClient<ProfileGetPayload<T> | null, null>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProfileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Profile'> extends True ? Prisma__ProfileClient<ProfileGetPayload<T>> : Prisma__ProfileClient<ProfileGetPayload<T> | null, null>

    /**
     * Find the first Profile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs>(
      args?: SelectSubset<T, ProfileFindManyArgs>
    ): PrismaPromise<Array<ProfileGetPayload<T>>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs>(
      args: SelectSubset<T, ProfileCreateArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs>(
      args?: SelectSubset<T, ProfileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs>(
      args: SelectSubset<T, ProfileDeleteArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs>(
      args: SelectSubset<T, ProfileUpdateArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProfileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs>(
      args: SelectSubset<T, ProfileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs>(
      args: SelectSubset<T, ProfileUpsertArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProfileClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Profile base type for findUnique actions
   */
  export type ProfileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUnique
   */
  export interface ProfileFindUniqueArgs extends ProfileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile base type for findFirst actions
   */
  export type ProfileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * Profile findFirst
   */
  export interface ProfileFindFirstArgs extends ProfileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs = {
    /**
     * The data used to create many Profiles.
     */
    data: Enumerable<ProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile without action
   */
  export type ProfileArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    islogin: boolean | null
    isActive: boolean | null
    isOwner: boolean | null
    lastlogin: Date | null
    createdAt: Date | null
    roleId: string | null
    RoleCompanyID: string | null
    companyBranchId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    islogin: boolean | null
    isActive: boolean | null
    isOwner: boolean | null
    lastlogin: Date | null
    createdAt: Date | null
    roleId: string | null
    RoleCompanyID: string | null
    companyBranchId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    islogin: number
    isActive: number
    isOwner: number
    lastlogin: number
    createdAt: number
    roleId: number
    RoleCompanyID: number
    companyBranchId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    islogin?: true
    isActive?: true
    isOwner?: true
    lastlogin?: true
    createdAt?: true
    roleId?: true
    RoleCompanyID?: true
    companyBranchId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    islogin?: true
    isActive?: true
    isOwner?: true
    lastlogin?: true
    createdAt?: true
    roleId?: true
    RoleCompanyID?: true
    companyBranchId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    islogin?: true
    isActive?: true
    isOwner?: true
    lastlogin?: true
    createdAt?: true
    roleId?: true
    RoleCompanyID?: true
    companyBranchId?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    islogin: boolean
    isActive: boolean
    isOwner: boolean
    lastlogin: Date | null
    createdAt: Date
    roleId: string | null
    RoleCompanyID: string | null
    companyBranchId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    profile?: boolean | ProfileArgs
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: boolean
    createdAt?: boolean
    roleId?: boolean
    role?: boolean | RoleArgs
    RoleCompanyID?: boolean
    company?: boolean | User$companyArgs
    companyBranch?: boolean | CompanyBranchArgs
    companyBranchId?: boolean
    Role_Company?: boolean | Role_CompanyArgs
    Position_user?: boolean | Position_userArgs
    henchman?: boolean | User$henchmanArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    profile?: boolean | ProfileArgs
    role?: boolean | RoleArgs
    company?: boolean | User$companyArgs
    companyBranch?: boolean | CompanyBranchArgs
    Role_Company?: boolean | Role_CompanyArgs
    Position_user?: boolean | Position_userArgs
    henchman?: boolean | User$henchmanArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'profile' ? ProfileGetPayload<S['include'][P]> | null :
        P extends 'role' ? RoleGetPayload<S['include'][P]> | null :
        P extends 'company' ? Array < CompanyGetPayload<S['include'][P]>>  :
        P extends 'companyBranch' ? CompanyBranchGetPayload<S['include'][P]> | null :
        P extends 'Role_Company' ? Role_CompanyGetPayload<S['include'][P]> | null :
        P extends 'Position_user' ? Position_userGetPayload<S['include'][P]> | null :
        P extends 'henchman' ? Array < Position_userGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'profile' ? ProfileGetPayload<S['select'][P]> | null :
        P extends 'role' ? RoleGetPayload<S['select'][P]> | null :
        P extends 'company' ? Array < CompanyGetPayload<S['select'][P]>>  :
        P extends 'companyBranch' ? CompanyBranchGetPayload<S['select'][P]> | null :
        P extends 'Role_Company' ? Role_CompanyGetPayload<S['select'][P]> | null :
        P extends 'Position_user' ? Position_userGetPayload<S['select'][P]> | null :
        P extends 'henchman' ? Array < Position_userGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    profile<T extends ProfileArgs= {}>(args?: Subset<T, ProfileArgs>): Prisma__ProfileClient<ProfileGetPayload<T> | Null>;

    role<T extends RoleArgs= {}>(args?: Subset<T, RoleArgs>): Prisma__RoleClient<RoleGetPayload<T> | Null>;

    company<T extends User$companyArgs= {}>(args?: Subset<T, User$companyArgs>): PrismaPromise<Array<CompanyGetPayload<T>>| Null>;

    companyBranch<T extends CompanyBranchArgs= {}>(args?: Subset<T, CompanyBranchArgs>): Prisma__CompanyBranchClient<CompanyBranchGetPayload<T> | Null>;

    Role_Company<T extends Role_CompanyArgs= {}>(args?: Subset<T, Role_CompanyArgs>): Prisma__Role_CompanyClient<Role_CompanyGetPayload<T> | Null>;

    Position_user<T extends Position_userArgs= {}>(args?: Subset<T, Position_userArgs>): Prisma__Position_userClient<Position_userGetPayload<T> | Null>;

    henchman<T extends User$henchmanArgs= {}>(args?: Subset<T, User$henchmanArgs>): PrismaPromise<Array<Position_userGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.company
   */
  export type User$companyArgs = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude | null
    where?: CompanyWhereInput
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * User.henchman
   */
  export type User$henchmanArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    where?: Position_userWhereInput
    orderBy?: Enumerable<Position_userOrderByWithRelationInput>
    cursor?: Position_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Position_userScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Role
   */


  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs = {
    where?: RoleWhereInput
    orderBy?: Enumerable<RoleOrderByWithAggregationInput>
    by: RoleScalarFieldEnum[]
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }


  export type RoleGroupByOutputType = {
    id: string
    name: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect = {
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs
    _count?: boolean | RoleCountOutputTypeArgs
  }


  export type RoleInclude = {
    users?: boolean | Role$usersArgs
    _count?: boolean | RoleCountOutputTypeArgs
  }

  export type RoleGetPayload<S extends boolean | null | undefined | RoleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Role :
    S extends undefined ? never :
    S extends { include: any } & (RoleArgs | RoleFindManyArgs)
    ? Role  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoleArgs | RoleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Role ? Role[P] : never
  } 
      : Role


  type RoleCountArgs = 
    Omit<RoleFindManyArgs, 'select' | 'include'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Role'> extends True ? Prisma__RoleClient<RoleGetPayload<T>> : Prisma__RoleClient<RoleGetPayload<T> | null, null>

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs>
    ): Prisma__RoleClient<RoleGetPayload<T>>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Role'> extends True ? Prisma__RoleClient<RoleGetPayload<T>> : Prisma__RoleClient<RoleGetPayload<T> | null, null>

    /**
     * Find the first Role that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs>
    ): Prisma__RoleClient<RoleGetPayload<T>>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs>(
      args?: SelectSubset<T, RoleFindManyArgs>
    ): PrismaPromise<Array<RoleGetPayload<T>>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs>(
      args: SelectSubset<T, RoleCreateArgs>
    ): Prisma__RoleClient<RoleGetPayload<T>>

    /**
     * Create many Roles.
     *     @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoleCreateManyArgs>(
      args?: SelectSubset<T, RoleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs>(
      args: SelectSubset<T, RoleDeleteArgs>
    ): Prisma__RoleClient<RoleGetPayload<T>>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs>(
      args: SelectSubset<T, RoleUpdateArgs>
    ): Prisma__RoleClient<RoleGetPayload<T>>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs>(
      args?: SelectSubset<T, RoleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs>(
      args: SelectSubset<T, RoleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs>(
      args: SelectSubset<T, RoleUpsertArgs>
    ): Prisma__RoleClient<RoleGetPayload<T>>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoleClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends Role$usersArgs= {}>(args?: Subset<T, Role$usersArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Role base type for findUnique actions
   */
  export type RoleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUnique
   */
  export interface RoleFindUniqueArgs extends RoleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role base type for findFirst actions
   */
  export type RoleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: Enumerable<RoleScalarFieldEnum>
  }

  /**
   * Role findFirst
   */
  export interface RoleFindFirstArgs extends RoleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role findMany
   */
  export type RoleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role create
   */
  export type RoleCreateArgs = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role createMany
   */
  export type RoleCreateManyArgs = {
    /**
     * The data used to create many Roles.
     */
    data: Enumerable<RoleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }


  /**
   * Role.users
   */
  export type Role$usersArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Role without action
   */
  export type RoleArgs = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude | null
  }



  /**
   * Model Role_Company
   */


  export type AggregateRole_Company = {
    _count: Role_CompanyCountAggregateOutputType | null
    _avg: Role_CompanyAvgAggregateOutputType | null
    _sum: Role_CompanySumAggregateOutputType | null
    _min: Role_CompanyMinAggregateOutputType | null
    _max: Role_CompanyMaxAggregateOutputType | null
  }

  export type Role_CompanyAvgAggregateOutputType = {
    status: number | null
  }

  export type Role_CompanySumAggregateOutputType = {
    status: number | null
  }

  export type Role_CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: number | null
    companyBranchId: string | null
  }

  export type Role_CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: number | null
    companyBranchId: string | null
  }

  export type Role_CompanyCountAggregateOutputType = {
    id: number
    name: number
    access: number
    status: number
    companyBranchId: number
    _all: number
  }


  export type Role_CompanyAvgAggregateInputType = {
    status?: true
  }

  export type Role_CompanySumAggregateInputType = {
    status?: true
  }

  export type Role_CompanyMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    companyBranchId?: true
  }

  export type Role_CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    companyBranchId?: true
  }

  export type Role_CompanyCountAggregateInputType = {
    id?: true
    name?: true
    access?: true
    status?: true
    companyBranchId?: true
    _all?: true
  }

  export type Role_CompanyAggregateArgs = {
    /**
     * Filter which Role_Company to aggregate.
     */
    where?: Role_CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role_Companies to fetch.
     */
    orderBy?: Enumerable<Role_CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Role_CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role_Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role_Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Role_Companies
    **/
    _count?: true | Role_CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Role_CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Role_CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Role_CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Role_CompanyMaxAggregateInputType
  }

  export type GetRole_CompanyAggregateType<T extends Role_CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateRole_Company]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole_Company[P]>
      : GetScalarType<T[P], AggregateRole_Company[P]>
  }




  export type Role_CompanyGroupByArgs = {
    where?: Role_CompanyWhereInput
    orderBy?: Enumerable<Role_CompanyOrderByWithAggregationInput>
    by: Role_CompanyScalarFieldEnum[]
    having?: Role_CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Role_CompanyCountAggregateInputType | true
    _avg?: Role_CompanyAvgAggregateInputType
    _sum?: Role_CompanySumAggregateInputType
    _min?: Role_CompanyMinAggregateInputType
    _max?: Role_CompanyMaxAggregateInputType
  }


  export type Role_CompanyGroupByOutputType = {
    id: string
    name: string
    access: JsonValue
    status: number
    companyBranchId: string | null
    _count: Role_CompanyCountAggregateOutputType | null
    _avg: Role_CompanyAvgAggregateOutputType | null
    _sum: Role_CompanySumAggregateOutputType | null
    _min: Role_CompanyMinAggregateOutputType | null
    _max: Role_CompanyMaxAggregateOutputType | null
  }

  type GetRole_CompanyGroupByPayload<T extends Role_CompanyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Role_CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Role_CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Role_CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], Role_CompanyGroupByOutputType[P]>
        }
      >
    >


  export type Role_CompanySelect = {
    id?: boolean
    name?: boolean
    access?: boolean
    status?: boolean
    users?: boolean | Role_Company$usersArgs
    companyBranch?: boolean | CompanyBranchArgs
    companyBranchId?: boolean
    _count?: boolean | Role_CompanyCountOutputTypeArgs
  }


  export type Role_CompanyInclude = {
    users?: boolean | Role_Company$usersArgs
    companyBranch?: boolean | CompanyBranchArgs
    _count?: boolean | Role_CompanyCountOutputTypeArgs
  }

  export type Role_CompanyGetPayload<S extends boolean | null | undefined | Role_CompanyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Role_Company :
    S extends undefined ? never :
    S extends { include: any } & (Role_CompanyArgs | Role_CompanyFindManyArgs)
    ? Role_Company  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'companyBranch' ? CompanyBranchGetPayload<S['include'][P]> | null :
        P extends '_count' ? Role_CompanyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Role_CompanyArgs | Role_CompanyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'companyBranch' ? CompanyBranchGetPayload<S['select'][P]> | null :
        P extends '_count' ? Role_CompanyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Role_Company ? Role_Company[P] : never
  } 
      : Role_Company


  type Role_CompanyCountArgs = 
    Omit<Role_CompanyFindManyArgs, 'select' | 'include'> & {
      select?: Role_CompanyCountAggregateInputType | true
    }

  export interface Role_CompanyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Role_Company that matches the filter.
     * @param {Role_CompanyFindUniqueArgs} args - Arguments to find a Role_Company
     * @example
     * // Get one Role_Company
     * const role_Company = await prisma.role_Company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Role_CompanyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Role_CompanyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Role_Company'> extends True ? Prisma__Role_CompanyClient<Role_CompanyGetPayload<T>> : Prisma__Role_CompanyClient<Role_CompanyGetPayload<T> | null, null>

    /**
     * Find one Role_Company that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Role_CompanyFindUniqueOrThrowArgs} args - Arguments to find a Role_Company
     * @example
     * // Get one Role_Company
     * const role_Company = await prisma.role_Company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Role_CompanyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Role_CompanyFindUniqueOrThrowArgs>
    ): Prisma__Role_CompanyClient<Role_CompanyGetPayload<T>>

    /**
     * Find the first Role_Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_CompanyFindFirstArgs} args - Arguments to find a Role_Company
     * @example
     * // Get one Role_Company
     * const role_Company = await prisma.role_Company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Role_CompanyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Role_CompanyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Role_Company'> extends True ? Prisma__Role_CompanyClient<Role_CompanyGetPayload<T>> : Prisma__Role_CompanyClient<Role_CompanyGetPayload<T> | null, null>

    /**
     * Find the first Role_Company that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_CompanyFindFirstOrThrowArgs} args - Arguments to find a Role_Company
     * @example
     * // Get one Role_Company
     * const role_Company = await prisma.role_Company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Role_CompanyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Role_CompanyFindFirstOrThrowArgs>
    ): Prisma__Role_CompanyClient<Role_CompanyGetPayload<T>>

    /**
     * Find zero or more Role_Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role_Companies
     * const role_Companies = await prisma.role_Company.findMany()
     * 
     * // Get first 10 Role_Companies
     * const role_Companies = await prisma.role_Company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const role_CompanyWithIdOnly = await prisma.role_Company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Role_CompanyFindManyArgs>(
      args?: SelectSubset<T, Role_CompanyFindManyArgs>
    ): PrismaPromise<Array<Role_CompanyGetPayload<T>>>

    /**
     * Create a Role_Company.
     * @param {Role_CompanyCreateArgs} args - Arguments to create a Role_Company.
     * @example
     * // Create one Role_Company
     * const Role_Company = await prisma.role_Company.create({
     *   data: {
     *     // ... data to create a Role_Company
     *   }
     * })
     * 
    **/
    create<T extends Role_CompanyCreateArgs>(
      args: SelectSubset<T, Role_CompanyCreateArgs>
    ): Prisma__Role_CompanyClient<Role_CompanyGetPayload<T>>

    /**
     * Create many Role_Companies.
     *     @param {Role_CompanyCreateManyArgs} args - Arguments to create many Role_Companies.
     *     @example
     *     // Create many Role_Companies
     *     const role_Company = await prisma.role_Company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Role_CompanyCreateManyArgs>(
      args?: SelectSubset<T, Role_CompanyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Role_Company.
     * @param {Role_CompanyDeleteArgs} args - Arguments to delete one Role_Company.
     * @example
     * // Delete one Role_Company
     * const Role_Company = await prisma.role_Company.delete({
     *   where: {
     *     // ... filter to delete one Role_Company
     *   }
     * })
     * 
    **/
    delete<T extends Role_CompanyDeleteArgs>(
      args: SelectSubset<T, Role_CompanyDeleteArgs>
    ): Prisma__Role_CompanyClient<Role_CompanyGetPayload<T>>

    /**
     * Update one Role_Company.
     * @param {Role_CompanyUpdateArgs} args - Arguments to update one Role_Company.
     * @example
     * // Update one Role_Company
     * const role_Company = await prisma.role_Company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Role_CompanyUpdateArgs>(
      args: SelectSubset<T, Role_CompanyUpdateArgs>
    ): Prisma__Role_CompanyClient<Role_CompanyGetPayload<T>>

    /**
     * Delete zero or more Role_Companies.
     * @param {Role_CompanyDeleteManyArgs} args - Arguments to filter Role_Companies to delete.
     * @example
     * // Delete a few Role_Companies
     * const { count } = await prisma.role_Company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Role_CompanyDeleteManyArgs>(
      args?: SelectSubset<T, Role_CompanyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role_Companies
     * const role_Company = await prisma.role_Company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Role_CompanyUpdateManyArgs>(
      args: SelectSubset<T, Role_CompanyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Role_Company.
     * @param {Role_CompanyUpsertArgs} args - Arguments to update or create a Role_Company.
     * @example
     * // Update or create a Role_Company
     * const role_Company = await prisma.role_Company.upsert({
     *   create: {
     *     // ... data to create a Role_Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role_Company we want to update
     *   }
     * })
    **/
    upsert<T extends Role_CompanyUpsertArgs>(
      args: SelectSubset<T, Role_CompanyUpsertArgs>
    ): Prisma__Role_CompanyClient<Role_CompanyGetPayload<T>>

    /**
     * Count the number of Role_Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_CompanyCountArgs} args - Arguments to filter Role_Companies to count.
     * @example
     * // Count the number of Role_Companies
     * const count = await prisma.role_Company.count({
     *   where: {
     *     // ... the filter for the Role_Companies we want to count
     *   }
     * })
    **/
    count<T extends Role_CompanyCountArgs>(
      args?: Subset<T, Role_CompanyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Role_CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role_Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Role_CompanyAggregateArgs>(args: Subset<T, Role_CompanyAggregateArgs>): PrismaPromise<GetRole_CompanyAggregateType<T>>

    /**
     * Group by Role_Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Role_CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Role_CompanyGroupByArgs['orderBy'] }
        : { orderBy?: Role_CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Role_CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_CompanyGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Role_Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Role_CompanyClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends Role_Company$usersArgs= {}>(args?: Subset<T, Role_Company$usersArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

    companyBranch<T extends CompanyBranchArgs= {}>(args?: Subset<T, CompanyBranchArgs>): Prisma__CompanyBranchClient<CompanyBranchGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Role_Company base type for findUnique actions
   */
  export type Role_CompanyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Role_Company
     */
    select?: Role_CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Role_CompanyInclude | null
    /**
     * Filter, which Role_Company to fetch.
     */
    where: Role_CompanyWhereUniqueInput
  }

  /**
   * Role_Company findUnique
   */
  export interface Role_CompanyFindUniqueArgs extends Role_CompanyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Role_Company findUniqueOrThrow
   */
  export type Role_CompanyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Role_Company
     */
    select?: Role_CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Role_CompanyInclude | null
    /**
     * Filter, which Role_Company to fetch.
     */
    where: Role_CompanyWhereUniqueInput
  }


  /**
   * Role_Company base type for findFirst actions
   */
  export type Role_CompanyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Role_Company
     */
    select?: Role_CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Role_CompanyInclude | null
    /**
     * Filter, which Role_Company to fetch.
     */
    where?: Role_CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role_Companies to fetch.
     */
    orderBy?: Enumerable<Role_CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Role_Companies.
     */
    cursor?: Role_CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role_Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role_Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Role_Companies.
     */
    distinct?: Enumerable<Role_CompanyScalarFieldEnum>
  }

  /**
   * Role_Company findFirst
   */
  export interface Role_CompanyFindFirstArgs extends Role_CompanyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Role_Company findFirstOrThrow
   */
  export type Role_CompanyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Role_Company
     */
    select?: Role_CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Role_CompanyInclude | null
    /**
     * Filter, which Role_Company to fetch.
     */
    where?: Role_CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role_Companies to fetch.
     */
    orderBy?: Enumerable<Role_CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Role_Companies.
     */
    cursor?: Role_CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role_Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role_Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Role_Companies.
     */
    distinct?: Enumerable<Role_CompanyScalarFieldEnum>
  }


  /**
   * Role_Company findMany
   */
  export type Role_CompanyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Role_Company
     */
    select?: Role_CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Role_CompanyInclude | null
    /**
     * Filter, which Role_Companies to fetch.
     */
    where?: Role_CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role_Companies to fetch.
     */
    orderBy?: Enumerable<Role_CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Role_Companies.
     */
    cursor?: Role_CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role_Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role_Companies.
     */
    skip?: number
    distinct?: Enumerable<Role_CompanyScalarFieldEnum>
  }


  /**
   * Role_Company create
   */
  export type Role_CompanyCreateArgs = {
    /**
     * Select specific fields to fetch from the Role_Company
     */
    select?: Role_CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Role_CompanyInclude | null
    /**
     * The data needed to create a Role_Company.
     */
    data: XOR<Role_CompanyCreateInput, Role_CompanyUncheckedCreateInput>
  }


  /**
   * Role_Company createMany
   */
  export type Role_CompanyCreateManyArgs = {
    /**
     * The data used to create many Role_Companies.
     */
    data: Enumerable<Role_CompanyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Role_Company update
   */
  export type Role_CompanyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Role_Company
     */
    select?: Role_CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Role_CompanyInclude | null
    /**
     * The data needed to update a Role_Company.
     */
    data: XOR<Role_CompanyUpdateInput, Role_CompanyUncheckedUpdateInput>
    /**
     * Choose, which Role_Company to update.
     */
    where: Role_CompanyWhereUniqueInput
  }


  /**
   * Role_Company updateMany
   */
  export type Role_CompanyUpdateManyArgs = {
    /**
     * The data used to update Role_Companies.
     */
    data: XOR<Role_CompanyUpdateManyMutationInput, Role_CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Role_Companies to update
     */
    where?: Role_CompanyWhereInput
  }


  /**
   * Role_Company upsert
   */
  export type Role_CompanyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Role_Company
     */
    select?: Role_CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Role_CompanyInclude | null
    /**
     * The filter to search for the Role_Company to update in case it exists.
     */
    where: Role_CompanyWhereUniqueInput
    /**
     * In case the Role_Company found by the `where` argument doesn't exist, create a new Role_Company with this data.
     */
    create: XOR<Role_CompanyCreateInput, Role_CompanyUncheckedCreateInput>
    /**
     * In case the Role_Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Role_CompanyUpdateInput, Role_CompanyUncheckedUpdateInput>
  }


  /**
   * Role_Company delete
   */
  export type Role_CompanyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Role_Company
     */
    select?: Role_CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Role_CompanyInclude | null
    /**
     * Filter which Role_Company to delete.
     */
    where: Role_CompanyWhereUniqueInput
  }


  /**
   * Role_Company deleteMany
   */
  export type Role_CompanyDeleteManyArgs = {
    /**
     * Filter which Role_Companies to delete
     */
    where?: Role_CompanyWhereInput
  }


  /**
   * Role_Company.users
   */
  export type Role_Company$usersArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Role_Company without action
   */
  export type Role_CompanyArgs = {
    /**
     * Select specific fields to fetch from the Role_Company
     */
    select?: Role_CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Role_CompanyInclude | null
  }



  /**
   * Model Province
   */


  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProvinceMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ProvinceCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProvinceMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvinceMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProvinceCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProvinceAggregateArgs = {
    /**
     * Filter which Province to aggregate.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: Enumerable<ProvinceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type ProvinceGroupByArgs = {
    where?: ProvinceWhereInput
    orderBy?: Enumerable<ProvinceOrderByWithAggregationInput>
    by: ProvinceScalarFieldEnum[]
    having?: ProvinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }


  export type ProvinceGroupByOutputType = {
    id: string
    name: string
    _count: ProvinceCountAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends ProvinceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type ProvinceSelect = {
    id?: boolean
    name?: boolean
    district?: boolean | Province$districtArgs
    _count?: boolean | ProvinceCountOutputTypeArgs
  }


  export type ProvinceInclude = {
    district?: boolean | Province$districtArgs
    _count?: boolean | ProvinceCountOutputTypeArgs
  }

  export type ProvinceGetPayload<S extends boolean | null | undefined | ProvinceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Province :
    S extends undefined ? never :
    S extends { include: any } & (ProvinceArgs | ProvinceFindManyArgs)
    ? Province  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'district' ? Array < DistrictGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProvinceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProvinceArgs | ProvinceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'district' ? Array < DistrictGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProvinceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Province ? Province[P] : never
  } 
      : Province


  type ProvinceCountArgs = 
    Omit<ProvinceFindManyArgs, 'select' | 'include'> & {
      select?: ProvinceCountAggregateInputType | true
    }

  export interface ProvinceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Province that matches the filter.
     * @param {ProvinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProvinceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProvinceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Province'> extends True ? Prisma__ProvinceClient<ProvinceGetPayload<T>> : Prisma__ProvinceClient<ProvinceGetPayload<T> | null, null>

    /**
     * Find one Province that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProvinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProvinceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProvinceFindUniqueOrThrowArgs>
    ): Prisma__ProvinceClient<ProvinceGetPayload<T>>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProvinceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProvinceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Province'> extends True ? Prisma__ProvinceClient<ProvinceGetPayload<T>> : Prisma__ProvinceClient<ProvinceGetPayload<T> | null, null>

    /**
     * Find the first Province that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProvinceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProvinceFindFirstOrThrowArgs>
    ): Prisma__ProvinceClient<ProvinceGetPayload<T>>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinceWithIdOnly = await prisma.province.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProvinceFindManyArgs>(
      args?: SelectSubset<T, ProvinceFindManyArgs>
    ): PrismaPromise<Array<ProvinceGetPayload<T>>>

    /**
     * Create a Province.
     * @param {ProvinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
    **/
    create<T extends ProvinceCreateArgs>(
      args: SelectSubset<T, ProvinceCreateArgs>
    ): Prisma__ProvinceClient<ProvinceGetPayload<T>>

    /**
     * Create many Provinces.
     *     @param {ProvinceCreateManyArgs} args - Arguments to create many Provinces.
     *     @example
     *     // Create many Provinces
     *     const province = await prisma.province.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProvinceCreateManyArgs>(
      args?: SelectSubset<T, ProvinceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Province.
     * @param {ProvinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
    **/
    delete<T extends ProvinceDeleteArgs>(
      args: SelectSubset<T, ProvinceDeleteArgs>
    ): Prisma__ProvinceClient<ProvinceGetPayload<T>>

    /**
     * Update one Province.
     * @param {ProvinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProvinceUpdateArgs>(
      args: SelectSubset<T, ProvinceUpdateArgs>
    ): Prisma__ProvinceClient<ProvinceGetPayload<T>>

    /**
     * Delete zero or more Provinces.
     * @param {ProvinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProvinceDeleteManyArgs>(
      args?: SelectSubset<T, ProvinceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProvinceUpdateManyArgs>(
      args: SelectSubset<T, ProvinceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Province.
     * @param {ProvinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
    **/
    upsert<T extends ProvinceUpsertArgs>(
      args: SelectSubset<T, ProvinceUpsertArgs>
    ): Prisma__ProvinceClient<ProvinceGetPayload<T>>

    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends ProvinceCountArgs>(
      args?: Subset<T, ProvinceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinceGroupByArgs['orderBy'] }
        : { orderBy?: ProvinceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProvinceClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    district<T extends Province$districtArgs= {}>(args?: Subset<T, Province$districtArgs>): PrismaPromise<Array<DistrictGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Province base type for findUnique actions
   */
  export type ProvinceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvinceInclude | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findUnique
   */
  export interface ProvinceFindUniqueArgs extends ProvinceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Province findUniqueOrThrow
   */
  export type ProvinceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvinceInclude | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }


  /**
   * Province base type for findFirst actions
   */
  export type ProvinceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvinceInclude | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: Enumerable<ProvinceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: Enumerable<ProvinceScalarFieldEnum>
  }

  /**
   * Province findFirst
   */
  export interface ProvinceFindFirstArgs extends ProvinceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Province findFirstOrThrow
   */
  export type ProvinceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvinceInclude | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: Enumerable<ProvinceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: Enumerable<ProvinceScalarFieldEnum>
  }


  /**
   * Province findMany
   */
  export type ProvinceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvinceInclude | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: Enumerable<ProvinceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    distinct?: Enumerable<ProvinceScalarFieldEnum>
  }


  /**
   * Province create
   */
  export type ProvinceCreateArgs = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvinceInclude | null
    /**
     * The data needed to create a Province.
     */
    data: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
  }


  /**
   * Province createMany
   */
  export type ProvinceCreateManyArgs = {
    /**
     * The data used to create many Provinces.
     */
    data: Enumerable<ProvinceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Province update
   */
  export type ProvinceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvinceInclude | null
    /**
     * The data needed to update a Province.
     */
    data: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
    /**
     * Choose, which Province to update.
     */
    where: ProvinceWhereUniqueInput
  }


  /**
   * Province updateMany
   */
  export type ProvinceUpdateManyArgs = {
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
  }


  /**
   * Province upsert
   */
  export type ProvinceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvinceInclude | null
    /**
     * The filter to search for the Province to update in case it exists.
     */
    where: ProvinceWhereUniqueInput
    /**
     * In case the Province found by the `where` argument doesn't exist, create a new Province with this data.
     */
    create: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
    /**
     * In case the Province was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
  }


  /**
   * Province delete
   */
  export type ProvinceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvinceInclude | null
    /**
     * Filter which Province to delete.
     */
    where: ProvinceWhereUniqueInput
  }


  /**
   * Province deleteMany
   */
  export type ProvinceDeleteManyArgs = {
    /**
     * Filter which Provinces to delete
     */
    where?: ProvinceWhereInput
  }


  /**
   * Province.district
   */
  export type Province$districtArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    where?: DistrictWhereInput
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    cursor?: DistrictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DistrictScalarFieldEnum>
  }


  /**
   * Province without action
   */
  export type ProvinceArgs = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProvinceInclude | null
  }



  /**
   * Model District
   */


  export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  export type DistrictMinAggregateOutputType = {
    id: string | null
    name: string | null
    provinceId: string | null
  }

  export type DistrictMaxAggregateOutputType = {
    id: string | null
    name: string | null
    provinceId: string | null
  }

  export type DistrictCountAggregateOutputType = {
    id: number
    name: number
    provinceId: number
    _all: number
  }


  export type DistrictMinAggregateInputType = {
    id?: true
    name?: true
    provinceId?: true
  }

  export type DistrictMaxAggregateInputType = {
    id?: true
    name?: true
    provinceId?: true
  }

  export type DistrictCountAggregateInputType = {
    id?: true
    name?: true
    provinceId?: true
    _all?: true
  }

  export type DistrictAggregateArgs = {
    /**
     * Filter which District to aggregate.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Districts
    **/
    _count?: true | DistrictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictMaxAggregateInputType
  }

  export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrict[P]>
      : GetScalarType<T[P], AggregateDistrict[P]>
  }




  export type DistrictGroupByArgs = {
    where?: DistrictWhereInput
    orderBy?: Enumerable<DistrictOrderByWithAggregationInput>
    by: DistrictScalarFieldEnum[]
    having?: DistrictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictCountAggregateInputType | true
    _min?: DistrictMinAggregateInputType
    _max?: DistrictMaxAggregateInputType
  }


  export type DistrictGroupByOutputType = {
    id: string
    name: string
    provinceId: string
    _count: DistrictCountAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  type GetDistrictGroupByPayload<T extends DistrictGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DistrictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictGroupByOutputType[P]>
        }
      >
    >


  export type DistrictSelect = {
    id?: boolean
    name?: boolean
    provinceId?: boolean
    province?: boolean | ProvinceArgs
    amphoe?: boolean | District$amphoeArgs
    _count?: boolean | DistrictCountOutputTypeArgs
  }


  export type DistrictInclude = {
    province?: boolean | ProvinceArgs
    amphoe?: boolean | District$amphoeArgs
    _count?: boolean | DistrictCountOutputTypeArgs
  }

  export type DistrictGetPayload<S extends boolean | null | undefined | DistrictArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? District :
    S extends undefined ? never :
    S extends { include: any } & (DistrictArgs | DistrictFindManyArgs)
    ? District  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'province' ? ProvinceGetPayload<S['include'][P]> :
        P extends 'amphoe' ? Array < AmphoeGetPayload<S['include'][P]>>  :
        P extends '_count' ? DistrictCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DistrictArgs | DistrictFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'province' ? ProvinceGetPayload<S['select'][P]> :
        P extends 'amphoe' ? Array < AmphoeGetPayload<S['select'][P]>>  :
        P extends '_count' ? DistrictCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof District ? District[P] : never
  } 
      : District


  type DistrictCountArgs = 
    Omit<DistrictFindManyArgs, 'select' | 'include'> & {
      select?: DistrictCountAggregateInputType | true
    }

  export interface DistrictDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one District that matches the filter.
     * @param {DistrictFindUniqueArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DistrictFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DistrictFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'District'> extends True ? Prisma__DistrictClient<DistrictGetPayload<T>> : Prisma__DistrictClient<DistrictGetPayload<T> | null, null>

    /**
     * Find one District that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DistrictFindUniqueOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DistrictFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DistrictFindUniqueOrThrowArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Find the first District that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DistrictFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DistrictFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'District'> extends True ? Prisma__DistrictClient<DistrictGetPayload<T>> : Prisma__DistrictClient<DistrictGetPayload<T> | null, null>

    /**
     * Find the first District that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DistrictFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DistrictFindFirstOrThrowArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Find zero or more Districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Districts
     * const districts = await prisma.district.findMany()
     * 
     * // Get first 10 Districts
     * const districts = await prisma.district.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const districtWithIdOnly = await prisma.district.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DistrictFindManyArgs>(
      args?: SelectSubset<T, DistrictFindManyArgs>
    ): PrismaPromise<Array<DistrictGetPayload<T>>>

    /**
     * Create a District.
     * @param {DistrictCreateArgs} args - Arguments to create a District.
     * @example
     * // Create one District
     * const District = await prisma.district.create({
     *   data: {
     *     // ... data to create a District
     *   }
     * })
     * 
    **/
    create<T extends DistrictCreateArgs>(
      args: SelectSubset<T, DistrictCreateArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Create many Districts.
     *     @param {DistrictCreateManyArgs} args - Arguments to create many Districts.
     *     @example
     *     // Create many Districts
     *     const district = await prisma.district.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DistrictCreateManyArgs>(
      args?: SelectSubset<T, DistrictCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a District.
     * @param {DistrictDeleteArgs} args - Arguments to delete one District.
     * @example
     * // Delete one District
     * const District = await prisma.district.delete({
     *   where: {
     *     // ... filter to delete one District
     *   }
     * })
     * 
    **/
    delete<T extends DistrictDeleteArgs>(
      args: SelectSubset<T, DistrictDeleteArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Update one District.
     * @param {DistrictUpdateArgs} args - Arguments to update one District.
     * @example
     * // Update one District
     * const district = await prisma.district.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DistrictUpdateArgs>(
      args: SelectSubset<T, DistrictUpdateArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Delete zero or more Districts.
     * @param {DistrictDeleteManyArgs} args - Arguments to filter Districts to delete.
     * @example
     * // Delete a few Districts
     * const { count } = await prisma.district.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DistrictDeleteManyArgs>(
      args?: SelectSubset<T, DistrictDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DistrictUpdateManyArgs>(
      args: SelectSubset<T, DistrictUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one District.
     * @param {DistrictUpsertArgs} args - Arguments to update or create a District.
     * @example
     * // Update or create a District
     * const district = await prisma.district.upsert({
     *   create: {
     *     // ... data to create a District
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the District we want to update
     *   }
     * })
    **/
    upsert<T extends DistrictUpsertArgs>(
      args: SelectSubset<T, DistrictUpsertArgs>
    ): Prisma__DistrictClient<DistrictGetPayload<T>>

    /**
     * Count the number of Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictCountArgs} args - Arguments to filter Districts to count.
     * @example
     * // Count the number of Districts
     * const count = await prisma.district.count({
     *   where: {
     *     // ... the filter for the Districts we want to count
     *   }
     * })
    **/
    count<T extends DistrictCountArgs>(
      args?: Subset<T, DistrictCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistrictAggregateArgs>(args: Subset<T, DistrictAggregateArgs>): PrismaPromise<GetDistrictAggregateType<T>>

    /**
     * Group by District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistrictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistrictGroupByArgs['orderBy'] }
        : { orderBy?: DistrictGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistrictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for District.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DistrictClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    province<T extends ProvinceArgs= {}>(args?: Subset<T, ProvinceArgs>): Prisma__ProvinceClient<ProvinceGetPayload<T> | Null>;

    amphoe<T extends District$amphoeArgs= {}>(args?: Subset<T, District$amphoeArgs>): PrismaPromise<Array<AmphoeGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * District base type for findUnique actions
   */
  export type DistrictFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findUnique
   */
  export interface DistrictFindUniqueArgs extends DistrictFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * District findUniqueOrThrow
   */
  export type DistrictFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }


  /**
   * District base type for findFirst actions
   */
  export type DistrictFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: Enumerable<DistrictScalarFieldEnum>
  }

  /**
   * District findFirst
   */
  export interface DistrictFindFirstArgs extends DistrictFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * District findFirstOrThrow
   */
  export type DistrictFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: Enumerable<DistrictScalarFieldEnum>
  }


  /**
   * District findMany
   */
  export type DistrictFindManyArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter, which Districts to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    distinct?: Enumerable<DistrictScalarFieldEnum>
  }


  /**
   * District create
   */
  export type DistrictCreateArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * The data needed to create a District.
     */
    data: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
  }


  /**
   * District createMany
   */
  export type DistrictCreateManyArgs = {
    /**
     * The data used to create many Districts.
     */
    data: Enumerable<DistrictCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * District update
   */
  export type DistrictUpdateArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * The data needed to update a District.
     */
    data: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
    /**
     * Choose, which District to update.
     */
    where: DistrictWhereUniqueInput
  }


  /**
   * District updateMany
   */
  export type DistrictUpdateManyArgs = {
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
  }


  /**
   * District upsert
   */
  export type DistrictUpsertArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * The filter to search for the District to update in case it exists.
     */
    where: DistrictWhereUniqueInput
    /**
     * In case the District found by the `where` argument doesn't exist, create a new District with this data.
     */
    create: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
    /**
     * In case the District was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
  }


  /**
   * District delete
   */
  export type DistrictDeleteArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
    /**
     * Filter which District to delete.
     */
    where: DistrictWhereUniqueInput
  }


  /**
   * District deleteMany
   */
  export type DistrictDeleteManyArgs = {
    /**
     * Filter which Districts to delete
     */
    where?: DistrictWhereInput
  }


  /**
   * District.amphoe
   */
  export type District$amphoeArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     */
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AmphoeInclude | null
    where?: AmphoeWhereInput
    orderBy?: Enumerable<AmphoeOrderByWithRelationInput>
    cursor?: AmphoeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AmphoeScalarFieldEnum>
  }


  /**
   * District without action
   */
  export type DistrictArgs = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistrictInclude | null
  }



  /**
   * Model Amphoe
   */


  export type AggregateAmphoe = {
    _count: AmphoeCountAggregateOutputType | null
    _min: AmphoeMinAggregateOutputType | null
    _max: AmphoeMaxAggregateOutputType | null
  }

  export type AmphoeMinAggregateOutputType = {
    id: string | null
    name: string | null
    districtId: string | null
    zipcode: string | null
  }

  export type AmphoeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    districtId: string | null
    zipcode: string | null
  }

  export type AmphoeCountAggregateOutputType = {
    id: number
    name: number
    districtId: number
    zipcode: number
    _all: number
  }


  export type AmphoeMinAggregateInputType = {
    id?: true
    name?: true
    districtId?: true
    zipcode?: true
  }

  export type AmphoeMaxAggregateInputType = {
    id?: true
    name?: true
    districtId?: true
    zipcode?: true
  }

  export type AmphoeCountAggregateInputType = {
    id?: true
    name?: true
    districtId?: true
    zipcode?: true
    _all?: true
  }

  export type AmphoeAggregateArgs = {
    /**
     * Filter which Amphoe to aggregate.
     */
    where?: AmphoeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphoes to fetch.
     */
    orderBy?: Enumerable<AmphoeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmphoeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amphoes
    **/
    _count?: true | AmphoeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmphoeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmphoeMaxAggregateInputType
  }

  export type GetAmphoeAggregateType<T extends AmphoeAggregateArgs> = {
        [P in keyof T & keyof AggregateAmphoe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmphoe[P]>
      : GetScalarType<T[P], AggregateAmphoe[P]>
  }




  export type AmphoeGroupByArgs = {
    where?: AmphoeWhereInput
    orderBy?: Enumerable<AmphoeOrderByWithAggregationInput>
    by: AmphoeScalarFieldEnum[]
    having?: AmphoeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmphoeCountAggregateInputType | true
    _min?: AmphoeMinAggregateInputType
    _max?: AmphoeMaxAggregateInputType
  }


  export type AmphoeGroupByOutputType = {
    id: string
    name: string
    districtId: string
    zipcode: string | null
    _count: AmphoeCountAggregateOutputType | null
    _min: AmphoeMinAggregateOutputType | null
    _max: AmphoeMaxAggregateOutputType | null
  }

  type GetAmphoeGroupByPayload<T extends AmphoeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AmphoeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmphoeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmphoeGroupByOutputType[P]>
            : GetScalarType<T[P], AmphoeGroupByOutputType[P]>
        }
      >
    >


  export type AmphoeSelect = {
    id?: boolean
    name?: boolean
    districtId?: boolean
    zipcode?: boolean
    district?: boolean | DistrictArgs
  }


  export type AmphoeInclude = {
    district?: boolean | DistrictArgs
  }

  export type AmphoeGetPayload<S extends boolean | null | undefined | AmphoeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Amphoe :
    S extends undefined ? never :
    S extends { include: any } & (AmphoeArgs | AmphoeFindManyArgs)
    ? Amphoe  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'district' ? DistrictGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AmphoeArgs | AmphoeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'district' ? DistrictGetPayload<S['select'][P]> :  P extends keyof Amphoe ? Amphoe[P] : never
  } 
      : Amphoe


  type AmphoeCountArgs = 
    Omit<AmphoeFindManyArgs, 'select' | 'include'> & {
      select?: AmphoeCountAggregateInputType | true
    }

  export interface AmphoeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Amphoe that matches the filter.
     * @param {AmphoeFindUniqueArgs} args - Arguments to find a Amphoe
     * @example
     * // Get one Amphoe
     * const amphoe = await prisma.amphoe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AmphoeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AmphoeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Amphoe'> extends True ? Prisma__AmphoeClient<AmphoeGetPayload<T>> : Prisma__AmphoeClient<AmphoeGetPayload<T> | null, null>

    /**
     * Find one Amphoe that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AmphoeFindUniqueOrThrowArgs} args - Arguments to find a Amphoe
     * @example
     * // Get one Amphoe
     * const amphoe = await prisma.amphoe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AmphoeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AmphoeFindUniqueOrThrowArgs>
    ): Prisma__AmphoeClient<AmphoeGetPayload<T>>

    /**
     * Find the first Amphoe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphoeFindFirstArgs} args - Arguments to find a Amphoe
     * @example
     * // Get one Amphoe
     * const amphoe = await prisma.amphoe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AmphoeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AmphoeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Amphoe'> extends True ? Prisma__AmphoeClient<AmphoeGetPayload<T>> : Prisma__AmphoeClient<AmphoeGetPayload<T> | null, null>

    /**
     * Find the first Amphoe that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphoeFindFirstOrThrowArgs} args - Arguments to find a Amphoe
     * @example
     * // Get one Amphoe
     * const amphoe = await prisma.amphoe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AmphoeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AmphoeFindFirstOrThrowArgs>
    ): Prisma__AmphoeClient<AmphoeGetPayload<T>>

    /**
     * Find zero or more Amphoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphoeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amphoes
     * const amphoes = await prisma.amphoe.findMany()
     * 
     * // Get first 10 Amphoes
     * const amphoes = await prisma.amphoe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amphoeWithIdOnly = await prisma.amphoe.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AmphoeFindManyArgs>(
      args?: SelectSubset<T, AmphoeFindManyArgs>
    ): PrismaPromise<Array<AmphoeGetPayload<T>>>

    /**
     * Create a Amphoe.
     * @param {AmphoeCreateArgs} args - Arguments to create a Amphoe.
     * @example
     * // Create one Amphoe
     * const Amphoe = await prisma.amphoe.create({
     *   data: {
     *     // ... data to create a Amphoe
     *   }
     * })
     * 
    **/
    create<T extends AmphoeCreateArgs>(
      args: SelectSubset<T, AmphoeCreateArgs>
    ): Prisma__AmphoeClient<AmphoeGetPayload<T>>

    /**
     * Create many Amphoes.
     *     @param {AmphoeCreateManyArgs} args - Arguments to create many Amphoes.
     *     @example
     *     // Create many Amphoes
     *     const amphoe = await prisma.amphoe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AmphoeCreateManyArgs>(
      args?: SelectSubset<T, AmphoeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Amphoe.
     * @param {AmphoeDeleteArgs} args - Arguments to delete one Amphoe.
     * @example
     * // Delete one Amphoe
     * const Amphoe = await prisma.amphoe.delete({
     *   where: {
     *     // ... filter to delete one Amphoe
     *   }
     * })
     * 
    **/
    delete<T extends AmphoeDeleteArgs>(
      args: SelectSubset<T, AmphoeDeleteArgs>
    ): Prisma__AmphoeClient<AmphoeGetPayload<T>>

    /**
     * Update one Amphoe.
     * @param {AmphoeUpdateArgs} args - Arguments to update one Amphoe.
     * @example
     * // Update one Amphoe
     * const amphoe = await prisma.amphoe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AmphoeUpdateArgs>(
      args: SelectSubset<T, AmphoeUpdateArgs>
    ): Prisma__AmphoeClient<AmphoeGetPayload<T>>

    /**
     * Delete zero or more Amphoes.
     * @param {AmphoeDeleteManyArgs} args - Arguments to filter Amphoes to delete.
     * @example
     * // Delete a few Amphoes
     * const { count } = await prisma.amphoe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AmphoeDeleteManyArgs>(
      args?: SelectSubset<T, AmphoeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amphoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphoeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amphoes
     * const amphoe = await prisma.amphoe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AmphoeUpdateManyArgs>(
      args: SelectSubset<T, AmphoeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Amphoe.
     * @param {AmphoeUpsertArgs} args - Arguments to update or create a Amphoe.
     * @example
     * // Update or create a Amphoe
     * const amphoe = await prisma.amphoe.upsert({
     *   create: {
     *     // ... data to create a Amphoe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amphoe we want to update
     *   }
     * })
    **/
    upsert<T extends AmphoeUpsertArgs>(
      args: SelectSubset<T, AmphoeUpsertArgs>
    ): Prisma__AmphoeClient<AmphoeGetPayload<T>>

    /**
     * Count the number of Amphoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphoeCountArgs} args - Arguments to filter Amphoes to count.
     * @example
     * // Count the number of Amphoes
     * const count = await prisma.amphoe.count({
     *   where: {
     *     // ... the filter for the Amphoes we want to count
     *   }
     * })
    **/
    count<T extends AmphoeCountArgs>(
      args?: Subset<T, AmphoeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmphoeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amphoe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphoeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AmphoeAggregateArgs>(args: Subset<T, AmphoeAggregateArgs>): PrismaPromise<GetAmphoeAggregateType<T>>

    /**
     * Group by Amphoe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmphoeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AmphoeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmphoeGroupByArgs['orderBy'] }
        : { orderBy?: AmphoeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AmphoeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmphoeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Amphoe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AmphoeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    district<T extends DistrictArgs= {}>(args?: Subset<T, DistrictArgs>): Prisma__DistrictClient<DistrictGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Amphoe base type for findUnique actions
   */
  export type AmphoeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Amphoe
     */
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AmphoeInclude | null
    /**
     * Filter, which Amphoe to fetch.
     */
    where: AmphoeWhereUniqueInput
  }

  /**
   * Amphoe findUnique
   */
  export interface AmphoeFindUniqueArgs extends AmphoeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Amphoe findUniqueOrThrow
   */
  export type AmphoeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     */
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AmphoeInclude | null
    /**
     * Filter, which Amphoe to fetch.
     */
    where: AmphoeWhereUniqueInput
  }


  /**
   * Amphoe base type for findFirst actions
   */
  export type AmphoeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Amphoe
     */
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AmphoeInclude | null
    /**
     * Filter, which Amphoe to fetch.
     */
    where?: AmphoeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphoes to fetch.
     */
    orderBy?: Enumerable<AmphoeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amphoes.
     */
    cursor?: AmphoeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amphoes.
     */
    distinct?: Enumerable<AmphoeScalarFieldEnum>
  }

  /**
   * Amphoe findFirst
   */
  export interface AmphoeFindFirstArgs extends AmphoeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Amphoe findFirstOrThrow
   */
  export type AmphoeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     */
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AmphoeInclude | null
    /**
     * Filter, which Amphoe to fetch.
     */
    where?: AmphoeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphoes to fetch.
     */
    orderBy?: Enumerable<AmphoeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amphoes.
     */
    cursor?: AmphoeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amphoes.
     */
    distinct?: Enumerable<AmphoeScalarFieldEnum>
  }


  /**
   * Amphoe findMany
   */
  export type AmphoeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     */
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AmphoeInclude | null
    /**
     * Filter, which Amphoes to fetch.
     */
    where?: AmphoeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphoes to fetch.
     */
    orderBy?: Enumerable<AmphoeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amphoes.
     */
    cursor?: AmphoeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphoes.
     */
    skip?: number
    distinct?: Enumerable<AmphoeScalarFieldEnum>
  }


  /**
   * Amphoe create
   */
  export type AmphoeCreateArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     */
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AmphoeInclude | null
    /**
     * The data needed to create a Amphoe.
     */
    data: XOR<AmphoeCreateInput, AmphoeUncheckedCreateInput>
  }


  /**
   * Amphoe createMany
   */
  export type AmphoeCreateManyArgs = {
    /**
     * The data used to create many Amphoes.
     */
    data: Enumerable<AmphoeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Amphoe update
   */
  export type AmphoeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     */
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AmphoeInclude | null
    /**
     * The data needed to update a Amphoe.
     */
    data: XOR<AmphoeUpdateInput, AmphoeUncheckedUpdateInput>
    /**
     * Choose, which Amphoe to update.
     */
    where: AmphoeWhereUniqueInput
  }


  /**
   * Amphoe updateMany
   */
  export type AmphoeUpdateManyArgs = {
    /**
     * The data used to update Amphoes.
     */
    data: XOR<AmphoeUpdateManyMutationInput, AmphoeUncheckedUpdateManyInput>
    /**
     * Filter which Amphoes to update
     */
    where?: AmphoeWhereInput
  }


  /**
   * Amphoe upsert
   */
  export type AmphoeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     */
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AmphoeInclude | null
    /**
     * The filter to search for the Amphoe to update in case it exists.
     */
    where: AmphoeWhereUniqueInput
    /**
     * In case the Amphoe found by the `where` argument doesn't exist, create a new Amphoe with this data.
     */
    create: XOR<AmphoeCreateInput, AmphoeUncheckedCreateInput>
    /**
     * In case the Amphoe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmphoeUpdateInput, AmphoeUncheckedUpdateInput>
  }


  /**
   * Amphoe delete
   */
  export type AmphoeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     */
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AmphoeInclude | null
    /**
     * Filter which Amphoe to delete.
     */
    where: AmphoeWhereUniqueInput
  }


  /**
   * Amphoe deleteMany
   */
  export type AmphoeDeleteManyArgs = {
    /**
     * Filter which Amphoes to delete
     */
    where?: AmphoeWhereInput
  }


  /**
   * Amphoe without action
   */
  export type AmphoeArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     */
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AmphoeInclude | null
  }



  /**
   * Model mas_position
   */


  export type AggregateMas_position = {
    _count: Mas_positionCountAggregateOutputType | null
    _avg: Mas_positionAvgAggregateOutputType | null
    _sum: Mas_positionSumAggregateOutputType | null
    _min: Mas_positionMinAggregateOutputType | null
    _max: Mas_positionMaxAggregateOutputType | null
  }

  export type Mas_positionAvgAggregateOutputType = {
    level: number | null
  }

  export type Mas_positionSumAggregateOutputType = {
    level: number | null
  }

  export type Mas_positionMinAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    CompanyId: string | null
  }

  export type Mas_positionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    CompanyId: string | null
  }

  export type Mas_positionCountAggregateOutputType = {
    id: number
    name: number
    level: number
    CompanyId: number
    _all: number
  }


  export type Mas_positionAvgAggregateInputType = {
    level?: true
  }

  export type Mas_positionSumAggregateInputType = {
    level?: true
  }

  export type Mas_positionMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    CompanyId?: true
  }

  export type Mas_positionMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    CompanyId?: true
  }

  export type Mas_positionCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    CompanyId?: true
    _all?: true
  }

  export type Mas_positionAggregateArgs = {
    /**
     * Filter which mas_position to aggregate.
     */
    where?: mas_positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positions to fetch.
     */
    orderBy?: Enumerable<mas_positionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mas_positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mas_positions
    **/
    _count?: true | Mas_positionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mas_positionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mas_positionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mas_positionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mas_positionMaxAggregateInputType
  }

  export type GetMas_positionAggregateType<T extends Mas_positionAggregateArgs> = {
        [P in keyof T & keyof AggregateMas_position]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMas_position[P]>
      : GetScalarType<T[P], AggregateMas_position[P]>
  }




  export type Mas_positionGroupByArgs = {
    where?: mas_positionWhereInput
    orderBy?: Enumerable<mas_positionOrderByWithAggregationInput>
    by: Mas_positionScalarFieldEnum[]
    having?: mas_positionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mas_positionCountAggregateInputType | true
    _avg?: Mas_positionAvgAggregateInputType
    _sum?: Mas_positionSumAggregateInputType
    _min?: Mas_positionMinAggregateInputType
    _max?: Mas_positionMaxAggregateInputType
  }


  export type Mas_positionGroupByOutputType = {
    id: string
    name: string
    level: number
    CompanyId: string | null
    _count: Mas_positionCountAggregateOutputType | null
    _avg: Mas_positionAvgAggregateOutputType | null
    _sum: Mas_positionSumAggregateOutputType | null
    _min: Mas_positionMinAggregateOutputType | null
    _max: Mas_positionMaxAggregateOutputType | null
  }

  type GetMas_positionGroupByPayload<T extends Mas_positionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mas_positionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mas_positionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mas_positionGroupByOutputType[P]>
            : GetScalarType<T[P], Mas_positionGroupByOutputType[P]>
        }
      >
    >


  export type mas_positionSelect = {
    id?: boolean
    name?: boolean
    level?: boolean
    Company?: boolean | CompanyArgs
    CompanyId?: boolean
  }


  export type mas_positionInclude = {
    Company?: boolean | CompanyArgs
  }

  export type mas_positionGetPayload<S extends boolean | null | undefined | mas_positionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mas_position :
    S extends undefined ? never :
    S extends { include: any } & (mas_positionArgs | mas_positionFindManyArgs)
    ? mas_position  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Company' ? CompanyGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (mas_positionArgs | mas_positionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Company' ? CompanyGetPayload<S['select'][P]> | null :  P extends keyof mas_position ? mas_position[P] : never
  } 
      : mas_position


  type mas_positionCountArgs = 
    Omit<mas_positionFindManyArgs, 'select' | 'include'> & {
      select?: Mas_positionCountAggregateInputType | true
    }

  export interface mas_positionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mas_position that matches the filter.
     * @param {mas_positionFindUniqueArgs} args - Arguments to find a Mas_position
     * @example
     * // Get one Mas_position
     * const mas_position = await prisma.mas_position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mas_positionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mas_positionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mas_position'> extends True ? Prisma__mas_positionClient<mas_positionGetPayload<T>> : Prisma__mas_positionClient<mas_positionGetPayload<T> | null, null>

    /**
     * Find one Mas_position that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mas_positionFindUniqueOrThrowArgs} args - Arguments to find a Mas_position
     * @example
     * // Get one Mas_position
     * const mas_position = await prisma.mas_position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mas_positionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mas_positionFindUniqueOrThrowArgs>
    ): Prisma__mas_positionClient<mas_positionGetPayload<T>>

    /**
     * Find the first Mas_position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionFindFirstArgs} args - Arguments to find a Mas_position
     * @example
     * // Get one Mas_position
     * const mas_position = await prisma.mas_position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mas_positionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mas_positionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mas_position'> extends True ? Prisma__mas_positionClient<mas_positionGetPayload<T>> : Prisma__mas_positionClient<mas_positionGetPayload<T> | null, null>

    /**
     * Find the first Mas_position that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionFindFirstOrThrowArgs} args - Arguments to find a Mas_position
     * @example
     * // Get one Mas_position
     * const mas_position = await prisma.mas_position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mas_positionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, mas_positionFindFirstOrThrowArgs>
    ): Prisma__mas_positionClient<mas_positionGetPayload<T>>

    /**
     * Find zero or more Mas_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mas_positions
     * const mas_positions = await prisma.mas_position.findMany()
     * 
     * // Get first 10 Mas_positions
     * const mas_positions = await prisma.mas_position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mas_positionWithIdOnly = await prisma.mas_position.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mas_positionFindManyArgs>(
      args?: SelectSubset<T, mas_positionFindManyArgs>
    ): PrismaPromise<Array<mas_positionGetPayload<T>>>

    /**
     * Create a Mas_position.
     * @param {mas_positionCreateArgs} args - Arguments to create a Mas_position.
     * @example
     * // Create one Mas_position
     * const Mas_position = await prisma.mas_position.create({
     *   data: {
     *     // ... data to create a Mas_position
     *   }
     * })
     * 
    **/
    create<T extends mas_positionCreateArgs>(
      args: SelectSubset<T, mas_positionCreateArgs>
    ): Prisma__mas_positionClient<mas_positionGetPayload<T>>

    /**
     * Create many Mas_positions.
     *     @param {mas_positionCreateManyArgs} args - Arguments to create many Mas_positions.
     *     @example
     *     // Create many Mas_positions
     *     const mas_position = await prisma.mas_position.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mas_positionCreateManyArgs>(
      args?: SelectSubset<T, mas_positionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mas_position.
     * @param {mas_positionDeleteArgs} args - Arguments to delete one Mas_position.
     * @example
     * // Delete one Mas_position
     * const Mas_position = await prisma.mas_position.delete({
     *   where: {
     *     // ... filter to delete one Mas_position
     *   }
     * })
     * 
    **/
    delete<T extends mas_positionDeleteArgs>(
      args: SelectSubset<T, mas_positionDeleteArgs>
    ): Prisma__mas_positionClient<mas_positionGetPayload<T>>

    /**
     * Update one Mas_position.
     * @param {mas_positionUpdateArgs} args - Arguments to update one Mas_position.
     * @example
     * // Update one Mas_position
     * const mas_position = await prisma.mas_position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mas_positionUpdateArgs>(
      args: SelectSubset<T, mas_positionUpdateArgs>
    ): Prisma__mas_positionClient<mas_positionGetPayload<T>>

    /**
     * Delete zero or more Mas_positions.
     * @param {mas_positionDeleteManyArgs} args - Arguments to filter Mas_positions to delete.
     * @example
     * // Delete a few Mas_positions
     * const { count } = await prisma.mas_position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mas_positionDeleteManyArgs>(
      args?: SelectSubset<T, mas_positionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mas_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mas_positions
     * const mas_position = await prisma.mas_position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mas_positionUpdateManyArgs>(
      args: SelectSubset<T, mas_positionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mas_position.
     * @param {mas_positionUpsertArgs} args - Arguments to update or create a Mas_position.
     * @example
     * // Update or create a Mas_position
     * const mas_position = await prisma.mas_position.upsert({
     *   create: {
     *     // ... data to create a Mas_position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mas_position we want to update
     *   }
     * })
    **/
    upsert<T extends mas_positionUpsertArgs>(
      args: SelectSubset<T, mas_positionUpsertArgs>
    ): Prisma__mas_positionClient<mas_positionGetPayload<T>>

    /**
     * Count the number of Mas_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionCountArgs} args - Arguments to filter Mas_positions to count.
     * @example
     * // Count the number of Mas_positions
     * const count = await prisma.mas_position.count({
     *   where: {
     *     // ... the filter for the Mas_positions we want to count
     *   }
     * })
    **/
    count<T extends mas_positionCountArgs>(
      args?: Subset<T, mas_positionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mas_positionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mas_position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mas_positionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mas_positionAggregateArgs>(args: Subset<T, Mas_positionAggregateArgs>): PrismaPromise<GetMas_positionAggregateType<T>>

    /**
     * Group by Mas_position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mas_positionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mas_positionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mas_positionGroupByArgs['orderBy'] }
        : { orderBy?: Mas_positionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mas_positionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMas_positionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mas_position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mas_positionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Company<T extends CompanyArgs= {}>(args?: Subset<T, CompanyArgs>): Prisma__CompanyClient<CompanyGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mas_position base type for findUnique actions
   */
  export type mas_positionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mas_position
     */
    select?: mas_positionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionInclude | null
    /**
     * Filter, which mas_position to fetch.
     */
    where: mas_positionWhereUniqueInput
  }

  /**
   * mas_position findUnique
   */
  export interface mas_positionFindUniqueArgs extends mas_positionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mas_position findUniqueOrThrow
   */
  export type mas_positionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mas_position
     */
    select?: mas_positionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionInclude | null
    /**
     * Filter, which mas_position to fetch.
     */
    where: mas_positionWhereUniqueInput
  }


  /**
   * mas_position base type for findFirst actions
   */
  export type mas_positionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mas_position
     */
    select?: mas_positionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionInclude | null
    /**
     * Filter, which mas_position to fetch.
     */
    where?: mas_positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positions to fetch.
     */
    orderBy?: Enumerable<mas_positionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mas_positions.
     */
    cursor?: mas_positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mas_positions.
     */
    distinct?: Enumerable<Mas_positionScalarFieldEnum>
  }

  /**
   * mas_position findFirst
   */
  export interface mas_positionFindFirstArgs extends mas_positionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mas_position findFirstOrThrow
   */
  export type mas_positionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mas_position
     */
    select?: mas_positionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionInclude | null
    /**
     * Filter, which mas_position to fetch.
     */
    where?: mas_positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positions to fetch.
     */
    orderBy?: Enumerable<mas_positionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mas_positions.
     */
    cursor?: mas_positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mas_positions.
     */
    distinct?: Enumerable<Mas_positionScalarFieldEnum>
  }


  /**
   * mas_position findMany
   */
  export type mas_positionFindManyArgs = {
    /**
     * Select specific fields to fetch from the mas_position
     */
    select?: mas_positionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionInclude | null
    /**
     * Filter, which mas_positions to fetch.
     */
    where?: mas_positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positions to fetch.
     */
    orderBy?: Enumerable<mas_positionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mas_positions.
     */
    cursor?: mas_positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positions.
     */
    skip?: number
    distinct?: Enumerable<Mas_positionScalarFieldEnum>
  }


  /**
   * mas_position create
   */
  export type mas_positionCreateArgs = {
    /**
     * Select specific fields to fetch from the mas_position
     */
    select?: mas_positionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionInclude | null
    /**
     * The data needed to create a mas_position.
     */
    data: XOR<mas_positionCreateInput, mas_positionUncheckedCreateInput>
  }


  /**
   * mas_position createMany
   */
  export type mas_positionCreateManyArgs = {
    /**
     * The data used to create many mas_positions.
     */
    data: Enumerable<mas_positionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mas_position update
   */
  export type mas_positionUpdateArgs = {
    /**
     * Select specific fields to fetch from the mas_position
     */
    select?: mas_positionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionInclude | null
    /**
     * The data needed to update a mas_position.
     */
    data: XOR<mas_positionUpdateInput, mas_positionUncheckedUpdateInput>
    /**
     * Choose, which mas_position to update.
     */
    where: mas_positionWhereUniqueInput
  }


  /**
   * mas_position updateMany
   */
  export type mas_positionUpdateManyArgs = {
    /**
     * The data used to update mas_positions.
     */
    data: XOR<mas_positionUpdateManyMutationInput, mas_positionUncheckedUpdateManyInput>
    /**
     * Filter which mas_positions to update
     */
    where?: mas_positionWhereInput
  }


  /**
   * mas_position upsert
   */
  export type mas_positionUpsertArgs = {
    /**
     * Select specific fields to fetch from the mas_position
     */
    select?: mas_positionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionInclude | null
    /**
     * The filter to search for the mas_position to update in case it exists.
     */
    where: mas_positionWhereUniqueInput
    /**
     * In case the mas_position found by the `where` argument doesn't exist, create a new mas_position with this data.
     */
    create: XOR<mas_positionCreateInput, mas_positionUncheckedCreateInput>
    /**
     * In case the mas_position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mas_positionUpdateInput, mas_positionUncheckedUpdateInput>
  }


  /**
   * mas_position delete
   */
  export type mas_positionDeleteArgs = {
    /**
     * Select specific fields to fetch from the mas_position
     */
    select?: mas_positionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionInclude | null
    /**
     * Filter which mas_position to delete.
     */
    where: mas_positionWhereUniqueInput
  }


  /**
   * mas_position deleteMany
   */
  export type mas_positionDeleteManyArgs = {
    /**
     * Filter which mas_positions to delete
     */
    where?: mas_positionWhereInput
  }


  /**
   * mas_position without action
   */
  export type mas_positionArgs = {
    /**
     * Select specific fields to fetch from the mas_position
     */
    select?: mas_positionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionInclude | null
  }



  /**
   * Model mas_positionlevel1
   */


  export type AggregateMas_positionlevel1 = {
    _count: Mas_positionlevel1CountAggregateOutputType | null
    _avg: Mas_positionlevel1AvgAggregateOutputType | null
    _sum: Mas_positionlevel1SumAggregateOutputType | null
    _min: Mas_positionlevel1MinAggregateOutputType | null
    _max: Mas_positionlevel1MaxAggregateOutputType | null
  }

  export type Mas_positionlevel1AvgAggregateOutputType = {
    level: number | null
  }

  export type Mas_positionlevel1SumAggregateOutputType = {
    level: number | null
  }

  export type Mas_positionlevel1MinAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    code: string | null
    type: string | null
    CompanyId: string | null
  }

  export type Mas_positionlevel1MaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    code: string | null
    type: string | null
    CompanyId: string | null
  }

  export type Mas_positionlevel1CountAggregateOutputType = {
    id: number
    name: number
    level: number
    code: number
    type: number
    CompanyId: number
    _all: number
  }


  export type Mas_positionlevel1AvgAggregateInputType = {
    level?: true
  }

  export type Mas_positionlevel1SumAggregateInputType = {
    level?: true
  }

  export type Mas_positionlevel1MinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    code?: true
    type?: true
    CompanyId?: true
  }

  export type Mas_positionlevel1MaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    code?: true
    type?: true
    CompanyId?: true
  }

  export type Mas_positionlevel1CountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    code?: true
    type?: true
    CompanyId?: true
    _all?: true
  }

  export type Mas_positionlevel1AggregateArgs = {
    /**
     * Filter which mas_positionlevel1 to aggregate.
     */
    where?: mas_positionlevel1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel1s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mas_positionlevel1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mas_positionlevel1s
    **/
    _count?: true | Mas_positionlevel1CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mas_positionlevel1AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mas_positionlevel1SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mas_positionlevel1MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mas_positionlevel1MaxAggregateInputType
  }

  export type GetMas_positionlevel1AggregateType<T extends Mas_positionlevel1AggregateArgs> = {
        [P in keyof T & keyof AggregateMas_positionlevel1]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMas_positionlevel1[P]>
      : GetScalarType<T[P], AggregateMas_positionlevel1[P]>
  }




  export type Mas_positionlevel1GroupByArgs = {
    where?: mas_positionlevel1WhereInput
    orderBy?: Enumerable<mas_positionlevel1OrderByWithAggregationInput>
    by: Mas_positionlevel1ScalarFieldEnum[]
    having?: mas_positionlevel1ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mas_positionlevel1CountAggregateInputType | true
    _avg?: Mas_positionlevel1AvgAggregateInputType
    _sum?: Mas_positionlevel1SumAggregateInputType
    _min?: Mas_positionlevel1MinAggregateInputType
    _max?: Mas_positionlevel1MaxAggregateInputType
  }


  export type Mas_positionlevel1GroupByOutputType = {
    id: string
    name: string
    level: number
    code: string
    type: string
    CompanyId: string | null
    _count: Mas_positionlevel1CountAggregateOutputType | null
    _avg: Mas_positionlevel1AvgAggregateOutputType | null
    _sum: Mas_positionlevel1SumAggregateOutputType | null
    _min: Mas_positionlevel1MinAggregateOutputType | null
    _max: Mas_positionlevel1MaxAggregateOutputType | null
  }

  type GetMas_positionlevel1GroupByPayload<T extends Mas_positionlevel1GroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mas_positionlevel1GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mas_positionlevel1GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mas_positionlevel1GroupByOutputType[P]>
            : GetScalarType<T[P], Mas_positionlevel1GroupByOutputType[P]>
        }
      >
    >


  export type mas_positionlevel1Select = {
    id?: boolean
    name?: boolean
    level?: boolean
    code?: boolean
    type?: boolean
    mas_positionlevel2?: boolean | mas_positionlevel1$mas_positionlevel2Args
    Company?: boolean | CompanyArgs
    CompanyId?: boolean
    Position_user?: boolean | mas_positionlevel1$Position_userArgs
    _count?: boolean | Mas_positionlevel1CountOutputTypeArgs
  }


  export type mas_positionlevel1Include = {
    mas_positionlevel2?: boolean | mas_positionlevel1$mas_positionlevel2Args
    Company?: boolean | CompanyArgs
    Position_user?: boolean | mas_positionlevel1$Position_userArgs
    _count?: boolean | Mas_positionlevel1CountOutputTypeArgs
  }

  export type mas_positionlevel1GetPayload<S extends boolean | null | undefined | mas_positionlevel1Args> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mas_positionlevel1 :
    S extends undefined ? never :
    S extends { include: any } & (mas_positionlevel1Args | mas_positionlevel1FindManyArgs)
    ? mas_positionlevel1  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'mas_positionlevel2' ? Array < mas_positionlevel2GetPayload<S['include'][P]>>  :
        P extends 'Company' ? CompanyGetPayload<S['include'][P]> | null :
        P extends 'Position_user' ? Array < Position_userGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mas_positionlevel1CountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (mas_positionlevel1Args | mas_positionlevel1FindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'mas_positionlevel2' ? Array < mas_positionlevel2GetPayload<S['select'][P]>>  :
        P extends 'Company' ? CompanyGetPayload<S['select'][P]> | null :
        P extends 'Position_user' ? Array < Position_userGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mas_positionlevel1CountOutputTypeGetPayload<S['select'][P]> :  P extends keyof mas_positionlevel1 ? mas_positionlevel1[P] : never
  } 
      : mas_positionlevel1


  type mas_positionlevel1CountArgs = 
    Omit<mas_positionlevel1FindManyArgs, 'select' | 'include'> & {
      select?: Mas_positionlevel1CountAggregateInputType | true
    }

  export interface mas_positionlevel1Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mas_positionlevel1 that matches the filter.
     * @param {mas_positionlevel1FindUniqueArgs} args - Arguments to find a Mas_positionlevel1
     * @example
     * // Get one Mas_positionlevel1
     * const mas_positionlevel1 = await prisma.mas_positionlevel1.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mas_positionlevel1FindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mas_positionlevel1FindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mas_positionlevel1'> extends True ? Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T>> : Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T> | null, null>

    /**
     * Find one Mas_positionlevel1 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mas_positionlevel1FindUniqueOrThrowArgs} args - Arguments to find a Mas_positionlevel1
     * @example
     * // Get one Mas_positionlevel1
     * const mas_positionlevel1 = await prisma.mas_positionlevel1.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mas_positionlevel1FindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mas_positionlevel1FindUniqueOrThrowArgs>
    ): Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T>>

    /**
     * Find the first Mas_positionlevel1 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel1FindFirstArgs} args - Arguments to find a Mas_positionlevel1
     * @example
     * // Get one Mas_positionlevel1
     * const mas_positionlevel1 = await prisma.mas_positionlevel1.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mas_positionlevel1FindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mas_positionlevel1FindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mas_positionlevel1'> extends True ? Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T>> : Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T> | null, null>

    /**
     * Find the first Mas_positionlevel1 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel1FindFirstOrThrowArgs} args - Arguments to find a Mas_positionlevel1
     * @example
     * // Get one Mas_positionlevel1
     * const mas_positionlevel1 = await prisma.mas_positionlevel1.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mas_positionlevel1FindFirstOrThrowArgs>(
      args?: SelectSubset<T, mas_positionlevel1FindFirstOrThrowArgs>
    ): Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T>>

    /**
     * Find zero or more Mas_positionlevel1s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel1FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mas_positionlevel1s
     * const mas_positionlevel1s = await prisma.mas_positionlevel1.findMany()
     * 
     * // Get first 10 Mas_positionlevel1s
     * const mas_positionlevel1s = await prisma.mas_positionlevel1.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mas_positionlevel1WithIdOnly = await prisma.mas_positionlevel1.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mas_positionlevel1FindManyArgs>(
      args?: SelectSubset<T, mas_positionlevel1FindManyArgs>
    ): PrismaPromise<Array<mas_positionlevel1GetPayload<T>>>

    /**
     * Create a Mas_positionlevel1.
     * @param {mas_positionlevel1CreateArgs} args - Arguments to create a Mas_positionlevel1.
     * @example
     * // Create one Mas_positionlevel1
     * const Mas_positionlevel1 = await prisma.mas_positionlevel1.create({
     *   data: {
     *     // ... data to create a Mas_positionlevel1
     *   }
     * })
     * 
    **/
    create<T extends mas_positionlevel1CreateArgs>(
      args: SelectSubset<T, mas_positionlevel1CreateArgs>
    ): Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T>>

    /**
     * Create many Mas_positionlevel1s.
     *     @param {mas_positionlevel1CreateManyArgs} args - Arguments to create many Mas_positionlevel1s.
     *     @example
     *     // Create many Mas_positionlevel1s
     *     const mas_positionlevel1 = await prisma.mas_positionlevel1.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mas_positionlevel1CreateManyArgs>(
      args?: SelectSubset<T, mas_positionlevel1CreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mas_positionlevel1.
     * @param {mas_positionlevel1DeleteArgs} args - Arguments to delete one Mas_positionlevel1.
     * @example
     * // Delete one Mas_positionlevel1
     * const Mas_positionlevel1 = await prisma.mas_positionlevel1.delete({
     *   where: {
     *     // ... filter to delete one Mas_positionlevel1
     *   }
     * })
     * 
    **/
    delete<T extends mas_positionlevel1DeleteArgs>(
      args: SelectSubset<T, mas_positionlevel1DeleteArgs>
    ): Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T>>

    /**
     * Update one Mas_positionlevel1.
     * @param {mas_positionlevel1UpdateArgs} args - Arguments to update one Mas_positionlevel1.
     * @example
     * // Update one Mas_positionlevel1
     * const mas_positionlevel1 = await prisma.mas_positionlevel1.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mas_positionlevel1UpdateArgs>(
      args: SelectSubset<T, mas_positionlevel1UpdateArgs>
    ): Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T>>

    /**
     * Delete zero or more Mas_positionlevel1s.
     * @param {mas_positionlevel1DeleteManyArgs} args - Arguments to filter Mas_positionlevel1s to delete.
     * @example
     * // Delete a few Mas_positionlevel1s
     * const { count } = await prisma.mas_positionlevel1.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mas_positionlevel1DeleteManyArgs>(
      args?: SelectSubset<T, mas_positionlevel1DeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mas_positionlevel1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel1UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mas_positionlevel1s
     * const mas_positionlevel1 = await prisma.mas_positionlevel1.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mas_positionlevel1UpdateManyArgs>(
      args: SelectSubset<T, mas_positionlevel1UpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mas_positionlevel1.
     * @param {mas_positionlevel1UpsertArgs} args - Arguments to update or create a Mas_positionlevel1.
     * @example
     * // Update or create a Mas_positionlevel1
     * const mas_positionlevel1 = await prisma.mas_positionlevel1.upsert({
     *   create: {
     *     // ... data to create a Mas_positionlevel1
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mas_positionlevel1 we want to update
     *   }
     * })
    **/
    upsert<T extends mas_positionlevel1UpsertArgs>(
      args: SelectSubset<T, mas_positionlevel1UpsertArgs>
    ): Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T>>

    /**
     * Count the number of Mas_positionlevel1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel1CountArgs} args - Arguments to filter Mas_positionlevel1s to count.
     * @example
     * // Count the number of Mas_positionlevel1s
     * const count = await prisma.mas_positionlevel1.count({
     *   where: {
     *     // ... the filter for the Mas_positionlevel1s we want to count
     *   }
     * })
    **/
    count<T extends mas_positionlevel1CountArgs>(
      args?: Subset<T, mas_positionlevel1CountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mas_positionlevel1CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mas_positionlevel1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mas_positionlevel1AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mas_positionlevel1AggregateArgs>(args: Subset<T, Mas_positionlevel1AggregateArgs>): PrismaPromise<GetMas_positionlevel1AggregateType<T>>

    /**
     * Group by Mas_positionlevel1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mas_positionlevel1GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mas_positionlevel1GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mas_positionlevel1GroupByArgs['orderBy'] }
        : { orderBy?: Mas_positionlevel1GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mas_positionlevel1GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMas_positionlevel1GroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mas_positionlevel1.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mas_positionlevel1Client<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    mas_positionlevel2<T extends mas_positionlevel1$mas_positionlevel2Args= {}>(args?: Subset<T, mas_positionlevel1$mas_positionlevel2Args>): PrismaPromise<Array<mas_positionlevel2GetPayload<T>>| Null>;

    Company<T extends CompanyArgs= {}>(args?: Subset<T, CompanyArgs>): Prisma__CompanyClient<CompanyGetPayload<T> | Null>;

    Position_user<T extends mas_positionlevel1$Position_userArgs= {}>(args?: Subset<T, mas_positionlevel1$Position_userArgs>): PrismaPromise<Array<Position_userGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mas_positionlevel1 base type for findUnique actions
   */
  export type mas_positionlevel1FindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mas_positionlevel1
     */
    select?: mas_positionlevel1Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel1Include | null
    /**
     * Filter, which mas_positionlevel1 to fetch.
     */
    where: mas_positionlevel1WhereUniqueInput
  }

  /**
   * mas_positionlevel1 findUnique
   */
  export interface mas_positionlevel1FindUniqueArgs extends mas_positionlevel1FindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mas_positionlevel1 findUniqueOrThrow
   */
  export type mas_positionlevel1FindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel1
     */
    select?: mas_positionlevel1Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel1Include | null
    /**
     * Filter, which mas_positionlevel1 to fetch.
     */
    where: mas_positionlevel1WhereUniqueInput
  }


  /**
   * mas_positionlevel1 base type for findFirst actions
   */
  export type mas_positionlevel1FindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mas_positionlevel1
     */
    select?: mas_positionlevel1Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel1Include | null
    /**
     * Filter, which mas_positionlevel1 to fetch.
     */
    where?: mas_positionlevel1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel1s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mas_positionlevel1s.
     */
    cursor?: mas_positionlevel1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mas_positionlevel1s.
     */
    distinct?: Enumerable<Mas_positionlevel1ScalarFieldEnum>
  }

  /**
   * mas_positionlevel1 findFirst
   */
  export interface mas_positionlevel1FindFirstArgs extends mas_positionlevel1FindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mas_positionlevel1 findFirstOrThrow
   */
  export type mas_positionlevel1FindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel1
     */
    select?: mas_positionlevel1Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel1Include | null
    /**
     * Filter, which mas_positionlevel1 to fetch.
     */
    where?: mas_positionlevel1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel1s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mas_positionlevel1s.
     */
    cursor?: mas_positionlevel1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mas_positionlevel1s.
     */
    distinct?: Enumerable<Mas_positionlevel1ScalarFieldEnum>
  }


  /**
   * mas_positionlevel1 findMany
   */
  export type mas_positionlevel1FindManyArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel1
     */
    select?: mas_positionlevel1Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel1Include | null
    /**
     * Filter, which mas_positionlevel1s to fetch.
     */
    where?: mas_positionlevel1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel1s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel1OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mas_positionlevel1s.
     */
    cursor?: mas_positionlevel1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel1s.
     */
    skip?: number
    distinct?: Enumerable<Mas_positionlevel1ScalarFieldEnum>
  }


  /**
   * mas_positionlevel1 create
   */
  export type mas_positionlevel1CreateArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel1
     */
    select?: mas_positionlevel1Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel1Include | null
    /**
     * The data needed to create a mas_positionlevel1.
     */
    data: XOR<mas_positionlevel1CreateInput, mas_positionlevel1UncheckedCreateInput>
  }


  /**
   * mas_positionlevel1 createMany
   */
  export type mas_positionlevel1CreateManyArgs = {
    /**
     * The data used to create many mas_positionlevel1s.
     */
    data: Enumerable<mas_positionlevel1CreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mas_positionlevel1 update
   */
  export type mas_positionlevel1UpdateArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel1
     */
    select?: mas_positionlevel1Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel1Include | null
    /**
     * The data needed to update a mas_positionlevel1.
     */
    data: XOR<mas_positionlevel1UpdateInput, mas_positionlevel1UncheckedUpdateInput>
    /**
     * Choose, which mas_positionlevel1 to update.
     */
    where: mas_positionlevel1WhereUniqueInput
  }


  /**
   * mas_positionlevel1 updateMany
   */
  export type mas_positionlevel1UpdateManyArgs = {
    /**
     * The data used to update mas_positionlevel1s.
     */
    data: XOR<mas_positionlevel1UpdateManyMutationInput, mas_positionlevel1UncheckedUpdateManyInput>
    /**
     * Filter which mas_positionlevel1s to update
     */
    where?: mas_positionlevel1WhereInput
  }


  /**
   * mas_positionlevel1 upsert
   */
  export type mas_positionlevel1UpsertArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel1
     */
    select?: mas_positionlevel1Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel1Include | null
    /**
     * The filter to search for the mas_positionlevel1 to update in case it exists.
     */
    where: mas_positionlevel1WhereUniqueInput
    /**
     * In case the mas_positionlevel1 found by the `where` argument doesn't exist, create a new mas_positionlevel1 with this data.
     */
    create: XOR<mas_positionlevel1CreateInput, mas_positionlevel1UncheckedCreateInput>
    /**
     * In case the mas_positionlevel1 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mas_positionlevel1UpdateInput, mas_positionlevel1UncheckedUpdateInput>
  }


  /**
   * mas_positionlevel1 delete
   */
  export type mas_positionlevel1DeleteArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel1
     */
    select?: mas_positionlevel1Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel1Include | null
    /**
     * Filter which mas_positionlevel1 to delete.
     */
    where: mas_positionlevel1WhereUniqueInput
  }


  /**
   * mas_positionlevel1 deleteMany
   */
  export type mas_positionlevel1DeleteManyArgs = {
    /**
     * Filter which mas_positionlevel1s to delete
     */
    where?: mas_positionlevel1WhereInput
  }


  /**
   * mas_positionlevel1.mas_positionlevel2
   */
  export type mas_positionlevel1$mas_positionlevel2Args = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
    where?: mas_positionlevel2WhereInput
    orderBy?: Enumerable<mas_positionlevel2OrderByWithRelationInput>
    cursor?: mas_positionlevel2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Mas_positionlevel2ScalarFieldEnum>
  }


  /**
   * mas_positionlevel1.Position_user
   */
  export type mas_positionlevel1$Position_userArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    where?: Position_userWhereInput
    orderBy?: Enumerable<Position_userOrderByWithRelationInput>
    cursor?: Position_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Position_userScalarFieldEnum>
  }


  /**
   * mas_positionlevel1 without action
   */
  export type mas_positionlevel1Args = {
    /**
     * Select specific fields to fetch from the mas_positionlevel1
     */
    select?: mas_positionlevel1Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel1Include | null
  }



  /**
   * Model mas_positionlevel2
   */


  export type AggregateMas_positionlevel2 = {
    _count: Mas_positionlevel2CountAggregateOutputType | null
    _avg: Mas_positionlevel2AvgAggregateOutputType | null
    _sum: Mas_positionlevel2SumAggregateOutputType | null
    _min: Mas_positionlevel2MinAggregateOutputType | null
    _max: Mas_positionlevel2MaxAggregateOutputType | null
  }

  export type Mas_positionlevel2AvgAggregateOutputType = {
    level: number | null
  }

  export type Mas_positionlevel2SumAggregateOutputType = {
    level: number | null
  }

  export type Mas_positionlevel2MinAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    code: string | null
    type: string | null
    positionlevel1_id: string | null
    CompanyId: string | null
  }

  export type Mas_positionlevel2MaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    code: string | null
    type: string | null
    positionlevel1_id: string | null
    CompanyId: string | null
  }

  export type Mas_positionlevel2CountAggregateOutputType = {
    id: number
    name: number
    level: number
    code: number
    type: number
    positionlevel1_id: number
    CompanyId: number
    _all: number
  }


  export type Mas_positionlevel2AvgAggregateInputType = {
    level?: true
  }

  export type Mas_positionlevel2SumAggregateInputType = {
    level?: true
  }

  export type Mas_positionlevel2MinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    code?: true
    type?: true
    positionlevel1_id?: true
    CompanyId?: true
  }

  export type Mas_positionlevel2MaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    code?: true
    type?: true
    positionlevel1_id?: true
    CompanyId?: true
  }

  export type Mas_positionlevel2CountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    code?: true
    type?: true
    positionlevel1_id?: true
    CompanyId?: true
    _all?: true
  }

  export type Mas_positionlevel2AggregateArgs = {
    /**
     * Filter which mas_positionlevel2 to aggregate.
     */
    where?: mas_positionlevel2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel2s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mas_positionlevel2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mas_positionlevel2s
    **/
    _count?: true | Mas_positionlevel2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mas_positionlevel2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mas_positionlevel2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mas_positionlevel2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mas_positionlevel2MaxAggregateInputType
  }

  export type GetMas_positionlevel2AggregateType<T extends Mas_positionlevel2AggregateArgs> = {
        [P in keyof T & keyof AggregateMas_positionlevel2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMas_positionlevel2[P]>
      : GetScalarType<T[P], AggregateMas_positionlevel2[P]>
  }




  export type Mas_positionlevel2GroupByArgs = {
    where?: mas_positionlevel2WhereInput
    orderBy?: Enumerable<mas_positionlevel2OrderByWithAggregationInput>
    by: Mas_positionlevel2ScalarFieldEnum[]
    having?: mas_positionlevel2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mas_positionlevel2CountAggregateInputType | true
    _avg?: Mas_positionlevel2AvgAggregateInputType
    _sum?: Mas_positionlevel2SumAggregateInputType
    _min?: Mas_positionlevel2MinAggregateInputType
    _max?: Mas_positionlevel2MaxAggregateInputType
  }


  export type Mas_positionlevel2GroupByOutputType = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel1_id: string | null
    CompanyId: string | null
    _count: Mas_positionlevel2CountAggregateOutputType | null
    _avg: Mas_positionlevel2AvgAggregateOutputType | null
    _sum: Mas_positionlevel2SumAggregateOutputType | null
    _min: Mas_positionlevel2MinAggregateOutputType | null
    _max: Mas_positionlevel2MaxAggregateOutputType | null
  }

  type GetMas_positionlevel2GroupByPayload<T extends Mas_positionlevel2GroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mas_positionlevel2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mas_positionlevel2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mas_positionlevel2GroupByOutputType[P]>
            : GetScalarType<T[P], Mas_positionlevel2GroupByOutputType[P]>
        }
      >
    >


  export type mas_positionlevel2Select = {
    id?: boolean
    name?: boolean
    level?: boolean
    code?: boolean
    type?: boolean
    positionlevel1_id?: boolean
    mas_positionlevel1?: boolean | mas_positionlevel1Args
    mas_positionlevel3?: boolean | mas_positionlevel2$mas_positionlevel3Args
    Company?: boolean | CompanyArgs
    CompanyId?: boolean
    position_user?: boolean | mas_positionlevel2$position_userArgs
    _count?: boolean | Mas_positionlevel2CountOutputTypeArgs
  }


  export type mas_positionlevel2Include = {
    mas_positionlevel1?: boolean | mas_positionlevel1Args
    mas_positionlevel3?: boolean | mas_positionlevel2$mas_positionlevel3Args
    Company?: boolean | CompanyArgs
    position_user?: boolean | mas_positionlevel2$position_userArgs
    _count?: boolean | Mas_positionlevel2CountOutputTypeArgs
  }

  export type mas_positionlevel2GetPayload<S extends boolean | null | undefined | mas_positionlevel2Args> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mas_positionlevel2 :
    S extends undefined ? never :
    S extends { include: any } & (mas_positionlevel2Args | mas_positionlevel2FindManyArgs)
    ? mas_positionlevel2  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'mas_positionlevel1' ? mas_positionlevel1GetPayload<S['include'][P]> | null :
        P extends 'mas_positionlevel3' ? Array < mas_positionlevel3GetPayload<S['include'][P]>>  :
        P extends 'Company' ? CompanyGetPayload<S['include'][P]> | null :
        P extends 'position_user' ? Array < Position_userGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mas_positionlevel2CountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (mas_positionlevel2Args | mas_positionlevel2FindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'mas_positionlevel1' ? mas_positionlevel1GetPayload<S['select'][P]> | null :
        P extends 'mas_positionlevel3' ? Array < mas_positionlevel3GetPayload<S['select'][P]>>  :
        P extends 'Company' ? CompanyGetPayload<S['select'][P]> | null :
        P extends 'position_user' ? Array < Position_userGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mas_positionlevel2CountOutputTypeGetPayload<S['select'][P]> :  P extends keyof mas_positionlevel2 ? mas_positionlevel2[P] : never
  } 
      : mas_positionlevel2


  type mas_positionlevel2CountArgs = 
    Omit<mas_positionlevel2FindManyArgs, 'select' | 'include'> & {
      select?: Mas_positionlevel2CountAggregateInputType | true
    }

  export interface mas_positionlevel2Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mas_positionlevel2 that matches the filter.
     * @param {mas_positionlevel2FindUniqueArgs} args - Arguments to find a Mas_positionlevel2
     * @example
     * // Get one Mas_positionlevel2
     * const mas_positionlevel2 = await prisma.mas_positionlevel2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mas_positionlevel2FindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mas_positionlevel2FindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mas_positionlevel2'> extends True ? Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T>> : Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T> | null, null>

    /**
     * Find one Mas_positionlevel2 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mas_positionlevel2FindUniqueOrThrowArgs} args - Arguments to find a Mas_positionlevel2
     * @example
     * // Get one Mas_positionlevel2
     * const mas_positionlevel2 = await prisma.mas_positionlevel2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mas_positionlevel2FindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mas_positionlevel2FindUniqueOrThrowArgs>
    ): Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T>>

    /**
     * Find the first Mas_positionlevel2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel2FindFirstArgs} args - Arguments to find a Mas_positionlevel2
     * @example
     * // Get one Mas_positionlevel2
     * const mas_positionlevel2 = await prisma.mas_positionlevel2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mas_positionlevel2FindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mas_positionlevel2FindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mas_positionlevel2'> extends True ? Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T>> : Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T> | null, null>

    /**
     * Find the first Mas_positionlevel2 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel2FindFirstOrThrowArgs} args - Arguments to find a Mas_positionlevel2
     * @example
     * // Get one Mas_positionlevel2
     * const mas_positionlevel2 = await prisma.mas_positionlevel2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mas_positionlevel2FindFirstOrThrowArgs>(
      args?: SelectSubset<T, mas_positionlevel2FindFirstOrThrowArgs>
    ): Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T>>

    /**
     * Find zero or more Mas_positionlevel2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel2FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mas_positionlevel2s
     * const mas_positionlevel2s = await prisma.mas_positionlevel2.findMany()
     * 
     * // Get first 10 Mas_positionlevel2s
     * const mas_positionlevel2s = await prisma.mas_positionlevel2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mas_positionlevel2WithIdOnly = await prisma.mas_positionlevel2.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mas_positionlevel2FindManyArgs>(
      args?: SelectSubset<T, mas_positionlevel2FindManyArgs>
    ): PrismaPromise<Array<mas_positionlevel2GetPayload<T>>>

    /**
     * Create a Mas_positionlevel2.
     * @param {mas_positionlevel2CreateArgs} args - Arguments to create a Mas_positionlevel2.
     * @example
     * // Create one Mas_positionlevel2
     * const Mas_positionlevel2 = await prisma.mas_positionlevel2.create({
     *   data: {
     *     // ... data to create a Mas_positionlevel2
     *   }
     * })
     * 
    **/
    create<T extends mas_positionlevel2CreateArgs>(
      args: SelectSubset<T, mas_positionlevel2CreateArgs>
    ): Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T>>

    /**
     * Create many Mas_positionlevel2s.
     *     @param {mas_positionlevel2CreateManyArgs} args - Arguments to create many Mas_positionlevel2s.
     *     @example
     *     // Create many Mas_positionlevel2s
     *     const mas_positionlevel2 = await prisma.mas_positionlevel2.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mas_positionlevel2CreateManyArgs>(
      args?: SelectSubset<T, mas_positionlevel2CreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mas_positionlevel2.
     * @param {mas_positionlevel2DeleteArgs} args - Arguments to delete one Mas_positionlevel2.
     * @example
     * // Delete one Mas_positionlevel2
     * const Mas_positionlevel2 = await prisma.mas_positionlevel2.delete({
     *   where: {
     *     // ... filter to delete one Mas_positionlevel2
     *   }
     * })
     * 
    **/
    delete<T extends mas_positionlevel2DeleteArgs>(
      args: SelectSubset<T, mas_positionlevel2DeleteArgs>
    ): Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T>>

    /**
     * Update one Mas_positionlevel2.
     * @param {mas_positionlevel2UpdateArgs} args - Arguments to update one Mas_positionlevel2.
     * @example
     * // Update one Mas_positionlevel2
     * const mas_positionlevel2 = await prisma.mas_positionlevel2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mas_positionlevel2UpdateArgs>(
      args: SelectSubset<T, mas_positionlevel2UpdateArgs>
    ): Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T>>

    /**
     * Delete zero or more Mas_positionlevel2s.
     * @param {mas_positionlevel2DeleteManyArgs} args - Arguments to filter Mas_positionlevel2s to delete.
     * @example
     * // Delete a few Mas_positionlevel2s
     * const { count } = await prisma.mas_positionlevel2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mas_positionlevel2DeleteManyArgs>(
      args?: SelectSubset<T, mas_positionlevel2DeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mas_positionlevel2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mas_positionlevel2s
     * const mas_positionlevel2 = await prisma.mas_positionlevel2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mas_positionlevel2UpdateManyArgs>(
      args: SelectSubset<T, mas_positionlevel2UpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mas_positionlevel2.
     * @param {mas_positionlevel2UpsertArgs} args - Arguments to update or create a Mas_positionlevel2.
     * @example
     * // Update or create a Mas_positionlevel2
     * const mas_positionlevel2 = await prisma.mas_positionlevel2.upsert({
     *   create: {
     *     // ... data to create a Mas_positionlevel2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mas_positionlevel2 we want to update
     *   }
     * })
    **/
    upsert<T extends mas_positionlevel2UpsertArgs>(
      args: SelectSubset<T, mas_positionlevel2UpsertArgs>
    ): Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T>>

    /**
     * Count the number of Mas_positionlevel2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel2CountArgs} args - Arguments to filter Mas_positionlevel2s to count.
     * @example
     * // Count the number of Mas_positionlevel2s
     * const count = await prisma.mas_positionlevel2.count({
     *   where: {
     *     // ... the filter for the Mas_positionlevel2s we want to count
     *   }
     * })
    **/
    count<T extends mas_positionlevel2CountArgs>(
      args?: Subset<T, mas_positionlevel2CountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mas_positionlevel2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mas_positionlevel2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mas_positionlevel2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mas_positionlevel2AggregateArgs>(args: Subset<T, Mas_positionlevel2AggregateArgs>): PrismaPromise<GetMas_positionlevel2AggregateType<T>>

    /**
     * Group by Mas_positionlevel2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mas_positionlevel2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mas_positionlevel2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mas_positionlevel2GroupByArgs['orderBy'] }
        : { orderBy?: Mas_positionlevel2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mas_positionlevel2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMas_positionlevel2GroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mas_positionlevel2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mas_positionlevel2Client<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    mas_positionlevel1<T extends mas_positionlevel1Args= {}>(args?: Subset<T, mas_positionlevel1Args>): Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T> | Null>;

    mas_positionlevel3<T extends mas_positionlevel2$mas_positionlevel3Args= {}>(args?: Subset<T, mas_positionlevel2$mas_positionlevel3Args>): PrismaPromise<Array<mas_positionlevel3GetPayload<T>>| Null>;

    Company<T extends CompanyArgs= {}>(args?: Subset<T, CompanyArgs>): Prisma__CompanyClient<CompanyGetPayload<T> | Null>;

    position_user<T extends mas_positionlevel2$position_userArgs= {}>(args?: Subset<T, mas_positionlevel2$position_userArgs>): PrismaPromise<Array<Position_userGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mas_positionlevel2 base type for findUnique actions
   */
  export type mas_positionlevel2FindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
    /**
     * Filter, which mas_positionlevel2 to fetch.
     */
    where: mas_positionlevel2WhereUniqueInput
  }

  /**
   * mas_positionlevel2 findUnique
   */
  export interface mas_positionlevel2FindUniqueArgs extends mas_positionlevel2FindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mas_positionlevel2 findUniqueOrThrow
   */
  export type mas_positionlevel2FindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
    /**
     * Filter, which mas_positionlevel2 to fetch.
     */
    where: mas_positionlevel2WhereUniqueInput
  }


  /**
   * mas_positionlevel2 base type for findFirst actions
   */
  export type mas_positionlevel2FindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
    /**
     * Filter, which mas_positionlevel2 to fetch.
     */
    where?: mas_positionlevel2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel2s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mas_positionlevel2s.
     */
    cursor?: mas_positionlevel2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mas_positionlevel2s.
     */
    distinct?: Enumerable<Mas_positionlevel2ScalarFieldEnum>
  }

  /**
   * mas_positionlevel2 findFirst
   */
  export interface mas_positionlevel2FindFirstArgs extends mas_positionlevel2FindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mas_positionlevel2 findFirstOrThrow
   */
  export type mas_positionlevel2FindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
    /**
     * Filter, which mas_positionlevel2 to fetch.
     */
    where?: mas_positionlevel2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel2s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mas_positionlevel2s.
     */
    cursor?: mas_positionlevel2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mas_positionlevel2s.
     */
    distinct?: Enumerable<Mas_positionlevel2ScalarFieldEnum>
  }


  /**
   * mas_positionlevel2 findMany
   */
  export type mas_positionlevel2FindManyArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
    /**
     * Filter, which mas_positionlevel2s to fetch.
     */
    where?: mas_positionlevel2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel2s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel2OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mas_positionlevel2s.
     */
    cursor?: mas_positionlevel2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel2s.
     */
    skip?: number
    distinct?: Enumerable<Mas_positionlevel2ScalarFieldEnum>
  }


  /**
   * mas_positionlevel2 create
   */
  export type mas_positionlevel2CreateArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
    /**
     * The data needed to create a mas_positionlevel2.
     */
    data: XOR<mas_positionlevel2CreateInput, mas_positionlevel2UncheckedCreateInput>
  }


  /**
   * mas_positionlevel2 createMany
   */
  export type mas_positionlevel2CreateManyArgs = {
    /**
     * The data used to create many mas_positionlevel2s.
     */
    data: Enumerable<mas_positionlevel2CreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mas_positionlevel2 update
   */
  export type mas_positionlevel2UpdateArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
    /**
     * The data needed to update a mas_positionlevel2.
     */
    data: XOR<mas_positionlevel2UpdateInput, mas_positionlevel2UncheckedUpdateInput>
    /**
     * Choose, which mas_positionlevel2 to update.
     */
    where: mas_positionlevel2WhereUniqueInput
  }


  /**
   * mas_positionlevel2 updateMany
   */
  export type mas_positionlevel2UpdateManyArgs = {
    /**
     * The data used to update mas_positionlevel2s.
     */
    data: XOR<mas_positionlevel2UpdateManyMutationInput, mas_positionlevel2UncheckedUpdateManyInput>
    /**
     * Filter which mas_positionlevel2s to update
     */
    where?: mas_positionlevel2WhereInput
  }


  /**
   * mas_positionlevel2 upsert
   */
  export type mas_positionlevel2UpsertArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
    /**
     * The filter to search for the mas_positionlevel2 to update in case it exists.
     */
    where: mas_positionlevel2WhereUniqueInput
    /**
     * In case the mas_positionlevel2 found by the `where` argument doesn't exist, create a new mas_positionlevel2 with this data.
     */
    create: XOR<mas_positionlevel2CreateInput, mas_positionlevel2UncheckedCreateInput>
    /**
     * In case the mas_positionlevel2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mas_positionlevel2UpdateInput, mas_positionlevel2UncheckedUpdateInput>
  }


  /**
   * mas_positionlevel2 delete
   */
  export type mas_positionlevel2DeleteArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
    /**
     * Filter which mas_positionlevel2 to delete.
     */
    where: mas_positionlevel2WhereUniqueInput
  }


  /**
   * mas_positionlevel2 deleteMany
   */
  export type mas_positionlevel2DeleteManyArgs = {
    /**
     * Filter which mas_positionlevel2s to delete
     */
    where?: mas_positionlevel2WhereInput
  }


  /**
   * mas_positionlevel2.mas_positionlevel3
   */
  export type mas_positionlevel2$mas_positionlevel3Args = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
    where?: mas_positionlevel3WhereInput
    orderBy?: Enumerable<mas_positionlevel3OrderByWithRelationInput>
    cursor?: mas_positionlevel3WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Mas_positionlevel3ScalarFieldEnum>
  }


  /**
   * mas_positionlevel2.position_user
   */
  export type mas_positionlevel2$position_userArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    where?: Position_userWhereInput
    orderBy?: Enumerable<Position_userOrderByWithRelationInput>
    cursor?: Position_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Position_userScalarFieldEnum>
  }


  /**
   * mas_positionlevel2 without action
   */
  export type mas_positionlevel2Args = {
    /**
     * Select specific fields to fetch from the mas_positionlevel2
     */
    select?: mas_positionlevel2Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel2Include | null
  }



  /**
   * Model mas_positionlevel3
   */


  export type AggregateMas_positionlevel3 = {
    _count: Mas_positionlevel3CountAggregateOutputType | null
    _avg: Mas_positionlevel3AvgAggregateOutputType | null
    _sum: Mas_positionlevel3SumAggregateOutputType | null
    _min: Mas_positionlevel3MinAggregateOutputType | null
    _max: Mas_positionlevel3MaxAggregateOutputType | null
  }

  export type Mas_positionlevel3AvgAggregateOutputType = {
    level: number | null
  }

  export type Mas_positionlevel3SumAggregateOutputType = {
    level: number | null
  }

  export type Mas_positionlevel3MinAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    code: string | null
    type: string | null
    positionlevel2_id: string | null
    CompanyId: string | null
  }

  export type Mas_positionlevel3MaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    code: string | null
    type: string | null
    positionlevel2_id: string | null
    CompanyId: string | null
  }

  export type Mas_positionlevel3CountAggregateOutputType = {
    id: number
    name: number
    level: number
    code: number
    type: number
    positionlevel2_id: number
    CompanyId: number
    _all: number
  }


  export type Mas_positionlevel3AvgAggregateInputType = {
    level?: true
  }

  export type Mas_positionlevel3SumAggregateInputType = {
    level?: true
  }

  export type Mas_positionlevel3MinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    code?: true
    type?: true
    positionlevel2_id?: true
    CompanyId?: true
  }

  export type Mas_positionlevel3MaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    code?: true
    type?: true
    positionlevel2_id?: true
    CompanyId?: true
  }

  export type Mas_positionlevel3CountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    code?: true
    type?: true
    positionlevel2_id?: true
    CompanyId?: true
    _all?: true
  }

  export type Mas_positionlevel3AggregateArgs = {
    /**
     * Filter which mas_positionlevel3 to aggregate.
     */
    where?: mas_positionlevel3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel3s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel3OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mas_positionlevel3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel3s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mas_positionlevel3s
    **/
    _count?: true | Mas_positionlevel3CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mas_positionlevel3AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mas_positionlevel3SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mas_positionlevel3MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mas_positionlevel3MaxAggregateInputType
  }

  export type GetMas_positionlevel3AggregateType<T extends Mas_positionlevel3AggregateArgs> = {
        [P in keyof T & keyof AggregateMas_positionlevel3]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMas_positionlevel3[P]>
      : GetScalarType<T[P], AggregateMas_positionlevel3[P]>
  }




  export type Mas_positionlevel3GroupByArgs = {
    where?: mas_positionlevel3WhereInput
    orderBy?: Enumerable<mas_positionlevel3OrderByWithAggregationInput>
    by: Mas_positionlevel3ScalarFieldEnum[]
    having?: mas_positionlevel3ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mas_positionlevel3CountAggregateInputType | true
    _avg?: Mas_positionlevel3AvgAggregateInputType
    _sum?: Mas_positionlevel3SumAggregateInputType
    _min?: Mas_positionlevel3MinAggregateInputType
    _max?: Mas_positionlevel3MaxAggregateInputType
  }


  export type Mas_positionlevel3GroupByOutputType = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel2_id: string | null
    CompanyId: string | null
    _count: Mas_positionlevel3CountAggregateOutputType | null
    _avg: Mas_positionlevel3AvgAggregateOutputType | null
    _sum: Mas_positionlevel3SumAggregateOutputType | null
    _min: Mas_positionlevel3MinAggregateOutputType | null
    _max: Mas_positionlevel3MaxAggregateOutputType | null
  }

  type GetMas_positionlevel3GroupByPayload<T extends Mas_positionlevel3GroupByArgs> = PrismaPromise<
    Array<
      PickArray<Mas_positionlevel3GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mas_positionlevel3GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mas_positionlevel3GroupByOutputType[P]>
            : GetScalarType<T[P], Mas_positionlevel3GroupByOutputType[P]>
        }
      >
    >


  export type mas_positionlevel3Select = {
    id?: boolean
    name?: boolean
    level?: boolean
    code?: boolean
    type?: boolean
    positionlevel2_id?: boolean
    mas_positionlevel2?: boolean | mas_positionlevel2Args
    Company?: boolean | CompanyArgs
    CompanyId?: boolean
    Position_user?: boolean | mas_positionlevel3$Position_userArgs
    _count?: boolean | Mas_positionlevel3CountOutputTypeArgs
  }


  export type mas_positionlevel3Include = {
    mas_positionlevel2?: boolean | mas_positionlevel2Args
    Company?: boolean | CompanyArgs
    Position_user?: boolean | mas_positionlevel3$Position_userArgs
    _count?: boolean | Mas_positionlevel3CountOutputTypeArgs
  }

  export type mas_positionlevel3GetPayload<S extends boolean | null | undefined | mas_positionlevel3Args> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? mas_positionlevel3 :
    S extends undefined ? never :
    S extends { include: any } & (mas_positionlevel3Args | mas_positionlevel3FindManyArgs)
    ? mas_positionlevel3  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'mas_positionlevel2' ? mas_positionlevel2GetPayload<S['include'][P]> | null :
        P extends 'Company' ? CompanyGetPayload<S['include'][P]> | null :
        P extends 'Position_user' ? Array < Position_userGetPayload<S['include'][P]>>  :
        P extends '_count' ? Mas_positionlevel3CountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (mas_positionlevel3Args | mas_positionlevel3FindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'mas_positionlevel2' ? mas_positionlevel2GetPayload<S['select'][P]> | null :
        P extends 'Company' ? CompanyGetPayload<S['select'][P]> | null :
        P extends 'Position_user' ? Array < Position_userGetPayload<S['select'][P]>>  :
        P extends '_count' ? Mas_positionlevel3CountOutputTypeGetPayload<S['select'][P]> :  P extends keyof mas_positionlevel3 ? mas_positionlevel3[P] : never
  } 
      : mas_positionlevel3


  type mas_positionlevel3CountArgs = 
    Omit<mas_positionlevel3FindManyArgs, 'select' | 'include'> & {
      select?: Mas_positionlevel3CountAggregateInputType | true
    }

  export interface mas_positionlevel3Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mas_positionlevel3 that matches the filter.
     * @param {mas_positionlevel3FindUniqueArgs} args - Arguments to find a Mas_positionlevel3
     * @example
     * // Get one Mas_positionlevel3
     * const mas_positionlevel3 = await prisma.mas_positionlevel3.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends mas_positionlevel3FindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, mas_positionlevel3FindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'mas_positionlevel3'> extends True ? Prisma__mas_positionlevel3Client<mas_positionlevel3GetPayload<T>> : Prisma__mas_positionlevel3Client<mas_positionlevel3GetPayload<T> | null, null>

    /**
     * Find one Mas_positionlevel3 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {mas_positionlevel3FindUniqueOrThrowArgs} args - Arguments to find a Mas_positionlevel3
     * @example
     * // Get one Mas_positionlevel3
     * const mas_positionlevel3 = await prisma.mas_positionlevel3.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends mas_positionlevel3FindUniqueOrThrowArgs>(
      args?: SelectSubset<T, mas_positionlevel3FindUniqueOrThrowArgs>
    ): Prisma__mas_positionlevel3Client<mas_positionlevel3GetPayload<T>>

    /**
     * Find the first Mas_positionlevel3 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel3FindFirstArgs} args - Arguments to find a Mas_positionlevel3
     * @example
     * // Get one Mas_positionlevel3
     * const mas_positionlevel3 = await prisma.mas_positionlevel3.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends mas_positionlevel3FindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, mas_positionlevel3FindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'mas_positionlevel3'> extends True ? Prisma__mas_positionlevel3Client<mas_positionlevel3GetPayload<T>> : Prisma__mas_positionlevel3Client<mas_positionlevel3GetPayload<T> | null, null>

    /**
     * Find the first Mas_positionlevel3 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel3FindFirstOrThrowArgs} args - Arguments to find a Mas_positionlevel3
     * @example
     * // Get one Mas_positionlevel3
     * const mas_positionlevel3 = await prisma.mas_positionlevel3.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends mas_positionlevel3FindFirstOrThrowArgs>(
      args?: SelectSubset<T, mas_positionlevel3FindFirstOrThrowArgs>
    ): Prisma__mas_positionlevel3Client<mas_positionlevel3GetPayload<T>>

    /**
     * Find zero or more Mas_positionlevel3s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel3FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mas_positionlevel3s
     * const mas_positionlevel3s = await prisma.mas_positionlevel3.findMany()
     * 
     * // Get first 10 Mas_positionlevel3s
     * const mas_positionlevel3s = await prisma.mas_positionlevel3.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mas_positionlevel3WithIdOnly = await prisma.mas_positionlevel3.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends mas_positionlevel3FindManyArgs>(
      args?: SelectSubset<T, mas_positionlevel3FindManyArgs>
    ): PrismaPromise<Array<mas_positionlevel3GetPayload<T>>>

    /**
     * Create a Mas_positionlevel3.
     * @param {mas_positionlevel3CreateArgs} args - Arguments to create a Mas_positionlevel3.
     * @example
     * // Create one Mas_positionlevel3
     * const Mas_positionlevel3 = await prisma.mas_positionlevel3.create({
     *   data: {
     *     // ... data to create a Mas_positionlevel3
     *   }
     * })
     * 
    **/
    create<T extends mas_positionlevel3CreateArgs>(
      args: SelectSubset<T, mas_positionlevel3CreateArgs>
    ): Prisma__mas_positionlevel3Client<mas_positionlevel3GetPayload<T>>

    /**
     * Create many Mas_positionlevel3s.
     *     @param {mas_positionlevel3CreateManyArgs} args - Arguments to create many Mas_positionlevel3s.
     *     @example
     *     // Create many Mas_positionlevel3s
     *     const mas_positionlevel3 = await prisma.mas_positionlevel3.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends mas_positionlevel3CreateManyArgs>(
      args?: SelectSubset<T, mas_positionlevel3CreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mas_positionlevel3.
     * @param {mas_positionlevel3DeleteArgs} args - Arguments to delete one Mas_positionlevel3.
     * @example
     * // Delete one Mas_positionlevel3
     * const Mas_positionlevel3 = await prisma.mas_positionlevel3.delete({
     *   where: {
     *     // ... filter to delete one Mas_positionlevel3
     *   }
     * })
     * 
    **/
    delete<T extends mas_positionlevel3DeleteArgs>(
      args: SelectSubset<T, mas_positionlevel3DeleteArgs>
    ): Prisma__mas_positionlevel3Client<mas_positionlevel3GetPayload<T>>

    /**
     * Update one Mas_positionlevel3.
     * @param {mas_positionlevel3UpdateArgs} args - Arguments to update one Mas_positionlevel3.
     * @example
     * // Update one Mas_positionlevel3
     * const mas_positionlevel3 = await prisma.mas_positionlevel3.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends mas_positionlevel3UpdateArgs>(
      args: SelectSubset<T, mas_positionlevel3UpdateArgs>
    ): Prisma__mas_positionlevel3Client<mas_positionlevel3GetPayload<T>>

    /**
     * Delete zero or more Mas_positionlevel3s.
     * @param {mas_positionlevel3DeleteManyArgs} args - Arguments to filter Mas_positionlevel3s to delete.
     * @example
     * // Delete a few Mas_positionlevel3s
     * const { count } = await prisma.mas_positionlevel3.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends mas_positionlevel3DeleteManyArgs>(
      args?: SelectSubset<T, mas_positionlevel3DeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mas_positionlevel3s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel3UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mas_positionlevel3s
     * const mas_positionlevel3 = await prisma.mas_positionlevel3.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends mas_positionlevel3UpdateManyArgs>(
      args: SelectSubset<T, mas_positionlevel3UpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mas_positionlevel3.
     * @param {mas_positionlevel3UpsertArgs} args - Arguments to update or create a Mas_positionlevel3.
     * @example
     * // Update or create a Mas_positionlevel3
     * const mas_positionlevel3 = await prisma.mas_positionlevel3.upsert({
     *   create: {
     *     // ... data to create a Mas_positionlevel3
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mas_positionlevel3 we want to update
     *   }
     * })
    **/
    upsert<T extends mas_positionlevel3UpsertArgs>(
      args: SelectSubset<T, mas_positionlevel3UpsertArgs>
    ): Prisma__mas_positionlevel3Client<mas_positionlevel3GetPayload<T>>

    /**
     * Count the number of Mas_positionlevel3s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mas_positionlevel3CountArgs} args - Arguments to filter Mas_positionlevel3s to count.
     * @example
     * // Count the number of Mas_positionlevel3s
     * const count = await prisma.mas_positionlevel3.count({
     *   where: {
     *     // ... the filter for the Mas_positionlevel3s we want to count
     *   }
     * })
    **/
    count<T extends mas_positionlevel3CountArgs>(
      args?: Subset<T, mas_positionlevel3CountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mas_positionlevel3CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mas_positionlevel3.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mas_positionlevel3AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mas_positionlevel3AggregateArgs>(args: Subset<T, Mas_positionlevel3AggregateArgs>): PrismaPromise<GetMas_positionlevel3AggregateType<T>>

    /**
     * Group by Mas_positionlevel3.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mas_positionlevel3GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Mas_positionlevel3GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Mas_positionlevel3GroupByArgs['orderBy'] }
        : { orderBy?: Mas_positionlevel3GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Mas_positionlevel3GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMas_positionlevel3GroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for mas_positionlevel3.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__mas_positionlevel3Client<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    mas_positionlevel2<T extends mas_positionlevel2Args= {}>(args?: Subset<T, mas_positionlevel2Args>): Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T> | Null>;

    Company<T extends CompanyArgs= {}>(args?: Subset<T, CompanyArgs>): Prisma__CompanyClient<CompanyGetPayload<T> | Null>;

    Position_user<T extends mas_positionlevel3$Position_userArgs= {}>(args?: Subset<T, mas_positionlevel3$Position_userArgs>): PrismaPromise<Array<Position_userGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * mas_positionlevel3 base type for findUnique actions
   */
  export type mas_positionlevel3FindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
    /**
     * Filter, which mas_positionlevel3 to fetch.
     */
    where: mas_positionlevel3WhereUniqueInput
  }

  /**
   * mas_positionlevel3 findUnique
   */
  export interface mas_positionlevel3FindUniqueArgs extends mas_positionlevel3FindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mas_positionlevel3 findUniqueOrThrow
   */
  export type mas_positionlevel3FindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
    /**
     * Filter, which mas_positionlevel3 to fetch.
     */
    where: mas_positionlevel3WhereUniqueInput
  }


  /**
   * mas_positionlevel3 base type for findFirst actions
   */
  export type mas_positionlevel3FindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
    /**
     * Filter, which mas_positionlevel3 to fetch.
     */
    where?: mas_positionlevel3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel3s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel3OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mas_positionlevel3s.
     */
    cursor?: mas_positionlevel3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel3s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mas_positionlevel3s.
     */
    distinct?: Enumerable<Mas_positionlevel3ScalarFieldEnum>
  }

  /**
   * mas_positionlevel3 findFirst
   */
  export interface mas_positionlevel3FindFirstArgs extends mas_positionlevel3FindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * mas_positionlevel3 findFirstOrThrow
   */
  export type mas_positionlevel3FindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
    /**
     * Filter, which mas_positionlevel3 to fetch.
     */
    where?: mas_positionlevel3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel3s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel3OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mas_positionlevel3s.
     */
    cursor?: mas_positionlevel3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel3s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mas_positionlevel3s.
     */
    distinct?: Enumerable<Mas_positionlevel3ScalarFieldEnum>
  }


  /**
   * mas_positionlevel3 findMany
   */
  export type mas_positionlevel3FindManyArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
    /**
     * Filter, which mas_positionlevel3s to fetch.
     */
    where?: mas_positionlevel3WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mas_positionlevel3s to fetch.
     */
    orderBy?: Enumerable<mas_positionlevel3OrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mas_positionlevel3s.
     */
    cursor?: mas_positionlevel3WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mas_positionlevel3s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mas_positionlevel3s.
     */
    skip?: number
    distinct?: Enumerable<Mas_positionlevel3ScalarFieldEnum>
  }


  /**
   * mas_positionlevel3 create
   */
  export type mas_positionlevel3CreateArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
    /**
     * The data needed to create a mas_positionlevel3.
     */
    data: XOR<mas_positionlevel3CreateInput, mas_positionlevel3UncheckedCreateInput>
  }


  /**
   * mas_positionlevel3 createMany
   */
  export type mas_positionlevel3CreateManyArgs = {
    /**
     * The data used to create many mas_positionlevel3s.
     */
    data: Enumerable<mas_positionlevel3CreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * mas_positionlevel3 update
   */
  export type mas_positionlevel3UpdateArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
    /**
     * The data needed to update a mas_positionlevel3.
     */
    data: XOR<mas_positionlevel3UpdateInput, mas_positionlevel3UncheckedUpdateInput>
    /**
     * Choose, which mas_positionlevel3 to update.
     */
    where: mas_positionlevel3WhereUniqueInput
  }


  /**
   * mas_positionlevel3 updateMany
   */
  export type mas_positionlevel3UpdateManyArgs = {
    /**
     * The data used to update mas_positionlevel3s.
     */
    data: XOR<mas_positionlevel3UpdateManyMutationInput, mas_positionlevel3UncheckedUpdateManyInput>
    /**
     * Filter which mas_positionlevel3s to update
     */
    where?: mas_positionlevel3WhereInput
  }


  /**
   * mas_positionlevel3 upsert
   */
  export type mas_positionlevel3UpsertArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
    /**
     * The filter to search for the mas_positionlevel3 to update in case it exists.
     */
    where: mas_positionlevel3WhereUniqueInput
    /**
     * In case the mas_positionlevel3 found by the `where` argument doesn't exist, create a new mas_positionlevel3 with this data.
     */
    create: XOR<mas_positionlevel3CreateInput, mas_positionlevel3UncheckedCreateInput>
    /**
     * In case the mas_positionlevel3 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mas_positionlevel3UpdateInput, mas_positionlevel3UncheckedUpdateInput>
  }


  /**
   * mas_positionlevel3 delete
   */
  export type mas_positionlevel3DeleteArgs = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
    /**
     * Filter which mas_positionlevel3 to delete.
     */
    where: mas_positionlevel3WhereUniqueInput
  }


  /**
   * mas_positionlevel3 deleteMany
   */
  export type mas_positionlevel3DeleteManyArgs = {
    /**
     * Filter which mas_positionlevel3s to delete
     */
    where?: mas_positionlevel3WhereInput
  }


  /**
   * mas_positionlevel3.Position_user
   */
  export type mas_positionlevel3$Position_userArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    where?: Position_userWhereInput
    orderBy?: Enumerable<Position_userOrderByWithRelationInput>
    cursor?: Position_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Position_userScalarFieldEnum>
  }


  /**
   * mas_positionlevel3 without action
   */
  export type mas_positionlevel3Args = {
    /**
     * Select specific fields to fetch from the mas_positionlevel3
     */
    select?: mas_positionlevel3Select | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mas_positionlevel3Include | null
  }



  /**
   * Model Position_user
   */


  export type AggregatePosition_user = {
    _count: Position_userCountAggregateOutputType | null
    _min: Position_userMinAggregateOutputType | null
    _max: Position_userMaxAggregateOutputType | null
  }

  export type Position_userMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    position1_id: string | null
    position2_id: string | null
    position3_id: string | null
    role: string | null
    headderId: string | null
  }

  export type Position_userMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    position1_id: string | null
    position2_id: string | null
    position3_id: string | null
    role: string | null
    headderId: string | null
  }

  export type Position_userCountAggregateOutputType = {
    id: number
    user_id: number
    position1_id: number
    position2_id: number
    position3_id: number
    role: number
    headderId: number
    _all: number
  }


  export type Position_userMinAggregateInputType = {
    id?: true
    user_id?: true
    position1_id?: true
    position2_id?: true
    position3_id?: true
    role?: true
    headderId?: true
  }

  export type Position_userMaxAggregateInputType = {
    id?: true
    user_id?: true
    position1_id?: true
    position2_id?: true
    position3_id?: true
    role?: true
    headderId?: true
  }

  export type Position_userCountAggregateInputType = {
    id?: true
    user_id?: true
    position1_id?: true
    position2_id?: true
    position3_id?: true
    role?: true
    headderId?: true
    _all?: true
  }

  export type Position_userAggregateArgs = {
    /**
     * Filter which Position_user to aggregate.
     */
    where?: Position_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Position_users to fetch.
     */
    orderBy?: Enumerable<Position_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Position_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Position_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Position_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Position_users
    **/
    _count?: true | Position_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Position_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Position_userMaxAggregateInputType
  }

  export type GetPosition_userAggregateType<T extends Position_userAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition_user[P]>
      : GetScalarType<T[P], AggregatePosition_user[P]>
  }




  export type Position_userGroupByArgs = {
    where?: Position_userWhereInput
    orderBy?: Enumerable<Position_userOrderByWithAggregationInput>
    by: Position_userScalarFieldEnum[]
    having?: Position_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Position_userCountAggregateInputType | true
    _min?: Position_userMinAggregateInputType
    _max?: Position_userMaxAggregateInputType
  }


  export type Position_userGroupByOutputType = {
    id: string
    user_id: string | null
    position1_id: string | null
    position2_id: string | null
    position3_id: string | null
    role: string | null
    headderId: string | null
    _count: Position_userCountAggregateOutputType | null
    _min: Position_userMinAggregateOutputType | null
    _max: Position_userMaxAggregateOutputType | null
  }

  type GetPosition_userGroupByPayload<T extends Position_userGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Position_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Position_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Position_userGroupByOutputType[P]>
            : GetScalarType<T[P], Position_userGroupByOutputType[P]>
        }
      >
    >


  export type Position_userSelect = {
    id?: boolean
    user_id?: boolean
    position1_id?: boolean
    position2_id?: boolean
    position3_id?: boolean
    role?: boolean
    headderId?: boolean
    header?: boolean | UserArgs
    user?: boolean | UserArgs
    mas_positionlevel1?: boolean | mas_positionlevel1Args
    mas_positionlevel2?: boolean | mas_positionlevel2Args
    mas_positionlevel3?: boolean | mas_positionlevel3Args
  }


  export type Position_userInclude = {
    header?: boolean | UserArgs
    user?: boolean | UserArgs
    mas_positionlevel1?: boolean | mas_positionlevel1Args
    mas_positionlevel2?: boolean | mas_positionlevel2Args
    mas_positionlevel3?: boolean | mas_positionlevel3Args
  }

  export type Position_userGetPayload<S extends boolean | null | undefined | Position_userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Position_user :
    S extends undefined ? never :
    S extends { include: any } & (Position_userArgs | Position_userFindManyArgs)
    ? Position_user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'header' ? UserGetPayload<S['include'][P]> | null :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'mas_positionlevel1' ? mas_positionlevel1GetPayload<S['include'][P]> | null :
        P extends 'mas_positionlevel2' ? mas_positionlevel2GetPayload<S['include'][P]> | null :
        P extends 'mas_positionlevel3' ? mas_positionlevel3GetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (Position_userArgs | Position_userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'header' ? UserGetPayload<S['select'][P]> | null :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'mas_positionlevel1' ? mas_positionlevel1GetPayload<S['select'][P]> | null :
        P extends 'mas_positionlevel2' ? mas_positionlevel2GetPayload<S['select'][P]> | null :
        P extends 'mas_positionlevel3' ? mas_positionlevel3GetPayload<S['select'][P]> | null :  P extends keyof Position_user ? Position_user[P] : never
  } 
      : Position_user


  type Position_userCountArgs = 
    Omit<Position_userFindManyArgs, 'select' | 'include'> & {
      select?: Position_userCountAggregateInputType | true
    }

  export interface Position_userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Position_user that matches the filter.
     * @param {Position_userFindUniqueArgs} args - Arguments to find a Position_user
     * @example
     * // Get one Position_user
     * const position_user = await prisma.position_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Position_userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Position_userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Position_user'> extends True ? Prisma__Position_userClient<Position_userGetPayload<T>> : Prisma__Position_userClient<Position_userGetPayload<T> | null, null>

    /**
     * Find one Position_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Position_userFindUniqueOrThrowArgs} args - Arguments to find a Position_user
     * @example
     * // Get one Position_user
     * const position_user = await prisma.position_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Position_userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Position_userFindUniqueOrThrowArgs>
    ): Prisma__Position_userClient<Position_userGetPayload<T>>

    /**
     * Find the first Position_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Position_userFindFirstArgs} args - Arguments to find a Position_user
     * @example
     * // Get one Position_user
     * const position_user = await prisma.position_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Position_userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Position_userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Position_user'> extends True ? Prisma__Position_userClient<Position_userGetPayload<T>> : Prisma__Position_userClient<Position_userGetPayload<T> | null, null>

    /**
     * Find the first Position_user that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Position_userFindFirstOrThrowArgs} args - Arguments to find a Position_user
     * @example
     * // Get one Position_user
     * const position_user = await prisma.position_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Position_userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Position_userFindFirstOrThrowArgs>
    ): Prisma__Position_userClient<Position_userGetPayload<T>>

    /**
     * Find zero or more Position_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Position_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Position_users
     * const position_users = await prisma.position_user.findMany()
     * 
     * // Get first 10 Position_users
     * const position_users = await prisma.position_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const position_userWithIdOnly = await prisma.position_user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Position_userFindManyArgs>(
      args?: SelectSubset<T, Position_userFindManyArgs>
    ): PrismaPromise<Array<Position_userGetPayload<T>>>

    /**
     * Create a Position_user.
     * @param {Position_userCreateArgs} args - Arguments to create a Position_user.
     * @example
     * // Create one Position_user
     * const Position_user = await prisma.position_user.create({
     *   data: {
     *     // ... data to create a Position_user
     *   }
     * })
     * 
    **/
    create<T extends Position_userCreateArgs>(
      args: SelectSubset<T, Position_userCreateArgs>
    ): Prisma__Position_userClient<Position_userGetPayload<T>>

    /**
     * Create many Position_users.
     *     @param {Position_userCreateManyArgs} args - Arguments to create many Position_users.
     *     @example
     *     // Create many Position_users
     *     const position_user = await prisma.position_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Position_userCreateManyArgs>(
      args?: SelectSubset<T, Position_userCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Position_user.
     * @param {Position_userDeleteArgs} args - Arguments to delete one Position_user.
     * @example
     * // Delete one Position_user
     * const Position_user = await prisma.position_user.delete({
     *   where: {
     *     // ... filter to delete one Position_user
     *   }
     * })
     * 
    **/
    delete<T extends Position_userDeleteArgs>(
      args: SelectSubset<T, Position_userDeleteArgs>
    ): Prisma__Position_userClient<Position_userGetPayload<T>>

    /**
     * Update one Position_user.
     * @param {Position_userUpdateArgs} args - Arguments to update one Position_user.
     * @example
     * // Update one Position_user
     * const position_user = await prisma.position_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Position_userUpdateArgs>(
      args: SelectSubset<T, Position_userUpdateArgs>
    ): Prisma__Position_userClient<Position_userGetPayload<T>>

    /**
     * Delete zero or more Position_users.
     * @param {Position_userDeleteManyArgs} args - Arguments to filter Position_users to delete.
     * @example
     * // Delete a few Position_users
     * const { count } = await prisma.position_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Position_userDeleteManyArgs>(
      args?: SelectSubset<T, Position_userDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Position_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Position_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Position_users
     * const position_user = await prisma.position_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Position_userUpdateManyArgs>(
      args: SelectSubset<T, Position_userUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Position_user.
     * @param {Position_userUpsertArgs} args - Arguments to update or create a Position_user.
     * @example
     * // Update or create a Position_user
     * const position_user = await prisma.position_user.upsert({
     *   create: {
     *     // ... data to create a Position_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position_user we want to update
     *   }
     * })
    **/
    upsert<T extends Position_userUpsertArgs>(
      args: SelectSubset<T, Position_userUpsertArgs>
    ): Prisma__Position_userClient<Position_userGetPayload<T>>

    /**
     * Count the number of Position_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Position_userCountArgs} args - Arguments to filter Position_users to count.
     * @example
     * // Count the number of Position_users
     * const count = await prisma.position_user.count({
     *   where: {
     *     // ... the filter for the Position_users we want to count
     *   }
     * })
    **/
    count<T extends Position_userCountArgs>(
      args?: Subset<T, Position_userCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Position_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Position_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Position_userAggregateArgs>(args: Subset<T, Position_userAggregateArgs>): PrismaPromise<GetPosition_userAggregateType<T>>

    /**
     * Group by Position_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Position_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Position_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Position_userGroupByArgs['orderBy'] }
        : { orderBy?: Position_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Position_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosition_userGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Position_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Position_userClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    header<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    mas_positionlevel1<T extends mas_positionlevel1Args= {}>(args?: Subset<T, mas_positionlevel1Args>): Prisma__mas_positionlevel1Client<mas_positionlevel1GetPayload<T> | Null>;

    mas_positionlevel2<T extends mas_positionlevel2Args= {}>(args?: Subset<T, mas_positionlevel2Args>): Prisma__mas_positionlevel2Client<mas_positionlevel2GetPayload<T> | Null>;

    mas_positionlevel3<T extends mas_positionlevel3Args= {}>(args?: Subset<T, mas_positionlevel3Args>): Prisma__mas_positionlevel3Client<mas_positionlevel3GetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Position_user base type for findUnique actions
   */
  export type Position_userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    /**
     * Filter, which Position_user to fetch.
     */
    where: Position_userWhereUniqueInput
  }

  /**
   * Position_user findUnique
   */
  export interface Position_userFindUniqueArgs extends Position_userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Position_user findUniqueOrThrow
   */
  export type Position_userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    /**
     * Filter, which Position_user to fetch.
     */
    where: Position_userWhereUniqueInput
  }


  /**
   * Position_user base type for findFirst actions
   */
  export type Position_userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    /**
     * Filter, which Position_user to fetch.
     */
    where?: Position_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Position_users to fetch.
     */
    orderBy?: Enumerable<Position_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Position_users.
     */
    cursor?: Position_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Position_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Position_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Position_users.
     */
    distinct?: Enumerable<Position_userScalarFieldEnum>
  }

  /**
   * Position_user findFirst
   */
  export interface Position_userFindFirstArgs extends Position_userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Position_user findFirstOrThrow
   */
  export type Position_userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    /**
     * Filter, which Position_user to fetch.
     */
    where?: Position_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Position_users to fetch.
     */
    orderBy?: Enumerable<Position_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Position_users.
     */
    cursor?: Position_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Position_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Position_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Position_users.
     */
    distinct?: Enumerable<Position_userScalarFieldEnum>
  }


  /**
   * Position_user findMany
   */
  export type Position_userFindManyArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    /**
     * Filter, which Position_users to fetch.
     */
    where?: Position_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Position_users to fetch.
     */
    orderBy?: Enumerable<Position_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Position_users.
     */
    cursor?: Position_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Position_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Position_users.
     */
    skip?: number
    distinct?: Enumerable<Position_userScalarFieldEnum>
  }


  /**
   * Position_user create
   */
  export type Position_userCreateArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    /**
     * The data needed to create a Position_user.
     */
    data: XOR<Position_userCreateInput, Position_userUncheckedCreateInput>
  }


  /**
   * Position_user createMany
   */
  export type Position_userCreateManyArgs = {
    /**
     * The data used to create many Position_users.
     */
    data: Enumerable<Position_userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Position_user update
   */
  export type Position_userUpdateArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    /**
     * The data needed to update a Position_user.
     */
    data: XOR<Position_userUpdateInput, Position_userUncheckedUpdateInput>
    /**
     * Choose, which Position_user to update.
     */
    where: Position_userWhereUniqueInput
  }


  /**
   * Position_user updateMany
   */
  export type Position_userUpdateManyArgs = {
    /**
     * The data used to update Position_users.
     */
    data: XOR<Position_userUpdateManyMutationInput, Position_userUncheckedUpdateManyInput>
    /**
     * Filter which Position_users to update
     */
    where?: Position_userWhereInput
  }


  /**
   * Position_user upsert
   */
  export type Position_userUpsertArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    /**
     * The filter to search for the Position_user to update in case it exists.
     */
    where: Position_userWhereUniqueInput
    /**
     * In case the Position_user found by the `where` argument doesn't exist, create a new Position_user with this data.
     */
    create: XOR<Position_userCreateInput, Position_userUncheckedCreateInput>
    /**
     * In case the Position_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Position_userUpdateInput, Position_userUncheckedUpdateInput>
  }


  /**
   * Position_user delete
   */
  export type Position_userDeleteArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
    /**
     * Filter which Position_user to delete.
     */
    where: Position_userWhereUniqueInput
  }


  /**
   * Position_user deleteMany
   */
  export type Position_userDeleteManyArgs = {
    /**
     * Filter which Position_users to delete
     */
    where?: Position_userWhereInput
  }


  /**
   * Position_user without action
   */
  export type Position_userArgs = {
    /**
     * Select specific fields to fetch from the Position_user
     */
    select?: Position_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Position_userInclude | null
  }



  /**
   * Model holiday_date
   */


  export type AggregateHoliday_date = {
    _count: Holiday_dateCountAggregateOutputType | null
    _avg: Holiday_dateAvgAggregateOutputType | null
    _sum: Holiday_dateSumAggregateOutputType | null
    _min: Holiday_dateMinAggregateOutputType | null
    _max: Holiday_dateMaxAggregateOutputType | null
  }

  export type Holiday_dateAvgAggregateOutputType = {
    day: number | null
    month: number | null
    yaer: number | null
  }

  export type Holiday_dateSumAggregateOutputType = {
    day: number | null
    month: number | null
    yaer: number | null
  }

  export type Holiday_dateMinAggregateOutputType = {
    id: string | null
    holiday_name: string | null
    day: number | null
    month: number | null
    yaer: number | null
    CompanyId: string | null
  }

  export type Holiday_dateMaxAggregateOutputType = {
    id: string | null
    holiday_name: string | null
    day: number | null
    month: number | null
    yaer: number | null
    CompanyId: string | null
  }

  export type Holiday_dateCountAggregateOutputType = {
    id: number
    holiday_name: number
    day: number
    month: number
    yaer: number
    CompanyId: number
    _all: number
  }


  export type Holiday_dateAvgAggregateInputType = {
    day?: true
    month?: true
    yaer?: true
  }

  export type Holiday_dateSumAggregateInputType = {
    day?: true
    month?: true
    yaer?: true
  }

  export type Holiday_dateMinAggregateInputType = {
    id?: true
    holiday_name?: true
    day?: true
    month?: true
    yaer?: true
    CompanyId?: true
  }

  export type Holiday_dateMaxAggregateInputType = {
    id?: true
    holiday_name?: true
    day?: true
    month?: true
    yaer?: true
    CompanyId?: true
  }

  export type Holiday_dateCountAggregateInputType = {
    id?: true
    holiday_name?: true
    day?: true
    month?: true
    yaer?: true
    CompanyId?: true
    _all?: true
  }

  export type Holiday_dateAggregateArgs = {
    /**
     * Filter which holiday_date to aggregate.
     */
    where?: holiday_dateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holiday_dates to fetch.
     */
    orderBy?: Enumerable<holiday_dateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: holiday_dateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holiday_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holiday_dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned holiday_dates
    **/
    _count?: true | Holiday_dateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Holiday_dateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Holiday_dateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Holiday_dateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Holiday_dateMaxAggregateInputType
  }

  export type GetHoliday_dateAggregateType<T extends Holiday_dateAggregateArgs> = {
        [P in keyof T & keyof AggregateHoliday_date]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoliday_date[P]>
      : GetScalarType<T[P], AggregateHoliday_date[P]>
  }




  export type Holiday_dateGroupByArgs = {
    where?: holiday_dateWhereInput
    orderBy?: Enumerable<holiday_dateOrderByWithAggregationInput>
    by: Holiday_dateScalarFieldEnum[]
    having?: holiday_dateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Holiday_dateCountAggregateInputType | true
    _avg?: Holiday_dateAvgAggregateInputType
    _sum?: Holiday_dateSumAggregateInputType
    _min?: Holiday_dateMinAggregateInputType
    _max?: Holiday_dateMaxAggregateInputType
  }


  export type Holiday_dateGroupByOutputType = {
    id: string
    holiday_name: string | null
    day: number
    month: number
    yaer: number
    CompanyId: string | null
    _count: Holiday_dateCountAggregateOutputType | null
    _avg: Holiday_dateAvgAggregateOutputType | null
    _sum: Holiday_dateSumAggregateOutputType | null
    _min: Holiday_dateMinAggregateOutputType | null
    _max: Holiday_dateMaxAggregateOutputType | null
  }

  type GetHoliday_dateGroupByPayload<T extends Holiday_dateGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Holiday_dateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Holiday_dateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Holiday_dateGroupByOutputType[P]>
            : GetScalarType<T[P], Holiday_dateGroupByOutputType[P]>
        }
      >
    >


  export type holiday_dateSelect = {
    id?: boolean
    holiday_name?: boolean
    day?: boolean
    month?: boolean
    yaer?: boolean
    Company?: boolean | CompanyArgs
    CompanyId?: boolean
  }


  export type holiday_dateInclude = {
    Company?: boolean | CompanyArgs
  }

  export type holiday_dateGetPayload<S extends boolean | null | undefined | holiday_dateArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? holiday_date :
    S extends undefined ? never :
    S extends { include: any } & (holiday_dateArgs | holiday_dateFindManyArgs)
    ? holiday_date  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Company' ? CompanyGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (holiday_dateArgs | holiday_dateFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Company' ? CompanyGetPayload<S['select'][P]> | null :  P extends keyof holiday_date ? holiday_date[P] : never
  } 
      : holiday_date


  type holiday_dateCountArgs = 
    Omit<holiday_dateFindManyArgs, 'select' | 'include'> & {
      select?: Holiday_dateCountAggregateInputType | true
    }

  export interface holiday_dateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Holiday_date that matches the filter.
     * @param {holiday_dateFindUniqueArgs} args - Arguments to find a Holiday_date
     * @example
     * // Get one Holiday_date
     * const holiday_date = await prisma.holiday_date.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends holiday_dateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, holiday_dateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'holiday_date'> extends True ? Prisma__holiday_dateClient<holiday_dateGetPayload<T>> : Prisma__holiday_dateClient<holiday_dateGetPayload<T> | null, null>

    /**
     * Find one Holiday_date that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {holiday_dateFindUniqueOrThrowArgs} args - Arguments to find a Holiday_date
     * @example
     * // Get one Holiday_date
     * const holiday_date = await prisma.holiday_date.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends holiday_dateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, holiday_dateFindUniqueOrThrowArgs>
    ): Prisma__holiday_dateClient<holiday_dateGetPayload<T>>

    /**
     * Find the first Holiday_date that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holiday_dateFindFirstArgs} args - Arguments to find a Holiday_date
     * @example
     * // Get one Holiday_date
     * const holiday_date = await prisma.holiday_date.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends holiday_dateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, holiday_dateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'holiday_date'> extends True ? Prisma__holiday_dateClient<holiday_dateGetPayload<T>> : Prisma__holiday_dateClient<holiday_dateGetPayload<T> | null, null>

    /**
     * Find the first Holiday_date that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holiday_dateFindFirstOrThrowArgs} args - Arguments to find a Holiday_date
     * @example
     * // Get one Holiday_date
     * const holiday_date = await prisma.holiday_date.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends holiday_dateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, holiday_dateFindFirstOrThrowArgs>
    ): Prisma__holiday_dateClient<holiday_dateGetPayload<T>>

    /**
     * Find zero or more Holiday_dates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holiday_dateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holiday_dates
     * const holiday_dates = await prisma.holiday_date.findMany()
     * 
     * // Get first 10 Holiday_dates
     * const holiday_dates = await prisma.holiday_date.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holiday_dateWithIdOnly = await prisma.holiday_date.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends holiday_dateFindManyArgs>(
      args?: SelectSubset<T, holiday_dateFindManyArgs>
    ): PrismaPromise<Array<holiday_dateGetPayload<T>>>

    /**
     * Create a Holiday_date.
     * @param {holiday_dateCreateArgs} args - Arguments to create a Holiday_date.
     * @example
     * // Create one Holiday_date
     * const Holiday_date = await prisma.holiday_date.create({
     *   data: {
     *     // ... data to create a Holiday_date
     *   }
     * })
     * 
    **/
    create<T extends holiday_dateCreateArgs>(
      args: SelectSubset<T, holiday_dateCreateArgs>
    ): Prisma__holiday_dateClient<holiday_dateGetPayload<T>>

    /**
     * Create many Holiday_dates.
     *     @param {holiday_dateCreateManyArgs} args - Arguments to create many Holiday_dates.
     *     @example
     *     // Create many Holiday_dates
     *     const holiday_date = await prisma.holiday_date.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends holiday_dateCreateManyArgs>(
      args?: SelectSubset<T, holiday_dateCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Holiday_date.
     * @param {holiday_dateDeleteArgs} args - Arguments to delete one Holiday_date.
     * @example
     * // Delete one Holiday_date
     * const Holiday_date = await prisma.holiday_date.delete({
     *   where: {
     *     // ... filter to delete one Holiday_date
     *   }
     * })
     * 
    **/
    delete<T extends holiday_dateDeleteArgs>(
      args: SelectSubset<T, holiday_dateDeleteArgs>
    ): Prisma__holiday_dateClient<holiday_dateGetPayload<T>>

    /**
     * Update one Holiday_date.
     * @param {holiday_dateUpdateArgs} args - Arguments to update one Holiday_date.
     * @example
     * // Update one Holiday_date
     * const holiday_date = await prisma.holiday_date.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends holiday_dateUpdateArgs>(
      args: SelectSubset<T, holiday_dateUpdateArgs>
    ): Prisma__holiday_dateClient<holiday_dateGetPayload<T>>

    /**
     * Delete zero or more Holiday_dates.
     * @param {holiday_dateDeleteManyArgs} args - Arguments to filter Holiday_dates to delete.
     * @example
     * // Delete a few Holiday_dates
     * const { count } = await prisma.holiday_date.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends holiday_dateDeleteManyArgs>(
      args?: SelectSubset<T, holiday_dateDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holiday_dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holiday_dateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holiday_dates
     * const holiday_date = await prisma.holiday_date.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends holiday_dateUpdateManyArgs>(
      args: SelectSubset<T, holiday_dateUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Holiday_date.
     * @param {holiday_dateUpsertArgs} args - Arguments to update or create a Holiday_date.
     * @example
     * // Update or create a Holiday_date
     * const holiday_date = await prisma.holiday_date.upsert({
     *   create: {
     *     // ... data to create a Holiday_date
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holiday_date we want to update
     *   }
     * })
    **/
    upsert<T extends holiday_dateUpsertArgs>(
      args: SelectSubset<T, holiday_dateUpsertArgs>
    ): Prisma__holiday_dateClient<holiday_dateGetPayload<T>>

    /**
     * Count the number of Holiday_dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holiday_dateCountArgs} args - Arguments to filter Holiday_dates to count.
     * @example
     * // Count the number of Holiday_dates
     * const count = await prisma.holiday_date.count({
     *   where: {
     *     // ... the filter for the Holiday_dates we want to count
     *   }
     * })
    **/
    count<T extends holiday_dateCountArgs>(
      args?: Subset<T, holiday_dateCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Holiday_dateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holiday_date.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Holiday_dateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Holiday_dateAggregateArgs>(args: Subset<T, Holiday_dateAggregateArgs>): PrismaPromise<GetHoliday_dateAggregateType<T>>

    /**
     * Group by Holiday_date.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Holiday_dateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Holiday_dateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Holiday_dateGroupByArgs['orderBy'] }
        : { orderBy?: Holiday_dateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Holiday_dateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoliday_dateGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for holiday_date.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__holiday_dateClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Company<T extends CompanyArgs= {}>(args?: Subset<T, CompanyArgs>): Prisma__CompanyClient<CompanyGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * holiday_date base type for findUnique actions
   */
  export type holiday_dateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the holiday_date
     */
    select?: holiday_dateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: holiday_dateInclude | null
    /**
     * Filter, which holiday_date to fetch.
     */
    where: holiday_dateWhereUniqueInput
  }

  /**
   * holiday_date findUnique
   */
  export interface holiday_dateFindUniqueArgs extends holiday_dateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * holiday_date findUniqueOrThrow
   */
  export type holiday_dateFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the holiday_date
     */
    select?: holiday_dateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: holiday_dateInclude | null
    /**
     * Filter, which holiday_date to fetch.
     */
    where: holiday_dateWhereUniqueInput
  }


  /**
   * holiday_date base type for findFirst actions
   */
  export type holiday_dateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the holiday_date
     */
    select?: holiday_dateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: holiday_dateInclude | null
    /**
     * Filter, which holiday_date to fetch.
     */
    where?: holiday_dateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holiday_dates to fetch.
     */
    orderBy?: Enumerable<holiday_dateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for holiday_dates.
     */
    cursor?: holiday_dateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holiday_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holiday_dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of holiday_dates.
     */
    distinct?: Enumerable<Holiday_dateScalarFieldEnum>
  }

  /**
   * holiday_date findFirst
   */
  export interface holiday_dateFindFirstArgs extends holiday_dateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * holiday_date findFirstOrThrow
   */
  export type holiday_dateFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the holiday_date
     */
    select?: holiday_dateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: holiday_dateInclude | null
    /**
     * Filter, which holiday_date to fetch.
     */
    where?: holiday_dateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holiday_dates to fetch.
     */
    orderBy?: Enumerable<holiday_dateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for holiday_dates.
     */
    cursor?: holiday_dateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holiday_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holiday_dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of holiday_dates.
     */
    distinct?: Enumerable<Holiday_dateScalarFieldEnum>
  }


  /**
   * holiday_date findMany
   */
  export type holiday_dateFindManyArgs = {
    /**
     * Select specific fields to fetch from the holiday_date
     */
    select?: holiday_dateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: holiday_dateInclude | null
    /**
     * Filter, which holiday_dates to fetch.
     */
    where?: holiday_dateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holiday_dates to fetch.
     */
    orderBy?: Enumerable<holiday_dateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing holiday_dates.
     */
    cursor?: holiday_dateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holiday_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holiday_dates.
     */
    skip?: number
    distinct?: Enumerable<Holiday_dateScalarFieldEnum>
  }


  /**
   * holiday_date create
   */
  export type holiday_dateCreateArgs = {
    /**
     * Select specific fields to fetch from the holiday_date
     */
    select?: holiday_dateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: holiday_dateInclude | null
    /**
     * The data needed to create a holiday_date.
     */
    data: XOR<holiday_dateCreateInput, holiday_dateUncheckedCreateInput>
  }


  /**
   * holiday_date createMany
   */
  export type holiday_dateCreateManyArgs = {
    /**
     * The data used to create many holiday_dates.
     */
    data: Enumerable<holiday_dateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * holiday_date update
   */
  export type holiday_dateUpdateArgs = {
    /**
     * Select specific fields to fetch from the holiday_date
     */
    select?: holiday_dateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: holiday_dateInclude | null
    /**
     * The data needed to update a holiday_date.
     */
    data: XOR<holiday_dateUpdateInput, holiday_dateUncheckedUpdateInput>
    /**
     * Choose, which holiday_date to update.
     */
    where: holiday_dateWhereUniqueInput
  }


  /**
   * holiday_date updateMany
   */
  export type holiday_dateUpdateManyArgs = {
    /**
     * The data used to update holiday_dates.
     */
    data: XOR<holiday_dateUpdateManyMutationInput, holiday_dateUncheckedUpdateManyInput>
    /**
     * Filter which holiday_dates to update
     */
    where?: holiday_dateWhereInput
  }


  /**
   * holiday_date upsert
   */
  export type holiday_dateUpsertArgs = {
    /**
     * Select specific fields to fetch from the holiday_date
     */
    select?: holiday_dateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: holiday_dateInclude | null
    /**
     * The filter to search for the holiday_date to update in case it exists.
     */
    where: holiday_dateWhereUniqueInput
    /**
     * In case the holiday_date found by the `where` argument doesn't exist, create a new holiday_date with this data.
     */
    create: XOR<holiday_dateCreateInput, holiday_dateUncheckedCreateInput>
    /**
     * In case the holiday_date was found with the provided `where` argument, update it with this data.
     */
    update: XOR<holiday_dateUpdateInput, holiday_dateUncheckedUpdateInput>
  }


  /**
   * holiday_date delete
   */
  export type holiday_dateDeleteArgs = {
    /**
     * Select specific fields to fetch from the holiday_date
     */
    select?: holiday_dateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: holiday_dateInclude | null
    /**
     * Filter which holiday_date to delete.
     */
    where: holiday_dateWhereUniqueInput
  }


  /**
   * holiday_date deleteMany
   */
  export type holiday_dateDeleteManyArgs = {
    /**
     * Filter which holiday_dates to delete
     */
    where?: holiday_dateWhereInput
  }


  /**
   * holiday_date without action
   */
  export type holiday_dateArgs = {
    /**
     * Select specific fields to fetch from the holiday_date
     */
    select?: holiday_dateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: holiday_dateInclude | null
  }



  /**
   * Model holiday_year
   */


  export type AggregateHoliday_year = {
    _count: Holiday_yearCountAggregateOutputType | null
    _avg: Holiday_yearAvgAggregateOutputType | null
    _sum: Holiday_yearSumAggregateOutputType | null
    _min: Holiday_yearMinAggregateOutputType | null
    _max: Holiday_yearMaxAggregateOutputType | null
  }

  export type Holiday_yearAvgAggregateOutputType = {
    day: number | null
    month: number | null
    year: number | null
  }

  export type Holiday_yearSumAggregateOutputType = {
    day: number | null
    month: number | null
    year: number | null
  }

  export type Holiday_yearMinAggregateOutputType = {
    id: string | null
    day: number | null
    month: number | null
    year: number | null
    holiday_name: string | null
  }

  export type Holiday_yearMaxAggregateOutputType = {
    id: string | null
    day: number | null
    month: number | null
    year: number | null
    holiday_name: string | null
  }

  export type Holiday_yearCountAggregateOutputType = {
    id: number
    day: number
    month: number
    year: number
    holiday_name: number
    _all: number
  }


  export type Holiday_yearAvgAggregateInputType = {
    day?: true
    month?: true
    year?: true
  }

  export type Holiday_yearSumAggregateInputType = {
    day?: true
    month?: true
    year?: true
  }

  export type Holiday_yearMinAggregateInputType = {
    id?: true
    day?: true
    month?: true
    year?: true
    holiday_name?: true
  }

  export type Holiday_yearMaxAggregateInputType = {
    id?: true
    day?: true
    month?: true
    year?: true
    holiday_name?: true
  }

  export type Holiday_yearCountAggregateInputType = {
    id?: true
    day?: true
    month?: true
    year?: true
    holiday_name?: true
    _all?: true
  }

  export type Holiday_yearAggregateArgs = {
    /**
     * Filter which holiday_year to aggregate.
     */
    where?: holiday_yearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holiday_years to fetch.
     */
    orderBy?: Enumerable<holiday_yearOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: holiday_yearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holiday_years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holiday_years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned holiday_years
    **/
    _count?: true | Holiday_yearCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Holiday_yearAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Holiday_yearSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Holiday_yearMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Holiday_yearMaxAggregateInputType
  }

  export type GetHoliday_yearAggregateType<T extends Holiday_yearAggregateArgs> = {
        [P in keyof T & keyof AggregateHoliday_year]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoliday_year[P]>
      : GetScalarType<T[P], AggregateHoliday_year[P]>
  }




  export type Holiday_yearGroupByArgs = {
    where?: holiday_yearWhereInput
    orderBy?: Enumerable<holiday_yearOrderByWithAggregationInput>
    by: Holiday_yearScalarFieldEnum[]
    having?: holiday_yearScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Holiday_yearCountAggregateInputType | true
    _avg?: Holiday_yearAvgAggregateInputType
    _sum?: Holiday_yearSumAggregateInputType
    _min?: Holiday_yearMinAggregateInputType
    _max?: Holiday_yearMaxAggregateInputType
  }


  export type Holiday_yearGroupByOutputType = {
    id: string
    day: number
    month: number
    year: number
    holiday_name: string | null
    _count: Holiday_yearCountAggregateOutputType | null
    _avg: Holiday_yearAvgAggregateOutputType | null
    _sum: Holiday_yearSumAggregateOutputType | null
    _min: Holiday_yearMinAggregateOutputType | null
    _max: Holiday_yearMaxAggregateOutputType | null
  }

  type GetHoliday_yearGroupByPayload<T extends Holiday_yearGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Holiday_yearGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Holiday_yearGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Holiday_yearGroupByOutputType[P]>
            : GetScalarType<T[P], Holiday_yearGroupByOutputType[P]>
        }
      >
    >


  export type holiday_yearSelect = {
    id?: boolean
    day?: boolean
    month?: boolean
    year?: boolean
    holiday_name?: boolean
  }


  export type holiday_yearGetPayload<S extends boolean | null | undefined | holiday_yearArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? holiday_year :
    S extends undefined ? never :
    S extends { include: any } & (holiday_yearArgs | holiday_yearFindManyArgs)
    ? holiday_year 
    : S extends { select: any } & (holiday_yearArgs | holiday_yearFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof holiday_year ? holiday_year[P] : never
  } 
      : holiday_year


  type holiday_yearCountArgs = 
    Omit<holiday_yearFindManyArgs, 'select' | 'include'> & {
      select?: Holiday_yearCountAggregateInputType | true
    }

  export interface holiday_yearDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Holiday_year that matches the filter.
     * @param {holiday_yearFindUniqueArgs} args - Arguments to find a Holiday_year
     * @example
     * // Get one Holiday_year
     * const holiday_year = await prisma.holiday_year.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends holiday_yearFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, holiday_yearFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'holiday_year'> extends True ? Prisma__holiday_yearClient<holiday_yearGetPayload<T>> : Prisma__holiday_yearClient<holiday_yearGetPayload<T> | null, null>

    /**
     * Find one Holiday_year that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {holiday_yearFindUniqueOrThrowArgs} args - Arguments to find a Holiday_year
     * @example
     * // Get one Holiday_year
     * const holiday_year = await prisma.holiday_year.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends holiday_yearFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, holiday_yearFindUniqueOrThrowArgs>
    ): Prisma__holiday_yearClient<holiday_yearGetPayload<T>>

    /**
     * Find the first Holiday_year that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holiday_yearFindFirstArgs} args - Arguments to find a Holiday_year
     * @example
     * // Get one Holiday_year
     * const holiday_year = await prisma.holiday_year.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends holiday_yearFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, holiday_yearFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'holiday_year'> extends True ? Prisma__holiday_yearClient<holiday_yearGetPayload<T>> : Prisma__holiday_yearClient<holiday_yearGetPayload<T> | null, null>

    /**
     * Find the first Holiday_year that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holiday_yearFindFirstOrThrowArgs} args - Arguments to find a Holiday_year
     * @example
     * // Get one Holiday_year
     * const holiday_year = await prisma.holiday_year.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends holiday_yearFindFirstOrThrowArgs>(
      args?: SelectSubset<T, holiday_yearFindFirstOrThrowArgs>
    ): Prisma__holiday_yearClient<holiday_yearGetPayload<T>>

    /**
     * Find zero or more Holiday_years that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holiday_yearFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holiday_years
     * const holiday_years = await prisma.holiday_year.findMany()
     * 
     * // Get first 10 Holiday_years
     * const holiday_years = await prisma.holiday_year.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holiday_yearWithIdOnly = await prisma.holiday_year.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends holiday_yearFindManyArgs>(
      args?: SelectSubset<T, holiday_yearFindManyArgs>
    ): PrismaPromise<Array<holiday_yearGetPayload<T>>>

    /**
     * Create a Holiday_year.
     * @param {holiday_yearCreateArgs} args - Arguments to create a Holiday_year.
     * @example
     * // Create one Holiday_year
     * const Holiday_year = await prisma.holiday_year.create({
     *   data: {
     *     // ... data to create a Holiday_year
     *   }
     * })
     * 
    **/
    create<T extends holiday_yearCreateArgs>(
      args: SelectSubset<T, holiday_yearCreateArgs>
    ): Prisma__holiday_yearClient<holiday_yearGetPayload<T>>

    /**
     * Create many Holiday_years.
     *     @param {holiday_yearCreateManyArgs} args - Arguments to create many Holiday_years.
     *     @example
     *     // Create many Holiday_years
     *     const holiday_year = await prisma.holiday_year.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends holiday_yearCreateManyArgs>(
      args?: SelectSubset<T, holiday_yearCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Holiday_year.
     * @param {holiday_yearDeleteArgs} args - Arguments to delete one Holiday_year.
     * @example
     * // Delete one Holiday_year
     * const Holiday_year = await prisma.holiday_year.delete({
     *   where: {
     *     // ... filter to delete one Holiday_year
     *   }
     * })
     * 
    **/
    delete<T extends holiday_yearDeleteArgs>(
      args: SelectSubset<T, holiday_yearDeleteArgs>
    ): Prisma__holiday_yearClient<holiday_yearGetPayload<T>>

    /**
     * Update one Holiday_year.
     * @param {holiday_yearUpdateArgs} args - Arguments to update one Holiday_year.
     * @example
     * // Update one Holiday_year
     * const holiday_year = await prisma.holiday_year.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends holiday_yearUpdateArgs>(
      args: SelectSubset<T, holiday_yearUpdateArgs>
    ): Prisma__holiday_yearClient<holiday_yearGetPayload<T>>

    /**
     * Delete zero or more Holiday_years.
     * @param {holiday_yearDeleteManyArgs} args - Arguments to filter Holiday_years to delete.
     * @example
     * // Delete a few Holiday_years
     * const { count } = await prisma.holiday_year.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends holiday_yearDeleteManyArgs>(
      args?: SelectSubset<T, holiday_yearDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holiday_years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holiday_yearUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holiday_years
     * const holiday_year = await prisma.holiday_year.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends holiday_yearUpdateManyArgs>(
      args: SelectSubset<T, holiday_yearUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Holiday_year.
     * @param {holiday_yearUpsertArgs} args - Arguments to update or create a Holiday_year.
     * @example
     * // Update or create a Holiday_year
     * const holiday_year = await prisma.holiday_year.upsert({
     *   create: {
     *     // ... data to create a Holiday_year
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holiday_year we want to update
     *   }
     * })
    **/
    upsert<T extends holiday_yearUpsertArgs>(
      args: SelectSubset<T, holiday_yearUpsertArgs>
    ): Prisma__holiday_yearClient<holiday_yearGetPayload<T>>

    /**
     * Count the number of Holiday_years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holiday_yearCountArgs} args - Arguments to filter Holiday_years to count.
     * @example
     * // Count the number of Holiday_years
     * const count = await prisma.holiday_year.count({
     *   where: {
     *     // ... the filter for the Holiday_years we want to count
     *   }
     * })
    **/
    count<T extends holiday_yearCountArgs>(
      args?: Subset<T, holiday_yearCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Holiday_yearCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holiday_year.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Holiday_yearAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Holiday_yearAggregateArgs>(args: Subset<T, Holiday_yearAggregateArgs>): PrismaPromise<GetHoliday_yearAggregateType<T>>

    /**
     * Group by Holiday_year.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Holiday_yearGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Holiday_yearGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Holiday_yearGroupByArgs['orderBy'] }
        : { orderBy?: Holiday_yearGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Holiday_yearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoliday_yearGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for holiday_year.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__holiday_yearClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * holiday_year base type for findUnique actions
   */
  export type holiday_yearFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the holiday_year
     */
    select?: holiday_yearSelect | null
    /**
     * Filter, which holiday_year to fetch.
     */
    where: holiday_yearWhereUniqueInput
  }

  /**
   * holiday_year findUnique
   */
  export interface holiday_yearFindUniqueArgs extends holiday_yearFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * holiday_year findUniqueOrThrow
   */
  export type holiday_yearFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the holiday_year
     */
    select?: holiday_yearSelect | null
    /**
     * Filter, which holiday_year to fetch.
     */
    where: holiday_yearWhereUniqueInput
  }


  /**
   * holiday_year base type for findFirst actions
   */
  export type holiday_yearFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the holiday_year
     */
    select?: holiday_yearSelect | null
    /**
     * Filter, which holiday_year to fetch.
     */
    where?: holiday_yearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holiday_years to fetch.
     */
    orderBy?: Enumerable<holiday_yearOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for holiday_years.
     */
    cursor?: holiday_yearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holiday_years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holiday_years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of holiday_years.
     */
    distinct?: Enumerable<Holiday_yearScalarFieldEnum>
  }

  /**
   * holiday_year findFirst
   */
  export interface holiday_yearFindFirstArgs extends holiday_yearFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * holiday_year findFirstOrThrow
   */
  export type holiday_yearFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the holiday_year
     */
    select?: holiday_yearSelect | null
    /**
     * Filter, which holiday_year to fetch.
     */
    where?: holiday_yearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holiday_years to fetch.
     */
    orderBy?: Enumerable<holiday_yearOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for holiday_years.
     */
    cursor?: holiday_yearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holiday_years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holiday_years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of holiday_years.
     */
    distinct?: Enumerable<Holiday_yearScalarFieldEnum>
  }


  /**
   * holiday_year findMany
   */
  export type holiday_yearFindManyArgs = {
    /**
     * Select specific fields to fetch from the holiday_year
     */
    select?: holiday_yearSelect | null
    /**
     * Filter, which holiday_years to fetch.
     */
    where?: holiday_yearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holiday_years to fetch.
     */
    orderBy?: Enumerable<holiday_yearOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing holiday_years.
     */
    cursor?: holiday_yearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holiday_years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holiday_years.
     */
    skip?: number
    distinct?: Enumerable<Holiday_yearScalarFieldEnum>
  }


  /**
   * holiday_year create
   */
  export type holiday_yearCreateArgs = {
    /**
     * Select specific fields to fetch from the holiday_year
     */
    select?: holiday_yearSelect | null
    /**
     * The data needed to create a holiday_year.
     */
    data: XOR<holiday_yearCreateInput, holiday_yearUncheckedCreateInput>
  }


  /**
   * holiday_year createMany
   */
  export type holiday_yearCreateManyArgs = {
    /**
     * The data used to create many holiday_years.
     */
    data: Enumerable<holiday_yearCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * holiday_year update
   */
  export type holiday_yearUpdateArgs = {
    /**
     * Select specific fields to fetch from the holiday_year
     */
    select?: holiday_yearSelect | null
    /**
     * The data needed to update a holiday_year.
     */
    data: XOR<holiday_yearUpdateInput, holiday_yearUncheckedUpdateInput>
    /**
     * Choose, which holiday_year to update.
     */
    where: holiday_yearWhereUniqueInput
  }


  /**
   * holiday_year updateMany
   */
  export type holiday_yearUpdateManyArgs = {
    /**
     * The data used to update holiday_years.
     */
    data: XOR<holiday_yearUpdateManyMutationInput, holiday_yearUncheckedUpdateManyInput>
    /**
     * Filter which holiday_years to update
     */
    where?: holiday_yearWhereInput
  }


  /**
   * holiday_year upsert
   */
  export type holiday_yearUpsertArgs = {
    /**
     * Select specific fields to fetch from the holiday_year
     */
    select?: holiday_yearSelect | null
    /**
     * The filter to search for the holiday_year to update in case it exists.
     */
    where: holiday_yearWhereUniqueInput
    /**
     * In case the holiday_year found by the `where` argument doesn't exist, create a new holiday_year with this data.
     */
    create: XOR<holiday_yearCreateInput, holiday_yearUncheckedCreateInput>
    /**
     * In case the holiday_year was found with the provided `where` argument, update it with this data.
     */
    update: XOR<holiday_yearUpdateInput, holiday_yearUncheckedUpdateInput>
  }


  /**
   * holiday_year delete
   */
  export type holiday_yearDeleteArgs = {
    /**
     * Select specific fields to fetch from the holiday_year
     */
    select?: holiday_yearSelect | null
    /**
     * Filter which holiday_year to delete.
     */
    where: holiday_yearWhereUniqueInput
  }


  /**
   * holiday_year deleteMany
   */
  export type holiday_yearDeleteManyArgs = {
    /**
     * Filter which holiday_years to delete
     */
    where?: holiday_yearWhereInput
  }


  /**
   * holiday_year without action
   */
  export type holiday_yearArgs = {
    /**
     * Select specific fields to fetch from the holiday_year
     */
    select?: holiday_yearSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AmphoeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    districtId: 'districtId',
    zipcode: 'zipcode'
  };

  export type AmphoeScalarFieldEnum = (typeof AmphoeScalarFieldEnum)[keyof typeof AmphoeScalarFieldEnum]


  export const CompanyBranchScalarFieldEnum: {
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
  };

  export type CompanyBranchScalarFieldEnum = (typeof CompanyBranchScalarFieldEnum)[keyof typeof CompanyBranchScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
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
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const DistrictScalarFieldEnum: {
    id: 'id',
    name: 'name',
    provinceId: 'provinceId'
  };

  export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum]


  export const Holiday_dateScalarFieldEnum: {
    id: 'id',
    holiday_name: 'holiday_name',
    day: 'day',
    month: 'month',
    yaer: 'yaer',
    CompanyId: 'CompanyId'
  };

  export type Holiday_dateScalarFieldEnum = (typeof Holiday_dateScalarFieldEnum)[keyof typeof Holiday_dateScalarFieldEnum]


  export const Holiday_yearScalarFieldEnum: {
    id: 'id',
    day: 'day',
    month: 'month',
    year: 'year',
    holiday_name: 'holiday_name'
  };

  export type Holiday_yearScalarFieldEnum = (typeof Holiday_yearScalarFieldEnum)[keyof typeof Holiday_yearScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const Mas_positionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    CompanyId: 'CompanyId'
  };

  export type Mas_positionScalarFieldEnum = (typeof Mas_positionScalarFieldEnum)[keyof typeof Mas_positionScalarFieldEnum]


  export const Mas_positionlevel1ScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    code: 'code',
    type: 'type',
    CompanyId: 'CompanyId'
  };

  export type Mas_positionlevel1ScalarFieldEnum = (typeof Mas_positionlevel1ScalarFieldEnum)[keyof typeof Mas_positionlevel1ScalarFieldEnum]


  export const Mas_positionlevel2ScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    code: 'code',
    type: 'type',
    positionlevel1_id: 'positionlevel1_id',
    CompanyId: 'CompanyId'
  };

  export type Mas_positionlevel2ScalarFieldEnum = (typeof Mas_positionlevel2ScalarFieldEnum)[keyof typeof Mas_positionlevel2ScalarFieldEnum]


  export const Mas_positionlevel3ScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    code: 'code',
    type: 'type',
    positionlevel2_id: 'positionlevel2_id',
    CompanyId: 'CompanyId'
  };

  export type Mas_positionlevel3ScalarFieldEnum = (typeof Mas_positionlevel3ScalarFieldEnum)[keyof typeof Mas_positionlevel3ScalarFieldEnum]


  export const Position_userScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    position1_id: 'position1_id',
    position2_id: 'position2_id',
    position3_id: 'position3_id',
    role: 'role',
    headderId: 'headderId'
  };

  export type Position_userScalarFieldEnum = (typeof Position_userScalarFieldEnum)[keyof typeof Position_userScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
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
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const Role_CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    access: 'access',
    status: 'status',
    companyBranchId: 'companyBranchId'
  };

  export type Role_CompanyScalarFieldEnum = (typeof Role_CompanyScalarFieldEnum)[keyof typeof Role_CompanyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: Enumerable<CompanyWhereInput>
    OR?: Enumerable<CompanyWhereInput>
    NOT?: Enumerable<CompanyWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    companyCode?: StringFilter | string
    userlimit?: IntFilter | number
    company_registration_id?: StringNullableFilter | string | null
    company_vat_id?: StringNullableFilter | string | null
    icon?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ownerId?: UuidFilter | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    branch?: CompanyBranchListRelationFilter
    mas_positionlevel3?: Mas_positionlevel3ListRelationFilter
    mas_positionlevel2?: Mas_positionlevel2ListRelationFilter
    mas_positionlevel1?: Mas_positionlevel1ListRelationFilter
    holiday_date?: Holiday_dateListRelationFilter
    mas_position?: Mas_positionListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    userlimit?: SortOrder
    company_registration_id?: SortOrder
    company_vat_id?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    branch?: CompanyBranchOrderByRelationAggregateInput
    mas_positionlevel3?: mas_positionlevel3OrderByRelationAggregateInput
    mas_positionlevel2?: mas_positionlevel2OrderByRelationAggregateInput
    mas_positionlevel1?: mas_positionlevel1OrderByRelationAggregateInput
    holiday_date?: holiday_dateOrderByRelationAggregateInput
    mas_position?: mas_positionOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = {
    id?: string
    companyCode?: string
  }

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    userlimit?: SortOrder
    company_registration_id?: SortOrder
    company_vat_id?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    companyCode?: StringWithAggregatesFilter | string
    userlimit?: IntWithAggregatesFilter | number
    company_registration_id?: StringNullableWithAggregatesFilter | string | null
    company_vat_id?: StringNullableWithAggregatesFilter | string | null
    icon?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    ownerId?: UuidWithAggregatesFilter | string
  }

  export type CompanyBranchWhereInput = {
    AND?: Enumerable<CompanyBranchWhereInput>
    OR?: Enumerable<CompanyBranchWhereInput>
    NOT?: Enumerable<CompanyBranchWhereInput>
    id?: UuidFilter | string
    isMainbranch?: BoolFilter | boolean
    name?: StringFilter | string
    address?: StringFilter | string
    address_2?: StringNullableFilter | string | null
    city?: StringFilter | string
    state?: StringFilter | string
    zip?: StringFilter | string
    country?: StringNullableFilter | string | null
    tel?: StringNullableFilter | string | null
    fax?: StringNullableFilter | string | null
    website?: StringNullableFilter | string | null
    lat?: StringNullableFilter | string | null
    lng?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    email_2?: StringNullableFilter | string | null
    company_type?: StringNullableFilter | string | null
    sub_company_type?: StringNullableFilter | string | null
    registeredamount?: StringNullableFilter | string | null
    social_facebook?: StringNullableFilter | string | null
    social_likedin?: StringNullableFilter | string | null
    social_instragram?: StringNullableFilter | string | null
    social_line?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput> | null
    companyId?: UuidNullableFilter | string | null
    users?: UserListRelationFilter
    Role_Company?: Role_CompanyListRelationFilter
  }

  export type CompanyBranchOrderByWithRelationInput = {
    id?: SortOrder
    isMainbranch?: SortOrder
    name?: SortOrder
    address?: SortOrder
    address_2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    tel?: SortOrder
    fax?: SortOrder
    website?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    email?: SortOrder
    email_2?: SortOrder
    company_type?: SortOrder
    sub_company_type?: SortOrder
    registeredamount?: SortOrder
    social_facebook?: SortOrder
    social_likedin?: SortOrder
    social_instragram?: SortOrder
    social_line?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    companyId?: SortOrder
    users?: UserOrderByRelationAggregateInput
    Role_Company?: Role_CompanyOrderByRelationAggregateInput
  }

  export type CompanyBranchWhereUniqueInput = {
    id?: string
  }

  export type CompanyBranchOrderByWithAggregationInput = {
    id?: SortOrder
    isMainbranch?: SortOrder
    name?: SortOrder
    address?: SortOrder
    address_2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    tel?: SortOrder
    fax?: SortOrder
    website?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    email?: SortOrder
    email_2?: SortOrder
    company_type?: SortOrder
    sub_company_type?: SortOrder
    registeredamount?: SortOrder
    social_facebook?: SortOrder
    social_likedin?: SortOrder
    social_instragram?: SortOrder
    social_line?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    _count?: CompanyBranchCountOrderByAggregateInput
    _max?: CompanyBranchMaxOrderByAggregateInput
    _min?: CompanyBranchMinOrderByAggregateInput
  }

  export type CompanyBranchScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompanyBranchScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompanyBranchScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompanyBranchScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    isMainbranch?: BoolWithAggregatesFilter | boolean
    name?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    address_2?: StringNullableWithAggregatesFilter | string | null
    city?: StringWithAggregatesFilter | string
    state?: StringWithAggregatesFilter | string
    zip?: StringWithAggregatesFilter | string
    country?: StringNullableWithAggregatesFilter | string | null
    tel?: StringNullableWithAggregatesFilter | string | null
    fax?: StringNullableWithAggregatesFilter | string | null
    website?: StringNullableWithAggregatesFilter | string | null
    lat?: StringNullableWithAggregatesFilter | string | null
    lng?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    email_2?: StringNullableWithAggregatesFilter | string | null
    company_type?: StringNullableWithAggregatesFilter | string | null
    sub_company_type?: StringNullableWithAggregatesFilter | string | null
    registeredamount?: StringNullableWithAggregatesFilter | string | null
    social_facebook?: StringNullableWithAggregatesFilter | string | null
    social_likedin?: StringNullableWithAggregatesFilter | string | null
    social_instragram?: StringNullableWithAggregatesFilter | string | null
    social_line?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    companyId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type ProfileWhereInput = {
    AND?: Enumerable<ProfileWhereInput>
    OR?: Enumerable<ProfileWhereInput>
    NOT?: Enumerable<ProfileWhereInput>
    id?: UuidFilter | string
    bio?: StringNullableFilter | string | null
    firstname_th?: StringNullableFilter | string | null
    lastname_th?: StringNullableFilter | string | null
    firstname_en?: StringNullableFilter | string | null
    lastname_en?: StringNullableFilter | string | null
    nickname?: StringNullableFilter | string | null
    blood_type?: StringNullableFilter | string | null
    employee_status?: StringNullableFilter | string | null
    start_date_work?: DateTimeNullableFilter | Date | string | null
    avatar?: StringNullableFilter | string | null
    dob?: DateTimeNullableFilter | Date | string | null
    age?: StringNullableFilter | string | null
    relationship?: StringNullableFilter | string | null
    shirt_size?: StringNullableFilter | string | null
    prefix_th?: StringNullableFilter | string | null
    prefix_en?: StringNullableFilter | string | null
    citizen_id?: StringNullableFilter | string | null
    social_id?: StringNullableFilter | string | null
    staff_status?: StringNullableFilter | string | null
    tel?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    gender?: StringNullableFilter | string | null
    staff_code?: StringNullableFilter | string | null
    religion?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: UuidFilter | string
    citizen_addressnumber?: StringNullableFilter | string | null
    citizen_address?: StringNullableFilter | string | null
    citizen_country?: StringNullableFilter | string | null
    citizen_province?: StringNullableFilter | string | null
    citizen_district?: StringNullableFilter | string | null
    citizen_state?: StringNullableFilter | string | null
    citizen_zipcode?: StringNullableFilter | string | null
    citizen_tel?: StringNullableFilter | string | null
    contract_sameCitizen?: BoolFilter | boolean
    contract_addressnumber?: StringNullableFilter | string | null
    contract_address?: StringNullableFilter | string | null
    contract_country?: StringNullableFilter | string | null
    contract_province?: StringNullableFilter | string | null
    contract_district?: StringNullableFilter | string | null
    contract_state?: StringNullableFilter | string | null
    contract_zipcode?: StringNullableFilter | string | null
    contract_email?: StringNullableFilter | string | null
    contract_companyemail?: StringNullableFilter | string | null
    social_facebook?: StringNullableFilter | string | null
    social_likedin?: StringNullableFilter | string | null
    social_line?: StringNullableFilter | string | null
    social_telegram?: StringNullableFilter | string | null
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrder
    firstname_th?: SortOrder
    lastname_th?: SortOrder
    firstname_en?: SortOrder
    lastname_en?: SortOrder
    nickname?: SortOrder
    blood_type?: SortOrder
    employee_status?: SortOrder
    start_date_work?: SortOrder
    avatar?: SortOrder
    dob?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    shirt_size?: SortOrder
    prefix_th?: SortOrder
    prefix_en?: SortOrder
    citizen_id?: SortOrder
    social_id?: SortOrder
    staff_status?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    staff_code?: SortOrder
    religion?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    citizen_addressnumber?: SortOrder
    citizen_address?: SortOrder
    citizen_country?: SortOrder
    citizen_province?: SortOrder
    citizen_district?: SortOrder
    citizen_state?: SortOrder
    citizen_zipcode?: SortOrder
    citizen_tel?: SortOrder
    contract_sameCitizen?: SortOrder
    contract_addressnumber?: SortOrder
    contract_address?: SortOrder
    contract_country?: SortOrder
    contract_province?: SortOrder
    contract_district?: SortOrder
    contract_state?: SortOrder
    contract_zipcode?: SortOrder
    contract_email?: SortOrder
    contract_companyemail?: SortOrder
    social_facebook?: SortOrder
    social_likedin?: SortOrder
    social_line?: SortOrder
    social_telegram?: SortOrder
  }

  export type ProfileWhereUniqueInput = {
    id?: string
    staff_code?: string
    userId?: string
  }

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrder
    firstname_th?: SortOrder
    lastname_th?: SortOrder
    firstname_en?: SortOrder
    lastname_en?: SortOrder
    nickname?: SortOrder
    blood_type?: SortOrder
    employee_status?: SortOrder
    start_date_work?: SortOrder
    avatar?: SortOrder
    dob?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    shirt_size?: SortOrder
    prefix_th?: SortOrder
    prefix_en?: SortOrder
    citizen_id?: SortOrder
    social_id?: SortOrder
    staff_status?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    staff_code?: SortOrder
    religion?: SortOrder
    userId?: SortOrder
    citizen_addressnumber?: SortOrder
    citizen_address?: SortOrder
    citizen_country?: SortOrder
    citizen_province?: SortOrder
    citizen_district?: SortOrder
    citizen_state?: SortOrder
    citizen_zipcode?: SortOrder
    citizen_tel?: SortOrder
    contract_sameCitizen?: SortOrder
    contract_addressnumber?: SortOrder
    contract_address?: SortOrder
    contract_country?: SortOrder
    contract_province?: SortOrder
    contract_district?: SortOrder
    contract_state?: SortOrder
    contract_zipcode?: SortOrder
    contract_email?: SortOrder
    contract_companyemail?: SortOrder
    social_facebook?: SortOrder
    social_likedin?: SortOrder
    social_line?: SortOrder
    social_telegram?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    bio?: StringNullableWithAggregatesFilter | string | null
    firstname_th?: StringNullableWithAggregatesFilter | string | null
    lastname_th?: StringNullableWithAggregatesFilter | string | null
    firstname_en?: StringNullableWithAggregatesFilter | string | null
    lastname_en?: StringNullableWithAggregatesFilter | string | null
    nickname?: StringNullableWithAggregatesFilter | string | null
    blood_type?: StringNullableWithAggregatesFilter | string | null
    employee_status?: StringNullableWithAggregatesFilter | string | null
    start_date_work?: DateTimeNullableWithAggregatesFilter | Date | string | null
    avatar?: StringNullableWithAggregatesFilter | string | null
    dob?: DateTimeNullableWithAggregatesFilter | Date | string | null
    age?: StringNullableWithAggregatesFilter | string | null
    relationship?: StringNullableWithAggregatesFilter | string | null
    shirt_size?: StringNullableWithAggregatesFilter | string | null
    prefix_th?: StringNullableWithAggregatesFilter | string | null
    prefix_en?: StringNullableWithAggregatesFilter | string | null
    citizen_id?: StringNullableWithAggregatesFilter | string | null
    social_id?: StringNullableWithAggregatesFilter | string | null
    staff_status?: StringNullableWithAggregatesFilter | string | null
    tel?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
    gender?: StringNullableWithAggregatesFilter | string | null
    staff_code?: StringNullableWithAggregatesFilter | string | null
    religion?: StringNullableWithAggregatesFilter | string | null
    userId?: UuidWithAggregatesFilter | string
    citizen_addressnumber?: StringNullableWithAggregatesFilter | string | null
    citizen_address?: StringNullableWithAggregatesFilter | string | null
    citizen_country?: StringNullableWithAggregatesFilter | string | null
    citizen_province?: StringNullableWithAggregatesFilter | string | null
    citizen_district?: StringNullableWithAggregatesFilter | string | null
    citizen_state?: StringNullableWithAggregatesFilter | string | null
    citizen_zipcode?: StringNullableWithAggregatesFilter | string | null
    citizen_tel?: StringNullableWithAggregatesFilter | string | null
    contract_sameCitizen?: BoolWithAggregatesFilter | boolean
    contract_addressnumber?: StringNullableWithAggregatesFilter | string | null
    contract_address?: StringNullableWithAggregatesFilter | string | null
    contract_country?: StringNullableWithAggregatesFilter | string | null
    contract_province?: StringNullableWithAggregatesFilter | string | null
    contract_district?: StringNullableWithAggregatesFilter | string | null
    contract_state?: StringNullableWithAggregatesFilter | string | null
    contract_zipcode?: StringNullableWithAggregatesFilter | string | null
    contract_email?: StringNullableWithAggregatesFilter | string | null
    contract_companyemail?: StringNullableWithAggregatesFilter | string | null
    social_facebook?: StringNullableWithAggregatesFilter | string | null
    social_likedin?: StringNullableWithAggregatesFilter | string | null
    social_line?: StringNullableWithAggregatesFilter | string | null
    social_telegram?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: UuidFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    profile?: XOR<ProfileRelationFilter, ProfileWhereInput> | null
    islogin?: BoolFilter | boolean
    isActive?: BoolFilter | boolean
    isOwner?: BoolFilter | boolean
    lastlogin?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    roleId?: UuidNullableFilter | string | null
    role?: XOR<RoleRelationFilter, RoleWhereInput> | null
    RoleCompanyID?: UuidNullableFilter | string | null
    company?: CompanyListRelationFilter
    companyBranch?: XOR<CompanyBranchRelationFilter, CompanyBranchWhereInput> | null
    companyBranchId?: UuidNullableFilter | string | null
    Role_Company?: XOR<Role_CompanyRelationFilter, Role_CompanyWhereInput> | null
    Position_user?: XOR<Position_userRelationFilter, Position_userWhereInput> | null
    henchman?: Position_userListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    islogin?: SortOrder
    isActive?: SortOrder
    isOwner?: SortOrder
    lastlogin?: SortOrder
    createdAt?: SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
    RoleCompanyID?: SortOrder
    company?: CompanyOrderByRelationAggregateInput
    companyBranch?: CompanyBranchOrderByWithRelationInput
    companyBranchId?: SortOrder
    Role_Company?: Role_CompanyOrderByWithRelationInput
    Position_user?: Position_userOrderByWithRelationInput
    henchman?: Position_userOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    islogin?: SortOrder
    isActive?: SortOrder
    isOwner?: SortOrder
    lastlogin?: SortOrder
    createdAt?: SortOrder
    roleId?: SortOrder
    RoleCompanyID?: SortOrder
    companyBranchId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    islogin?: BoolWithAggregatesFilter | boolean
    isActive?: BoolWithAggregatesFilter | boolean
    isOwner?: BoolWithAggregatesFilter | boolean
    lastlogin?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    roleId?: UuidNullableWithAggregatesFilter | string | null
    RoleCompanyID?: UuidNullableWithAggregatesFilter | string | null
    companyBranchId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type RoleWhereInput = {
    AND?: Enumerable<RoleWhereInput>
    OR?: Enumerable<RoleWhereInput>
    NOT?: Enumerable<RoleWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = {
    id?: string
  }

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoleScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoleScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type Role_CompanyWhereInput = {
    AND?: Enumerable<Role_CompanyWhereInput>
    OR?: Enumerable<Role_CompanyWhereInput>
    NOT?: Enumerable<Role_CompanyWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    access?: JsonFilter
    status?: IntFilter | number
    users?: UserListRelationFilter
    companyBranch?: XOR<CompanyBranchRelationFilter, CompanyBranchWhereInput> | null
    companyBranchId?: UuidNullableFilter | string | null
  }

  export type Role_CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    access?: SortOrder
    status?: SortOrder
    users?: UserOrderByRelationAggregateInput
    companyBranch?: CompanyBranchOrderByWithRelationInput
    companyBranchId?: SortOrder
  }

  export type Role_CompanyWhereUniqueInput = {
    id?: string
  }

  export type Role_CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    access?: SortOrder
    status?: SortOrder
    companyBranchId?: SortOrder
    _count?: Role_CompanyCountOrderByAggregateInput
    _avg?: Role_CompanyAvgOrderByAggregateInput
    _max?: Role_CompanyMaxOrderByAggregateInput
    _min?: Role_CompanyMinOrderByAggregateInput
    _sum?: Role_CompanySumOrderByAggregateInput
  }

  export type Role_CompanyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Role_CompanyScalarWhereWithAggregatesInput>
    OR?: Enumerable<Role_CompanyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Role_CompanyScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    access?: JsonWithAggregatesFilter
    status?: IntWithAggregatesFilter | number
    companyBranchId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type ProvinceWhereInput = {
    AND?: Enumerable<ProvinceWhereInput>
    OR?: Enumerable<ProvinceWhereInput>
    NOT?: Enumerable<ProvinceWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    district?: DistrictListRelationFilter
  }

  export type ProvinceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    district?: DistrictOrderByRelationAggregateInput
  }

  export type ProvinceWhereUniqueInput = {
    id?: string
  }

  export type ProvinceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ProvinceCountOrderByAggregateInput
    _max?: ProvinceMaxOrderByAggregateInput
    _min?: ProvinceMinOrderByAggregateInput
  }

  export type ProvinceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProvinceScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProvinceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProvinceScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type DistrictWhereInput = {
    AND?: Enumerable<DistrictWhereInput>
    OR?: Enumerable<DistrictWhereInput>
    NOT?: Enumerable<DistrictWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    provinceId?: UuidFilter | string
    province?: XOR<ProvinceRelationFilter, ProvinceWhereInput>
    amphoe?: AmphoeListRelationFilter
  }

  export type DistrictOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
    province?: ProvinceOrderByWithRelationInput
    amphoe?: AmphoeOrderByRelationAggregateInput
  }

  export type DistrictWhereUniqueInput = {
    id?: string
  }

  export type DistrictOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
    _count?: DistrictCountOrderByAggregateInput
    _max?: DistrictMaxOrderByAggregateInput
    _min?: DistrictMinOrderByAggregateInput
  }

  export type DistrictScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DistrictScalarWhereWithAggregatesInput>
    OR?: Enumerable<DistrictScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DistrictScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    provinceId?: UuidWithAggregatesFilter | string
  }

  export type AmphoeWhereInput = {
    AND?: Enumerable<AmphoeWhereInput>
    OR?: Enumerable<AmphoeWhereInput>
    NOT?: Enumerable<AmphoeWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    districtId?: UuidFilter | string
    zipcode?: StringNullableFilter | string | null
    district?: XOR<DistrictRelationFilter, DistrictWhereInput>
  }

  export type AmphoeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    districtId?: SortOrder
    zipcode?: SortOrder
    district?: DistrictOrderByWithRelationInput
  }

  export type AmphoeWhereUniqueInput = {
    id?: string
  }

  export type AmphoeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    districtId?: SortOrder
    zipcode?: SortOrder
    _count?: AmphoeCountOrderByAggregateInput
    _max?: AmphoeMaxOrderByAggregateInput
    _min?: AmphoeMinOrderByAggregateInput
  }

  export type AmphoeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AmphoeScalarWhereWithAggregatesInput>
    OR?: Enumerable<AmphoeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AmphoeScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    districtId?: UuidWithAggregatesFilter | string
    zipcode?: StringNullableWithAggregatesFilter | string | null
  }

  export type mas_positionWhereInput = {
    AND?: Enumerable<mas_positionWhereInput>
    OR?: Enumerable<mas_positionWhereInput>
    NOT?: Enumerable<mas_positionWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    level?: IntFilter | number
    Company?: XOR<CompanyRelationFilter, CompanyWhereInput> | null
    CompanyId?: UuidNullableFilter | string | null
  }

  export type mas_positionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    Company?: CompanyOrderByWithRelationInput
    CompanyId?: SortOrder
  }

  export type mas_positionWhereUniqueInput = {
    id?: string
  }

  export type mas_positionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    CompanyId?: SortOrder
    _count?: mas_positionCountOrderByAggregateInput
    _avg?: mas_positionAvgOrderByAggregateInput
    _max?: mas_positionMaxOrderByAggregateInput
    _min?: mas_positionMinOrderByAggregateInput
    _sum?: mas_positionSumOrderByAggregateInput
  }

  export type mas_positionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mas_positionScalarWhereWithAggregatesInput>
    OR?: Enumerable<mas_positionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mas_positionScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    level?: IntWithAggregatesFilter | number
    CompanyId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type mas_positionlevel1WhereInput = {
    AND?: Enumerable<mas_positionlevel1WhereInput>
    OR?: Enumerable<mas_positionlevel1WhereInput>
    NOT?: Enumerable<mas_positionlevel1WhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    level?: IntFilter | number
    code?: StringFilter | string
    type?: StringFilter | string
    mas_positionlevel2?: Mas_positionlevel2ListRelationFilter
    Company?: XOR<CompanyRelationFilter, CompanyWhereInput> | null
    CompanyId?: UuidNullableFilter | string | null
    Position_user?: Position_userListRelationFilter
  }

  export type mas_positionlevel1OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    mas_positionlevel2?: mas_positionlevel2OrderByRelationAggregateInput
    Company?: CompanyOrderByWithRelationInput
    CompanyId?: SortOrder
    Position_user?: Position_userOrderByRelationAggregateInput
  }

  export type mas_positionlevel1WhereUniqueInput = {
    id?: string
  }

  export type mas_positionlevel1OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    CompanyId?: SortOrder
    _count?: mas_positionlevel1CountOrderByAggregateInput
    _avg?: mas_positionlevel1AvgOrderByAggregateInput
    _max?: mas_positionlevel1MaxOrderByAggregateInput
    _min?: mas_positionlevel1MinOrderByAggregateInput
    _sum?: mas_positionlevel1SumOrderByAggregateInput
  }

  export type mas_positionlevel1ScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mas_positionlevel1ScalarWhereWithAggregatesInput>
    OR?: Enumerable<mas_positionlevel1ScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mas_positionlevel1ScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    level?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    CompanyId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type mas_positionlevel2WhereInput = {
    AND?: Enumerable<mas_positionlevel2WhereInput>
    OR?: Enumerable<mas_positionlevel2WhereInput>
    NOT?: Enumerable<mas_positionlevel2WhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    level?: IntFilter | number
    code?: StringFilter | string
    type?: StringFilter | string
    positionlevel1_id?: UuidNullableFilter | string | null
    mas_positionlevel1?: XOR<Mas_positionlevel1RelationFilter, mas_positionlevel1WhereInput> | null
    mas_positionlevel3?: Mas_positionlevel3ListRelationFilter
    Company?: XOR<CompanyRelationFilter, CompanyWhereInput> | null
    CompanyId?: UuidNullableFilter | string | null
    position_user?: Position_userListRelationFilter
  }

  export type mas_positionlevel2OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    positionlevel1_id?: SortOrder
    mas_positionlevel1?: mas_positionlevel1OrderByWithRelationInput
    mas_positionlevel3?: mas_positionlevel3OrderByRelationAggregateInput
    Company?: CompanyOrderByWithRelationInput
    CompanyId?: SortOrder
    position_user?: Position_userOrderByRelationAggregateInput
  }

  export type mas_positionlevel2WhereUniqueInput = {
    id?: string
  }

  export type mas_positionlevel2OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    positionlevel1_id?: SortOrder
    CompanyId?: SortOrder
    _count?: mas_positionlevel2CountOrderByAggregateInput
    _avg?: mas_positionlevel2AvgOrderByAggregateInput
    _max?: mas_positionlevel2MaxOrderByAggregateInput
    _min?: mas_positionlevel2MinOrderByAggregateInput
    _sum?: mas_positionlevel2SumOrderByAggregateInput
  }

  export type mas_positionlevel2ScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mas_positionlevel2ScalarWhereWithAggregatesInput>
    OR?: Enumerable<mas_positionlevel2ScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mas_positionlevel2ScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    level?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    positionlevel1_id?: UuidNullableWithAggregatesFilter | string | null
    CompanyId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type mas_positionlevel3WhereInput = {
    AND?: Enumerable<mas_positionlevel3WhereInput>
    OR?: Enumerable<mas_positionlevel3WhereInput>
    NOT?: Enumerable<mas_positionlevel3WhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    level?: IntFilter | number
    code?: StringFilter | string
    type?: StringFilter | string
    positionlevel2_id?: UuidNullableFilter | string | null
    mas_positionlevel2?: XOR<Mas_positionlevel2RelationFilter, mas_positionlevel2WhereInput> | null
    Company?: XOR<CompanyRelationFilter, CompanyWhereInput> | null
    CompanyId?: UuidNullableFilter | string | null
    Position_user?: Position_userListRelationFilter
  }

  export type mas_positionlevel3OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    positionlevel2_id?: SortOrder
    mas_positionlevel2?: mas_positionlevel2OrderByWithRelationInput
    Company?: CompanyOrderByWithRelationInput
    CompanyId?: SortOrder
    Position_user?: Position_userOrderByRelationAggregateInput
  }

  export type mas_positionlevel3WhereUniqueInput = {
    id?: string
  }

  export type mas_positionlevel3OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    positionlevel2_id?: SortOrder
    CompanyId?: SortOrder
    _count?: mas_positionlevel3CountOrderByAggregateInput
    _avg?: mas_positionlevel3AvgOrderByAggregateInput
    _max?: mas_positionlevel3MaxOrderByAggregateInput
    _min?: mas_positionlevel3MinOrderByAggregateInput
    _sum?: mas_positionlevel3SumOrderByAggregateInput
  }

  export type mas_positionlevel3ScalarWhereWithAggregatesInput = {
    AND?: Enumerable<mas_positionlevel3ScalarWhereWithAggregatesInput>
    OR?: Enumerable<mas_positionlevel3ScalarWhereWithAggregatesInput>
    NOT?: Enumerable<mas_positionlevel3ScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    level?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    positionlevel2_id?: UuidNullableWithAggregatesFilter | string | null
    CompanyId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type Position_userWhereInput = {
    AND?: Enumerable<Position_userWhereInput>
    OR?: Enumerable<Position_userWhereInput>
    NOT?: Enumerable<Position_userWhereInput>
    id?: UuidFilter | string
    user_id?: UuidNullableFilter | string | null
    position1_id?: UuidNullableFilter | string | null
    position2_id?: UuidNullableFilter | string | null
    position3_id?: UuidNullableFilter | string | null
    role?: StringNullableFilter | string | null
    headderId?: UuidNullableFilter | string | null
    header?: XOR<UserRelationFilter, UserWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    mas_positionlevel1?: XOR<Mas_positionlevel1RelationFilter, mas_positionlevel1WhereInput> | null
    mas_positionlevel2?: XOR<Mas_positionlevel2RelationFilter, mas_positionlevel2WhereInput> | null
    mas_positionlevel3?: XOR<Mas_positionlevel3RelationFilter, mas_positionlevel3WhereInput> | null
  }

  export type Position_userOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    position1_id?: SortOrder
    position2_id?: SortOrder
    position3_id?: SortOrder
    role?: SortOrder
    headderId?: SortOrder
    header?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    mas_positionlevel1?: mas_positionlevel1OrderByWithRelationInput
    mas_positionlevel2?: mas_positionlevel2OrderByWithRelationInput
    mas_positionlevel3?: mas_positionlevel3OrderByWithRelationInput
  }

  export type Position_userWhereUniqueInput = {
    id?: string
    user_id?: string
  }

  export type Position_userOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    position1_id?: SortOrder
    position2_id?: SortOrder
    position3_id?: SortOrder
    role?: SortOrder
    headderId?: SortOrder
    _count?: Position_userCountOrderByAggregateInput
    _max?: Position_userMaxOrderByAggregateInput
    _min?: Position_userMinOrderByAggregateInput
  }

  export type Position_userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Position_userScalarWhereWithAggregatesInput>
    OR?: Enumerable<Position_userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Position_userScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    user_id?: UuidNullableWithAggregatesFilter | string | null
    position1_id?: UuidNullableWithAggregatesFilter | string | null
    position2_id?: UuidNullableWithAggregatesFilter | string | null
    position3_id?: UuidNullableWithAggregatesFilter | string | null
    role?: StringNullableWithAggregatesFilter | string | null
    headderId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type holiday_dateWhereInput = {
    AND?: Enumerable<holiday_dateWhereInput>
    OR?: Enumerable<holiday_dateWhereInput>
    NOT?: Enumerable<holiday_dateWhereInput>
    id?: UuidFilter | string
    holiday_name?: StringNullableFilter | string | null
    day?: IntFilter | number
    month?: IntFilter | number
    yaer?: IntFilter | number
    Company?: XOR<CompanyRelationFilter, CompanyWhereInput> | null
    CompanyId?: UuidNullableFilter | string | null
  }

  export type holiday_dateOrderByWithRelationInput = {
    id?: SortOrder
    holiday_name?: SortOrder
    day?: SortOrder
    month?: SortOrder
    yaer?: SortOrder
    Company?: CompanyOrderByWithRelationInput
    CompanyId?: SortOrder
  }

  export type holiday_dateWhereUniqueInput = {
    id?: string
  }

  export type holiday_dateOrderByWithAggregationInput = {
    id?: SortOrder
    holiday_name?: SortOrder
    day?: SortOrder
    month?: SortOrder
    yaer?: SortOrder
    CompanyId?: SortOrder
    _count?: holiday_dateCountOrderByAggregateInput
    _avg?: holiday_dateAvgOrderByAggregateInput
    _max?: holiday_dateMaxOrderByAggregateInput
    _min?: holiday_dateMinOrderByAggregateInput
    _sum?: holiday_dateSumOrderByAggregateInput
  }

  export type holiday_dateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<holiday_dateScalarWhereWithAggregatesInput>
    OR?: Enumerable<holiday_dateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<holiday_dateScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    holiday_name?: StringNullableWithAggregatesFilter | string | null
    day?: IntWithAggregatesFilter | number
    month?: IntWithAggregatesFilter | number
    yaer?: IntWithAggregatesFilter | number
    CompanyId?: UuidNullableWithAggregatesFilter | string | null
  }

  export type holiday_yearWhereInput = {
    AND?: Enumerable<holiday_yearWhereInput>
    OR?: Enumerable<holiday_yearWhereInput>
    NOT?: Enumerable<holiday_yearWhereInput>
    id?: UuidFilter | string
    day?: IntFilter | number
    month?: IntFilter | number
    year?: IntFilter | number
    holiday_name?: StringNullableFilter | string | null
  }

  export type holiday_yearOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    holiday_name?: SortOrder
  }

  export type holiday_yearWhereUniqueInput = {
    id?: string
  }

  export type holiday_yearOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    holiday_name?: SortOrder
    _count?: holiday_yearCountOrderByAggregateInput
    _avg?: holiday_yearAvgOrderByAggregateInput
    _max?: holiday_yearMaxOrderByAggregateInput
    _min?: holiday_yearMinOrderByAggregateInput
    _sum?: holiday_yearSumOrderByAggregateInput
  }

  export type holiday_yearScalarWhereWithAggregatesInput = {
    AND?: Enumerable<holiday_yearScalarWhereWithAggregatesInput>
    OR?: Enumerable<holiday_yearScalarWhereWithAggregatesInput>
    NOT?: Enumerable<holiday_yearScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    day?: IntWithAggregatesFilter | number
    month?: IntWithAggregatesFilter | number
    year?: IntWithAggregatesFilter | number
    holiday_name?: StringNullableWithAggregatesFilter | string | null
  }

  export type CompanyCreateInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCompanyInput
    branch?: CompanyBranchCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    branch?: CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1UncheckedCreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateUncheckedCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCompanyNestedInput
    branch?: CompanyBranchUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    branch?: CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UncheckedUpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUncheckedUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyBranchCreateInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    address_2?: string | null
    city: string
    state: string
    zip: string
    country?: string | null
    tel?: string | null
    fax?: string | null
    website?: string | null
    lat?: string | null
    lng?: string | null
    email?: string | null
    email_2?: string | null
    company_type?: string | null
    sub_company_type?: string | null
    registeredamount?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_instragram?: string | null
    social_line?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchInput
    users?: UserCreateNestedManyWithoutCompanyBranchInput
    Role_Company?: Role_CompanyCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUncheckedCreateInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    address_2?: string | null
    city: string
    state: string
    zip: string
    country?: string | null
    tel?: string | null
    fax?: string | null
    website?: string | null
    lat?: string | null
    lng?: string | null
    email?: string | null
    email_2?: string | null
    company_type?: string | null
    sub_company_type?: string | null
    registeredamount?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_instragram?: string | null
    social_line?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyBranchInput
    Role_Company?: Role_CompanyUncheckedCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_2?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    sub_company_type?: NullableStringFieldUpdateOperationsInput | string | null
    registeredamount?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_instragram?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchNestedInput
    users?: UserUpdateManyWithoutCompanyBranchNestedInput
    Role_Company?: Role_CompanyUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_2?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    sub_company_type?: NullableStringFieldUpdateOperationsInput | string | null
    registeredamount?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_instragram?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyBranchNestedInput
    Role_Company?: Role_CompanyUncheckedUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchCreateManyInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    address_2?: string | null
    city: string
    state: string
    zip: string
    country?: string | null
    tel?: string | null
    fax?: string | null
    website?: string | null
    lat?: string | null
    lng?: string | null
    email?: string | null
    email_2?: string | null
    company_type?: string | null
    sub_company_type?: string | null
    registeredamount?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_instragram?: string | null
    social_line?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: string | null
  }

  export type CompanyBranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_2?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    sub_company_type?: NullableStringFieldUpdateOperationsInput | string | null
    registeredamount?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_instragram?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyBranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_2?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    sub_company_type?: NullableStringFieldUpdateOperationsInput | string | null
    registeredamount?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_instragram?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateInput = {
    id: string
    bio?: string | null
    firstname_th?: string | null
    lastname_th?: string | null
    firstname_en?: string | null
    lastname_en?: string | null
    nickname?: string | null
    blood_type?: string | null
    employee_status?: string | null
    start_date_work?: Date | string | null
    avatar?: string | null
    dob?: Date | string | null
    age?: string | null
    relationship?: string | null
    shirt_size?: string | null
    prefix_th?: string | null
    prefix_en?: string | null
    citizen_id?: string | null
    social_id?: string | null
    staff_status?: string | null
    tel?: string | null
    address?: string | null
    gender?: string | null
    staff_code?: string | null
    religion?: string | null
    user: UserCreateNestedOneWithoutProfileInput
    citizen_addressnumber?: string | null
    citizen_address?: string | null
    citizen_country?: string | null
    citizen_province?: string | null
    citizen_district?: string | null
    citizen_state?: string | null
    citizen_zipcode?: string | null
    citizen_tel?: string | null
    contract_sameCitizen?: boolean
    contract_addressnumber?: string | null
    contract_address?: string | null
    contract_country?: string | null
    contract_province?: string | null
    contract_district?: string | null
    contract_state?: string | null
    contract_zipcode?: string | null
    contract_email?: string | null
    contract_companyemail?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_line?: string | null
    social_telegram?: string | null
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    bio?: string | null
    firstname_th?: string | null
    lastname_th?: string | null
    firstname_en?: string | null
    lastname_en?: string | null
    nickname?: string | null
    blood_type?: string | null
    employee_status?: string | null
    start_date_work?: Date | string | null
    avatar?: string | null
    dob?: Date | string | null
    age?: string | null
    relationship?: string | null
    shirt_size?: string | null
    prefix_th?: string | null
    prefix_en?: string | null
    citizen_id?: string | null
    social_id?: string | null
    staff_status?: string | null
    tel?: string | null
    address?: string | null
    gender?: string | null
    staff_code?: string | null
    religion?: string | null
    userId: string
    citizen_addressnumber?: string | null
    citizen_address?: string | null
    citizen_country?: string | null
    citizen_province?: string | null
    citizen_district?: string | null
    citizen_state?: string | null
    citizen_zipcode?: string | null
    citizen_tel?: string | null
    contract_sameCitizen?: boolean
    contract_addressnumber?: string | null
    contract_address?: string | null
    contract_country?: string | null
    contract_province?: string | null
    contract_district?: string | null
    contract_state?: string | null
    contract_zipcode?: string | null
    contract_email?: string | null
    contract_companyemail?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_line?: string | null
    social_telegram?: string | null
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_th?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_th?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_en?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_en?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date_work?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    shirt_size?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_th?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_en?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_id?: NullableStringFieldUpdateOperationsInput | string | null
    social_id?: NullableStringFieldUpdateOperationsInput | string | null
    staff_status?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    citizen_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_address?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_country?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_province?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_district?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_state?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_tel?: NullableStringFieldUpdateOperationsInput | string | null
    contract_sameCitizen?: BoolFieldUpdateOperationsInput | boolean
    contract_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    contract_country?: NullableStringFieldUpdateOperationsInput | string | null
    contract_province?: NullableStringFieldUpdateOperationsInput | string | null
    contract_district?: NullableStringFieldUpdateOperationsInput | string | null
    contract_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    contract_email?: NullableStringFieldUpdateOperationsInput | string | null
    contract_companyemail?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    social_telegram?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_th?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_th?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_en?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_en?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date_work?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    shirt_size?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_th?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_en?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_id?: NullableStringFieldUpdateOperationsInput | string | null
    social_id?: NullableStringFieldUpdateOperationsInput | string | null
    staff_status?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    citizen_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_address?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_country?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_province?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_district?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_state?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_tel?: NullableStringFieldUpdateOperationsInput | string | null
    contract_sameCitizen?: BoolFieldUpdateOperationsInput | boolean
    contract_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    contract_country?: NullableStringFieldUpdateOperationsInput | string | null
    contract_province?: NullableStringFieldUpdateOperationsInput | string | null
    contract_district?: NullableStringFieldUpdateOperationsInput | string | null
    contract_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    contract_email?: NullableStringFieldUpdateOperationsInput | string | null
    contract_companyemail?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    social_telegram?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateManyInput = {
    id: string
    bio?: string | null
    firstname_th?: string | null
    lastname_th?: string | null
    firstname_en?: string | null
    lastname_en?: string | null
    nickname?: string | null
    blood_type?: string | null
    employee_status?: string | null
    start_date_work?: Date | string | null
    avatar?: string | null
    dob?: Date | string | null
    age?: string | null
    relationship?: string | null
    shirt_size?: string | null
    prefix_th?: string | null
    prefix_en?: string | null
    citizen_id?: string | null
    social_id?: string | null
    staff_status?: string | null
    tel?: string | null
    address?: string | null
    gender?: string | null
    staff_code?: string | null
    religion?: string | null
    userId: string
    citizen_addressnumber?: string | null
    citizen_address?: string | null
    citizen_country?: string | null
    citizen_province?: string | null
    citizen_district?: string | null
    citizen_state?: string | null
    citizen_zipcode?: string | null
    citizen_tel?: string | null
    contract_sameCitizen?: boolean
    contract_addressnumber?: string | null
    contract_address?: string | null
    contract_country?: string | null
    contract_province?: string | null
    contract_district?: string | null
    contract_state?: string | null
    contract_zipcode?: string | null
    contract_email?: string | null
    contract_companyemail?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_line?: string | null
    social_telegram?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_th?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_th?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_en?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_en?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date_work?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    shirt_size?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_th?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_en?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_id?: NullableStringFieldUpdateOperationsInput | string | null
    social_id?: NullableStringFieldUpdateOperationsInput | string | null
    staff_status?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_address?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_country?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_province?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_district?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_state?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_tel?: NullableStringFieldUpdateOperationsInput | string | null
    contract_sameCitizen?: BoolFieldUpdateOperationsInput | boolean
    contract_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    contract_country?: NullableStringFieldUpdateOperationsInput | string | null
    contract_province?: NullableStringFieldUpdateOperationsInput | string | null
    contract_district?: NullableStringFieldUpdateOperationsInput | string | null
    contract_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    contract_email?: NullableStringFieldUpdateOperationsInput | string | null
    contract_companyemail?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    social_telegram?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_th?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_th?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_en?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_en?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date_work?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    shirt_size?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_th?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_en?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_id?: NullableStringFieldUpdateOperationsInput | string | null
    social_id?: NullableStringFieldUpdateOperationsInput | string | null
    staff_status?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    citizen_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_address?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_country?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_province?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_district?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_state?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_tel?: NullableStringFieldUpdateOperationsInput | string | null
    contract_sameCitizen?: BoolFieldUpdateOperationsInput | boolean
    contract_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    contract_country?: NullableStringFieldUpdateOperationsInput | string | null
    contract_province?: NullableStringFieldUpdateOperationsInput | string | null
    contract_district?: NullableStringFieldUpdateOperationsInput | string | null
    contract_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    contract_email?: NullableStringFieldUpdateOperationsInput | string | null
    contract_companyemail?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    social_telegram?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id: string
    email: string
    password: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    company?: CompanyCreateNestedManyWithoutOwnerInput
    companyBranch?: CompanyBranchCreateNestedOneWithoutUsersInput
    Role_Company?: Role_CompanyCreateNestedOneWithoutUsersInput
    Position_user?: Position_userCreateNestedOneWithoutUserInput
    henchman?: Position_userCreateNestedManyWithoutHeaderInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    password: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    roleId?: string | null
    RoleCompanyID?: string | null
    company?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companyBranchId?: string | null
    Position_user?: Position_userUncheckedCreateNestedOneWithoutUserInput
    henchman?: Position_userUncheckedCreateNestedManyWithoutHeaderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    company?: CompanyUpdateManyWithoutOwnerNestedInput
    companyBranch?: CompanyBranchUpdateOneWithoutUsersNestedInput
    Role_Company?: Role_CompanyUpdateOneWithoutUsersNestedInput
    Position_user?: Position_userUpdateOneWithoutUserNestedInput
    henchman?: Position_userUpdateManyWithoutHeaderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    RoleCompanyID?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    Position_user?: Position_userUncheckedUpdateOneWithoutUserNestedInput
    henchman?: Position_userUncheckedUpdateManyWithoutHeaderNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    password: string
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    roleId?: string | null
    RoleCompanyID?: string | null
    companyBranchId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    RoleCompanyID?: NullableStringFieldUpdateOperationsInput | string | null
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleCreateInput = {
    id: string
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id: string
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Role_CompanyCreateInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    status: number
    users?: UserCreateNestedManyWithoutRole_CompanyInput
    companyBranch?: CompanyBranchCreateNestedOneWithoutRole_CompanyInput
  }

  export type Role_CompanyUncheckedCreateInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    status: number
    users?: UserUncheckedCreateNestedManyWithoutRole_CompanyInput
    companyBranchId?: string | null
  }

  export type Role_CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    status?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutRole_CompanyNestedInput
    companyBranch?: CompanyBranchUpdateOneWithoutRole_CompanyNestedInput
  }

  export type Role_CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    status?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutRole_CompanyNestedInput
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Role_CompanyCreateManyInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    status: number
    companyBranchId?: string | null
  }

  export type Role_CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    status?: IntFieldUpdateOperationsInput | number
  }

  export type Role_CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    status?: IntFieldUpdateOperationsInput | number
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProvinceCreateInput = {
    id: string
    name: string
    district?: DistrictCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateInput = {
    id: string
    name: string
    district?: DistrictUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: DistrictUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: DistrictUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceCreateManyInput = {
    id: string
    name: string
  }

  export type ProvinceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictCreateInput = {
    id: string
    name: string
    province: ProvinceCreateNestedOneWithoutDistrictInput
    amphoe?: AmphoeCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateInput = {
    id: string
    name: string
    provinceId: string
    amphoe?: AmphoeUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    province?: ProvinceUpdateOneRequiredWithoutDistrictNestedInput
    amphoe?: AmphoeUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: StringFieldUpdateOperationsInput | string
    amphoe?: AmphoeUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictCreateManyInput = {
    id: string
    name: string
    provinceId: string
  }

  export type DistrictUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: StringFieldUpdateOperationsInput | string
  }

  export type AmphoeCreateInput = {
    id: string
    name: string
    zipcode?: string | null
    district: DistrictCreateNestedOneWithoutAmphoeInput
  }

  export type AmphoeUncheckedCreateInput = {
    id: string
    name: string
    districtId: string
    zipcode?: string | null
  }

  export type AmphoeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    district?: DistrictUpdateOneRequiredWithoutAmphoeNestedInput
  }

  export type AmphoeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    districtId?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmphoeCreateManyInput = {
    id: string
    name: string
    districtId: string
    zipcode?: string | null
  }

  export type AmphoeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmphoeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    districtId?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mas_positionCreateInput = {
    id: string
    name: string
    level: number
    Company?: CompanyCreateNestedOneWithoutMas_positionInput
  }

  export type mas_positionUncheckedCreateInput = {
    id: string
    name: string
    level: number
    CompanyId?: string | null
  }

  export type mas_positionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    Company?: CompanyUpdateOneWithoutMas_positionNestedInput
  }

  export type mas_positionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mas_positionCreateManyInput = {
    id: string
    name: string
    level: number
    CompanyId?: string | null
  }

  export type mas_positionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type mas_positionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mas_positionlevel1CreateInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel2?: mas_positionlevel2CreateNestedManyWithoutMas_positionlevel1Input
    Company?: CompanyCreateNestedOneWithoutMas_positionlevel1Input
    Position_user?: Position_userCreateNestedManyWithoutMas_positionlevel1Input
  }

  export type mas_positionlevel1UncheckedCreateInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel2?: mas_positionlevel2UncheckedCreateNestedManyWithoutMas_positionlevel1Input
    CompanyId?: string | null
    Position_user?: Position_userUncheckedCreateNestedManyWithoutMas_positionlevel1Input
  }

  export type mas_positionlevel1UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel2?: mas_positionlevel2UpdateManyWithoutMas_positionlevel1NestedInput
    Company?: CompanyUpdateOneWithoutMas_positionlevel1NestedInput
    Position_user?: Position_userUpdateManyWithoutMas_positionlevel1NestedInput
  }

  export type mas_positionlevel1UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel2?: mas_positionlevel2UncheckedUpdateManyWithoutMas_positionlevel1NestedInput
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    Position_user?: Position_userUncheckedUpdateManyWithoutMas_positionlevel1NestedInput
  }

  export type mas_positionlevel1CreateManyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    CompanyId?: string | null
  }

  export type mas_positionlevel1UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type mas_positionlevel1UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mas_positionlevel2CreateInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel1?: mas_positionlevel1CreateNestedOneWithoutMas_positionlevel2Input
    mas_positionlevel3?: mas_positionlevel3CreateNestedManyWithoutMas_positionlevel2Input
    Company?: CompanyCreateNestedOneWithoutMas_positionlevel2Input
    position_user?: Position_userCreateNestedManyWithoutMas_positionlevel2Input
  }

  export type mas_positionlevel2UncheckedCreateInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel1_id?: string | null
    mas_positionlevel3?: mas_positionlevel3UncheckedCreateNestedManyWithoutMas_positionlevel2Input
    CompanyId?: string | null
    position_user?: Position_userUncheckedCreateNestedManyWithoutMas_positionlevel2Input
  }

  export type mas_positionlevel2UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel1?: mas_positionlevel1UpdateOneWithoutMas_positionlevel2NestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateManyWithoutMas_positionlevel2NestedInput
    Company?: CompanyUpdateOneWithoutMas_positionlevel2NestedInput
    position_user?: Position_userUpdateManyWithoutMas_positionlevel2NestedInput
  }

  export type mas_positionlevel2UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionlevel1_id?: NullableStringFieldUpdateOperationsInput | string | null
    mas_positionlevel3?: mas_positionlevel3UncheckedUpdateManyWithoutMas_positionlevel2NestedInput
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    position_user?: Position_userUncheckedUpdateManyWithoutMas_positionlevel2NestedInput
  }

  export type mas_positionlevel2CreateManyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel1_id?: string | null
    CompanyId?: string | null
  }

  export type mas_positionlevel2UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type mas_positionlevel2UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionlevel1_id?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mas_positionlevel3CreateInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel2?: mas_positionlevel2CreateNestedOneWithoutMas_positionlevel3Input
    Company?: CompanyCreateNestedOneWithoutMas_positionlevel3Input
    Position_user?: Position_userCreateNestedManyWithoutMas_positionlevel3Input
  }

  export type mas_positionlevel3UncheckedCreateInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel2_id?: string | null
    CompanyId?: string | null
    Position_user?: Position_userUncheckedCreateNestedManyWithoutMas_positionlevel3Input
  }

  export type mas_positionlevel3UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel2?: mas_positionlevel2UpdateOneWithoutMas_positionlevel3NestedInput
    Company?: CompanyUpdateOneWithoutMas_positionlevel3NestedInput
    Position_user?: Position_userUpdateManyWithoutMas_positionlevel3NestedInput
  }

  export type mas_positionlevel3UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionlevel2_id?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    Position_user?: Position_userUncheckedUpdateManyWithoutMas_positionlevel3NestedInput
  }

  export type mas_positionlevel3CreateManyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel2_id?: string | null
    CompanyId?: string | null
  }

  export type mas_positionlevel3UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type mas_positionlevel3UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionlevel2_id?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Position_userCreateInput = {
    id: string
    role?: string | null
    header?: UserCreateNestedOneWithoutHenchmanInput
    user?: UserCreateNestedOneWithoutPosition_userInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedOneWithoutPosition_userInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedOneWithoutPosition_userInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedOneWithoutPosition_userInput
  }

  export type Position_userUncheckedCreateInput = {
    id: string
    user_id?: string | null
    position1_id?: string | null
    position2_id?: string | null
    position3_id?: string | null
    role?: string | null
    headderId?: string | null
  }

  export type Position_userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    header?: UserUpdateOneWithoutHenchmanNestedInput
    user?: UserUpdateOneWithoutPosition_userNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateOneWithoutPosition_userNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateOneWithoutPosition_userNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateOneWithoutPosition_userNestedInput
  }

  export type Position_userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    position1_id?: NullableStringFieldUpdateOperationsInput | string | null
    position2_id?: NullableStringFieldUpdateOperationsInput | string | null
    position3_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    headderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Position_userCreateManyInput = {
    id: string
    user_id?: string | null
    position1_id?: string | null
    position2_id?: string | null
    position3_id?: string | null
    role?: string | null
    headderId?: string | null
  }

  export type Position_userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Position_userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    position1_id?: NullableStringFieldUpdateOperationsInput | string | null
    position2_id?: NullableStringFieldUpdateOperationsInput | string | null
    position3_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    headderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type holiday_dateCreateInput = {
    id: string
    holiday_name?: string | null
    day: number
    month: number
    yaer: number
    Company?: CompanyCreateNestedOneWithoutHoliday_dateInput
  }

  export type holiday_dateUncheckedCreateInput = {
    id: string
    holiday_name?: string | null
    day: number
    month: number
    yaer: number
    CompanyId?: string | null
  }

  export type holiday_dateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    yaer?: IntFieldUpdateOperationsInput | number
    Company?: CompanyUpdateOneWithoutHoliday_dateNestedInput
  }

  export type holiday_dateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    yaer?: IntFieldUpdateOperationsInput | number
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type holiday_dateCreateManyInput = {
    id: string
    holiday_name?: string | null
    day: number
    month: number
    yaer: number
    CompanyId?: string | null
  }

  export type holiday_dateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    yaer?: IntFieldUpdateOperationsInput | number
  }

  export type holiday_dateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    yaer?: IntFieldUpdateOperationsInput | number
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type holiday_yearCreateInput = {
    id: string
    day: number
    month: number
    year: number
    holiday_name?: string | null
  }

  export type holiday_yearUncheckedCreateInput = {
    id: string
    day: number
    month: number
    year: number
    holiday_name?: string | null
  }

  export type holiday_yearUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type holiday_yearUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type holiday_yearCreateManyInput = {
    id: string
    day: number
    month: number
    year: number
    holiday_name?: string | null
  }

  export type holiday_yearUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type holiday_yearUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CompanyBranchListRelationFilter = {
    every?: CompanyBranchWhereInput
    some?: CompanyBranchWhereInput
    none?: CompanyBranchWhereInput
  }

  export type Mas_positionlevel3ListRelationFilter = {
    every?: mas_positionlevel3WhereInput
    some?: mas_positionlevel3WhereInput
    none?: mas_positionlevel3WhereInput
  }

  export type Mas_positionlevel2ListRelationFilter = {
    every?: mas_positionlevel2WhereInput
    some?: mas_positionlevel2WhereInput
    none?: mas_positionlevel2WhereInput
  }

  export type Mas_positionlevel1ListRelationFilter = {
    every?: mas_positionlevel1WhereInput
    some?: mas_positionlevel1WhereInput
    none?: mas_positionlevel1WhereInput
  }

  export type Holiday_dateListRelationFilter = {
    every?: holiday_dateWhereInput
    some?: holiday_dateWhereInput
    none?: holiday_dateWhereInput
  }

  export type Mas_positionListRelationFilter = {
    every?: mas_positionWhereInput
    some?: mas_positionWhereInput
    none?: mas_positionWhereInput
  }

  export type CompanyBranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mas_positionlevel3OrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mas_positionlevel2OrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mas_positionlevel1OrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type holiday_dateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mas_positionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    userlimit?: SortOrder
    company_registration_id?: SortOrder
    company_vat_id?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    userlimit?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    userlimit?: SortOrder
    company_registration_id?: SortOrder
    company_vat_id?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    userlimit?: SortOrder
    company_registration_id?: SortOrder
    company_vat_id?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    userlimit?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type UuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableFilter | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type Role_CompanyListRelationFilter = {
    every?: Role_CompanyWhereInput
    some?: Role_CompanyWhereInput
    none?: Role_CompanyWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Role_CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyBranchCountOrderByAggregateInput = {
    id?: SortOrder
    isMainbranch?: SortOrder
    name?: SortOrder
    address?: SortOrder
    address_2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    tel?: SortOrder
    fax?: SortOrder
    website?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    email?: SortOrder
    email_2?: SortOrder
    company_type?: SortOrder
    sub_company_type?: SortOrder
    registeredamount?: SortOrder
    social_facebook?: SortOrder
    social_likedin?: SortOrder
    social_instragram?: SortOrder
    social_line?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyBranchMaxOrderByAggregateInput = {
    id?: SortOrder
    isMainbranch?: SortOrder
    name?: SortOrder
    address?: SortOrder
    address_2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    tel?: SortOrder
    fax?: SortOrder
    website?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    email?: SortOrder
    email_2?: SortOrder
    company_type?: SortOrder
    sub_company_type?: SortOrder
    registeredamount?: SortOrder
    social_facebook?: SortOrder
    social_likedin?: SortOrder
    social_instragram?: SortOrder
    social_line?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyBranchMinOrderByAggregateInput = {
    id?: SortOrder
    isMainbranch?: SortOrder
    name?: SortOrder
    address?: SortOrder
    address_2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    tel?: SortOrder
    fax?: SortOrder
    website?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    email?: SortOrder
    email_2?: SortOrder
    company_type?: SortOrder
    sub_company_type?: SortOrder
    registeredamount?: SortOrder
    social_facebook?: SortOrder
    social_likedin?: SortOrder
    social_instragram?: SortOrder
    social_line?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type UuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    firstname_th?: SortOrder
    lastname_th?: SortOrder
    firstname_en?: SortOrder
    lastname_en?: SortOrder
    nickname?: SortOrder
    blood_type?: SortOrder
    employee_status?: SortOrder
    start_date_work?: SortOrder
    avatar?: SortOrder
    dob?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    shirt_size?: SortOrder
    prefix_th?: SortOrder
    prefix_en?: SortOrder
    citizen_id?: SortOrder
    social_id?: SortOrder
    staff_status?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    staff_code?: SortOrder
    religion?: SortOrder
    userId?: SortOrder
    citizen_addressnumber?: SortOrder
    citizen_address?: SortOrder
    citizen_country?: SortOrder
    citizen_province?: SortOrder
    citizen_district?: SortOrder
    citizen_state?: SortOrder
    citizen_zipcode?: SortOrder
    citizen_tel?: SortOrder
    contract_sameCitizen?: SortOrder
    contract_addressnumber?: SortOrder
    contract_address?: SortOrder
    contract_country?: SortOrder
    contract_province?: SortOrder
    contract_district?: SortOrder
    contract_state?: SortOrder
    contract_zipcode?: SortOrder
    contract_email?: SortOrder
    contract_companyemail?: SortOrder
    social_facebook?: SortOrder
    social_likedin?: SortOrder
    social_line?: SortOrder
    social_telegram?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    firstname_th?: SortOrder
    lastname_th?: SortOrder
    firstname_en?: SortOrder
    lastname_en?: SortOrder
    nickname?: SortOrder
    blood_type?: SortOrder
    employee_status?: SortOrder
    start_date_work?: SortOrder
    avatar?: SortOrder
    dob?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    shirt_size?: SortOrder
    prefix_th?: SortOrder
    prefix_en?: SortOrder
    citizen_id?: SortOrder
    social_id?: SortOrder
    staff_status?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    staff_code?: SortOrder
    religion?: SortOrder
    userId?: SortOrder
    citizen_addressnumber?: SortOrder
    citizen_address?: SortOrder
    citizen_country?: SortOrder
    citizen_province?: SortOrder
    citizen_district?: SortOrder
    citizen_state?: SortOrder
    citizen_zipcode?: SortOrder
    citizen_tel?: SortOrder
    contract_sameCitizen?: SortOrder
    contract_addressnumber?: SortOrder
    contract_address?: SortOrder
    contract_country?: SortOrder
    contract_province?: SortOrder
    contract_district?: SortOrder
    contract_state?: SortOrder
    contract_zipcode?: SortOrder
    contract_email?: SortOrder
    contract_companyemail?: SortOrder
    social_facebook?: SortOrder
    social_likedin?: SortOrder
    social_line?: SortOrder
    social_telegram?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    firstname_th?: SortOrder
    lastname_th?: SortOrder
    firstname_en?: SortOrder
    lastname_en?: SortOrder
    nickname?: SortOrder
    blood_type?: SortOrder
    employee_status?: SortOrder
    start_date_work?: SortOrder
    avatar?: SortOrder
    dob?: SortOrder
    age?: SortOrder
    relationship?: SortOrder
    shirt_size?: SortOrder
    prefix_th?: SortOrder
    prefix_en?: SortOrder
    citizen_id?: SortOrder
    social_id?: SortOrder
    staff_status?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    staff_code?: SortOrder
    religion?: SortOrder
    userId?: SortOrder
    citizen_addressnumber?: SortOrder
    citizen_address?: SortOrder
    citizen_country?: SortOrder
    citizen_province?: SortOrder
    citizen_district?: SortOrder
    citizen_state?: SortOrder
    citizen_zipcode?: SortOrder
    citizen_tel?: SortOrder
    contract_sameCitizen?: SortOrder
    contract_addressnumber?: SortOrder
    contract_address?: SortOrder
    contract_country?: SortOrder
    contract_province?: SortOrder
    contract_district?: SortOrder
    contract_state?: SortOrder
    contract_zipcode?: SortOrder
    contract_email?: SortOrder
    contract_companyemail?: SortOrder
    social_facebook?: SortOrder
    social_likedin?: SortOrder
    social_line?: SortOrder
    social_telegram?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type ProfileRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type CompanyBranchRelationFilter = {
    is?: CompanyBranchWhereInput | null
    isNot?: CompanyBranchWhereInput | null
  }

  export type Role_CompanyRelationFilter = {
    is?: Role_CompanyWhereInput | null
    isNot?: Role_CompanyWhereInput | null
  }

  export type Position_userRelationFilter = {
    is?: Position_userWhereInput | null
    isNot?: Position_userWhereInput | null
  }

  export type Position_userListRelationFilter = {
    every?: Position_userWhereInput
    some?: Position_userWhereInput
    none?: Position_userWhereInput
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Position_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    islogin?: SortOrder
    isActive?: SortOrder
    isOwner?: SortOrder
    lastlogin?: SortOrder
    createdAt?: SortOrder
    roleId?: SortOrder
    RoleCompanyID?: SortOrder
    companyBranchId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    islogin?: SortOrder
    isActive?: SortOrder
    isOwner?: SortOrder
    lastlogin?: SortOrder
    createdAt?: SortOrder
    roleId?: SortOrder
    RoleCompanyID?: SortOrder
    companyBranchId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    islogin?: SortOrder
    isActive?: SortOrder
    isOwner?: SortOrder
    lastlogin?: SortOrder
    createdAt?: SortOrder
    roleId?: SortOrder
    RoleCompanyID?: SortOrder
    companyBranchId?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type Role_CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    access?: SortOrder
    status?: SortOrder
    companyBranchId?: SortOrder
  }

  export type Role_CompanyAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type Role_CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    companyBranchId?: SortOrder
  }

  export type Role_CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    companyBranchId?: SortOrder
  }

  export type Role_CompanySumOrderByAggregateInput = {
    status?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type DistrictListRelationFilter = {
    every?: DistrictWhereInput
    some?: DistrictWhereInput
    none?: DistrictWhereInput
  }

  export type DistrictOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvinceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProvinceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProvinceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProvinceRelationFilter = {
    is?: ProvinceWhereInput
    isNot?: ProvinceWhereInput
  }

  export type AmphoeListRelationFilter = {
    every?: AmphoeWhereInput
    some?: AmphoeWhereInput
    none?: AmphoeWhereInput
  }

  export type AmphoeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistrictCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
  }

  export type DistrictMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
  }

  export type DistrictMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    provinceId?: SortOrder
  }

  export type DistrictRelationFilter = {
    is?: DistrictWhereInput
    isNot?: DistrictWhereInput
  }

  export type AmphoeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    districtId?: SortOrder
    zipcode?: SortOrder
  }

  export type AmphoeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    districtId?: SortOrder
    zipcode?: SortOrder
  }

  export type AmphoeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    districtId?: SortOrder
    zipcode?: SortOrder
  }

  export type mas_positionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type mas_positionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionSumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type mas_positionlevel1CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionlevel1AvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type mas_positionlevel1MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionlevel1MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionlevel1SumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type Mas_positionlevel1RelationFilter = {
    is?: mas_positionlevel1WhereInput | null
    isNot?: mas_positionlevel1WhereInput | null
  }

  export type mas_positionlevel2CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    positionlevel1_id?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionlevel2AvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type mas_positionlevel2MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    positionlevel1_id?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionlevel2MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    positionlevel1_id?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionlevel2SumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type Mas_positionlevel2RelationFilter = {
    is?: mas_positionlevel2WhereInput | null
    isNot?: mas_positionlevel2WhereInput | null
  }

  export type mas_positionlevel3CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    positionlevel2_id?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionlevel3AvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type mas_positionlevel3MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    positionlevel2_id?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionlevel3MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    code?: SortOrder
    type?: SortOrder
    positionlevel2_id?: SortOrder
    CompanyId?: SortOrder
  }

  export type mas_positionlevel3SumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type Mas_positionlevel3RelationFilter = {
    is?: mas_positionlevel3WhereInput | null
    isNot?: mas_positionlevel3WhereInput | null
  }

  export type Position_userCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    position1_id?: SortOrder
    position2_id?: SortOrder
    position3_id?: SortOrder
    role?: SortOrder
    headderId?: SortOrder
  }

  export type Position_userMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    position1_id?: SortOrder
    position2_id?: SortOrder
    position3_id?: SortOrder
    role?: SortOrder
    headderId?: SortOrder
  }

  export type Position_userMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    position1_id?: SortOrder
    position2_id?: SortOrder
    position3_id?: SortOrder
    role?: SortOrder
    headderId?: SortOrder
  }

  export type holiday_dateCountOrderByAggregateInput = {
    id?: SortOrder
    holiday_name?: SortOrder
    day?: SortOrder
    month?: SortOrder
    yaer?: SortOrder
    CompanyId?: SortOrder
  }

  export type holiday_dateAvgOrderByAggregateInput = {
    day?: SortOrder
    month?: SortOrder
    yaer?: SortOrder
  }

  export type holiday_dateMaxOrderByAggregateInput = {
    id?: SortOrder
    holiday_name?: SortOrder
    day?: SortOrder
    month?: SortOrder
    yaer?: SortOrder
    CompanyId?: SortOrder
  }

  export type holiday_dateMinOrderByAggregateInput = {
    id?: SortOrder
    holiday_name?: SortOrder
    day?: SortOrder
    month?: SortOrder
    yaer?: SortOrder
    CompanyId?: SortOrder
  }

  export type holiday_dateSumOrderByAggregateInput = {
    day?: SortOrder
    month?: SortOrder
    yaer?: SortOrder
  }

  export type holiday_yearCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    holiday_name?: SortOrder
  }

  export type holiday_yearAvgOrderByAggregateInput = {
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type holiday_yearMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    holiday_name?: SortOrder
  }

  export type holiday_yearMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    holiday_name?: SortOrder
  }

  export type holiday_yearSumOrderByAggregateInput = {
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type UserCreateNestedOneWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyBranchCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<CompanyBranchCreateWithoutCompanyInput>, Enumerable<CompanyBranchUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyBranchCreateOrConnectWithoutCompanyInput>
    createMany?: CompanyBranchCreateManyCompanyInputEnvelope
    connect?: Enumerable<CompanyBranchWhereUniqueInput>
  }

  export type mas_positionlevel3CreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<mas_positionlevel3CreateWithoutCompanyInput>, Enumerable<mas_positionlevel3UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel3CreateOrConnectWithoutCompanyInput>
    createMany?: mas_positionlevel3CreateManyCompanyInputEnvelope
    connect?: Enumerable<mas_positionlevel3WhereUniqueInput>
  }

  export type mas_positionlevel2CreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<mas_positionlevel2CreateWithoutCompanyInput>, Enumerable<mas_positionlevel2UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel2CreateOrConnectWithoutCompanyInput>
    createMany?: mas_positionlevel2CreateManyCompanyInputEnvelope
    connect?: Enumerable<mas_positionlevel2WhereUniqueInput>
  }

  export type mas_positionlevel1CreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<mas_positionlevel1CreateWithoutCompanyInput>, Enumerable<mas_positionlevel1UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel1CreateOrConnectWithoutCompanyInput>
    createMany?: mas_positionlevel1CreateManyCompanyInputEnvelope
    connect?: Enumerable<mas_positionlevel1WhereUniqueInput>
  }

  export type holiday_dateCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<holiday_dateCreateWithoutCompanyInput>, Enumerable<holiday_dateUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<holiday_dateCreateOrConnectWithoutCompanyInput>
    createMany?: holiday_dateCreateManyCompanyInputEnvelope
    connect?: Enumerable<holiday_dateWhereUniqueInput>
  }

  export type mas_positionCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<mas_positionCreateWithoutCompanyInput>, Enumerable<mas_positionUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionCreateOrConnectWithoutCompanyInput>
    createMany?: mas_positionCreateManyCompanyInputEnvelope
    connect?: Enumerable<mas_positionWhereUniqueInput>
  }

  export type CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<CompanyBranchCreateWithoutCompanyInput>, Enumerable<CompanyBranchUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyBranchCreateOrConnectWithoutCompanyInput>
    createMany?: CompanyBranchCreateManyCompanyInputEnvelope
    connect?: Enumerable<CompanyBranchWhereUniqueInput>
  }

  export type mas_positionlevel3UncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<mas_positionlevel3CreateWithoutCompanyInput>, Enumerable<mas_positionlevel3UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel3CreateOrConnectWithoutCompanyInput>
    createMany?: mas_positionlevel3CreateManyCompanyInputEnvelope
    connect?: Enumerable<mas_positionlevel3WhereUniqueInput>
  }

  export type mas_positionlevel2UncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<mas_positionlevel2CreateWithoutCompanyInput>, Enumerable<mas_positionlevel2UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel2CreateOrConnectWithoutCompanyInput>
    createMany?: mas_positionlevel2CreateManyCompanyInputEnvelope
    connect?: Enumerable<mas_positionlevel2WhereUniqueInput>
  }

  export type mas_positionlevel1UncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<mas_positionlevel1CreateWithoutCompanyInput>, Enumerable<mas_positionlevel1UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel1CreateOrConnectWithoutCompanyInput>
    createMany?: mas_positionlevel1CreateManyCompanyInputEnvelope
    connect?: Enumerable<mas_positionlevel1WhereUniqueInput>
  }

  export type holiday_dateUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<holiday_dateCreateWithoutCompanyInput>, Enumerable<holiday_dateUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<holiday_dateCreateOrConnectWithoutCompanyInput>
    createMany?: holiday_dateCreateManyCompanyInputEnvelope
    connect?: Enumerable<holiday_dateWhereUniqueInput>
  }

  export type mas_positionUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<mas_positionCreateWithoutCompanyInput>, Enumerable<mas_positionUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionCreateOrConnectWithoutCompanyInput>
    createMany?: mas_positionCreateManyCompanyInputEnvelope
    connect?: Enumerable<mas_positionWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    upsert?: UserUpsertWithoutCompanyInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyBranchUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<CompanyBranchCreateWithoutCompanyInput>, Enumerable<CompanyBranchUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyBranchCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<CompanyBranchUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: CompanyBranchCreateManyCompanyInputEnvelope
    set?: Enumerable<CompanyBranchWhereUniqueInput>
    disconnect?: Enumerable<CompanyBranchWhereUniqueInput>
    delete?: Enumerable<CompanyBranchWhereUniqueInput>
    connect?: Enumerable<CompanyBranchWhereUniqueInput>
    update?: Enumerable<CompanyBranchUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<CompanyBranchUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<CompanyBranchScalarWhereInput>
  }

  export type mas_positionlevel3UpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<mas_positionlevel3CreateWithoutCompanyInput>, Enumerable<mas_positionlevel3UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel3CreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<mas_positionlevel3UpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: mas_positionlevel3CreateManyCompanyInputEnvelope
    set?: Enumerable<mas_positionlevel3WhereUniqueInput>
    disconnect?: Enumerable<mas_positionlevel3WhereUniqueInput>
    delete?: Enumerable<mas_positionlevel3WhereUniqueInput>
    connect?: Enumerable<mas_positionlevel3WhereUniqueInput>
    update?: Enumerable<mas_positionlevel3UpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<mas_positionlevel3UpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<mas_positionlevel3ScalarWhereInput>
  }

  export type mas_positionlevel2UpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<mas_positionlevel2CreateWithoutCompanyInput>, Enumerable<mas_positionlevel2UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel2CreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<mas_positionlevel2UpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: mas_positionlevel2CreateManyCompanyInputEnvelope
    set?: Enumerable<mas_positionlevel2WhereUniqueInput>
    disconnect?: Enumerable<mas_positionlevel2WhereUniqueInput>
    delete?: Enumerable<mas_positionlevel2WhereUniqueInput>
    connect?: Enumerable<mas_positionlevel2WhereUniqueInput>
    update?: Enumerable<mas_positionlevel2UpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<mas_positionlevel2UpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<mas_positionlevel2ScalarWhereInput>
  }

  export type mas_positionlevel1UpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<mas_positionlevel1CreateWithoutCompanyInput>, Enumerable<mas_positionlevel1UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel1CreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<mas_positionlevel1UpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: mas_positionlevel1CreateManyCompanyInputEnvelope
    set?: Enumerable<mas_positionlevel1WhereUniqueInput>
    disconnect?: Enumerable<mas_positionlevel1WhereUniqueInput>
    delete?: Enumerable<mas_positionlevel1WhereUniqueInput>
    connect?: Enumerable<mas_positionlevel1WhereUniqueInput>
    update?: Enumerable<mas_positionlevel1UpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<mas_positionlevel1UpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<mas_positionlevel1ScalarWhereInput>
  }

  export type holiday_dateUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<holiday_dateCreateWithoutCompanyInput>, Enumerable<holiday_dateUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<holiday_dateCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<holiday_dateUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: holiday_dateCreateManyCompanyInputEnvelope
    set?: Enumerable<holiday_dateWhereUniqueInput>
    disconnect?: Enumerable<holiday_dateWhereUniqueInput>
    delete?: Enumerable<holiday_dateWhereUniqueInput>
    connect?: Enumerable<holiday_dateWhereUniqueInput>
    update?: Enumerable<holiday_dateUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<holiday_dateUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<holiday_dateScalarWhereInput>
  }

  export type mas_positionUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<mas_positionCreateWithoutCompanyInput>, Enumerable<mas_positionUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<mas_positionUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: mas_positionCreateManyCompanyInputEnvelope
    set?: Enumerable<mas_positionWhereUniqueInput>
    disconnect?: Enumerable<mas_positionWhereUniqueInput>
    delete?: Enumerable<mas_positionWhereUniqueInput>
    connect?: Enumerable<mas_positionWhereUniqueInput>
    update?: Enumerable<mas_positionUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<mas_positionUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<mas_positionScalarWhereInput>
  }

  export type CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<CompanyBranchCreateWithoutCompanyInput>, Enumerable<CompanyBranchUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyBranchCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<CompanyBranchUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: CompanyBranchCreateManyCompanyInputEnvelope
    set?: Enumerable<CompanyBranchWhereUniqueInput>
    disconnect?: Enumerable<CompanyBranchWhereUniqueInput>
    delete?: Enumerable<CompanyBranchWhereUniqueInput>
    connect?: Enumerable<CompanyBranchWhereUniqueInput>
    update?: Enumerable<CompanyBranchUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<CompanyBranchUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<CompanyBranchScalarWhereInput>
  }

  export type mas_positionlevel3UncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<mas_positionlevel3CreateWithoutCompanyInput>, Enumerable<mas_positionlevel3UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel3CreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<mas_positionlevel3UpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: mas_positionlevel3CreateManyCompanyInputEnvelope
    set?: Enumerable<mas_positionlevel3WhereUniqueInput>
    disconnect?: Enumerable<mas_positionlevel3WhereUniqueInput>
    delete?: Enumerable<mas_positionlevel3WhereUniqueInput>
    connect?: Enumerable<mas_positionlevel3WhereUniqueInput>
    update?: Enumerable<mas_positionlevel3UpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<mas_positionlevel3UpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<mas_positionlevel3ScalarWhereInput>
  }

  export type mas_positionlevel2UncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<mas_positionlevel2CreateWithoutCompanyInput>, Enumerable<mas_positionlevel2UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel2CreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<mas_positionlevel2UpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: mas_positionlevel2CreateManyCompanyInputEnvelope
    set?: Enumerable<mas_positionlevel2WhereUniqueInput>
    disconnect?: Enumerable<mas_positionlevel2WhereUniqueInput>
    delete?: Enumerable<mas_positionlevel2WhereUniqueInput>
    connect?: Enumerable<mas_positionlevel2WhereUniqueInput>
    update?: Enumerable<mas_positionlevel2UpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<mas_positionlevel2UpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<mas_positionlevel2ScalarWhereInput>
  }

  export type mas_positionlevel1UncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<mas_positionlevel1CreateWithoutCompanyInput>, Enumerable<mas_positionlevel1UncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionlevel1CreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<mas_positionlevel1UpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: mas_positionlevel1CreateManyCompanyInputEnvelope
    set?: Enumerable<mas_positionlevel1WhereUniqueInput>
    disconnect?: Enumerable<mas_positionlevel1WhereUniqueInput>
    delete?: Enumerable<mas_positionlevel1WhereUniqueInput>
    connect?: Enumerable<mas_positionlevel1WhereUniqueInput>
    update?: Enumerable<mas_positionlevel1UpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<mas_positionlevel1UpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<mas_positionlevel1ScalarWhereInput>
  }

  export type holiday_dateUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<holiday_dateCreateWithoutCompanyInput>, Enumerable<holiday_dateUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<holiday_dateCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<holiday_dateUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: holiday_dateCreateManyCompanyInputEnvelope
    set?: Enumerable<holiday_dateWhereUniqueInput>
    disconnect?: Enumerable<holiday_dateWhereUniqueInput>
    delete?: Enumerable<holiday_dateWhereUniqueInput>
    connect?: Enumerable<holiday_dateWhereUniqueInput>
    update?: Enumerable<holiday_dateUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<holiday_dateUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<holiday_dateScalarWhereInput>
  }

  export type mas_positionUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<Enumerable<mas_positionCreateWithoutCompanyInput>, Enumerable<mas_positionUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<mas_positionCreateOrConnectWithoutCompanyInput>
    upsert?: Enumerable<mas_positionUpsertWithWhereUniqueWithoutCompanyInput>
    createMany?: mas_positionCreateManyCompanyInputEnvelope
    set?: Enumerable<mas_positionWhereUniqueInput>
    disconnect?: Enumerable<mas_positionWhereUniqueInput>
    delete?: Enumerable<mas_positionWhereUniqueInput>
    connect?: Enumerable<mas_positionWhereUniqueInput>
    update?: Enumerable<mas_positionUpdateWithWhereUniqueWithoutCompanyInput>
    updateMany?: Enumerable<mas_positionUpdateManyWithWhereWithoutCompanyInput>
    deleteMany?: Enumerable<mas_positionScalarWhereInput>
  }

  export type CompanyCreateNestedOneWithoutBranchInput = {
    create?: XOR<CompanyCreateWithoutBranchInput, CompanyUncheckedCreateWithoutBranchInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBranchInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCompanyBranchInput = {
    create?: XOR<Enumerable<UserCreateWithoutCompanyBranchInput>, Enumerable<UserUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCompanyBranchInput>
    createMany?: UserCreateManyCompanyBranchInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type Role_CompanyCreateNestedManyWithoutCompanyBranchInput = {
    create?: XOR<Enumerable<Role_CompanyCreateWithoutCompanyBranchInput>, Enumerable<Role_CompanyUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<Role_CompanyCreateOrConnectWithoutCompanyBranchInput>
    createMany?: Role_CompanyCreateManyCompanyBranchInputEnvelope
    connect?: Enumerable<Role_CompanyWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyBranchInput = {
    create?: XOR<Enumerable<UserCreateWithoutCompanyBranchInput>, Enumerable<UserUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCompanyBranchInput>
    createMany?: UserCreateManyCompanyBranchInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type Role_CompanyUncheckedCreateNestedManyWithoutCompanyBranchInput = {
    create?: XOR<Enumerable<Role_CompanyCreateWithoutCompanyBranchInput>, Enumerable<Role_CompanyUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<Role_CompanyCreateOrConnectWithoutCompanyBranchInput>
    createMany?: Role_CompanyCreateManyCompanyBranchInputEnvelope
    connect?: Enumerable<Role_CompanyWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneWithoutBranchNestedInput = {
    create?: XOR<CompanyCreateWithoutBranchInput, CompanyUncheckedCreateWithoutBranchInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBranchInput
    upsert?: CompanyUpsertWithoutBranchInput
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutBranchInput, CompanyUncheckedUpdateWithoutBranchInput>
  }

  export type UserUpdateManyWithoutCompanyBranchNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCompanyBranchInput>, Enumerable<UserUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCompanyBranchInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCompanyBranchInput>
    createMany?: UserCreateManyCompanyBranchInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCompanyBranchInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCompanyBranchInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type Role_CompanyUpdateManyWithoutCompanyBranchNestedInput = {
    create?: XOR<Enumerable<Role_CompanyCreateWithoutCompanyBranchInput>, Enumerable<Role_CompanyUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<Role_CompanyCreateOrConnectWithoutCompanyBranchInput>
    upsert?: Enumerable<Role_CompanyUpsertWithWhereUniqueWithoutCompanyBranchInput>
    createMany?: Role_CompanyCreateManyCompanyBranchInputEnvelope
    set?: Enumerable<Role_CompanyWhereUniqueInput>
    disconnect?: Enumerable<Role_CompanyWhereUniqueInput>
    delete?: Enumerable<Role_CompanyWhereUniqueInput>
    connect?: Enumerable<Role_CompanyWhereUniqueInput>
    update?: Enumerable<Role_CompanyUpdateWithWhereUniqueWithoutCompanyBranchInput>
    updateMany?: Enumerable<Role_CompanyUpdateManyWithWhereWithoutCompanyBranchInput>
    deleteMany?: Enumerable<Role_CompanyScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutCompanyBranchNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCompanyBranchInput>, Enumerable<UserUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCompanyBranchInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCompanyBranchInput>
    createMany?: UserCreateManyCompanyBranchInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCompanyBranchInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCompanyBranchInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type Role_CompanyUncheckedUpdateManyWithoutCompanyBranchNestedInput = {
    create?: XOR<Enumerable<Role_CompanyCreateWithoutCompanyBranchInput>, Enumerable<Role_CompanyUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<Role_CompanyCreateOrConnectWithoutCompanyBranchInput>
    upsert?: Enumerable<Role_CompanyUpsertWithWhereUniqueWithoutCompanyBranchInput>
    createMany?: Role_CompanyCreateManyCompanyBranchInputEnvelope
    set?: Enumerable<Role_CompanyWhereUniqueInput>
    disconnect?: Enumerable<Role_CompanyWhereUniqueInput>
    delete?: Enumerable<Role_CompanyWhereUniqueInput>
    connect?: Enumerable<Role_CompanyWhereUniqueInput>
    update?: Enumerable<Role_CompanyUpdateWithWhereUniqueWithoutCompanyBranchInput>
    updateMany?: Enumerable<Role_CompanyUpdateManyWithWhereWithoutCompanyBranchInput>
    deleteMany?: Enumerable<Role_CompanyScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type CompanyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<CompanyCreateWithoutOwnerInput>, Enumerable<CompanyUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CompanyCreateOrConnectWithoutOwnerInput>
    createMany?: CompanyCreateManyOwnerInputEnvelope
    connect?: Enumerable<CompanyWhereUniqueInput>
  }

  export type CompanyBranchCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyBranchCreateWithoutUsersInput, CompanyBranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutUsersInput
    connect?: CompanyBranchWhereUniqueInput
  }

  export type Role_CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<Role_CompanyCreateWithoutUsersInput, Role_CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: Role_CompanyCreateOrConnectWithoutUsersInput
    connect?: Role_CompanyWhereUniqueInput
  }

  export type Position_userCreateNestedOneWithoutUserInput = {
    create?: XOR<Position_userCreateWithoutUserInput, Position_userUncheckedCreateWithoutUserInput>
    connectOrCreate?: Position_userCreateOrConnectWithoutUserInput
    connect?: Position_userWhereUniqueInput
  }

  export type Position_userCreateNestedManyWithoutHeaderInput = {
    create?: XOR<Enumerable<Position_userCreateWithoutHeaderInput>, Enumerable<Position_userUncheckedCreateWithoutHeaderInput>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutHeaderInput>
    createMany?: Position_userCreateManyHeaderInputEnvelope
    connect?: Enumerable<Position_userWhereUniqueInput>
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type CompanyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<CompanyCreateWithoutOwnerInput>, Enumerable<CompanyUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CompanyCreateOrConnectWithoutOwnerInput>
    createMany?: CompanyCreateManyOwnerInputEnvelope
    connect?: Enumerable<CompanyWhereUniqueInput>
  }

  export type Position_userUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<Position_userCreateWithoutUserInput, Position_userUncheckedCreateWithoutUserInput>
    connectOrCreate?: Position_userCreateOrConnectWithoutUserInput
    connect?: Position_userWhereUniqueInput
  }

  export type Position_userUncheckedCreateNestedManyWithoutHeaderInput = {
    create?: XOR<Enumerable<Position_userCreateWithoutHeaderInput>, Enumerable<Position_userUncheckedCreateWithoutHeaderInput>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutHeaderInput>
    createMany?: Position_userCreateManyHeaderInputEnvelope
    connect?: Enumerable<Position_userWhereUniqueInput>
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<CompanyCreateWithoutOwnerInput>, Enumerable<CompanyUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CompanyCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<CompanyUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: CompanyCreateManyOwnerInputEnvelope
    set?: Enumerable<CompanyWhereUniqueInput>
    disconnect?: Enumerable<CompanyWhereUniqueInput>
    delete?: Enumerable<CompanyWhereUniqueInput>
    connect?: Enumerable<CompanyWhereUniqueInput>
    update?: Enumerable<CompanyUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<CompanyUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<CompanyScalarWhereInput>
  }

  export type CompanyBranchUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompanyBranchCreateWithoutUsersInput, CompanyBranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutUsersInput
    upsert?: CompanyBranchUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyBranchWhereUniqueInput
    update?: XOR<CompanyBranchUpdateWithoutUsersInput, CompanyBranchUncheckedUpdateWithoutUsersInput>
  }

  export type Role_CompanyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<Role_CompanyCreateWithoutUsersInput, Role_CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: Role_CompanyCreateOrConnectWithoutUsersInput
    upsert?: Role_CompanyUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: Role_CompanyWhereUniqueInput
    update?: XOR<Role_CompanyUpdateWithoutUsersInput, Role_CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type Position_userUpdateOneWithoutUserNestedInput = {
    create?: XOR<Position_userCreateWithoutUserInput, Position_userUncheckedCreateWithoutUserInput>
    connectOrCreate?: Position_userCreateOrConnectWithoutUserInput
    upsert?: Position_userUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: Position_userWhereUniqueInput
    update?: XOR<Position_userUpdateWithoutUserInput, Position_userUncheckedUpdateWithoutUserInput>
  }

  export type Position_userUpdateManyWithoutHeaderNestedInput = {
    create?: XOR<Enumerable<Position_userCreateWithoutHeaderInput>, Enumerable<Position_userUncheckedCreateWithoutHeaderInput>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutHeaderInput>
    upsert?: Enumerable<Position_userUpsertWithWhereUniqueWithoutHeaderInput>
    createMany?: Position_userCreateManyHeaderInputEnvelope
    set?: Enumerable<Position_userWhereUniqueInput>
    disconnect?: Enumerable<Position_userWhereUniqueInput>
    delete?: Enumerable<Position_userWhereUniqueInput>
    connect?: Enumerable<Position_userWhereUniqueInput>
    update?: Enumerable<Position_userUpdateWithWhereUniqueWithoutHeaderInput>
    updateMany?: Enumerable<Position_userUpdateManyWithWhereWithoutHeaderInput>
    deleteMany?: Enumerable<Position_userScalarWhereInput>
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<CompanyCreateWithoutOwnerInput>, Enumerable<CompanyUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<CompanyCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<CompanyUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: CompanyCreateManyOwnerInputEnvelope
    set?: Enumerable<CompanyWhereUniqueInput>
    disconnect?: Enumerable<CompanyWhereUniqueInput>
    delete?: Enumerable<CompanyWhereUniqueInput>
    connect?: Enumerable<CompanyWhereUniqueInput>
    update?: Enumerable<CompanyUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<CompanyUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<CompanyScalarWhereInput>
  }

  export type Position_userUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<Position_userCreateWithoutUserInput, Position_userUncheckedCreateWithoutUserInput>
    connectOrCreate?: Position_userCreateOrConnectWithoutUserInput
    upsert?: Position_userUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: Position_userWhereUniqueInput
    update?: XOR<Position_userUpdateWithoutUserInput, Position_userUncheckedUpdateWithoutUserInput>
  }

  export type Position_userUncheckedUpdateManyWithoutHeaderNestedInput = {
    create?: XOR<Enumerable<Position_userCreateWithoutHeaderInput>, Enumerable<Position_userUncheckedCreateWithoutHeaderInput>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutHeaderInput>
    upsert?: Enumerable<Position_userUpsertWithWhereUniqueWithoutHeaderInput>
    createMany?: Position_userCreateManyHeaderInputEnvelope
    set?: Enumerable<Position_userWhereUniqueInput>
    disconnect?: Enumerable<Position_userWhereUniqueInput>
    delete?: Enumerable<Position_userWhereUniqueInput>
    connect?: Enumerable<Position_userWhereUniqueInput>
    update?: Enumerable<Position_userUpdateWithWhereUniqueWithoutHeaderInput>
    updateMany?: Enumerable<Position_userUpdateManyWithWhereWithoutHeaderInput>
    deleteMany?: Enumerable<Position_userScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<Enumerable<UserCreateWithoutRoleInput>, Enumerable<UserUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRoleInput>
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<Enumerable<UserCreateWithoutRoleInput>, Enumerable<UserUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRoleInput>
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutRoleInput>, Enumerable<UserUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRoleInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRoleInput>
    createMany?: UserCreateManyRoleInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRoleInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRoleInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutRoleInput>, Enumerable<UserUncheckedCreateWithoutRoleInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRoleInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRoleInput>
    createMany?: UserCreateManyRoleInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRoleInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRoleInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutRole_CompanyInput = {
    create?: XOR<Enumerable<UserCreateWithoutRole_CompanyInput>, Enumerable<UserUncheckedCreateWithoutRole_CompanyInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRole_CompanyInput>
    createMany?: UserCreateManyRole_CompanyInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type CompanyBranchCreateNestedOneWithoutRole_CompanyInput = {
    create?: XOR<CompanyBranchCreateWithoutRole_CompanyInput, CompanyBranchUncheckedCreateWithoutRole_CompanyInput>
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutRole_CompanyInput
    connect?: CompanyBranchWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutRole_CompanyInput = {
    create?: XOR<Enumerable<UserCreateWithoutRole_CompanyInput>, Enumerable<UserUncheckedCreateWithoutRole_CompanyInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRole_CompanyInput>
    createMany?: UserCreateManyRole_CompanyInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutRole_CompanyNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutRole_CompanyInput>, Enumerable<UserUncheckedCreateWithoutRole_CompanyInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRole_CompanyInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRole_CompanyInput>
    createMany?: UserCreateManyRole_CompanyInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRole_CompanyInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRole_CompanyInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type CompanyBranchUpdateOneWithoutRole_CompanyNestedInput = {
    create?: XOR<CompanyBranchCreateWithoutRole_CompanyInput, CompanyBranchUncheckedCreateWithoutRole_CompanyInput>
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutRole_CompanyInput
    upsert?: CompanyBranchUpsertWithoutRole_CompanyInput
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyBranchWhereUniqueInput
    update?: XOR<CompanyBranchUpdateWithoutRole_CompanyInput, CompanyBranchUncheckedUpdateWithoutRole_CompanyInput>
  }

  export type UserUncheckedUpdateManyWithoutRole_CompanyNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutRole_CompanyInput>, Enumerable<UserUncheckedCreateWithoutRole_CompanyInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutRole_CompanyInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutRole_CompanyInput>
    createMany?: UserCreateManyRole_CompanyInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutRole_CompanyInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutRole_CompanyInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type DistrictCreateNestedManyWithoutProvinceInput = {
    create?: XOR<Enumerable<DistrictCreateWithoutProvinceInput>, Enumerable<DistrictUncheckedCreateWithoutProvinceInput>>
    connectOrCreate?: Enumerable<DistrictCreateOrConnectWithoutProvinceInput>
    createMany?: DistrictCreateManyProvinceInputEnvelope
    connect?: Enumerable<DistrictWhereUniqueInput>
  }

  export type DistrictUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<Enumerable<DistrictCreateWithoutProvinceInput>, Enumerable<DistrictUncheckedCreateWithoutProvinceInput>>
    connectOrCreate?: Enumerable<DistrictCreateOrConnectWithoutProvinceInput>
    createMany?: DistrictCreateManyProvinceInputEnvelope
    connect?: Enumerable<DistrictWhereUniqueInput>
  }

  export type DistrictUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<Enumerable<DistrictCreateWithoutProvinceInput>, Enumerable<DistrictUncheckedCreateWithoutProvinceInput>>
    connectOrCreate?: Enumerable<DistrictCreateOrConnectWithoutProvinceInput>
    upsert?: Enumerable<DistrictUpsertWithWhereUniqueWithoutProvinceInput>
    createMany?: DistrictCreateManyProvinceInputEnvelope
    set?: Enumerable<DistrictWhereUniqueInput>
    disconnect?: Enumerable<DistrictWhereUniqueInput>
    delete?: Enumerable<DistrictWhereUniqueInput>
    connect?: Enumerable<DistrictWhereUniqueInput>
    update?: Enumerable<DistrictUpdateWithWhereUniqueWithoutProvinceInput>
    updateMany?: Enumerable<DistrictUpdateManyWithWhereWithoutProvinceInput>
    deleteMany?: Enumerable<DistrictScalarWhereInput>
  }

  export type DistrictUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<Enumerable<DistrictCreateWithoutProvinceInput>, Enumerable<DistrictUncheckedCreateWithoutProvinceInput>>
    connectOrCreate?: Enumerable<DistrictCreateOrConnectWithoutProvinceInput>
    upsert?: Enumerable<DistrictUpsertWithWhereUniqueWithoutProvinceInput>
    createMany?: DistrictCreateManyProvinceInputEnvelope
    set?: Enumerable<DistrictWhereUniqueInput>
    disconnect?: Enumerable<DistrictWhereUniqueInput>
    delete?: Enumerable<DistrictWhereUniqueInput>
    connect?: Enumerable<DistrictWhereUniqueInput>
    update?: Enumerable<DistrictUpdateWithWhereUniqueWithoutProvinceInput>
    updateMany?: Enumerable<DistrictUpdateManyWithWhereWithoutProvinceInput>
    deleteMany?: Enumerable<DistrictScalarWhereInput>
  }

  export type ProvinceCreateNestedOneWithoutDistrictInput = {
    create?: XOR<ProvinceCreateWithoutDistrictInput, ProvinceUncheckedCreateWithoutDistrictInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutDistrictInput
    connect?: ProvinceWhereUniqueInput
  }

  export type AmphoeCreateNestedManyWithoutDistrictInput = {
    create?: XOR<Enumerable<AmphoeCreateWithoutDistrictInput>, Enumerable<AmphoeUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<AmphoeCreateOrConnectWithoutDistrictInput>
    createMany?: AmphoeCreateManyDistrictInputEnvelope
    connect?: Enumerable<AmphoeWhereUniqueInput>
  }

  export type AmphoeUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<Enumerable<AmphoeCreateWithoutDistrictInput>, Enumerable<AmphoeUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<AmphoeCreateOrConnectWithoutDistrictInput>
    createMany?: AmphoeCreateManyDistrictInputEnvelope
    connect?: Enumerable<AmphoeWhereUniqueInput>
  }

  export type ProvinceUpdateOneRequiredWithoutDistrictNestedInput = {
    create?: XOR<ProvinceCreateWithoutDistrictInput, ProvinceUncheckedCreateWithoutDistrictInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutDistrictInput
    upsert?: ProvinceUpsertWithoutDistrictInput
    connect?: ProvinceWhereUniqueInput
    update?: XOR<ProvinceUpdateWithoutDistrictInput, ProvinceUncheckedUpdateWithoutDistrictInput>
  }

  export type AmphoeUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<Enumerable<AmphoeCreateWithoutDistrictInput>, Enumerable<AmphoeUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<AmphoeCreateOrConnectWithoutDistrictInput>
    upsert?: Enumerable<AmphoeUpsertWithWhereUniqueWithoutDistrictInput>
    createMany?: AmphoeCreateManyDistrictInputEnvelope
    set?: Enumerable<AmphoeWhereUniqueInput>
    disconnect?: Enumerable<AmphoeWhereUniqueInput>
    delete?: Enumerable<AmphoeWhereUniqueInput>
    connect?: Enumerable<AmphoeWhereUniqueInput>
    update?: Enumerable<AmphoeUpdateWithWhereUniqueWithoutDistrictInput>
    updateMany?: Enumerable<AmphoeUpdateManyWithWhereWithoutDistrictInput>
    deleteMany?: Enumerable<AmphoeScalarWhereInput>
  }

  export type AmphoeUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<Enumerable<AmphoeCreateWithoutDistrictInput>, Enumerable<AmphoeUncheckedCreateWithoutDistrictInput>>
    connectOrCreate?: Enumerable<AmphoeCreateOrConnectWithoutDistrictInput>
    upsert?: Enumerable<AmphoeUpsertWithWhereUniqueWithoutDistrictInput>
    createMany?: AmphoeCreateManyDistrictInputEnvelope
    set?: Enumerable<AmphoeWhereUniqueInput>
    disconnect?: Enumerable<AmphoeWhereUniqueInput>
    delete?: Enumerable<AmphoeWhereUniqueInput>
    connect?: Enumerable<AmphoeWhereUniqueInput>
    update?: Enumerable<AmphoeUpdateWithWhereUniqueWithoutDistrictInput>
    updateMany?: Enumerable<AmphoeUpdateManyWithWhereWithoutDistrictInput>
    deleteMany?: Enumerable<AmphoeScalarWhereInput>
  }

  export type DistrictCreateNestedOneWithoutAmphoeInput = {
    create?: XOR<DistrictCreateWithoutAmphoeInput, DistrictUncheckedCreateWithoutAmphoeInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutAmphoeInput
    connect?: DistrictWhereUniqueInput
  }

  export type DistrictUpdateOneRequiredWithoutAmphoeNestedInput = {
    create?: XOR<DistrictCreateWithoutAmphoeInput, DistrictUncheckedCreateWithoutAmphoeInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutAmphoeInput
    upsert?: DistrictUpsertWithoutAmphoeInput
    connect?: DistrictWhereUniqueInput
    update?: XOR<DistrictUpdateWithoutAmphoeInput, DistrictUncheckedUpdateWithoutAmphoeInput>
  }

  export type CompanyCreateNestedOneWithoutMas_positionInput = {
    create?: XOR<CompanyCreateWithoutMas_positionInput, CompanyUncheckedCreateWithoutMas_positionInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutMas_positionInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneWithoutMas_positionNestedInput = {
    create?: XOR<CompanyCreateWithoutMas_positionInput, CompanyUncheckedCreateWithoutMas_positionInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutMas_positionInput
    upsert?: CompanyUpsertWithoutMas_positionInput
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutMas_positionInput, CompanyUncheckedUpdateWithoutMas_positionInput>
  }

  export type mas_positionlevel2CreateNestedManyWithoutMas_positionlevel1Input = {
    create?: XOR<Enumerable<mas_positionlevel2CreateWithoutMas_positionlevel1Input>, Enumerable<mas_positionlevel2UncheckedCreateWithoutMas_positionlevel1Input>>
    connectOrCreate?: Enumerable<mas_positionlevel2CreateOrConnectWithoutMas_positionlevel1Input>
    createMany?: mas_positionlevel2CreateManyMas_positionlevel1InputEnvelope
    connect?: Enumerable<mas_positionlevel2WhereUniqueInput>
  }

  export type CompanyCreateNestedOneWithoutMas_positionlevel1Input = {
    create?: XOR<CompanyCreateWithoutMas_positionlevel1Input, CompanyUncheckedCreateWithoutMas_positionlevel1Input>
    connectOrCreate?: CompanyCreateOrConnectWithoutMas_positionlevel1Input
    connect?: CompanyWhereUniqueInput
  }

  export type Position_userCreateNestedManyWithoutMas_positionlevel1Input = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel1Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel1Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel1Input>
    createMany?: Position_userCreateManyMas_positionlevel1InputEnvelope
    connect?: Enumerable<Position_userWhereUniqueInput>
  }

  export type mas_positionlevel2UncheckedCreateNestedManyWithoutMas_positionlevel1Input = {
    create?: XOR<Enumerable<mas_positionlevel2CreateWithoutMas_positionlevel1Input>, Enumerable<mas_positionlevel2UncheckedCreateWithoutMas_positionlevel1Input>>
    connectOrCreate?: Enumerable<mas_positionlevel2CreateOrConnectWithoutMas_positionlevel1Input>
    createMany?: mas_positionlevel2CreateManyMas_positionlevel1InputEnvelope
    connect?: Enumerable<mas_positionlevel2WhereUniqueInput>
  }

  export type Position_userUncheckedCreateNestedManyWithoutMas_positionlevel1Input = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel1Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel1Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel1Input>
    createMany?: Position_userCreateManyMas_positionlevel1InputEnvelope
    connect?: Enumerable<Position_userWhereUniqueInput>
  }

  export type mas_positionlevel2UpdateManyWithoutMas_positionlevel1NestedInput = {
    create?: XOR<Enumerable<mas_positionlevel2CreateWithoutMas_positionlevel1Input>, Enumerable<mas_positionlevel2UncheckedCreateWithoutMas_positionlevel1Input>>
    connectOrCreate?: Enumerable<mas_positionlevel2CreateOrConnectWithoutMas_positionlevel1Input>
    upsert?: Enumerable<mas_positionlevel2UpsertWithWhereUniqueWithoutMas_positionlevel1Input>
    createMany?: mas_positionlevel2CreateManyMas_positionlevel1InputEnvelope
    set?: Enumerable<mas_positionlevel2WhereUniqueInput>
    disconnect?: Enumerable<mas_positionlevel2WhereUniqueInput>
    delete?: Enumerable<mas_positionlevel2WhereUniqueInput>
    connect?: Enumerable<mas_positionlevel2WhereUniqueInput>
    update?: Enumerable<mas_positionlevel2UpdateWithWhereUniqueWithoutMas_positionlevel1Input>
    updateMany?: Enumerable<mas_positionlevel2UpdateManyWithWhereWithoutMas_positionlevel1Input>
    deleteMany?: Enumerable<mas_positionlevel2ScalarWhereInput>
  }

  export type CompanyUpdateOneWithoutMas_positionlevel1NestedInput = {
    create?: XOR<CompanyCreateWithoutMas_positionlevel1Input, CompanyUncheckedCreateWithoutMas_positionlevel1Input>
    connectOrCreate?: CompanyCreateOrConnectWithoutMas_positionlevel1Input
    upsert?: CompanyUpsertWithoutMas_positionlevel1Input
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutMas_positionlevel1Input, CompanyUncheckedUpdateWithoutMas_positionlevel1Input>
  }

  export type Position_userUpdateManyWithoutMas_positionlevel1NestedInput = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel1Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel1Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel1Input>
    upsert?: Enumerable<Position_userUpsertWithWhereUniqueWithoutMas_positionlevel1Input>
    createMany?: Position_userCreateManyMas_positionlevel1InputEnvelope
    set?: Enumerable<Position_userWhereUniqueInput>
    disconnect?: Enumerable<Position_userWhereUniqueInput>
    delete?: Enumerable<Position_userWhereUniqueInput>
    connect?: Enumerable<Position_userWhereUniqueInput>
    update?: Enumerable<Position_userUpdateWithWhereUniqueWithoutMas_positionlevel1Input>
    updateMany?: Enumerable<Position_userUpdateManyWithWhereWithoutMas_positionlevel1Input>
    deleteMany?: Enumerable<Position_userScalarWhereInput>
  }

  export type mas_positionlevel2UncheckedUpdateManyWithoutMas_positionlevel1NestedInput = {
    create?: XOR<Enumerable<mas_positionlevel2CreateWithoutMas_positionlevel1Input>, Enumerable<mas_positionlevel2UncheckedCreateWithoutMas_positionlevel1Input>>
    connectOrCreate?: Enumerable<mas_positionlevel2CreateOrConnectWithoutMas_positionlevel1Input>
    upsert?: Enumerable<mas_positionlevel2UpsertWithWhereUniqueWithoutMas_positionlevel1Input>
    createMany?: mas_positionlevel2CreateManyMas_positionlevel1InputEnvelope
    set?: Enumerable<mas_positionlevel2WhereUniqueInput>
    disconnect?: Enumerable<mas_positionlevel2WhereUniqueInput>
    delete?: Enumerable<mas_positionlevel2WhereUniqueInput>
    connect?: Enumerable<mas_positionlevel2WhereUniqueInput>
    update?: Enumerable<mas_positionlevel2UpdateWithWhereUniqueWithoutMas_positionlevel1Input>
    updateMany?: Enumerable<mas_positionlevel2UpdateManyWithWhereWithoutMas_positionlevel1Input>
    deleteMany?: Enumerable<mas_positionlevel2ScalarWhereInput>
  }

  export type Position_userUncheckedUpdateManyWithoutMas_positionlevel1NestedInput = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel1Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel1Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel1Input>
    upsert?: Enumerable<Position_userUpsertWithWhereUniqueWithoutMas_positionlevel1Input>
    createMany?: Position_userCreateManyMas_positionlevel1InputEnvelope
    set?: Enumerable<Position_userWhereUniqueInput>
    disconnect?: Enumerable<Position_userWhereUniqueInput>
    delete?: Enumerable<Position_userWhereUniqueInput>
    connect?: Enumerable<Position_userWhereUniqueInput>
    update?: Enumerable<Position_userUpdateWithWhereUniqueWithoutMas_positionlevel1Input>
    updateMany?: Enumerable<Position_userUpdateManyWithWhereWithoutMas_positionlevel1Input>
    deleteMany?: Enumerable<Position_userScalarWhereInput>
  }

  export type mas_positionlevel1CreateNestedOneWithoutMas_positionlevel2Input = {
    create?: XOR<mas_positionlevel1CreateWithoutMas_positionlevel2Input, mas_positionlevel1UncheckedCreateWithoutMas_positionlevel2Input>
    connectOrCreate?: mas_positionlevel1CreateOrConnectWithoutMas_positionlevel2Input
    connect?: mas_positionlevel1WhereUniqueInput
  }

  export type mas_positionlevel3CreateNestedManyWithoutMas_positionlevel2Input = {
    create?: XOR<Enumerable<mas_positionlevel3CreateWithoutMas_positionlevel2Input>, Enumerable<mas_positionlevel3UncheckedCreateWithoutMas_positionlevel2Input>>
    connectOrCreate?: Enumerable<mas_positionlevel3CreateOrConnectWithoutMas_positionlevel2Input>
    createMany?: mas_positionlevel3CreateManyMas_positionlevel2InputEnvelope
    connect?: Enumerable<mas_positionlevel3WhereUniqueInput>
  }

  export type CompanyCreateNestedOneWithoutMas_positionlevel2Input = {
    create?: XOR<CompanyCreateWithoutMas_positionlevel2Input, CompanyUncheckedCreateWithoutMas_positionlevel2Input>
    connectOrCreate?: CompanyCreateOrConnectWithoutMas_positionlevel2Input
    connect?: CompanyWhereUniqueInput
  }

  export type Position_userCreateNestedManyWithoutMas_positionlevel2Input = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel2Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel2Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel2Input>
    createMany?: Position_userCreateManyMas_positionlevel2InputEnvelope
    connect?: Enumerable<Position_userWhereUniqueInput>
  }

  export type mas_positionlevel3UncheckedCreateNestedManyWithoutMas_positionlevel2Input = {
    create?: XOR<Enumerable<mas_positionlevel3CreateWithoutMas_positionlevel2Input>, Enumerable<mas_positionlevel3UncheckedCreateWithoutMas_positionlevel2Input>>
    connectOrCreate?: Enumerable<mas_positionlevel3CreateOrConnectWithoutMas_positionlevel2Input>
    createMany?: mas_positionlevel3CreateManyMas_positionlevel2InputEnvelope
    connect?: Enumerable<mas_positionlevel3WhereUniqueInput>
  }

  export type Position_userUncheckedCreateNestedManyWithoutMas_positionlevel2Input = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel2Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel2Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel2Input>
    createMany?: Position_userCreateManyMas_positionlevel2InputEnvelope
    connect?: Enumerable<Position_userWhereUniqueInput>
  }

  export type mas_positionlevel1UpdateOneWithoutMas_positionlevel2NestedInput = {
    create?: XOR<mas_positionlevel1CreateWithoutMas_positionlevel2Input, mas_positionlevel1UncheckedCreateWithoutMas_positionlevel2Input>
    connectOrCreate?: mas_positionlevel1CreateOrConnectWithoutMas_positionlevel2Input
    upsert?: mas_positionlevel1UpsertWithoutMas_positionlevel2Input
    disconnect?: boolean
    delete?: boolean
    connect?: mas_positionlevel1WhereUniqueInput
    update?: XOR<mas_positionlevel1UpdateWithoutMas_positionlevel2Input, mas_positionlevel1UncheckedUpdateWithoutMas_positionlevel2Input>
  }

  export type mas_positionlevel3UpdateManyWithoutMas_positionlevel2NestedInput = {
    create?: XOR<Enumerable<mas_positionlevel3CreateWithoutMas_positionlevel2Input>, Enumerable<mas_positionlevel3UncheckedCreateWithoutMas_positionlevel2Input>>
    connectOrCreate?: Enumerable<mas_positionlevel3CreateOrConnectWithoutMas_positionlevel2Input>
    upsert?: Enumerable<mas_positionlevel3UpsertWithWhereUniqueWithoutMas_positionlevel2Input>
    createMany?: mas_positionlevel3CreateManyMas_positionlevel2InputEnvelope
    set?: Enumerable<mas_positionlevel3WhereUniqueInput>
    disconnect?: Enumerable<mas_positionlevel3WhereUniqueInput>
    delete?: Enumerable<mas_positionlevel3WhereUniqueInput>
    connect?: Enumerable<mas_positionlevel3WhereUniqueInput>
    update?: Enumerable<mas_positionlevel3UpdateWithWhereUniqueWithoutMas_positionlevel2Input>
    updateMany?: Enumerable<mas_positionlevel3UpdateManyWithWhereWithoutMas_positionlevel2Input>
    deleteMany?: Enumerable<mas_positionlevel3ScalarWhereInput>
  }

  export type CompanyUpdateOneWithoutMas_positionlevel2NestedInput = {
    create?: XOR<CompanyCreateWithoutMas_positionlevel2Input, CompanyUncheckedCreateWithoutMas_positionlevel2Input>
    connectOrCreate?: CompanyCreateOrConnectWithoutMas_positionlevel2Input
    upsert?: CompanyUpsertWithoutMas_positionlevel2Input
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutMas_positionlevel2Input, CompanyUncheckedUpdateWithoutMas_positionlevel2Input>
  }

  export type Position_userUpdateManyWithoutMas_positionlevel2NestedInput = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel2Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel2Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel2Input>
    upsert?: Enumerable<Position_userUpsertWithWhereUniqueWithoutMas_positionlevel2Input>
    createMany?: Position_userCreateManyMas_positionlevel2InputEnvelope
    set?: Enumerable<Position_userWhereUniqueInput>
    disconnect?: Enumerable<Position_userWhereUniqueInput>
    delete?: Enumerable<Position_userWhereUniqueInput>
    connect?: Enumerable<Position_userWhereUniqueInput>
    update?: Enumerable<Position_userUpdateWithWhereUniqueWithoutMas_positionlevel2Input>
    updateMany?: Enumerable<Position_userUpdateManyWithWhereWithoutMas_positionlevel2Input>
    deleteMany?: Enumerable<Position_userScalarWhereInput>
  }

  export type mas_positionlevel3UncheckedUpdateManyWithoutMas_positionlevel2NestedInput = {
    create?: XOR<Enumerable<mas_positionlevel3CreateWithoutMas_positionlevel2Input>, Enumerable<mas_positionlevel3UncheckedCreateWithoutMas_positionlevel2Input>>
    connectOrCreate?: Enumerable<mas_positionlevel3CreateOrConnectWithoutMas_positionlevel2Input>
    upsert?: Enumerable<mas_positionlevel3UpsertWithWhereUniqueWithoutMas_positionlevel2Input>
    createMany?: mas_positionlevel3CreateManyMas_positionlevel2InputEnvelope
    set?: Enumerable<mas_positionlevel3WhereUniqueInput>
    disconnect?: Enumerable<mas_positionlevel3WhereUniqueInput>
    delete?: Enumerable<mas_positionlevel3WhereUniqueInput>
    connect?: Enumerable<mas_positionlevel3WhereUniqueInput>
    update?: Enumerable<mas_positionlevel3UpdateWithWhereUniqueWithoutMas_positionlevel2Input>
    updateMany?: Enumerable<mas_positionlevel3UpdateManyWithWhereWithoutMas_positionlevel2Input>
    deleteMany?: Enumerable<mas_positionlevel3ScalarWhereInput>
  }

  export type Position_userUncheckedUpdateManyWithoutMas_positionlevel2NestedInput = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel2Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel2Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel2Input>
    upsert?: Enumerable<Position_userUpsertWithWhereUniqueWithoutMas_positionlevel2Input>
    createMany?: Position_userCreateManyMas_positionlevel2InputEnvelope
    set?: Enumerable<Position_userWhereUniqueInput>
    disconnect?: Enumerable<Position_userWhereUniqueInput>
    delete?: Enumerable<Position_userWhereUniqueInput>
    connect?: Enumerable<Position_userWhereUniqueInput>
    update?: Enumerable<Position_userUpdateWithWhereUniqueWithoutMas_positionlevel2Input>
    updateMany?: Enumerable<Position_userUpdateManyWithWhereWithoutMas_positionlevel2Input>
    deleteMany?: Enumerable<Position_userScalarWhereInput>
  }

  export type mas_positionlevel2CreateNestedOneWithoutMas_positionlevel3Input = {
    create?: XOR<mas_positionlevel2CreateWithoutMas_positionlevel3Input, mas_positionlevel2UncheckedCreateWithoutMas_positionlevel3Input>
    connectOrCreate?: mas_positionlevel2CreateOrConnectWithoutMas_positionlevel3Input
    connect?: mas_positionlevel2WhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutMas_positionlevel3Input = {
    create?: XOR<CompanyCreateWithoutMas_positionlevel3Input, CompanyUncheckedCreateWithoutMas_positionlevel3Input>
    connectOrCreate?: CompanyCreateOrConnectWithoutMas_positionlevel3Input
    connect?: CompanyWhereUniqueInput
  }

  export type Position_userCreateNestedManyWithoutMas_positionlevel3Input = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel3Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel3Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel3Input>
    createMany?: Position_userCreateManyMas_positionlevel3InputEnvelope
    connect?: Enumerable<Position_userWhereUniqueInput>
  }

  export type Position_userUncheckedCreateNestedManyWithoutMas_positionlevel3Input = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel3Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel3Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel3Input>
    createMany?: Position_userCreateManyMas_positionlevel3InputEnvelope
    connect?: Enumerable<Position_userWhereUniqueInput>
  }

  export type mas_positionlevel2UpdateOneWithoutMas_positionlevel3NestedInput = {
    create?: XOR<mas_positionlevel2CreateWithoutMas_positionlevel3Input, mas_positionlevel2UncheckedCreateWithoutMas_positionlevel3Input>
    connectOrCreate?: mas_positionlevel2CreateOrConnectWithoutMas_positionlevel3Input
    upsert?: mas_positionlevel2UpsertWithoutMas_positionlevel3Input
    disconnect?: boolean
    delete?: boolean
    connect?: mas_positionlevel2WhereUniqueInput
    update?: XOR<mas_positionlevel2UpdateWithoutMas_positionlevel3Input, mas_positionlevel2UncheckedUpdateWithoutMas_positionlevel3Input>
  }

  export type CompanyUpdateOneWithoutMas_positionlevel3NestedInput = {
    create?: XOR<CompanyCreateWithoutMas_positionlevel3Input, CompanyUncheckedCreateWithoutMas_positionlevel3Input>
    connectOrCreate?: CompanyCreateOrConnectWithoutMas_positionlevel3Input
    upsert?: CompanyUpsertWithoutMas_positionlevel3Input
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutMas_positionlevel3Input, CompanyUncheckedUpdateWithoutMas_positionlevel3Input>
  }

  export type Position_userUpdateManyWithoutMas_positionlevel3NestedInput = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel3Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel3Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel3Input>
    upsert?: Enumerable<Position_userUpsertWithWhereUniqueWithoutMas_positionlevel3Input>
    createMany?: Position_userCreateManyMas_positionlevel3InputEnvelope
    set?: Enumerable<Position_userWhereUniqueInput>
    disconnect?: Enumerable<Position_userWhereUniqueInput>
    delete?: Enumerable<Position_userWhereUniqueInput>
    connect?: Enumerable<Position_userWhereUniqueInput>
    update?: Enumerable<Position_userUpdateWithWhereUniqueWithoutMas_positionlevel3Input>
    updateMany?: Enumerable<Position_userUpdateManyWithWhereWithoutMas_positionlevel3Input>
    deleteMany?: Enumerable<Position_userScalarWhereInput>
  }

  export type Position_userUncheckedUpdateManyWithoutMas_positionlevel3NestedInput = {
    create?: XOR<Enumerable<Position_userCreateWithoutMas_positionlevel3Input>, Enumerable<Position_userUncheckedCreateWithoutMas_positionlevel3Input>>
    connectOrCreate?: Enumerable<Position_userCreateOrConnectWithoutMas_positionlevel3Input>
    upsert?: Enumerable<Position_userUpsertWithWhereUniqueWithoutMas_positionlevel3Input>
    createMany?: Position_userCreateManyMas_positionlevel3InputEnvelope
    set?: Enumerable<Position_userWhereUniqueInput>
    disconnect?: Enumerable<Position_userWhereUniqueInput>
    delete?: Enumerable<Position_userWhereUniqueInput>
    connect?: Enumerable<Position_userWhereUniqueInput>
    update?: Enumerable<Position_userUpdateWithWhereUniqueWithoutMas_positionlevel3Input>
    updateMany?: Enumerable<Position_userUpdateManyWithWhereWithoutMas_positionlevel3Input>
    deleteMany?: Enumerable<Position_userScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutHenchmanInput = {
    create?: XOR<UserCreateWithoutHenchmanInput, UserUncheckedCreateWithoutHenchmanInput>
    connectOrCreate?: UserCreateOrConnectWithoutHenchmanInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPosition_userInput = {
    create?: XOR<UserCreateWithoutPosition_userInput, UserUncheckedCreateWithoutPosition_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutPosition_userInput
    connect?: UserWhereUniqueInput
  }

  export type mas_positionlevel1CreateNestedOneWithoutPosition_userInput = {
    create?: XOR<mas_positionlevel1CreateWithoutPosition_userInput, mas_positionlevel1UncheckedCreateWithoutPosition_userInput>
    connectOrCreate?: mas_positionlevel1CreateOrConnectWithoutPosition_userInput
    connect?: mas_positionlevel1WhereUniqueInput
  }

  export type mas_positionlevel2CreateNestedOneWithoutPosition_userInput = {
    create?: XOR<mas_positionlevel2CreateWithoutPosition_userInput, mas_positionlevel2UncheckedCreateWithoutPosition_userInput>
    connectOrCreate?: mas_positionlevel2CreateOrConnectWithoutPosition_userInput
    connect?: mas_positionlevel2WhereUniqueInput
  }

  export type mas_positionlevel3CreateNestedOneWithoutPosition_userInput = {
    create?: XOR<mas_positionlevel3CreateWithoutPosition_userInput, mas_positionlevel3UncheckedCreateWithoutPosition_userInput>
    connectOrCreate?: mas_positionlevel3CreateOrConnectWithoutPosition_userInput
    connect?: mas_positionlevel3WhereUniqueInput
  }

  export type UserUpdateOneWithoutHenchmanNestedInput = {
    create?: XOR<UserCreateWithoutHenchmanInput, UserUncheckedCreateWithoutHenchmanInput>
    connectOrCreate?: UserCreateOrConnectWithoutHenchmanInput
    upsert?: UserUpsertWithoutHenchmanInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutHenchmanInput, UserUncheckedUpdateWithoutHenchmanInput>
  }

  export type UserUpdateOneWithoutPosition_userNestedInput = {
    create?: XOR<UserCreateWithoutPosition_userInput, UserUncheckedCreateWithoutPosition_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutPosition_userInput
    upsert?: UserUpsertWithoutPosition_userInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPosition_userInput, UserUncheckedUpdateWithoutPosition_userInput>
  }

  export type mas_positionlevel1UpdateOneWithoutPosition_userNestedInput = {
    create?: XOR<mas_positionlevel1CreateWithoutPosition_userInput, mas_positionlevel1UncheckedCreateWithoutPosition_userInput>
    connectOrCreate?: mas_positionlevel1CreateOrConnectWithoutPosition_userInput
    upsert?: mas_positionlevel1UpsertWithoutPosition_userInput
    disconnect?: boolean
    delete?: boolean
    connect?: mas_positionlevel1WhereUniqueInput
    update?: XOR<mas_positionlevel1UpdateWithoutPosition_userInput, mas_positionlevel1UncheckedUpdateWithoutPosition_userInput>
  }

  export type mas_positionlevel2UpdateOneWithoutPosition_userNestedInput = {
    create?: XOR<mas_positionlevel2CreateWithoutPosition_userInput, mas_positionlevel2UncheckedCreateWithoutPosition_userInput>
    connectOrCreate?: mas_positionlevel2CreateOrConnectWithoutPosition_userInput
    upsert?: mas_positionlevel2UpsertWithoutPosition_userInput
    disconnect?: boolean
    delete?: boolean
    connect?: mas_positionlevel2WhereUniqueInput
    update?: XOR<mas_positionlevel2UpdateWithoutPosition_userInput, mas_positionlevel2UncheckedUpdateWithoutPosition_userInput>
  }

  export type mas_positionlevel3UpdateOneWithoutPosition_userNestedInput = {
    create?: XOR<mas_positionlevel3CreateWithoutPosition_userInput, mas_positionlevel3UncheckedCreateWithoutPosition_userInput>
    connectOrCreate?: mas_positionlevel3CreateOrConnectWithoutPosition_userInput
    upsert?: mas_positionlevel3UpsertWithoutPosition_userInput
    disconnect?: boolean
    delete?: boolean
    connect?: mas_positionlevel3WhereUniqueInput
    update?: XOR<mas_positionlevel3UpdateWithoutPosition_userInput, mas_positionlevel3UncheckedUpdateWithoutPosition_userInput>
  }

  export type CompanyCreateNestedOneWithoutHoliday_dateInput = {
    create?: XOR<CompanyCreateWithoutHoliday_dateInput, CompanyUncheckedCreateWithoutHoliday_dateInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutHoliday_dateInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneWithoutHoliday_dateNestedInput = {
    create?: XOR<CompanyCreateWithoutHoliday_dateInput, CompanyUncheckedCreateWithoutHoliday_dateInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutHoliday_dateInput
    upsert?: CompanyUpsertWithoutHoliday_dateInput
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<CompanyUpdateWithoutHoliday_dateInput, CompanyUncheckedUpdateWithoutHoliday_dateInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedUuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableFilter | string | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedUuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type UserCreateWithoutCompanyInput = {
    id: string
    email: string
    password: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    companyBranch?: CompanyBranchCreateNestedOneWithoutUsersInput
    Role_Company?: Role_CompanyCreateNestedOneWithoutUsersInput
    Position_user?: Position_userCreateNestedOneWithoutUserInput
    henchman?: Position_userCreateNestedManyWithoutHeaderInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id: string
    email: string
    password: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    roleId?: string | null
    RoleCompanyID?: string | null
    companyBranchId?: string | null
    Position_user?: Position_userUncheckedCreateNestedOneWithoutUserInput
    henchman?: Position_userUncheckedCreateNestedManyWithoutHeaderInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyBranchCreateWithoutCompanyInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    address_2?: string | null
    city: string
    state: string
    zip: string
    country?: string | null
    tel?: string | null
    fax?: string | null
    website?: string | null
    lat?: string | null
    lng?: string | null
    email?: string | null
    email_2?: string | null
    company_type?: string | null
    sub_company_type?: string | null
    registeredamount?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_instragram?: string | null
    social_line?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyBranchInput
    Role_Company?: Role_CompanyCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUncheckedCreateWithoutCompanyInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    address_2?: string | null
    city: string
    state: string
    zip: string
    country?: string | null
    tel?: string | null
    fax?: string | null
    website?: string | null
    lat?: string | null
    lng?: string | null
    email?: string | null
    email_2?: string | null
    company_type?: string | null
    sub_company_type?: string | null
    registeredamount?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_instragram?: string | null
    social_line?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyBranchInput
    Role_Company?: Role_CompanyUncheckedCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchCreateOrConnectWithoutCompanyInput = {
    where: CompanyBranchWhereUniqueInput
    create: XOR<CompanyBranchCreateWithoutCompanyInput, CompanyBranchUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyBranchCreateManyCompanyInputEnvelope = {
    data: Enumerable<CompanyBranchCreateManyCompanyInput>
    skipDuplicates?: boolean
  }

  export type mas_positionlevel3CreateWithoutCompanyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel2?: mas_positionlevel2CreateNestedOneWithoutMas_positionlevel3Input
    Position_user?: Position_userCreateNestedManyWithoutMas_positionlevel3Input
  }

  export type mas_positionlevel3UncheckedCreateWithoutCompanyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel2_id?: string | null
    Position_user?: Position_userUncheckedCreateNestedManyWithoutMas_positionlevel3Input
  }

  export type mas_positionlevel3CreateOrConnectWithoutCompanyInput = {
    where: mas_positionlevel3WhereUniqueInput
    create: XOR<mas_positionlevel3CreateWithoutCompanyInput, mas_positionlevel3UncheckedCreateWithoutCompanyInput>
  }

  export type mas_positionlevel3CreateManyCompanyInputEnvelope = {
    data: Enumerable<mas_positionlevel3CreateManyCompanyInput>
    skipDuplicates?: boolean
  }

  export type mas_positionlevel2CreateWithoutCompanyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel1?: mas_positionlevel1CreateNestedOneWithoutMas_positionlevel2Input
    mas_positionlevel3?: mas_positionlevel3CreateNestedManyWithoutMas_positionlevel2Input
    position_user?: Position_userCreateNestedManyWithoutMas_positionlevel2Input
  }

  export type mas_positionlevel2UncheckedCreateWithoutCompanyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel1_id?: string | null
    mas_positionlevel3?: mas_positionlevel3UncheckedCreateNestedManyWithoutMas_positionlevel2Input
    position_user?: Position_userUncheckedCreateNestedManyWithoutMas_positionlevel2Input
  }

  export type mas_positionlevel2CreateOrConnectWithoutCompanyInput = {
    where: mas_positionlevel2WhereUniqueInput
    create: XOR<mas_positionlevel2CreateWithoutCompanyInput, mas_positionlevel2UncheckedCreateWithoutCompanyInput>
  }

  export type mas_positionlevel2CreateManyCompanyInputEnvelope = {
    data: Enumerable<mas_positionlevel2CreateManyCompanyInput>
    skipDuplicates?: boolean
  }

  export type mas_positionlevel1CreateWithoutCompanyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel2?: mas_positionlevel2CreateNestedManyWithoutMas_positionlevel1Input
    Position_user?: Position_userCreateNestedManyWithoutMas_positionlevel1Input
  }

  export type mas_positionlevel1UncheckedCreateWithoutCompanyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel2?: mas_positionlevel2UncheckedCreateNestedManyWithoutMas_positionlevel1Input
    Position_user?: Position_userUncheckedCreateNestedManyWithoutMas_positionlevel1Input
  }

  export type mas_positionlevel1CreateOrConnectWithoutCompanyInput = {
    where: mas_positionlevel1WhereUniqueInput
    create: XOR<mas_positionlevel1CreateWithoutCompanyInput, mas_positionlevel1UncheckedCreateWithoutCompanyInput>
  }

  export type mas_positionlevel1CreateManyCompanyInputEnvelope = {
    data: Enumerable<mas_positionlevel1CreateManyCompanyInput>
    skipDuplicates?: boolean
  }

  export type holiday_dateCreateWithoutCompanyInput = {
    id: string
    holiday_name?: string | null
    day: number
    month: number
    yaer: number
  }

  export type holiday_dateUncheckedCreateWithoutCompanyInput = {
    id: string
    holiday_name?: string | null
    day: number
    month: number
    yaer: number
  }

  export type holiday_dateCreateOrConnectWithoutCompanyInput = {
    where: holiday_dateWhereUniqueInput
    create: XOR<holiday_dateCreateWithoutCompanyInput, holiday_dateUncheckedCreateWithoutCompanyInput>
  }

  export type holiday_dateCreateManyCompanyInputEnvelope = {
    data: Enumerable<holiday_dateCreateManyCompanyInput>
    skipDuplicates?: boolean
  }

  export type mas_positionCreateWithoutCompanyInput = {
    id: string
    name: string
    level: number
  }

  export type mas_positionUncheckedCreateWithoutCompanyInput = {
    id: string
    name: string
    level: number
  }

  export type mas_positionCreateOrConnectWithoutCompanyInput = {
    where: mas_positionWhereUniqueInput
    create: XOR<mas_positionCreateWithoutCompanyInput, mas_positionUncheckedCreateWithoutCompanyInput>
  }

  export type mas_positionCreateManyCompanyInputEnvelope = {
    data: Enumerable<mas_positionCreateManyCompanyInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCompanyInput = {
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    companyBranch?: CompanyBranchUpdateOneWithoutUsersNestedInput
    Role_Company?: Role_CompanyUpdateOneWithoutUsersNestedInput
    Position_user?: Position_userUpdateOneWithoutUserNestedInput
    henchman?: Position_userUpdateManyWithoutHeaderNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    RoleCompanyID?: NullableStringFieldUpdateOperationsInput | string | null
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    Position_user?: Position_userUncheckedUpdateOneWithoutUserNestedInput
    henchman?: Position_userUncheckedUpdateManyWithoutHeaderNestedInput
  }

  export type CompanyBranchUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyBranchWhereUniqueInput
    update: XOR<CompanyBranchUpdateWithoutCompanyInput, CompanyBranchUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyBranchCreateWithoutCompanyInput, CompanyBranchUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyBranchUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyBranchWhereUniqueInput
    data: XOR<CompanyBranchUpdateWithoutCompanyInput, CompanyBranchUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyBranchUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyBranchScalarWhereInput
    data: XOR<CompanyBranchUpdateManyMutationInput, CompanyBranchUncheckedUpdateManyWithoutBranchInput>
  }

  export type CompanyBranchScalarWhereInput = {
    AND?: Enumerable<CompanyBranchScalarWhereInput>
    OR?: Enumerable<CompanyBranchScalarWhereInput>
    NOT?: Enumerable<CompanyBranchScalarWhereInput>
    id?: UuidFilter | string
    isMainbranch?: BoolFilter | boolean
    name?: StringFilter | string
    address?: StringFilter | string
    address_2?: StringNullableFilter | string | null
    city?: StringFilter | string
    state?: StringFilter | string
    zip?: StringFilter | string
    country?: StringNullableFilter | string | null
    tel?: StringNullableFilter | string | null
    fax?: StringNullableFilter | string | null
    website?: StringNullableFilter | string | null
    lat?: StringNullableFilter | string | null
    lng?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    email_2?: StringNullableFilter | string | null
    company_type?: StringNullableFilter | string | null
    sub_company_type?: StringNullableFilter | string | null
    registeredamount?: StringNullableFilter | string | null
    social_facebook?: StringNullableFilter | string | null
    social_likedin?: StringNullableFilter | string | null
    social_instragram?: StringNullableFilter | string | null
    social_line?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    companyId?: UuidNullableFilter | string | null
  }

  export type mas_positionlevel3UpsertWithWhereUniqueWithoutCompanyInput = {
    where: mas_positionlevel3WhereUniqueInput
    update: XOR<mas_positionlevel3UpdateWithoutCompanyInput, mas_positionlevel3UncheckedUpdateWithoutCompanyInput>
    create: XOR<mas_positionlevel3CreateWithoutCompanyInput, mas_positionlevel3UncheckedCreateWithoutCompanyInput>
  }

  export type mas_positionlevel3UpdateWithWhereUniqueWithoutCompanyInput = {
    where: mas_positionlevel3WhereUniqueInput
    data: XOR<mas_positionlevel3UpdateWithoutCompanyInput, mas_positionlevel3UncheckedUpdateWithoutCompanyInput>
  }

  export type mas_positionlevel3UpdateManyWithWhereWithoutCompanyInput = {
    where: mas_positionlevel3ScalarWhereInput
    data: XOR<mas_positionlevel3UpdateManyMutationInput, mas_positionlevel3UncheckedUpdateManyWithoutMas_positionlevel3Input>
  }

  export type mas_positionlevel3ScalarWhereInput = {
    AND?: Enumerable<mas_positionlevel3ScalarWhereInput>
    OR?: Enumerable<mas_positionlevel3ScalarWhereInput>
    NOT?: Enumerable<mas_positionlevel3ScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    level?: IntFilter | number
    code?: StringFilter | string
    type?: StringFilter | string
    positionlevel2_id?: UuidNullableFilter | string | null
    CompanyId?: UuidNullableFilter | string | null
  }

  export type mas_positionlevel2UpsertWithWhereUniqueWithoutCompanyInput = {
    where: mas_positionlevel2WhereUniqueInput
    update: XOR<mas_positionlevel2UpdateWithoutCompanyInput, mas_positionlevel2UncheckedUpdateWithoutCompanyInput>
    create: XOR<mas_positionlevel2CreateWithoutCompanyInput, mas_positionlevel2UncheckedCreateWithoutCompanyInput>
  }

  export type mas_positionlevel2UpdateWithWhereUniqueWithoutCompanyInput = {
    where: mas_positionlevel2WhereUniqueInput
    data: XOR<mas_positionlevel2UpdateWithoutCompanyInput, mas_positionlevel2UncheckedUpdateWithoutCompanyInput>
  }

  export type mas_positionlevel2UpdateManyWithWhereWithoutCompanyInput = {
    where: mas_positionlevel2ScalarWhereInput
    data: XOR<mas_positionlevel2UpdateManyMutationInput, mas_positionlevel2UncheckedUpdateManyWithoutMas_positionlevel2Input>
  }

  export type mas_positionlevel2ScalarWhereInput = {
    AND?: Enumerable<mas_positionlevel2ScalarWhereInput>
    OR?: Enumerable<mas_positionlevel2ScalarWhereInput>
    NOT?: Enumerable<mas_positionlevel2ScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    level?: IntFilter | number
    code?: StringFilter | string
    type?: StringFilter | string
    positionlevel1_id?: UuidNullableFilter | string | null
    CompanyId?: UuidNullableFilter | string | null
  }

  export type mas_positionlevel1UpsertWithWhereUniqueWithoutCompanyInput = {
    where: mas_positionlevel1WhereUniqueInput
    update: XOR<mas_positionlevel1UpdateWithoutCompanyInput, mas_positionlevel1UncheckedUpdateWithoutCompanyInput>
    create: XOR<mas_positionlevel1CreateWithoutCompanyInput, mas_positionlevel1UncheckedCreateWithoutCompanyInput>
  }

  export type mas_positionlevel1UpdateWithWhereUniqueWithoutCompanyInput = {
    where: mas_positionlevel1WhereUniqueInput
    data: XOR<mas_positionlevel1UpdateWithoutCompanyInput, mas_positionlevel1UncheckedUpdateWithoutCompanyInput>
  }

  export type mas_positionlevel1UpdateManyWithWhereWithoutCompanyInput = {
    where: mas_positionlevel1ScalarWhereInput
    data: XOR<mas_positionlevel1UpdateManyMutationInput, mas_positionlevel1UncheckedUpdateManyWithoutMas_positionlevel1Input>
  }

  export type mas_positionlevel1ScalarWhereInput = {
    AND?: Enumerable<mas_positionlevel1ScalarWhereInput>
    OR?: Enumerable<mas_positionlevel1ScalarWhereInput>
    NOT?: Enumerable<mas_positionlevel1ScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    level?: IntFilter | number
    code?: StringFilter | string
    type?: StringFilter | string
    CompanyId?: UuidNullableFilter | string | null
  }

  export type holiday_dateUpsertWithWhereUniqueWithoutCompanyInput = {
    where: holiday_dateWhereUniqueInput
    update: XOR<holiday_dateUpdateWithoutCompanyInput, holiday_dateUncheckedUpdateWithoutCompanyInput>
    create: XOR<holiday_dateCreateWithoutCompanyInput, holiday_dateUncheckedCreateWithoutCompanyInput>
  }

  export type holiday_dateUpdateWithWhereUniqueWithoutCompanyInput = {
    where: holiday_dateWhereUniqueInput
    data: XOR<holiday_dateUpdateWithoutCompanyInput, holiday_dateUncheckedUpdateWithoutCompanyInput>
  }

  export type holiday_dateUpdateManyWithWhereWithoutCompanyInput = {
    where: holiday_dateScalarWhereInput
    data: XOR<holiday_dateUpdateManyMutationInput, holiday_dateUncheckedUpdateManyWithoutHoliday_dateInput>
  }

  export type holiday_dateScalarWhereInput = {
    AND?: Enumerable<holiday_dateScalarWhereInput>
    OR?: Enumerable<holiday_dateScalarWhereInput>
    NOT?: Enumerable<holiday_dateScalarWhereInput>
    id?: UuidFilter | string
    holiday_name?: StringNullableFilter | string | null
    day?: IntFilter | number
    month?: IntFilter | number
    yaer?: IntFilter | number
    CompanyId?: UuidNullableFilter | string | null
  }

  export type mas_positionUpsertWithWhereUniqueWithoutCompanyInput = {
    where: mas_positionWhereUniqueInput
    update: XOR<mas_positionUpdateWithoutCompanyInput, mas_positionUncheckedUpdateWithoutCompanyInput>
    create: XOR<mas_positionCreateWithoutCompanyInput, mas_positionUncheckedCreateWithoutCompanyInput>
  }

  export type mas_positionUpdateWithWhereUniqueWithoutCompanyInput = {
    where: mas_positionWhereUniqueInput
    data: XOR<mas_positionUpdateWithoutCompanyInput, mas_positionUncheckedUpdateWithoutCompanyInput>
  }

  export type mas_positionUpdateManyWithWhereWithoutCompanyInput = {
    where: mas_positionScalarWhereInput
    data: XOR<mas_positionUpdateManyMutationInput, mas_positionUncheckedUpdateManyWithoutMas_positionInput>
  }

  export type mas_positionScalarWhereInput = {
    AND?: Enumerable<mas_positionScalarWhereInput>
    OR?: Enumerable<mas_positionScalarWhereInput>
    NOT?: Enumerable<mas_positionScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    level?: IntFilter | number
    CompanyId?: UuidNullableFilter | string | null
  }

  export type CompanyCreateWithoutBranchInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutBranchInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    mas_positionlevel3?: mas_positionlevel3UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1UncheckedCreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateUncheckedCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutBranchInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutBranchInput, CompanyUncheckedCreateWithoutBranchInput>
  }

  export type UserCreateWithoutCompanyBranchInput = {
    id: string
    email: string
    password: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    company?: CompanyCreateNestedManyWithoutOwnerInput
    Role_Company?: Role_CompanyCreateNestedOneWithoutUsersInput
    Position_user?: Position_userCreateNestedOneWithoutUserInput
    henchman?: Position_userCreateNestedManyWithoutHeaderInput
  }

  export type UserUncheckedCreateWithoutCompanyBranchInput = {
    id: string
    email: string
    password: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    roleId?: string | null
    RoleCompanyID?: string | null
    company?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    Position_user?: Position_userUncheckedCreateNestedOneWithoutUserInput
    henchman?: Position_userUncheckedCreateNestedManyWithoutHeaderInput
  }

  export type UserCreateOrConnectWithoutCompanyBranchInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyBranchInput, UserUncheckedCreateWithoutCompanyBranchInput>
  }

  export type UserCreateManyCompanyBranchInputEnvelope = {
    data: Enumerable<UserCreateManyCompanyBranchInput>
    skipDuplicates?: boolean
  }

  export type Role_CompanyCreateWithoutCompanyBranchInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    status: number
    users?: UserCreateNestedManyWithoutRole_CompanyInput
  }

  export type Role_CompanyUncheckedCreateWithoutCompanyBranchInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    status: number
    users?: UserUncheckedCreateNestedManyWithoutRole_CompanyInput
  }

  export type Role_CompanyCreateOrConnectWithoutCompanyBranchInput = {
    where: Role_CompanyWhereUniqueInput
    create: XOR<Role_CompanyCreateWithoutCompanyBranchInput, Role_CompanyUncheckedCreateWithoutCompanyBranchInput>
  }

  export type Role_CompanyCreateManyCompanyBranchInputEnvelope = {
    data: Enumerable<Role_CompanyCreateManyCompanyBranchInput>
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutBranchInput = {
    update: XOR<CompanyUpdateWithoutBranchInput, CompanyUncheckedUpdateWithoutBranchInput>
    create: XOR<CompanyCreateWithoutBranchInput, CompanyUncheckedCreateWithoutBranchInput>
  }

  export type CompanyUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    mas_positionlevel3?: mas_positionlevel3UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UncheckedUpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUncheckedUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyBranchInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyBranchInput, UserUncheckedUpdateWithoutCompanyBranchInput>
    create: XOR<UserCreateWithoutCompanyBranchInput, UserUncheckedCreateWithoutCompanyBranchInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyBranchInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyBranchInput, UserUncheckedUpdateWithoutCompanyBranchInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyBranchInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: UuidFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    islogin?: BoolFilter | boolean
    isActive?: BoolFilter | boolean
    isOwner?: BoolFilter | boolean
    lastlogin?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    roleId?: UuidNullableFilter | string | null
    RoleCompanyID?: UuidNullableFilter | string | null
    companyBranchId?: UuidNullableFilter | string | null
  }

  export type Role_CompanyUpsertWithWhereUniqueWithoutCompanyBranchInput = {
    where: Role_CompanyWhereUniqueInput
    update: XOR<Role_CompanyUpdateWithoutCompanyBranchInput, Role_CompanyUncheckedUpdateWithoutCompanyBranchInput>
    create: XOR<Role_CompanyCreateWithoutCompanyBranchInput, Role_CompanyUncheckedCreateWithoutCompanyBranchInput>
  }

  export type Role_CompanyUpdateWithWhereUniqueWithoutCompanyBranchInput = {
    where: Role_CompanyWhereUniqueInput
    data: XOR<Role_CompanyUpdateWithoutCompanyBranchInput, Role_CompanyUncheckedUpdateWithoutCompanyBranchInput>
  }

  export type Role_CompanyUpdateManyWithWhereWithoutCompanyBranchInput = {
    where: Role_CompanyScalarWhereInput
    data: XOR<Role_CompanyUpdateManyMutationInput, Role_CompanyUncheckedUpdateManyWithoutRole_CompanyInput>
  }

  export type Role_CompanyScalarWhereInput = {
    AND?: Enumerable<Role_CompanyScalarWhereInput>
    OR?: Enumerable<Role_CompanyScalarWhereInput>
    NOT?: Enumerable<Role_CompanyScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    access?: JsonFilter
    status?: IntFilter | number
    companyBranchId?: UuidNullableFilter | string | null
  }

  export type UserCreateWithoutProfileInput = {
    id: string
    email: string
    password: string
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    company?: CompanyCreateNestedManyWithoutOwnerInput
    companyBranch?: CompanyBranchCreateNestedOneWithoutUsersInput
    Role_Company?: Role_CompanyCreateNestedOneWithoutUsersInput
    Position_user?: Position_userCreateNestedOneWithoutUserInput
    henchman?: Position_userCreateNestedManyWithoutHeaderInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id: string
    email: string
    password: string
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    roleId?: string | null
    RoleCompanyID?: string | null
    company?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companyBranchId?: string | null
    Position_user?: Position_userUncheckedCreateNestedOneWithoutUserInput
    henchman?: Position_userUncheckedCreateNestedManyWithoutHeaderInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    company?: CompanyUpdateManyWithoutOwnerNestedInput
    companyBranch?: CompanyBranchUpdateOneWithoutUsersNestedInput
    Role_Company?: Role_CompanyUpdateOneWithoutUsersNestedInput
    Position_user?: Position_userUpdateOneWithoutUserNestedInput
    henchman?: Position_userUpdateManyWithoutHeaderNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    RoleCompanyID?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    Position_user?: Position_userUncheckedUpdateOneWithoutUserNestedInput
    henchman?: Position_userUncheckedUpdateManyWithoutHeaderNestedInput
  }

  export type ProfileCreateWithoutUserInput = {
    id: string
    bio?: string | null
    firstname_th?: string | null
    lastname_th?: string | null
    firstname_en?: string | null
    lastname_en?: string | null
    nickname?: string | null
    blood_type?: string | null
    employee_status?: string | null
    start_date_work?: Date | string | null
    avatar?: string | null
    dob?: Date | string | null
    age?: string | null
    relationship?: string | null
    shirt_size?: string | null
    prefix_th?: string | null
    prefix_en?: string | null
    citizen_id?: string | null
    social_id?: string | null
    staff_status?: string | null
    tel?: string | null
    address?: string | null
    gender?: string | null
    staff_code?: string | null
    religion?: string | null
    citizen_addressnumber?: string | null
    citizen_address?: string | null
    citizen_country?: string | null
    citizen_province?: string | null
    citizen_district?: string | null
    citizen_state?: string | null
    citizen_zipcode?: string | null
    citizen_tel?: string | null
    contract_sameCitizen?: boolean
    contract_addressnumber?: string | null
    contract_address?: string | null
    contract_country?: string | null
    contract_province?: string | null
    contract_district?: string | null
    contract_state?: string | null
    contract_zipcode?: string | null
    contract_email?: string | null
    contract_companyemail?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_line?: string | null
    social_telegram?: string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id: string
    bio?: string | null
    firstname_th?: string | null
    lastname_th?: string | null
    firstname_en?: string | null
    lastname_en?: string | null
    nickname?: string | null
    blood_type?: string | null
    employee_status?: string | null
    start_date_work?: Date | string | null
    avatar?: string | null
    dob?: Date | string | null
    age?: string | null
    relationship?: string | null
    shirt_size?: string | null
    prefix_th?: string | null
    prefix_en?: string | null
    citizen_id?: string | null
    social_id?: string | null
    staff_status?: string | null
    tel?: string | null
    address?: string | null
    gender?: string | null
    staff_code?: string | null
    religion?: string | null
    citizen_addressnumber?: string | null
    citizen_address?: string | null
    citizen_country?: string | null
    citizen_province?: string | null
    citizen_district?: string | null
    citizen_state?: string | null
    citizen_zipcode?: string | null
    citizen_tel?: string | null
    contract_sameCitizen?: boolean
    contract_addressnumber?: string | null
    contract_address?: string | null
    contract_country?: string | null
    contract_province?: string | null
    contract_district?: string | null
    contract_state?: string | null
    contract_zipcode?: string | null
    contract_email?: string | null
    contract_companyemail?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_line?: string | null
    social_telegram?: string | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type RoleCreateWithoutUsersInput = {
    id: string
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id: string
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type CompanyCreateWithoutOwnerInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: CompanyBranchCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutOwnerInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1UncheckedCreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateUncheckedCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutOwnerInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutOwnerInput, CompanyUncheckedCreateWithoutOwnerInput>
  }

  export type CompanyCreateManyOwnerInputEnvelope = {
    data: Enumerable<CompanyCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type CompanyBranchCreateWithoutUsersInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    address_2?: string | null
    city: string
    state: string
    zip: string
    country?: string | null
    tel?: string | null
    fax?: string | null
    website?: string | null
    lat?: string | null
    lng?: string | null
    email?: string | null
    email_2?: string | null
    company_type?: string | null
    sub_company_type?: string | null
    registeredamount?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_instragram?: string | null
    social_line?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchInput
    Role_Company?: Role_CompanyCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUncheckedCreateWithoutUsersInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    address_2?: string | null
    city: string
    state: string
    zip: string
    country?: string | null
    tel?: string | null
    fax?: string | null
    website?: string | null
    lat?: string | null
    lng?: string | null
    email?: string | null
    email_2?: string | null
    company_type?: string | null
    sub_company_type?: string | null
    registeredamount?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_instragram?: string | null
    social_line?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: string | null
    Role_Company?: Role_CompanyUncheckedCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchCreateOrConnectWithoutUsersInput = {
    where: CompanyBranchWhereUniqueInput
    create: XOR<CompanyBranchCreateWithoutUsersInput, CompanyBranchUncheckedCreateWithoutUsersInput>
  }

  export type Role_CompanyCreateWithoutUsersInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    status: number
    companyBranch?: CompanyBranchCreateNestedOneWithoutRole_CompanyInput
  }

  export type Role_CompanyUncheckedCreateWithoutUsersInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    status: number
    companyBranchId?: string | null
  }

  export type Role_CompanyCreateOrConnectWithoutUsersInput = {
    where: Role_CompanyWhereUniqueInput
    create: XOR<Role_CompanyCreateWithoutUsersInput, Role_CompanyUncheckedCreateWithoutUsersInput>
  }

  export type Position_userCreateWithoutUserInput = {
    id: string
    role?: string | null
    header?: UserCreateNestedOneWithoutHenchmanInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedOneWithoutPosition_userInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedOneWithoutPosition_userInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedOneWithoutPosition_userInput
  }

  export type Position_userUncheckedCreateWithoutUserInput = {
    id: string
    position1_id?: string | null
    position2_id?: string | null
    position3_id?: string | null
    role?: string | null
    headderId?: string | null
  }

  export type Position_userCreateOrConnectWithoutUserInput = {
    where: Position_userWhereUniqueInput
    create: XOR<Position_userCreateWithoutUserInput, Position_userUncheckedCreateWithoutUserInput>
  }

  export type Position_userCreateWithoutHeaderInput = {
    id: string
    role?: string | null
    user?: UserCreateNestedOneWithoutPosition_userInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedOneWithoutPosition_userInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedOneWithoutPosition_userInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedOneWithoutPosition_userInput
  }

  export type Position_userUncheckedCreateWithoutHeaderInput = {
    id: string
    user_id?: string | null
    position1_id?: string | null
    position2_id?: string | null
    position3_id?: string | null
    role?: string | null
  }

  export type Position_userCreateOrConnectWithoutHeaderInput = {
    where: Position_userWhereUniqueInput
    create: XOR<Position_userCreateWithoutHeaderInput, Position_userUncheckedCreateWithoutHeaderInput>
  }

  export type Position_userCreateManyHeaderInputEnvelope = {
    data: Enumerable<Position_userCreateManyHeaderInput>
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_th?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_th?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_en?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_en?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date_work?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    shirt_size?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_th?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_en?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_id?: NullableStringFieldUpdateOperationsInput | string | null
    social_id?: NullableStringFieldUpdateOperationsInput | string | null
    staff_status?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_address?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_country?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_province?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_district?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_state?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_tel?: NullableStringFieldUpdateOperationsInput | string | null
    contract_sameCitizen?: BoolFieldUpdateOperationsInput | boolean
    contract_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    contract_country?: NullableStringFieldUpdateOperationsInput | string | null
    contract_province?: NullableStringFieldUpdateOperationsInput | string | null
    contract_district?: NullableStringFieldUpdateOperationsInput | string | null
    contract_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    contract_email?: NullableStringFieldUpdateOperationsInput | string | null
    contract_companyemail?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    social_telegram?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_th?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_th?: NullableStringFieldUpdateOperationsInput | string | null
    firstname_en?: NullableStringFieldUpdateOperationsInput | string | null
    lastname_en?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null
    start_date_work?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    relationship?: NullableStringFieldUpdateOperationsInput | string | null
    shirt_size?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_th?: NullableStringFieldUpdateOperationsInput | string | null
    prefix_en?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_id?: NullableStringFieldUpdateOperationsInput | string | null
    social_id?: NullableStringFieldUpdateOperationsInput | string | null
    staff_status?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_address?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_country?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_province?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_district?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_state?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    citizen_tel?: NullableStringFieldUpdateOperationsInput | string | null
    contract_sameCitizen?: BoolFieldUpdateOperationsInput | boolean
    contract_addressnumber?: NullableStringFieldUpdateOperationsInput | string | null
    contract_address?: NullableStringFieldUpdateOperationsInput | string | null
    contract_country?: NullableStringFieldUpdateOperationsInput | string | null
    contract_province?: NullableStringFieldUpdateOperationsInput | string | null
    contract_district?: NullableStringFieldUpdateOperationsInput | string | null
    contract_state?: NullableStringFieldUpdateOperationsInput | string | null
    contract_zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    contract_email?: NullableStringFieldUpdateOperationsInput | string | null
    contract_companyemail?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    social_telegram?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutOwnerInput, CompanyUncheckedUpdateWithoutOwnerInput>
    create: XOR<CompanyCreateWithoutOwnerInput, CompanyUncheckedCreateWithoutOwnerInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutOwnerInput, CompanyUncheckedUpdateWithoutOwnerInput>
  }

  export type CompanyUpdateManyWithWhereWithoutOwnerInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: Enumerable<CompanyScalarWhereInput>
    OR?: Enumerable<CompanyScalarWhereInput>
    NOT?: Enumerable<CompanyScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    companyCode?: StringFilter | string
    userlimit?: IntFilter | number
    company_registration_id?: StringNullableFilter | string | null
    company_vat_id?: StringNullableFilter | string | null
    icon?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ownerId?: UuidFilter | string
  }

  export type CompanyBranchUpsertWithoutUsersInput = {
    update: XOR<CompanyBranchUpdateWithoutUsersInput, CompanyBranchUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyBranchCreateWithoutUsersInput, CompanyBranchUncheckedCreateWithoutUsersInput>
  }

  export type CompanyBranchUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_2?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    sub_company_type?: NullableStringFieldUpdateOperationsInput | string | null
    registeredamount?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_instragram?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchNestedInput
    Role_Company?: Role_CompanyUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_2?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    sub_company_type?: NullableStringFieldUpdateOperationsInput | string | null
    registeredamount?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_instragram?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Company?: Role_CompanyUncheckedUpdateManyWithoutCompanyBranchNestedInput
  }

  export type Role_CompanyUpsertWithoutUsersInput = {
    update: XOR<Role_CompanyUpdateWithoutUsersInput, Role_CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<Role_CompanyCreateWithoutUsersInput, Role_CompanyUncheckedCreateWithoutUsersInput>
  }

  export type Role_CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    status?: IntFieldUpdateOperationsInput | number
    companyBranch?: CompanyBranchUpdateOneWithoutRole_CompanyNestedInput
  }

  export type Role_CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    status?: IntFieldUpdateOperationsInput | number
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Position_userUpsertWithoutUserInput = {
    update: XOR<Position_userUpdateWithoutUserInput, Position_userUncheckedUpdateWithoutUserInput>
    create: XOR<Position_userCreateWithoutUserInput, Position_userUncheckedCreateWithoutUserInput>
  }

  export type Position_userUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    header?: UserUpdateOneWithoutHenchmanNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateOneWithoutPosition_userNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateOneWithoutPosition_userNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateOneWithoutPosition_userNestedInput
  }

  export type Position_userUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    position1_id?: NullableStringFieldUpdateOperationsInput | string | null
    position2_id?: NullableStringFieldUpdateOperationsInput | string | null
    position3_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    headderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Position_userUpsertWithWhereUniqueWithoutHeaderInput = {
    where: Position_userWhereUniqueInput
    update: XOR<Position_userUpdateWithoutHeaderInput, Position_userUncheckedUpdateWithoutHeaderInput>
    create: XOR<Position_userCreateWithoutHeaderInput, Position_userUncheckedCreateWithoutHeaderInput>
  }

  export type Position_userUpdateWithWhereUniqueWithoutHeaderInput = {
    where: Position_userWhereUniqueInput
    data: XOR<Position_userUpdateWithoutHeaderInput, Position_userUncheckedUpdateWithoutHeaderInput>
  }

  export type Position_userUpdateManyWithWhereWithoutHeaderInput = {
    where: Position_userScalarWhereInput
    data: XOR<Position_userUpdateManyMutationInput, Position_userUncheckedUpdateManyWithoutHenchmanInput>
  }

  export type Position_userScalarWhereInput = {
    AND?: Enumerable<Position_userScalarWhereInput>
    OR?: Enumerable<Position_userScalarWhereInput>
    NOT?: Enumerable<Position_userScalarWhereInput>
    id?: UuidFilter | string
    user_id?: UuidNullableFilter | string | null
    position1_id?: UuidNullableFilter | string | null
    position2_id?: UuidNullableFilter | string | null
    position3_id?: UuidNullableFilter | string | null
    role?: StringNullableFilter | string | null
    headderId?: UuidNullableFilter | string | null
  }

  export type UserCreateWithoutRoleInput = {
    id: string
    email: string
    password: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    company?: CompanyCreateNestedManyWithoutOwnerInput
    companyBranch?: CompanyBranchCreateNestedOneWithoutUsersInput
    Role_Company?: Role_CompanyCreateNestedOneWithoutUsersInput
    Position_user?: Position_userCreateNestedOneWithoutUserInput
    henchman?: Position_userCreateNestedManyWithoutHeaderInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id: string
    email: string
    password: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    RoleCompanyID?: string | null
    company?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companyBranchId?: string | null
    Position_user?: Position_userUncheckedCreateNestedOneWithoutUserInput
    henchman?: Position_userUncheckedCreateNestedManyWithoutHeaderInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: Enumerable<UserCreateManyRoleInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserCreateWithoutRole_CompanyInput = {
    id: string
    email: string
    password: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    company?: CompanyCreateNestedManyWithoutOwnerInput
    companyBranch?: CompanyBranchCreateNestedOneWithoutUsersInput
    Position_user?: Position_userCreateNestedOneWithoutUserInput
    henchman?: Position_userCreateNestedManyWithoutHeaderInput
  }

  export type UserUncheckedCreateWithoutRole_CompanyInput = {
    id: string
    email: string
    password: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    roleId?: string | null
    company?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companyBranchId?: string | null
    Position_user?: Position_userUncheckedCreateNestedOneWithoutUserInput
    henchman?: Position_userUncheckedCreateNestedManyWithoutHeaderInput
  }

  export type UserCreateOrConnectWithoutRole_CompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRole_CompanyInput, UserUncheckedCreateWithoutRole_CompanyInput>
  }

  export type UserCreateManyRole_CompanyInputEnvelope = {
    data: Enumerable<UserCreateManyRole_CompanyInput>
    skipDuplicates?: boolean
  }

  export type CompanyBranchCreateWithoutRole_CompanyInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    address_2?: string | null
    city: string
    state: string
    zip: string
    country?: string | null
    tel?: string | null
    fax?: string | null
    website?: string | null
    lat?: string | null
    lng?: string | null
    email?: string | null
    email_2?: string | null
    company_type?: string | null
    sub_company_type?: string | null
    registeredamount?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_instragram?: string | null
    social_line?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchInput
    users?: UserCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUncheckedCreateWithoutRole_CompanyInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    address_2?: string | null
    city: string
    state: string
    zip: string
    country?: string | null
    tel?: string | null
    fax?: string | null
    website?: string | null
    lat?: string | null
    lng?: string | null
    email?: string | null
    email_2?: string | null
    company_type?: string | null
    sub_company_type?: string | null
    registeredamount?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_instragram?: string | null
    social_line?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchCreateOrConnectWithoutRole_CompanyInput = {
    where: CompanyBranchWhereUniqueInput
    create: XOR<CompanyBranchCreateWithoutRole_CompanyInput, CompanyBranchUncheckedCreateWithoutRole_CompanyInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRole_CompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRole_CompanyInput, UserUncheckedUpdateWithoutRole_CompanyInput>
    create: XOR<UserCreateWithoutRole_CompanyInput, UserUncheckedCreateWithoutRole_CompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRole_CompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRole_CompanyInput, UserUncheckedUpdateWithoutRole_CompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutRole_CompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type CompanyBranchUpsertWithoutRole_CompanyInput = {
    update: XOR<CompanyBranchUpdateWithoutRole_CompanyInput, CompanyBranchUncheckedUpdateWithoutRole_CompanyInput>
    create: XOR<CompanyBranchCreateWithoutRole_CompanyInput, CompanyBranchUncheckedCreateWithoutRole_CompanyInput>
  }

  export type CompanyBranchUpdateWithoutRole_CompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_2?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    sub_company_type?: NullableStringFieldUpdateOperationsInput | string | null
    registeredamount?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_instragram?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchNestedInput
    users?: UserUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateWithoutRole_CompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_2?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    sub_company_type?: NullableStringFieldUpdateOperationsInput | string | null
    registeredamount?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_instragram?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyBranchNestedInput
  }

  export type DistrictCreateWithoutProvinceInput = {
    id: string
    name: string
    amphoe?: AmphoeCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutProvinceInput = {
    id: string
    name: string
    amphoe?: AmphoeUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutProvinceInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput>
  }

  export type DistrictCreateManyProvinceInputEnvelope = {
    data: Enumerable<DistrictCreateManyProvinceInput>
    skipDuplicates?: boolean
  }

  export type DistrictUpsertWithWhereUniqueWithoutProvinceInput = {
    where: DistrictWhereUniqueInput
    update: XOR<DistrictUpdateWithoutProvinceInput, DistrictUncheckedUpdateWithoutProvinceInput>
    create: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput>
  }

  export type DistrictUpdateWithWhereUniqueWithoutProvinceInput = {
    where: DistrictWhereUniqueInput
    data: XOR<DistrictUpdateWithoutProvinceInput, DistrictUncheckedUpdateWithoutProvinceInput>
  }

  export type DistrictUpdateManyWithWhereWithoutProvinceInput = {
    where: DistrictScalarWhereInput
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyWithoutDistrictInput>
  }

  export type DistrictScalarWhereInput = {
    AND?: Enumerable<DistrictScalarWhereInput>
    OR?: Enumerable<DistrictScalarWhereInput>
    NOT?: Enumerable<DistrictScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    provinceId?: UuidFilter | string
  }

  export type ProvinceCreateWithoutDistrictInput = {
    id: string
    name: string
  }

  export type ProvinceUncheckedCreateWithoutDistrictInput = {
    id: string
    name: string
  }

  export type ProvinceCreateOrConnectWithoutDistrictInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutDistrictInput, ProvinceUncheckedCreateWithoutDistrictInput>
  }

  export type AmphoeCreateWithoutDistrictInput = {
    id: string
    name: string
    zipcode?: string | null
  }

  export type AmphoeUncheckedCreateWithoutDistrictInput = {
    id: string
    name: string
    zipcode?: string | null
  }

  export type AmphoeCreateOrConnectWithoutDistrictInput = {
    where: AmphoeWhereUniqueInput
    create: XOR<AmphoeCreateWithoutDistrictInput, AmphoeUncheckedCreateWithoutDistrictInput>
  }

  export type AmphoeCreateManyDistrictInputEnvelope = {
    data: Enumerable<AmphoeCreateManyDistrictInput>
    skipDuplicates?: boolean
  }

  export type ProvinceUpsertWithoutDistrictInput = {
    update: XOR<ProvinceUpdateWithoutDistrictInput, ProvinceUncheckedUpdateWithoutDistrictInput>
    create: XOR<ProvinceCreateWithoutDistrictInput, ProvinceUncheckedCreateWithoutDistrictInput>
  }

  export type ProvinceUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceUncheckedUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmphoeUpsertWithWhereUniqueWithoutDistrictInput = {
    where: AmphoeWhereUniqueInput
    update: XOR<AmphoeUpdateWithoutDistrictInput, AmphoeUncheckedUpdateWithoutDistrictInput>
    create: XOR<AmphoeCreateWithoutDistrictInput, AmphoeUncheckedCreateWithoutDistrictInput>
  }

  export type AmphoeUpdateWithWhereUniqueWithoutDistrictInput = {
    where: AmphoeWhereUniqueInput
    data: XOR<AmphoeUpdateWithoutDistrictInput, AmphoeUncheckedUpdateWithoutDistrictInput>
  }

  export type AmphoeUpdateManyWithWhereWithoutDistrictInput = {
    where: AmphoeScalarWhereInput
    data: XOR<AmphoeUpdateManyMutationInput, AmphoeUncheckedUpdateManyWithoutAmphoeInput>
  }

  export type AmphoeScalarWhereInput = {
    AND?: Enumerable<AmphoeScalarWhereInput>
    OR?: Enumerable<AmphoeScalarWhereInput>
    NOT?: Enumerable<AmphoeScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    districtId?: UuidFilter | string
    zipcode?: StringNullableFilter | string | null
  }

  export type DistrictCreateWithoutAmphoeInput = {
    id: string
    name: string
    province: ProvinceCreateNestedOneWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutAmphoeInput = {
    id: string
    name: string
    provinceId: string
  }

  export type DistrictCreateOrConnectWithoutAmphoeInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutAmphoeInput, DistrictUncheckedCreateWithoutAmphoeInput>
  }

  export type DistrictUpsertWithoutAmphoeInput = {
    update: XOR<DistrictUpdateWithoutAmphoeInput, DistrictUncheckedUpdateWithoutAmphoeInput>
    create: XOR<DistrictCreateWithoutAmphoeInput, DistrictUncheckedCreateWithoutAmphoeInput>
  }

  export type DistrictUpdateWithoutAmphoeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    province?: ProvinceUpdateOneRequiredWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutAmphoeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provinceId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateWithoutMas_positionInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCompanyInput
    branch?: CompanyBranchCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutMas_positionInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    branch?: CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1UncheckedCreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutMas_positionInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutMas_positionInput, CompanyUncheckedCreateWithoutMas_positionInput>
  }

  export type CompanyUpsertWithoutMas_positionInput = {
    update: XOR<CompanyUpdateWithoutMas_positionInput, CompanyUncheckedUpdateWithoutMas_positionInput>
    create: XOR<CompanyCreateWithoutMas_positionInput, CompanyUncheckedCreateWithoutMas_positionInput>
  }

  export type CompanyUpdateWithoutMas_positionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCompanyNestedInput
    branch?: CompanyBranchUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutMas_positionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    branch?: CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UncheckedUpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type mas_positionlevel2CreateWithoutMas_positionlevel1Input = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel3?: mas_positionlevel3CreateNestedManyWithoutMas_positionlevel2Input
    Company?: CompanyCreateNestedOneWithoutMas_positionlevel2Input
    position_user?: Position_userCreateNestedManyWithoutMas_positionlevel2Input
  }

  export type mas_positionlevel2UncheckedCreateWithoutMas_positionlevel1Input = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel3?: mas_positionlevel3UncheckedCreateNestedManyWithoutMas_positionlevel2Input
    CompanyId?: string | null
    position_user?: Position_userUncheckedCreateNestedManyWithoutMas_positionlevel2Input
  }

  export type mas_positionlevel2CreateOrConnectWithoutMas_positionlevel1Input = {
    where: mas_positionlevel2WhereUniqueInput
    create: XOR<mas_positionlevel2CreateWithoutMas_positionlevel1Input, mas_positionlevel2UncheckedCreateWithoutMas_positionlevel1Input>
  }

  export type mas_positionlevel2CreateManyMas_positionlevel1InputEnvelope = {
    data: Enumerable<mas_positionlevel2CreateManyMas_positionlevel1Input>
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutMas_positionlevel1Input = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCompanyInput
    branch?: CompanyBranchCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutMas_positionlevel1Input = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    branch?: CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2UncheckedCreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateUncheckedCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutMas_positionlevel1Input = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutMas_positionlevel1Input, CompanyUncheckedCreateWithoutMas_positionlevel1Input>
  }

  export type Position_userCreateWithoutMas_positionlevel1Input = {
    id: string
    role?: string | null
    header?: UserCreateNestedOneWithoutHenchmanInput
    user?: UserCreateNestedOneWithoutPosition_userInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedOneWithoutPosition_userInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedOneWithoutPosition_userInput
  }

  export type Position_userUncheckedCreateWithoutMas_positionlevel1Input = {
    id: string
    user_id?: string | null
    position2_id?: string | null
    position3_id?: string | null
    role?: string | null
    headderId?: string | null
  }

  export type Position_userCreateOrConnectWithoutMas_positionlevel1Input = {
    where: Position_userWhereUniqueInput
    create: XOR<Position_userCreateWithoutMas_positionlevel1Input, Position_userUncheckedCreateWithoutMas_positionlevel1Input>
  }

  export type Position_userCreateManyMas_positionlevel1InputEnvelope = {
    data: Enumerable<Position_userCreateManyMas_positionlevel1Input>
    skipDuplicates?: boolean
  }

  export type mas_positionlevel2UpsertWithWhereUniqueWithoutMas_positionlevel1Input = {
    where: mas_positionlevel2WhereUniqueInput
    update: XOR<mas_positionlevel2UpdateWithoutMas_positionlevel1Input, mas_positionlevel2UncheckedUpdateWithoutMas_positionlevel1Input>
    create: XOR<mas_positionlevel2CreateWithoutMas_positionlevel1Input, mas_positionlevel2UncheckedCreateWithoutMas_positionlevel1Input>
  }

  export type mas_positionlevel2UpdateWithWhereUniqueWithoutMas_positionlevel1Input = {
    where: mas_positionlevel2WhereUniqueInput
    data: XOR<mas_positionlevel2UpdateWithoutMas_positionlevel1Input, mas_positionlevel2UncheckedUpdateWithoutMas_positionlevel1Input>
  }

  export type mas_positionlevel2UpdateManyWithWhereWithoutMas_positionlevel1Input = {
    where: mas_positionlevel2ScalarWhereInput
    data: XOR<mas_positionlevel2UpdateManyMutationInput, mas_positionlevel2UncheckedUpdateManyWithoutMas_positionlevel2Input>
  }

  export type CompanyUpsertWithoutMas_positionlevel1Input = {
    update: XOR<CompanyUpdateWithoutMas_positionlevel1Input, CompanyUncheckedUpdateWithoutMas_positionlevel1Input>
    create: XOR<CompanyCreateWithoutMas_positionlevel1Input, CompanyUncheckedCreateWithoutMas_positionlevel1Input>
  }

  export type CompanyUpdateWithoutMas_positionlevel1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCompanyNestedInput
    branch?: CompanyBranchUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutMas_positionlevel1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    branch?: CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UncheckedUpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUncheckedUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type Position_userUpsertWithWhereUniqueWithoutMas_positionlevel1Input = {
    where: Position_userWhereUniqueInput
    update: XOR<Position_userUpdateWithoutMas_positionlevel1Input, Position_userUncheckedUpdateWithoutMas_positionlevel1Input>
    create: XOR<Position_userCreateWithoutMas_positionlevel1Input, Position_userUncheckedCreateWithoutMas_positionlevel1Input>
  }

  export type Position_userUpdateWithWhereUniqueWithoutMas_positionlevel1Input = {
    where: Position_userWhereUniqueInput
    data: XOR<Position_userUpdateWithoutMas_positionlevel1Input, Position_userUncheckedUpdateWithoutMas_positionlevel1Input>
  }

  export type Position_userUpdateManyWithWhereWithoutMas_positionlevel1Input = {
    where: Position_userScalarWhereInput
    data: XOR<Position_userUpdateManyMutationInput, Position_userUncheckedUpdateManyWithoutPosition_userInput>
  }

  export type mas_positionlevel1CreateWithoutMas_positionlevel2Input = {
    id: string
    name: string
    level: number
    code: string
    type: string
    Company?: CompanyCreateNestedOneWithoutMas_positionlevel1Input
    Position_user?: Position_userCreateNestedManyWithoutMas_positionlevel1Input
  }

  export type mas_positionlevel1UncheckedCreateWithoutMas_positionlevel2Input = {
    id: string
    name: string
    level: number
    code: string
    type: string
    CompanyId?: string | null
    Position_user?: Position_userUncheckedCreateNestedManyWithoutMas_positionlevel1Input
  }

  export type mas_positionlevel1CreateOrConnectWithoutMas_positionlevel2Input = {
    where: mas_positionlevel1WhereUniqueInput
    create: XOR<mas_positionlevel1CreateWithoutMas_positionlevel2Input, mas_positionlevel1UncheckedCreateWithoutMas_positionlevel2Input>
  }

  export type mas_positionlevel3CreateWithoutMas_positionlevel2Input = {
    id: string
    name: string
    level: number
    code: string
    type: string
    Company?: CompanyCreateNestedOneWithoutMas_positionlevel3Input
    Position_user?: Position_userCreateNestedManyWithoutMas_positionlevel3Input
  }

  export type mas_positionlevel3UncheckedCreateWithoutMas_positionlevel2Input = {
    id: string
    name: string
    level: number
    code: string
    type: string
    CompanyId?: string | null
    Position_user?: Position_userUncheckedCreateNestedManyWithoutMas_positionlevel3Input
  }

  export type mas_positionlevel3CreateOrConnectWithoutMas_positionlevel2Input = {
    where: mas_positionlevel3WhereUniqueInput
    create: XOR<mas_positionlevel3CreateWithoutMas_positionlevel2Input, mas_positionlevel3UncheckedCreateWithoutMas_positionlevel2Input>
  }

  export type mas_positionlevel3CreateManyMas_positionlevel2InputEnvelope = {
    data: Enumerable<mas_positionlevel3CreateManyMas_positionlevel2Input>
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutMas_positionlevel2Input = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCompanyInput
    branch?: CompanyBranchCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutMas_positionlevel2Input = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    branch?: CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1UncheckedCreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateUncheckedCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutMas_positionlevel2Input = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutMas_positionlevel2Input, CompanyUncheckedCreateWithoutMas_positionlevel2Input>
  }

  export type Position_userCreateWithoutMas_positionlevel2Input = {
    id: string
    role?: string | null
    header?: UserCreateNestedOneWithoutHenchmanInput
    user?: UserCreateNestedOneWithoutPosition_userInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedOneWithoutPosition_userInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedOneWithoutPosition_userInput
  }

  export type Position_userUncheckedCreateWithoutMas_positionlevel2Input = {
    id: string
    user_id?: string | null
    position1_id?: string | null
    position3_id?: string | null
    role?: string | null
    headderId?: string | null
  }

  export type Position_userCreateOrConnectWithoutMas_positionlevel2Input = {
    where: Position_userWhereUniqueInput
    create: XOR<Position_userCreateWithoutMas_positionlevel2Input, Position_userUncheckedCreateWithoutMas_positionlevel2Input>
  }

  export type Position_userCreateManyMas_positionlevel2InputEnvelope = {
    data: Enumerable<Position_userCreateManyMas_positionlevel2Input>
    skipDuplicates?: boolean
  }

  export type mas_positionlevel1UpsertWithoutMas_positionlevel2Input = {
    update: XOR<mas_positionlevel1UpdateWithoutMas_positionlevel2Input, mas_positionlevel1UncheckedUpdateWithoutMas_positionlevel2Input>
    create: XOR<mas_positionlevel1CreateWithoutMas_positionlevel2Input, mas_positionlevel1UncheckedCreateWithoutMas_positionlevel2Input>
  }

  export type mas_positionlevel1UpdateWithoutMas_positionlevel2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Company?: CompanyUpdateOneWithoutMas_positionlevel1NestedInput
    Position_user?: Position_userUpdateManyWithoutMas_positionlevel1NestedInput
  }

  export type mas_positionlevel1UncheckedUpdateWithoutMas_positionlevel2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    Position_user?: Position_userUncheckedUpdateManyWithoutMas_positionlevel1NestedInput
  }

  export type mas_positionlevel3UpsertWithWhereUniqueWithoutMas_positionlevel2Input = {
    where: mas_positionlevel3WhereUniqueInput
    update: XOR<mas_positionlevel3UpdateWithoutMas_positionlevel2Input, mas_positionlevel3UncheckedUpdateWithoutMas_positionlevel2Input>
    create: XOR<mas_positionlevel3CreateWithoutMas_positionlevel2Input, mas_positionlevel3UncheckedCreateWithoutMas_positionlevel2Input>
  }

  export type mas_positionlevel3UpdateWithWhereUniqueWithoutMas_positionlevel2Input = {
    where: mas_positionlevel3WhereUniqueInput
    data: XOR<mas_positionlevel3UpdateWithoutMas_positionlevel2Input, mas_positionlevel3UncheckedUpdateWithoutMas_positionlevel2Input>
  }

  export type mas_positionlevel3UpdateManyWithWhereWithoutMas_positionlevel2Input = {
    where: mas_positionlevel3ScalarWhereInput
    data: XOR<mas_positionlevel3UpdateManyMutationInput, mas_positionlevel3UncheckedUpdateManyWithoutMas_positionlevel3Input>
  }

  export type CompanyUpsertWithoutMas_positionlevel2Input = {
    update: XOR<CompanyUpdateWithoutMas_positionlevel2Input, CompanyUncheckedUpdateWithoutMas_positionlevel2Input>
    create: XOR<CompanyCreateWithoutMas_positionlevel2Input, CompanyUncheckedCreateWithoutMas_positionlevel2Input>
  }

  export type CompanyUpdateWithoutMas_positionlevel2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCompanyNestedInput
    branch?: CompanyBranchUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutMas_positionlevel2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    branch?: CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UncheckedUpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUncheckedUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type Position_userUpsertWithWhereUniqueWithoutMas_positionlevel2Input = {
    where: Position_userWhereUniqueInput
    update: XOR<Position_userUpdateWithoutMas_positionlevel2Input, Position_userUncheckedUpdateWithoutMas_positionlevel2Input>
    create: XOR<Position_userCreateWithoutMas_positionlevel2Input, Position_userUncheckedCreateWithoutMas_positionlevel2Input>
  }

  export type Position_userUpdateWithWhereUniqueWithoutMas_positionlevel2Input = {
    where: Position_userWhereUniqueInput
    data: XOR<Position_userUpdateWithoutMas_positionlevel2Input, Position_userUncheckedUpdateWithoutMas_positionlevel2Input>
  }

  export type Position_userUpdateManyWithWhereWithoutMas_positionlevel2Input = {
    where: Position_userScalarWhereInput
    data: XOR<Position_userUpdateManyMutationInput, Position_userUncheckedUpdateManyWithoutPosition_userInput>
  }

  export type mas_positionlevel2CreateWithoutMas_positionlevel3Input = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel1?: mas_positionlevel1CreateNestedOneWithoutMas_positionlevel2Input
    Company?: CompanyCreateNestedOneWithoutMas_positionlevel2Input
    position_user?: Position_userCreateNestedManyWithoutMas_positionlevel2Input
  }

  export type mas_positionlevel2UncheckedCreateWithoutMas_positionlevel3Input = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel1_id?: string | null
    CompanyId?: string | null
    position_user?: Position_userUncheckedCreateNestedManyWithoutMas_positionlevel2Input
  }

  export type mas_positionlevel2CreateOrConnectWithoutMas_positionlevel3Input = {
    where: mas_positionlevel2WhereUniqueInput
    create: XOR<mas_positionlevel2CreateWithoutMas_positionlevel3Input, mas_positionlevel2UncheckedCreateWithoutMas_positionlevel3Input>
  }

  export type CompanyCreateWithoutMas_positionlevel3Input = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCompanyInput
    branch?: CompanyBranchCreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutMas_positionlevel3Input = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    branch?: CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1UncheckedCreateNestedManyWithoutCompanyInput
    holiday_date?: holiday_dateUncheckedCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutMas_positionlevel3Input = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutMas_positionlevel3Input, CompanyUncheckedCreateWithoutMas_positionlevel3Input>
  }

  export type Position_userCreateWithoutMas_positionlevel3Input = {
    id: string
    role?: string | null
    header?: UserCreateNestedOneWithoutHenchmanInput
    user?: UserCreateNestedOneWithoutPosition_userInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedOneWithoutPosition_userInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedOneWithoutPosition_userInput
  }

  export type Position_userUncheckedCreateWithoutMas_positionlevel3Input = {
    id: string
    user_id?: string | null
    position1_id?: string | null
    position2_id?: string | null
    role?: string | null
    headderId?: string | null
  }

  export type Position_userCreateOrConnectWithoutMas_positionlevel3Input = {
    where: Position_userWhereUniqueInput
    create: XOR<Position_userCreateWithoutMas_positionlevel3Input, Position_userUncheckedCreateWithoutMas_positionlevel3Input>
  }

  export type Position_userCreateManyMas_positionlevel3InputEnvelope = {
    data: Enumerable<Position_userCreateManyMas_positionlevel3Input>
    skipDuplicates?: boolean
  }

  export type mas_positionlevel2UpsertWithoutMas_positionlevel3Input = {
    update: XOR<mas_positionlevel2UpdateWithoutMas_positionlevel3Input, mas_positionlevel2UncheckedUpdateWithoutMas_positionlevel3Input>
    create: XOR<mas_positionlevel2CreateWithoutMas_positionlevel3Input, mas_positionlevel2UncheckedCreateWithoutMas_positionlevel3Input>
  }

  export type mas_positionlevel2UpdateWithoutMas_positionlevel3Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel1?: mas_positionlevel1UpdateOneWithoutMas_positionlevel2NestedInput
    Company?: CompanyUpdateOneWithoutMas_positionlevel2NestedInput
    position_user?: Position_userUpdateManyWithoutMas_positionlevel2NestedInput
  }

  export type mas_positionlevel2UncheckedUpdateWithoutMas_positionlevel3Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionlevel1_id?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    position_user?: Position_userUncheckedUpdateManyWithoutMas_positionlevel2NestedInput
  }

  export type CompanyUpsertWithoutMas_positionlevel3Input = {
    update: XOR<CompanyUpdateWithoutMas_positionlevel3Input, CompanyUncheckedUpdateWithoutMas_positionlevel3Input>
    create: XOR<CompanyCreateWithoutMas_positionlevel3Input, CompanyUncheckedCreateWithoutMas_positionlevel3Input>
  }

  export type CompanyUpdateWithoutMas_positionlevel3Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCompanyNestedInput
    branch?: CompanyBranchUpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutMas_positionlevel3Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    branch?: CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UncheckedUpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUncheckedUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type Position_userUpsertWithWhereUniqueWithoutMas_positionlevel3Input = {
    where: Position_userWhereUniqueInput
    update: XOR<Position_userUpdateWithoutMas_positionlevel3Input, Position_userUncheckedUpdateWithoutMas_positionlevel3Input>
    create: XOR<Position_userCreateWithoutMas_positionlevel3Input, Position_userUncheckedCreateWithoutMas_positionlevel3Input>
  }

  export type Position_userUpdateWithWhereUniqueWithoutMas_positionlevel3Input = {
    where: Position_userWhereUniqueInput
    data: XOR<Position_userUpdateWithoutMas_positionlevel3Input, Position_userUncheckedUpdateWithoutMas_positionlevel3Input>
  }

  export type Position_userUpdateManyWithWhereWithoutMas_positionlevel3Input = {
    where: Position_userScalarWhereInput
    data: XOR<Position_userUpdateManyMutationInput, Position_userUncheckedUpdateManyWithoutPosition_userInput>
  }

  export type UserCreateWithoutHenchmanInput = {
    id: string
    email: string
    password: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    company?: CompanyCreateNestedManyWithoutOwnerInput
    companyBranch?: CompanyBranchCreateNestedOneWithoutUsersInput
    Role_Company?: Role_CompanyCreateNestedOneWithoutUsersInput
    Position_user?: Position_userCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHenchmanInput = {
    id: string
    email: string
    password: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    roleId?: string | null
    RoleCompanyID?: string | null
    company?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companyBranchId?: string | null
    Position_user?: Position_userUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHenchmanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHenchmanInput, UserUncheckedCreateWithoutHenchmanInput>
  }

  export type UserCreateWithoutPosition_userInput = {
    id: string
    email: string
    password: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    company?: CompanyCreateNestedManyWithoutOwnerInput
    companyBranch?: CompanyBranchCreateNestedOneWithoutUsersInput
    Role_Company?: Role_CompanyCreateNestedOneWithoutUsersInput
    henchman?: Position_userCreateNestedManyWithoutHeaderInput
  }

  export type UserUncheckedCreateWithoutPosition_userInput = {
    id: string
    email: string
    password: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    roleId?: string | null
    RoleCompanyID?: string | null
    company?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companyBranchId?: string | null
    henchman?: Position_userUncheckedCreateNestedManyWithoutHeaderInput
  }

  export type UserCreateOrConnectWithoutPosition_userInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPosition_userInput, UserUncheckedCreateWithoutPosition_userInput>
  }

  export type mas_positionlevel1CreateWithoutPosition_userInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel2?: mas_positionlevel2CreateNestedManyWithoutMas_positionlevel1Input
    Company?: CompanyCreateNestedOneWithoutMas_positionlevel1Input
  }

  export type mas_positionlevel1UncheckedCreateWithoutPosition_userInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel2?: mas_positionlevel2UncheckedCreateNestedManyWithoutMas_positionlevel1Input
    CompanyId?: string | null
  }

  export type mas_positionlevel1CreateOrConnectWithoutPosition_userInput = {
    where: mas_positionlevel1WhereUniqueInput
    create: XOR<mas_positionlevel1CreateWithoutPosition_userInput, mas_positionlevel1UncheckedCreateWithoutPosition_userInput>
  }

  export type mas_positionlevel2CreateWithoutPosition_userInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel1?: mas_positionlevel1CreateNestedOneWithoutMas_positionlevel2Input
    mas_positionlevel3?: mas_positionlevel3CreateNestedManyWithoutMas_positionlevel2Input
    Company?: CompanyCreateNestedOneWithoutMas_positionlevel2Input
  }

  export type mas_positionlevel2UncheckedCreateWithoutPosition_userInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel1_id?: string | null
    mas_positionlevel3?: mas_positionlevel3UncheckedCreateNestedManyWithoutMas_positionlevel2Input
    CompanyId?: string | null
  }

  export type mas_positionlevel2CreateOrConnectWithoutPosition_userInput = {
    where: mas_positionlevel2WhereUniqueInput
    create: XOR<mas_positionlevel2CreateWithoutPosition_userInput, mas_positionlevel2UncheckedCreateWithoutPosition_userInput>
  }

  export type mas_positionlevel3CreateWithoutPosition_userInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    mas_positionlevel2?: mas_positionlevel2CreateNestedOneWithoutMas_positionlevel3Input
    Company?: CompanyCreateNestedOneWithoutMas_positionlevel3Input
  }

  export type mas_positionlevel3UncheckedCreateWithoutPosition_userInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel2_id?: string | null
    CompanyId?: string | null
  }

  export type mas_positionlevel3CreateOrConnectWithoutPosition_userInput = {
    where: mas_positionlevel3WhereUniqueInput
    create: XOR<mas_positionlevel3CreateWithoutPosition_userInput, mas_positionlevel3UncheckedCreateWithoutPosition_userInput>
  }

  export type UserUpsertWithoutHenchmanInput = {
    update: XOR<UserUpdateWithoutHenchmanInput, UserUncheckedUpdateWithoutHenchmanInput>
    create: XOR<UserCreateWithoutHenchmanInput, UserUncheckedCreateWithoutHenchmanInput>
  }

  export type UserUpdateWithoutHenchmanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    company?: CompanyUpdateManyWithoutOwnerNestedInput
    companyBranch?: CompanyBranchUpdateOneWithoutUsersNestedInput
    Role_Company?: Role_CompanyUpdateOneWithoutUsersNestedInput
    Position_user?: Position_userUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHenchmanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    RoleCompanyID?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    Position_user?: Position_userUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutPosition_userInput = {
    update: XOR<UserUpdateWithoutPosition_userInput, UserUncheckedUpdateWithoutPosition_userInput>
    create: XOR<UserCreateWithoutPosition_userInput, UserUncheckedCreateWithoutPosition_userInput>
  }

  export type UserUpdateWithoutPosition_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    company?: CompanyUpdateManyWithoutOwnerNestedInput
    companyBranch?: CompanyBranchUpdateOneWithoutUsersNestedInput
    Role_Company?: Role_CompanyUpdateOneWithoutUsersNestedInput
    henchman?: Position_userUpdateManyWithoutHeaderNestedInput
  }

  export type UserUncheckedUpdateWithoutPosition_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    RoleCompanyID?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    henchman?: Position_userUncheckedUpdateManyWithoutHeaderNestedInput
  }

  export type mas_positionlevel1UpsertWithoutPosition_userInput = {
    update: XOR<mas_positionlevel1UpdateWithoutPosition_userInput, mas_positionlevel1UncheckedUpdateWithoutPosition_userInput>
    create: XOR<mas_positionlevel1CreateWithoutPosition_userInput, mas_positionlevel1UncheckedCreateWithoutPosition_userInput>
  }

  export type mas_positionlevel1UpdateWithoutPosition_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel2?: mas_positionlevel2UpdateManyWithoutMas_positionlevel1NestedInput
    Company?: CompanyUpdateOneWithoutMas_positionlevel1NestedInput
  }

  export type mas_positionlevel1UncheckedUpdateWithoutPosition_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel2?: mas_positionlevel2UncheckedUpdateManyWithoutMas_positionlevel1NestedInput
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mas_positionlevel2UpsertWithoutPosition_userInput = {
    update: XOR<mas_positionlevel2UpdateWithoutPosition_userInput, mas_positionlevel2UncheckedUpdateWithoutPosition_userInput>
    create: XOR<mas_positionlevel2CreateWithoutPosition_userInput, mas_positionlevel2UncheckedCreateWithoutPosition_userInput>
  }

  export type mas_positionlevel2UpdateWithoutPosition_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel1?: mas_positionlevel1UpdateOneWithoutMas_positionlevel2NestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateManyWithoutMas_positionlevel2NestedInput
    Company?: CompanyUpdateOneWithoutMas_positionlevel2NestedInput
  }

  export type mas_positionlevel2UncheckedUpdateWithoutPosition_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionlevel1_id?: NullableStringFieldUpdateOperationsInput | string | null
    mas_positionlevel3?: mas_positionlevel3UncheckedUpdateManyWithoutMas_positionlevel2NestedInput
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mas_positionlevel3UpsertWithoutPosition_userInput = {
    update: XOR<mas_positionlevel3UpdateWithoutPosition_userInput, mas_positionlevel3UncheckedUpdateWithoutPosition_userInput>
    create: XOR<mas_positionlevel3CreateWithoutPosition_userInput, mas_positionlevel3UncheckedCreateWithoutPosition_userInput>
  }

  export type mas_positionlevel3UpdateWithoutPosition_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel2?: mas_positionlevel2UpdateOneWithoutMas_positionlevel3NestedInput
    Company?: CompanyUpdateOneWithoutMas_positionlevel3NestedInput
  }

  export type mas_positionlevel3UncheckedUpdateWithoutPosition_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionlevel2_id?: NullableStringFieldUpdateOperationsInput | string | null
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCreateWithoutHoliday_dateInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCompanyInput
    branch?: CompanyBranchCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3CreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2CreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1CreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutHoliday_dateInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    branch?: CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel3?: mas_positionlevel3UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel2?: mas_positionlevel2UncheckedCreateNestedManyWithoutCompanyInput
    mas_positionlevel1?: mas_positionlevel1UncheckedCreateNestedManyWithoutCompanyInput
    mas_position?: mas_positionUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutHoliday_dateInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutHoliday_dateInput, CompanyUncheckedCreateWithoutHoliday_dateInput>
  }

  export type CompanyUpsertWithoutHoliday_dateInput = {
    update: XOR<CompanyUpdateWithoutHoliday_dateInput, CompanyUncheckedUpdateWithoutHoliday_dateInput>
    create: XOR<CompanyCreateWithoutHoliday_dateInput, CompanyUncheckedCreateWithoutHoliday_dateInput>
  }

  export type CompanyUpdateWithoutHoliday_dateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCompanyNestedInput
    branch?: CompanyBranchUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutHoliday_dateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    branch?: CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UncheckedUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyBranchCreateManyCompanyInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    address_2?: string | null
    city: string
    state: string
    zip: string
    country?: string | null
    tel?: string | null
    fax?: string | null
    website?: string | null
    lat?: string | null
    lng?: string | null
    email?: string | null
    email_2?: string | null
    company_type?: string | null
    sub_company_type?: string | null
    registeredamount?: string | null
    social_facebook?: string | null
    social_likedin?: string | null
    social_instragram?: string | null
    social_line?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type mas_positionlevel3CreateManyCompanyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel2_id?: string | null
  }

  export type mas_positionlevel2CreateManyCompanyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
    positionlevel1_id?: string | null
  }

  export type mas_positionlevel1CreateManyCompanyInput = {
    id: string
    name: string
    level: number
    code: string
    type: string
  }

  export type holiday_dateCreateManyCompanyInput = {
    id: string
    holiday_name?: string | null
    day: number
    month: number
    yaer: number
  }

  export type mas_positionCreateManyCompanyInput = {
    id: string
    name: string
    level: number
  }

  export type CompanyBranchUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_2?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    sub_company_type?: NullableStringFieldUpdateOperationsInput | string | null
    registeredamount?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_instragram?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyBranchNestedInput
    Role_Company?: Role_CompanyUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_2?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    sub_company_type?: NullableStringFieldUpdateOperationsInput | string | null
    registeredamount?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_instragram?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyBranchNestedInput
    Role_Company?: Role_CompanyUncheckedUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    address_2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_2?: NullableStringFieldUpdateOperationsInput | string | null
    company_type?: NullableStringFieldUpdateOperationsInput | string | null
    sub_company_type?: NullableStringFieldUpdateOperationsInput | string | null
    registeredamount?: NullableStringFieldUpdateOperationsInput | string | null
    social_facebook?: NullableStringFieldUpdateOperationsInput | string | null
    social_likedin?: NullableStringFieldUpdateOperationsInput | string | null
    social_instragram?: NullableStringFieldUpdateOperationsInput | string | null
    social_line?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mas_positionlevel3UpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel2?: mas_positionlevel2UpdateOneWithoutMas_positionlevel3NestedInput
    Position_user?: Position_userUpdateManyWithoutMas_positionlevel3NestedInput
  }

  export type mas_positionlevel3UncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionlevel2_id?: NullableStringFieldUpdateOperationsInput | string | null
    Position_user?: Position_userUncheckedUpdateManyWithoutMas_positionlevel3NestedInput
  }

  export type mas_positionlevel3UncheckedUpdateManyWithoutMas_positionlevel3Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionlevel2_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mas_positionlevel2UpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel1?: mas_positionlevel1UpdateOneWithoutMas_positionlevel2NestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateManyWithoutMas_positionlevel2NestedInput
    position_user?: Position_userUpdateManyWithoutMas_positionlevel2NestedInput
  }

  export type mas_positionlevel2UncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionlevel1_id?: NullableStringFieldUpdateOperationsInput | string | null
    mas_positionlevel3?: mas_positionlevel3UncheckedUpdateManyWithoutMas_positionlevel2NestedInput
    position_user?: Position_userUncheckedUpdateManyWithoutMas_positionlevel2NestedInput
  }

  export type mas_positionlevel2UncheckedUpdateManyWithoutMas_positionlevel2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionlevel1_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mas_positionlevel1UpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel2?: mas_positionlevel2UpdateManyWithoutMas_positionlevel1NestedInput
    Position_user?: Position_userUpdateManyWithoutMas_positionlevel1NestedInput
  }

  export type mas_positionlevel1UncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel2?: mas_positionlevel2UncheckedUpdateManyWithoutMas_positionlevel1NestedInput
    Position_user?: Position_userUncheckedUpdateManyWithoutMas_positionlevel1NestedInput
  }

  export type mas_positionlevel1UncheckedUpdateManyWithoutMas_positionlevel1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type holiday_dateUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    yaer?: IntFieldUpdateOperationsInput | number
  }

  export type holiday_dateUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    yaer?: IntFieldUpdateOperationsInput | number
  }

  export type holiday_dateUncheckedUpdateManyWithoutHoliday_dateInput = {
    id?: StringFieldUpdateOperationsInput | string
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    yaer?: IntFieldUpdateOperationsInput | number
  }

  export type mas_positionUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type mas_positionUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type mas_positionUncheckedUpdateManyWithoutMas_positionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyCompanyBranchInput = {
    id: string
    email: string
    password: string
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    roleId?: string | null
    RoleCompanyID?: string | null
  }

  export type Role_CompanyCreateManyCompanyBranchInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    status: number
  }

  export type UserUpdateWithoutCompanyBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    company?: CompanyUpdateManyWithoutOwnerNestedInput
    Role_Company?: Role_CompanyUpdateOneWithoutUsersNestedInput
    Position_user?: Position_userUpdateOneWithoutUserNestedInput
    henchman?: Position_userUpdateManyWithoutHeaderNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    RoleCompanyID?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    Position_user?: Position_userUncheckedUpdateOneWithoutUserNestedInput
    henchman?: Position_userUncheckedUpdateManyWithoutHeaderNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    RoleCompanyID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Role_CompanyUpdateWithoutCompanyBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    status?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutRole_CompanyNestedInput
  }

  export type Role_CompanyUncheckedUpdateWithoutCompanyBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    status?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutRole_CompanyNestedInput
  }

  export type Role_CompanyUncheckedUpdateManyWithoutRole_CompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    status?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyCreateManyOwnerInput = {
    id: string
    name: string
    companyCode: string
    userlimit?: number
    company_registration_id?: string | null
    company_vat_id?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Position_userCreateManyHeaderInput = {
    id: string
    user_id?: string | null
    position1_id?: string | null
    position2_id?: string | null
    position3_id?: string | null
    role?: string | null
  }

  export type CompanyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: CompanyBranchUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel3?: mas_positionlevel3UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel2?: mas_positionlevel2UncheckedUpdateManyWithoutCompanyNestedInput
    mas_positionlevel1?: mas_positionlevel1UncheckedUpdateManyWithoutCompanyNestedInput
    holiday_date?: holiday_dateUncheckedUpdateManyWithoutCompanyNestedInput
    mas_position?: mas_positionUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    userlimit?: IntFieldUpdateOperationsInput | number
    company_registration_id?: NullableStringFieldUpdateOperationsInput | string | null
    company_vat_id?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Position_userUpdateWithoutHeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutPosition_userNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateOneWithoutPosition_userNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateOneWithoutPosition_userNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateOneWithoutPosition_userNestedInput
  }

  export type Position_userUncheckedUpdateWithoutHeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    position1_id?: NullableStringFieldUpdateOperationsInput | string | null
    position2_id?: NullableStringFieldUpdateOperationsInput | string | null
    position3_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Position_userUncheckedUpdateManyWithoutHenchmanInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    position1_id?: NullableStringFieldUpdateOperationsInput | string | null
    position2_id?: NullableStringFieldUpdateOperationsInput | string | null
    position3_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyRoleInput = {
    id: string
    email: string
    password: string
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    RoleCompanyID?: string | null
    companyBranchId?: string | null
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateManyWithoutOwnerNestedInput
    companyBranch?: CompanyBranchUpdateOneWithoutUsersNestedInput
    Role_Company?: Role_CompanyUpdateOneWithoutUsersNestedInput
    Position_user?: Position_userUpdateOneWithoutUserNestedInput
    henchman?: Position_userUpdateManyWithoutHeaderNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoleCompanyID?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    Position_user?: Position_userUncheckedUpdateOneWithoutUserNestedInput
    henchman?: Position_userUncheckedUpdateManyWithoutHeaderNestedInput
  }

  export type UserCreateManyRole_CompanyInput = {
    id: string
    email: string
    password: string
    islogin?: boolean
    isActive?: boolean
    isOwner?: boolean
    lastlogin?: Date | string | null
    createdAt?: Date | string
    roleId?: string | null
    companyBranchId?: string | null
  }

  export type UserUpdateWithoutRole_CompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    company?: CompanyUpdateManyWithoutOwnerNestedInput
    companyBranch?: CompanyBranchUpdateOneWithoutUsersNestedInput
    Position_user?: Position_userUpdateOneWithoutUserNestedInput
    henchman?: Position_userUpdateManyWithoutHeaderNestedInput
  }

  export type UserUncheckedUpdateWithoutRole_CompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    islogin?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    lastlogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    Position_user?: Position_userUncheckedUpdateOneWithoutUserNestedInput
    henchman?: Position_userUncheckedUpdateManyWithoutHeaderNestedInput
  }

  export type DistrictCreateManyProvinceInput = {
    id: string
    name: string
  }

  export type DistrictUpdateWithoutProvinceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amphoe?: AmphoeUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutProvinceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amphoe?: AmphoeUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateManyWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmphoeCreateManyDistrictInput = {
    id: string
    name: string
    zipcode?: string | null
  }

  export type AmphoeUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmphoeUncheckedUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmphoeUncheckedUpdateManyWithoutAmphoeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mas_positionlevel2CreateManyMas_positionlevel1Input = {
    id: string
    name: string
    level: number
    code: string
    type: string
    CompanyId?: string | null
  }

  export type Position_userCreateManyMas_positionlevel1Input = {
    id: string
    user_id?: string | null
    position2_id?: string | null
    position3_id?: string | null
    role?: string | null
    headderId?: string | null
  }

  export type mas_positionlevel2UpdateWithoutMas_positionlevel1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel3?: mas_positionlevel3UpdateManyWithoutMas_positionlevel2NestedInput
    Company?: CompanyUpdateOneWithoutMas_positionlevel2NestedInput
    position_user?: Position_userUpdateManyWithoutMas_positionlevel2NestedInput
  }

  export type mas_positionlevel2UncheckedUpdateWithoutMas_positionlevel1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    mas_positionlevel3?: mas_positionlevel3UncheckedUpdateManyWithoutMas_positionlevel2NestedInput
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    position_user?: Position_userUncheckedUpdateManyWithoutMas_positionlevel2NestedInput
  }

  export type Position_userUpdateWithoutMas_positionlevel1Input = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    header?: UserUpdateOneWithoutHenchmanNestedInput
    user?: UserUpdateOneWithoutPosition_userNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateOneWithoutPosition_userNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateOneWithoutPosition_userNestedInput
  }

  export type Position_userUncheckedUpdateWithoutMas_positionlevel1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    position2_id?: NullableStringFieldUpdateOperationsInput | string | null
    position3_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    headderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Position_userUncheckedUpdateManyWithoutPosition_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    position2_id?: NullableStringFieldUpdateOperationsInput | string | null
    position3_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    headderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mas_positionlevel3CreateManyMas_positionlevel2Input = {
    id: string
    name: string
    level: number
    code: string
    type: string
    CompanyId?: string | null
  }

  export type Position_userCreateManyMas_positionlevel2Input = {
    id: string
    user_id?: string | null
    position1_id?: string | null
    position3_id?: string | null
    role?: string | null
    headderId?: string | null
  }

  export type mas_positionlevel3UpdateWithoutMas_positionlevel2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Company?: CompanyUpdateOneWithoutMas_positionlevel3NestedInput
    Position_user?: Position_userUpdateManyWithoutMas_positionlevel3NestedInput
  }

  export type mas_positionlevel3UncheckedUpdateWithoutMas_positionlevel2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    Position_user?: Position_userUncheckedUpdateManyWithoutMas_positionlevel3NestedInput
  }

  export type Position_userUpdateWithoutMas_positionlevel2Input = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    header?: UserUpdateOneWithoutHenchmanNestedInput
    user?: UserUpdateOneWithoutPosition_userNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateOneWithoutPosition_userNestedInput
    mas_positionlevel3?: mas_positionlevel3UpdateOneWithoutPosition_userNestedInput
  }

  export type Position_userUncheckedUpdateWithoutMas_positionlevel2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    position1_id?: NullableStringFieldUpdateOperationsInput | string | null
    position3_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    headderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Position_userCreateManyMas_positionlevel3Input = {
    id: string
    user_id?: string | null
    position1_id?: string | null
    position2_id?: string | null
    role?: string | null
    headderId?: string | null
  }

  export type Position_userUpdateWithoutMas_positionlevel3Input = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    header?: UserUpdateOneWithoutHenchmanNestedInput
    user?: UserUpdateOneWithoutPosition_userNestedInput
    mas_positionlevel1?: mas_positionlevel1UpdateOneWithoutPosition_userNestedInput
    mas_positionlevel2?: mas_positionlevel2UpdateOneWithoutPosition_userNestedInput
  }

  export type Position_userUncheckedUpdateWithoutMas_positionlevel3Input = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    position1_id?: NullableStringFieldUpdateOperationsInput | string | null
    position2_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    headderId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}