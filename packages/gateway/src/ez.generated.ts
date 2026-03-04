import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import type { EZContext } from "graphql-ez";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) =>
  | Promise<import("graphql-ez").DeepPartial<TResult>>
  | import("graphql-ez").DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string | number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string | Date;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
  /** ID that parses as non-negative integer, serializes to string, and can be passed as string or number */
  IntID: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: Date;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
  /** Represents NULL values */
  Void: unknown;
};

/** User-emitted actions related to system, data mainly used for logging and modeling purposes */
export type Action = {
  __typename?: "Action";
  /** Arbitrary numeric amount */
  amount?: Maybe<Scalars["Float"]>;
  /** Related content */
  content?: Maybe<Content>;
  /** Timestamp of the action, set by the database on row creation */
  createdAt: Scalars["DateTime"];
  /** Arbitrary string content detail */
  detail?: Maybe<Scalars["String"]>;
  /** Arbitrary JSON object data */
  extra?: Maybe<Scalars["JSONObject"]>;
  /** Arbitrary hint identifier */
  hintID?: Maybe<Scalars["ID"]>;
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Related KCs */
  kcs: Array<KC>;
  /** Related poll */
  poll?: Maybe<Poll>;
  /** Arbitrary numeric result */
  result?: Maybe<Scalars["Float"]>;
  /** Arbitrary step identifier */
  stepID?: Maybe<Scalars["ID"]>;
  /** Timestamp of the action, set by the action emitter */
  timestamp: Scalars["Timestamp"];
  /** Related topic */
  topic?: Maybe<Topic>;
  /** User that emitted the action */
  user?: Maybe<User>;
  /** Type of action */
  verb: ActionVerb;
};

/** Input of action report */
export type ActionInput = {
  /** Arbitrary numeric amount */
  amount?: InputMaybe<Scalars["Float"]>;
  /**
   * Challenge identifier
   *
   * If it's numeric, it points to the "id" property of the challenge, otherwise, it points to the "code" property.
   */
  challengeID?: InputMaybe<Scalars["ID"]>;
  /**
   * Content identifier
   *
   * If it's numeric, it points to the "id" property of the content, otherwise, it points to the "code" property.
   *
   * Validation of content presence/authorization is made before confirming action
   */
  contentID?: InputMaybe<Scalars["ID"]>;
  /** Arbitrary string content detail */
  detail?: InputMaybe<Scalars["String"]>;
  /** Arbitrary JSON object data */
  extra?: InputMaybe<Scalars["JSONObject"]>;
  /** Arbitrary hint identifier */
  hintID?: InputMaybe<Scalars["ID"]>;
  /**
   * KCs identifiers
   *
   * If it's numeric, it points to the "id" property of the content, otherwise, it points to the "code" property.
   *
   * Validation of kc presence/authorization is made before confirming action
   */
  kcsIDs?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Poll identifier
   *
   * If it's numeric, it points to the "id" property of the poll, otherwise, it points to the "code" property.
   */
  pollID?: InputMaybe<Scalars["ID"]>;
  /**
   * Identifier of project related to action.
   *
   * It's verified based on authenticated user, and attached validated ids are validated against the specified project
   */
  projectId: Scalars["IntID"];
  /** Arbitrary numeric result */
  result?: InputMaybe<Scalars["Float"]>;
  /** Arbitrary step identifier */
  stepID?: InputMaybe<Scalars["ID"]>;
  /**
   * Timestamp of the action.
   *
   * Format in number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
   */
  timestamp: Scalars["Timestamp"];
  /**
   * Topic identifier
   *
   * If it's numeric, it points to the "id" property of the content, otherwise, it points to the "code" property.
   *
   * Validation of topic presence/authorization is made before confirming action
   */
  topicID?: InputMaybe<Scalars["ID"]>;
  /** Type of action, if specified verb doesn't exist, it's automatically created */
  verbName: Scalars["String"];
};

/**
 * Action Verb
 *
 * Main action categorization system
 */
export type ActionVerb = {
  __typename?: "ActionVerb";
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Name of the verb */
  name: Scalars["String"];
};

/** Paginated ActionsByContent */
export type ActionsByContentConnection = Connection & {
  __typename?: "ActionsByContentConnection";
  /** Nodes of the current page */
  nodes: Array<AllActionsByContent>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Paginated ActionsByUser */
export type ActionsByUserConnection = Connection & {
  __typename?: "ActionsByUserConnection";
  /** Nodes of the current page */
  nodes: Array<AllActionsByUser>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Paginated Actions */
export type ActionsConnection = Connection & {
  __typename?: "ActionsConnection";
  /** Nodes of the current page */
  nodes: Array<Action>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

export type ActionsTopicInput = {
  /** End interval for conducting the search. */
  endDate: Scalars["DateTime"];
  /** Array of group identifiers that will be used to filter the information corresponding to the users of those groups. */
  groupIds?: InputMaybe<Array<Scalars["Int"]>>;
  /** ID of the project. */
  projectId: Scalars["Int"];
  /** Start interval for conducting the search. */
  startDate: Scalars["DateTime"];
  /** Array of topic IDs where the search will be performed. */
  topicsIds?: InputMaybe<Array<Scalars["Int"]>>;
  /** Array of verbs to be used for action search. */
  verbNames: Array<Scalars["String"]>;
};

export type ActionsTopicQueries = {
  __typename?: "ActionsTopicQueries";
  /**
   * Returns all actions performed, grouped by Content.
   * Pagination parameters are used to control the number of returned results,
   * making this parameter mandatory.
   */
  allActionsByContent: ActionsByContentConnection;
  /**
   * Returns all actions performed, grouped by users.
   * Pagination parameters are used to control the number of returned results,
   * making this parameter mandatory.
   */
  allActionsByUser: ActionsByUserConnection;
};

export type ActionsTopicQueriesallActionsByContentArgs = {
  input: ActionsTopicInput;
  pagination: CursorConnectionArgs;
};

export type ActionsTopicQueriesallActionsByUserArgs = {
  input: ActionsTopicInput;
  pagination: CursorConnectionArgs;
};

/** Paginated Actions Verbs */
export type ActionsVerbsConnection = Connection & {
  __typename?: "ActionsVerbsConnection";
  /** Nodes of the current page */
  nodes: Array<ActionVerb>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Admin actions. If user is not admin, it will throw an error. */
export type AdminActionMutations = {
  __typename?: "AdminActionMutations";
  /** Create a poll */
  createPoll: Poll;
  hello: Scalars["String"];
  /** Update a poll */
  updatePoll: Poll;
};

/** Admin actions. If user is not admin, it will throw an error. */
export type AdminActionMutationscreatePollArgs = {
  data: PollInput;
  projectId: Scalars["IntID"];
};

/** Admin actions. If user is not admin, it will throw an error. */
export type AdminActionMutationsupdatePollArgs = {
  data: PollInput;
  id: Scalars["IntID"];
};

/** Admin Action-Related Queries */
export type AdminActionQueries = {
  __typename?: "AdminActionQueries";
  /**
   * Get all the actions currently in the system
   *
   * Pagination parameters are mandatory, but filters and orderBy are optional, and therefore the search can be customized.
   */
  allActions: ActionsConnection;
  /** Get all the action's verbs currently in the system */
  allActionsVerbs: ActionsVerbsConnection;
};

/** Admin Action-Related Queries */
export type AdminActionQueriesallActionsArgs = {
  filters?: InputMaybe<AdminActionsFilter>;
  orderBy?: InputMaybe<AdminActionsOrderBy>;
  pagination: CursorConnectionArgs;
};

/** Admin Action-Related Queries */
export type AdminActionQueriesallActionsVerbsArgs = {
  pagination: CursorConnectionArgs;
};

/** Filter all actions of admin query */
export type AdminActionsFilter = {
  /**
   * Filter by the specified content
   *
   * If action's content matches any of the specified content, the action is included
   */
  content?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified end date
   *
   * If action's timestamp is before the specified date, the action is included
   */
  endDate?: InputMaybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified KCs
   *
   * If any of the action's KCs matches any of the specified KCs, the action is included
   */
  kcs?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified projects
   *
   * If action's project matches any of the specified projects, the action is included
   */
  projects?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified starting date
   *
   * If action's timestamp is after the specified date, the action is included
   */
  startDate?: InputMaybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified topics
   *
   * If action's topic matches any of the specified topics, the action is included
   */
  topics?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified users
   *
   * If action's user matches any of the specified users, the action is included
   */
  users?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified verbs
   *
   * If action's verb matches any of the specified verbs, the action is included
   */
  verbNames?: InputMaybe<Array<Scalars["String"]>>;
};

/** Order Admin Actions */
export type AdminActionsOrderBy = {
  /**
   * Order the actions ascendingly or descendingly
   *
   * Following the cursor pagination's nature, ordering by "id" tends to follow the action creation date
   *
   * By default the actions are ordered descendingly, showing the newer actions first
   */
  id?: InputMaybe<ORDER_BY>;
};

/** Filter all content of admin query */
export type AdminContentFilter = {
  /**
   * Filter by the specified KCs
   *
   * If any of the content's KCs matches any of the specified KCs, the content is included
   */
  kcs?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified projects
   *
   * If the content's project matches any of the specified projects, the content is included
   */
  projects?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified tags
   *
   * If any of the content's tags matches any of the specified tags, the content is included
   */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  /** Filter by text search inside "code", "label", "tags" or "kcs" */
  textSearch?: InputMaybe<Scalars["String"]>;
};

/** Admin related content mutations, only authenticated users with the role "ADMIN" can access */
export type AdminContentMutations = {
  __typename?: "AdminContentMutations";
  /** Create a challenge */
  createChallenge: Challenge;
  /** Create a new content entity */
  createContent: Content;
  /** Update a challenge */
  updateChallenge: Challenge;
  /** Update an existent content entity */
  updateContent: Content;
};

/** Admin related content mutations, only authenticated users with the role "ADMIN" can access */
export type AdminContentMutationscreateChallengeArgs = {
  data: ChallengeInput;
};

/** Admin related content mutations, only authenticated users with the role "ADMIN" can access */
export type AdminContentMutationscreateContentArgs = {
  data: CreateContent;
};

/** Admin related content mutations, only authenticated users with the role "ADMIN" can access */
export type AdminContentMutationsupdateChallengeArgs = {
  data: ChallengeInput;
  id: Scalars["IntID"];
};

/** Admin related content mutations, only authenticated users with the role "ADMIN" can access */
export type AdminContentMutationsupdateContentArgs = {
  data: UpdateContent;
};

/** Admin Content-Related Queries */
export type AdminContentQueries = {
  __typename?: "AdminContentQueries";
  /**
   * Get all the content currently in the system
   *
   * Pagination parameters are mandatory, but filters is optional, and therefore the search can be customized.
   */
  allContent: ContentConnection;
};

/** Admin Content-Related Queries */
export type AdminContentQueriesallContentArgs = {
  filters?: InputMaybe<AdminContentFilter>;
  pagination: CursorConnectionArgs;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutations = {
  __typename?: "AdminDomainMutations";
  /** Create a new domain entity */
  createDomain: Domain;
  /** Create a new KC entity */
  createKC: KC;
  /** Create a new topic entity */
  createTopic: Topic;
  /** Set KC Relation */
  setKCRelation: KCRelation;
  /** Unset KC Relation */
  unsetKCRelation?: Maybe<Scalars["Void"]>;
  /** Update an existent domain entity */
  updateDomain: Domain;
  /** Update an existent KC entity */
  updateKC: KC;
  /** Update an existent topic entity */
  updateTopic: Topic;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationscreateDomainArgs = {
  input: CreateDomain;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationscreateKCArgs = {
  data: CreateKCInput;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationscreateTopicArgs = {
  input: CreateTopic;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationssetKCRelationArgs = {
  data: KCRelationInput;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsunsetKCRelationArgs = {
  data: KCRelationInput;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsupdateDomainArgs = {
  input: UpdateDomain;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsupdateKCArgs = {
  data: UpdateKCInput;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsupdateTopicArgs = {
  input: UpdateTopic;
};

/** Admin Domain-Related Queries */
export type AdminDomainQueries = {
  __typename?: "AdminDomainQueries";
  /**
   * Get all the domains currently in the system
   *
   * Pagination parameters are mandatory, but filters is optional, and therefore the search can be customized.
   */
  allDomains: DomainsConnection;
  /**
   * Get all the KCs currently in the system
   *
   * Pagination parameters are mandatory, but filters is optional, and therefore the search can be customized.
   */
  allKCs: KCsConnection;
  /**
   * Get all the topics currently in the system
   *
   * Pagination parameters are mandatory, but filters is optional, and therefore the search can be customized.
   */
  allTopics: TopicsConnection;
};

/** Admin Domain-Related Queries */
export type AdminDomainQueriesallDomainsArgs = {
  filters?: InputMaybe<AdminDomainsFilter>;
  pagination: CursorConnectionArgs;
};

/** Admin Domain-Related Queries */
export type AdminDomainQueriesallKCsArgs = {
  filters?: InputMaybe<AdminKCsFilter>;
  pagination: CursorConnectionArgs;
};

/** Admin Domain-Related Queries */
export type AdminDomainQueriesallTopicsArgs = {
  filters?: InputMaybe<AdminTopicsFilter>;
  pagination: CursorConnectionArgs;
};

/** Filter all domains of admin query */
export type AdminDomainsFilter = {
  /**
   * Filter by the specified projects
   *
   * If the domain's project matches any of the specified projects, the domain is included
   */
  projects?: InputMaybe<Array<Scalars["IntID"]>>;
  /** Filter by text search inside "code" or "label" */
  textSearch?: InputMaybe<Scalars["String"]>;
};

/** Filter all groups of admin query */
export type AdminGroupsFilter = {
  /**
   * Tags associated with the group
   *
   * Tags can be used to categorize or filter
   */
  tags?: InputMaybe<Array<Scalars["String"]>>;
};

/** Filter all KCs of admin query */
export type AdminKCsFilter = {
  /**
   * Filter by the specified projects
   *
   * If the KC's domain matches any of the specified projects, the KC is included
   */
  domains?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified projects
   *
   * If the KC's project matches any of the specified projects, the KC is included
   */
  projects?: InputMaybe<Array<Scalars["IntID"]>>;
  /** Filter by text search inside "code" or "label" */
  textSearch?: InputMaybe<Scalars["String"]>;
  /**
   * Filter by the specified topics
   *
   * If any of the KC's topics matches any of the specified topics, the KC is included
   */
  topics?: InputMaybe<Array<Scalars["IntID"]>>;
};

/** Admin Project-Related Mutations */
export type AdminProjectsMutations = {
  __typename?: "AdminProjectsMutations";
  /** Create a new project entity */
  createProject: Project;
  /** Update an existent project entity */
  updateProject: Project;
};

/** Admin Project-Related Mutations */
export type AdminProjectsMutationscreateProjectArgs = {
  data: CreateProject;
};

/** Admin Project-Related Mutations */
export type AdminProjectsMutationsupdateProjectArgs = {
  data: UpdateProject;
};

/** Admin Project-Related Queries */
export type AdminProjectsQueries = {
  __typename?: "AdminProjectsQueries";
  /** Get all the projects currently in the system */
  allProjects: ProjectsConnection;
};

/** Admin Project-Related Queries */
export type AdminProjectsQueriesallProjectsArgs = {
  pagination: CursorConnectionArgs;
};

/** Admin State-Related Queries */
export type AdminStateQueries = {
  __typename?: "AdminStateQueries";
  /** Get all the model states creators currently in the system */
  allModelStateCreators: ModelStateCreatorConnection;
  /** Get all the model statestypes currently in the system */
  allModelStateTypes: ModelStateTypeConnection;
  /**
   * Get all the model states currently in the system
   *
   * Pagination parameters are mandatory, but filters and orderBy are optional, and therefore the search can be customized.
   */
  allModelStates: ModelStateConnection;
};

/** Admin State-Related Queries */
export type AdminStateQueriesallModelStateCreatorsArgs = {
  pagination: CursorConnectionArgs;
};

/** Admin State-Related Queries */
export type AdminStateQueriesallModelStateTypesArgs = {
  pagination: CursorConnectionArgs;
};

/** Admin State-Related Queries */
export type AdminStateQueriesallModelStatesArgs = {
  input: ModelStateConnectionInput;
};

/** Filter all topics of admin query */
export type AdminTopicsFilter = {
  /**
   * Filter by the specified projects
   *
   * If the topic's project matches any of the specified projects, the topic is included
   */
  projects?: InputMaybe<Array<Scalars["IntID"]>>;
  /** Filter by text search inside "code", "label" or "tags" */
  textSearch?: InputMaybe<Scalars["String"]>;
};

/** Admin User-Related Queries */
export type AdminUserMutations = {
  __typename?: "AdminUserMutations";
  /** Add the users (by email) to the specified group, If already in the group, ignored */
  addUserGroups: Group;
  /** Create a new group entity */
  createGroup: Group;
  /** Import users to Auth0 and local database */
  importAuth0Users: ImportAuth0UsersResult;
  /** Remove the users (by email) from the specified group, If not found, ignored */
  removeUserGroups: Group;
  /** Set email aliases */
  setEmailAliases: Array<User>;
  /** Set the projects of the specified users */
  setProjectsToUsers: Array<User>;
  /** Set the users (by email) associated with the groups */
  setUserGroups: Array<Group>;
  /** Test if Auth0 Management API credentials are valid */
  testAuth0Credentials: Scalars["Boolean"];
  /** Update an existent group entity */
  updateGroup: Group;
  /** Update an existent user entity */
  updateUser: User;
  /** Upsert specified users with specified projects */
  upsertUsersWithProjects: Array<User>;
};

/** Admin User-Related Queries */
export type AdminUserMutationsaddUserGroupsArgs = {
  groupId: Scalars["IntID"];
  usersEmails: Array<Scalars["EmailAddress"]>;
};

/** Admin User-Related Queries */
export type AdminUserMutationscreateGroupArgs = {
  data: CreateGroupInput;
};

/** Admin User-Related Queries */
export type AdminUserMutationsimportAuth0UsersArgs = {
  auth0Token: Scalars["String"];
  projectIds?: InputMaybe<Array<Scalars["IntID"]>>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
  users: Array<CreateAuth0UserInput>;
};

/** Admin User-Related Queries */
export type AdminUserMutationsremoveUserGroupsArgs = {
  groupId: Scalars["IntID"];
  usersEmails: Array<Scalars["EmailAddress"]>;
};

/** Admin User-Related Queries */
export type AdminUserMutationssetEmailAliasesArgs = {
  list: Array<EmailAliasInput>;
};

/** Admin User-Related Queries */
export type AdminUserMutationssetProjectsToUsersArgs = {
  projectIds: Array<Scalars["IntID"]>;
  userIds: Array<Scalars["IntID"]>;
};

/** Admin User-Related Queries */
export type AdminUserMutationssetUserGroupsArgs = {
  groupIds: Array<Scalars["IntID"]>;
  usersEmails: Array<Scalars["EmailAddress"]>;
};

/** Admin User-Related Queries */
export type AdminUserMutationstestAuth0CredentialsArgs = {
  auth0Token: Scalars["String"];
};

/** Admin User-Related Queries */
export type AdminUserMutationsupdateGroupArgs = {
  data: UpdateGroupInput;
};

/** Admin User-Related Queries */
export type AdminUserMutationsupdateUserArgs = {
  data: UpdateUserInput;
};

/** Admin User-Related Queries */
export type AdminUserMutationsupsertUsersWithProjectsArgs = {
  emails: Array<Scalars["EmailAddress"]>;
  projectsIds: Array<Scalars["IntID"]>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
};

/** Admin User-Related Queries */
export type AdminUserQueries = {
  __typename?: "AdminUserQueries";
  /**
   * Get all the groups currently in the system
   *
   * Pagination parameters are mandatory, but filters is optional, and therefore the search can be customized.
   */
  allGroups: GroupsConnection;
  /**
   * Get all the users currently in the system
   *
   * Pagination parameters are mandatory, but filters is optional, and therefore the search can be customized.
   */
  allUsers: UsersConnection;
};

/** Admin User-Related Queries */
export type AdminUserQueriesallGroupsArgs = {
  filters?: InputMaybe<AdminGroupsFilter>;
  pagination: CursorConnectionArgs;
};

/** Admin User-Related Queries */
export type AdminUserQueriesallUsersArgs = {
  filters?: InputMaybe<AdminUsersFilter>;
  pagination: CursorConnectionArgs;
};

/** Filter all users of admin query */
export type AdminUsersFilter = {
  /**
   * Filter by the specified tags
   *
   * If any of the user's tags matches any of the specified tags, the user is included
   */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  /** Filter by text search inside "email", "name", "tags" or "projects" */
  textSearch?: InputMaybe<Scalars["String"]>;
};

export type AllActionsByContent = {
  __typename?: "AllActionsByContent";
  /** Actions performed on the content. */
  actions: Array<Action>;
  /** Unique string identifier */
  code: Scalars["String"];
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Arbitrary JSON object data */
  json: Scalars["JSONObject"];
  /** KCs associated with the content */
  kcs: Array<KC>;
};

export type AllActionsByUser = {
  __typename?: "AllActionsByUser";
  /** Actions performed by user */
  actions: Array<Action>;
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Email Address */
  email: Scalars["String"];
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Model States associated with user */
  modelStates: Scalars["JSON"];
  /** User role */
  role: Scalars["String"];
};

/** Anonymized Model State Entity */
export type AnonymizedModelState = {
  __typename?: "AnonymizedModelState";
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Creator of model state */
  creator: Scalars["String"];
  /** Domain associated with Model State */
  domain: Domain;
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Arbitrary JSON Data */
  json: Scalars["JSON"];
  /** Type / Category of model state */
  type?: Maybe<Scalars["String"]>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
  /** Unique anonimized user hash identifier */
  userUniqueHash: Scalars["String"];
};

/** Result of creating a single Auth0 user */
export type Auth0UserCreationResult = {
  __typename?: "Auth0UserCreationResult";
  /** Email of the user */
  email: Scalars["String"];
  /** Error message if creation failed */
  error?: Maybe<Scalars["String"]>;
  /** Whether the user was created successfully */
  success: Scalars["Boolean"];
  /** The created user if successful */
  user?: Maybe<User>;
};

/** A challenge */
export type Challenge = {
  __typename?: "Challenge";
  /** Unique code for the challenge */
  code: Scalars["String"];
  /** Content of the challenge */
  content: Array<Content>;
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Description of the challenge */
  description?: Maybe<Scalars["String"]>;
  /** Enabled status of the challenge */
  enabled: Scalars["Boolean"];
  /** End date of the challenge */
  endDate?: Maybe<Scalars["DateTime"]>;
  /** Groups of the challenge */
  groups: Array<Group>;
  /** ID of the challenge */
  id: Scalars["IntID"];
  /** Project of the challenge */
  project: Project;
  /** Project ID */
  projectId: Scalars["IntID"];
  /** Start date of the challenge */
  startDate?: Maybe<Scalars["DateTime"]>;
  /** Tags for the challenge */
  tags: Array<Scalars["String"]>;
  /** Title of the challenge */
  title: Scalars["String"];
  /** Topics of the challenge */
  topics: Array<Topic>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** Input for creating or updating a challenge */
export type ChallengeInput = {
  /** Unique code for the challenge */
  code: Scalars["String"];
  /** Content of the challenge */
  contentIds?: InputMaybe<Array<Scalars["IntID"]>>;
  /** Description of the challenge */
  description?: InputMaybe<Scalars["String"]>;
  /** Enabled status of the challenge */
  enabled?: Scalars["Boolean"];
  /** End date of the challenge */
  endDate?: InputMaybe<Scalars["DateTime"]>;
  /** Groups of the challenge */
  groupsIds?: InputMaybe<Array<Scalars["IntID"]>>;
  /** Project ID */
  projectId: Scalars["IntID"];
  /** Start date of the challenge */
  startDate?: InputMaybe<Scalars["DateTime"]>;
  /** Tags for the challenge */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  /** Title of the challenge */
  title: Scalars["String"];
  /** Topics of the challenge */
  topicsIds?: InputMaybe<Array<Scalars["IntID"]>>;
};

/** Pagination Interface */
export type Connection = {
  /** Pagination information */
  pageInfo: PageInfo;
};

/** Content entity */
export type Content = {
  __typename?: "Content";
  /**
   * Binary content encoded in base64
   *
   * If present, it's guaranteed to be present alongisde binaryFilename
   */
  binaryBase64?: Maybe<Scalars["String"]>;
  /**
   * Binary content filename
   *
   * If present, it's guaranteed to be present alongisde binaryBase64
   *
   * It's required and guaranteed to contain an extension where the mimetype can be inferred
   */
  binaryFilename?: Maybe<Scalars["String"]>;
  /** Unique string identifier */
  code: Scalars["String"];
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Arbitrary content description */
  description: Scalars["String"];
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Arbitrary JSON object data */
  json?: Maybe<Scalars["JSONObject"]>;
  /** KCs associated with the content */
  kcs: Array<KC>;
  /** Human readable identifier */
  label: Scalars["String"];
  /** Project associated with the content */
  project: Project;
  /** Parameter that can be used to sort a list of content */
  sortIndex?: Maybe<Scalars["Int"]>;
  /**
   * Tags associated with the content
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
  /** Topics associated with the content */
  topics: Array<Topic>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
  /** External URL */
  url?: Maybe<Scalars["String"]>;
};

/** Paginated Content */
export type ContentConnection = Connection & {
  __typename?: "ContentConnection";
  /** Nodes of the current page */
  nodes: Array<Content>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Return selected content and properties for further analysis (model, codes of content, probabilities and tables) */
export type ContentSelectedPropsReturn = {
  __typename?: "ContentSelectedPropsReturn";
  /** All code of contents of last N contents done */
  PU: Array<Scalars["String"]>;
  /** Content selected for learner */
  contentResult: Array<ContentsSelectedReturn>;
  /** Model structure of learner composed for KC level and KC threshold */
  model: Scalars["JSON"];
  /** All codes of contents without last N contents and content dominated */
  newP: Array<Scalars["String"]>;
  /** All codes of contents of topic chapters */
  oldP: Array<Scalars["String"]>;
  /** Probability of success by average PK of exercise most difficult */
  pAVGdif: Scalars["Float"];
  /** Probability of success by average PK of exercise most similar */
  pAVGsim: Scalars["Float"];
  /** table of newP with TableReturn attributes */
  table: Array<TableReturn>;
  /** table filter with similarity less than 1 and difficulty less than difficulty of last content done (PU[0]) */
  tableDifEasy: Array<TableReturn>;
  /** table filter with similarity less than 1 and difficulty greater than difficulty of last content done (PU[0]) */
  tableDifHarder: Array<TableReturn>;
  /** table filter with similarity equals to 1 */
  tableSim: Array<TableReturn>;
  /** Return message of service */
  topicCompletedMsg: Message;
};

/** ContentSelection input data */
export type ContentSelectionInput = {
  /** Discard last N contents done (optional in query), default N= 10 */
  discardLast?: Scalars["Int"];
  /** Domain identifier */
  domainId: Scalars["IntID"];
  /** Project identifier */
  projectId: Scalars["IntID"];
  /** Topic identifier */
  topicId: Array<Scalars["IntID"]>;
  /** User identifier */
  userId: Scalars["IntID"];
  /** Range Zone proximal development(ZPD) (optional in query), default [0.4,0.6] */
  zpdRange?: InputMaybe<Array<Scalars["Float"]>>;
};

/** ContentSelection Queries */
export type ContentSelectionQueries = {
  __typename?: "ContentSelectionQueries";
  /** Get all contentSelected properties associated with the specified ContentSelectionInput */
  contentSelected: ContentSelectedPropsReturn;
};

/** ContentSelection Queries */
export type ContentSelectionQueriescontentSelectedArgs = {
  input: ContentSelectionInput;
};

/** Main structure of content selected return */
export type ContentsSelectedReturn = {
  __typename?: "ContentsSelectedReturn";
  /** Message associated to Content */
  Msg: Message;
  /** Order is 1 when Content is selected for easy criterion, 2 when Content is selected for similar criterion and 3 when Content is selected for hard criterion */
  Order: Scalars["IntID"];
  /** Content P */
  P: Content;
  /** Preferred is true when Content is the best option for learner, else false */
  Preferred: Scalars["Boolean"];
};

/** Input for creating a user in Auth0 */
export type CreateAuth0UserInput = {
  /** User email address */
  email: Scalars["EmailAddress"];
  /** User password */
  password: Scalars["String"];
};

/** Content creation input data */
export type CreateContent = {
  /**
   * Binary content encoded in base64
   *
   * If present, binaryFilename has to be specified
   */
  binaryBase64?: InputMaybe<Scalars["String"]>;
  /**
   * Binary content filename
   *
   * If present, it's required to contain an extension where the mimetype can be inferred
   */
  binaryFilename?: InputMaybe<Scalars["String"]>;
  /** Unique string identifier */
  code: Scalars["String"];
  /** Arbitrary content description */
  description: Scalars["String"];
  /** Arbitrary JSON object data */
  json?: InputMaybe<Scalars["JSONObject"]>;
  /** KCs associated with the content */
  kcs: Array<Scalars["IntID"]>;
  /** Human readable identifier */
  label: Scalars["String"];
  /** Project associated with new content */
  projectId: Scalars["IntID"];
  /**
   * Tags associated with the content
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
  /** Topics associated with the content */
  topics: Array<Scalars["IntID"]>;
  /** External URL */
  url?: InputMaybe<Scalars["URL"]>;
};

/** Domain creation input data */
export type CreateDomain = {
  /** Unique string identifier */
  code: Scalars["String"];
  /** Human readable identifier */
  label: Scalars["String"];
  /** Projects associated with domain */
  projectsIds: Array<Scalars["IntID"]>;
};

/** Group creation input data */
export type CreateGroupInput = {
  /** Unique string identifier */
  code: Scalars["String"];
  /** Permissions flags */
  flags?: InputMaybe<GroupFlagsInput>;
  /** Human readable identifier */
  label: Scalars["String"];
  /** Projects associated with the group */
  projectIds: Array<Scalars["IntID"]>;
  /**
   * Tags associated with the group
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
};

/** KC creation input data */
export type CreateKCInput = {
  /** Unique string identifier */
  code: Scalars["String"];
  /** Domain associated with KC */
  domainId: Scalars["IntID"];
  /** Human readable identifier */
  label: Scalars["String"];
};

/** Project creation input data */
export type CreateProject = {
  /** Unique string identifier */
  code: Scalars["String"];
  /** Domains associated with project */
  domains: Array<Scalars["IntID"]>;
  /** Human readable identifier */
  label: Scalars["String"];
};

/** Topic creation input data */
export type CreateTopic = {
  /** Unique string identifier */
  code: Scalars["String"];
  /** Content associated with topic */
  contentIds: Array<Scalars["IntID"]>;
  /** Human readable identifier */
  label: Scalars["String"];
  /**
   * Parent topic
   *
   * Used to set the hierarchy of topics
   */
  parentTopicId?: InputMaybe<Scalars["IntID"]>;
  /** Project associated with topic */
  projectId: Scalars["IntID"];
  /** Parameter that can be used to sort a list of topics */
  sortIndex?: InputMaybe<Scalars["Int"]>;
  /**
   * Tags associated with the topic
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
};

/**
 * Pagination parameters
 *
 * Forward pagination parameters can't be mixed with Backward pagination parameters simultaneously
 *
 * first & after => Forward Pagination
 *
 * last & before => Backward Pagination
 */
export type CursorConnectionArgs = {
  /**
   * Set the minimum boundary
   *
   * Use the "endCursor" field of "pageInfo"
   */
  after?: InputMaybe<Scalars["IntID"]>;
  /**
   * Set the maximum boundary
   *
   * Use the "startCursor" field of "pageInfo"
   */
  before?: InputMaybe<Scalars["IntID"]>;
  /**
   * Set the limit of nodes to be fetched
   *
   * It can't be more than 50
   */
  first?: InputMaybe<Scalars["NonNegativeInt"]>;
  /**
   * Set the limit of nodes to be fetched
   *
   * It can't be more than 50
   */
  last?: InputMaybe<Scalars["NonNegativeInt"]>;
};

/** Domain entity */
export type Domain = {
  __typename?: "Domain";
  /** Unique string identifier */
  code: Scalars["String"];
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** KCs associated with the domain */
  kcs: Array<KC>;
  /** Human readable identifier */
  label: Scalars["String"];
  /** Model States associated with domain */
  modelStates: ModelStateConnection;
  /** Projects associated with the domain */
  projects: Array<Project>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** Domain entity */
export type DomainmodelStatesArgs = {
  input: ModelStateConnectionInput;
};

/** Paginated Domains */
export type DomainsConnection = Connection & {
  __typename?: "DomainsConnection";
  /** Nodes of the current page */
  nodes: Array<Domain>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Input for email aliases of a specific user email */
export type EmailAliasInput = {
  /** List of email aliases */
  aliases: Array<Scalars["EmailAddress"]>;
  /** Email of user to have extra aliases */
  userEmail: Scalars["EmailAddress"];
};

/**
 * Group Entity
 *
 * - Used to group/cluster users
 * - Set permissions flags to the users
 * - Associate projects to users, allowing users to access the projects
 */
export type Group = {
  __typename?: "Group";
  /** Unique string identifier */
  code: Scalars["String"];
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Permissions flags */
  flags: GroupFlags;
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Human readable identifier */
  label: Scalars["String"];
  /** Projects associated with the group */
  projects: Array<Project>;
  /** IDs of projects associated with the group */
  projectsIds: Array<Scalars["IntID"]>;
  /**
   * Tags associated with the group
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
  /** Users associated with the group */
  users: Array<User>;
};

/** Permissions flags of group */
export type GroupFlags = {
  __typename?: "GroupFlags";
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Allows the users part of the group to read all the actions of the projects of the group */
  readProjectActions: Scalars["Boolean"];
  /** Allows the users part of the group to read all the model states of the projects of the group */
  readProjectModelStates: Scalars["Boolean"];
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** Group Flags input data */
export type GroupFlagsInput = {
  /** Allows the users part of the group to read all the actions of the projects of the group */
  readProjectActions: Scalars["Boolean"];
  /** Allows the users part of the group to read all the model states of the projects of the group */
  readProjectModelStates: Scalars["Boolean"];
};

/** Paginated Groups */
export type GroupsConnection = Connection & {
  __typename?: "GroupsConnection";
  /** Nodes of the current page */
  nodes: Array<Group>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Result of importing multiple Auth0 users */
export type ImportAuth0UsersResult = {
  __typename?: "ImportAuth0UsersResult";
  /** Number of failed user creations */
  failureCount: Scalars["Int"];
  /** Results for each user */
  results: Array<Auth0UserCreationResult>;
  /** Number of successfully created users */
  successCount: Scalars["Int"];
};

/** KC / Knowledge Component Entity */
export type KC = {
  __typename?: "KC";
  /** Unique string identifier */
  code: Scalars["String"];
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Domain associated with the KC */
  domain: Domain;
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Human readable identifier */
  label: Scalars["String"];
  /** All relations of KC */
  relations: Array<KCRelation>;
  /** Topics associated with the KC */
  topics: Array<Topic>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** Relations between KCs */
export type KCRelation = {
  __typename?: "KCRelation";
  /** Custom Comment of KC Relation */
  comment?: Maybe<Scalars["String"]>;
  /** Domain shared by both KCs */
  domain: Domain;
  /** Domain id shared by both KCs */
  domainId: Scalars["IntID"];
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** KC A */
  kcA: KC;
  /** KC A id */
  kcAId: Scalars["IntID"];
  /** KC B */
  kcB: KC;
  /** KC B id */
  kcBId: Scalars["IntID"];
  /** Custom Label of KC Relation */
  label?: Maybe<Scalars["String"]>;
  /** Type of relation */
  type: KCRelationType;
};

export type KCRelationInput = {
  /** Custom comment text */
  comment?: InputMaybe<Scalars["String"]>;
  /** KC A */
  kcA: Scalars["IntID"];
  /** KC B */
  kcB: Scalars["IntID"];
  /** Relation readable label */
  label?: InputMaybe<Scalars["String"]>;
  /** Type of KC Relation */
  type: KCRelationType;
};

/** Type of KC Relationship */
export const KCRelationType = {
  INTERACT: "INTERACT",
  PARTOF: "PARTOF",
  PREREQUISITE: "PREREQUISITE",
} as const;

export type KCRelationType =
  (typeof KCRelationType)[keyof typeof KCRelationType];
/** All the KCs associated with the specified topics */
export type KCsByTopic = {
  __typename?: "KCsByTopic";
  kcs: Array<KC>;
  topic: Topic;
};

/** Paginated KCs */
export type KCsConnection = Connection & {
  __typename?: "KCsConnection";
  /** Nodes of the current page */
  nodes: Array<KC>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Structure of message return in content selected */
export type Message = {
  __typename?: "Message";
  /** Label of message of content selected */
  label: Scalars["String"];
  /** Text of message of content selected */
  text: Scalars["String"];
};

/** Model State Entity */
export type ModelState = {
  __typename?: "ModelState";
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Creator of model state */
  creator: Scalars["String"];
  /** Domain associated with Model State */
  domain: Domain;
  id: Scalars["IntID"];
  /** Arbitrary JSON Data */
  json: Scalars["JSON"];
  /** Type / Category of model state */
  type?: Maybe<Scalars["String"]>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
  /** User associated with Model State */
  user: User;
};

/** Different types of Model State */
export const ModelStateAlgorithm = {
  BKT: "BKT",
} as const;

export type ModelStateAlgorithm =
  (typeof ModelStateAlgorithm)[keyof typeof ModelStateAlgorithm];
/** Paginated Model States */
export type ModelStateConnection = Connection & {
  __typename?: "ModelStateConnection";
  /** Nodes of the current page */
  nodes: Array<ModelState>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Pagination parameters of Model States */
export type ModelStateConnectionInput = {
  /** Customize search/filter parameters */
  filters?: InputMaybe<ModelStateFilter>;
  /** Customize order, by default it orders descendingly by id */
  orderBy?: InputMaybe<ModelStateOrderBy>;
  /** Pagination-specific parameters */
  pagination: CursorConnectionArgs;
};

/** Creators of Model States */
export type ModelStateCreator = {
  __typename?: "ModelStateCreator";
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  name: Scalars["String"];
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** Paginated Model State Creators */
export type ModelStateCreatorConnection = Connection & {
  __typename?: "ModelStateCreatorConnection";
  /** Nodes of the current page */
  nodes: Array<ModelStateCreator>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Filter model states data */
export type ModelStateFilter = {
  /**
   * Filter by the specified creators
   *
   * If the states's creator matches any of the specified creators, the state is included
   */
  creators?: InputMaybe<Array<Scalars["String"]>>;
  /**
   * Filter by the specified types
   *
   * If the state's type matches any of the specified types, the state is included
   */
  type?: InputMaybe<Array<Scalars["String"]>>;
};

/** Order Model States */
export type ModelStateOrderBy = {
  /**
   * Order the model states ascendingly or descendingly
   *
   * Following the cursor pagination's nature, ordering by "id" which should follow the state creation date
   *
   * By default the states are ordered descendingly, showing the newer states first
   */
  id?: InputMaybe<ORDER_BY>;
};

/** Types/Categories of Model States */
export type ModelStateType = {
  __typename?: "ModelStateType";
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Name of the model type */
  name: Scalars["String"];
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** Paginated Model State Types */
export type ModelStateTypeConnection = Connection & {
  __typename?: "ModelStateTypeConnection";
  /** Nodes of the current page */
  nodes: Array<ModelStateType>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

export type Mutation = {
  __typename?: "Mutation";
  /**
   * Report an action to the modeling service
   *
   * - User authentication is required
   * - Authenticated user has to be associated with specified project
   */
  action?: Maybe<Scalars["Void"]>;
  /** Admin related actions mutations, only authenticated users with the role "ADMIN" can access */
  adminActions: AdminActionMutations;
  /** Admin related content mutations, only authenticated users with the role "ADMIN" can access */
  adminContent: AdminContentMutations;
  /** Admin related domain mutations, only authenticated users with the role "ADMIN" can access */
  adminDomain: AdminDomainMutations;
  /** Admin related project mutations, only authenticated users with the role "ADMIN" can access */
  adminProjects: AdminProjectsMutations;
  /** Admin related user mutations, only authenticated users with the role "ADMIN" can access */
  adminUsers: AdminUserMutations;
  /** Returns 'Hello World!' */
  hello: Scalars["String"];
  /** Update model state with new state */
  updateModelState?: Maybe<Scalars["Void"]>;
};

export type MutationactionArgs = {
  data: ActionInput;
};

export type MutationupdateModelStateArgs = {
  input: UpdateModelStateInput;
};

/** Minimum Entity Information */
export type Node = {
  /** Unique numeric identifier */
  id: Scalars["IntID"];
};

/** Order ascendingly or descendingly */
export const ORDER_BY = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

export type ORDER_BY = (typeof ORDER_BY)[keyof typeof ORDER_BY];
/** Paginated related information */
export type PageInfo = {
  __typename?: "PageInfo";
  /** Cursor parameter normally used for forward pagination */
  endCursor?: Maybe<Scalars["String"]>;
  /** Utility field that returns "true" if a next page can be fetched */
  hasNextPage: Scalars["Boolean"];
  /** Utility field that returns "true" if a previous page can be fetched */
  hasPreviousPage: Scalars["Boolean"];
  /** Cursor parameter normally used for backward pagination */
  startCursor?: Maybe<Scalars["String"]>;
};

/** Poll entity */
export type Poll = {
  __typename?: "Poll";
  /** Unique code */
  code: Scalars["String"];
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Description of the poll */
  description?: Maybe<Scalars["String"]>;
  /** Enabled status of the poll */
  enabled: Scalars["Boolean"];
  /** Unique identifier */
  id: Scalars["IntID"];
  /** Items of the poll */
  items: Array<PollItem>;
  /** Project of the poll */
  project: Project;
  /** ID of the project of the poll */
  projectId: Scalars["IntID"];
  /** Tags of the poll */
  tags: Array<Scalars["String"]>;
  /** Title of the poll */
  title: Scalars["String"];
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** Input for creating or updating a poll */
export type PollInput = {
  /** Unique code for the poll */
  code: Scalars["String"];
  /** Description of the poll */
  description?: InputMaybe<Scalars["String"]>;
  /** Enabled status of the poll */
  enabled?: Scalars["Boolean"];
  /** Items of the poll */
  items: Array<PollItemInput>;
  /** Project ID */
  projectId: Scalars["IntID"];
  /** Tags for the poll */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  /** Title of the poll */
  title: Scalars["String"];
};

/** Poll Item */
export type PollItem = {
  __typename?: "PollItem";
  /** Content of the item */
  content: Scalars["JSON"];
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Unique identifier */
  id: Scalars["IntID"];
  /** Index of the item in the poll */
  index: Scalars["Int"];
  /** ID of the poll of the item */
  pollId: Scalars["IntID"];
  /** Tags of the item */
  tags: Array<Scalars["String"]>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** Input for creating or updating a poll item */
export type PollItemInput = {
  /** Content of the poll item */
  content: Scalars["JSON"];
  /** Tags for the poll item */
  tags?: InputMaybe<Array<Scalars["String"]>>;
};

/** Temporal granularity of the bucket. */
export const ProgressOverTimeBucket = {
  /** Group by day (UTC) */
  DAY: "DAY",
  /** Group by month (UTC) */
  MONTH: "MONTH",
  /** Group by week (UTC) */
  WEEK: "WEEK",
} as const;

export type ProgressOverTimeBucket =
  (typeof ProgressOverTimeBucket)[keyof typeof ProgressOverTimeBucket];
export type ProgressOverTimeGroupInput = {
  /** Temporary bucket (default DAY) */
  bucket?: ProgressOverTimeBucket;
  /** Current user identifier */
  currentUserId?: InputMaybe<Scalars["IntID"]>;
  /** Domain identifier */
  domainId: Scalars["IntID"];
  /** End date of the range (inclusive) */
  endDate: Scalars["DateTime"];
  /** Group identifier */
  groupId: Scalars["IntID"];
  /** List of valid KC codes */
  kcCodes: Array<Scalars["String"]>;
  /** Projects identifier */
  projectsIds: Array<Scalars["IntID"]>;
  /** Initial date of the range (inclusive) */
  startDate: Scalars["DateTime"];
};

/** Point in the time series */
export type ProgressOverTimePoint = {
  __typename?: "ProgressOverTimePoint";
  /** Bucket start time (UTC) */
  at: Scalars["DateTime"];
  /** Average level (BKT) over kcCodes */
  avgLevel?: Maybe<Scalars["Float"]>;
  /** Number of KCs actually used */
  nKcsUsed: Scalars["Int"];
  /** Solo group. Users who contributed to the average */
  nUsers?: Maybe<Scalars["Int"]>;
  /** Latest ModelState.updatedAt used within the bucket */
  snapshotUpdatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProgressOverTimeQueries = {
  __typename?: "ProgressOverTimeQueries";
  /**
   * Group series: latest snapshot per user+bucket and then
   * average across users.
   */
  groupBkt: ProgressOverTimeSeries;
  /**
   * User series: the last snapshot per bucket within the range is taken and
   * avgLevel is calculated over kcCodes.
   */
  userBkt: ProgressOverTimeSeries;
};

export type ProgressOverTimeQueriesgroupBktArgs = {
  input: ProgressOverTimeGroupInput;
};

export type ProgressOverTimeQueriesuserBktArgs = {
  input: ProgressOverTimeUserInput;
};

/** Time series (includes buckets with no data such as null) */
export type ProgressOverTimeSeries = {
  __typename?: "ProgressOverTimeSeries";
  points: Array<ProgressOverTimePoint>;
};

/** Input: individual progress series (BKT) */
export type ProgressOverTimeUserInput = {
  /** Temporary bucket (default DAY) */
  bucket?: ProgressOverTimeBucket;
  /** Domain identifier */
  domainId: Scalars["IntID"];
  /** End date of the range (inclusive) */
  endDate: Scalars["DateTime"];
  /** List of valid KC codes */
  kcCodes: Array<Scalars["String"]>;
  /** Projects identifier */
  projectsIds: Array<Scalars["IntID"]>;
  /** Initial date of the range (inclusive) */
  startDate: Scalars["DateTime"];
  /** User identifier */
  userId: Scalars["IntID"];
};

/** Project entity */
export type Project = {
  __typename?: "Project";
  /**
   * All actions of the project
   *
   * ADMIN User role or "readProjectActions" group permissions flag required
   */
  actions: ActionsConnection;
  /** Unique string identifier */
  code: Scalars["String"];
  /** Content associated with project */
  content: ContentConnection;
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Domains associated with the project */
  domains: Array<Domain>;
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Human readable identifier */
  label: Scalars["String"];
  /** Topics associated with the project */
  topics: Array<Topic>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** Project entity */
export type ProjectactionsArgs = {
  filters?: InputMaybe<ProjectActionsFilter>;
  pagination: CursorConnectionArgs;
};

/** Project entity */
export type ProjectcontentArgs = {
  filters?: InputMaybe<ProjectContentFilter>;
  pagination: CursorConnectionArgs;
};

/** Filter the actions of a project */
export type ProjectActionsFilter = {
  /**
   * Filter by the specified content
   *
   * If action's content matches any of the specified content, the action is included
   */
  content?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified end date
   *
   * If action's timestamp is before the specified date, the action is included
   */
  endDate?: InputMaybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified KCs
   *
   * If any of the action's KCs matches any of the specified KCs, the action is included
   */
  kcs?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified starting date
   *
   * If action's timestamp is after the specified date, the action is included
   */
  startDate?: InputMaybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified topics
   *
   * If action's topic matches any of the specified topics, the action is included
   */
  topics?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified users
   *
   * If action's user matches any of the specified users, the action is included
   */
  users?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified verbs
   *
   * If action's verb matches any of the specified verbs, the action is included
   */
  verbNames?: InputMaybe<Array<Scalars["String"]>>;
};

/** Filter project content */
export type ProjectContentFilter = {
  /**
   * Filter by the specified ending created date
   *
   * If content's creation date is before the specified date, the content is included
   */
  createdEndDate?: InputMaybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified starting created date
   *
   * If content's creation date is after the specified date, the content is included
   */
  createdStartDate?: InputMaybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified KCs
   *
   * If any of the content's KCs matches any of the specified KCs, the content is included
   */
  kcs?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified tags
   *
   * If any of the content's tags matches any of the specified tags, the content is included
   */
  tags?: InputMaybe<Array<Scalars["String"]>>;
  /**
   * Filter by the specified topics
   *
   * If content's topic matches any of the specified topics, the content is included
   */
  topics?: InputMaybe<Array<Scalars["IntID"]>>;
  /**
   * Filter by the specified ending last updated date
   *
   * If content's last updated date is before the specified date, the content is included
   */
  updatedEndDate?: InputMaybe<Scalars["DateTime"]>;
  /**
   * Filter by the specified starting last updated date
   *
   * If content's last updated date is after the specified date, the content is included
   */
  updatedStartDate?: InputMaybe<Scalars["DateTime"]>;
};

/** Paginated Projects */
export type ProjectsConnection = Connection & {
  __typename?: "ProjectsConnection";
  /** Nodes of the current page */
  nodes: Array<Project>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: "Query";
  /**
   * This service retrieves all actions performed on the specified topics through the input.
   * These actions are grouped by user and content.
   */
  actionsTopic: ActionsTopicQueries;
  /** Get all active challenges based on the project id and any authenticated user group */
  activeChallenges: Array<Challenge>;
  /** Get all active polls based on the project id and if any matching tags are found */
  activePolls?: Maybe<Array<Poll>>;
  /** Admin related actions queries, only authenticated users with the role "ADMIN" can access */
  adminActions: AdminActionQueries;
  /** Admin related content queries, only authenticated users with the role "ADMIN" can access */
  adminContent: AdminContentQueries;
  /** Admin related domain queries, only authenticated users with the role "ADMIN" can access */
  adminDomain: AdminDomainQueries;
  /** Project related administration queries */
  adminProjects: AdminProjectsQueries;
  /** Admin related state queries, only authenticated users with the role "ADMIN" can access */
  adminState: AdminStateQueries;
  /** Admin related user queries, only authenticated users with the role "ADMIN" can access */
  adminUsers: AdminUserQueries;
  /** Get a challenge by either its ID or code */
  challenge?: Maybe<Challenge>;
  /** Get challenges by their IDs */
  challenges: Array<Challenge>;
  /**
   * Get all the content associated with the specified identifiers
   *
   * The content data is guaranteed to follow the specified identifiers order
   *
   * If any of the specified identifiers is not found or forbidden, query fails
   */
  content: Array<Content>;
  /**
   * Get specified content by "code".
   *
   * - If user is not authenticated it throws.
   * - If authenticated user has no permissions on the corresponding project it returns NULL.
   */
  contentByCode?: Maybe<Content>;
  /** ContentSelection Query */
  contentSelection: ContentSelectionQueries;
  /** Authenticated user information */
  currentUser?: Maybe<User>;
  /**
   * Get all the domains associated with the specified identifiers
   *
   * The domains data is guaranteed to follow the specified identifiers order
   *
   * If any of the specified identifiers is not found or forbidden, query fails
   */
  domains: Array<Domain>;
  /** Anonymized model state of a group */
  groupModelStates: Array<AnonymizedModelState>;
  /**
   * Get all the groups associated with the specified identifiers
   *
   * The groups data is guaranteed to follow the specified identifiers order
   *
   * If any of the specified identifiers is not found or forbidden, query fails
   */
  groups: Array<Group>;
  /** Returns 'Hello World!' */
  hello: Scalars["String"];
  /**
   * Get all the KCs associated with the specified identifiers
   *
   * The KCs data is guaranteed to follow the specified identifiers order
   *
   * If any of the specified identifiers is not found or forbidden, query fails
   */
  kcs: Array<KC>;
  /**
   * Get all the KCs associated with the specified topics and the content of the specified topics, within that project
   *
   * If topic is not found or does not have any content, it is not included in the response
   */
  kcsByContentByTopics: Array<KCsByTopic>;
  /** Get a poll by either its code or id */
  poll?: Maybe<Poll>;
  /** Get all polls */
  polls: Array<Poll>;
  /**
   * Progress series (BKT) added by user and group.
   *
   * Returns points per bucket (DAY/WEEK/MONTH).
   */
  progressOverTime: ProgressOverTimeQueries;
  /**
   * Get specified project by either "id" or "code".
   *
   * - If user is not authenticated it will always return NULL.
   * - If authenticated user has no permissions on the specified project it returns NULL.
   */
  project?: Maybe<Project>;
  /**
   * Get all the projects associated with the specified identifiers
   *
   * The projects data is guaranteed to follow the specified identifiers order
   *
   * If any of the specified identifiers is not found or forbidden, query fails
   */
  projects: Array<Project>;
  /**
   * Get specified topic by "code".
   *
   * - If user is not authenticated it throws.
   * - If authenticated user has no permissions on the corresponding project it returns NULL.
   */
  topicByCode?: Maybe<Topic>;
  /**
   * Get all the topics associated with the specified identifiers
   *
   * The topics data is guaranteed to follow the specified identifiers order
   *
   * If any of the specified identifiers is not found or forbidden, query fails
   */
  topics: Array<Topic>;
  /**
   * Get all the users associated with the specified identifiers
   *
   * The users data is guaranteed to follow the specified identifiers order
   *
   * If any of the specified identifiers is not found or forbidden, query fails
   */
  users: Array<User>;
};

export type QueryactiveChallengesArgs = {
  projectId: Scalars["IntID"];
};

export type QueryactivePollsArgs = {
  projectId: Scalars["IntID"];
  tags: Array<Scalars["String"]>;
};

export type QuerychallengeArgs = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["IntID"]>;
};

export type QuerychallengesArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QuerycontentArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QuerycontentByCodeArgs = {
  code: Scalars["String"];
};

export type QuerydomainsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QuerygroupModelStatesArgs = {
  currentUserId?: InputMaybe<Scalars["IntID"]>;
  groupId: Scalars["IntID"];
  projectCode: Scalars["String"];
  skip?: Scalars["NonNegativeInt"];
  take?: Scalars["NonNegativeInt"];
};

export type QuerygroupsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QuerykcsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QuerykcsByContentByTopicsArgs = {
  projectCode: Scalars["String"];
  topicsCodes: Array<Scalars["String"]>;
};

export type QuerypollArgs = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["IntID"]>;
};

export type QuerypollsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryprojectArgs = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["IntID"]>;
};

export type QueryprojectsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QuerytopicByCodeArgs = {
  code: Scalars["String"];
};

export type QuerytopicsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryusersArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  /** Emits 'Hello World1', 'Hello World2', 'Hello World3', 'Hello World4' and 'Hello World5' */
  hello: Scalars["String"];
};

/** Structure of TableReturn for check result of criterion and further analysis */
export type TableReturn = {
  __typename?: "TableReturn";
  /** Code of content */
  contentCode?: Maybe<Scalars["String"]>;
  /** Value of difficulty of content */
  diff?: Maybe<Scalars["Float"]>;
  /** Probability of success by average of KCs levels of the Content */
  probSuccessAvg?: Maybe<Scalars["Float"]>;
  /** Probability of success by multiplication of KCs levels of the Content */
  probSuccessMult?: Maybe<Scalars["Float"]>;
  /** Value of similarity of content */
  sim?: Maybe<Scalars["Float"]>;
};

/** Topic entity */
export type Topic = {
  __typename?: "Topic";
  /**
   * Childrens topics
   *
   * Direct childrens of the current topic
   *
   * To build the topics tree, use the "parent" topic
   */
  childrens: Array<Topic>;
  /** Unique string identifier */
  code: Scalars["String"];
  /** Content associated with topic */
  content: Array<Content>;
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** KCs associated with the topic */
  kcs: Array<KC>;
  /** Human readable identifier */
  label: Scalars["String"];
  /**
   * Parent topic
   *
   * Used to set the hierarchy of topics
   */
  parent?: Maybe<Topic>;
  /** Project associated with the topic */
  project: Project;
  /** Parameter that can be used to sort a list of domains */
  sortIndex?: Maybe<Scalars["Int"]>;
  /**
   * Tags associated with the domain
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** Paginated Topics */
export type TopicsConnection = Connection & {
  __typename?: "TopicsConnection";
  /** Nodes of the current page */
  nodes: Array<Topic>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

/** Content update input data */
export type UpdateContent = {
  /**
   * Binary content encoded in base64
   *
   * If present, binaryFilename has to be specified
   */
  binaryBase64?: InputMaybe<Scalars["String"]>;
  /**
   * Binary content filename
   *
   * If present, it's required to contain an extension where the mimetype can be inferred
   */
  binaryFilename?: InputMaybe<Scalars["String"]>;
  /** Unique string identifier */
  code: Scalars["String"];
  /** Arbitrary content description */
  description: Scalars["String"];
  /** Current content identifier */
  id: Scalars["IntID"];
  /** Arbitrary JSON object data */
  json?: InputMaybe<Scalars["JSONObject"]>;
  /** KCs associated with the content */
  kcs: Array<Scalars["IntID"]>;
  /** Human readable identifier */
  label: Scalars["String"];
  /** Project associated with content */
  projectId: Scalars["IntID"];
  /**
   * Tags associated with the content
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
  /** Topics associated with the content */
  topics: Array<Scalars["IntID"]>;
  /** External URL */
  url?: InputMaybe<Scalars["URL"]>;
};

/** Domain update input data */
export type UpdateDomain = {
  /** Unique string identifier */
  code: Scalars["String"];
  /** Current domain identifier */
  id: Scalars["IntID"];
  /** Human readable identifier */
  label: Scalars["String"];
};

/** Group update input data */
export type UpdateGroupInput = {
  /** Unique string identifier */
  code: Scalars["String"];
  /** Permissions flags of group */
  flags?: InputMaybe<GroupFlagsInput>;
  /** Current group identifier */
  id: Scalars["IntID"];
  /** Human readable identifier */
  label: Scalars["String"];
  /** Projects associated with the group */
  projectIds: Array<Scalars["IntID"]>;
  /**
   * Tags associated with the group
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
};

export type UpdateKCInput = {
  /** Unique string identifier */
  code: Scalars["String"];
  /** Unique numeric identifier of the current KC */
  id: Scalars["IntID"];
  /** Human readable identifier */
  label: Scalars["String"];
};

/** Input to update model state */
export type UpdateModelStateInput = {
  domainID: Scalars["IntID"];
  typeModel: ModelStateAlgorithm;
  userID: Scalars["IntID"];
};

/** Project update input data */
export type UpdateProject = {
  /** Unique string identifier */
  code: Scalars["String"];
  /** Domains associated with project */
  domains: Array<Scalars["IntID"]>;
  /** Current project identifier */
  id: Scalars["IntID"];
  /** Human readable identifier */
  label: Scalars["String"];
};

/** Topic update input data */
export type UpdateTopic = {
  /** Unique string identifier */
  code: Scalars["String"];
  /** Content associated with topic */
  contentIds: Array<Scalars["IntID"]>;
  /** Current topic identifier */
  id: Scalars["IntID"];
  /** Human readable identifier */
  label: Scalars["String"];
  /**
   * Parent topic
   *
   * Used to set the hierarchy of topics
   */
  parentTopicId?: InputMaybe<Scalars["IntID"]>;
  /** Parameter that can be used to sort a list of topics */
  sortIndex?: InputMaybe<Scalars["Int"]>;
  /**
   * Tags associated with the topic
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
};

/** User update input data */
export type UpdateUserInput = {
  /** Current user identifier */
  id: Scalars["IntID"];
  /** Locked flag */
  locked: Scalars["Boolean"];
  /** Name of person */
  name?: InputMaybe<Scalars["String"]>;
  /** Projects associated with user */
  projectIds: Array<Scalars["IntID"]>;
  /** Role of user */
  role: UserRole;
  /**
   * Tags associated with the user
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
};

/** User entity */
export type User = {
  __typename?: "User";
  /**
   * Active flag
   *
   * By default it starts as "false", and the first time the user accesses the system, it's set as "true"
   */
  active: Scalars["Boolean"];
  /** Date of creation */
  createdAt: Scalars["DateTime"];
  /** Email Address */
  email: Scalars["String"];
  /** List of email aliases */
  emailAliases?: Maybe<Array<Scalars["String"]>>;
  /** Groups associated with the user */
  groups: Array<Group>;
  /** Unique numeric identifier */
  id: Scalars["IntID"];
  /** Date of latest user access */
  lastOnline?: Maybe<Scalars["DateTime"]>;
  /**
   * Locked user authentication
   *
   * If set as "true", user won't be able to use the system
   */
  locked: Scalars["Boolean"];
  /** Model States associated with user */
  modelStates: ModelStateConnection;
  /** Name of person */
  name?: Maybe<Scalars["String"]>;
  /** Picture of user, set by external authentication service */
  picture?: Maybe<Scalars["String"]>;
  /** Projects associated with the user */
  projects: Array<Project>;
  /** IDs of projects associated with the user */
  projectsIds: Array<Scalars["IntID"]>;
  /** User role, by default is USER */
  role: UserRole;
  /**
   * Tags associated with the user
   *
   * Tags can be used to categorize or filter
   */
  tags: Array<Scalars["String"]>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** User entity */
export type UsermodelStatesArgs = {
  input: ModelStateConnectionInput;
};

/** Possible roles of an authenticated user */
export const UserRole = {
  /**
   * Administrator of the system
   *
   * Most of the authorization logic is enabled
   */
  ADMIN: "ADMIN",
  /** Default user role */
  USER: "USER",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];
/** Paginated Users */
export type UsersConnection = Connection & {
  __typename?: "UsersConnection";
  /** Nodes of the current page */
  nodes: Array<User>;
  /** Pagination related information */
  pageInfo: PageInfo;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Action: ResolverTypeWrapper<Action>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  ActionInput: ActionInput;
  ActionVerb: ResolverTypeWrapper<ActionVerb>;
  ActionsByContentConnection: ResolverTypeWrapper<ActionsByContentConnection>;
  ActionsByUserConnection: ResolverTypeWrapper<ActionsByUserConnection>;
  ActionsConnection: ResolverTypeWrapper<ActionsConnection>;
  ActionsTopicInput: ActionsTopicInput;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  ActionsTopicQueries: ResolverTypeWrapper<ActionsTopicQueries>;
  ActionsVerbsConnection: ResolverTypeWrapper<ActionsVerbsConnection>;
  AdminActionMutations: ResolverTypeWrapper<AdminActionMutations>;
  AdminActionQueries: ResolverTypeWrapper<AdminActionQueries>;
  AdminActionsFilter: AdminActionsFilter;
  AdminActionsOrderBy: AdminActionsOrderBy;
  AdminContentFilter: AdminContentFilter;
  AdminContentMutations: ResolverTypeWrapper<AdminContentMutations>;
  AdminContentQueries: ResolverTypeWrapper<AdminContentQueries>;
  AdminDomainMutations: ResolverTypeWrapper<AdminDomainMutations>;
  AdminDomainQueries: ResolverTypeWrapper<AdminDomainQueries>;
  AdminDomainsFilter: AdminDomainsFilter;
  AdminGroupsFilter: AdminGroupsFilter;
  AdminKCsFilter: AdminKCsFilter;
  AdminProjectsMutations: ResolverTypeWrapper<AdminProjectsMutations>;
  AdminProjectsQueries: ResolverTypeWrapper<AdminProjectsQueries>;
  AdminStateQueries: ResolverTypeWrapper<AdminStateQueries>;
  AdminTopicsFilter: AdminTopicsFilter;
  AdminUserMutations: ResolverTypeWrapper<AdminUserMutations>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  AdminUserQueries: ResolverTypeWrapper<AdminUserQueries>;
  AdminUsersFilter: AdminUsersFilter;
  AllActionsByContent: ResolverTypeWrapper<AllActionsByContent>;
  AllActionsByUser: ResolverTypeWrapper<AllActionsByUser>;
  AnonymizedModelState: ResolverTypeWrapper<AnonymizedModelState>;
  Auth0UserCreationResult: ResolverTypeWrapper<Auth0UserCreationResult>;
  Challenge: ResolverTypeWrapper<Challenge>;
  ChallengeInput: ChallengeInput;
  Connection:
    | ResolversTypes["ActionsByContentConnection"]
    | ResolversTypes["ActionsByUserConnection"]
    | ResolversTypes["ActionsConnection"]
    | ResolversTypes["ActionsVerbsConnection"]
    | ResolversTypes["ContentConnection"]
    | ResolversTypes["DomainsConnection"]
    | ResolversTypes["GroupsConnection"]
    | ResolversTypes["KCsConnection"]
    | ResolversTypes["ModelStateConnection"]
    | ResolversTypes["ModelStateCreatorConnection"]
    | ResolversTypes["ModelStateTypeConnection"]
    | ResolversTypes["ProjectsConnection"]
    | ResolversTypes["TopicsConnection"]
    | ResolversTypes["UsersConnection"];
  Content: ResolverTypeWrapper<Content>;
  ContentConnection: ResolverTypeWrapper<ContentConnection>;
  ContentSelectedPropsReturn: ResolverTypeWrapper<ContentSelectedPropsReturn>;
  ContentSelectionInput: ContentSelectionInput;
  ContentSelectionQueries: ResolverTypeWrapper<ContentSelectionQueries>;
  ContentsSelectedReturn: ResolverTypeWrapper<ContentsSelectedReturn>;
  CreateAuth0UserInput: CreateAuth0UserInput;
  CreateContent: CreateContent;
  CreateDomain: CreateDomain;
  CreateGroupInput: CreateGroupInput;
  CreateKCInput: CreateKCInput;
  CreateProject: CreateProject;
  CreateTopic: CreateTopic;
  CursorConnectionArgs: CursorConnectionArgs;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  Domain: ResolverTypeWrapper<Domain>;
  DomainsConnection: ResolverTypeWrapper<DomainsConnection>;
  EmailAddress: ResolverTypeWrapper<Scalars["EmailAddress"]>;
  EmailAliasInput: EmailAliasInput;
  Group: ResolverTypeWrapper<Group>;
  GroupFlags: ResolverTypeWrapper<GroupFlags>;
  GroupFlagsInput: GroupFlagsInput;
  GroupsConnection: ResolverTypeWrapper<GroupsConnection>;
  ImportAuth0UsersResult: ResolverTypeWrapper<ImportAuth0UsersResult>;
  IntID: ResolverTypeWrapper<Scalars["IntID"]>;
  JSON: ResolverTypeWrapper<Scalars["JSON"]>;
  JSONObject: ResolverTypeWrapper<Scalars["JSONObject"]>;
  KC: ResolverTypeWrapper<KC>;
  KCRelation: ResolverTypeWrapper<KCRelation>;
  KCRelationInput: KCRelationInput;
  KCRelationType: KCRelationType;
  KCsByTopic: ResolverTypeWrapper<KCsByTopic>;
  KCsConnection: ResolverTypeWrapper<KCsConnection>;
  Message: ResolverTypeWrapper<Message>;
  ModelState: ResolverTypeWrapper<ModelState>;
  ModelStateAlgorithm: ModelStateAlgorithm;
  ModelStateConnection: ResolverTypeWrapper<ModelStateConnection>;
  ModelStateConnectionInput: ModelStateConnectionInput;
  ModelStateCreator: ResolverTypeWrapper<ModelStateCreator>;
  ModelStateCreatorConnection: ResolverTypeWrapper<ModelStateCreatorConnection>;
  ModelStateFilter: ModelStateFilter;
  ModelStateOrderBy: ModelStateOrderBy;
  ModelStateType: ResolverTypeWrapper<ModelStateType>;
  ModelStateTypeConnection: ResolverTypeWrapper<ModelStateTypeConnection>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: never;
  NonNegativeInt: ResolverTypeWrapper<Scalars["NonNegativeInt"]>;
  ORDER_BY: ORDER_BY;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Poll: ResolverTypeWrapper<Poll>;
  PollInput: PollInput;
  PollItem: ResolverTypeWrapper<PollItem>;
  PollItemInput: PollItemInput;
  ProgressOverTimeBucket: ProgressOverTimeBucket;
  ProgressOverTimeGroupInput: ProgressOverTimeGroupInput;
  ProgressOverTimePoint: ResolverTypeWrapper<ProgressOverTimePoint>;
  ProgressOverTimeQueries: ResolverTypeWrapper<ProgressOverTimeQueries>;
  ProgressOverTimeSeries: ResolverTypeWrapper<ProgressOverTimeSeries>;
  ProgressOverTimeUserInput: ProgressOverTimeUserInput;
  Project: ResolverTypeWrapper<Project>;
  ProjectActionsFilter: ProjectActionsFilter;
  ProjectContentFilter: ProjectContentFilter;
  ProjectsConnection: ResolverTypeWrapper<ProjectsConnection>;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  TableReturn: ResolverTypeWrapper<TableReturn>;
  Timestamp: ResolverTypeWrapper<Scalars["Timestamp"]>;
  Topic: ResolverTypeWrapper<Topic>;
  TopicsConnection: ResolverTypeWrapper<TopicsConnection>;
  URL: ResolverTypeWrapper<Scalars["URL"]>;
  UpdateContent: UpdateContent;
  UpdateDomain: UpdateDomain;
  UpdateGroupInput: UpdateGroupInput;
  UpdateKCInput: UpdateKCInput;
  UpdateModelStateInput: UpdateModelStateInput;
  UpdateProject: UpdateProject;
  UpdateTopic: UpdateTopic;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UserRole: UserRole;
  UsersConnection: ResolverTypeWrapper<UsersConnection>;
  Void: ResolverTypeWrapper<Scalars["Void"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Action: Action;
  Float: Scalars["Float"];
  String: Scalars["String"];
  ID: Scalars["ID"];
  ActionInput: ActionInput;
  ActionVerb: ActionVerb;
  ActionsByContentConnection: ActionsByContentConnection;
  ActionsByUserConnection: ActionsByUserConnection;
  ActionsConnection: ActionsConnection;
  ActionsTopicInput: ActionsTopicInput;
  Int: Scalars["Int"];
  ActionsTopicQueries: ActionsTopicQueries;
  ActionsVerbsConnection: ActionsVerbsConnection;
  AdminActionMutations: AdminActionMutations;
  AdminActionQueries: AdminActionQueries;
  AdminActionsFilter: AdminActionsFilter;
  AdminActionsOrderBy: AdminActionsOrderBy;
  AdminContentFilter: AdminContentFilter;
  AdminContentMutations: AdminContentMutations;
  AdminContentQueries: AdminContentQueries;
  AdminDomainMutations: AdminDomainMutations;
  AdminDomainQueries: AdminDomainQueries;
  AdminDomainsFilter: AdminDomainsFilter;
  AdminGroupsFilter: AdminGroupsFilter;
  AdminKCsFilter: AdminKCsFilter;
  AdminProjectsMutations: AdminProjectsMutations;
  AdminProjectsQueries: AdminProjectsQueries;
  AdminStateQueries: AdminStateQueries;
  AdminTopicsFilter: AdminTopicsFilter;
  AdminUserMutations: AdminUserMutations;
  Boolean: Scalars["Boolean"];
  AdminUserQueries: AdminUserQueries;
  AdminUsersFilter: AdminUsersFilter;
  AllActionsByContent: AllActionsByContent;
  AllActionsByUser: AllActionsByUser;
  AnonymizedModelState: AnonymizedModelState;
  Auth0UserCreationResult: Auth0UserCreationResult;
  Challenge: Challenge;
  ChallengeInput: ChallengeInput;
  Connection:
    | ResolversParentTypes["ActionsByContentConnection"]
    | ResolversParentTypes["ActionsByUserConnection"]
    | ResolversParentTypes["ActionsConnection"]
    | ResolversParentTypes["ActionsVerbsConnection"]
    | ResolversParentTypes["ContentConnection"]
    | ResolversParentTypes["DomainsConnection"]
    | ResolversParentTypes["GroupsConnection"]
    | ResolversParentTypes["KCsConnection"]
    | ResolversParentTypes["ModelStateConnection"]
    | ResolversParentTypes["ModelStateCreatorConnection"]
    | ResolversParentTypes["ModelStateTypeConnection"]
    | ResolversParentTypes["ProjectsConnection"]
    | ResolversParentTypes["TopicsConnection"]
    | ResolversParentTypes["UsersConnection"];
  Content: Content;
  ContentConnection: ContentConnection;
  ContentSelectedPropsReturn: ContentSelectedPropsReturn;
  ContentSelectionInput: ContentSelectionInput;
  ContentSelectionQueries: ContentSelectionQueries;
  ContentsSelectedReturn: ContentsSelectedReturn;
  CreateAuth0UserInput: CreateAuth0UserInput;
  CreateContent: CreateContent;
  CreateDomain: CreateDomain;
  CreateGroupInput: CreateGroupInput;
  CreateKCInput: CreateKCInput;
  CreateProject: CreateProject;
  CreateTopic: CreateTopic;
  CursorConnectionArgs: CursorConnectionArgs;
  DateTime: Scalars["DateTime"];
  Domain: Domain;
  DomainsConnection: DomainsConnection;
  EmailAddress: Scalars["EmailAddress"];
  EmailAliasInput: EmailAliasInput;
  Group: Group;
  GroupFlags: GroupFlags;
  GroupFlagsInput: GroupFlagsInput;
  GroupsConnection: GroupsConnection;
  ImportAuth0UsersResult: ImportAuth0UsersResult;
  IntID: Scalars["IntID"];
  JSON: Scalars["JSON"];
  JSONObject: Scalars["JSONObject"];
  KC: KC;
  KCRelation: KCRelation;
  KCRelationInput: KCRelationInput;
  KCsByTopic: KCsByTopic;
  KCsConnection: KCsConnection;
  Message: Message;
  ModelState: ModelState;
  ModelStateConnection: ModelStateConnection;
  ModelStateConnectionInput: ModelStateConnectionInput;
  ModelStateCreator: ModelStateCreator;
  ModelStateCreatorConnection: ModelStateCreatorConnection;
  ModelStateFilter: ModelStateFilter;
  ModelStateOrderBy: ModelStateOrderBy;
  ModelStateType: ModelStateType;
  ModelStateTypeConnection: ModelStateTypeConnection;
  Mutation: {};
  Node: never;
  NonNegativeInt: Scalars["NonNegativeInt"];
  PageInfo: PageInfo;
  Poll: Poll;
  PollInput: PollInput;
  PollItem: PollItem;
  PollItemInput: PollItemInput;
  ProgressOverTimeGroupInput: ProgressOverTimeGroupInput;
  ProgressOverTimePoint: ProgressOverTimePoint;
  ProgressOverTimeQueries: ProgressOverTimeQueries;
  ProgressOverTimeSeries: ProgressOverTimeSeries;
  ProgressOverTimeUserInput: ProgressOverTimeUserInput;
  Project: Project;
  ProjectActionsFilter: ProjectActionsFilter;
  ProjectContentFilter: ProjectContentFilter;
  ProjectsConnection: ProjectsConnection;
  Query: {};
  Subscription: {};
  TableReturn: TableReturn;
  Timestamp: Scalars["Timestamp"];
  Topic: Topic;
  TopicsConnection: TopicsConnection;
  URL: Scalars["URL"];
  UpdateContent: UpdateContent;
  UpdateDomain: UpdateDomain;
  UpdateGroupInput: UpdateGroupInput;
  UpdateKCInput: UpdateKCInput;
  UpdateModelStateInput: UpdateModelStateInput;
  UpdateProject: UpdateProject;
  UpdateTopic: UpdateTopic;
  UpdateUserInput: UpdateUserInput;
  User: User;
  UsersConnection: UsersConnection;
  Void: Scalars["Void"];
};

export type ActionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Action"] = ResolversParentTypes["Action"]
> = {
  amount?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes["Content"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  detail?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  extra?: Resolver<
    Maybe<ResolversTypes["JSONObject"]>,
    ParentType,
    ContextType
  >;
  hintID?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  kcs?: Resolver<Array<ResolversTypes["KC"]>, ParentType, ContextType>;
  poll?: Resolver<Maybe<ResolversTypes["Poll"]>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  stepID?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["Timestamp"], ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes["Topic"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  verb?: Resolver<ResolversTypes["ActionVerb"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionVerbResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ActionVerb"] = ResolversParentTypes["ActionVerb"]
> = {
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionsByContentConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ActionsByContentConnection"] = ResolversParentTypes["ActionsByContentConnection"]
> = {
  nodes?: Resolver<
    Array<ResolversTypes["AllActionsByContent"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionsByUserConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ActionsByUserConnection"] = ResolversParentTypes["ActionsByUserConnection"]
> = {
  nodes?: Resolver<
    Array<ResolversTypes["AllActionsByUser"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionsConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ActionsConnection"] = ResolversParentTypes["ActionsConnection"]
> = {
  nodes?: Resolver<Array<ResolversTypes["Action"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionsTopicQueriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ActionsTopicQueries"] = ResolversParentTypes["ActionsTopicQueries"]
> = {
  allActionsByContent?: Resolver<
    ResolversTypes["ActionsByContentConnection"],
    ParentType,
    ContextType,
    RequireFields<
      ActionsTopicQueriesallActionsByContentArgs,
      "input" | "pagination"
    >
  >;
  allActionsByUser?: Resolver<
    ResolversTypes["ActionsByUserConnection"],
    ParentType,
    ContextType,
    RequireFields<
      ActionsTopicQueriesallActionsByUserArgs,
      "input" | "pagination"
    >
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActionsVerbsConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ActionsVerbsConnection"] = ResolversParentTypes["ActionsVerbsConnection"]
> = {
  nodes?: Resolver<
    Array<ResolversTypes["ActionVerb"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminActionMutationsResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AdminActionMutations"] = ResolversParentTypes["AdminActionMutations"]
> = {
  createPoll?: Resolver<
    ResolversTypes["Poll"],
    ParentType,
    ContextType,
    RequireFields<AdminActionMutationscreatePollArgs, "data" | "projectId">
  >;
  hello?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatePoll?: Resolver<
    ResolversTypes["Poll"],
    ParentType,
    ContextType,
    RequireFields<AdminActionMutationsupdatePollArgs, "data" | "id">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminActionQueriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AdminActionQueries"] = ResolversParentTypes["AdminActionQueries"]
> = {
  allActions?: Resolver<
    ResolversTypes["ActionsConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminActionQueriesallActionsArgs, "pagination">
  >;
  allActionsVerbs?: Resolver<
    ResolversTypes["ActionsVerbsConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminActionQueriesallActionsVerbsArgs, "pagination">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminContentMutationsResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AdminContentMutations"] = ResolversParentTypes["AdminContentMutations"]
> = {
  createChallenge?: Resolver<
    ResolversTypes["Challenge"],
    ParentType,
    ContextType,
    RequireFields<AdminContentMutationscreateChallengeArgs, "data">
  >;
  createContent?: Resolver<
    ResolversTypes["Content"],
    ParentType,
    ContextType,
    RequireFields<AdminContentMutationscreateContentArgs, "data">
  >;
  updateChallenge?: Resolver<
    ResolversTypes["Challenge"],
    ParentType,
    ContextType,
    RequireFields<AdminContentMutationsupdateChallengeArgs, "data" | "id">
  >;
  updateContent?: Resolver<
    ResolversTypes["Content"],
    ParentType,
    ContextType,
    RequireFields<AdminContentMutationsupdateContentArgs, "data">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminContentQueriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AdminContentQueries"] = ResolversParentTypes["AdminContentQueries"]
> = {
  allContent?: Resolver<
    ResolversTypes["ContentConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminContentQueriesallContentArgs, "pagination">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminDomainMutationsResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AdminDomainMutations"] = ResolversParentTypes["AdminDomainMutations"]
> = {
  createDomain?: Resolver<
    ResolversTypes["Domain"],
    ParentType,
    ContextType,
    RequireFields<AdminDomainMutationscreateDomainArgs, "input">
  >;
  createKC?: Resolver<
    ResolversTypes["KC"],
    ParentType,
    ContextType,
    RequireFields<AdminDomainMutationscreateKCArgs, "data">
  >;
  createTopic?: Resolver<
    ResolversTypes["Topic"],
    ParentType,
    ContextType,
    RequireFields<AdminDomainMutationscreateTopicArgs, "input">
  >;
  setKCRelation?: Resolver<
    ResolversTypes["KCRelation"],
    ParentType,
    ContextType,
    RequireFields<AdminDomainMutationssetKCRelationArgs, "data">
  >;
  unsetKCRelation?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<AdminDomainMutationsunsetKCRelationArgs, "data">
  >;
  updateDomain?: Resolver<
    ResolversTypes["Domain"],
    ParentType,
    ContextType,
    RequireFields<AdminDomainMutationsupdateDomainArgs, "input">
  >;
  updateKC?: Resolver<
    ResolversTypes["KC"],
    ParentType,
    ContextType,
    RequireFields<AdminDomainMutationsupdateKCArgs, "data">
  >;
  updateTopic?: Resolver<
    ResolversTypes["Topic"],
    ParentType,
    ContextType,
    RequireFields<AdminDomainMutationsupdateTopicArgs, "input">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminDomainQueriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AdminDomainQueries"] = ResolversParentTypes["AdminDomainQueries"]
> = {
  allDomains?: Resolver<
    ResolversTypes["DomainsConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminDomainQueriesallDomainsArgs, "pagination">
  >;
  allKCs?: Resolver<
    ResolversTypes["KCsConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminDomainQueriesallKCsArgs, "pagination">
  >;
  allTopics?: Resolver<
    ResolversTypes["TopicsConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminDomainQueriesallTopicsArgs, "pagination">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminProjectsMutationsResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AdminProjectsMutations"] = ResolversParentTypes["AdminProjectsMutations"]
> = {
  createProject?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<AdminProjectsMutationscreateProjectArgs, "data">
  >;
  updateProject?: Resolver<
    ResolversTypes["Project"],
    ParentType,
    ContextType,
    RequireFields<AdminProjectsMutationsupdateProjectArgs, "data">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminProjectsQueriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AdminProjectsQueries"] = ResolversParentTypes["AdminProjectsQueries"]
> = {
  allProjects?: Resolver<
    ResolversTypes["ProjectsConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminProjectsQueriesallProjectsArgs, "pagination">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminStateQueriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AdminStateQueries"] = ResolversParentTypes["AdminStateQueries"]
> = {
  allModelStateCreators?: Resolver<
    ResolversTypes["ModelStateCreatorConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminStateQueriesallModelStateCreatorsArgs, "pagination">
  >;
  allModelStateTypes?: Resolver<
    ResolversTypes["ModelStateTypeConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminStateQueriesallModelStateTypesArgs, "pagination">
  >;
  allModelStates?: Resolver<
    ResolversTypes["ModelStateConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminStateQueriesallModelStatesArgs, "input">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminUserMutationsResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AdminUserMutations"] = ResolversParentTypes["AdminUserMutations"]
> = {
  addUserGroups?: Resolver<
    ResolversTypes["Group"],
    ParentType,
    ContextType,
    RequireFields<
      AdminUserMutationsaddUserGroupsArgs,
      "groupId" | "usersEmails"
    >
  >;
  createGroup?: Resolver<
    ResolversTypes["Group"],
    ParentType,
    ContextType,
    RequireFields<AdminUserMutationscreateGroupArgs, "data">
  >;
  importAuth0Users?: Resolver<
    ResolversTypes["ImportAuth0UsersResult"],
    ParentType,
    ContextType,
    RequireFields<
      AdminUserMutationsimportAuth0UsersArgs,
      "auth0Token" | "users"
    >
  >;
  removeUserGroups?: Resolver<
    ResolversTypes["Group"],
    ParentType,
    ContextType,
    RequireFields<
      AdminUserMutationsremoveUserGroupsArgs,
      "groupId" | "usersEmails"
    >
  >;
  setEmailAliases?: Resolver<
    Array<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<AdminUserMutationssetEmailAliasesArgs, "list">
  >;
  setProjectsToUsers?: Resolver<
    Array<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<
      AdminUserMutationssetProjectsToUsersArgs,
      "projectIds" | "userIds"
    >
  >;
  setUserGroups?: Resolver<
    Array<ResolversTypes["Group"]>,
    ParentType,
    ContextType,
    RequireFields<
      AdminUserMutationssetUserGroupsArgs,
      "groupIds" | "usersEmails"
    >
  >;
  testAuth0Credentials?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<AdminUserMutationstestAuth0CredentialsArgs, "auth0Token">
  >;
  updateGroup?: Resolver<
    ResolversTypes["Group"],
    ParentType,
    ContextType,
    RequireFields<AdminUserMutationsupdateGroupArgs, "data">
  >;
  updateUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<AdminUserMutationsupdateUserArgs, "data">
  >;
  upsertUsersWithProjects?: Resolver<
    Array<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<
      AdminUserMutationsupsertUsersWithProjectsArgs,
      "emails" | "projectsIds"
    >
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminUserQueriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AdminUserQueries"] = ResolversParentTypes["AdminUserQueries"]
> = {
  allGroups?: Resolver<
    ResolversTypes["GroupsConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminUserQueriesallGroupsArgs, "pagination">
  >;
  allUsers?: Resolver<
    ResolversTypes["UsersConnection"],
    ParentType,
    ContextType,
    RequireFields<AdminUserQueriesallUsersArgs, "pagination">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AllActionsByContentResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AllActionsByContent"] = ResolversParentTypes["AllActionsByContent"]
> = {
  actions?: Resolver<Array<ResolversTypes["Action"]>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  json?: Resolver<ResolversTypes["JSONObject"], ParentType, ContextType>;
  kcs?: Resolver<Array<ResolversTypes["KC"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AllActionsByUserResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AllActionsByUser"] = ResolversParentTypes["AllActionsByUser"]
> = {
  actions?: Resolver<Array<ResolversTypes["Action"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  modelStates?: Resolver<ResolversTypes["JSON"], ParentType, ContextType>;
  role?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnonymizedModelStateResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["AnonymizedModelState"] = ResolversParentTypes["AnonymizedModelState"]
> = {
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes["Domain"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  json?: Resolver<ResolversTypes["JSON"], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  userUniqueHash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Auth0UserCreationResultResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Auth0UserCreationResult"] = ResolversParentTypes["Auth0UserCreationResult"]
> = {
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Challenge"] = ResolversParentTypes["Challenge"]
> = {
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  content?: Resolver<Array<ResolversTypes["Content"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  enabled?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  endDate?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  groups?: Resolver<Array<ResolversTypes["Group"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  startDate?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  topics?: Resolver<Array<ResolversTypes["Topic"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Connection"] = ResolversParentTypes["Connection"]
> = {
  __resolveType: TypeResolveFn<
    | "ActionsByContentConnection"
    | "ActionsByUserConnection"
    | "ActionsConnection"
    | "ActionsVerbsConnection"
    | "ContentConnection"
    | "DomainsConnection"
    | "GroupsConnection"
    | "KCsConnection"
    | "ModelStateConnection"
    | "ModelStateCreatorConnection"
    | "ModelStateTypeConnection"
    | "ProjectsConnection"
    | "TopicsConnection"
    | "UsersConnection",
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
};

export type ContentResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Content"] = ResolversParentTypes["Content"]
> = {
  binaryBase64?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  binaryFilename?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  json?: Resolver<Maybe<ResolversTypes["JSONObject"]>, ParentType, ContextType>;
  kcs?: Resolver<Array<ResolversTypes["KC"]>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  sortIndex?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  topics?: Resolver<Array<ResolversTypes["Topic"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ContentConnection"] = ResolversParentTypes["ContentConnection"]
> = {
  nodes?: Resolver<Array<ResolversTypes["Content"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentSelectedPropsReturnResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ContentSelectedPropsReturn"] = ResolversParentTypes["ContentSelectedPropsReturn"]
> = {
  PU?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  contentResult?: Resolver<
    Array<ResolversTypes["ContentsSelectedReturn"]>,
    ParentType,
    ContextType
  >;
  model?: Resolver<ResolversTypes["JSON"], ParentType, ContextType>;
  newP?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  oldP?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  pAVGdif?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  pAVGsim?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  table?: Resolver<
    Array<ResolversTypes["TableReturn"]>,
    ParentType,
    ContextType
  >;
  tableDifEasy?: Resolver<
    Array<ResolversTypes["TableReturn"]>,
    ParentType,
    ContextType
  >;
  tableDifHarder?: Resolver<
    Array<ResolversTypes["TableReturn"]>,
    ParentType,
    ContextType
  >;
  tableSim?: Resolver<
    Array<ResolversTypes["TableReturn"]>,
    ParentType,
    ContextType
  >;
  topicCompletedMsg?: Resolver<
    ResolversTypes["Message"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentSelectionQueriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ContentSelectionQueries"] = ResolversParentTypes["ContentSelectionQueries"]
> = {
  contentSelected?: Resolver<
    ResolversTypes["ContentSelectedPropsReturn"],
    ParentType,
    ContextType,
    RequireFields<ContentSelectionQueriescontentSelectedArgs, "input">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentsSelectedReturnResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ContentsSelectedReturn"] = ResolversParentTypes["ContentsSelectedReturn"]
> = {
  Msg?: Resolver<ResolversTypes["Message"], ParentType, ContextType>;
  Order?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  P?: Resolver<ResolversTypes["Content"], ParentType, ContextType>;
  Preferred?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type DomainResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Domain"] = ResolversParentTypes["Domain"]
> = {
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  kcs?: Resolver<Array<ResolversTypes["KC"]>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  modelStates?: Resolver<
    ResolversTypes["ModelStateConnection"],
    ParentType,
    ContextType,
    RequireFields<DomainmodelStatesArgs, "input">
  >;
  projects?: Resolver<
    Array<ResolversTypes["Project"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DomainsConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["DomainsConnection"] = ResolversParentTypes["DomainsConnection"]
> = {
  nodes?: Resolver<Array<ResolversTypes["Domain"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EmailAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["EmailAddress"], any> {
  name: "EmailAddress";
}

export type GroupResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Group"] = ResolversParentTypes["Group"]
> = {
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  flags?: Resolver<ResolversTypes["GroupFlags"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  projects?: Resolver<
    Array<ResolversTypes["Project"]>,
    ParentType,
    ContextType
  >;
  projectsIds?: Resolver<
    Array<ResolversTypes["IntID"]>,
    ParentType,
    ContextType
  >;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupFlagsResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["GroupFlags"] = ResolversParentTypes["GroupFlags"]
> = {
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  readProjectActions?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  readProjectModelStates?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupsConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["GroupsConnection"] = ResolversParentTypes["GroupsConnection"]
> = {
  nodes?: Resolver<Array<ResolversTypes["Group"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImportAuth0UsersResultResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ImportAuth0UsersResult"] = ResolversParentTypes["ImportAuth0UsersResult"]
> = {
  failureCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  results?: Resolver<
    Array<ResolversTypes["Auth0UserCreationResult"]>,
    ParentType,
    ContextType
  >;
  successCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface IntIDScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["IntID"], any> {
  name: "IntID";
}

export interface JSONScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["JSON"], any> {
  name: "JSON";
}

export interface JSONObjectScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["JSONObject"], any> {
  name: "JSONObject";
}

export type KCResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["KC"] = ResolversParentTypes["KC"]
> = {
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes["Domain"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  relations?: Resolver<
    Array<ResolversTypes["KCRelation"]>,
    ParentType,
    ContextType
  >;
  topics?: Resolver<Array<ResolversTypes["Topic"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KCRelationResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["KCRelation"] = ResolversParentTypes["KCRelation"]
> = {
  comment?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  domain?: Resolver<ResolversTypes["Domain"], ParentType, ContextType>;
  domainId?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  kcA?: Resolver<ResolversTypes["KC"], ParentType, ContextType>;
  kcAId?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  kcB?: Resolver<ResolversTypes["KC"], ParentType, ContextType>;
  kcBId?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["KCRelationType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KCsByTopicResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["KCsByTopic"] = ResolversParentTypes["KCsByTopic"]
> = {
  kcs?: Resolver<Array<ResolversTypes["KC"]>, ParentType, ContextType>;
  topic?: Resolver<ResolversTypes["Topic"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KCsConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["KCsConnection"] = ResolversParentTypes["KCsConnection"]
> = {
  nodes?: Resolver<Array<ResolversTypes["KC"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Message"] = ResolversParentTypes["Message"]
> = {
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  text?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelStateResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ModelState"] = ResolversParentTypes["ModelState"]
> = {
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes["Domain"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  json?: Resolver<ResolversTypes["JSON"], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelStateConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ModelStateConnection"] = ResolversParentTypes["ModelStateConnection"]
> = {
  nodes?: Resolver<
    Array<ResolversTypes["ModelState"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelStateCreatorResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ModelStateCreator"] = ResolversParentTypes["ModelStateCreator"]
> = {
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelStateCreatorConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ModelStateCreatorConnection"] = ResolversParentTypes["ModelStateCreatorConnection"]
> = {
  nodes?: Resolver<
    Array<ResolversTypes["ModelStateCreator"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelStateTypeResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ModelStateType"] = ResolversParentTypes["ModelStateType"]
> = {
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelStateTypeConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ModelStateTypeConnection"] = ResolversParentTypes["ModelStateTypeConnection"]
> = {
  nodes?: Resolver<
    Array<ResolversTypes["ModelStateType"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  action?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationactionArgs, "data">
  >;
  adminActions?: Resolver<
    ResolversTypes["AdminActionMutations"],
    ParentType,
    ContextType
  >;
  adminContent?: Resolver<
    ResolversTypes["AdminContentMutations"],
    ParentType,
    ContextType
  >;
  adminDomain?: Resolver<
    ResolversTypes["AdminDomainMutations"],
    ParentType,
    ContextType
  >;
  adminProjects?: Resolver<
    ResolversTypes["AdminProjectsMutations"],
    ParentType,
    ContextType
  >;
  adminUsers?: Resolver<
    ResolversTypes["AdminUserMutations"],
    ParentType,
    ContextType
  >;
  hello?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updateModelState?: Resolver<
    Maybe<ResolversTypes["Void"]>,
    ParentType,
    ContextType,
    RequireFields<MutationupdateModelStateArgs, "input">
  >;
};

export type NodeResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Node"] = ResolversParentTypes["Node"]
> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
};

export interface NonNegativeIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NonNegativeInt"], any> {
  name: "NonNegativeInt";
}

export type PageInfoResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["PageInfo"] = ResolversParentTypes["PageInfo"]
> = {
  endCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PollResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Poll"] = ResolversParentTypes["Poll"]
> = {
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  enabled?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes["PollItem"]>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PollItemResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["PollItem"] = ResolversParentTypes["PollItem"]
> = {
  content?: Resolver<ResolversTypes["JSON"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  index?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  pollId?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressOverTimePointResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ProgressOverTimePoint"] = ResolversParentTypes["ProgressOverTimePoint"]
> = {
  at?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  avgLevel?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  nKcsUsed?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  nUsers?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  snapshotUpdatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressOverTimeQueriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ProgressOverTimeQueries"] = ResolversParentTypes["ProgressOverTimeQueries"]
> = {
  groupBkt?: Resolver<
    ResolversTypes["ProgressOverTimeSeries"],
    ParentType,
    ContextType,
    RequireFields<ProgressOverTimeQueriesgroupBktArgs, "input">
  >;
  userBkt?: Resolver<
    ResolversTypes["ProgressOverTimeSeries"],
    ParentType,
    ContextType,
    RequireFields<ProgressOverTimeQueriesuserBktArgs, "input">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressOverTimeSeriesResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ProgressOverTimeSeries"] = ResolversParentTypes["ProgressOverTimeSeries"]
> = {
  points?: Resolver<
    Array<ResolversTypes["ProgressOverTimePoint"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Project"] = ResolversParentTypes["Project"]
> = {
  actions?: Resolver<
    ResolversTypes["ActionsConnection"],
    ParentType,
    ContextType,
    RequireFields<ProjectactionsArgs, "pagination">
  >;
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  content?: Resolver<
    ResolversTypes["ContentConnection"],
    ParentType,
    ContextType,
    RequireFields<ProjectcontentArgs, "pagination">
  >;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  domains?: Resolver<Array<ResolversTypes["Domain"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  topics?: Resolver<Array<ResolversTypes["Topic"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectsConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["ProjectsConnection"] = ResolversParentTypes["ProjectsConnection"]
> = {
  nodes?: Resolver<Array<ResolversTypes["Project"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  actionsTopic?: Resolver<
    ResolversTypes["ActionsTopicQueries"],
    ParentType,
    ContextType
  >;
  activeChallenges?: Resolver<
    Array<ResolversTypes["Challenge"]>,
    ParentType,
    ContextType,
    RequireFields<QueryactiveChallengesArgs, "projectId">
  >;
  activePolls?: Resolver<
    Maybe<Array<ResolversTypes["Poll"]>>,
    ParentType,
    ContextType,
    RequireFields<QueryactivePollsArgs, "projectId" | "tags">
  >;
  adminActions?: Resolver<
    ResolversTypes["AdminActionQueries"],
    ParentType,
    ContextType
  >;
  adminContent?: Resolver<
    ResolversTypes["AdminContentQueries"],
    ParentType,
    ContextType
  >;
  adminDomain?: Resolver<
    ResolversTypes["AdminDomainQueries"],
    ParentType,
    ContextType
  >;
  adminProjects?: Resolver<
    ResolversTypes["AdminProjectsQueries"],
    ParentType,
    ContextType
  >;
  adminState?: Resolver<
    ResolversTypes["AdminStateQueries"],
    ParentType,
    ContextType
  >;
  adminUsers?: Resolver<
    ResolversTypes["AdminUserQueries"],
    ParentType,
    ContextType
  >;
  challenge?: Resolver<
    Maybe<ResolversTypes["Challenge"]>,
    ParentType,
    ContextType,
    Partial<QuerychallengeArgs>
  >;
  challenges?: Resolver<
    Array<ResolversTypes["Challenge"]>,
    ParentType,
    ContextType,
    RequireFields<QuerychallengesArgs, "ids">
  >;
  content?: Resolver<
    Array<ResolversTypes["Content"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycontentArgs, "ids">
  >;
  contentByCode?: Resolver<
    Maybe<ResolversTypes["Content"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycontentByCodeArgs, "code">
  >;
  contentSelection?: Resolver<
    ResolversTypes["ContentSelectionQueries"],
    ParentType,
    ContextType
  >;
  currentUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  domains?: Resolver<
    Array<ResolversTypes["Domain"]>,
    ParentType,
    ContextType,
    RequireFields<QuerydomainsArgs, "ids">
  >;
  groupModelStates?: Resolver<
    Array<ResolversTypes["AnonymizedModelState"]>,
    ParentType,
    ContextType,
    RequireFields<
      QuerygroupModelStatesArgs,
      "groupId" | "projectCode" | "skip" | "take"
    >
  >;
  groups?: Resolver<
    Array<ResolversTypes["Group"]>,
    ParentType,
    ContextType,
    RequireFields<QuerygroupsArgs, "ids">
  >;
  hello?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  kcs?: Resolver<
    Array<ResolversTypes["KC"]>,
    ParentType,
    ContextType,
    RequireFields<QuerykcsArgs, "ids">
  >;
  kcsByContentByTopics?: Resolver<
    Array<ResolversTypes["KCsByTopic"]>,
    ParentType,
    ContextType,
    RequireFields<QuerykcsByContentByTopicsArgs, "projectCode" | "topicsCodes">
  >;
  poll?: Resolver<
    Maybe<ResolversTypes["Poll"]>,
    ParentType,
    ContextType,
    Partial<QuerypollArgs>
  >;
  polls?: Resolver<
    Array<ResolversTypes["Poll"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypollsArgs, "ids">
  >;
  progressOverTime?: Resolver<
    ResolversTypes["ProgressOverTimeQueries"],
    ParentType,
    ContextType
  >;
  project?: Resolver<
    Maybe<ResolversTypes["Project"]>,
    ParentType,
    ContextType,
    Partial<QueryprojectArgs>
  >;
  projects?: Resolver<
    Array<ResolversTypes["Project"]>,
    ParentType,
    ContextType,
    RequireFields<QueryprojectsArgs, "ids">
  >;
  topicByCode?: Resolver<
    Maybe<ResolversTypes["Topic"]>,
    ParentType,
    ContextType,
    RequireFields<QuerytopicByCodeArgs, "code">
  >;
  topics?: Resolver<
    Array<ResolversTypes["Topic"]>,
    ParentType,
    ContextType,
    RequireFields<QuerytopicsArgs, "ids">
  >;
  users?: Resolver<
    Array<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryusersArgs, "ids">
  >;
};

export type SubscriptionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
  hello?: SubscriptionResolver<
    ResolversTypes["String"],
    "hello",
    ParentType,
    ContextType
  >;
};

export type TableReturnResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["TableReturn"] = ResolversParentTypes["TableReturn"]
> = {
  contentCode?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  diff?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  probSuccessAvg?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  probSuccessMult?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  sim?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimestampScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Timestamp"], any> {
  name: "Timestamp";
}

export type TopicResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["Topic"] = ResolversParentTypes["Topic"]
> = {
  childrens?: Resolver<Array<ResolversTypes["Topic"]>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  content?: Resolver<Array<ResolversTypes["Content"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  kcs?: Resolver<Array<ResolversTypes["KC"]>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes["Topic"]>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes["Project"], ParentType, ContextType>;
  sortIndex?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicsConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["TopicsConnection"] = ResolversParentTypes["TopicsConnection"]
> = {
  nodes?: Resolver<Array<ResolversTypes["Topic"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface URLScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["URL"], any> {
  name: "URL";
}

export type UserResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  emailAliases?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  groups?: Resolver<Array<ResolversTypes["Group"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["IntID"], ParentType, ContextType>;
  lastOnline?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  locked?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  modelStates?: Resolver<
    ResolversTypes["ModelStateConnection"],
    ParentType,
    ContextType,
    RequireFields<UsermodelStatesArgs, "input">
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  projects?: Resolver<
    Array<ResolversTypes["Project"]>,
    ParentType,
    ContextType
  >;
  projectsIds?: Resolver<
    Array<ResolversTypes["IntID"]>,
    ParentType,
    ContextType
  >;
  role?: Resolver<ResolversTypes["UserRole"], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersConnectionResolvers<
  ContextType = EZContext,
  ParentType extends ResolversParentTypes["UsersConnection"] = ResolversParentTypes["UsersConnection"]
> = {
  nodes?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VoidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Void"], any> {
  name: "Void";
}

export type Resolvers<ContextType = EZContext> = {
  Action?: ActionResolvers<ContextType>;
  ActionVerb?: ActionVerbResolvers<ContextType>;
  ActionsByContentConnection?: ActionsByContentConnectionResolvers<ContextType>;
  ActionsByUserConnection?: ActionsByUserConnectionResolvers<ContextType>;
  ActionsConnection?: ActionsConnectionResolvers<ContextType>;
  ActionsTopicQueries?: ActionsTopicQueriesResolvers<ContextType>;
  ActionsVerbsConnection?: ActionsVerbsConnectionResolvers<ContextType>;
  AdminActionMutations?: AdminActionMutationsResolvers<ContextType>;
  AdminActionQueries?: AdminActionQueriesResolvers<ContextType>;
  AdminContentMutations?: AdminContentMutationsResolvers<ContextType>;
  AdminContentQueries?: AdminContentQueriesResolvers<ContextType>;
  AdminDomainMutations?: AdminDomainMutationsResolvers<ContextType>;
  AdminDomainQueries?: AdminDomainQueriesResolvers<ContextType>;
  AdminProjectsMutations?: AdminProjectsMutationsResolvers<ContextType>;
  AdminProjectsQueries?: AdminProjectsQueriesResolvers<ContextType>;
  AdminStateQueries?: AdminStateQueriesResolvers<ContextType>;
  AdminUserMutations?: AdminUserMutationsResolvers<ContextType>;
  AdminUserQueries?: AdminUserQueriesResolvers<ContextType>;
  AllActionsByContent?: AllActionsByContentResolvers<ContextType>;
  AllActionsByUser?: AllActionsByUserResolvers<ContextType>;
  AnonymizedModelState?: AnonymizedModelStateResolvers<ContextType>;
  Auth0UserCreationResult?: Auth0UserCreationResultResolvers<ContextType>;
  Challenge?: ChallengeResolvers<ContextType>;
  Connection?: ConnectionResolvers<ContextType>;
  Content?: ContentResolvers<ContextType>;
  ContentConnection?: ContentConnectionResolvers<ContextType>;
  ContentSelectedPropsReturn?: ContentSelectedPropsReturnResolvers<ContextType>;
  ContentSelectionQueries?: ContentSelectionQueriesResolvers<ContextType>;
  ContentsSelectedReturn?: ContentsSelectedReturnResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Domain?: DomainResolvers<ContextType>;
  DomainsConnection?: DomainsConnectionResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  Group?: GroupResolvers<ContextType>;
  GroupFlags?: GroupFlagsResolvers<ContextType>;
  GroupsConnection?: GroupsConnectionResolvers<ContextType>;
  ImportAuth0UsersResult?: ImportAuth0UsersResultResolvers<ContextType>;
  IntID?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  KC?: KCResolvers<ContextType>;
  KCRelation?: KCRelationResolvers<ContextType>;
  KCsByTopic?: KCsByTopicResolvers<ContextType>;
  KCsConnection?: KCsConnectionResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  ModelState?: ModelStateResolvers<ContextType>;
  ModelStateConnection?: ModelStateConnectionResolvers<ContextType>;
  ModelStateCreator?: ModelStateCreatorResolvers<ContextType>;
  ModelStateCreatorConnection?: ModelStateCreatorConnectionResolvers<ContextType>;
  ModelStateType?: ModelStateTypeResolvers<ContextType>;
  ModelStateTypeConnection?: ModelStateTypeConnectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  NonNegativeInt?: GraphQLScalarType;
  PageInfo?: PageInfoResolvers<ContextType>;
  Poll?: PollResolvers<ContextType>;
  PollItem?: PollItemResolvers<ContextType>;
  ProgressOverTimePoint?: ProgressOverTimePointResolvers<ContextType>;
  ProgressOverTimeQueries?: ProgressOverTimeQueriesResolvers<ContextType>;
  ProgressOverTimeSeries?: ProgressOverTimeSeriesResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectsConnection?: ProjectsConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TableReturn?: TableReturnResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  Topic?: TopicResolvers<ContextType>;
  TopicsConnection?: TopicsConnectionResolvers<ContextType>;
  URL?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UsersConnection?: UsersConnectionResolvers<ContextType>;
  Void?: GraphQLScalarType;
};

declare module "graphql-ez" {
  interface EZResolvers extends Resolvers<import("graphql-ez").EZContext> {}
}
