/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
  /** ID that parses as non-negative integer, serializes to string, and can be passed as string or number */
  IntID: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: Record<string, unknown>;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: number;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
  /** Represents NULL values */
  Void: void | undefined | null;
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
  kcs: Array<Kc>;
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

export type ActionsTopicQueriesAllActionsByContentArgs = {
  input: ActionsTopicInput;
  pagination: CursorConnectionArgs;
};

export type ActionsTopicQueriesAllActionsByUserArgs = {
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
export type AdminActionMutationsCreatePollArgs = {
  data: PollInput;
  projectId: Scalars["IntID"];
};

/** Admin actions. If user is not admin, it will throw an error. */
export type AdminActionMutationsUpdatePollArgs = {
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
export type AdminActionQueriesAllActionsArgs = {
  filters?: InputMaybe<AdminActionsFilter>;
  orderBy?: InputMaybe<AdminActionsOrderBy>;
  pagination: CursorConnectionArgs;
};

/** Admin Action-Related Queries */
export type AdminActionQueriesAllActionsVerbsArgs = {
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
  id?: InputMaybe<Order_By>;
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
export type AdminContentMutationsCreateChallengeArgs = {
  data: ChallengeInput;
};

/** Admin related content mutations, only authenticated users with the role "ADMIN" can access */
export type AdminContentMutationsCreateContentArgs = {
  data: CreateContent;
};

/** Admin related content mutations, only authenticated users with the role "ADMIN" can access */
export type AdminContentMutationsUpdateChallengeArgs = {
  data: ChallengeInput;
  id: Scalars["IntID"];
};

/** Admin related content mutations, only authenticated users with the role "ADMIN" can access */
export type AdminContentMutationsUpdateContentArgs = {
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
export type AdminContentQueriesAllContentArgs = {
  filters?: InputMaybe<AdminContentFilter>;
  pagination: CursorConnectionArgs;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutations = {
  __typename?: "AdminDomainMutations";
  /** Create a new domain entity */
  createDomain: Domain;
  /** Create a new KC entity */
  createKC: Kc;
  /** Create a new topic entity */
  createTopic: Topic;
  /** Set KC Relation */
  setKCRelation: KcRelation;
  /** Unset KC Relation */
  unsetKCRelation?: Maybe<Scalars["Void"]>;
  /** Update an existent domain entity */
  updateDomain: Domain;
  /** Update an existent KC entity */
  updateKC: Kc;
  /** Update an existent topic entity */
  updateTopic: Topic;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsCreateDomainArgs = {
  input: CreateDomain;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsCreateKcArgs = {
  data: CreateKcInput;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsCreateTopicArgs = {
  input: CreateTopic;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsSetKcRelationArgs = {
  data: KcRelationInput;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsUnsetKcRelationArgs = {
  data: KcRelationInput;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsUpdateDomainArgs = {
  input: UpdateDomain;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsUpdateKcArgs = {
  data: UpdateKcInput;
};

/** Admin Domain-Related Queries */
export type AdminDomainMutationsUpdateTopicArgs = {
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
export type AdminDomainQueriesAllDomainsArgs = {
  filters?: InputMaybe<AdminDomainsFilter>;
  pagination: CursorConnectionArgs;
};

/** Admin Domain-Related Queries */
export type AdminDomainQueriesAllKCsArgs = {
  filters?: InputMaybe<AdminKCsFilter>;
  pagination: CursorConnectionArgs;
};

/** Admin Domain-Related Queries */
export type AdminDomainQueriesAllTopicsArgs = {
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
export type AdminProjectsMutationsCreateProjectArgs = {
  data: CreateProject;
};

/** Admin Project-Related Mutations */
export type AdminProjectsMutationsUpdateProjectArgs = {
  data: UpdateProject;
};

/** Admin Project-Related Queries */
export type AdminProjectsQueries = {
  __typename?: "AdminProjectsQueries";
  /** Get all the projects currently in the system */
  allProjects: ProjectsConnection;
};

/** Admin Project-Related Queries */
export type AdminProjectsQueriesAllProjectsArgs = {
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
export type AdminStateQueriesAllModelStateCreatorsArgs = {
  pagination: CursorConnectionArgs;
};

/** Admin State-Related Queries */
export type AdminStateQueriesAllModelStateTypesArgs = {
  pagination: CursorConnectionArgs;
};

/** Admin State-Related Queries */
export type AdminStateQueriesAllModelStatesArgs = {
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
export type AdminUserMutationsAddUserGroupsArgs = {
  groupId: Scalars["IntID"];
  usersEmails: Array<Scalars["EmailAddress"]>;
};

/** Admin User-Related Queries */
export type AdminUserMutationsCreateGroupArgs = {
  data: CreateGroupInput;
};

/** Admin User-Related Queries */
export type AdminUserMutationsImportAuth0UsersArgs = {
  auth0Token: Scalars["String"];
  projectIds?: InputMaybe<Array<Scalars["IntID"]>>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
  users: Array<CreateAuth0UserInput>;
};

/** Admin User-Related Queries */
export type AdminUserMutationsRemoveUserGroupsArgs = {
  groupId: Scalars["IntID"];
  usersEmails: Array<Scalars["EmailAddress"]>;
};

/** Admin User-Related Queries */
export type AdminUserMutationsSetEmailAliasesArgs = {
  list: Array<EmailAliasInput>;
};

/** Admin User-Related Queries */
export type AdminUserMutationsSetProjectsToUsersArgs = {
  projectIds: Array<Scalars["IntID"]>;
  userIds: Array<Scalars["IntID"]>;
};

/** Admin User-Related Queries */
export type AdminUserMutationsSetUserGroupsArgs = {
  groupIds: Array<Scalars["IntID"]>;
  usersEmails: Array<Scalars["EmailAddress"]>;
};

/** Admin User-Related Queries */
export type AdminUserMutationsTestAuth0CredentialsArgs = {
  auth0Token: Scalars["String"];
};

/** Admin User-Related Queries */
export type AdminUserMutationsUpdateGroupArgs = {
  data: UpdateGroupInput;
};

/** Admin User-Related Queries */
export type AdminUserMutationsUpdateUserArgs = {
  data: UpdateUserInput;
};

/** Admin User-Related Queries */
export type AdminUserMutationsUpsertUsersWithProjectsArgs = {
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
export type AdminUserQueriesAllGroupsArgs = {
  filters?: InputMaybe<AdminGroupsFilter>;
  pagination: CursorConnectionArgs;
};

/** Admin User-Related Queries */
export type AdminUserQueriesAllUsersArgs = {
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
  kcs: Array<Kc>;
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
  kcs: Array<Kc>;
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
export type ContentSelectionQueriesContentSelectedArgs = {
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
export type CreateKcInput = {
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
  kcs: Array<Kc>;
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
export type DomainModelStatesArgs = {
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
export type Kc = {
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
  relations: Array<KcRelation>;
  /** Topics associated with the KC */
  topics: Array<Topic>;
  /** Date of last update */
  updatedAt: Scalars["DateTime"];
};

/** Relations between KCs */
export type KcRelation = {
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
  kcA: Kc;
  /** KC A id */
  kcAId: Scalars["IntID"];
  /** KC B */
  kcB: Kc;
  /** KC B id */
  kcBId: Scalars["IntID"];
  /** Custom Label of KC Relation */
  label?: Maybe<Scalars["String"]>;
  /** Type of relation */
  type: KcRelationType;
};

export type KcRelationInput = {
  /** Custom comment text */
  comment?: InputMaybe<Scalars["String"]>;
  /** KC A */
  kcA: Scalars["IntID"];
  /** KC B */
  kcB: Scalars["IntID"];
  /** Relation readable label */
  label?: InputMaybe<Scalars["String"]>;
  /** Type of KC Relation */
  type: KcRelationType;
};

/** Type of KC Relationship */
export const KcRelationType = {
  Interact: "INTERACT",
  Partof: "PARTOF",
  Prerequisite: "PREREQUISITE",
} as const;

export type KcRelationType =
  (typeof KcRelationType)[keyof typeof KcRelationType];
/** All the KCs associated with the specified topics */
export type KCsByTopic = {
  __typename?: "KCsByTopic";
  kcs: Array<Kc>;
  topic: Topic;
};

/** Paginated KCs */
export type KCsConnection = Connection & {
  __typename?: "KCsConnection";
  /** Nodes of the current page */
  nodes: Array<Kc>;
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
  Bkt: "BKT",
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
  id?: InputMaybe<Order_By>;
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

export type MutationActionArgs = {
  data: ActionInput;
};

export type MutationUpdateModelStateArgs = {
  input: UpdateModelStateInput;
};

/** Minimum Entity Information */
export type Node = {
  /** Unique numeric identifier */
  id: Scalars["IntID"];
};

/** Order ascendingly or descendingly */
export const Order_By = {
  Asc: "ASC",
  Desc: "DESC",
} as const;

export type Order_By = (typeof Order_By)[keyof typeof Order_By];
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
  Day: "DAY",
  /** Group by month (UTC) */
  Month: "MONTH",
  /** Group by week (UTC) */
  Week: "WEEK",
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

export type ProgressOverTimeQueriesGroupBktArgs = {
  input: ProgressOverTimeGroupInput;
};

export type ProgressOverTimeQueriesUserBktArgs = {
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
export type ProjectActionsArgs = {
  filters?: InputMaybe<ProjectActionsFilter>;
  pagination: CursorConnectionArgs;
};

/** Project entity */
export type ProjectContentArgs = {
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
  kcs: Array<Kc>;
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

export type QueryActiveChallengesArgs = {
  projectId: Scalars["IntID"];
};

export type QueryActivePollsArgs = {
  projectId: Scalars["IntID"];
  tags: Array<Scalars["String"]>;
};

export type QueryChallengeArgs = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["IntID"]>;
};

export type QueryChallengesArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryContentArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryContentByCodeArgs = {
  code: Scalars["String"];
};

export type QueryDomainsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryGroupModelStatesArgs = {
  currentUserId?: InputMaybe<Scalars["IntID"]>;
  groupId: Scalars["IntID"];
  projectCode: Scalars["String"];
  skip?: Scalars["NonNegativeInt"];
  take?: Scalars["NonNegativeInt"];
};

export type QueryGroupsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryKcsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryKcsByContentByTopicsArgs = {
  projectCode: Scalars["String"];
  topicsCodes: Array<Scalars["String"]>;
};

export type QueryPollArgs = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["IntID"]>;
};

export type QueryPollsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryProjectArgs = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["IntID"]>;
};

export type QueryProjectsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryTopicByCodeArgs = {
  code: Scalars["String"];
};

export type QueryTopicsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryUsersArgs = {
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
  kcs: Array<Kc>;
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

export type UpdateKcInput = {
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
export type UserModelStatesArgs = {
  input: ModelStateConnectionInput;
};

/** Possible roles of an authenticated user */
export const UserRole = {
  /**
   * Administrator of the system
   *
   * Most of the authorization logic is enabled
   */
  Admin: "ADMIN",
  /** Default user role */
  User: "USER",
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

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = {
  __typename?: "Query";
  currentUser?: {
    __typename?: "User";
    id: string;
    email: string;
    name?: string | null;
    role: UserRole;
    picture?: string | null;
  } | null;
};

export type AllVerbNamesQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
}>;

export type AllVerbNamesQuery = {
  __typename?: "Query";
  adminActions: {
    __typename?: "AdminActionQueries";
    allActionsVerbs: {
      __typename?: "ActionsVerbsConnection";
      nodes: Array<{ __typename?: "ActionVerb"; id: string; name: string }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type AllContentBaseQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
  filters: AdminContentFilter;
}>;

export type AllContentBaseQuery = {
  __typename?: "Query";
  adminContent: {
    __typename?: "AdminContentQueries";
    allContent: {
      __typename?: "ContentConnection";
      nodes: Array<{
        __typename?: "Content";
        id: string;
        code: string;
        label: string;
        tags: Array<string>;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type AllDomainsBaseQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
  filters: AdminDomainsFilter;
}>;

export type AllDomainsBaseQuery = {
  __typename?: "Query";
  adminDomain: {
    __typename?: "AdminDomainQueries";
    allDomains: {
      __typename?: "DomainsConnection";
      nodes: Array<{
        __typename?: "Domain";
        id: string;
        code: string;
        label: string;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type AllGroupsBaseQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
}>;

export type AllGroupsBaseQuery = {
  __typename?: "Query";
  adminUsers: {
    __typename?: "AdminUserQueries";
    allGroups: {
      __typename?: "GroupsConnection";
      nodes: Array<{
        __typename?: "Group";
        id: string;
        code: string;
        label: string;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type AllKCsBaseQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
  filters: AdminKCsFilter;
}>;

export type AllKCsBaseQuery = {
  __typename?: "Query";
  adminDomain: {
    __typename?: "AdminDomainQueries";
    allKCs: {
      __typename?: "KCsConnection";
      nodes: Array<{
        __typename?: "KC";
        id: string;
        code: string;
        label: string;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

type Pagination_ActionsByContentConnection_Fragment = {
  __typename?: "ActionsByContentConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_ActionsByUserConnection_Fragment = {
  __typename?: "ActionsByUserConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_ActionsConnection_Fragment = {
  __typename?: "ActionsConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_ActionsVerbsConnection_Fragment = {
  __typename?: "ActionsVerbsConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_ContentConnection_Fragment = {
  __typename?: "ContentConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_DomainsConnection_Fragment = {
  __typename?: "DomainsConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_GroupsConnection_Fragment = {
  __typename?: "GroupsConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_KCsConnection_Fragment = {
  __typename?: "KCsConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_ModelStateConnection_Fragment = {
  __typename?: "ModelStateConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_ModelStateCreatorConnection_Fragment = {
  __typename?: "ModelStateCreatorConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_ModelStateTypeConnection_Fragment = {
  __typename?: "ModelStateTypeConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_ProjectsConnection_Fragment = {
  __typename?: "ProjectsConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_TopicsConnection_Fragment = {
  __typename?: "TopicsConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

type Pagination_UsersConnection_Fragment = {
  __typename?: "UsersConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

export type PaginationFragment =
  | Pagination_ActionsByContentConnection_Fragment
  | Pagination_ActionsByUserConnection_Fragment
  | Pagination_ActionsConnection_Fragment
  | Pagination_ActionsVerbsConnection_Fragment
  | Pagination_ContentConnection_Fragment
  | Pagination_DomainsConnection_Fragment
  | Pagination_GroupsConnection_Fragment
  | Pagination_KCsConnection_Fragment
  | Pagination_ModelStateConnection_Fragment
  | Pagination_ModelStateCreatorConnection_Fragment
  | Pagination_ModelStateTypeConnection_Fragment
  | Pagination_ProjectsConnection_Fragment
  | Pagination_TopicsConnection_Fragment
  | Pagination_UsersConnection_Fragment;

export type AllProjectsBaseQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
}>;

export type AllProjectsBaseQuery = {
  __typename?: "Query";
  adminProjects: {
    __typename?: "AdminProjectsQueries";
    allProjects: {
      __typename?: "ProjectsConnection";
      nodes: Array<{
        __typename?: "Project";
        id: string;
        code: string;
        label: string;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type AllTopicsBaseQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
  filters: AdminTopicsFilter;
}>;

export type AllTopicsBaseQuery = {
  __typename?: "Query";
  adminDomain: {
    __typename?: "AdminDomainQueries";
    allTopics: {
      __typename?: "TopicsConnection";
      nodes: Array<{
        __typename?: "Topic";
        id: string;
        code: string;
        label: string;
        sortIndex?: number | null;
        tags: Array<string>;
        updatedAt: string;
        createdAt: string;
        parent?: {
          __typename?: "Topic";
          id: string;
          code: string;
          label: string;
        } | null;
        project: {
          __typename?: "Project";
          id: string;
          code: string;
          label: string;
        };
        content: Array<{
          __typename?: "Content";
          id: string;
          code: string;
          label: string;
          tags: Array<string>;
        }>;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type AllUsersBaseQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
  filters: AdminUsersFilter;
}>;

export type AllUsersBaseQuery = {
  __typename?: "Query";
  adminUsers: {
    __typename?: "AdminUserQueries";
    allUsers: {
      __typename?: "UsersConnection";
      nodes: Array<{
        __typename?: "User";
        id: string;
        name?: string | null;
        email: string;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type ActionsInfoFragment = {
  __typename?: "Action";
  id: string;
  timestamp: number;
  result?: number | null;
  stepID?: string | null;
  hintID?: string | null;
  amount?: number | null;
  detail?: string | null;
  extra?: Record<string, unknown> | null;
  createdAt: string;
  verb: { __typename?: "ActionVerb"; name: string };
  user?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email: string;
  } | null;
  content?: {
    __typename?: "Content";
    id: string;
    code: string;
    label: string;
    tags: Array<string>;
  } | null;
  topic?: {
    __typename?: "Topic";
    id: string;
    code: string;
    label: string;
  } | null;
  kcs: Array<{ __typename?: "KC"; id: string; code: string; label: string }>;
};

export type AllActionsQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
  filters?: InputMaybe<AdminActionsFilter>;
}>;

export type AllActionsQuery = {
  __typename?: "Query";
  adminActions: {
    __typename?: "AdminActionQueries";
    allActions: {
      __typename?: "ActionsConnection";
      nodes: Array<{
        __typename?: "Action";
        id: string;
        timestamp: number;
        result?: number | null;
        stepID?: string | null;
        hintID?: string | null;
        amount?: number | null;
        detail?: string | null;
        extra?: Record<string, unknown> | null;
        createdAt: string;
        verb: { __typename?: "ActionVerb"; name: string };
        user?: {
          __typename?: "User";
          id: string;
          name?: string | null;
          email: string;
        } | null;
        content?: {
          __typename?: "Content";
          id: string;
          code: string;
          label: string;
          tags: Array<string>;
        } | null;
        topic?: {
          __typename?: "Topic";
          id: string;
          code: string;
          label: string;
        } | null;
        kcs: Array<{
          __typename?: "KC";
          id: string;
          code: string;
          label: string;
        }>;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type ContentInfoFragment = {
  __typename?: "Content";
  id: string;
  code: string;
  label: string;
  description: string;
  tags: Array<string>;
  binaryBase64?: string | null;
  binaryFilename?: string | null;
  json?: Record<string, unknown> | null;
  url?: string | null;
  updatedAt: string;
  createdAt: string;
  project: { __typename?: "Project"; id: string; code: string; label: string };
  kcs: Array<{ __typename?: "KC"; id: string; code: string; label: string }>;
  topics: Array<{ __typename?: "Topic"; id: string }>;
};

export type CreateContentMutationVariables = Exact<{
  data: CreateContent;
}>;

export type CreateContentMutation = {
  __typename?: "Mutation";
  adminContent: {
    __typename?: "AdminContentMutations";
    createContent: {
      __typename?: "Content";
      id: string;
      label: string;
      code: string;
    };
  };
};

export type UpdateContentMutationVariables = Exact<{
  data: UpdateContent;
}>;

export type UpdateContentMutation = {
  __typename?: "Mutation";
  adminContent: {
    __typename?: "AdminContentMutations";
    updateContent: { __typename: "Content" };
  };
};

export type AllContentQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
  filters: AdminContentFilter;
}>;

export type AllContentQuery = {
  __typename?: "Query";
  adminContent: {
    __typename?: "AdminContentQueries";
    allContent: {
      __typename?: "ContentConnection";
      nodes: Array<{
        __typename?: "Content";
        id: string;
        code: string;
        label: string;
        description: string;
        tags: Array<string>;
        binaryBase64?: string | null;
        binaryFilename?: string | null;
        json?: Record<string, unknown> | null;
        url?: string | null;
        updatedAt: string;
        createdAt: string;
        project: {
          __typename?: "Project";
          id: string;
          code: string;
          label: string;
        };
        kcs: Array<{
          __typename?: "KC";
          id: string;
          code: string;
          label: string;
        }>;
        topics: Array<{ __typename?: "Topic"; id: string }>;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type CreateDomainMutationVariables = Exact<{
  data: CreateDomain;
}>;

export type CreateDomainMutation = {
  __typename?: "Mutation";
  adminDomain: {
    __typename?: "AdminDomainMutations";
    createDomain: {
      __typename?: "Domain";
      id: string;
      label: string;
      code: string;
    };
  };
};

export type DomainInfoFragment = {
  __typename: "Domain";
  id: string;
  code: string;
  label: string;
  updatedAt: string;
  createdAt: string;
};

export type AllDomainsQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
  filters: AdminDomainsFilter;
}>;

export type AllDomainsQuery = {
  __typename?: "Query";
  adminDomain: {
    __typename?: "AdminDomainQueries";
    allDomains: {
      __typename?: "DomainsConnection";
      nodes: Array<{
        __typename: "Domain";
        id: string;
        code: string;
        label: string;
        updatedAt: string;
        createdAt: string;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type UpdateDomainMutationVariables = Exact<{
  data: UpdateDomain;
}>;

export type UpdateDomainMutation = {
  __typename?: "Mutation";
  adminDomain: {
    __typename?: "AdminDomainMutations";
    updateDomain: { __typename: "Domain" };
  };
};

export type GroupInfoFragment = {
  __typename?: "Group";
  id: string;
  code: string;
  label: string;
  updatedAt: string;
  createdAt: string;
  tags: Array<string>;
  flags: {
    __typename?: "GroupFlags";
    id: string;
    readProjectActions: boolean;
    readProjectModelStates: boolean;
  };
  projects: Array<{
    __typename?: "Project";
    id: string;
    code: string;
    label: string;
  }>;
  users: Array<{
    __typename?: "User";
    id: string;
    email: string;
    name?: string | null;
    role: UserRole;
    active: boolean;
    lastOnline?: string | null;
  }>;
};

export type AllGroupsQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
}>;

export type AllGroupsQuery = {
  __typename?: "Query";
  adminUsers: {
    __typename?: "AdminUserQueries";
    allGroups: {
      __typename?: "GroupsConnection";
      nodes: Array<{
        __typename?: "Group";
        id: string;
        code: string;
        label: string;
        updatedAt: string;
        createdAt: string;
        tags: Array<string>;
        flags: {
          __typename?: "GroupFlags";
          id: string;
          readProjectActions: boolean;
          readProjectModelStates: boolean;
        };
        projects: Array<{
          __typename?: "Project";
          id: string;
          code: string;
          label: string;
        }>;
        users: Array<{
          __typename?: "User";
          id: string;
          email: string;
          name?: string | null;
          role: UserRole;
          active: boolean;
          lastOnline?: string | null;
        }>;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type CreateGroupMutationVariables = Exact<{
  data: CreateGroupInput;
}>;

export type CreateGroupMutation = {
  __typename?: "Mutation";
  adminUsers: {
    __typename?: "AdminUserMutations";
    createGroup: {
      __typename?: "Group";
      id: string;
      label: string;
      code: string;
    };
  };
};

export type SetUserGroupsMutationVariables = Exact<{
  usersEmails: Array<Scalars["EmailAddress"]> | Scalars["EmailAddress"];
  groupIds: Array<Scalars["IntID"]> | Scalars["IntID"];
}>;

export type SetUserGroupsMutation = {
  __typename?: "Mutation";
  adminUsers: {
    __typename?: "AdminUserMutations";
    setUserGroups: Array<{ __typename: "Group" }>;
  };
};

export type AddUserToGroupsMutationVariables = Exact<{
  usersEmails: Array<Scalars["EmailAddress"]> | Scalars["EmailAddress"];
  groupId: Scalars["IntID"];
}>;

export type AddUserToGroupsMutation = {
  __typename?: "Mutation";
  adminUsers: {
    __typename?: "AdminUserMutations";
    addUserGroups: { __typename: "Group" };
  };
};

export type RemoveUsersFromGroupsMutationVariables = Exact<{
  usersEmails: Array<Scalars["EmailAddress"]> | Scalars["EmailAddress"];
  groupId: Scalars["IntID"];
}>;

export type RemoveUsersFromGroupsMutation = {
  __typename?: "Mutation";
  adminUsers: {
    __typename?: "AdminUserMutations";
    removeUserGroups: { __typename: "Group" };
  };
};

export type UpdateGroupMutationVariables = Exact<{
  data: UpdateGroupInput;
}>;

export type UpdateGroupMutation = {
  __typename?: "Mutation";
  adminUsers: {
    __typename?: "AdminUserMutations";
    updateGroup: { __typename: "Group" };
  };
};

export type KcInfoFragment = {
  __typename?: "KC";
  id: string;
  code: string;
  label: string;
  updatedAt: string;
  createdAt: string;
  domain: { __typename?: "Domain"; id: string; code: string; label: string };
};

export type CreateKcMutationVariables = Exact<{
  data: CreateKcInput;
}>;

export type CreateKcMutation = {
  __typename?: "Mutation";
  adminDomain: {
    __typename?: "AdminDomainMutations";
    createKC: { __typename?: "KC"; id: string; label: string; code: string };
  };
};

export type AllKCsQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
  filters: AdminKCsFilter;
}>;

export type AllKCsQuery = {
  __typename?: "Query";
  adminDomain: {
    __typename?: "AdminDomainQueries";
    allKCs: {
      __typename?: "KCsConnection";
      nodes: Array<{
        __typename?: "KC";
        id: string;
        code: string;
        label: string;
        updatedAt: string;
        createdAt: string;
        domain: {
          __typename?: "Domain";
          id: string;
          code: string;
          label: string;
        };
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type UpdateKcMutationVariables = Exact<{
  data: UpdateKcInput;
}>;

export type UpdateKcMutation = {
  __typename?: "Mutation";
  adminDomain: {
    __typename?: "AdminDomainMutations";
    updateKC: { __typename: "KC" };
  };
};

export type ProjectInfoFragment = {
  __typename: "Project";
  id: string;
  code: string;
  label: string;
  updatedAt: string;
  createdAt: string;
  domains: Array<{
    __typename?: "Domain";
    id: string;
    code: string;
    label: string;
  }>;
};

export type AllProjectsQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
}>;

export type AllProjectsQuery = {
  __typename?: "Query";
  adminProjects: {
    __typename?: "AdminProjectsQueries";
    allProjects: {
      __typename?: "ProjectsConnection";
      nodes: Array<{
        __typename: "Project";
        id: string;
        code: string;
        label: string;
        updatedAt: string;
        createdAt: string;
        domains: Array<{
          __typename?: "Domain";
          id: string;
          code: string;
          label: string;
        }>;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type CreateProjectMutationVariables = Exact<{
  data: CreateProject;
}>;

export type CreateProjectMutation = {
  __typename?: "Mutation";
  adminProjects: {
    __typename?: "AdminProjectsMutations";
    createProject: {
      __typename?: "Project";
      id: string;
      label: string;
      code: string;
    };
  };
};

export type UpdateProjectMutationVariables = Exact<{
  data: UpdateProject;
}>;

export type UpdateProjectMutation = {
  __typename?: "Mutation";
  adminProjects: {
    __typename?: "AdminProjectsMutations";
    updateProject: { __typename: "Project" };
  };
};

export type CreateTopicMutationVariables = Exact<{
  data: CreateTopic;
}>;

export type CreateTopicMutation = {
  __typename?: "Mutation";
  adminDomain: {
    __typename?: "AdminDomainMutations";
    createTopic: {
      __typename?: "Topic";
      id: string;
      label: string;
      code: string;
    };
  };
};

export type UpdateTopicMutationVariables = Exact<{
  data: UpdateTopic;
}>;

export type UpdateTopicMutation = {
  __typename?: "Mutation";
  adminDomain: {
    __typename?: "AdminDomainMutations";
    updateTopic: {
      __typename?: "Topic";
      id: string;
      code: string;
      label: string;
    };
  };
};

export type UserInfoFragment = {
  __typename: "User";
  id: string;
  email: string;
  name?: string | null;
  active: boolean;
  lastOnline?: string | null;
  createdAt: string;
  role: UserRole;
  updatedAt: string;
  locked: boolean;
  tags: Array<string>;
  emailAliases?: Array<string> | null;
  projects: Array<{
    __typename?: "Project";
    id: string;
    code: string;
    label: string;
  }>;
};

export type AdminUsersQueryVariables = Exact<{
  pagination: CursorConnectionArgs;
  filters?: InputMaybe<AdminUsersFilter>;
}>;

export type AdminUsersQuery = {
  __typename?: "Query";
  adminUsers: {
    __typename?: "AdminUserQueries";
    allUsers: {
      __typename?: "UsersConnection";
      nodes: Array<{
        __typename: "User";
        id: string;
        email: string;
        name?: string | null;
        active: boolean;
        lastOnline?: string | null;
        createdAt: string;
        role: UserRole;
        updatedAt: string;
        locked: boolean;
        tags: Array<string>;
        emailAliases?: Array<string> | null;
        projects: Array<{
          __typename?: "Project";
          id: string;
          code: string;
          label: string;
        }>;
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
};

export type UpsertUsersWithProjectsMutationVariables = Exact<{
  emails: Array<Scalars["EmailAddress"]> | Scalars["EmailAddress"];
  projectsIds: Array<Scalars["IntID"]> | Scalars["IntID"];
  tags: Array<Scalars["String"]> | Scalars["String"];
}>;

export type UpsertUsersWithProjectsMutation = {
  __typename?: "Mutation";
  adminUsers: {
    __typename?: "AdminUserMutations";
    upsertUsersWithProjects: Array<{
      __typename: "User";
      id: string;
      email: string;
      name?: string | null;
      active: boolean;
      lastOnline?: string | null;
      createdAt: string;
      role: UserRole;
      updatedAt: string;
      locked: boolean;
      tags: Array<string>;
      emailAliases?: Array<string> | null;
      projects: Array<{
        __typename?: "Project";
        id: string;
        code: string;
        label: string;
      }>;
    }>;
  };
};

export type SetEmailAliasesMutationVariables = Exact<{
  list: Array<EmailAliasInput> | EmailAliasInput;
}>;

export type SetEmailAliasesMutation = {
  __typename?: "Mutation";
  adminUsers: {
    __typename?: "AdminUserMutations";
    setEmailAliases: Array<{ __typename?: "User"; email: string }>;
  };
};

export type TestAuth0CredentialsMutationVariables = Exact<{
  auth0Token: Scalars["String"];
}>;

export type TestAuth0CredentialsMutation = {
  __typename?: "Mutation";
  adminUsers: {
    __typename?: "AdminUserMutations";
    testAuth0Credentials: boolean;
  };
};

export type ImportAuth0UsersMutationVariables = Exact<{
  auth0Token: Scalars["String"];
  users: Array<CreateAuth0UserInput> | CreateAuth0UserInput;
  projectIds?: InputMaybe<Array<Scalars["IntID"]> | Scalars["IntID"]>;
  tags?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type ImportAuth0UsersMutation = {
  __typename?: "Mutation";
  adminUsers: {
    __typename?: "AdminUserMutations";
    importAuth0Users: {
      __typename?: "ImportAuth0UsersResult";
      successCount: number;
      failureCount: number;
      results: Array<{
        __typename?: "Auth0UserCreationResult";
        email: string;
        success: boolean;
        error?: string | null;
        user?: {
          __typename: "User";
          id: string;
          email: string;
          name?: string | null;
          active: boolean;
          lastOnline?: string | null;
          createdAt: string;
          role: UserRole;
          updatedAt: string;
          locked: boolean;
          tags: Array<string>;
          emailAliases?: Array<string> | null;
          projects: Array<{
            __typename?: "Project";
            id: string;
            code: string;
            label: string;
          }>;
        } | null;
      }>;
    };
  };
};

export type UpdateUserMutationVariables = Exact<{
  data: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  adminUsers: {
    __typename?: "AdminUserMutations";
    updateUser: { __typename: "User" };
  };
};

export const PaginationFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Pagination" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Connection" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasPreviousPage" },
                },
                { kind: "Field", name: { kind: "Name", value: "startCursor" } },
                { kind: "Field", name: { kind: "Name", value: "endCursor" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PaginationFragment, unknown>;
export const ActionsInfoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ActionsInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Action" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "verb" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "timestamp" } },
          { kind: "Field", name: { kind: "Name", value: "result" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "content" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "topic" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "kcs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "stepID" } },
          { kind: "Field", name: { kind: "Name", value: "hintID" } },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          { kind: "Field", name: { kind: "Name", value: "detail" } },
          { kind: "Field", name: { kind: "Name", value: "extra" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ActionsInfoFragment, unknown>;
export const ContentInfoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContentInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Content" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "code" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "tags" } },
          { kind: "Field", name: { kind: "Name", value: "binaryBase64" } },
          { kind: "Field", name: { kind: "Name", value: "binaryFilename" } },
          { kind: "Field", name: { kind: "Name", value: "json" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "kcs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "topics" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ContentInfoFragment, unknown>;
export const DomainInfoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DomainInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Domain" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "code" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DomainInfoFragment, unknown>;
export const GroupInfoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GroupInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Group" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "code" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "tags" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "flags" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "readProjectActions" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "readProjectModelStates" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "projects" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "active" } },
                { kind: "Field", name: { kind: "Name", value: "lastOnline" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GroupInfoFragment, unknown>;
export const KcInfoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "KCInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "KC" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "code" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "domain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<KcInfoFragment, unknown>;
export const ProjectInfoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProjectInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Project" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "code" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "domains" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProjectInfoFragment, unknown>;
export const UserInfoFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "active" } },
          { kind: "Field", name: { kind: "Name", value: "lastOnline" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "role" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "locked" } },
          { kind: "Field", name: { kind: "Name", value: "tags" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "projects" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "emailAliases" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserInfoFragment, unknown>;
export const CurrentUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "currentUser" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "currentUser" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "picture" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
export const AllVerbNamesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllVerbNames" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminActions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allActionsVerbs" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllVerbNamesQuery, AllVerbNamesQueryVariables>;
export const AllContentBaseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllContentBase" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AdminContentFilter" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allContent" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filters" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "code" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "label" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tags" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllContentBaseQuery, AllContentBaseQueryVariables>;
export const AllDomainsBaseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllDomainsBase" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AdminDomainsFilter" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allDomains" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filters" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "code" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "label" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllDomainsBaseQuery, AllDomainsBaseQueryVariables>;
export const AllGroupsBaseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllGroupsBase" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allGroups" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "code" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "label" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllGroupsBaseQuery, AllGroupsBaseQueryVariables>;
export const AllKCsBaseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllKCsBase" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AdminKCsFilter" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allKCs" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filters" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "code" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "label" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllKCsBaseQuery, AllKCsBaseQueryVariables>;
export const AllProjectsBaseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllProjectsBase" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminProjects" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allProjects" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "code" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "label" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  AllProjectsBaseQuery,
  AllProjectsBaseQueryVariables
>;
export const AllTopicsBaseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllTopicsBase" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AdminTopicsFilter" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allTopics" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filters" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "code" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "label" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sortIndex" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "parent" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "code" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "project" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "code" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "content" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "code" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tags" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tags" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllTopicsBaseQuery, AllTopicsBaseQueryVariables>;
export const AllUsersBaseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllUsersBase" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AdminUsersFilter" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allUsers" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filters" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "email" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllUsersBaseQuery, AllUsersBaseQueryVariables>;
export const AllActionsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllActions" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "AdminActionsFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminActions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allActions" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filters" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ActionsInfo" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ActionsInfoFragmentDoc.definitions,
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllActionsQuery, AllActionsQueryVariables>;
export const CreateContentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateContent" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateContent" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "createContent" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "data" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateContentMutation,
  CreateContentMutationVariables
>;
export const UpdateContentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateContent" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateContent" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updateContent" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "data" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateContentMutation,
  UpdateContentMutationVariables
>;
export const AllContentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllContent" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AdminContentFilter" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminContent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allContent" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filters" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ContentInfo" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ContentInfoFragmentDoc.definitions,
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllContentQuery, AllContentQueryVariables>;
export const CreateDomainDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateDomain" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateDomain" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "createDomain" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "input" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateDomainMutation,
  CreateDomainMutationVariables
>;
export const AllDomainsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllDomains" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AdminDomainsFilter" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allDomains" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filters" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "DomainInfo" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...DomainInfoFragmentDoc.definitions,
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllDomainsQuery, AllDomainsQueryVariables>;
export const UpdateDomainDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateDomain" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateDomain" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updateDomain" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "input" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateDomainMutation,
  UpdateDomainMutationVariables
>;
export const AllGroupsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllGroups" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allGroups" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "GroupInfo" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...GroupInfoFragmentDoc.definitions,
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllGroupsQuery, AllGroupsQueryVariables>;
export const CreateGroupDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateGroup" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateGroupInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "createGroup" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "data" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateGroupMutation, CreateGroupMutationVariables>;
export const SetUserGroupsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SetUserGroups" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "usersEmails" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "EmailAddress" },
                },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupIds" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntID" },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "setUserGroups" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "usersEmails" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "usersEmails" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "groupIds" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupIds" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SetUserGroupsMutation,
  SetUserGroupsMutationVariables
>;
export const AddUserToGroupsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddUserToGroups" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "usersEmails" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "EmailAddress" },
                },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IntID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "addUserGroups" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupId" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "usersEmails" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "usersEmails" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddUserToGroupsMutation,
  AddUserToGroupsMutationVariables
>;
export const RemoveUsersFromGroupsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RemoveUsersFromGroups" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "usersEmails" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "EmailAddress" },
                },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IntID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "removeUserGroups" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupId" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "usersEmails" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "usersEmails" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveUsersFromGroupsMutation,
  RemoveUsersFromGroupsMutationVariables
>;
export const UpdateGroupDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateGroup" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateGroupInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updateGroup" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "data" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const CreateKcDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateKC" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateKCInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "createKC" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "data" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateKcMutation, CreateKcMutationVariables>;
export const AllKCsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllKCs" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AdminKCsFilter" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allKCs" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filters" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "KCInfo" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...KcInfoFragmentDoc.definitions,
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllKCsQuery, AllKCsQueryVariables>;
export const UpdateKcDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateKC" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateKCInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updateKC" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "data" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateKcMutation, UpdateKcMutationVariables>;
export const AllProjectsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllProjects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminProjects" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allProjects" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ProjectInfo" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ProjectInfoFragmentDoc.definitions,
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AllProjectsQuery, AllProjectsQueryVariables>;
export const CreateProjectDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateProject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateProject" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminProjects" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "createProject" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "data" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;
export const UpdateProjectDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateProject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateProject" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminProjects" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updateProject" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "data" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>;
export const CreateTopicDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateTopic" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateTopic" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "createTopic" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "input" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateTopicMutation, CreateTopicMutationVariables>;
export const UpdateTopicDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateTopic" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateTopic" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminDomain" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updateTopic" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "input" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateTopicMutation, UpdateTopicMutationVariables>;
export const AdminUsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AdminUsers" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CursorConnectionArgs" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "AdminUsersFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allUsers" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "pagination" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "pagination" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "filters" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filters" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "UserInfo" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Pagination" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...UserInfoFragmentDoc.definitions,
    ...PaginationFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AdminUsersQuery, AdminUsersQueryVariables>;
export const UpsertUsersWithProjectsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpsertUsersWithProjects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "emails" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "EmailAddress" },
                },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "projectsIds" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "IntID" },
                },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "tags" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "String" },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "upsertUsersWithProjects" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "emails" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "emails" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "projectsIds" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "projectsIds" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "tags" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "tags" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "UserInfo" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...UserInfoFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  UpsertUsersWithProjectsMutation,
  UpsertUsersWithProjectsMutationVariables
>;
export const SetEmailAliasesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SetEmailAliases" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "list" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "EmailAliasInput" },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "setEmailAliases" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "list" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "list" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SetEmailAliasesMutation,
  SetEmailAliasesMutationVariables
>;
export const TestAuth0CredentialsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "TestAuth0Credentials" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "auth0Token" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "testAuth0Credentials" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "auth0Token" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "auth0Token" },
                      },
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TestAuth0CredentialsMutation,
  TestAuth0CredentialsMutationVariables
>;
export const ImportAuth0UsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ImportAuth0Users" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "auth0Token" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "users" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "CreateAuth0UserInput" },
                },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "projectIds" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "IntID" },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "tags" } },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "importAuth0Users" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "auth0Token" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "auth0Token" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "users" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "users" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "projectIds" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "projectIds" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "tags" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "tags" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "results" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "email" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "success" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "error" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "UserInfo" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "successCount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "failureCount" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...UserInfoFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<
  ImportAuth0UsersMutation,
  ImportAuth0UsersMutationVariables
>;
export const UpdateUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "adminUsers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updateUser" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "data" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "data" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
