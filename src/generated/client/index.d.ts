
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
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
  address: string
  city: string
  state: string
  zip: string
  country: string | null
  icon: string | null
  phone: string | null
  website: string | null
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
  city: string
  state: string
  zip: string
  country: string | null
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
  firstname: string | null
  lastname: string | null
  avatar: string | null
  dob: Date | null
  prefix: string | null
  tel: string | null
  address: string | null
  gender: string | null
  staff_code: string | null
  religion: string | null
  userId: string
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
  positionId: string | null
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
 * Model Position
 * 
 */
export type Position = {
  id: string
  name: string
  access: Prisma.JsonValue
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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

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
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<GlobalReject>;

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
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
    Position: 'Position',
    Province: 'Province',
    District: 'District',
    Amphoe: 'Amphoe'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

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
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

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
  }

  export type CompanyCountOutputTypeSelect = {
    branch?: boolean
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
     * 
    **/
    select?: CompanyCountOutputTypeSelect | null
  }



  /**
   * Count Type CompanyBranchCountOutputType
   */


  export type CompanyBranchCountOutputType = {
    users: number
    positions: number
  }

  export type CompanyBranchCountOutputTypeSelect = {
    users?: boolean
    positions?: boolean
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
     * 
    **/
    select?: CompanyBranchCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    company: number
  }

  export type UserCountOutputTypeSelect = {
    company?: boolean
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
     * 
    **/
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
     * 
    **/
    select?: RoleCountOutputTypeSelect | null
  }



  /**
   * Count Type PositionCountOutputType
   */


  export type PositionCountOutputType = {
    users: number
  }

  export type PositionCountOutputTypeSelect = {
    users?: boolean
  }

  export type PositionCountOutputTypeGetPayload<S extends boolean | null | undefined | PositionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PositionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PositionCountOutputTypeArgs)
    ? PositionCountOutputType 
    : S extends { select: any } & (PositionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PositionCountOutputType ? PositionCountOutputType[P] : never
  } 
      : PositionCountOutputType




  // Custom InputTypes

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     * 
    **/
    select?: PositionCountOutputTypeSelect | null
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
     * 
    **/
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
     * 
    **/
    select?: DistrictCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Company
   */


  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    companyCode: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    icon: string | null
    phone: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    companyCode: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    icon: string | null
    phone: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    companyCode: number
    address: number
    city: number
    state: number
    zip: number
    country: number
    icon: number
    phone: number
    website: number
    createdAt: number
    updatedAt: number
    ownerId: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    companyCode?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    icon?: true
    phone?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    companyCode?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    icon?: true
    phone?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    companyCode?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    icon?: true
    phone?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    _all?: true
  }

  export type CompanyAggregateArgs = {
    /**
     * Filter which Company to aggregate.
     * 
    **/
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
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
    by: Array<CompanyScalarFieldEnum>
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }


  export type CompanyGroupByOutputType = {
    id: string
    name: string
    companyCode: string
    address: string
    city: string
    state: string
    zip: string
    country: string | null
    icon: string | null
    phone: string | null
    website: string | null
    createdAt: Date
    updatedAt: Date
    ownerId: string
    _count: CompanyCountAggregateOutputType | null
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
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    icon?: boolean
    phone?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserArgs
    branch?: boolean | CompanyBranchFindManyArgs
    _count?: boolean | CompanyCountOutputTypeArgs
  }


  export type CompanyInclude = {
    owner?: boolean | UserArgs
    branch?: boolean | CompanyBranchFindManyArgs
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
        P extends '_count' ? CompanyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CompanyArgs | CompanyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<S['select'][P]> :
        P extends 'branch' ? Array < CompanyBranchGetPayload<S['select'][P]>>  :
        P extends '_count' ? CompanyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Company ? Company[P] : never
  } 
      : Company


  type CompanyCountArgs = Merge<
    Omit<CompanyFindManyArgs, 'select' | 'include'> & {
      select?: CompanyCountAggregateInputType | true
    }
  >

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

    branch<T extends CompanyBranchFindManyArgs= {}>(args?: Subset<T, CompanyBranchFindManyArgs>): PrismaPromise<Array<CompanyBranchGetPayload<T>>| Null>;

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
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     * 
    **/
    where: CompanyWhereUniqueInput
  }

  /**
   * Company: findUnique
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
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     * 
    **/
    where: CompanyWhereUniqueInput
  }


  /**
   * Company base type for findFirst actions
   */
  export type CompanyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     * 
    **/
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     * 
    **/
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     * 
    **/
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }

  /**
   * Company: findFirst
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
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Filter, which Company to fetch.
     * 
    **/
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     * 
    **/
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     * 
    **/
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Filter, which Companies to fetch.
     * 
    **/
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     * 
    **/
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CompanyScalarFieldEnum>
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * The data needed to create a Company.
     * 
    **/
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs = {
    /**
     * The data used to create many Companies.
     * 
    **/
    data: Enumerable<CompanyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * The data needed to update a Company.
     * 
    **/
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     * 
    **/
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs = {
    /**
     * The data used to update Companies.
     * 
    **/
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     * 
    **/
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * The filter to search for the Company to update in case it exists.
     * 
    **/
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     * 
    **/
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyInclude | null
    /**
     * Filter which Company to delete.
     * 
    **/
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs = {
    /**
     * Filter which Companies to delete
     * 
    **/
    where?: CompanyWhereInput
  }


  /**
   * Company without action
   */
  export type CompanyArgs = {
    /**
     * Select specific fields to fetch from the Company
     * 
    **/
    select?: CompanySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
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
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type CompanyBranchMaxAggregateOutputType = {
    id: string | null
    isMainbranch: boolean | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type CompanyBranchCountAggregateOutputType = {
    id: number
    isMainbranch: number
    name: number
    address: number
    city: number
    state: number
    zip: number
    country: number
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
    city?: true
    state?: true
    zip?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type CompanyBranchMaxAggregateInputType = {
    id?: true
    isMainbranch?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type CompanyBranchCountAggregateInputType = {
    id?: true
    isMainbranch?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    _all?: true
  }

  export type CompanyBranchAggregateArgs = {
    /**
     * Filter which CompanyBranch to aggregate.
     * 
    **/
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     * 
    **/
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
    by: Array<CompanyBranchScalarFieldEnum>
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
    city: string
    state: string
    zip: string
    country: string | null
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
    city?: boolean
    state?: boolean
    zip?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyArgs
    companyId?: boolean
    users?: boolean | UserFindManyArgs
    positions?: boolean | PositionFindManyArgs
    _count?: boolean | CompanyBranchCountOutputTypeArgs
  }


  export type CompanyBranchInclude = {
    company?: boolean | CompanyArgs
    users?: boolean | UserFindManyArgs
    positions?: boolean | PositionFindManyArgs
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
        P extends 'positions' ? Array < PositionGetPayload<S['include'][P]>>  :
        P extends '_count' ? CompanyBranchCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CompanyBranchArgs | CompanyBranchFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'company' ? CompanyGetPayload<S['select'][P]> | null :
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'positions' ? Array < PositionGetPayload<S['select'][P]>>  :
        P extends '_count' ? CompanyBranchCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof CompanyBranch ? CompanyBranch[P] : never
  } 
      : CompanyBranch


  type CompanyBranchCountArgs = Merge<
    Omit<CompanyBranchFindManyArgs, 'select' | 'include'> & {
      select?: CompanyBranchCountAggregateInputType | true
    }
  >

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

    users<T extends UserFindManyArgs= {}>(args?: Subset<T, UserFindManyArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

    positions<T extends PositionFindManyArgs= {}>(args?: Subset<T, PositionFindManyArgs>): PrismaPromise<Array<PositionGetPayload<T>>| Null>;

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
     * 
    **/
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyBranchInclude | null
    /**
     * Filter, which CompanyBranch to fetch.
     * 
    **/
    where: CompanyBranchWhereUniqueInput
  }

  /**
   * CompanyBranch: findUnique
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
     * 
    **/
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyBranchInclude | null
    /**
     * Filter, which CompanyBranch to fetch.
     * 
    **/
    where: CompanyBranchWhereUniqueInput
  }


  /**
   * CompanyBranch base type for findFirst actions
   */
  export type CompanyBranchFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     * 
    **/
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyBranchInclude | null
    /**
     * Filter, which CompanyBranch to fetch.
     * 
    **/
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyBranches.
     * 
    **/
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyBranches.
     * 
    **/
    distinct?: Enumerable<CompanyBranchScalarFieldEnum>
  }

  /**
   * CompanyBranch: findFirst
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
     * 
    **/
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyBranchInclude | null
    /**
     * Filter, which CompanyBranch to fetch.
     * 
    **/
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyBranches.
     * 
    **/
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyBranches.
     * 
    **/
    distinct?: Enumerable<CompanyBranchScalarFieldEnum>
  }


  /**
   * CompanyBranch findMany
   */
  export type CompanyBranchFindManyArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     * 
    **/
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyBranchInclude | null
    /**
     * Filter, which CompanyBranches to fetch.
     * 
    **/
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     * 
    **/
    orderBy?: Enumerable<CompanyBranchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyBranches.
     * 
    **/
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CompanyBranchScalarFieldEnum>
  }


  /**
   * CompanyBranch create
   */
  export type CompanyBranchCreateArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     * 
    **/
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyBranchInclude | null
    /**
     * The data needed to create a CompanyBranch.
     * 
    **/
    data: XOR<CompanyBranchCreateInput, CompanyBranchUncheckedCreateInput>
  }


  /**
   * CompanyBranch createMany
   */
  export type CompanyBranchCreateManyArgs = {
    /**
     * The data used to create many CompanyBranches.
     * 
    **/
    data: Enumerable<CompanyBranchCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CompanyBranch update
   */
  export type CompanyBranchUpdateArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     * 
    **/
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyBranchInclude | null
    /**
     * The data needed to update a CompanyBranch.
     * 
    **/
    data: XOR<CompanyBranchUpdateInput, CompanyBranchUncheckedUpdateInput>
    /**
     * Choose, which CompanyBranch to update.
     * 
    **/
    where: CompanyBranchWhereUniqueInput
  }


  /**
   * CompanyBranch updateMany
   */
  export type CompanyBranchUpdateManyArgs = {
    /**
     * The data used to update CompanyBranches.
     * 
    **/
    data: XOR<CompanyBranchUpdateManyMutationInput, CompanyBranchUncheckedUpdateManyInput>
    /**
     * Filter which CompanyBranches to update
     * 
    **/
    where?: CompanyBranchWhereInput
  }


  /**
   * CompanyBranch upsert
   */
  export type CompanyBranchUpsertArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     * 
    **/
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyBranchInclude | null
    /**
     * The filter to search for the CompanyBranch to update in case it exists.
     * 
    **/
    where: CompanyBranchWhereUniqueInput
    /**
     * In case the CompanyBranch found by the `where` argument doesn't exist, create a new CompanyBranch with this data.
     * 
    **/
    create: XOR<CompanyBranchCreateInput, CompanyBranchUncheckedCreateInput>
    /**
     * In case the CompanyBranch was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CompanyBranchUpdateInput, CompanyBranchUncheckedUpdateInput>
  }


  /**
   * CompanyBranch delete
   */
  export type CompanyBranchDeleteArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     * 
    **/
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CompanyBranchInclude | null
    /**
     * Filter which CompanyBranch to delete.
     * 
    **/
    where: CompanyBranchWhereUniqueInput
  }


  /**
   * CompanyBranch deleteMany
   */
  export type CompanyBranchDeleteManyArgs = {
    /**
     * Filter which CompanyBranches to delete
     * 
    **/
    where?: CompanyBranchWhereInput
  }


  /**
   * CompanyBranch without action
   */
  export type CompanyBranchArgs = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     * 
    **/
    select?: CompanyBranchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
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
    firstname: string | null
    lastname: string | null
    avatar: string | null
    dob: Date | null
    prefix: string | null
    tel: string | null
    address: string | null
    gender: string | null
    staff_code: string | null
    religion: string | null
    userId: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    bio: string | null
    firstname: string | null
    lastname: string | null
    avatar: string | null
    dob: Date | null
    prefix: string | null
    tel: string | null
    address: string | null
    gender: string | null
    staff_code: string | null
    religion: string | null
    userId: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    bio: number
    firstname: number
    lastname: number
    avatar: number
    dob: number
    prefix: number
    tel: number
    address: number
    gender: number
    staff_code: number
    religion: number
    userId: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    bio?: true
    firstname?: true
    lastname?: true
    avatar?: true
    dob?: true
    prefix?: true
    tel?: true
    address?: true
    gender?: true
    staff_code?: true
    religion?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    firstname?: true
    lastname?: true
    avatar?: true
    dob?: true
    prefix?: true
    tel?: true
    address?: true
    gender?: true
    staff_code?: true
    religion?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    bio?: true
    firstname?: true
    lastname?: true
    avatar?: true
    dob?: true
    prefix?: true
    tel?: true
    address?: true
    gender?: true
    staff_code?: true
    religion?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which Profile to aggregate.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
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
    by: Array<ProfileScalarFieldEnum>
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
    firstname: string | null
    lastname: string | null
    avatar: string | null
    dob: Date | null
    prefix: string | null
    tel: string | null
    address: string | null
    gender: string | null
    staff_code: string | null
    religion: string | null
    userId: string
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
    firstname?: boolean
    lastname?: boolean
    avatar?: boolean
    dob?: boolean
    prefix?: boolean
    tel?: boolean
    address?: boolean
    gender?: boolean
    staff_code?: boolean
    religion?: boolean
    user?: boolean | UserArgs
    userId?: boolean
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


  type ProfileCountArgs = Merge<
    Omit<ProfileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }
  >

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
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile: findUnique
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
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile base type for findFirst actions
   */
  export type ProfileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     * 
    **/
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * Profile: findFirst
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
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     * 
    **/
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profiles to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The data needed to create a Profile.
     * 
    **/
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs = {
    /**
     * The data used to create many Profiles.
     * 
    **/
    data: Enumerable<ProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The data needed to update a Profile.
     * 
    **/
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs = {
    /**
     * The data used to update Profiles.
     * 
    **/
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     * 
    **/
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The filter to search for the Profile to update in case it exists.
     * 
    **/
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     * 
    **/
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter which Profile to delete.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs = {
    /**
     * Filter which Profiles to delete
     * 
    **/
    where?: ProfileWhereInput
  }


  /**
   * Profile without action
   */
  export type ProfileArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
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
    positionId: string | null
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
    positionId: string | null
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
    positionId: number
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
    positionId?: true
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
    positionId?: true
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
    positionId?: true
    companyBranchId?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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
    by: Array<UserScalarFieldEnum>
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
    positionId: string | null
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
    positionId?: boolean
    company?: boolean | CompanyFindManyArgs
    companyBranch?: boolean | CompanyBranchArgs
    companyBranchId?: boolean
    Position?: boolean | PositionArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    profile?: boolean | ProfileArgs
    role?: boolean | RoleArgs
    company?: boolean | CompanyFindManyArgs
    companyBranch?: boolean | CompanyBranchArgs
    Position?: boolean | PositionArgs
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
        P extends 'Position' ? PositionGetPayload<S['include'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'profile' ? ProfileGetPayload<S['select'][P]> | null :
        P extends 'role' ? RoleGetPayload<S['select'][P]> | null :
        P extends 'company' ? Array < CompanyGetPayload<S['select'][P]>>  :
        P extends 'companyBranch' ? CompanyBranchGetPayload<S['select'][P]> | null :
        P extends 'Position' ? PositionGetPayload<S['select'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

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

    company<T extends CompanyFindManyArgs= {}>(args?: Subset<T, CompanyFindManyArgs>): PrismaPromise<Array<CompanyGetPayload<T>>| Null>;

    companyBranch<T extends CompanyBranchArgs= {}>(args?: Subset<T, CompanyBranchArgs>): Prisma__CompanyBranchClient<CompanyBranchGetPayload<T> | Null>;

    Position<T extends PositionArgs= {}>(args?: Subset<T, PositionArgs>): Prisma__PositionClient<PositionGetPayload<T> | Null>;

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
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
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
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
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
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
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
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
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
    by: Array<RoleScalarFieldEnum>
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
    users?: boolean | UserFindManyArgs
    _count?: boolean | RoleCountOutputTypeArgs
  }


  export type RoleInclude = {
    users?: boolean | UserFindManyArgs
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


  type RoleCountArgs = Merge<
    Omit<RoleFindManyArgs, 'select' | 'include'> & {
      select?: RoleCountAggregateInputType | true
    }
  >

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

    users<T extends UserFindManyArgs= {}>(args?: Subset<T, UserFindManyArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

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
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where: RoleWhereUniqueInput
  }

  /**
   * Role: findUnique
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
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role base type for findFirst actions
   */
  export type RoleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     * 
    **/
    distinct?: Enumerable<RoleScalarFieldEnum>
  }

  /**
   * Role: findFirst
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
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Role to fetch.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     * 
    **/
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role findMany
   */
  export type RoleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter, which Roles to fetch.
     * 
    **/
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     * 
    **/
    orderBy?: Enumerable<RoleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     * 
    **/
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RoleScalarFieldEnum>
  }


  /**
   * Role create
   */
  export type RoleCreateArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The data needed to create a Role.
     * 
    **/
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role createMany
   */
  export type RoleCreateManyArgs = {
    /**
     * The data used to create many Roles.
     * 
    **/
    data: Enumerable<RoleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The data needed to update a Role.
     * 
    **/
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs = {
    /**
     * The data used to update Roles.
     * 
    **/
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     * 
    **/
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * The filter to search for the Role to update in case it exists.
     * 
    **/
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     * 
    **/
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
    /**
     * Filter which Role to delete.
     * 
    **/
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs = {
    /**
     * Filter which Roles to delete
     * 
    **/
    where?: RoleWhereInput
  }


  /**
   * Role without action
   */
  export type RoleArgs = {
    /**
     * Select specific fields to fetch from the Role
     * 
    **/
    select?: RoleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RoleInclude | null
  }



  /**
   * Model Position
   */


  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionMinAggregateOutputType = {
    id: string | null
    name: string | null
    companyBranchId: string | null
  }

  export type PositionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    companyBranchId: string | null
  }

  export type PositionCountAggregateOutputType = {
    id: number
    name: number
    access: number
    companyBranchId: number
    _all: number
  }


  export type PositionMinAggregateInputType = {
    id?: true
    name?: true
    companyBranchId?: true
  }

  export type PositionMaxAggregateInputType = {
    id?: true
    name?: true
    companyBranchId?: true
  }

  export type PositionCountAggregateInputType = {
    id?: true
    name?: true
    access?: true
    companyBranchId?: true
    _all?: true
  }

  export type PositionAggregateArgs = {
    /**
     * Filter which Position to aggregate.
     * 
    **/
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     * 
    **/
    orderBy?: Enumerable<PositionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs = {
    where?: PositionWhereInput
    orderBy?: Enumerable<PositionOrderByWithAggregationInput>
    by: Array<PositionScalarFieldEnum>
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }


  export type PositionGroupByOutputType = {
    id: string
    name: string
    access: JsonValue
    companyBranchId: string | null
    _count: PositionCountAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect = {
    id?: boolean
    name?: boolean
    access?: boolean
    users?: boolean | UserFindManyArgs
    companyBranch?: boolean | CompanyBranchArgs
    companyBranchId?: boolean
    _count?: boolean | PositionCountOutputTypeArgs
  }


  export type PositionInclude = {
    users?: boolean | UserFindManyArgs
    companyBranch?: boolean | CompanyBranchArgs
    _count?: boolean | PositionCountOutputTypeArgs
  } 

  export type PositionGetPayload<S extends boolean | null | undefined | PositionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Position :
    S extends undefined ? never :
    S extends { include: any } & (PositionArgs | PositionFindManyArgs)
    ? Position  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'companyBranch' ? CompanyBranchGetPayload<S['include'][P]> | null :
        P extends '_count' ? PositionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PositionArgs | PositionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'companyBranch' ? CompanyBranchGetPayload<S['select'][P]> | null :
        P extends '_count' ? PositionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Position ? Position[P] : never
  } 
      : Position


  type PositionCountArgs = Merge<
    Omit<PositionFindManyArgs, 'select' | 'include'> & {
      select?: PositionCountAggregateInputType | true
    }
  >

  export interface PositionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PositionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PositionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Position'> extends True ? Prisma__PositionClient<PositionGetPayload<T>> : Prisma__PositionClient<PositionGetPayload<T> | null, null>

    /**
     * Find one Position that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PositionFindUniqueOrThrowArgs>
    ): Prisma__PositionClient<PositionGetPayload<T>>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PositionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PositionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Position'> extends True ? Prisma__PositionClient<PositionGetPayload<T>> : Prisma__PositionClient<PositionGetPayload<T> | null, null>

    /**
     * Find the first Position that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PositionFindFirstOrThrowArgs>
    ): Prisma__PositionClient<PositionGetPayload<T>>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PositionFindManyArgs>(
      args?: SelectSubset<T, PositionFindManyArgs>
    ): PrismaPromise<Array<PositionGetPayload<T>>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
    **/
    create<T extends PositionCreateArgs>(
      args: SelectSubset<T, PositionCreateArgs>
    ): Prisma__PositionClient<PositionGetPayload<T>>

    /**
     * Create many Positions.
     *     @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     *     @example
     *     // Create many Positions
     *     const position = await prisma.position.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PositionCreateManyArgs>(
      args?: SelectSubset<T, PositionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
    **/
    delete<T extends PositionDeleteArgs>(
      args: SelectSubset<T, PositionDeleteArgs>
    ): Prisma__PositionClient<PositionGetPayload<T>>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PositionUpdateArgs>(
      args: SelectSubset<T, PositionUpdateArgs>
    ): Prisma__PositionClient<PositionGetPayload<T>>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PositionDeleteManyArgs>(
      args?: SelectSubset<T, PositionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PositionUpdateManyArgs>(
      args: SelectSubset<T, PositionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
    **/
    upsert<T extends PositionUpsertArgs>(
      args: SelectSubset<T, PositionUpsertArgs>
    ): Prisma__PositionClient<PositionGetPayload<T>>

    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
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
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PositionClient<T, Null = never> implements PrismaPromise<T> {
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

    users<T extends UserFindManyArgs= {}>(args?: Subset<T, UserFindManyArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

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
   * Position base type for findUnique actions
   */
  export type PositionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * Filter, which Position to fetch.
     * 
    **/
    where: PositionWhereUniqueInput
  }

  /**
   * Position: findUnique
   */
  export interface PositionFindUniqueArgs extends PositionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * Filter, which Position to fetch.
     * 
    **/
    where: PositionWhereUniqueInput
  }


  /**
   * Position base type for findFirst actions
   */
  export type PositionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * Filter, which Position to fetch.
     * 
    **/
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     * 
    **/
    orderBy?: Enumerable<PositionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     * 
    **/
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     * 
    **/
    distinct?: Enumerable<PositionScalarFieldEnum>
  }

  /**
   * Position: findFirst
   */
  export interface PositionFindFirstArgs extends PositionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * Filter, which Position to fetch.
     * 
    **/
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     * 
    **/
    orderBy?: Enumerable<PositionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     * 
    **/
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     * 
    **/
    distinct?: Enumerable<PositionScalarFieldEnum>
  }


  /**
   * Position findMany
   */
  export type PositionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * Filter, which Positions to fetch.
     * 
    **/
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     * 
    **/
    orderBy?: Enumerable<PositionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     * 
    **/
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PositionScalarFieldEnum>
  }


  /**
   * Position create
   */
  export type PositionCreateArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * The data needed to create a Position.
     * 
    **/
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }


  /**
   * Position createMany
   */
  export type PositionCreateManyArgs = {
    /**
     * The data used to create many Positions.
     * 
    **/
    data: Enumerable<PositionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Position update
   */
  export type PositionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * The data needed to update a Position.
     * 
    **/
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     * 
    **/
    where: PositionWhereUniqueInput
  }


  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs = {
    /**
     * The data used to update Positions.
     * 
    **/
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     * 
    **/
    where?: PositionWhereInput
  }


  /**
   * Position upsert
   */
  export type PositionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * The filter to search for the Position to update in case it exists.
     * 
    **/
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     * 
    **/
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }


  /**
   * Position delete
   */
  export type PositionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
    /**
     * Filter which Position to delete.
     * 
    **/
    where: PositionWhereUniqueInput
  }


  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs = {
    /**
     * Filter which Positions to delete
     * 
    **/
    where?: PositionWhereInput
  }


  /**
   * Position without action
   */
  export type PositionArgs = {
    /**
     * Select specific fields to fetch from the Position
     * 
    **/
    select?: PositionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PositionInclude | null
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
     * 
    **/
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     * 
    **/
    orderBy?: Enumerable<ProvinceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     * 
    **/
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
    by: Array<ProvinceScalarFieldEnum>
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
    district?: boolean | DistrictFindManyArgs
    _count?: boolean | ProvinceCountOutputTypeArgs
  }


  export type ProvinceInclude = {
    district?: boolean | DistrictFindManyArgs
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


  type ProvinceCountArgs = Merge<
    Omit<ProvinceFindManyArgs, 'select' | 'include'> & {
      select?: ProvinceCountAggregateInputType | true
    }
  >

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

    district<T extends DistrictFindManyArgs= {}>(args?: Subset<T, DistrictFindManyArgs>): PrismaPromise<Array<DistrictGetPayload<T>>| Null>;

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
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * Filter, which Province to fetch.
     * 
    **/
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province: findUnique
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
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * Filter, which Province to fetch.
     * 
    **/
    where: ProvinceWhereUniqueInput
  }


  /**
   * Province base type for findFirst actions
   */
  export type ProvinceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * Filter, which Province to fetch.
     * 
    **/
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     * 
    **/
    orderBy?: Enumerable<ProvinceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     * 
    **/
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     * 
    **/
    distinct?: Enumerable<ProvinceScalarFieldEnum>
  }

  /**
   * Province: findFirst
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
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * Filter, which Province to fetch.
     * 
    **/
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     * 
    **/
    orderBy?: Enumerable<ProvinceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     * 
    **/
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     * 
    **/
    distinct?: Enumerable<ProvinceScalarFieldEnum>
  }


  /**
   * Province findMany
   */
  export type ProvinceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * Filter, which Provinces to fetch.
     * 
    **/
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     * 
    **/
    orderBy?: Enumerable<ProvinceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     * 
    **/
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProvinceScalarFieldEnum>
  }


  /**
   * Province create
   */
  export type ProvinceCreateArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * The data needed to create a Province.
     * 
    **/
    data: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
  }


  /**
   * Province createMany
   */
  export type ProvinceCreateManyArgs = {
    /**
     * The data used to create many Provinces.
     * 
    **/
    data: Enumerable<ProvinceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Province update
   */
  export type ProvinceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * The data needed to update a Province.
     * 
    **/
    data: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
    /**
     * Choose, which Province to update.
     * 
    **/
    where: ProvinceWhereUniqueInput
  }


  /**
   * Province updateMany
   */
  export type ProvinceUpdateManyArgs = {
    /**
     * The data used to update Provinces.
     * 
    **/
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     * 
    **/
    where?: ProvinceWhereInput
  }


  /**
   * Province upsert
   */
  export type ProvinceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * The filter to search for the Province to update in case it exists.
     * 
    **/
    where: ProvinceWhereUniqueInput
    /**
     * In case the Province found by the `where` argument doesn't exist, create a new Province with this data.
     * 
    **/
    create: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
    /**
     * In case the Province was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
  }


  /**
   * Province delete
   */
  export type ProvinceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProvinceInclude | null
    /**
     * Filter which Province to delete.
     * 
    **/
    where: ProvinceWhereUniqueInput
  }


  /**
   * Province deleteMany
   */
  export type ProvinceDeleteManyArgs = {
    /**
     * Filter which Provinces to delete
     * 
    **/
    where?: ProvinceWhereInput
  }


  /**
   * Province without action
   */
  export type ProvinceArgs = {
    /**
     * Select specific fields to fetch from the Province
     * 
    **/
    select?: ProvinceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
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
     * 
    **/
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     * 
    **/
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     * 
    **/
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
    by: Array<DistrictScalarFieldEnum>
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
    amphoe?: boolean | AmphoeFindManyArgs
    _count?: boolean | DistrictCountOutputTypeArgs
  }


  export type DistrictInclude = {
    province?: boolean | ProvinceArgs
    amphoe?: boolean | AmphoeFindManyArgs
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


  type DistrictCountArgs = Merge<
    Omit<DistrictFindManyArgs, 'select' | 'include'> & {
      select?: DistrictCountAggregateInputType | true
    }
  >

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

    amphoe<T extends AmphoeFindManyArgs= {}>(args?: Subset<T, AmphoeFindManyArgs>): PrismaPromise<Array<AmphoeGetPayload<T>>| Null>;

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
     * 
    **/
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     * 
    **/
    where: DistrictWhereUniqueInput
  }

  /**
   * District: findUnique
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
     * 
    **/
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     * 
    **/
    where: DistrictWhereUniqueInput
  }


  /**
   * District base type for findFirst actions
   */
  export type DistrictFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the District
     * 
    **/
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     * 
    **/
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     * 
    **/
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     * 
    **/
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     * 
    **/
    distinct?: Enumerable<DistrictScalarFieldEnum>
  }

  /**
   * District: findFirst
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
     * 
    **/
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DistrictInclude | null
    /**
     * Filter, which District to fetch.
     * 
    **/
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     * 
    **/
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     * 
    **/
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     * 
    **/
    distinct?: Enumerable<DistrictScalarFieldEnum>
  }


  /**
   * District findMany
   */
  export type DistrictFindManyArgs = {
    /**
     * Select specific fields to fetch from the District
     * 
    **/
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DistrictInclude | null
    /**
     * Filter, which Districts to fetch.
     * 
    **/
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     * 
    **/
    orderBy?: Enumerable<DistrictOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Districts.
     * 
    **/
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DistrictScalarFieldEnum>
  }


  /**
   * District create
   */
  export type DistrictCreateArgs = {
    /**
     * Select specific fields to fetch from the District
     * 
    **/
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DistrictInclude | null
    /**
     * The data needed to create a District.
     * 
    **/
    data: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
  }


  /**
   * District createMany
   */
  export type DistrictCreateManyArgs = {
    /**
     * The data used to create many Districts.
     * 
    **/
    data: Enumerable<DistrictCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * District update
   */
  export type DistrictUpdateArgs = {
    /**
     * Select specific fields to fetch from the District
     * 
    **/
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DistrictInclude | null
    /**
     * The data needed to update a District.
     * 
    **/
    data: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
    /**
     * Choose, which District to update.
     * 
    **/
    where: DistrictWhereUniqueInput
  }


  /**
   * District updateMany
   */
  export type DistrictUpdateManyArgs = {
    /**
     * The data used to update Districts.
     * 
    **/
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     * 
    **/
    where?: DistrictWhereInput
  }


  /**
   * District upsert
   */
  export type DistrictUpsertArgs = {
    /**
     * Select specific fields to fetch from the District
     * 
    **/
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DistrictInclude | null
    /**
     * The filter to search for the District to update in case it exists.
     * 
    **/
    where: DistrictWhereUniqueInput
    /**
     * In case the District found by the `where` argument doesn't exist, create a new District with this data.
     * 
    **/
    create: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
    /**
     * In case the District was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
  }


  /**
   * District delete
   */
  export type DistrictDeleteArgs = {
    /**
     * Select specific fields to fetch from the District
     * 
    **/
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DistrictInclude | null
    /**
     * Filter which District to delete.
     * 
    **/
    where: DistrictWhereUniqueInput
  }


  /**
   * District deleteMany
   */
  export type DistrictDeleteManyArgs = {
    /**
     * Filter which Districts to delete
     * 
    **/
    where?: DistrictWhereInput
  }


  /**
   * District without action
   */
  export type DistrictArgs = {
    /**
     * Select specific fields to fetch from the District
     * 
    **/
    select?: DistrictSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
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
     * 
    **/
    where?: AmphoeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphoes to fetch.
     * 
    **/
    orderBy?: Enumerable<AmphoeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AmphoeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphoes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphoes.
     * 
    **/
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
    by: Array<AmphoeScalarFieldEnum>
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


  type AmphoeCountArgs = Merge<
    Omit<AmphoeFindManyArgs, 'select' | 'include'> & {
      select?: AmphoeCountAggregateInputType | true
    }
  >

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
     * 
    **/
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AmphoeInclude | null
    /**
     * Filter, which Amphoe to fetch.
     * 
    **/
    where: AmphoeWhereUniqueInput
  }

  /**
   * Amphoe: findUnique
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
     * 
    **/
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AmphoeInclude | null
    /**
     * Filter, which Amphoe to fetch.
     * 
    **/
    where: AmphoeWhereUniqueInput
  }


  /**
   * Amphoe base type for findFirst actions
   */
  export type AmphoeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Amphoe
     * 
    **/
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AmphoeInclude | null
    /**
     * Filter, which Amphoe to fetch.
     * 
    **/
    where?: AmphoeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphoes to fetch.
     * 
    **/
    orderBy?: Enumerable<AmphoeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amphoes.
     * 
    **/
    cursor?: AmphoeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphoes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphoes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amphoes.
     * 
    **/
    distinct?: Enumerable<AmphoeScalarFieldEnum>
  }

  /**
   * Amphoe: findFirst
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
     * 
    **/
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AmphoeInclude | null
    /**
     * Filter, which Amphoe to fetch.
     * 
    **/
    where?: AmphoeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphoes to fetch.
     * 
    **/
    orderBy?: Enumerable<AmphoeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amphoes.
     * 
    **/
    cursor?: AmphoeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphoes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphoes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amphoes.
     * 
    **/
    distinct?: Enumerable<AmphoeScalarFieldEnum>
  }


  /**
   * Amphoe findMany
   */
  export type AmphoeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     * 
    **/
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AmphoeInclude | null
    /**
     * Filter, which Amphoes to fetch.
     * 
    **/
    where?: AmphoeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amphoes to fetch.
     * 
    **/
    orderBy?: Enumerable<AmphoeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amphoes.
     * 
    **/
    cursor?: AmphoeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amphoes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amphoes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AmphoeScalarFieldEnum>
  }


  /**
   * Amphoe create
   */
  export type AmphoeCreateArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     * 
    **/
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AmphoeInclude | null
    /**
     * The data needed to create a Amphoe.
     * 
    **/
    data: XOR<AmphoeCreateInput, AmphoeUncheckedCreateInput>
  }


  /**
   * Amphoe createMany
   */
  export type AmphoeCreateManyArgs = {
    /**
     * The data used to create many Amphoes.
     * 
    **/
    data: Enumerable<AmphoeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Amphoe update
   */
  export type AmphoeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     * 
    **/
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AmphoeInclude | null
    /**
     * The data needed to update a Amphoe.
     * 
    **/
    data: XOR<AmphoeUpdateInput, AmphoeUncheckedUpdateInput>
    /**
     * Choose, which Amphoe to update.
     * 
    **/
    where: AmphoeWhereUniqueInput
  }


  /**
   * Amphoe updateMany
   */
  export type AmphoeUpdateManyArgs = {
    /**
     * The data used to update Amphoes.
     * 
    **/
    data: XOR<AmphoeUpdateManyMutationInput, AmphoeUncheckedUpdateManyInput>
    /**
     * Filter which Amphoes to update
     * 
    **/
    where?: AmphoeWhereInput
  }


  /**
   * Amphoe upsert
   */
  export type AmphoeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     * 
    **/
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AmphoeInclude | null
    /**
     * The filter to search for the Amphoe to update in case it exists.
     * 
    **/
    where: AmphoeWhereUniqueInput
    /**
     * In case the Amphoe found by the `where` argument doesn't exist, create a new Amphoe with this data.
     * 
    **/
    create: XOR<AmphoeCreateInput, AmphoeUncheckedCreateInput>
    /**
     * In case the Amphoe was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AmphoeUpdateInput, AmphoeUncheckedUpdateInput>
  }


  /**
   * Amphoe delete
   */
  export type AmphoeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     * 
    **/
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AmphoeInclude | null
    /**
     * Filter which Amphoe to delete.
     * 
    **/
    where: AmphoeWhereUniqueInput
  }


  /**
   * Amphoe deleteMany
   */
  export type AmphoeDeleteManyArgs = {
    /**
     * Filter which Amphoes to delete
     * 
    **/
    where?: AmphoeWhereInput
  }


  /**
   * Amphoe without action
   */
  export type AmphoeArgs = {
    /**
     * Select specific fields to fetch from the Amphoe
     * 
    **/
    select?: AmphoeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AmphoeInclude | null
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
    city: 'city',
    state: 'state',
    zip: 'zip',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyId: 'companyId'
  };

  export type CompanyBranchScalarFieldEnum = (typeof CompanyBranchScalarFieldEnum)[keyof typeof CompanyBranchScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyCode: 'companyCode',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    country: 'country',
    icon: 'icon',
    phone: 'phone',
    website: 'website',
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


  export const PositionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    access: 'access',
    companyBranchId: 'companyBranchId'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    firstname: 'firstname',
    lastname: 'lastname',
    avatar: 'avatar',
    dob: 'dob',
    prefix: 'prefix',
    tel: 'tel',
    address: 'address',
    gender: 'gender',
    staff_code: 'staff_code',
    religion: 'religion',
    userId: 'userId'
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
    positionId: 'positionId',
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
    address?: StringFilter | string
    city?: StringFilter | string
    state?: StringFilter | string
    zip?: StringFilter | string
    country?: StringNullableFilter | string | null
    icon?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    website?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ownerId?: UuidFilter | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    branch?: CompanyBranchListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    icon?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    branch?: CompanyBranchOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = {
    id?: string
    companyCode?: string
  }

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    icon?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompanyScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    companyCode?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    city?: StringWithAggregatesFilter | string
    state?: StringWithAggregatesFilter | string
    zip?: StringWithAggregatesFilter | string
    country?: StringNullableWithAggregatesFilter | string | null
    icon?: StringNullableWithAggregatesFilter | string | null
    phone?: StringNullableWithAggregatesFilter | string | null
    website?: StringNullableWithAggregatesFilter | string | null
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
    city?: StringFilter | string
    state?: StringFilter | string
    zip?: StringFilter | string
    country?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    company?: XOR<CompanyRelationFilter, CompanyWhereInput> | null
    companyId?: UuidNullableFilter | string | null
    users?: UserListRelationFilter
    positions?: PositionListRelationFilter
  }

  export type CompanyBranchOrderByWithRelationInput = {
    id?: SortOrder
    isMainbranch?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    companyId?: SortOrder
    users?: UserOrderByRelationAggregateInput
    positions?: PositionOrderByRelationAggregateInput
  }

  export type CompanyBranchWhereUniqueInput = {
    id?: string
  }

  export type CompanyBranchOrderByWithAggregationInput = {
    id?: SortOrder
    isMainbranch?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
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
    city?: StringWithAggregatesFilter | string
    state?: StringWithAggregatesFilter | string
    zip?: StringWithAggregatesFilter | string
    country?: StringNullableWithAggregatesFilter | string | null
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
    firstname?: StringNullableFilter | string | null
    lastname?: StringNullableFilter | string | null
    avatar?: StringNullableFilter | string | null
    dob?: DateTimeNullableFilter | Date | string | null
    prefix?: StringNullableFilter | string | null
    tel?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    gender?: StringNullableFilter | string | null
    staff_code?: StringNullableFilter | string | null
    religion?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: UuidFilter | string
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    avatar?: SortOrder
    dob?: SortOrder
    prefix?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    staff_code?: SortOrder
    religion?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type ProfileWhereUniqueInput = {
    id?: string
    staff_code?: string
    userId?: string
  }

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    avatar?: SortOrder
    dob?: SortOrder
    prefix?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    staff_code?: SortOrder
    religion?: SortOrder
    userId?: SortOrder
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
    firstname?: StringNullableWithAggregatesFilter | string | null
    lastname?: StringNullableWithAggregatesFilter | string | null
    avatar?: StringNullableWithAggregatesFilter | string | null
    dob?: DateTimeNullableWithAggregatesFilter | Date | string | null
    prefix?: StringNullableWithAggregatesFilter | string | null
    tel?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
    gender?: StringNullableWithAggregatesFilter | string | null
    staff_code?: StringNullableWithAggregatesFilter | string | null
    religion?: StringNullableWithAggregatesFilter | string | null
    userId?: UuidWithAggregatesFilter | string
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
    positionId?: UuidNullableFilter | string | null
    company?: CompanyListRelationFilter
    companyBranch?: XOR<CompanyBranchRelationFilter, CompanyBranchWhereInput> | null
    companyBranchId?: UuidNullableFilter | string | null
    Position?: XOR<PositionRelationFilter, PositionWhereInput> | null
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
    positionId?: SortOrder
    company?: CompanyOrderByRelationAggregateInput
    companyBranch?: CompanyBranchOrderByWithRelationInput
    companyBranchId?: SortOrder
    Position?: PositionOrderByWithRelationInput
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
    positionId?: SortOrder
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
    positionId?: UuidNullableWithAggregatesFilter | string | null
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

  export type PositionWhereInput = {
    AND?: Enumerable<PositionWhereInput>
    OR?: Enumerable<PositionWhereInput>
    NOT?: Enumerable<PositionWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    access?: JsonFilter
    users?: UserListRelationFilter
    companyBranch?: XOR<CompanyBranchRelationFilter, CompanyBranchWhereInput> | null
    companyBranchId?: UuidNullableFilter | string | null
  }

  export type PositionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    access?: SortOrder
    users?: UserOrderByRelationAggregateInput
    companyBranch?: CompanyBranchOrderByWithRelationInput
    companyBranchId?: SortOrder
  }

  export type PositionWhereUniqueInput = {
    id?: string
  }

  export type PositionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    access?: SortOrder
    companyBranchId?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PositionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PositionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PositionScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    access?: JsonWithAggregatesFilter
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

  export type CompanyCreateInput = {
    id: string
    name: string
    companyCode: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    icon?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCompanyInput
    branch?: CompanyBranchCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id: string
    name: string
    companyCode: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    icon?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    branch?: CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCompanyNestedInput
    branch?: CompanyBranchUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    branch?: CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id: string
    name: string
    companyCode: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    icon?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyBranchCreateInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchInput
    users?: UserCreateNestedManyWithoutCompanyBranchInput
    positions?: PositionCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUncheckedCreateInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyBranchInput
    positions?: PositionUncheckedCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchNestedInput
    users?: UserUpdateManyWithoutCompanyBranchNestedInput
    positions?: PositionUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyBranchNestedInput
    positions?: PositionUncheckedUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchCreateManyInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: string | null
  }

  export type CompanyBranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyBranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateInput = {
    id: string
    bio?: string | null
    firstname?: string | null
    lastname?: string | null
    avatar?: string | null
    dob?: Date | string | null
    prefix?: string | null
    tel?: string | null
    address?: string | null
    gender?: string | null
    staff_code?: string | null
    religion?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    bio?: string | null
    firstname?: string | null
    lastname?: string | null
    avatar?: string | null
    dob?: Date | string | null
    prefix?: string | null
    tel?: string | null
    address?: string | null
    gender?: string | null
    staff_code?: string | null
    religion?: string | null
    userId: string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateManyInput = {
    id: string
    bio?: string | null
    firstname?: string | null
    lastname?: string | null
    avatar?: string | null
    dob?: Date | string | null
    prefix?: string | null
    tel?: string | null
    address?: string | null
    gender?: string | null
    staff_code?: string | null
    religion?: string | null
    userId: string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
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
    Position?: PositionCreateNestedOneWithoutUsersInput
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
    positionId?: string | null
    company?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companyBranchId?: string | null
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
    Position?: PositionUpdateOneWithoutUsersNestedInput
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
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
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
    positionId?: string | null
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
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type PositionCreateInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    users?: UserCreateNestedManyWithoutPositionInput
    companyBranch?: CompanyBranchCreateNestedOneWithoutPositionsInput
  }

  export type PositionUncheckedCreateInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    users?: UserUncheckedCreateNestedManyWithoutPositionInput
    companyBranchId?: string | null
  }

  export type PositionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    users?: UserUpdateManyWithoutPositionNestedInput
    companyBranch?: CompanyBranchUpdateOneWithoutPositionsNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    users?: UserUncheckedUpdateManyWithoutPositionNestedInput
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PositionCreateManyInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    companyBranchId?: string | null
  }

  export type PositionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
  }

  export type PositionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
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

  export type CompanyBranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    icon?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    icon?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyCode?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    icon?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
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

  export type PositionListRelationFilter = {
    every?: PositionWhereInput
    some?: PositionWhereInput
    none?: PositionWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PositionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyBranchCountOrderByAggregateInput = {
    id?: SortOrder
    isMainbranch?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyBranchMaxOrderByAggregateInput = {
    id?: SortOrder
    isMainbranch?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type CompanyBranchMinOrderByAggregateInput = {
    id?: SortOrder
    isMainbranch?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    country?: SortOrder
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
    firstname?: SortOrder
    lastname?: SortOrder
    avatar?: SortOrder
    dob?: SortOrder
    prefix?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    staff_code?: SortOrder
    religion?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    avatar?: SortOrder
    dob?: SortOrder
    prefix?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    staff_code?: SortOrder
    religion?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    avatar?: SortOrder
    dob?: SortOrder
    prefix?: SortOrder
    tel?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    staff_code?: SortOrder
    religion?: SortOrder
    userId?: SortOrder
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

  export type PositionRelationFilter = {
    is?: PositionWhereInput | null
    isNot?: PositionWhereInput | null
  }

  export type CompanyOrderByRelationAggregateInput = {
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
    positionId?: SortOrder
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
    positionId?: SortOrder
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
    positionId?: SortOrder
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
    path?: Array<string>
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

  export type PositionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    access?: SortOrder
    companyBranchId?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyBranchId?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyBranchId?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
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

  export type CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<Enumerable<CompanyBranchCreateWithoutCompanyInput>, Enumerable<CompanyBranchUncheckedCreateWithoutCompanyInput>>
    connectOrCreate?: Enumerable<CompanyBranchCreateOrConnectWithoutCompanyInput>
    createMany?: CompanyBranchCreateManyCompanyInputEnvelope
    connect?: Enumerable<CompanyBranchWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type PositionCreateNestedManyWithoutCompanyBranchInput = {
    create?: XOR<Enumerable<PositionCreateWithoutCompanyBranchInput>, Enumerable<PositionUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<PositionCreateOrConnectWithoutCompanyBranchInput>
    createMany?: PositionCreateManyCompanyBranchInputEnvelope
    connect?: Enumerable<PositionWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyBranchInput = {
    create?: XOR<Enumerable<UserCreateWithoutCompanyBranchInput>, Enumerable<UserUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCompanyBranchInput>
    createMany?: UserCreateManyCompanyBranchInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type PositionUncheckedCreateNestedManyWithoutCompanyBranchInput = {
    create?: XOR<Enumerable<PositionCreateWithoutCompanyBranchInput>, Enumerable<PositionUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<PositionCreateOrConnectWithoutCompanyBranchInput>
    createMany?: PositionCreateManyCompanyBranchInputEnvelope
    connect?: Enumerable<PositionWhereUniqueInput>
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

  export type PositionUpdateManyWithoutCompanyBranchNestedInput = {
    create?: XOR<Enumerable<PositionCreateWithoutCompanyBranchInput>, Enumerable<PositionUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<PositionCreateOrConnectWithoutCompanyBranchInput>
    upsert?: Enumerable<PositionUpsertWithWhereUniqueWithoutCompanyBranchInput>
    createMany?: PositionCreateManyCompanyBranchInputEnvelope
    set?: Enumerable<PositionWhereUniqueInput>
    disconnect?: Enumerable<PositionWhereUniqueInput>
    delete?: Enumerable<PositionWhereUniqueInput>
    connect?: Enumerable<PositionWhereUniqueInput>
    update?: Enumerable<PositionUpdateWithWhereUniqueWithoutCompanyBranchInput>
    updateMany?: Enumerable<PositionUpdateManyWithWhereWithoutCompanyBranchInput>
    deleteMany?: Enumerable<PositionScalarWhereInput>
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

  export type PositionUncheckedUpdateManyWithoutCompanyBranchNestedInput = {
    create?: XOR<Enumerable<PositionCreateWithoutCompanyBranchInput>, Enumerable<PositionUncheckedCreateWithoutCompanyBranchInput>>
    connectOrCreate?: Enumerable<PositionCreateOrConnectWithoutCompanyBranchInput>
    upsert?: Enumerable<PositionUpsertWithWhereUniqueWithoutCompanyBranchInput>
    createMany?: PositionCreateManyCompanyBranchInputEnvelope
    set?: Enumerable<PositionWhereUniqueInput>
    disconnect?: Enumerable<PositionWhereUniqueInput>
    delete?: Enumerable<PositionWhereUniqueInput>
    connect?: Enumerable<PositionWhereUniqueInput>
    update?: Enumerable<PositionUpdateWithWhereUniqueWithoutCompanyBranchInput>
    updateMany?: Enumerable<PositionUpdateManyWithWhereWithoutCompanyBranchInput>
    deleteMany?: Enumerable<PositionScalarWhereInput>
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

  export type PositionCreateNestedOneWithoutUsersInput = {
    create?: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUsersInput
    connect?: PositionWhereUniqueInput
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

  export type PositionUpdateOneWithoutUsersNestedInput = {
    create?: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUsersInput
    upsert?: PositionUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: PositionWhereUniqueInput
    update?: XOR<PositionUpdateWithoutUsersInput, PositionUncheckedUpdateWithoutUsersInput>
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

  export type UserCreateNestedManyWithoutPositionInput = {
    create?: XOR<Enumerable<UserCreateWithoutPositionInput>, Enumerable<UserUncheckedCreateWithoutPositionInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutPositionInput>
    createMany?: UserCreateManyPositionInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type CompanyBranchCreateNestedOneWithoutPositionsInput = {
    create?: XOR<CompanyBranchCreateWithoutPositionsInput, CompanyBranchUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutPositionsInput
    connect?: CompanyBranchWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<Enumerable<UserCreateWithoutPositionInput>, Enumerable<UserUncheckedCreateWithoutPositionInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutPositionInput>
    createMany?: UserCreateManyPositionInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutPositionNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutPositionInput>, Enumerable<UserUncheckedCreateWithoutPositionInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutPositionInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutPositionInput>
    createMany?: UserCreateManyPositionInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutPositionInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutPositionInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type CompanyBranchUpdateOneWithoutPositionsNestedInput = {
    create?: XOR<CompanyBranchCreateWithoutPositionsInput, CompanyBranchUncheckedCreateWithoutPositionsInput>
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutPositionsInput
    upsert?: CompanyBranchUpsertWithoutPositionsInput
    disconnect?: boolean
    delete?: boolean
    connect?: CompanyBranchWhereUniqueInput
    update?: XOR<CompanyBranchUpdateWithoutPositionsInput, CompanyBranchUncheckedUpdateWithoutPositionsInput>
  }

  export type UserUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutPositionInput>, Enumerable<UserUncheckedCreateWithoutPositionInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutPositionInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutPositionInput>
    createMany?: UserCreateManyPositionInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutPositionInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutPositionInput>
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
    path?: Array<string>
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
    Position?: PositionCreateNestedOneWithoutUsersInput
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
    positionId?: string | null
    companyBranchId?: string | null
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
    city: string
    state: string
    zip: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyBranchInput
    positions?: PositionCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUncheckedCreateWithoutCompanyInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyBranchInput
    positions?: PositionUncheckedCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchCreateOrConnectWithoutCompanyInput = {
    where: CompanyBranchWhereUniqueInput
    create: XOR<CompanyBranchCreateWithoutCompanyInput, CompanyBranchUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyBranchCreateManyCompanyInputEnvelope = {
    data: Enumerable<CompanyBranchCreateManyCompanyInput>
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
    Position?: PositionUpdateOneWithoutUsersNestedInput
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
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
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
    city?: StringFilter | string
    state?: StringFilter | string
    zip?: StringFilter | string
    country?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    companyId?: UuidNullableFilter | string | null
  }

  export type CompanyCreateWithoutBranchInput = {
    id: string
    name: string
    companyCode: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    icon?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutBranchInput = {
    id: string
    name: string
    companyCode: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    icon?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
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
    Position?: PositionCreateNestedOneWithoutUsersInput
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
    positionId?: string | null
    company?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCompanyBranchInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyBranchInput, UserUncheckedCreateWithoutCompanyBranchInput>
  }

  export type UserCreateManyCompanyBranchInputEnvelope = {
    data: Enumerable<UserCreateManyCompanyBranchInput>
    skipDuplicates?: boolean
  }

  export type PositionCreateWithoutCompanyBranchInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    users?: UserCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateWithoutCompanyBranchInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    users?: UserUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionCreateOrConnectWithoutCompanyBranchInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutCompanyBranchInput, PositionUncheckedCreateWithoutCompanyBranchInput>
  }

  export type PositionCreateManyCompanyBranchInputEnvelope = {
    data: Enumerable<PositionCreateManyCompanyBranchInput>
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
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
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
    positionId?: UuidNullableFilter | string | null
    companyBranchId?: UuidNullableFilter | string | null
  }

  export type PositionUpsertWithWhereUniqueWithoutCompanyBranchInput = {
    where: PositionWhereUniqueInput
    update: XOR<PositionUpdateWithoutCompanyBranchInput, PositionUncheckedUpdateWithoutCompanyBranchInput>
    create: XOR<PositionCreateWithoutCompanyBranchInput, PositionUncheckedCreateWithoutCompanyBranchInput>
  }

  export type PositionUpdateWithWhereUniqueWithoutCompanyBranchInput = {
    where: PositionWhereUniqueInput
    data: XOR<PositionUpdateWithoutCompanyBranchInput, PositionUncheckedUpdateWithoutCompanyBranchInput>
  }

  export type PositionUpdateManyWithWhereWithoutCompanyBranchInput = {
    where: PositionScalarWhereInput
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyWithoutPositionsInput>
  }

  export type PositionScalarWhereInput = {
    AND?: Enumerable<PositionScalarWhereInput>
    OR?: Enumerable<PositionScalarWhereInput>
    NOT?: Enumerable<PositionScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    access?: JsonFilter
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
    Position?: PositionCreateNestedOneWithoutUsersInput
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
    positionId?: string | null
    company?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companyBranchId?: string | null
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
    Position?: PositionUpdateOneWithoutUsersNestedInput
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
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateWithoutUserInput = {
    id: string
    bio?: string | null
    firstname?: string | null
    lastname?: string | null
    avatar?: string | null
    dob?: Date | string | null
    prefix?: string | null
    tel?: string | null
    address?: string | null
    gender?: string | null
    staff_code?: string | null
    religion?: string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id: string
    bio?: string | null
    firstname?: string | null
    lastname?: string | null
    avatar?: string | null
    dob?: Date | string | null
    prefix?: string | null
    tel?: string | null
    address?: string | null
    gender?: string | null
    staff_code?: string | null
    religion?: string | null
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
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    icon?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: CompanyBranchCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutOwnerInput = {
    id: string
    name: string
    companyCode: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    icon?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput
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
    city: string
    state: string
    zip: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchInput
    positions?: PositionCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUncheckedCreateWithoutUsersInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: string | null
    positions?: PositionUncheckedCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchCreateOrConnectWithoutUsersInput = {
    where: CompanyBranchWhereUniqueInput
    create: XOR<CompanyBranchCreateWithoutUsersInput, CompanyBranchUncheckedCreateWithoutUsersInput>
  }

  export type PositionCreateWithoutUsersInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    companyBranch?: CompanyBranchCreateNestedOneWithoutPositionsInput
  }

  export type PositionUncheckedCreateWithoutUsersInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
    companyBranchId?: string | null
  }

  export type PositionCreateOrConnectWithoutUsersInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    staff_code?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
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
    address?: StringFilter | string
    city?: StringFilter | string
    state?: StringFilter | string
    zip?: StringFilter | string
    country?: StringNullableFilter | string | null
    icon?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    website?: StringNullableFilter | string | null
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
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchNestedInput
    positions?: PositionUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: PositionUncheckedUpdateManyWithoutCompanyBranchNestedInput
  }

  export type PositionUpsertWithoutUsersInput = {
    update: XOR<PositionUpdateWithoutUsersInput, PositionUncheckedUpdateWithoutUsersInput>
    create: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
  }

  export type PositionUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    companyBranch?: CompanyBranchUpdateOneWithoutPositionsNestedInput
  }

  export type PositionUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
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
    Position?: PositionCreateNestedOneWithoutUsersInput
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
    positionId?: string | null
    company?: CompanyUncheckedCreateNestedManyWithoutOwnerInput
    companyBranchId?: string | null
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

  export type UserCreateWithoutPositionInput = {
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
  }

  export type UserUncheckedCreateWithoutPositionInput = {
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
  }

  export type UserCreateOrConnectWithoutPositionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput>
  }

  export type UserCreateManyPositionInputEnvelope = {
    data: Enumerable<UserCreateManyPositionInput>
    skipDuplicates?: boolean
  }

  export type CompanyBranchCreateWithoutPositionsInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchInput
    users?: UserCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUncheckedCreateWithoutPositionsInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchCreateOrConnectWithoutPositionsInput = {
    where: CompanyBranchWhereUniqueInput
    create: XOR<CompanyBranchCreateWithoutPositionsInput, CompanyBranchUncheckedCreateWithoutPositionsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutPositionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPositionInput, UserUncheckedUpdateWithoutPositionInput>
    create: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPositionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPositionInput, UserUncheckedUpdateWithoutPositionInput>
  }

  export type UserUpdateManyWithWhereWithoutPositionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type CompanyBranchUpsertWithoutPositionsInput = {
    update: XOR<CompanyBranchUpdateWithoutPositionsInput, CompanyBranchUncheckedUpdateWithoutPositionsInput>
    create: XOR<CompanyBranchCreateWithoutPositionsInput, CompanyBranchUncheckedCreateWithoutPositionsInput>
  }

  export type CompanyBranchUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchNestedInput
    users?: UserUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type CompanyBranchCreateManyCompanyInput = {
    id: string
    isMainbranch?: boolean
    name: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyBranchUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyBranchNestedInput
    positions?: PositionUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyBranchNestedInput
    positions?: PositionUncheckedUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainbranch?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    positionId?: string | null
  }

  export type PositionCreateManyCompanyBranchInput = {
    id: string
    name: string
    access: JsonNullValueInput | InputJsonValue
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
    Position?: PositionUpdateOneWithoutUsersNestedInput
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
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
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
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PositionUpdateWithoutCompanyBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    users?: UserUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateWithoutCompanyBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    users?: UserUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateManyWithoutPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
  }

  export type CompanyCreateManyOwnerInput = {
    id: string
    name: string
    companyCode: string
    address: string
    city: string
    state: string
    zip: string
    country?: string | null
    icon?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: CompanyBranchUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    companyCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    positionId?: string | null
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
    Position?: PositionUpdateOneWithoutUsersNestedInput
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
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUncheckedUpdateManyWithoutOwnerNestedInput
    companyBranchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyPositionInput = {
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

  export type UserUpdateWithoutPositionInput = {
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
  }

  export type UserUncheckedUpdateWithoutPositionInput = {
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