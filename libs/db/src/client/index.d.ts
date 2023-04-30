
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Reconfirmation
 * 
 */
export type Reconfirmation = {
  created_at: Date
  confirmed_at: Date
}

/**
 * Model Payment
 * 
 */
export type Payment = {
  external_id: string
  provider: string
  amount: number
  currency: string
  terms: string
  successful: boolean
}

/**
 * Model NoShow
 * 
 */
export type NoShow = {
  uri: string
  created_at: Date
}

/**
 * Model CalendlyInviteePayloadsResourceCancellation
 * 
 */
export type CalendlyInviteePayloadsResourceCancellation = {
  canceled_by: string
  canceler_type: string
  reason: string
}

/**
 * Model CalendlyInviteePayloadsResourceQuestionsAndAnswers
 * 
 */
export type CalendlyInviteePayloadsResourceQuestionsAndAnswers = {
  answer: string
  position: number
  question: string
}

/**
 * Model CalendlyInviteePayloadsResourceTracking
 * 
 */
export type CalendlyInviteePayloadsResourceTracking = {
  salesforce_uuid: string | null
  utm_campaign: string | null
  utm_content: string | null
  utm_medium: string | null
  utm_source: string | null
  utm_term: string | null
}

/**
 * Model contacts
 * 
 */
export type contacts = {
  id: string
  email: string
  name: string
  message: string
  timestamp: Date
}

/**
 * Model qr_code_logs
 * 
 */
export type qr_code_logs = {
  id: string
  flyerSize: number
  campaign: number
  designId: number
  location: number
  timestamp: Date
}

/**
 * Model calendlyInviteePayloads
 * 
 */
export type calendlyInviteePayloads = {
  id: string
  cancel_url: string
  cancellation: CalendlyInviteePayloadsResourceCancellation | null
  created_at: Date
  email: string
  event: string
  first_name: string | null
  last_name: string | null
  name: string
  new_invitee: string | null
  no_show: NoShow | null
  old_invitee: string | null
  payment: Payment | null
  questions_and_answers: CalendlyInviteePayloadsResourceQuestionsAndAnswers[]
  reconfirmation: Reconfirmation | null
  reschedule_url: string
  rescheduled: boolean
  routing_form_submission: string | null
  status: string
  text_reminder_number: string | null
  timezone: string
  tracking: CalendlyInviteePayloadsResourceTracking
  updated_at: Date
  uri: string
  clientId: string | null
}

/**
 * Model clients
 * 
 */
export type clients = {
  id: string
  activeMember: boolean
  archived: boolean
  email: string
  dateJoined: Date
  firstLesson: Date | null
  lastLesson: Date | null
  nextLesson: Date | null
  lessonsRemaining: number
  name: string
  notes: string | null
  preferredLessonFormat: string | null
  pronouns: string | null
  refundedVolume: number
  totalLessons: number
  totalSpend: number
  stripe_customer_id: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contacts
 * const contacts = await prisma.contacts.findMany()
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
   * // Fetch zero or more Contacts
   * const contacts = await prisma.contacts.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

      /**
   * `prisma.contacts`: Exposes CRUD operations for the **contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.contactsDelegate<GlobalReject>;

  /**
   * `prisma.qr_code_logs`: Exposes CRUD operations for the **qr_code_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qr_code_logs
    * const qr_code_logs = await prisma.qr_code_logs.findMany()
    * ```
    */
  get qr_code_logs(): Prisma.qr_code_logsDelegate<GlobalReject>;

  /**
   * `prisma.calendlyInviteePayloads`: Exposes CRUD operations for the **calendlyInviteePayloads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalendlyInviteePayloads
    * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.findMany()
    * ```
    */
  get calendlyInviteePayloads(): Prisma.calendlyInviteePayloadsDelegate<GlobalReject>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.clientsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
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


  export const ModelName: {
    contacts: 'contacts',
    qr_code_logs: 'qr_code_logs',
    calendlyInviteePayloads: 'calendlyInviteePayloads',
    clients: 'clients'
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
   * Count Type ClientsCountOutputType
   */


  export type ClientsCountOutputType = {
    bookings: number
  }

  export type ClientsCountOutputTypeSelect = {
    bookings?: boolean
  }

  export type ClientsCountOutputTypeGetPayload<S extends boolean | null | undefined | ClientsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ClientsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ClientsCountOutputTypeArgs)
    ? ClientsCountOutputType 
    : S extends { select: any } & (ClientsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ClientsCountOutputType ? ClientsCountOutputType[P] : never
  } 
      : ClientsCountOutputType




  // Custom InputTypes

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Reconfirmation
   */





  export type ReconfirmationSelect = {
    created_at?: boolean
    confirmed_at?: boolean
  }


  export type ReconfirmationGetPayload<S extends boolean | null | undefined | ReconfirmationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Reconfirmation :
    S extends undefined ? never :
    S extends { include: any } & (ReconfirmationArgs)
    ? Reconfirmation 
    : S extends { select: any } & (ReconfirmationArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Reconfirmation ? Reconfirmation[P] : never
  } 
      : Reconfirmation



  export interface ReconfirmationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for Reconfirmation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReconfirmationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * Reconfirmation without action
   */
  export type ReconfirmationArgs = {
    /**
     * Select specific fields to fetch from the Reconfirmation
     */
    select?: ReconfirmationSelect | null
  }



  /**
   * Model Payment
   */





  export type PaymentSelect = {
    external_id?: boolean
    provider?: boolean
    amount?: boolean
    currency?: boolean
    terms?: boolean
    successful?: boolean
  }


  export type PaymentGetPayload<S extends boolean | null | undefined | PaymentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Payment :
    S extends undefined ? never :
    S extends { include: any } & (PaymentArgs)
    ? Payment 
    : S extends { select: any } & (PaymentArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Payment ? Payment[P] : never
  } 
      : Payment



  export interface PaymentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PaymentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * Payment without action
   */
  export type PaymentArgs = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect | null
  }



  /**
   * Model NoShow
   */





  export type NoShowSelect = {
    uri?: boolean
    created_at?: boolean
  }


  export type NoShowGetPayload<S extends boolean | null | undefined | NoShowArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? NoShow :
    S extends undefined ? never :
    S extends { include: any } & (NoShowArgs)
    ? NoShow 
    : S extends { select: any } & (NoShowArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof NoShow ? NoShow[P] : never
  } 
      : NoShow



  export interface NoShowDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for NoShow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NoShowClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * NoShow without action
   */
  export type NoShowArgs = {
    /**
     * Select specific fields to fetch from the NoShow
     */
    select?: NoShowSelect | null
  }



  /**
   * Model CalendlyInviteePayloadsResourceCancellation
   */





  export type CalendlyInviteePayloadsResourceCancellationSelect = {
    canceled_by?: boolean
    canceler_type?: boolean
    reason?: boolean
  }


  export type CalendlyInviteePayloadsResourceCancellationGetPayload<S extends boolean | null | undefined | CalendlyInviteePayloadsResourceCancellationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CalendlyInviteePayloadsResourceCancellation :
    S extends undefined ? never :
    S extends { include: any } & (CalendlyInviteePayloadsResourceCancellationArgs)
    ? CalendlyInviteePayloadsResourceCancellation 
    : S extends { select: any } & (CalendlyInviteePayloadsResourceCancellationArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CalendlyInviteePayloadsResourceCancellation ? CalendlyInviteePayloadsResourceCancellation[P] : never
  } 
      : CalendlyInviteePayloadsResourceCancellation



  export interface CalendlyInviteePayloadsResourceCancellationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendlyInviteePayloadsResourceCancellation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CalendlyInviteePayloadsResourceCancellationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * CalendlyInviteePayloadsResourceCancellation without action
   */
  export type CalendlyInviteePayloadsResourceCancellationArgs = {
    /**
     * Select specific fields to fetch from the CalendlyInviteePayloadsResourceCancellation
     */
    select?: CalendlyInviteePayloadsResourceCancellationSelect | null
  }



  /**
   * Model CalendlyInviteePayloadsResourceQuestionsAndAnswers
   */





  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersSelect = {
    answer?: boolean
    position?: boolean
    question?: boolean
  }


  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersGetPayload<S extends boolean | null | undefined | CalendlyInviteePayloadsResourceQuestionsAndAnswersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CalendlyInviteePayloadsResourceQuestionsAndAnswers :
    S extends undefined ? never :
    S extends { include: any } & (CalendlyInviteePayloadsResourceQuestionsAndAnswersArgs)
    ? CalendlyInviteePayloadsResourceQuestionsAndAnswers 
    : S extends { select: any } & (CalendlyInviteePayloadsResourceQuestionsAndAnswersArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CalendlyInviteePayloadsResourceQuestionsAndAnswers ? CalendlyInviteePayloadsResourceQuestionsAndAnswers[P] : never
  } 
      : CalendlyInviteePayloadsResourceQuestionsAndAnswers



  export interface CalendlyInviteePayloadsResourceQuestionsAndAnswersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendlyInviteePayloadsResourceQuestionsAndAnswers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CalendlyInviteePayloadsResourceQuestionsAndAnswersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * CalendlyInviteePayloadsResourceQuestionsAndAnswers without action
   */
  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersArgs = {
    /**
     * Select specific fields to fetch from the CalendlyInviteePayloadsResourceQuestionsAndAnswers
     */
    select?: CalendlyInviteePayloadsResourceQuestionsAndAnswersSelect | null
  }



  /**
   * Model CalendlyInviteePayloadsResourceTracking
   */





  export type CalendlyInviteePayloadsResourceTrackingSelect = {
    salesforce_uuid?: boolean
    utm_campaign?: boolean
    utm_content?: boolean
    utm_medium?: boolean
    utm_source?: boolean
    utm_term?: boolean
  }


  export type CalendlyInviteePayloadsResourceTrackingGetPayload<S extends boolean | null | undefined | CalendlyInviteePayloadsResourceTrackingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CalendlyInviteePayloadsResourceTracking :
    S extends undefined ? never :
    S extends { include: any } & (CalendlyInviteePayloadsResourceTrackingArgs)
    ? CalendlyInviteePayloadsResourceTracking 
    : S extends { select: any } & (CalendlyInviteePayloadsResourceTrackingArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CalendlyInviteePayloadsResourceTracking ? CalendlyInviteePayloadsResourceTracking[P] : never
  } 
      : CalendlyInviteePayloadsResourceTracking



  export interface CalendlyInviteePayloadsResourceTrackingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {







  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendlyInviteePayloadsResourceTracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CalendlyInviteePayloadsResourceTrackingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * CalendlyInviteePayloadsResourceTracking without action
   */
  export type CalendlyInviteePayloadsResourceTrackingArgs = {
    /**
     * Select specific fields to fetch from the CalendlyInviteePayloadsResourceTracking
     */
    select?: CalendlyInviteePayloadsResourceTrackingSelect | null
  }



  /**
   * Model contacts
   */


  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    message: string | null
    timestamp: Date | null
  }

  export type ContactsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    message: string | null
    timestamp: Date | null
  }

  export type ContactsCountAggregateOutputType = {
    id: number
    email: number
    name: number
    message: number
    timestamp: number
    _all: number
  }


  export type ContactsMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    message?: true
    timestamp?: true
  }

  export type ContactsMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    message?: true
    timestamp?: true
  }

  export type ContactsCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    message?: true
    timestamp?: true
    _all?: true
  }

  export type ContactsAggregateArgs = {
    /**
     * Filter which contacts to aggregate.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: Enumerable<contactsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type ContactsGroupByArgs = {
    where?: contactsWhereInput
    orderBy?: Enumerable<contactsOrderByWithAggregationInput>
    by: ContactsScalarFieldEnum[]
    having?: contactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }


  export type ContactsGroupByOutputType = {
    id: string
    email: string
    name: string
    message: string
    timestamp: Date
    _count: ContactsCountAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends ContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type contactsSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    message?: boolean
    timestamp?: boolean
  }


  export type contactsGetPayload<S extends boolean | null | undefined | contactsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? contacts :
    S extends undefined ? never :
    S extends { include: any } & (contactsArgs | contactsFindManyArgs)
    ? contacts 
    : S extends { select: any } & (contactsArgs | contactsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof contacts ? contacts[P] : never
  } 
      : contacts


  type contactsCountArgs = 
    Omit<contactsFindManyArgs, 'select' | 'include'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface contactsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Contacts that matches the filter.
     * @param {contactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends contactsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, contactsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'contacts'> extends True ? Prisma__contactsClient<contactsGetPayload<T>> : Prisma__contactsClient<contactsGetPayload<T> | null, null>

    /**
     * Find one Contacts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {contactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends contactsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, contactsFindUniqueOrThrowArgs>
    ): Prisma__contactsClient<contactsGetPayload<T>>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends contactsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, contactsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'contacts'> extends True ? Prisma__contactsClient<contactsGetPayload<T>> : Prisma__contactsClient<contactsGetPayload<T> | null, null>

    /**
     * Find the first Contacts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends contactsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, contactsFindFirstOrThrowArgs>
    ): Prisma__contactsClient<contactsGetPayload<T>>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactsWithIdOnly = await prisma.contacts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends contactsFindManyArgs>(
      args?: SelectSubset<T, contactsFindManyArgs>
    ): Prisma.PrismaPromise<Array<contactsGetPayload<T>>>

    /**
     * Create a Contacts.
     * @param {contactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
    **/
    create<T extends contactsCreateArgs>(
      args: SelectSubset<T, contactsCreateArgs>
    ): Prisma__contactsClient<contactsGetPayload<T>>

    /**
     * Create many Contacts.
     *     @param {contactsCreateManyArgs} args - Arguments to create many Contacts.
     *     @example
     *     // Create many Contacts
     *     const contacts = await prisma.contacts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends contactsCreateManyArgs>(
      args?: SelectSubset<T, contactsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contacts.
     * @param {contactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
    **/
    delete<T extends contactsDeleteArgs>(
      args: SelectSubset<T, contactsDeleteArgs>
    ): Prisma__contactsClient<contactsGetPayload<T>>

    /**
     * Update one Contacts.
     * @param {contactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends contactsUpdateArgs>(
      args: SelectSubset<T, contactsUpdateArgs>
    ): Prisma__contactsClient<contactsGetPayload<T>>

    /**
     * Delete zero or more Contacts.
     * @param {contactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends contactsDeleteManyArgs>(
      args?: SelectSubset<T, contactsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends contactsUpdateManyArgs>(
      args: SelectSubset<T, contactsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contacts.
     * @param {contactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
    **/
    upsert<T extends contactsUpsertArgs>(
      args: SelectSubset<T, contactsUpsertArgs>
    ): Prisma__contactsClient<contactsGetPayload<T>>

    /**
     * Find zero or more Contacts that matches the filter.
     * @param {contactsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contacts = await prisma.contacts.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: contactsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Contacts.
     * @param {contactsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contacts = await prisma.contacts.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: contactsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends contactsCountArgs>(
      args?: Subset<T, contactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsGroupByArgs} args - Group by arguments.
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
      T extends ContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactsGroupByArgs['orderBy'] }
        : { orderBy?: ContactsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__contactsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * contacts base type for findUnique actions
   */
  export type contactsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect | null
    /**
     * Filter, which contacts to fetch.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts findUnique
   */
  export interface contactsFindUniqueArgs extends contactsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * contacts findUniqueOrThrow
   */
  export type contactsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect | null
    /**
     * Filter, which contacts to fetch.
     */
    where: contactsWhereUniqueInput
  }


  /**
   * contacts base type for findFirst actions
   */
  export type contactsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: Enumerable<contactsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: Enumerable<ContactsScalarFieldEnum>
  }

  /**
   * contacts findFirst
   */
  export interface contactsFindFirstArgs extends contactsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * contacts findFirstOrThrow
   */
  export type contactsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: Enumerable<contactsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: Enumerable<ContactsScalarFieldEnum>
  }


  /**
   * contacts findMany
   */
  export type contactsFindManyArgs = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: Enumerable<contactsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    distinct?: Enumerable<ContactsScalarFieldEnum>
  }


  /**
   * contacts create
   */
  export type contactsCreateArgs = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect | null
    /**
     * The data needed to create a contacts.
     */
    data: XOR<contactsCreateInput, contactsUncheckedCreateInput>
  }


  /**
   * contacts createMany
   */
  export type contactsCreateManyArgs = {
    /**
     * The data used to create many contacts.
     */
    data: Enumerable<contactsCreateManyInput>
  }


  /**
   * contacts update
   */
  export type contactsUpdateArgs = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect | null
    /**
     * The data needed to update a contacts.
     */
    data: XOR<contactsUpdateInput, contactsUncheckedUpdateInput>
    /**
     * Choose, which contacts to update.
     */
    where: contactsWhereUniqueInput
  }


  /**
   * contacts updateMany
   */
  export type contactsUpdateManyArgs = {
    /**
     * The data used to update contacts.
     */
    data: XOR<contactsUpdateManyMutationInput, contactsUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactsWhereInput
  }


  /**
   * contacts upsert
   */
  export type contactsUpsertArgs = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect | null
    /**
     * The filter to search for the contacts to update in case it exists.
     */
    where: contactsWhereUniqueInput
    /**
     * In case the contacts found by the `where` argument doesn't exist, create a new contacts with this data.
     */
    create: XOR<contactsCreateInput, contactsUncheckedCreateInput>
    /**
     * In case the contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactsUpdateInput, contactsUncheckedUpdateInput>
  }


  /**
   * contacts delete
   */
  export type contactsDeleteArgs = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect | null
    /**
     * Filter which contacts to delete.
     */
    where: contactsWhereUniqueInput
  }


  /**
   * contacts deleteMany
   */
  export type contactsDeleteManyArgs = {
    /**
     * Filter which contacts to delete
     */
    where?: contactsWhereInput
  }


  /**
   * contacts findRaw
   */
  export type contactsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * contacts aggregateRaw
   */
  export type contactsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * contacts without action
   */
  export type contactsArgs = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect | null
  }



  /**
   * Model qr_code_logs
   */


  export type AggregateQr_code_logs = {
    _count: Qr_code_logsCountAggregateOutputType | null
    _avg: Qr_code_logsAvgAggregateOutputType | null
    _sum: Qr_code_logsSumAggregateOutputType | null
    _min: Qr_code_logsMinAggregateOutputType | null
    _max: Qr_code_logsMaxAggregateOutputType | null
  }

  export type Qr_code_logsAvgAggregateOutputType = {
    flyerSize: number | null
    campaign: number | null
    designId: number | null
    location: number | null
  }

  export type Qr_code_logsSumAggregateOutputType = {
    flyerSize: number | null
    campaign: number | null
    designId: number | null
    location: number | null
  }

  export type Qr_code_logsMinAggregateOutputType = {
    id: string | null
    flyerSize: number | null
    campaign: number | null
    designId: number | null
    location: number | null
    timestamp: Date | null
  }

  export type Qr_code_logsMaxAggregateOutputType = {
    id: string | null
    flyerSize: number | null
    campaign: number | null
    designId: number | null
    location: number | null
    timestamp: Date | null
  }

  export type Qr_code_logsCountAggregateOutputType = {
    id: number
    flyerSize: number
    campaign: number
    designId: number
    location: number
    timestamp: number
    _all: number
  }


  export type Qr_code_logsAvgAggregateInputType = {
    flyerSize?: true
    campaign?: true
    designId?: true
    location?: true
  }

  export type Qr_code_logsSumAggregateInputType = {
    flyerSize?: true
    campaign?: true
    designId?: true
    location?: true
  }

  export type Qr_code_logsMinAggregateInputType = {
    id?: true
    flyerSize?: true
    campaign?: true
    designId?: true
    location?: true
    timestamp?: true
  }

  export type Qr_code_logsMaxAggregateInputType = {
    id?: true
    flyerSize?: true
    campaign?: true
    designId?: true
    location?: true
    timestamp?: true
  }

  export type Qr_code_logsCountAggregateInputType = {
    id?: true
    flyerSize?: true
    campaign?: true
    designId?: true
    location?: true
    timestamp?: true
    _all?: true
  }

  export type Qr_code_logsAggregateArgs = {
    /**
     * Filter which qr_code_logs to aggregate.
     */
    where?: qr_code_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qr_code_logs to fetch.
     */
    orderBy?: Enumerable<qr_code_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: qr_code_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qr_code_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qr_code_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned qr_code_logs
    **/
    _count?: true | Qr_code_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Qr_code_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Qr_code_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Qr_code_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Qr_code_logsMaxAggregateInputType
  }

  export type GetQr_code_logsAggregateType<T extends Qr_code_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateQr_code_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQr_code_logs[P]>
      : GetScalarType<T[P], AggregateQr_code_logs[P]>
  }




  export type Qr_code_logsGroupByArgs = {
    where?: qr_code_logsWhereInput
    orderBy?: Enumerable<qr_code_logsOrderByWithAggregationInput>
    by: Qr_code_logsScalarFieldEnum[]
    having?: qr_code_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Qr_code_logsCountAggregateInputType | true
    _avg?: Qr_code_logsAvgAggregateInputType
    _sum?: Qr_code_logsSumAggregateInputType
    _min?: Qr_code_logsMinAggregateInputType
    _max?: Qr_code_logsMaxAggregateInputType
  }


  export type Qr_code_logsGroupByOutputType = {
    id: string
    flyerSize: number
    campaign: number
    designId: number
    location: number
    timestamp: Date
    _count: Qr_code_logsCountAggregateOutputType | null
    _avg: Qr_code_logsAvgAggregateOutputType | null
    _sum: Qr_code_logsSumAggregateOutputType | null
    _min: Qr_code_logsMinAggregateOutputType | null
    _max: Qr_code_logsMaxAggregateOutputType | null
  }

  type GetQr_code_logsGroupByPayload<T extends Qr_code_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Qr_code_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Qr_code_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Qr_code_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Qr_code_logsGroupByOutputType[P]>
        }
      >
    >


  export type qr_code_logsSelect = {
    id?: boolean
    flyerSize?: boolean
    campaign?: boolean
    designId?: boolean
    location?: boolean
    timestamp?: boolean
  }


  export type qr_code_logsGetPayload<S extends boolean | null | undefined | qr_code_logsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? qr_code_logs :
    S extends undefined ? never :
    S extends { include: any } & (qr_code_logsArgs | qr_code_logsFindManyArgs)
    ? qr_code_logs 
    : S extends { select: any } & (qr_code_logsArgs | qr_code_logsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof qr_code_logs ? qr_code_logs[P] : never
  } 
      : qr_code_logs


  type qr_code_logsCountArgs = 
    Omit<qr_code_logsFindManyArgs, 'select' | 'include'> & {
      select?: Qr_code_logsCountAggregateInputType | true
    }

  export interface qr_code_logsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Qr_code_logs that matches the filter.
     * @param {qr_code_logsFindUniqueArgs} args - Arguments to find a Qr_code_logs
     * @example
     * // Get one Qr_code_logs
     * const qr_code_logs = await prisma.qr_code_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends qr_code_logsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, qr_code_logsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'qr_code_logs'> extends True ? Prisma__qr_code_logsClient<qr_code_logsGetPayload<T>> : Prisma__qr_code_logsClient<qr_code_logsGetPayload<T> | null, null>

    /**
     * Find one Qr_code_logs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {qr_code_logsFindUniqueOrThrowArgs} args - Arguments to find a Qr_code_logs
     * @example
     * // Get one Qr_code_logs
     * const qr_code_logs = await prisma.qr_code_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends qr_code_logsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, qr_code_logsFindUniqueOrThrowArgs>
    ): Prisma__qr_code_logsClient<qr_code_logsGetPayload<T>>

    /**
     * Find the first Qr_code_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qr_code_logsFindFirstArgs} args - Arguments to find a Qr_code_logs
     * @example
     * // Get one Qr_code_logs
     * const qr_code_logs = await prisma.qr_code_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends qr_code_logsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, qr_code_logsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'qr_code_logs'> extends True ? Prisma__qr_code_logsClient<qr_code_logsGetPayload<T>> : Prisma__qr_code_logsClient<qr_code_logsGetPayload<T> | null, null>

    /**
     * Find the first Qr_code_logs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qr_code_logsFindFirstOrThrowArgs} args - Arguments to find a Qr_code_logs
     * @example
     * // Get one Qr_code_logs
     * const qr_code_logs = await prisma.qr_code_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends qr_code_logsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, qr_code_logsFindFirstOrThrowArgs>
    ): Prisma__qr_code_logsClient<qr_code_logsGetPayload<T>>

    /**
     * Find zero or more Qr_code_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qr_code_logsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qr_code_logs
     * const qr_code_logs = await prisma.qr_code_logs.findMany()
     * 
     * // Get first 10 Qr_code_logs
     * const qr_code_logs = await prisma.qr_code_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qr_code_logsWithIdOnly = await prisma.qr_code_logs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends qr_code_logsFindManyArgs>(
      args?: SelectSubset<T, qr_code_logsFindManyArgs>
    ): Prisma.PrismaPromise<Array<qr_code_logsGetPayload<T>>>

    /**
     * Create a Qr_code_logs.
     * @param {qr_code_logsCreateArgs} args - Arguments to create a Qr_code_logs.
     * @example
     * // Create one Qr_code_logs
     * const Qr_code_logs = await prisma.qr_code_logs.create({
     *   data: {
     *     // ... data to create a Qr_code_logs
     *   }
     * })
     * 
    **/
    create<T extends qr_code_logsCreateArgs>(
      args: SelectSubset<T, qr_code_logsCreateArgs>
    ): Prisma__qr_code_logsClient<qr_code_logsGetPayload<T>>

    /**
     * Create many Qr_code_logs.
     *     @param {qr_code_logsCreateManyArgs} args - Arguments to create many Qr_code_logs.
     *     @example
     *     // Create many Qr_code_logs
     *     const qr_code_logs = await prisma.qr_code_logs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends qr_code_logsCreateManyArgs>(
      args?: SelectSubset<T, qr_code_logsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Qr_code_logs.
     * @param {qr_code_logsDeleteArgs} args - Arguments to delete one Qr_code_logs.
     * @example
     * // Delete one Qr_code_logs
     * const Qr_code_logs = await prisma.qr_code_logs.delete({
     *   where: {
     *     // ... filter to delete one Qr_code_logs
     *   }
     * })
     * 
    **/
    delete<T extends qr_code_logsDeleteArgs>(
      args: SelectSubset<T, qr_code_logsDeleteArgs>
    ): Prisma__qr_code_logsClient<qr_code_logsGetPayload<T>>

    /**
     * Update one Qr_code_logs.
     * @param {qr_code_logsUpdateArgs} args - Arguments to update one Qr_code_logs.
     * @example
     * // Update one Qr_code_logs
     * const qr_code_logs = await prisma.qr_code_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends qr_code_logsUpdateArgs>(
      args: SelectSubset<T, qr_code_logsUpdateArgs>
    ): Prisma__qr_code_logsClient<qr_code_logsGetPayload<T>>

    /**
     * Delete zero or more Qr_code_logs.
     * @param {qr_code_logsDeleteManyArgs} args - Arguments to filter Qr_code_logs to delete.
     * @example
     * // Delete a few Qr_code_logs
     * const { count } = await prisma.qr_code_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends qr_code_logsDeleteManyArgs>(
      args?: SelectSubset<T, qr_code_logsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qr_code_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qr_code_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qr_code_logs
     * const qr_code_logs = await prisma.qr_code_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends qr_code_logsUpdateManyArgs>(
      args: SelectSubset<T, qr_code_logsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Qr_code_logs.
     * @param {qr_code_logsUpsertArgs} args - Arguments to update or create a Qr_code_logs.
     * @example
     * // Update or create a Qr_code_logs
     * const qr_code_logs = await prisma.qr_code_logs.upsert({
     *   create: {
     *     // ... data to create a Qr_code_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qr_code_logs we want to update
     *   }
     * })
    **/
    upsert<T extends qr_code_logsUpsertArgs>(
      args: SelectSubset<T, qr_code_logsUpsertArgs>
    ): Prisma__qr_code_logsClient<qr_code_logsGetPayload<T>>

    /**
     * Find zero or more Qr_code_logs that matches the filter.
     * @param {qr_code_logsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const qr_code_logs = await prisma.qr_code_logs.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: qr_code_logsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Qr_code_logs.
     * @param {qr_code_logsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const qr_code_logs = await prisma.qr_code_logs.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: qr_code_logsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Qr_code_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {qr_code_logsCountArgs} args - Arguments to filter Qr_code_logs to count.
     * @example
     * // Count the number of Qr_code_logs
     * const count = await prisma.qr_code_logs.count({
     *   where: {
     *     // ... the filter for the Qr_code_logs we want to count
     *   }
     * })
    **/
    count<T extends qr_code_logsCountArgs>(
      args?: Subset<T, qr_code_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Qr_code_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qr_code_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Qr_code_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Qr_code_logsAggregateArgs>(args: Subset<T, Qr_code_logsAggregateArgs>): Prisma.PrismaPromise<GetQr_code_logsAggregateType<T>>

    /**
     * Group by Qr_code_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Qr_code_logsGroupByArgs} args - Group by arguments.
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
      T extends Qr_code_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Qr_code_logsGroupByArgs['orderBy'] }
        : { orderBy?: Qr_code_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Qr_code_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQr_code_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for qr_code_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__qr_code_logsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * qr_code_logs base type for findUnique actions
   */
  export type qr_code_logsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the qr_code_logs
     */
    select?: qr_code_logsSelect | null
    /**
     * Filter, which qr_code_logs to fetch.
     */
    where: qr_code_logsWhereUniqueInput
  }

  /**
   * qr_code_logs findUnique
   */
  export interface qr_code_logsFindUniqueArgs extends qr_code_logsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * qr_code_logs findUniqueOrThrow
   */
  export type qr_code_logsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the qr_code_logs
     */
    select?: qr_code_logsSelect | null
    /**
     * Filter, which qr_code_logs to fetch.
     */
    where: qr_code_logsWhereUniqueInput
  }


  /**
   * qr_code_logs base type for findFirst actions
   */
  export type qr_code_logsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the qr_code_logs
     */
    select?: qr_code_logsSelect | null
    /**
     * Filter, which qr_code_logs to fetch.
     */
    where?: qr_code_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qr_code_logs to fetch.
     */
    orderBy?: Enumerable<qr_code_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qr_code_logs.
     */
    cursor?: qr_code_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qr_code_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qr_code_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qr_code_logs.
     */
    distinct?: Enumerable<Qr_code_logsScalarFieldEnum>
  }

  /**
   * qr_code_logs findFirst
   */
  export interface qr_code_logsFindFirstArgs extends qr_code_logsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * qr_code_logs findFirstOrThrow
   */
  export type qr_code_logsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the qr_code_logs
     */
    select?: qr_code_logsSelect | null
    /**
     * Filter, which qr_code_logs to fetch.
     */
    where?: qr_code_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qr_code_logs to fetch.
     */
    orderBy?: Enumerable<qr_code_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for qr_code_logs.
     */
    cursor?: qr_code_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qr_code_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qr_code_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of qr_code_logs.
     */
    distinct?: Enumerable<Qr_code_logsScalarFieldEnum>
  }


  /**
   * qr_code_logs findMany
   */
  export type qr_code_logsFindManyArgs = {
    /**
     * Select specific fields to fetch from the qr_code_logs
     */
    select?: qr_code_logsSelect | null
    /**
     * Filter, which qr_code_logs to fetch.
     */
    where?: qr_code_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of qr_code_logs to fetch.
     */
    orderBy?: Enumerable<qr_code_logsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing qr_code_logs.
     */
    cursor?: qr_code_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` qr_code_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` qr_code_logs.
     */
    skip?: number
    distinct?: Enumerable<Qr_code_logsScalarFieldEnum>
  }


  /**
   * qr_code_logs create
   */
  export type qr_code_logsCreateArgs = {
    /**
     * Select specific fields to fetch from the qr_code_logs
     */
    select?: qr_code_logsSelect | null
    /**
     * The data needed to create a qr_code_logs.
     */
    data: XOR<qr_code_logsCreateInput, qr_code_logsUncheckedCreateInput>
  }


  /**
   * qr_code_logs createMany
   */
  export type qr_code_logsCreateManyArgs = {
    /**
     * The data used to create many qr_code_logs.
     */
    data: Enumerable<qr_code_logsCreateManyInput>
  }


  /**
   * qr_code_logs update
   */
  export type qr_code_logsUpdateArgs = {
    /**
     * Select specific fields to fetch from the qr_code_logs
     */
    select?: qr_code_logsSelect | null
    /**
     * The data needed to update a qr_code_logs.
     */
    data: XOR<qr_code_logsUpdateInput, qr_code_logsUncheckedUpdateInput>
    /**
     * Choose, which qr_code_logs to update.
     */
    where: qr_code_logsWhereUniqueInput
  }


  /**
   * qr_code_logs updateMany
   */
  export type qr_code_logsUpdateManyArgs = {
    /**
     * The data used to update qr_code_logs.
     */
    data: XOR<qr_code_logsUpdateManyMutationInput, qr_code_logsUncheckedUpdateManyInput>
    /**
     * Filter which qr_code_logs to update
     */
    where?: qr_code_logsWhereInput
  }


  /**
   * qr_code_logs upsert
   */
  export type qr_code_logsUpsertArgs = {
    /**
     * Select specific fields to fetch from the qr_code_logs
     */
    select?: qr_code_logsSelect | null
    /**
     * The filter to search for the qr_code_logs to update in case it exists.
     */
    where: qr_code_logsWhereUniqueInput
    /**
     * In case the qr_code_logs found by the `where` argument doesn't exist, create a new qr_code_logs with this data.
     */
    create: XOR<qr_code_logsCreateInput, qr_code_logsUncheckedCreateInput>
    /**
     * In case the qr_code_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<qr_code_logsUpdateInput, qr_code_logsUncheckedUpdateInput>
  }


  /**
   * qr_code_logs delete
   */
  export type qr_code_logsDeleteArgs = {
    /**
     * Select specific fields to fetch from the qr_code_logs
     */
    select?: qr_code_logsSelect | null
    /**
     * Filter which qr_code_logs to delete.
     */
    where: qr_code_logsWhereUniqueInput
  }


  /**
   * qr_code_logs deleteMany
   */
  export type qr_code_logsDeleteManyArgs = {
    /**
     * Filter which qr_code_logs to delete
     */
    where?: qr_code_logsWhereInput
  }


  /**
   * qr_code_logs findRaw
   */
  export type qr_code_logsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * qr_code_logs aggregateRaw
   */
  export type qr_code_logsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * qr_code_logs without action
   */
  export type qr_code_logsArgs = {
    /**
     * Select specific fields to fetch from the qr_code_logs
     */
    select?: qr_code_logsSelect | null
  }



  /**
   * Model calendlyInviteePayloads
   */


  export type AggregateCalendlyInviteePayloads = {
    _count: CalendlyInviteePayloadsCountAggregateOutputType | null
    _min: CalendlyInviteePayloadsMinAggregateOutputType | null
    _max: CalendlyInviteePayloadsMaxAggregateOutputType | null
  }

  export type CalendlyInviteePayloadsMinAggregateOutputType = {
    id: string | null
    cancel_url: string | null
    created_at: Date | null
    email: string | null
    event: string | null
    first_name: string | null
    last_name: string | null
    name: string | null
    new_invitee: string | null
    old_invitee: string | null
    reschedule_url: string | null
    rescheduled: boolean | null
    routing_form_submission: string | null
    status: string | null
    text_reminder_number: string | null
    timezone: string | null
    updated_at: Date | null
    uri: string | null
    clientId: string | null
  }

  export type CalendlyInviteePayloadsMaxAggregateOutputType = {
    id: string | null
    cancel_url: string | null
    created_at: Date | null
    email: string | null
    event: string | null
    first_name: string | null
    last_name: string | null
    name: string | null
    new_invitee: string | null
    old_invitee: string | null
    reschedule_url: string | null
    rescheduled: boolean | null
    routing_form_submission: string | null
    status: string | null
    text_reminder_number: string | null
    timezone: string | null
    updated_at: Date | null
    uri: string | null
    clientId: string | null
  }

  export type CalendlyInviteePayloadsCountAggregateOutputType = {
    id: number
    cancel_url: number
    created_at: number
    email: number
    event: number
    first_name: number
    last_name: number
    name: number
    new_invitee: number
    old_invitee: number
    reschedule_url: number
    rescheduled: number
    routing_form_submission: number
    status: number
    text_reminder_number: number
    timezone: number
    updated_at: number
    uri: number
    clientId: number
    _all: number
  }


  export type CalendlyInviteePayloadsMinAggregateInputType = {
    id?: true
    cancel_url?: true
    created_at?: true
    email?: true
    event?: true
    first_name?: true
    last_name?: true
    name?: true
    new_invitee?: true
    old_invitee?: true
    reschedule_url?: true
    rescheduled?: true
    routing_form_submission?: true
    status?: true
    text_reminder_number?: true
    timezone?: true
    updated_at?: true
    uri?: true
    clientId?: true
  }

  export type CalendlyInviteePayloadsMaxAggregateInputType = {
    id?: true
    cancel_url?: true
    created_at?: true
    email?: true
    event?: true
    first_name?: true
    last_name?: true
    name?: true
    new_invitee?: true
    old_invitee?: true
    reschedule_url?: true
    rescheduled?: true
    routing_form_submission?: true
    status?: true
    text_reminder_number?: true
    timezone?: true
    updated_at?: true
    uri?: true
    clientId?: true
  }

  export type CalendlyInviteePayloadsCountAggregateInputType = {
    id?: true
    cancel_url?: true
    created_at?: true
    email?: true
    event?: true
    first_name?: true
    last_name?: true
    name?: true
    new_invitee?: true
    old_invitee?: true
    reschedule_url?: true
    rescheduled?: true
    routing_form_submission?: true
    status?: true
    text_reminder_number?: true
    timezone?: true
    updated_at?: true
    uri?: true
    clientId?: true
    _all?: true
  }

  export type CalendlyInviteePayloadsAggregateArgs = {
    /**
     * Filter which calendlyInviteePayloads to aggregate.
     */
    where?: calendlyInviteePayloadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendlyInviteePayloads to fetch.
     */
    orderBy?: Enumerable<calendlyInviteePayloadsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: calendlyInviteePayloadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendlyInviteePayloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendlyInviteePayloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned calendlyInviteePayloads
    **/
    _count?: true | CalendlyInviteePayloadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendlyInviteePayloadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendlyInviteePayloadsMaxAggregateInputType
  }

  export type GetCalendlyInviteePayloadsAggregateType<T extends CalendlyInviteePayloadsAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendlyInviteePayloads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendlyInviteePayloads[P]>
      : GetScalarType<T[P], AggregateCalendlyInviteePayloads[P]>
  }




  export type CalendlyInviteePayloadsGroupByArgs = {
    where?: calendlyInviteePayloadsWhereInput
    orderBy?: Enumerable<calendlyInviteePayloadsOrderByWithAggregationInput>
    by: CalendlyInviteePayloadsScalarFieldEnum[]
    having?: calendlyInviteePayloadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendlyInviteePayloadsCountAggregateInputType | true
    _min?: CalendlyInviteePayloadsMinAggregateInputType
    _max?: CalendlyInviteePayloadsMaxAggregateInputType
  }


  export type CalendlyInviteePayloadsGroupByOutputType = {
    id: string
    cancel_url: string
    created_at: Date
    email: string
    event: string
    first_name: string | null
    last_name: string | null
    name: string
    new_invitee: string | null
    old_invitee: string | null
    reschedule_url: string
    rescheduled: boolean
    routing_form_submission: string | null
    status: string
    text_reminder_number: string | null
    timezone: string
    updated_at: Date
    uri: string
    clientId: string | null
    _count: CalendlyInviteePayloadsCountAggregateOutputType | null
    _min: CalendlyInviteePayloadsMinAggregateOutputType | null
    _max: CalendlyInviteePayloadsMaxAggregateOutputType | null
  }

  type GetCalendlyInviteePayloadsGroupByPayload<T extends CalendlyInviteePayloadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CalendlyInviteePayloadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendlyInviteePayloadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendlyInviteePayloadsGroupByOutputType[P]>
            : GetScalarType<T[P], CalendlyInviteePayloadsGroupByOutputType[P]>
        }
      >
    >


  export type calendlyInviteePayloadsSelect = {
    id?: boolean
    cancel_url?: boolean
    cancellation?: boolean | CalendlyInviteePayloadsResourceCancellationArgs
    created_at?: boolean
    email?: boolean
    event?: boolean
    first_name?: boolean
    last_name?: boolean
    name?: boolean
    new_invitee?: boolean
    no_show?: boolean | NoShowArgs
    old_invitee?: boolean
    payment?: boolean | PaymentArgs
    questions_and_answers?: boolean | CalendlyInviteePayloadsResourceQuestionsAndAnswersArgs
    reconfirmation?: boolean | ReconfirmationArgs
    reschedule_url?: boolean
    rescheduled?: boolean
    routing_form_submission?: boolean
    status?: boolean
    text_reminder_number?: boolean
    timezone?: boolean
    tracking?: boolean | CalendlyInviteePayloadsResourceTrackingArgs
    updated_at?: boolean
    uri?: boolean
    clientId?: boolean
    client?: boolean | clientsArgs
  }


  export type calendlyInviteePayloadsInclude = {
    client?: boolean | clientsArgs
  }

  export type calendlyInviteePayloadsGetPayload<S extends boolean | null | undefined | calendlyInviteePayloadsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? calendlyInviteePayloads :
    S extends undefined ? never :
    S extends { include: any } & (calendlyInviteePayloadsArgs | calendlyInviteePayloadsFindManyArgs)
    ? calendlyInviteePayloads  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'client' ? clientsGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (calendlyInviteePayloadsArgs | calendlyInviteePayloadsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cancellation' ? CalendlyInviteePayloadsResourceCancellationGetPayload<S['select'][P]> | null :
        P extends 'no_show' ? NoShowGetPayload<S['select'][P]> | null :
        P extends 'payment' ? PaymentGetPayload<S['select'][P]> | null :
        P extends 'questions_and_answers' ? Array < CalendlyInviteePayloadsResourceQuestionsAndAnswersGetPayload<S['select'][P]>>  :
        P extends 'reconfirmation' ? ReconfirmationGetPayload<S['select'][P]> | null :
        P extends 'tracking' ? CalendlyInviteePayloadsResourceTrackingGetPayload<S['select'][P]> :
        P extends 'client' ? clientsGetPayload<S['select'][P]> | null :  P extends keyof calendlyInviteePayloads ? calendlyInviteePayloads[P] : never
  } 
      : calendlyInviteePayloads


  type calendlyInviteePayloadsCountArgs = 
    Omit<calendlyInviteePayloadsFindManyArgs, 'select' | 'include'> & {
      select?: CalendlyInviteePayloadsCountAggregateInputType | true
    }

  export interface calendlyInviteePayloadsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CalendlyInviteePayloads that matches the filter.
     * @param {calendlyInviteePayloadsFindUniqueArgs} args - Arguments to find a CalendlyInviteePayloads
     * @example
     * // Get one CalendlyInviteePayloads
     * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends calendlyInviteePayloadsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, calendlyInviteePayloadsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'calendlyInviteePayloads'> extends True ? Prisma__calendlyInviteePayloadsClient<calendlyInviteePayloadsGetPayload<T>> : Prisma__calendlyInviteePayloadsClient<calendlyInviteePayloadsGetPayload<T> | null, null>

    /**
     * Find one CalendlyInviteePayloads that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {calendlyInviteePayloadsFindUniqueOrThrowArgs} args - Arguments to find a CalendlyInviteePayloads
     * @example
     * // Get one CalendlyInviteePayloads
     * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends calendlyInviteePayloadsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, calendlyInviteePayloadsFindUniqueOrThrowArgs>
    ): Prisma__calendlyInviteePayloadsClient<calendlyInviteePayloadsGetPayload<T>>

    /**
     * Find the first CalendlyInviteePayloads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendlyInviteePayloadsFindFirstArgs} args - Arguments to find a CalendlyInviteePayloads
     * @example
     * // Get one CalendlyInviteePayloads
     * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends calendlyInviteePayloadsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, calendlyInviteePayloadsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'calendlyInviteePayloads'> extends True ? Prisma__calendlyInviteePayloadsClient<calendlyInviteePayloadsGetPayload<T>> : Prisma__calendlyInviteePayloadsClient<calendlyInviteePayloadsGetPayload<T> | null, null>

    /**
     * Find the first CalendlyInviteePayloads that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendlyInviteePayloadsFindFirstOrThrowArgs} args - Arguments to find a CalendlyInviteePayloads
     * @example
     * // Get one CalendlyInviteePayloads
     * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends calendlyInviteePayloadsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, calendlyInviteePayloadsFindFirstOrThrowArgs>
    ): Prisma__calendlyInviteePayloadsClient<calendlyInviteePayloadsGetPayload<T>>

    /**
     * Find zero or more CalendlyInviteePayloads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendlyInviteePayloadsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalendlyInviteePayloads
     * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.findMany()
     * 
     * // Get first 10 CalendlyInviteePayloads
     * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendlyInviteePayloadsWithIdOnly = await prisma.calendlyInviteePayloads.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends calendlyInviteePayloadsFindManyArgs>(
      args?: SelectSubset<T, calendlyInviteePayloadsFindManyArgs>
    ): Prisma.PrismaPromise<Array<calendlyInviteePayloadsGetPayload<T>>>

    /**
     * Create a CalendlyInviteePayloads.
     * @param {calendlyInviteePayloadsCreateArgs} args - Arguments to create a CalendlyInviteePayloads.
     * @example
     * // Create one CalendlyInviteePayloads
     * const CalendlyInviteePayloads = await prisma.calendlyInviteePayloads.create({
     *   data: {
     *     // ... data to create a CalendlyInviteePayloads
     *   }
     * })
     * 
    **/
    create<T extends calendlyInviteePayloadsCreateArgs>(
      args: SelectSubset<T, calendlyInviteePayloadsCreateArgs>
    ): Prisma__calendlyInviteePayloadsClient<calendlyInviteePayloadsGetPayload<T>>

    /**
     * Create many CalendlyInviteePayloads.
     *     @param {calendlyInviteePayloadsCreateManyArgs} args - Arguments to create many CalendlyInviteePayloads.
     *     @example
     *     // Create many CalendlyInviteePayloads
     *     const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends calendlyInviteePayloadsCreateManyArgs>(
      args?: SelectSubset<T, calendlyInviteePayloadsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CalendlyInviteePayloads.
     * @param {calendlyInviteePayloadsDeleteArgs} args - Arguments to delete one CalendlyInviteePayloads.
     * @example
     * // Delete one CalendlyInviteePayloads
     * const CalendlyInviteePayloads = await prisma.calendlyInviteePayloads.delete({
     *   where: {
     *     // ... filter to delete one CalendlyInviteePayloads
     *   }
     * })
     * 
    **/
    delete<T extends calendlyInviteePayloadsDeleteArgs>(
      args: SelectSubset<T, calendlyInviteePayloadsDeleteArgs>
    ): Prisma__calendlyInviteePayloadsClient<calendlyInviteePayloadsGetPayload<T>>

    /**
     * Update one CalendlyInviteePayloads.
     * @param {calendlyInviteePayloadsUpdateArgs} args - Arguments to update one CalendlyInviteePayloads.
     * @example
     * // Update one CalendlyInviteePayloads
     * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends calendlyInviteePayloadsUpdateArgs>(
      args: SelectSubset<T, calendlyInviteePayloadsUpdateArgs>
    ): Prisma__calendlyInviteePayloadsClient<calendlyInviteePayloadsGetPayload<T>>

    /**
     * Delete zero or more CalendlyInviteePayloads.
     * @param {calendlyInviteePayloadsDeleteManyArgs} args - Arguments to filter CalendlyInviteePayloads to delete.
     * @example
     * // Delete a few CalendlyInviteePayloads
     * const { count } = await prisma.calendlyInviteePayloads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends calendlyInviteePayloadsDeleteManyArgs>(
      args?: SelectSubset<T, calendlyInviteePayloadsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendlyInviteePayloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendlyInviteePayloadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalendlyInviteePayloads
     * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends calendlyInviteePayloadsUpdateManyArgs>(
      args: SelectSubset<T, calendlyInviteePayloadsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CalendlyInviteePayloads.
     * @param {calendlyInviteePayloadsUpsertArgs} args - Arguments to update or create a CalendlyInviteePayloads.
     * @example
     * // Update or create a CalendlyInviteePayloads
     * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.upsert({
     *   create: {
     *     // ... data to create a CalendlyInviteePayloads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalendlyInviteePayloads we want to update
     *   }
     * })
    **/
    upsert<T extends calendlyInviteePayloadsUpsertArgs>(
      args: SelectSubset<T, calendlyInviteePayloadsUpsertArgs>
    ): Prisma__calendlyInviteePayloadsClient<calendlyInviteePayloadsGetPayload<T>>

    /**
     * Find zero or more CalendlyInviteePayloads that matches the filter.
     * @param {calendlyInviteePayloadsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: calendlyInviteePayloadsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CalendlyInviteePayloads.
     * @param {calendlyInviteePayloadsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const calendlyInviteePayloads = await prisma.calendlyInviteePayloads.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: calendlyInviteePayloadsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of CalendlyInviteePayloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendlyInviteePayloadsCountArgs} args - Arguments to filter CalendlyInviteePayloads to count.
     * @example
     * // Count the number of CalendlyInviteePayloads
     * const count = await prisma.calendlyInviteePayloads.count({
     *   where: {
     *     // ... the filter for the CalendlyInviteePayloads we want to count
     *   }
     * })
    **/
    count<T extends calendlyInviteePayloadsCountArgs>(
      args?: Subset<T, calendlyInviteePayloadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendlyInviteePayloadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalendlyInviteePayloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendlyInviteePayloadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalendlyInviteePayloadsAggregateArgs>(args: Subset<T, CalendlyInviteePayloadsAggregateArgs>): Prisma.PrismaPromise<GetCalendlyInviteePayloadsAggregateType<T>>

    /**
     * Group by CalendlyInviteePayloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendlyInviteePayloadsGroupByArgs} args - Group by arguments.
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
      T extends CalendlyInviteePayloadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendlyInviteePayloadsGroupByArgs['orderBy'] }
        : { orderBy?: CalendlyInviteePayloadsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalendlyInviteePayloadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendlyInviteePayloadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for calendlyInviteePayloads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__calendlyInviteePayloadsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    cancellation<T extends CalendlyInviteePayloadsResourceCancellationArgs= {}>(args?: Subset<T, CalendlyInviteePayloadsResourceCancellationArgs>): Prisma__CalendlyInviteePayloadsResourceCancellationClient<CalendlyInviteePayloadsResourceCancellationGetPayload<T> | Null>;

    no_show<T extends NoShowArgs= {}>(args?: Subset<T, NoShowArgs>): Prisma__NoShowClient<NoShowGetPayload<T> | Null>;

    payment<T extends PaymentArgs= {}>(args?: Subset<T, PaymentArgs>): Prisma__PaymentClient<PaymentGetPayload<T> | Null>;

    questions_and_answers<T extends CalendlyInviteePayloadsResourceQuestionsAndAnswersArgs= {}>(args?: Subset<T, CalendlyInviteePayloadsResourceQuestionsAndAnswersArgs>): Prisma.PrismaPromise<Array<CalendlyInviteePayloadsResourceQuestionsAndAnswersGetPayload<T>>| Null>;

    reconfirmation<T extends ReconfirmationArgs= {}>(args?: Subset<T, ReconfirmationArgs>): Prisma__ReconfirmationClient<ReconfirmationGetPayload<T> | Null>;

    tracking<T extends CalendlyInviteePayloadsResourceTrackingArgs= {}>(args?: Subset<T, CalendlyInviteePayloadsResourceTrackingArgs>): Prisma__CalendlyInviteePayloadsResourceTrackingClient<CalendlyInviteePayloadsResourceTrackingGetPayload<T> | Null>;

    client<T extends clientsArgs= {}>(args?: Subset<T, clientsArgs>): Prisma__clientsClient<clientsGetPayload<T> | Null>;

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
   * calendlyInviteePayloads base type for findUnique actions
   */
  export type calendlyInviteePayloadsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the calendlyInviteePayloads
     */
    select?: calendlyInviteePayloadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calendlyInviteePayloadsInclude | null
    /**
     * Filter, which calendlyInviteePayloads to fetch.
     */
    where: calendlyInviteePayloadsWhereUniqueInput
  }

  /**
   * calendlyInviteePayloads findUnique
   */
  export interface calendlyInviteePayloadsFindUniqueArgs extends calendlyInviteePayloadsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * calendlyInviteePayloads findUniqueOrThrow
   */
  export type calendlyInviteePayloadsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the calendlyInviteePayloads
     */
    select?: calendlyInviteePayloadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calendlyInviteePayloadsInclude | null
    /**
     * Filter, which calendlyInviteePayloads to fetch.
     */
    where: calendlyInviteePayloadsWhereUniqueInput
  }


  /**
   * calendlyInviteePayloads base type for findFirst actions
   */
  export type calendlyInviteePayloadsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the calendlyInviteePayloads
     */
    select?: calendlyInviteePayloadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calendlyInviteePayloadsInclude | null
    /**
     * Filter, which calendlyInviteePayloads to fetch.
     */
    where?: calendlyInviteePayloadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendlyInviteePayloads to fetch.
     */
    orderBy?: Enumerable<calendlyInviteePayloadsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calendlyInviteePayloads.
     */
    cursor?: calendlyInviteePayloadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendlyInviteePayloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendlyInviteePayloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calendlyInviteePayloads.
     */
    distinct?: Enumerable<CalendlyInviteePayloadsScalarFieldEnum>
  }

  /**
   * calendlyInviteePayloads findFirst
   */
  export interface calendlyInviteePayloadsFindFirstArgs extends calendlyInviteePayloadsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * calendlyInviteePayloads findFirstOrThrow
   */
  export type calendlyInviteePayloadsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the calendlyInviteePayloads
     */
    select?: calendlyInviteePayloadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calendlyInviteePayloadsInclude | null
    /**
     * Filter, which calendlyInviteePayloads to fetch.
     */
    where?: calendlyInviteePayloadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendlyInviteePayloads to fetch.
     */
    orderBy?: Enumerable<calendlyInviteePayloadsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calendlyInviteePayloads.
     */
    cursor?: calendlyInviteePayloadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendlyInviteePayloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendlyInviteePayloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calendlyInviteePayloads.
     */
    distinct?: Enumerable<CalendlyInviteePayloadsScalarFieldEnum>
  }


  /**
   * calendlyInviteePayloads findMany
   */
  export type calendlyInviteePayloadsFindManyArgs = {
    /**
     * Select specific fields to fetch from the calendlyInviteePayloads
     */
    select?: calendlyInviteePayloadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calendlyInviteePayloadsInclude | null
    /**
     * Filter, which calendlyInviteePayloads to fetch.
     */
    where?: calendlyInviteePayloadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendlyInviteePayloads to fetch.
     */
    orderBy?: Enumerable<calendlyInviteePayloadsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing calendlyInviteePayloads.
     */
    cursor?: calendlyInviteePayloadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendlyInviteePayloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendlyInviteePayloads.
     */
    skip?: number
    distinct?: Enumerable<CalendlyInviteePayloadsScalarFieldEnum>
  }


  /**
   * calendlyInviteePayloads create
   */
  export type calendlyInviteePayloadsCreateArgs = {
    /**
     * Select specific fields to fetch from the calendlyInviteePayloads
     */
    select?: calendlyInviteePayloadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calendlyInviteePayloadsInclude | null
    /**
     * The data needed to create a calendlyInviteePayloads.
     */
    data: XOR<calendlyInviteePayloadsCreateInput, calendlyInviteePayloadsUncheckedCreateInput>
  }


  /**
   * calendlyInviteePayloads createMany
   */
  export type calendlyInviteePayloadsCreateManyArgs = {
    /**
     * The data used to create many calendlyInviteePayloads.
     */
    data: Enumerable<calendlyInviteePayloadsCreateManyInput>
  }


  /**
   * calendlyInviteePayloads update
   */
  export type calendlyInviteePayloadsUpdateArgs = {
    /**
     * Select specific fields to fetch from the calendlyInviteePayloads
     */
    select?: calendlyInviteePayloadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calendlyInviteePayloadsInclude | null
    /**
     * The data needed to update a calendlyInviteePayloads.
     */
    data: XOR<calendlyInviteePayloadsUpdateInput, calendlyInviteePayloadsUncheckedUpdateInput>
    /**
     * Choose, which calendlyInviteePayloads to update.
     */
    where: calendlyInviteePayloadsWhereUniqueInput
  }


  /**
   * calendlyInviteePayloads updateMany
   */
  export type calendlyInviteePayloadsUpdateManyArgs = {
    /**
     * The data used to update calendlyInviteePayloads.
     */
    data: XOR<calendlyInviteePayloadsUpdateManyMutationInput, calendlyInviteePayloadsUncheckedUpdateManyInput>
    /**
     * Filter which calendlyInviteePayloads to update
     */
    where?: calendlyInviteePayloadsWhereInput
  }


  /**
   * calendlyInviteePayloads upsert
   */
  export type calendlyInviteePayloadsUpsertArgs = {
    /**
     * Select specific fields to fetch from the calendlyInviteePayloads
     */
    select?: calendlyInviteePayloadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calendlyInviteePayloadsInclude | null
    /**
     * The filter to search for the calendlyInviteePayloads to update in case it exists.
     */
    where: calendlyInviteePayloadsWhereUniqueInput
    /**
     * In case the calendlyInviteePayloads found by the `where` argument doesn't exist, create a new calendlyInviteePayloads with this data.
     */
    create: XOR<calendlyInviteePayloadsCreateInput, calendlyInviteePayloadsUncheckedCreateInput>
    /**
     * In case the calendlyInviteePayloads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<calendlyInviteePayloadsUpdateInput, calendlyInviteePayloadsUncheckedUpdateInput>
  }


  /**
   * calendlyInviteePayloads delete
   */
  export type calendlyInviteePayloadsDeleteArgs = {
    /**
     * Select specific fields to fetch from the calendlyInviteePayloads
     */
    select?: calendlyInviteePayloadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calendlyInviteePayloadsInclude | null
    /**
     * Filter which calendlyInviteePayloads to delete.
     */
    where: calendlyInviteePayloadsWhereUniqueInput
  }


  /**
   * calendlyInviteePayloads deleteMany
   */
  export type calendlyInviteePayloadsDeleteManyArgs = {
    /**
     * Filter which calendlyInviteePayloads to delete
     */
    where?: calendlyInviteePayloadsWhereInput
  }


  /**
   * calendlyInviteePayloads findRaw
   */
  export type calendlyInviteePayloadsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * calendlyInviteePayloads aggregateRaw
   */
  export type calendlyInviteePayloadsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * calendlyInviteePayloads without action
   */
  export type calendlyInviteePayloadsArgs = {
    /**
     * Select specific fields to fetch from the calendlyInviteePayloads
     */
    select?: calendlyInviteePayloadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calendlyInviteePayloadsInclude | null
  }



  /**
   * Model clients
   */


  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsAvgAggregateOutputType = {
    lessonsRemaining: number | null
    refundedVolume: number | null
    totalLessons: number | null
    totalSpend: number | null
  }

  export type ClientsSumAggregateOutputType = {
    lessonsRemaining: number | null
    refundedVolume: number | null
    totalLessons: number | null
    totalSpend: number | null
  }

  export type ClientsMinAggregateOutputType = {
    id: string | null
    activeMember: boolean | null
    archived: boolean | null
    email: string | null
    dateJoined: Date | null
    firstLesson: Date | null
    lastLesson: Date | null
    nextLesson: Date | null
    lessonsRemaining: number | null
    name: string | null
    notes: string | null
    preferredLessonFormat: string | null
    pronouns: string | null
    refundedVolume: number | null
    totalLessons: number | null
    totalSpend: number | null
    stripe_customer_id: string | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: string | null
    activeMember: boolean | null
    archived: boolean | null
    email: string | null
    dateJoined: Date | null
    firstLesson: Date | null
    lastLesson: Date | null
    nextLesson: Date | null
    lessonsRemaining: number | null
    name: string | null
    notes: string | null
    preferredLessonFormat: string | null
    pronouns: string | null
    refundedVolume: number | null
    totalLessons: number | null
    totalSpend: number | null
    stripe_customer_id: string | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    activeMember: number
    archived: number
    email: number
    dateJoined: number
    firstLesson: number
    lastLesson: number
    nextLesson: number
    lessonsRemaining: number
    name: number
    notes: number
    preferredLessonFormat: number
    pronouns: number
    refundedVolume: number
    totalLessons: number
    totalSpend: number
    stripe_customer_id: number
    _all: number
  }


  export type ClientsAvgAggregateInputType = {
    lessonsRemaining?: true
    refundedVolume?: true
    totalLessons?: true
    totalSpend?: true
  }

  export type ClientsSumAggregateInputType = {
    lessonsRemaining?: true
    refundedVolume?: true
    totalLessons?: true
    totalSpend?: true
  }

  export type ClientsMinAggregateInputType = {
    id?: true
    activeMember?: true
    archived?: true
    email?: true
    dateJoined?: true
    firstLesson?: true
    lastLesson?: true
    nextLesson?: true
    lessonsRemaining?: true
    name?: true
    notes?: true
    preferredLessonFormat?: true
    pronouns?: true
    refundedVolume?: true
    totalLessons?: true
    totalSpend?: true
    stripe_customer_id?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    activeMember?: true
    archived?: true
    email?: true
    dateJoined?: true
    firstLesson?: true
    lastLesson?: true
    nextLesson?: true
    lessonsRemaining?: true
    name?: true
    notes?: true
    preferredLessonFormat?: true
    pronouns?: true
    refundedVolume?: true
    totalLessons?: true
    totalSpend?: true
    stripe_customer_id?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    activeMember?: true
    archived?: true
    email?: true
    dateJoined?: true
    firstLesson?: true
    lastLesson?: true
    nextLesson?: true
    lessonsRemaining?: true
    name?: true
    notes?: true
    preferredLessonFormat?: true
    pronouns?: true
    refundedVolume?: true
    totalLessons?: true
    totalSpend?: true
    stripe_customer_id?: true
    _all?: true
  }

  export type ClientsAggregateArgs = {
    /**
     * Filter which clients to aggregate.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: Enumerable<clientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type ClientsGroupByArgs = {
    where?: clientsWhereInput
    orderBy?: Enumerable<clientsOrderByWithAggregationInput>
    by: ClientsScalarFieldEnum[]
    having?: clientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _avg?: ClientsAvgAggregateInputType
    _sum?: ClientsSumAggregateInputType
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }


  export type ClientsGroupByOutputType = {
    id: string
    activeMember: boolean
    archived: boolean
    email: string
    dateJoined: Date
    firstLesson: Date | null
    lastLesson: Date | null
    nextLesson: Date | null
    lessonsRemaining: number
    name: string
    notes: string | null
    preferredLessonFormat: string | null
    pronouns: string | null
    refundedVolume: number
    totalLessons: number
    totalSpend: number
    stripe_customer_id: string | null
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends ClientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type clientsSelect = {
    id?: boolean
    activeMember?: boolean
    archived?: boolean
    email?: boolean
    dateJoined?: boolean
    firstLesson?: boolean
    lastLesson?: boolean
    nextLesson?: boolean
    lessonsRemaining?: boolean
    name?: boolean
    notes?: boolean
    preferredLessonFormat?: boolean
    pronouns?: boolean
    refundedVolume?: boolean
    totalLessons?: boolean
    totalSpend?: boolean
    stripe_customer_id?: boolean
    bookings?: boolean | clients$bookingsArgs
    _count?: boolean | ClientsCountOutputTypeArgs
  }


  export type clientsInclude = {
    bookings?: boolean | clients$bookingsArgs
    _count?: boolean | ClientsCountOutputTypeArgs
  }

  export type clientsGetPayload<S extends boolean | null | undefined | clientsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? clients :
    S extends undefined ? never :
    S extends { include: any } & (clientsArgs | clientsFindManyArgs)
    ? clients  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'bookings' ? Array < calendlyInviteePayloadsGetPayload<S['include'][P]>>  :
        P extends '_count' ? ClientsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (clientsArgs | clientsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'bookings' ? Array < calendlyInviteePayloadsGetPayload<S['select'][P]>>  :
        P extends '_count' ? ClientsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof clients ? clients[P] : never
  } 
      : clients


  type clientsCountArgs = 
    Omit<clientsFindManyArgs, 'select' | 'include'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface clientsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Clients that matches the filter.
     * @param {clientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends clientsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, clientsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'clients'> extends True ? Prisma__clientsClient<clientsGetPayload<T>> : Prisma__clientsClient<clientsGetPayload<T> | null, null>

    /**
     * Find one Clients that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {clientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends clientsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, clientsFindUniqueOrThrowArgs>
    ): Prisma__clientsClient<clientsGetPayload<T>>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends clientsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, clientsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'clients'> extends True ? Prisma__clientsClient<clientsGetPayload<T>> : Prisma__clientsClient<clientsGetPayload<T> | null, null>

    /**
     * Find the first Clients that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends clientsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, clientsFindFirstOrThrowArgs>
    ): Prisma__clientsClient<clientsGetPayload<T>>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends clientsFindManyArgs>(
      args?: SelectSubset<T, clientsFindManyArgs>
    ): Prisma.PrismaPromise<Array<clientsGetPayload<T>>>

    /**
     * Create a Clients.
     * @param {clientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
    **/
    create<T extends clientsCreateArgs>(
      args: SelectSubset<T, clientsCreateArgs>
    ): Prisma__clientsClient<clientsGetPayload<T>>

    /**
     * Create many Clients.
     *     @param {clientsCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const clients = await prisma.clients.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends clientsCreateManyArgs>(
      args?: SelectSubset<T, clientsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clients.
     * @param {clientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
    **/
    delete<T extends clientsDeleteArgs>(
      args: SelectSubset<T, clientsDeleteArgs>
    ): Prisma__clientsClient<clientsGetPayload<T>>

    /**
     * Update one Clients.
     * @param {clientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends clientsUpdateArgs>(
      args: SelectSubset<T, clientsUpdateArgs>
    ): Prisma__clientsClient<clientsGetPayload<T>>

    /**
     * Delete zero or more Clients.
     * @param {clientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends clientsDeleteManyArgs>(
      args?: SelectSubset<T, clientsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends clientsUpdateManyArgs>(
      args: SelectSubset<T, clientsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clients.
     * @param {clientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
    **/
    upsert<T extends clientsUpsertArgs>(
      args: SelectSubset<T, clientsUpsertArgs>
    ): Prisma__clientsClient<clientsGetPayload<T>>

    /**
     * Find zero or more Clients that matches the filter.
     * @param {clientsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const clients = await prisma.clients.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: clientsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Clients.
     * @param {clientsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const clients = await prisma.clients.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: clientsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientsCountArgs>(
      args?: Subset<T, clientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsGroupByArgs} args - Group by arguments.
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
      T extends ClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientsGroupByArgs['orderBy'] }
        : { orderBy?: ClientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__clientsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    bookings<T extends clients$bookingsArgs= {}>(args?: Subset<T, clients$bookingsArgs>): Prisma.PrismaPromise<Array<calendlyInviteePayloadsGetPayload<T>>| Null>;

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
   * clients base type for findUnique actions
   */
  export type clientsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientsInclude | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findUnique
   */
  export interface clientsFindUniqueArgs extends clientsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * clients findUniqueOrThrow
   */
  export type clientsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientsInclude | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }


  /**
   * clients base type for findFirst actions
   */
  export type clientsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientsInclude | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: Enumerable<clientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: Enumerable<ClientsScalarFieldEnum>
  }

  /**
   * clients findFirst
   */
  export interface clientsFindFirstArgs extends clientsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * clients findFirstOrThrow
   */
  export type clientsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientsInclude | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: Enumerable<clientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: Enumerable<ClientsScalarFieldEnum>
  }


  /**
   * clients findMany
   */
  export type clientsFindManyArgs = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientsInclude | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: Enumerable<clientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: Enumerable<ClientsScalarFieldEnum>
  }


  /**
   * clients create
   */
  export type clientsCreateArgs = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientsInclude | null
    /**
     * The data needed to create a clients.
     */
    data: XOR<clientsCreateInput, clientsUncheckedCreateInput>
  }


  /**
   * clients createMany
   */
  export type clientsCreateManyArgs = {
    /**
     * The data used to create many clients.
     */
    data: Enumerable<clientsCreateManyInput>
  }


  /**
   * clients update
   */
  export type clientsUpdateArgs = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientsInclude | null
    /**
     * The data needed to update a clients.
     */
    data: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
    /**
     * Choose, which clients to update.
     */
    where: clientsWhereUniqueInput
  }


  /**
   * clients updateMany
   */
  export type clientsUpdateManyArgs = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientsWhereInput
  }


  /**
   * clients upsert
   */
  export type clientsUpsertArgs = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientsInclude | null
    /**
     * The filter to search for the clients to update in case it exists.
     */
    where: clientsWhereUniqueInput
    /**
     * In case the clients found by the `where` argument doesn't exist, create a new clients with this data.
     */
    create: XOR<clientsCreateInput, clientsUncheckedCreateInput>
    /**
     * In case the clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
  }


  /**
   * clients delete
   */
  export type clientsDeleteArgs = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientsInclude | null
    /**
     * Filter which clients to delete.
     */
    where: clientsWhereUniqueInput
  }


  /**
   * clients deleteMany
   */
  export type clientsDeleteManyArgs = {
    /**
     * Filter which clients to delete
     */
    where?: clientsWhereInput
  }


  /**
   * clients findRaw
   */
  export type clientsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * clients aggregateRaw
   */
  export type clientsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * clients.bookings
   */
  export type clients$bookingsArgs = {
    /**
     * Select specific fields to fetch from the calendlyInviteePayloads
     */
    select?: calendlyInviteePayloadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: calendlyInviteePayloadsInclude | null
    where?: calendlyInviteePayloadsWhereInput
    orderBy?: Enumerable<calendlyInviteePayloadsOrderByWithRelationInput>
    cursor?: calendlyInviteePayloadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CalendlyInviteePayloadsScalarFieldEnum>
  }


  /**
   * clients without action
   */
  export type clientsArgs = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CalendlyInviteePayloadsScalarFieldEnum: {
    id: 'id',
    cancel_url: 'cancel_url',
    created_at: 'created_at',
    email: 'email',
    event: 'event',
    first_name: 'first_name',
    last_name: 'last_name',
    name: 'name',
    new_invitee: 'new_invitee',
    old_invitee: 'old_invitee',
    reschedule_url: 'reschedule_url',
    rescheduled: 'rescheduled',
    routing_form_submission: 'routing_form_submission',
    status: 'status',
    text_reminder_number: 'text_reminder_number',
    timezone: 'timezone',
    updated_at: 'updated_at',
    uri: 'uri',
    clientId: 'clientId'
  };

  export type CalendlyInviteePayloadsScalarFieldEnum = (typeof CalendlyInviteePayloadsScalarFieldEnum)[keyof typeof CalendlyInviteePayloadsScalarFieldEnum]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    activeMember: 'activeMember',
    archived: 'archived',
    email: 'email',
    dateJoined: 'dateJoined',
    firstLesson: 'firstLesson',
    lastLesson: 'lastLesson',
    nextLesson: 'nextLesson',
    lessonsRemaining: 'lessonsRemaining',
    name: 'name',
    notes: 'notes',
    preferredLessonFormat: 'preferredLessonFormat',
    pronouns: 'pronouns',
    refundedVolume: 'refundedVolume',
    totalLessons: 'totalLessons',
    totalSpend: 'totalSpend',
    stripe_customer_id: 'stripe_customer_id'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const ContactsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    message: 'message',
    timestamp: 'timestamp'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const Qr_code_logsScalarFieldEnum: {
    id: 'id',
    flyerSize: 'flyerSize',
    campaign: 'campaign',
    designId: 'designId',
    location: 'location',
    timestamp: 'timestamp'
  };

  export type Qr_code_logsScalarFieldEnum = (typeof Qr_code_logsScalarFieldEnum)[keyof typeof Qr_code_logsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type contactsWhereInput = {
    AND?: Enumerable<contactsWhereInput>
    OR?: Enumerable<contactsWhereInput>
    NOT?: Enumerable<contactsWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    message?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
  }

  export type contactsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
  }

  export type contactsWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type contactsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    _count?: contactsCountOrderByAggregateInput
    _max?: contactsMaxOrderByAggregateInput
    _min?: contactsMinOrderByAggregateInput
  }

  export type contactsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<contactsScalarWhereWithAggregatesInput>
    OR?: Enumerable<contactsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<contactsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    message?: StringWithAggregatesFilter | string
    timestamp?: DateTimeWithAggregatesFilter | Date | string
  }

  export type qr_code_logsWhereInput = {
    AND?: Enumerable<qr_code_logsWhereInput>
    OR?: Enumerable<qr_code_logsWhereInput>
    NOT?: Enumerable<qr_code_logsWhereInput>
    id?: StringFilter | string
    flyerSize?: IntFilter | number
    campaign?: IntFilter | number
    designId?: IntFilter | number
    location?: IntFilter | number
    timestamp?: DateTimeFilter | Date | string
  }

  export type qr_code_logsOrderByWithRelationInput = {
    id?: SortOrder
    flyerSize?: SortOrder
    campaign?: SortOrder
    designId?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
  }

  export type qr_code_logsWhereUniqueInput = {
    id?: string
  }

  export type qr_code_logsOrderByWithAggregationInput = {
    id?: SortOrder
    flyerSize?: SortOrder
    campaign?: SortOrder
    designId?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
    _count?: qr_code_logsCountOrderByAggregateInput
    _avg?: qr_code_logsAvgOrderByAggregateInput
    _max?: qr_code_logsMaxOrderByAggregateInput
    _min?: qr_code_logsMinOrderByAggregateInput
    _sum?: qr_code_logsSumOrderByAggregateInput
  }

  export type qr_code_logsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<qr_code_logsScalarWhereWithAggregatesInput>
    OR?: Enumerable<qr_code_logsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<qr_code_logsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    flyerSize?: IntWithAggregatesFilter | number
    campaign?: IntWithAggregatesFilter | number
    designId?: IntWithAggregatesFilter | number
    location?: IntWithAggregatesFilter | number
    timestamp?: DateTimeWithAggregatesFilter | Date | string
  }

  export type calendlyInviteePayloadsWhereInput = {
    AND?: Enumerable<calendlyInviteePayloadsWhereInput>
    OR?: Enumerable<calendlyInviteePayloadsWhereInput>
    NOT?: Enumerable<calendlyInviteePayloadsWhereInput>
    id?: StringFilter | string
    cancel_url?: StringFilter | string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableCompositeFilter, CalendlyInviteePayloadsResourceCancellationObjectEqualityInput> | null
    created_at?: DateTimeFilter | Date | string
    email?: StringFilter | string
    event?: StringFilter | string
    first_name?: StringNullableFilter | string | null
    last_name?: StringNullableFilter | string | null
    name?: StringFilter | string
    new_invitee?: StringNullableFilter | string | null
    no_show?: XOR<NoShowNullableCompositeFilter, NoShowObjectEqualityInput> | null
    old_invitee?: StringNullableFilter | string | null
    payment?: XOR<PaymentNullableCompositeFilter, PaymentObjectEqualityInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersCompositeListFilter, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersObjectEqualityInput>>
    reconfirmation?: XOR<ReconfirmationNullableCompositeFilter, ReconfirmationObjectEqualityInput> | null
    reschedule_url?: StringFilter | string
    rescheduled?: BoolFilter | boolean
    routing_form_submission?: StringNullableFilter | string | null
    status?: StringFilter | string
    text_reminder_number?: StringNullableFilter | string | null
    timezone?: StringFilter | string
    tracking?: XOR<CalendlyInviteePayloadsResourceTrackingCompositeFilter, CalendlyInviteePayloadsResourceTrackingObjectEqualityInput>
    updated_at?: DateTimeFilter | Date | string
    uri?: StringFilter | string
    clientId?: StringNullableFilter | string | null
    client?: XOR<ClientsRelationFilter, clientsWhereInput> | null
  }

  export type calendlyInviteePayloadsOrderByWithRelationInput = {
    id?: SortOrder
    cancel_url?: SortOrder
    cancellation?: CalendlyInviteePayloadsResourceCancellationOrderByInput
    created_at?: SortOrder
    email?: SortOrder
    event?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    name?: SortOrder
    new_invitee?: SortOrder
    no_show?: NoShowOrderByInput
    old_invitee?: SortOrder
    payment?: PaymentOrderByInput
    questions_and_answers?: CalendlyInviteePayloadsResourceQuestionsAndAnswersOrderByCompositeAggregateInput
    reconfirmation?: ReconfirmationOrderByInput
    reschedule_url?: SortOrder
    rescheduled?: SortOrder
    routing_form_submission?: SortOrder
    status?: SortOrder
    text_reminder_number?: SortOrder
    timezone?: SortOrder
    tracking?: CalendlyInviteePayloadsResourceTrackingOrderByInput
    updated_at?: SortOrder
    uri?: SortOrder
    clientId?: SortOrder
    client?: clientsOrderByWithRelationInput
  }

  export type calendlyInviteePayloadsWhereUniqueInput = {
    id?: string
    uri?: string
  }

  export type calendlyInviteePayloadsOrderByWithAggregationInput = {
    id?: SortOrder
    cancel_url?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    event?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    name?: SortOrder
    new_invitee?: SortOrder
    old_invitee?: SortOrder
    reschedule_url?: SortOrder
    rescheduled?: SortOrder
    routing_form_submission?: SortOrder
    status?: SortOrder
    text_reminder_number?: SortOrder
    timezone?: SortOrder
    updated_at?: SortOrder
    uri?: SortOrder
    clientId?: SortOrder
    _count?: calendlyInviteePayloadsCountOrderByAggregateInput
    _max?: calendlyInviteePayloadsMaxOrderByAggregateInput
    _min?: calendlyInviteePayloadsMinOrderByAggregateInput
  }

  export type calendlyInviteePayloadsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<calendlyInviteePayloadsScalarWhereWithAggregatesInput>
    OR?: Enumerable<calendlyInviteePayloadsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<calendlyInviteePayloadsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    cancel_url?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    event?: StringWithAggregatesFilter | string
    first_name?: StringNullableWithAggregatesFilter | string | null
    last_name?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    new_invitee?: StringNullableWithAggregatesFilter | string | null
    old_invitee?: StringNullableWithAggregatesFilter | string | null
    reschedule_url?: StringWithAggregatesFilter | string
    rescheduled?: BoolWithAggregatesFilter | boolean
    routing_form_submission?: StringNullableWithAggregatesFilter | string | null
    status?: StringWithAggregatesFilter | string
    text_reminder_number?: StringNullableWithAggregatesFilter | string | null
    timezone?: StringWithAggregatesFilter | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    uri?: StringWithAggregatesFilter | string
    clientId?: StringNullableWithAggregatesFilter | string | null
  }

  export type clientsWhereInput = {
    AND?: Enumerable<clientsWhereInput>
    OR?: Enumerable<clientsWhereInput>
    NOT?: Enumerable<clientsWhereInput>
    id?: StringFilter | string
    activeMember?: BoolFilter | boolean
    archived?: BoolFilter | boolean
    email?: StringFilter | string
    dateJoined?: DateTimeFilter | Date | string
    firstLesson?: DateTimeNullableFilter | Date | string | null
    lastLesson?: DateTimeNullableFilter | Date | string | null
    nextLesson?: DateTimeNullableFilter | Date | string | null
    lessonsRemaining?: IntFilter | number
    name?: StringFilter | string
    notes?: StringNullableFilter | string | null
    preferredLessonFormat?: StringNullableFilter | string | null
    pronouns?: StringNullableFilter | string | null
    refundedVolume?: IntFilter | number
    totalLessons?: IntFilter | number
    totalSpend?: FloatFilter | number
    stripe_customer_id?: StringNullableFilter | string | null
    bookings?: CalendlyInviteePayloadsListRelationFilter
  }

  export type clientsOrderByWithRelationInput = {
    id?: SortOrder
    activeMember?: SortOrder
    archived?: SortOrder
    email?: SortOrder
    dateJoined?: SortOrder
    firstLesson?: SortOrder
    lastLesson?: SortOrder
    nextLesson?: SortOrder
    lessonsRemaining?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    preferredLessonFormat?: SortOrder
    pronouns?: SortOrder
    refundedVolume?: SortOrder
    totalLessons?: SortOrder
    totalSpend?: SortOrder
    stripe_customer_id?: SortOrder
    bookings?: calendlyInviteePayloadsOrderByRelationAggregateInput
  }

  export type clientsWhereUniqueInput = {
    id?: string
    email?: string
    name?: string
    stripe_customer_id?: string
  }

  export type clientsOrderByWithAggregationInput = {
    id?: SortOrder
    activeMember?: SortOrder
    archived?: SortOrder
    email?: SortOrder
    dateJoined?: SortOrder
    firstLesson?: SortOrder
    lastLesson?: SortOrder
    nextLesson?: SortOrder
    lessonsRemaining?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    preferredLessonFormat?: SortOrder
    pronouns?: SortOrder
    refundedVolume?: SortOrder
    totalLessons?: SortOrder
    totalSpend?: SortOrder
    stripe_customer_id?: SortOrder
    _count?: clientsCountOrderByAggregateInput
    _avg?: clientsAvgOrderByAggregateInput
    _max?: clientsMaxOrderByAggregateInput
    _min?: clientsMinOrderByAggregateInput
    _sum?: clientsSumOrderByAggregateInput
  }

  export type clientsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<clientsScalarWhereWithAggregatesInput>
    OR?: Enumerable<clientsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<clientsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    activeMember?: BoolWithAggregatesFilter | boolean
    archived?: BoolWithAggregatesFilter | boolean
    email?: StringWithAggregatesFilter | string
    dateJoined?: DateTimeWithAggregatesFilter | Date | string
    firstLesson?: DateTimeNullableWithAggregatesFilter | Date | string | null
    lastLesson?: DateTimeNullableWithAggregatesFilter | Date | string | null
    nextLesson?: DateTimeNullableWithAggregatesFilter | Date | string | null
    lessonsRemaining?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    notes?: StringNullableWithAggregatesFilter | string | null
    preferredLessonFormat?: StringNullableWithAggregatesFilter | string | null
    pronouns?: StringNullableWithAggregatesFilter | string | null
    refundedVolume?: IntWithAggregatesFilter | number
    totalLessons?: IntWithAggregatesFilter | number
    totalSpend?: FloatWithAggregatesFilter | number
    stripe_customer_id?: StringNullableWithAggregatesFilter | string | null
  }

  export type contactsCreateInput = {
    id?: string
    email: string
    name: string
    message: string
    timestamp?: Date | string
  }

  export type contactsUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    message: string
    timestamp?: Date | string
  }

  export type contactsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactsUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactsCreateManyInput = {
    id?: string
    email: string
    name: string
    message: string
    timestamp?: Date | string
  }

  export type contactsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactsUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type qr_code_logsCreateInput = {
    id?: string
    flyerSize: number
    campaign: number
    designId: number
    location: number
    timestamp: Date | string
  }

  export type qr_code_logsUncheckedCreateInput = {
    id?: string
    flyerSize: number
    campaign: number
    designId: number
    location: number
    timestamp: Date | string
  }

  export type qr_code_logsUpdateInput = {
    flyerSize?: IntFieldUpdateOperationsInput | number
    campaign?: IntFieldUpdateOperationsInput | number
    designId?: IntFieldUpdateOperationsInput | number
    location?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type qr_code_logsUncheckedUpdateInput = {
    flyerSize?: IntFieldUpdateOperationsInput | number
    campaign?: IntFieldUpdateOperationsInput | number
    designId?: IntFieldUpdateOperationsInput | number
    location?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type qr_code_logsCreateManyInput = {
    id?: string
    flyerSize: number
    campaign: number
    designId: number
    location: number
    timestamp: Date | string
  }

  export type qr_code_logsUpdateManyMutationInput = {
    flyerSize?: IntFieldUpdateOperationsInput | number
    campaign?: IntFieldUpdateOperationsInput | number
    designId?: IntFieldUpdateOperationsInput | number
    location?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type qr_code_logsUncheckedUpdateManyInput = {
    flyerSize?: IntFieldUpdateOperationsInput | number
    campaign?: IntFieldUpdateOperationsInput | number
    designId?: IntFieldUpdateOperationsInput | number
    location?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendlyInviteePayloadsCreateInput = {
    id?: string
    cancel_url: string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableCreateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at: Date | string
    email: string
    event: string
    first_name?: string | null
    last_name?: string | null
    name: string
    new_invitee?: string | null
    no_show?: XOR<NoShowNullableCreateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: string | null
    payment?: XOR<PaymentNullableCreateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListCreateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableCreateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url: string
    rescheduled: boolean
    routing_form_submission?: string | null
    status: string
    text_reminder_number?: string | null
    timezone: string
    tracking: XOR<CalendlyInviteePayloadsResourceTrackingCreateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at: Date | string
    uri: string
    client?: clientsCreateNestedOneWithoutBookingsInput
  }

  export type calendlyInviteePayloadsUncheckedCreateInput = {
    id?: string
    cancel_url: string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableCreateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at: Date | string
    email: string
    event: string
    first_name?: string | null
    last_name?: string | null
    name: string
    new_invitee?: string | null
    no_show?: XOR<NoShowNullableCreateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: string | null
    payment?: XOR<PaymentNullableCreateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListCreateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableCreateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url: string
    rescheduled: boolean
    routing_form_submission?: string | null
    status: string
    text_reminder_number?: string | null
    timezone: string
    tracking: XOR<CalendlyInviteePayloadsResourceTrackingCreateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at: Date | string
    uri: string
    clientId?: string | null
  }

  export type calendlyInviteePayloadsUpdateInput = {
    cancel_url?: StringFieldUpdateOperationsInput | string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableUpdateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    new_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    no_show?: XOR<NoShowNullableUpdateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: XOR<PaymentNullableUpdateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListUpdateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableUpdateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url?: StringFieldUpdateOperationsInput | string
    rescheduled?: BoolFieldUpdateOperationsInput | boolean
    routing_form_submission?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    text_reminder_number?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    tracking?: XOR<CalendlyInviteePayloadsResourceTrackingUpdateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
    client?: clientsUpdateOneWithoutBookingsNestedInput
  }

  export type calendlyInviteePayloadsUncheckedUpdateInput = {
    cancel_url?: StringFieldUpdateOperationsInput | string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableUpdateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    new_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    no_show?: XOR<NoShowNullableUpdateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: XOR<PaymentNullableUpdateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListUpdateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableUpdateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url?: StringFieldUpdateOperationsInput | string
    rescheduled?: BoolFieldUpdateOperationsInput | boolean
    routing_form_submission?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    text_reminder_number?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    tracking?: XOR<CalendlyInviteePayloadsResourceTrackingUpdateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calendlyInviteePayloadsCreateManyInput = {
    id?: string
    cancel_url: string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableCreateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at: Date | string
    email: string
    event: string
    first_name?: string | null
    last_name?: string | null
    name: string
    new_invitee?: string | null
    no_show?: XOR<NoShowNullableCreateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: string | null
    payment?: XOR<PaymentNullableCreateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListCreateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableCreateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url: string
    rescheduled: boolean
    routing_form_submission?: string | null
    status: string
    text_reminder_number?: string | null
    timezone: string
    tracking: XOR<CalendlyInviteePayloadsResourceTrackingCreateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at: Date | string
    uri: string
    clientId?: string | null
  }

  export type calendlyInviteePayloadsUpdateManyMutationInput = {
    cancel_url?: StringFieldUpdateOperationsInput | string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableUpdateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    new_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    no_show?: XOR<NoShowNullableUpdateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: XOR<PaymentNullableUpdateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListUpdateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableUpdateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url?: StringFieldUpdateOperationsInput | string
    rescheduled?: BoolFieldUpdateOperationsInput | boolean
    routing_form_submission?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    text_reminder_number?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    tracking?: XOR<CalendlyInviteePayloadsResourceTrackingUpdateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
  }

  export type calendlyInviteePayloadsUncheckedUpdateManyInput = {
    cancel_url?: StringFieldUpdateOperationsInput | string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableUpdateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    new_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    no_show?: XOR<NoShowNullableUpdateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: XOR<PaymentNullableUpdateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListUpdateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableUpdateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url?: StringFieldUpdateOperationsInput | string
    rescheduled?: BoolFieldUpdateOperationsInput | boolean
    routing_form_submission?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    text_reminder_number?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    tracking?: XOR<CalendlyInviteePayloadsResourceTrackingUpdateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clientsCreateInput = {
    id?: string
    activeMember: boolean
    archived?: boolean
    email: string
    dateJoined?: Date | string
    firstLesson?: Date | string | null
    lastLesson?: Date | string | null
    nextLesson?: Date | string | null
    lessonsRemaining?: number
    name: string
    notes?: string | null
    preferredLessonFormat?: string | null
    pronouns?: string | null
    refundedVolume?: number
    totalLessons?: number
    totalSpend?: number
    stripe_customer_id?: string | null
    bookings?: calendlyInviteePayloadsCreateNestedManyWithoutClientInput
  }

  export type clientsUncheckedCreateInput = {
    id?: string
    activeMember: boolean
    archived?: boolean
    email: string
    dateJoined?: Date | string
    firstLesson?: Date | string | null
    lastLesson?: Date | string | null
    nextLesson?: Date | string | null
    lessonsRemaining?: number
    name: string
    notes?: string | null
    preferredLessonFormat?: string | null
    pronouns?: string | null
    refundedVolume?: number
    totalLessons?: number
    totalSpend?: number
    stripe_customer_id?: string | null
    bookings?: calendlyInviteePayloadsUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientsUpdateInput = {
    activeMember?: BoolFieldUpdateOperationsInput | boolean
    archived?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    firstLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessonsRemaining?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLessonFormat?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    refundedVolume?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: calendlyInviteePayloadsUpdateManyWithoutClientNestedInput
  }

  export type clientsUncheckedUpdateInput = {
    activeMember?: BoolFieldUpdateOperationsInput | boolean
    archived?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    firstLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessonsRemaining?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLessonFormat?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    refundedVolume?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: calendlyInviteePayloadsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type clientsCreateManyInput = {
    id?: string
    activeMember: boolean
    archived?: boolean
    email: string
    dateJoined?: Date | string
    firstLesson?: Date | string | null
    lastLesson?: Date | string | null
    nextLesson?: Date | string | null
    lessonsRemaining?: number
    name: string
    notes?: string | null
    preferredLessonFormat?: string | null
    pronouns?: string | null
    refundedVolume?: number
    totalLessons?: number
    totalSpend?: number
    stripe_customer_id?: string | null
  }

  export type clientsUpdateManyMutationInput = {
    activeMember?: BoolFieldUpdateOperationsInput | boolean
    archived?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    firstLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessonsRemaining?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLessonFormat?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    refundedVolume?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clientsUncheckedUpdateManyInput = {
    activeMember?: BoolFieldUpdateOperationsInput | boolean
    archived?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    firstLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessonsRemaining?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLessonFormat?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    refundedVolume?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type contactsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
  }

  export type contactsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
  }

  export type contactsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
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

  export type qr_code_logsCountOrderByAggregateInput = {
    id?: SortOrder
    flyerSize?: SortOrder
    campaign?: SortOrder
    designId?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
  }

  export type qr_code_logsAvgOrderByAggregateInput = {
    flyerSize?: SortOrder
    campaign?: SortOrder
    designId?: SortOrder
    location?: SortOrder
  }

  export type qr_code_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    flyerSize?: SortOrder
    campaign?: SortOrder
    designId?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
  }

  export type qr_code_logsMinOrderByAggregateInput = {
    id?: SortOrder
    flyerSize?: SortOrder
    campaign?: SortOrder
    designId?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
  }

  export type qr_code_logsSumOrderByAggregateInput = {
    flyerSize?: SortOrder
    campaign?: SortOrder
    designId?: SortOrder
    location?: SortOrder
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

  export type CalendlyInviteePayloadsResourceCancellationNullableCompositeFilter = {
    equals?: CalendlyInviteePayloadsResourceCancellationObjectEqualityInput | null
    is?: CalendlyInviteePayloadsResourceCancellationWhereInput | null
    isNot?: CalendlyInviteePayloadsResourceCancellationWhereInput | null
    isSet?: boolean
  }

  export type CalendlyInviteePayloadsResourceCancellationObjectEqualityInput = {
    canceled_by: string
    canceler_type: string
    reason: string
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
    isSet?: boolean
  }

  export type NoShowNullableCompositeFilter = {
    equals?: NoShowObjectEqualityInput | null
    is?: NoShowWhereInput | null
    isNot?: NoShowWhereInput | null
    isSet?: boolean
  }

  export type NoShowObjectEqualityInput = {
    uri: string
    created_at: Date | string
  }

  export type PaymentNullableCompositeFilter = {
    equals?: PaymentObjectEqualityInput | null
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
    isSet?: boolean
  }

  export type PaymentObjectEqualityInput = {
    external_id: string
    provider: string
    amount: number
    currency: string
    terms: string
    successful: boolean
  }

  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersCompositeListFilter = {
    equals?: Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersObjectEqualityInput>
    every?: CalendlyInviteePayloadsResourceQuestionsAndAnswersWhereInput
    some?: CalendlyInviteePayloadsResourceQuestionsAndAnswersWhereInput
    none?: CalendlyInviteePayloadsResourceQuestionsAndAnswersWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersObjectEqualityInput = {
    answer: string
    position: number
    question: string
  }

  export type ReconfirmationNullableCompositeFilter = {
    equals?: ReconfirmationObjectEqualityInput | null
    is?: ReconfirmationWhereInput | null
    isNot?: ReconfirmationWhereInput | null
    isSet?: boolean
  }

  export type ReconfirmationObjectEqualityInput = {
    created_at: Date | string
    confirmed_at: Date | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type CalendlyInviteePayloadsResourceTrackingCompositeFilter = {
    equals?: CalendlyInviteePayloadsResourceTrackingObjectEqualityInput
    is?: CalendlyInviteePayloadsResourceTrackingWhereInput
    isNot?: CalendlyInviteePayloadsResourceTrackingWhereInput
  }

  export type CalendlyInviteePayloadsResourceTrackingObjectEqualityInput = {
    salesforce_uuid?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_medium?: string | null
    utm_source?: string | null
    utm_term?: string | null
  }

  export type ClientsRelationFilter = {
    is?: clientsWhereInput | null
    isNot?: clientsWhereInput | null
  }

  export type CalendlyInviteePayloadsResourceCancellationOrderByInput = {
    canceled_by?: SortOrder
    canceler_type?: SortOrder
    reason?: SortOrder
  }

  export type NoShowOrderByInput = {
    uri?: SortOrder
    created_at?: SortOrder
  }

  export type PaymentOrderByInput = {
    external_id?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    terms?: SortOrder
    successful?: SortOrder
  }

  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ReconfirmationOrderByInput = {
    created_at?: SortOrder
    confirmed_at?: SortOrder
  }

  export type CalendlyInviteePayloadsResourceTrackingOrderByInput = {
    salesforce_uuid?: SortOrder
    utm_campaign?: SortOrder
    utm_content?: SortOrder
    utm_medium?: SortOrder
    utm_source?: SortOrder
    utm_term?: SortOrder
  }

  export type calendlyInviteePayloadsCountOrderByAggregateInput = {
    id?: SortOrder
    cancel_url?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    event?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    name?: SortOrder
    new_invitee?: SortOrder
    old_invitee?: SortOrder
    reschedule_url?: SortOrder
    rescheduled?: SortOrder
    routing_form_submission?: SortOrder
    status?: SortOrder
    text_reminder_number?: SortOrder
    timezone?: SortOrder
    updated_at?: SortOrder
    uri?: SortOrder
    clientId?: SortOrder
  }

  export type calendlyInviteePayloadsMaxOrderByAggregateInput = {
    id?: SortOrder
    cancel_url?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    event?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    name?: SortOrder
    new_invitee?: SortOrder
    old_invitee?: SortOrder
    reschedule_url?: SortOrder
    rescheduled?: SortOrder
    routing_form_submission?: SortOrder
    status?: SortOrder
    text_reminder_number?: SortOrder
    timezone?: SortOrder
    updated_at?: SortOrder
    uri?: SortOrder
    clientId?: SortOrder
  }

  export type calendlyInviteePayloadsMinOrderByAggregateInput = {
    id?: SortOrder
    cancel_url?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    event?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    name?: SortOrder
    new_invitee?: SortOrder
    old_invitee?: SortOrder
    reschedule_url?: SortOrder
    rescheduled?: SortOrder
    routing_form_submission?: SortOrder
    status?: SortOrder
    text_reminder_number?: SortOrder
    timezone?: SortOrder
    updated_at?: SortOrder
    uri?: SortOrder
    clientId?: SortOrder
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
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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
    isSet?: boolean
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type CalendlyInviteePayloadsListRelationFilter = {
    every?: calendlyInviteePayloadsWhereInput
    some?: calendlyInviteePayloadsWhereInput
    none?: calendlyInviteePayloadsWhereInput
  }

  export type calendlyInviteePayloadsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientsCountOrderByAggregateInput = {
    id?: SortOrder
    activeMember?: SortOrder
    archived?: SortOrder
    email?: SortOrder
    dateJoined?: SortOrder
    firstLesson?: SortOrder
    lastLesson?: SortOrder
    nextLesson?: SortOrder
    lessonsRemaining?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    preferredLessonFormat?: SortOrder
    pronouns?: SortOrder
    refundedVolume?: SortOrder
    totalLessons?: SortOrder
    totalSpend?: SortOrder
    stripe_customer_id?: SortOrder
  }

  export type clientsAvgOrderByAggregateInput = {
    lessonsRemaining?: SortOrder
    refundedVolume?: SortOrder
    totalLessons?: SortOrder
    totalSpend?: SortOrder
  }

  export type clientsMaxOrderByAggregateInput = {
    id?: SortOrder
    activeMember?: SortOrder
    archived?: SortOrder
    email?: SortOrder
    dateJoined?: SortOrder
    firstLesson?: SortOrder
    lastLesson?: SortOrder
    nextLesson?: SortOrder
    lessonsRemaining?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    preferredLessonFormat?: SortOrder
    pronouns?: SortOrder
    refundedVolume?: SortOrder
    totalLessons?: SortOrder
    totalSpend?: SortOrder
    stripe_customer_id?: SortOrder
  }

  export type clientsMinOrderByAggregateInput = {
    id?: SortOrder
    activeMember?: SortOrder
    archived?: SortOrder
    email?: SortOrder
    dateJoined?: SortOrder
    firstLesson?: SortOrder
    lastLesson?: SortOrder
    nextLesson?: SortOrder
    lessonsRemaining?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    preferredLessonFormat?: SortOrder
    pronouns?: SortOrder
    refundedVolume?: SortOrder
    totalLessons?: SortOrder
    totalSpend?: SortOrder
    stripe_customer_id?: SortOrder
  }

  export type clientsSumOrderByAggregateInput = {
    lessonsRemaining?: SortOrder
    refundedVolume?: SortOrder
    totalLessons?: SortOrder
    totalSpend?: SortOrder
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
    isSet?: boolean
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CalendlyInviteePayloadsResourceCancellationNullableCreateEnvelopeInput = {
    set?: CalendlyInviteePayloadsResourceCancellationCreateInput | null
  }

  export type CalendlyInviteePayloadsResourceCancellationCreateInput = {
    canceled_by: string
    canceler_type: string
    reason: string
  }

  export type NoShowNullableCreateEnvelopeInput = {
    set?: NoShowCreateInput | null
  }

  export type NoShowCreateInput = {
    uri: string
    created_at: Date | string
  }

  export type PaymentNullableCreateEnvelopeInput = {
    set?: PaymentCreateInput | null
  }

  export type PaymentCreateInput = {
    external_id: string
    provider: string
    amount: number
    currency: string
    terms: string
    successful: boolean
  }

  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersListCreateEnvelopeInput = {
    set?: Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>
  }

  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput = {
    answer: string
    position: number
    question: string
  }

  export type ReconfirmationNullableCreateEnvelopeInput = {
    set?: ReconfirmationCreateInput | null
  }

  export type ReconfirmationCreateInput = {
    created_at: Date | string
    confirmed_at: Date | string
  }

  export type CalendlyInviteePayloadsResourceTrackingCreateEnvelopeInput = {
    set?: CalendlyInviteePayloadsResourceTrackingCreateInput
  }

  export type CalendlyInviteePayloadsResourceTrackingCreateInput = {
    salesforce_uuid?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_medium?: string | null
    utm_source?: string | null
    utm_term?: string | null
  }

  export type clientsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<clientsCreateWithoutBookingsInput, clientsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: clientsCreateOrConnectWithoutBookingsInput
    connect?: clientsWhereUniqueInput
  }

  export type CalendlyInviteePayloadsResourceCancellationNullableUpdateEnvelopeInput = {
    set?: CalendlyInviteePayloadsResourceCancellationCreateInput | null
    upsert?: CalendlyInviteePayloadsResourceCancellationUpsertInput
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NoShowNullableUpdateEnvelopeInput = {
    set?: NoShowCreateInput | null
    upsert?: NoShowUpsertInput
    unset?: boolean
  }

  export type PaymentNullableUpdateEnvelopeInput = {
    set?: PaymentCreateInput | null
    upsert?: PaymentUpsertInput
    unset?: boolean
  }

  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersListUpdateEnvelopeInput = {
    set?: Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>
    push?: Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>
    updateMany?: CalendlyInviteePayloadsResourceQuestionsAndAnswersUpdateManyInput
    deleteMany?: CalendlyInviteePayloadsResourceQuestionsAndAnswersDeleteManyInput
  }

  export type ReconfirmationNullableUpdateEnvelopeInput = {
    set?: ReconfirmationCreateInput | null
    upsert?: ReconfirmationUpsertInput
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CalendlyInviteePayloadsResourceTrackingUpdateEnvelopeInput = {
    set?: CalendlyInviteePayloadsResourceTrackingCreateInput
    update?: CalendlyInviteePayloadsResourceTrackingUpdateInput
  }

  export type clientsUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<clientsCreateWithoutBookingsInput, clientsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: clientsCreateOrConnectWithoutBookingsInput
    upsert?: clientsUpsertWithoutBookingsInput
    disconnect?: boolean
    delete?: boolean
    connect?: clientsWhereUniqueInput
    update?: XOR<clientsUpdateWithoutBookingsInput, clientsUncheckedUpdateWithoutBookingsInput>
  }

  export type calendlyInviteePayloadsCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<calendlyInviteePayloadsCreateWithoutClientInput>, Enumerable<calendlyInviteePayloadsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<calendlyInviteePayloadsCreateOrConnectWithoutClientInput>
    createMany?: calendlyInviteePayloadsCreateManyClientInputEnvelope
    connect?: Enumerable<calendlyInviteePayloadsWhereUniqueInput>
  }

  export type calendlyInviteePayloadsUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<calendlyInviteePayloadsCreateWithoutClientInput>, Enumerable<calendlyInviteePayloadsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<calendlyInviteePayloadsCreateOrConnectWithoutClientInput>
    createMany?: calendlyInviteePayloadsCreateManyClientInputEnvelope
    connect?: Enumerable<calendlyInviteePayloadsWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type calendlyInviteePayloadsUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<calendlyInviteePayloadsCreateWithoutClientInput>, Enumerable<calendlyInviteePayloadsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<calendlyInviteePayloadsCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<calendlyInviteePayloadsUpsertWithWhereUniqueWithoutClientInput>
    createMany?: calendlyInviteePayloadsCreateManyClientInputEnvelope
    set?: Enumerable<calendlyInviteePayloadsWhereUniqueInput>
    disconnect?: Enumerable<calendlyInviteePayloadsWhereUniqueInput>
    delete?: Enumerable<calendlyInviteePayloadsWhereUniqueInput>
    connect?: Enumerable<calendlyInviteePayloadsWhereUniqueInput>
    update?: Enumerable<calendlyInviteePayloadsUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<calendlyInviteePayloadsUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<calendlyInviteePayloadsScalarWhereInput>
  }

  export type calendlyInviteePayloadsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<calendlyInviteePayloadsCreateWithoutClientInput>, Enumerable<calendlyInviteePayloadsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<calendlyInviteePayloadsCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<calendlyInviteePayloadsUpsertWithWhereUniqueWithoutClientInput>
    createMany?: calendlyInviteePayloadsCreateManyClientInputEnvelope
    set?: Enumerable<calendlyInviteePayloadsWhereUniqueInput>
    disconnect?: Enumerable<calendlyInviteePayloadsWhereUniqueInput>
    delete?: Enumerable<calendlyInviteePayloadsWhereUniqueInput>
    connect?: Enumerable<calendlyInviteePayloadsWhereUniqueInput>
    update?: Enumerable<calendlyInviteePayloadsUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<calendlyInviteePayloadsUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<calendlyInviteePayloadsScalarWhereInput>
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

  export type CalendlyInviteePayloadsResourceCancellationWhereInput = {
    AND?: Enumerable<CalendlyInviteePayloadsResourceCancellationWhereInput>
    OR?: Enumerable<CalendlyInviteePayloadsResourceCancellationWhereInput>
    NOT?: Enumerable<CalendlyInviteePayloadsResourceCancellationWhereInput>
    canceled_by?: StringFilter | string
    canceler_type?: StringFilter | string
    reason?: StringFilter | string
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
    isSet?: boolean
  }

  export type NoShowWhereInput = {
    AND?: Enumerable<NoShowWhereInput>
    OR?: Enumerable<NoShowWhereInput>
    NOT?: Enumerable<NoShowWhereInput>
    uri?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
  }

  export type PaymentWhereInput = {
    AND?: Enumerable<PaymentWhereInput>
    OR?: Enumerable<PaymentWhereInput>
    NOT?: Enumerable<PaymentWhereInput>
    external_id?: StringFilter | string
    provider?: StringFilter | string
    amount?: FloatFilter | number
    currency?: StringFilter | string
    terms?: StringFilter | string
    successful?: BoolFilter | boolean
  }

  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersWhereInput = {
    AND?: Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersWhereInput>
    OR?: Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersWhereInput>
    NOT?: Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersWhereInput>
    answer?: StringFilter | string
    position?: IntFilter | number
    question?: StringFilter | string
  }

  export type ReconfirmationWhereInput = {
    AND?: Enumerable<ReconfirmationWhereInput>
    OR?: Enumerable<ReconfirmationWhereInput>
    NOT?: Enumerable<ReconfirmationWhereInput>
    created_at?: DateTimeFilter | Date | string
    confirmed_at?: DateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type CalendlyInviteePayloadsResourceTrackingWhereInput = {
    AND?: Enumerable<CalendlyInviteePayloadsResourceTrackingWhereInput>
    OR?: Enumerable<CalendlyInviteePayloadsResourceTrackingWhereInput>
    NOT?: Enumerable<CalendlyInviteePayloadsResourceTrackingWhereInput>
    salesforce_uuid?: StringNullableFilter | string | null
    utm_campaign?: StringNullableFilter | string | null
    utm_content?: StringNullableFilter | string | null
    utm_medium?: StringNullableFilter | string | null
    utm_source?: StringNullableFilter | string | null
    utm_term?: StringNullableFilter | string | null
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type clientsCreateWithoutBookingsInput = {
    id?: string
    activeMember: boolean
    archived?: boolean
    email: string
    dateJoined?: Date | string
    firstLesson?: Date | string | null
    lastLesson?: Date | string | null
    nextLesson?: Date | string | null
    lessonsRemaining?: number
    name: string
    notes?: string | null
    preferredLessonFormat?: string | null
    pronouns?: string | null
    refundedVolume?: number
    totalLessons?: number
    totalSpend?: number
    stripe_customer_id?: string | null
  }

  export type clientsUncheckedCreateWithoutBookingsInput = {
    id?: string
    activeMember: boolean
    archived?: boolean
    email: string
    dateJoined?: Date | string
    firstLesson?: Date | string | null
    lastLesson?: Date | string | null
    nextLesson?: Date | string | null
    lessonsRemaining?: number
    name: string
    notes?: string | null
    preferredLessonFormat?: string | null
    pronouns?: string | null
    refundedVolume?: number
    totalLessons?: number
    totalSpend?: number
    stripe_customer_id?: string | null
  }

  export type clientsCreateOrConnectWithoutBookingsInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutBookingsInput, clientsUncheckedCreateWithoutBookingsInput>
  }

  export type CalendlyInviteePayloadsResourceCancellationUpsertInput = {
    set: CalendlyInviteePayloadsResourceCancellationCreateInput | null
    update: CalendlyInviteePayloadsResourceCancellationUpdateInput
  }

  export type NoShowUpsertInput = {
    set: NoShowCreateInput | null
    update: NoShowUpdateInput
  }

  export type PaymentUpsertInput = {
    set: PaymentCreateInput | null
    update: PaymentUpdateInput
  }

  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersUpdateManyInput = {
    where: CalendlyInviteePayloadsResourceQuestionsAndAnswersWhereInput
    data: CalendlyInviteePayloadsResourceQuestionsAndAnswersUpdateInput
  }

  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersDeleteManyInput = {
    where: CalendlyInviteePayloadsResourceQuestionsAndAnswersWhereInput
  }

  export type ReconfirmationUpsertInput = {
    set: ReconfirmationCreateInput | null
    update: ReconfirmationUpdateInput
  }

  export type CalendlyInviteePayloadsResourceTrackingUpdateInput = {
    salesforce_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clientsUpsertWithoutBookingsInput = {
    update: XOR<clientsUpdateWithoutBookingsInput, clientsUncheckedUpdateWithoutBookingsInput>
    create: XOR<clientsCreateWithoutBookingsInput, clientsUncheckedCreateWithoutBookingsInput>
  }

  export type clientsUpdateWithoutBookingsInput = {
    activeMember?: BoolFieldUpdateOperationsInput | boolean
    archived?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    firstLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessonsRemaining?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLessonFormat?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    refundedVolume?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clientsUncheckedUpdateWithoutBookingsInput = {
    activeMember?: BoolFieldUpdateOperationsInput | boolean
    archived?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    dateJoined?: DateTimeFieldUpdateOperationsInput | Date | string
    firstLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextLesson?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lessonsRemaining?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLessonFormat?: NullableStringFieldUpdateOperationsInput | string | null
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    refundedVolume?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    totalSpend?: FloatFieldUpdateOperationsInput | number
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calendlyInviteePayloadsCreateWithoutClientInput = {
    id?: string
    cancel_url: string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableCreateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at: Date | string
    email: string
    event: string
    first_name?: string | null
    last_name?: string | null
    name: string
    new_invitee?: string | null
    no_show?: XOR<NoShowNullableCreateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: string | null
    payment?: XOR<PaymentNullableCreateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListCreateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableCreateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url: string
    rescheduled: boolean
    routing_form_submission?: string | null
    status: string
    text_reminder_number?: string | null
    timezone: string
    tracking: XOR<CalendlyInviteePayloadsResourceTrackingCreateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at: Date | string
    uri: string
  }

  export type calendlyInviteePayloadsUncheckedCreateWithoutClientInput = {
    id?: string
    cancel_url: string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableCreateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at: Date | string
    email: string
    event: string
    first_name?: string | null
    last_name?: string | null
    name: string
    new_invitee?: string | null
    no_show?: XOR<NoShowNullableCreateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: string | null
    payment?: XOR<PaymentNullableCreateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListCreateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableCreateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url: string
    rescheduled: boolean
    routing_form_submission?: string | null
    status: string
    text_reminder_number?: string | null
    timezone: string
    tracking: XOR<CalendlyInviteePayloadsResourceTrackingCreateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at: Date | string
    uri: string
  }

  export type calendlyInviteePayloadsCreateOrConnectWithoutClientInput = {
    where: calendlyInviteePayloadsWhereUniqueInput
    create: XOR<calendlyInviteePayloadsCreateWithoutClientInput, calendlyInviteePayloadsUncheckedCreateWithoutClientInput>
  }

  export type calendlyInviteePayloadsCreateManyClientInputEnvelope = {
    data: Enumerable<calendlyInviteePayloadsCreateManyClientInput>
  }

  export type calendlyInviteePayloadsUpsertWithWhereUniqueWithoutClientInput = {
    where: calendlyInviteePayloadsWhereUniqueInput
    update: XOR<calendlyInviteePayloadsUpdateWithoutClientInput, calendlyInviteePayloadsUncheckedUpdateWithoutClientInput>
    create: XOR<calendlyInviteePayloadsCreateWithoutClientInput, calendlyInviteePayloadsUncheckedCreateWithoutClientInput>
  }

  export type calendlyInviteePayloadsUpdateWithWhereUniqueWithoutClientInput = {
    where: calendlyInviteePayloadsWhereUniqueInput
    data: XOR<calendlyInviteePayloadsUpdateWithoutClientInput, calendlyInviteePayloadsUncheckedUpdateWithoutClientInput>
  }

  export type calendlyInviteePayloadsUpdateManyWithWhereWithoutClientInput = {
    where: calendlyInviteePayloadsScalarWhereInput
    data: XOR<calendlyInviteePayloadsUpdateManyMutationInput, calendlyInviteePayloadsUncheckedUpdateManyWithoutBookingsInput>
  }

  export type calendlyInviteePayloadsScalarWhereInput = {
    AND?: Enumerable<calendlyInviteePayloadsScalarWhereInput>
    OR?: Enumerable<calendlyInviteePayloadsScalarWhereInput>
    NOT?: Enumerable<calendlyInviteePayloadsScalarWhereInput>
    id?: StringFilter | string
    cancel_url?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    email?: StringFilter | string
    event?: StringFilter | string
    first_name?: StringNullableFilter | string | null
    last_name?: StringNullableFilter | string | null
    name?: StringFilter | string
    new_invitee?: StringNullableFilter | string | null
    old_invitee?: StringNullableFilter | string | null
    reschedule_url?: StringFilter | string
    rescheduled?: BoolFilter | boolean
    routing_form_submission?: StringNullableFilter | string | null
    status?: StringFilter | string
    text_reminder_number?: StringNullableFilter | string | null
    timezone?: StringFilter | string
    updated_at?: DateTimeFilter | Date | string
    uri?: StringFilter | string
    clientId?: StringNullableFilter | string | null
  }

  export type CalendlyInviteePayloadsResourceCancellationUpdateInput = {
    canceled_by?: StringFieldUpdateOperationsInput | string
    canceler_type?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type NoShowUpdateInput = {
    uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateInput = {
    external_id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    terms?: StringFieldUpdateOperationsInput | string
    successful?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CalendlyInviteePayloadsResourceQuestionsAndAnswersUpdateInput = {
    answer?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
  }

  export type ReconfirmationUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type calendlyInviteePayloadsCreateManyClientInput = {
    id?: string
    cancel_url: string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableCreateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at: Date | string
    email: string
    event: string
    first_name?: string | null
    last_name?: string | null
    name: string
    new_invitee?: string | null
    no_show?: XOR<NoShowNullableCreateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: string | null
    payment?: XOR<PaymentNullableCreateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListCreateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableCreateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url: string
    rescheduled: boolean
    routing_form_submission?: string | null
    status: string
    text_reminder_number?: string | null
    timezone: string
    tracking: XOR<CalendlyInviteePayloadsResourceTrackingCreateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at: Date | string
    uri: string
  }

  export type calendlyInviteePayloadsUpdateWithoutClientInput = {
    cancel_url?: StringFieldUpdateOperationsInput | string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableUpdateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    new_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    no_show?: XOR<NoShowNullableUpdateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: XOR<PaymentNullableUpdateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListUpdateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableUpdateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url?: StringFieldUpdateOperationsInput | string
    rescheduled?: BoolFieldUpdateOperationsInput | boolean
    routing_form_submission?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    text_reminder_number?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    tracking?: XOR<CalendlyInviteePayloadsResourceTrackingUpdateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
  }

  export type calendlyInviteePayloadsUncheckedUpdateWithoutClientInput = {
    cancel_url?: StringFieldUpdateOperationsInput | string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableUpdateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    new_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    no_show?: XOR<NoShowNullableUpdateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: XOR<PaymentNullableUpdateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListUpdateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableUpdateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url?: StringFieldUpdateOperationsInput | string
    rescheduled?: BoolFieldUpdateOperationsInput | boolean
    routing_form_submission?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    text_reminder_number?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    tracking?: XOR<CalendlyInviteePayloadsResourceTrackingUpdateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
  }

  export type calendlyInviteePayloadsUncheckedUpdateManyWithoutBookingsInput = {
    cancel_url?: StringFieldUpdateOperationsInput | string
    cancellation?: XOR<CalendlyInviteePayloadsResourceCancellationNullableUpdateEnvelopeInput, CalendlyInviteePayloadsResourceCancellationCreateInput> | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    new_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    no_show?: XOR<NoShowNullableUpdateEnvelopeInput, NoShowCreateInput> | null
    old_invitee?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: XOR<PaymentNullableUpdateEnvelopeInput, PaymentCreateInput> | null
    questions_and_answers?: XOR<CalendlyInviteePayloadsResourceQuestionsAndAnswersListUpdateEnvelopeInput, Enumerable<CalendlyInviteePayloadsResourceQuestionsAndAnswersCreateInput>>
    reconfirmation?: XOR<ReconfirmationNullableUpdateEnvelopeInput, ReconfirmationCreateInput> | null
    reschedule_url?: StringFieldUpdateOperationsInput | string
    rescheduled?: BoolFieldUpdateOperationsInput | boolean
    routing_form_submission?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    text_reminder_number?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    tracking?: XOR<CalendlyInviteePayloadsResourceTrackingUpdateEnvelopeInput, CalendlyInviteePayloadsResourceTrackingCreateInput>
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uri?: StringFieldUpdateOperationsInput | string
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