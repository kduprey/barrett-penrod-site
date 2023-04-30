
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.13.0
 * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a"
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

exports.Prisma.CalendlyInviteePayloadsScalarFieldEnum = {
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

exports.Prisma.ClientsScalarFieldEnum = {
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

exports.Prisma.ContactsScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  message: 'message',
  timestamp: 'timestamp'
};

exports.Prisma.Qr_code_logsScalarFieldEnum = {
  id: 'id',
  flyerSize: 'flyerSize',
  campaign: 'campaign',
  designId: 'designId',
  location: 'location',
  timestamp: 'timestamp'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  contacts: 'contacts',
  qr_code_logs: 'qr_code_logs',
  calendlyInviteePayloads: 'calendlyInviteePayloads',
  clients: 'clients'
};

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
