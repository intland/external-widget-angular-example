/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Status information of a background job
 */
export interface AbstractBackgroundJobStatusInfo {
  /** Type of status info object */
  type?: string;
}

/**
 * Abstract field
 */
export interface AbstractField {
  /** Description of a field */
  description?: string;

  /** Formula value of a field */
  formula?: string;

  /** Visibility status of a field */
  hidden?: boolean;

  /** Hide If dependency formula value of a field */
  hideIfDependencyFormula?: string;

  /**
   * Id of a field
   * @format int32
   */
  id?: number;

  /** Identifier matching the legacy REST API naming */
  legacyRestName?: string;

  /** Mandatory If dependency formula value of a field */
  mandatoryIfDependencyFormula?: string;

  /** List of statuses where the field is mandatory. */
  mandatoryInStatuses?: ChoiceOptionReference[];

  /** Name of a field */
  name?: string;

  /** Title of a field */
  title?: string;

  /** Tracker item's field name for this field */
  trackerItemField?: string;

  /** Type of a field */
  type?: string;

  /** Name of the updater/getter value model */
  valueModel?: string;
}

/**
 * Value container of a field
 */
export interface AbstractFieldValue {
  /**
   * Id of the field
   * @format int32
   */
  fieldId?: number;

  /** Name of the field */
  name?: string;

  /** Type of the field */
  type: string;
}

/**
 * Abstract outline entity
 */
export interface AbstractOutline {
  /** Indexes of the entity in the outline. */
  outlineIndexes?: OutlineIndex[];

  /** Type of the outline model */
  type?: string;
}

/**
 * Reference to an item
 */
export interface AbstractReference {
  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Name of the entity */
  name?: string;

  /** Type of a referenced object */
  type?: string;
}

/**
 * Reference to an item
 */
export interface AbstractTrackerItemReference {
  /**
   * Id of the reference/association
   * @format int32
   * @example 12142
   */
  id?: number;

  /** Tracker item revision identifier */
  itemRevision?: TrackerItemRevision;

  /**
   * Type of the relation
   * @example DownstreamTrackerItemReference
   */
  type?: string;
}

/**
 * Access permission of specific role
 */
export interface AccessPermission {
  /** Access level */
  accessLevel?: "NONE" | "READ" | "WRITE";

  /** Reference to a field of a specific tracker */
  field?: FieldReference;

  /** Reference to a project */
  project?: ProjectReference;

  /** Reference to a role */
  role?: RoleReference;
}

/**
 * Request model to provide permissions.
 */
export interface AccessPermissionsRequest {
  /** List of access permissions. */
  permissions?: AccessPermission[];
}

/**
 * Reference to an artifact
 */
export type ArtifactReference = AbstractReference;

/**
 * Artifact reference field
 */
export type ArtifactReferenceField = AbstractField;

/**
 * Model for a specific version of an artifact
 */
export interface ArtifactRevision {
  /** Summary of the change */
  changeSummary?: string;

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /**
   * The date when the entity was modified
   * @format date-time
   */
  modifiedAt?: string;

  /** Reference to a user */
  modifiedBy?: UserReference;

  /**
   * Version of the artifact
   * @format int32
   */
  version?: number;
}

/**
 * One page of artifact revisions.
 */
export interface ArtifactRevisionSearchResult {
  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /** Found artifact revision */
  revisions?: ArtifactRevision[];

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;
}

/**
 * Basic properties of a codebeamer association
 */
export interface Association {
  /**
   * Baseline ID
   * @format int32
   * @example 1
   */
  baselineId?: number;

  /**
   * Bi-directional reference
   * @example true
   */
  biDirectionalPropagation?: boolean;

  /**
   * The date when the entity was created
   * @format date-time
   */
  createdAt?: string;

  /** Reference to a user */
  createdBy?: UserReference;

  /** Description of the entity */
  description?: string;

  /** Description format of the entity */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";

  /** Reference to an item */
  from: AbstractReference;

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Name of the entity */
  name?: string;

  /**
   * Propagating dependencies
   * @example true
   */
  propagatingDependencies?: boolean;

  /**
   * Propagating suspects
   * @example true
   */
  propagatingSuspects?: boolean;

  /**
   * Reverse propagation
   * @example true
   */
  reversePropagation?: boolean;

  /** Reference to an item */
  to?: AbstractReference;

  /** Reference to an association type */
  type?: AssociationTypeReference;

  /** Association to url */
  url?: string;
}

/**
 * Basic properties of a codebeamer association type
 */
export interface AssociationType {
  /** Description of the entity */
  description?: string;

  /** Description format of the entity */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Name of the entity */
  name?: string;
}

/**
 * Reference to an association type
 */
export type AssociationTypeReference = AbstractReference;

/**
 * Attachments of a comment
 */
export interface Attachment {
  /**
   * The date when the entity was created
   * @format date-time
   */
  createdAt?: string;

  /** Reference to a user */
  createdBy?: UserReference;

  /** Description of the entity */
  description?: string;

  /** Description format of the entity */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /**
   * The date when the entity was modified
   * @format date-time
   */
  modifiedAt?: string;

  /** Reference to a user */
  modifiedBy?: UserReference;

  /** Name of the entity */
  name?: string;

  /** Hash of a attachment */
  sha512?: string;

  /**
   * Size of a attachment
   * @format int64
   */
  size?: number;

  /**
   * Version of a attachment
   * @format int32
   */
  version?: number;
}

/**
 * Request for migrating attachments
 */
export interface AttachmentMigrationRequest {
  /**
   * The date when the entity was created
   * @format date-time
   */
  createdAt?: string;

  /** Reference to a user */
  createdBy?: UserReference;

  /** Description of the entity */
  description?: string;

  /** Description format of the entity */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";

  /** List of files to migrate */
  files?: RemoteMigrationFile[];

  /** Type of action made on the source files. */
  migrationAction?: "MOVE" | "COPY";

  /**
   * The date when the entity was modified
   * @format date-time
   */
  modifiedAt?: string;

  /** Reference to a user */
  modifiedBy?: UserReference;

  /** Reference to a tracker item */
  targetItem?: TrackerItemReference;
}

/**
 * Reference to an attachment
 */
export type AttachmentReference = AbstractReference;

/**
 * One page of attachments.
 */
export interface AttachmentSearchResult {
  /** Found attachments */
  attachments?: Attachment[];

  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;
}

/**
 * Specifies which Test Cases are checked for duplicate Steps
 */
export interface AutoApplyTestStepReuses {
  /** If it scans/finds the duplicate Steps in Test Case libraries of the user? Note: that only Reusable Steps will be reused from these libraries! */
  scanTestCaseLibraries?: boolean;

  /** The Test Cases to find the duplicated steps inside: if these Test Cases has duplicated Steps these will be converted to Step-Reuses. */
  testCases?: TrackerItemReference[];
}

/**
 * Information about a background job
 */
export interface BackgroundJob {
  /** Status of a background job */
  backgroundJobStatus?: "DRAFT" | "NEW" | "IN_PROGRESS" | "FINISHED";

  /** Type of a background job */
  backgroundJobType?: "RUN_IN_EXCEL" | "MASS_TEST_SET_RUN_CREATION" | "DEPENDENCY_FINDER" | "ITEM_EXCEL_IMPORT";

  /**
   * Creation time of job
   * @format date-time
   */
  createdAt?: string;

  /** Description of job */
  description?: string;

  /**
   * Completion time of job
   * @format date-time
   */
  finishedAt?: string;

  /**
   * ID of job
   * @format int32
   */
  id?: number;

  /** Status information of a background job */
  statusInfo?: AbstractBackgroundJobStatusInfo;

  /** Reference to a user */
  submittedBy?: UserReference;
}

/**
 * Reference to a background job
 */
export interface BackgroundJobReference {
  /** String id of the job */
  id: string;

  /** Type of a background job */
  type: "RUN_IN_EXCEL" | "MASS_TEST_SET_RUN_CREATION" | "DEPENDENCY_FINDER" | "ITEM_EXCEL_IMPORT";
}

export interface BadRequestException {
  message?: string;
  resourceUri?: string;
}

/**
 * Properties of a baseline
 */
export interface Baseline {
  /** Description of the entity */
  description?: string;

  /** Description format of the entity */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Name of the entity */
  name?: string;

  /** Reference to a project */
  project?: ProjectReference;

  /** Reference to a tracker */
  tracker?: TrackerReference;
}

/**
 * Request model to fetch Tracker Item Reviews for multiple Tracker Items.
 */
export interface BatchGetTrackerItemReviewsRequest {
  /**
   * Optional Baseline ID
   * @format int32
   */
  baselineId?: number;

  /** List of Tracker Item IDs */
  itemIds?: number[];
}

/**
 * Bool field
 */
export type BoolField = AbstractField;

/**
 * Value container of a bool field
 */
export type BoolFieldValue = AbstractFieldValue & { value?: boolean };

/**
 * Holds the response of a bulk operation
 */
export interface BulkOperationResponse {
  /** List of failed operations */
  failedOperations?: FailedOperation[];

  /**
   * Count of successful operations
   * @format int32
   */
  successfulOperationsCount?: number;
}

/**
 * Reference container of a choice option field
 */
export type ChoiceFieldValue = AbstractFieldValue & { values?: AbstractReference[] };

/**
 * Reference to a choice option
 */
export type ChoiceOptionReference = AbstractReference;

/**
 * Color field
 */
export type ColorField = AbstractField;

/**
 * Value container of a color field
 */
export type ColorFieldValue = AbstractFieldValue & { value?: string };

/**
 * Comment of a tracker item
 */
export interface Comment {
  /** Attachments of a comment */
  attachments?: Attachment[];

  /** Text of a comment */
  comment?: string;

  /** Format of a comment */
  commentFormat?: "PlainText" | "Html" | "Wiki";

  /**
   * The date when the entity was created
   * @format date-time
   */
  createdAt?: string;

  /** Reference to a user */
  createdBy?: UserReference;

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /**
   * The date when the entity was modified
   * @format date-time
   */
  modifiedAt?: string;

  /** Reference to a user */
  modifiedBy?: UserReference;

  /** Name of the entity */
  name?: string;

  /** Reference to a comment of a tracker item */
  parent?: CommentReference;

  /**
   * Version of a comment
   * @format int32
   */
  version?: number;
}

/**
 * Reference to a comment of a tracker item
 */
export type CommentReference = AbstractReference;

/**
 * Country field
 */
export type CountryField = AbstractField & { availableOptions?: string[] };

/**
 * Value container of a country field
 */
export type CountryFieldValue = AbstractFieldValue & { values?: string[] };

export interface CreateBaselineRequest {
  /** Description of baseline */
  description?: string;

  /** Name of baseline */
  name: string;

  /** Reference to a project */
  project: ProjectReference;

  /** Reference to a tracker */
  tracker?: TrackerReference;
}

/**
 * Request model to create a test run from multiple test sets
 */
export interface CreateTestRunFromTestSetsRequest {
  /** Basic properties of a codebeamer tracker item */
  testRunModel?: TrackerItem;

  /** Test set ids to include into the test run. Only the first test set will be considered. */
  testSetRefs?: TrackerItemReference[];
}

/**
 * Request model to create a test run from multiple test cases or 1 test set
 */
export interface CreateTestRunRequest {
  testCaseIds?: TrackerItemReference[];

  /** Test case ids to include into the test run */
  testCaseRefs?: TrackerItemReference[];

  /** Basic properties of a codebeamer tracker item */
  testRunModel?: TrackerItem;
  testSetIds?: TrackerItemReference[];

  /** Test set ids to include into the test run. Only the first test set will be considered. */
  testSetRefs?: TrackerItemReference[];
}

/**
 * Dependency information between two projects.
 */
export interface CrossProjectDependency {
  /** Paths in source project where references were found to target project. */
  paths?: DependencyEntityReference[][];

  /** Reference to a project */
  sourceProject?: ProjectReference;

  /** Reference to a project */
  targetProject?: ProjectReference;
}

/**
 * Date field
 */
export type DateField = AbstractField;

/**
 * Value container of a date field
 */
export type DateFieldValue = AbstractFieldValue & { value?: string };

/**
 * Decimal field
 */
export type DecimalField = AbstractField & { max?: number; min?: number };

/**
 * Value container of a double field
 */
export type DecimalFieldValue = AbstractFieldValue & { value?: number };

/**
 * Reference to an entity in dependency path
 */
export type DependencyEntityReference = AbstractReference & { typeId?: number };

/**
 * Status information of a dependency finder job
 */
export type DependencyFinderJobStatusInfo = AbstractBackgroundJobStatusInfo & {
  dependencies?: CrossProjectDependency[];
  projectsChecked?: number;
  projectsScheduled?: number;
};

export interface DeployProject {
  /**
   * Id of a codebeamer document
   * @format int32
   */
  configurationFileId?: number;

  /** The password to decrypt the uploaded configuration file */
  password?: string;

  /** Reference to a project */
  project?: ProjectReference;

  /**
   * Id of a codebeamer document
   * @format int32
   */
  projectFileId?: number;
}

export interface DeploymentModel {
  /**
   * Deployment files
   * @format binary
   */
  imports: File;
}

/**
 * Project export settings for deployment
 */
export interface DeploymentProjectExportSettings {
  /** Flag if queries are included. */
  includeQueries?: boolean;

  /** Flag if tracker items are included. */
  includeTrackerItems?: boolean;

  /** Flag if trackers are included. */
  includeTrackers?: boolean;

  /**
   * Project id
   * @format int32
   */
  projectId: number;

  /** Tracker export settings */
  trackers?: DeploymentTrackerExportSettings[];
}

/**
 * Tracker export settings for deployment
 */
export interface DeploymentTrackerExportSettings {
  /** Flag if tracker items are included. */
  itemsIncluded?: boolean;

  /**
   * Project id
   * @format int32
   */
  trackerId: number;
}

/**
 * Reference pointing to another item
 */
export type DownstreamTrackerItemReference = AbstractTrackerItemReference;

/**
 * Duration field
 */
export type DurationField = AbstractField & { max?: string; min?: string };

/**
 * Value container of a duration field
 */
export type DurationFieldValue = AbstractFieldValue & { value?: number };

export interface EditComment {
  /**
   * Attachments of a comment
   * @format binary
   */
  attachments?: File;

  /** Text of a comment */
  comment: string;

  /** Format of a comment */
  commentFormat?: "PlainText" | "Html" | "Wiki";
}

/**
 * Request export for deployment
 */
export interface ExportForDeploymentRequest {
  /** Name of the resulting export file (without extension). */
  exportFileName?: string;

  /** A password that is used during the project encryption. */
  password?: string;

  /** Project settings */
  projectSettings?: DeploymentProjectExportSettings[];

  /** Name of deployment settings schema */
  schemaName?: string;

  /** Version of deployment settings schema */
  schemaVersion?: string;
}

export interface ExportProject {
  /**
   * A password that is used during the project encryption.
   * @example 007
   */
  password?: string;

  /** If this list is not empty then only the Trackers listed here are exported. */
  selectedTrackerIds?: number[];

  /** If true, then the Associations are not exported */
  skipAssociations?: boolean;

  /** If true, then the Reports are not exported */
  skipReports?: boolean;

  /** If true, then the Tracker Items are not exported */
  skipTrackerItems?: boolean;

  /** If true, then the Wiki PAges are not exported */
  skipWikiPages?: boolean;
}

/**
 * Holds the details of a failed operation
 */
export interface FailedOperation {
  /** Exception message */
  exceptionMessage?: string;

  /**
   * Entity id
   * @format int32
   */
  id?: number;
}

/**
 * Reference to a field of a specific tracker
 */
export type FieldReference = AbstractReference & { trackerId?: number };

/**
 * Association pointing to an item
 */
export type IncomingTrackerItemAssociation = AbstractTrackerItemReference;

/**
 * Integer field
 */
export type IntegerField = AbstractField & { max?: number; min?: number };

/**
 * Value container of a integer field
 */
export type IntegerFieldValue = AbstractFieldValue & { value?: number };

export interface InternalServerErrorException {
  message?: string;
  resourceUri?: string;
}

/**
 * Label that is used for entities like tags.
 */
export interface Label {
  /**
   * The date when the entity was created
   * @format date-time
   */
  createdAt?: string;

  /** Reference to a user */
  createdBy?: UserReference;

  /** Whether the label is hidden or not */
  hidden?: boolean;

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Name of the entity */
  name?: string;

  /** Whether the label is private or not */
  privateLabel?: boolean;
}

/**
 * Language field
 */
export type LanguageField = AbstractField & { availableOptions?: string[] };

/**
 * Value container of a language field
 */
export type LanguageFieldValue = AbstractFieldValue & { values?: string[] };

/**
 * Information about an artifact lock
 */
export interface LockInfo {
  /** Whether the lock will expire on its own, eg. if it is a soft lock */
  expires?: boolean;

  /** Reference to a user */
  user?: UserReference;
}

/**
 * Requested lock configuration
 */
export interface LockRequest {
  /**
   * If not a hard lock, the duration specified in time notation
   * @example 1:30h
   */
  duration?: string;

  /** Whether the lock should be hard */
  hard?: boolean;
}

/**
 * Basic properties of maintenance mode
 */
export interface MaintenanceMode {
  /** Extra properties for maintenance mode */
  properties?: MaintenanceModeProperties;

  /** System mode */
  systemMode?: "NORMAL" | "MAINTENANCE";
}

/**
 * Extra properties for maintenance mode
 */
export interface MaintenanceModeProperties {
  /** Error text shown during login */
  loginErrorText: string;

  /** Text shown on login screen */
  loginText: string;

  /** Notification text */
  notificationText: string;

  /** Slogan text */
  slogan: string;

  /** Welcome text */
  welcomeText: string;
}

/**
 * Member field
 */
export type MemberField = AbstractField & { memberTypes?: ("USER" | "ROLE" | "GROUP")[]; multipleValues?: boolean };

/**
 * Paginated search result of members
 */
export interface MemberReferenceSearchResult {
  /** Found members */
  members?: AbstractReference[];

  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;
}

/**
 * Not supported field value
 */
export type NotSupportedFieldValue = AbstractFieldValue;

/**
 * Providing status information is not supported for this job type
 */
export type NotSupportedJobStatusInfo = AbstractBackgroundJobStatusInfo;

/**
 * Option type choice field
 */
export type OptionChoiceField = AbstractField & {
  multipleValues?: boolean;
  options?: ChoiceOptionReference[];
  referenceType?: string;
};

/**
 * Association to another item
 */
export type OutgoingTrackerItemAssociation = AbstractTrackerItemReference;

/**
 * Represents the index of an item on a specific outline level.
 */
export interface OutlineIndex {
  /**
   * Outline index
   * @format int32
   * @example 1
   */
  index?: number;

  /**
   * Outline level
   * @format int32
   * @example 0
   */
  level?: number;
}

/**
 * Represents an outline item.
 */
export type OutlineItem = AbstractOutline & { hasChildren?: boolean; itemReference?: TrackerItemReference };

/**
 * Paginated search result of outline items
 */
export interface OutlineItemSearchResult {
  /** Found outline items */
  outlineItems?: OutlineItem[];

  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;
}

/**
 * A model created for wiki page outline models
 */
export type OutlineWiki = AbstractOutline & { wikiPageReferenceModel?: WikiPageReference };

/**
 * Request model for multiple items.
 */
export interface PermissionIdsRequest {
  /** Permission references. */
  permissions?: TrackerPermissionReference[];
}

export interface PostComment {
  /**
   * Attachments of a comment
   * @format binary
   */
  attachments?: File;

  /** Text of a comment */
  comment: string;

  /** Format of a comment */
  commentFormat?: "PlainText" | "Html" | "Wiki";
}

/**
 * Basic properties of a codebeamer project
 */
export interface Project {
  /** Category of a project */
  category?: string;

  /** Closed status of a project */
  closed?: boolean;

  /**
   * The date when the entity was created
   * @format date-time
   */
  createdAt?: string;

  /** Reference to a user */
  createdBy?: UserReference;

  /** Delete status of a project */
  deleted?: boolean;

  /** Description of the entity */
  description?: string;

  /** Description format of the entity */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Key name of a project */
  keyName?: string;

  /**
   * The date when the entity was modified
   * @format date-time
   */
  modifiedAt?: string;

  /** Reference to a user */
  modifiedBy?: UserReference;

  /** Name of the entity */
  name?: string;

  /** Template status of a project */
  template?: boolean;

  /**
   * Version of a project
   * @format int32
   */
  version?: number;
}

/**
 * Reference to a project baseline
 */
export type ProjectBaselineReference = AbstractReference;

/**
 * Project item type choice field
 */
export type ProjectChoiceField = AbstractField & { multipleValues?: boolean; referenceType?: string };

export interface ProjectFilteringRequest {
  /** Key name of the project */
  keyName: string;
}

/**
 * Project member permissions
 */
export interface ProjectMemberPermissions {
  /** Role references */
  roles?: RoleReference[] | null;
}

/**
 * Reference to a project
 */
export type ProjectReference = AbstractReference;

/**
 * One page of artifact revisions.
 */
export interface ProjectSearchResult {
  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /** Found projects */
  projects?: Project[];

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;
}

/**
 * Administrative reference field
 */
export type ReferenceField = AbstractField;

/**
 * One page of references.
 */
export interface ReferenceSearchResult {
  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /** Found references */
  references?: AbstractReference[];

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;
}

/**
 * Value container of a referred test step
 */
export type ReferredTestStepFieldValue = AbstractFieldValue & {
  referredStepId?: string;
  referredTestCaseId?: number;
  value?: string;
};

/**
 * A file to migrate from a remote directory.
 */
export interface RemoteMigrationFile {
  /**
   * File name of the newly created attachment.
   * @example newFile.txt
   */
  fileName?: string;

  /**
   * The path of the file relative to the configured migration home directory.
   * @example folder/file.txt
   */
  filePath?: string;

  /**
   * Precomputed MD5 checksum of the file.
   * @example f6967f92c24a8f3c4849d30c9f17e321
   */
  md5sum?: string;

  /**
   * Precomputed SHA512 checksum of the file.
   * @example 2e74ed4b0741e1fbe22d61e165c7c0dc4383a1aa5aa708291e32fff4cb189b9a5dfea7ffca2a22dcca258751cf4ad947c1c34abdf3fa2994219be394fbe40370
   */
  sha512sum?: string;
}

/**
 * Aggregated values for a column of a group.
 */
export interface ReportAggregate {
  /**
   * Average of the column values
   * @format double
   * @example 11.32
   */
  average?: number;

  /**
   * Column reference
   * @example 11-1
   */
  columnRef?: string;

  /**
   * Average of the column values
   * @format double
   * @example 21.32
   */
  maximum?: number;

  /**
   * Minimum of the column values
   * @format double
   * @example 1.32
   */
  minimum?: number;

  /**
   * Sum of the column values
   * @format double
   * @example 22.64
   */
  sum?: number;
}

/**
 * Cell value for a column.
 */
export interface ReportCell {
  /** Column reference */
  columnRef?: string;

  /**
   * Cell value
   * @example 12.32
   */
  value?: object;
}

/**
 * Column definition for a report
 */
export interface ReportColumn {
  /**
   * Column position index in the report.
   * @format int32
   * @example 0
   */
  columnIndex?: number;

  /**
   * Column reference
   * @example 12-1
   */
  columnRef?: string;

  /**
   * Column width in percentage
   * @format double
   * @example 16.533667
   */
  columnWidthPercentage?: number;

  /** Reference to a field of a specific tracker */
  field?: FieldReference;

  /**
   * Column name
   * @example Status
   */
  name?: string;

  /**
   * Column type
   * @example choice
   */
  type?: string;
}

/**
 * Settings for a column definition.
 */
export interface ReportColumnSettings {
  /**
   * Index of the column in the report table.
   * @format int32
   * @example 0
   */
  columnIndex: number;

  /** Reference to a field of a specific tracker */
  field: FieldReference;
}

/**
 * A report group which can contain rows or other groups based on the type.
 */
export interface ReportGroup {
  /** List of the aggregate values with column id. */
  aggregates?: ReportAggregate[];

  /**
   * Number of items in the group, if it has subgroups then the aggregated number of items.
   * @format double
   * @example 32
   */
  count?: number;

  /**
   * The common value in the group, , if it's available
   * @example In progress
   */
  groupingValue?: string;

  /**
   * The id of the common value in the group, if it's available
   * @format int32
   * @example 2
   */
  groupingValueId?: number;

  /**
   * Grouping header
   * @example Status: In progress
   */
  header?: string;

  /**
   * Type of the group.
   * @example row
   */
  type?: string;
}

/**
 * ReportGroup having subgroups.
 */
export type ReportGroupWithGroups = ReportGroup & { groups?: ReportGroup[] };

/**
 * ReportGroup having rows with references.
 */
export type ReportGroupWithReferencedRows = ReportGroup & {
  groupingLevel?: number;
  rows?: ReportReferencedRow[];
  starRow?: number;
};

/**
 * ReportGroup having rows.
 */
export type ReportGroupWithRows = ReportGroup & { rows?: ReportRow[] };

/**
 * An item of the report.
 */
export interface ReportItem {
  /** Indicator if the item is a real query result (e.g. not an ancestor item). */
  isRealResult?: boolean;

  /** Basic properties of a codebeamer tracker item */
  item?: TrackerItem;

  /**
   * Item's level in the tracker outline.
   * @format int32
   */
  outlineLevel?: number;
}

/**
 * Reference data of an underlying item of a row.
 */
export interface ReportItemReference {
  /**
   * Identifier of the underlying item.
   * @format int32
   */
  itemId?: number;

  /**
   * Identifier of the tracker of the underlying item.
   * @format int32
   */
  trackerId?: number;
}

export interface ReportItemResult {
  /** Found tracker items */
  items?: ReportItem[];

  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;
}

/**
 * Paging information of the current result.
 */
export interface ReportPagingInformation {
  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Number of pages in the report
   * @format int32
   */
  pageCount?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;
}

/**
 * Access permissions for the report.
 */
export interface ReportPermission {
  /**
   * Access level
   * @example READ
   */
  access: "NONE" | "READ" | "WRITE";

  /** Reference to a project */
  project: ProjectReference;

  /** Reference to a role */
  role: RoleReference;
}

/**
 * Reference to a report
 */
export type ReportReference = AbstractReference;

/**
 * Reference results for an item.
 */
export interface ReportReferenceLevel {
  /** Columns to show on this reference level. */
  columns?: ReportColumn[];

  /** Downstream reference results. */
  downstreamReferenceRows?: ReportReferencedRow[];

  /**
   * Reference level.
   * @format int32
   * @example 1
   */
  referenceLevel?: number;

  /** Upstream reference results. */
  upstreamReferenceRows?: ReportReferencedRow[];
}

/**
 * Reference level settings for Intelligent Table View.
 */
export interface ReportReferenceLevelSettings {
  /** Columns to show on this reference level. */
  columns: ReportColumnSettings[];

  /**
   * Include downstream references indicator.
   * @example false
   */
  downstreamReference: boolean;

  /**
   * Level of the reference layer
   * @format int32
   * @min 1
   * @example 1
   */
  level: number;

  /** Tracker types to include on this level. */
  referenceTrackerTypes?: TrackerTypeReference[];

  /** Trackers to include on this level. */
  referenceTrackers?: TrackerReference[];

  /**
   * Include upstream references indicator.
   * @example true
   */
  upstreamReference: boolean;
}

/**
 * Result row having references.
 */
export type ReportReferencedRow = ReportRow & {
  cells?: ReportCell[];
  isRealResult?: boolean;
  itemRef?: ReportItemReference;
  outlineLevel?: number;
  references?: ReportReferenceLevel;
};

/**
 * Report data model
 */
export interface ReportResult {
  /**
   * CbQL query behind the report
   * @example project.id IN (2) AND tracker.id IN (21323) ORDER BY priority ASC
   */
  cbQL?: string;

  /** Column information */
  columns?: ReportColumn[];

  /** A report group which can contain rows or other groups based on the type. */
  data?: ReportGroup;

  /** Paging information of the current result. */
  pagingInformation?: ReportPagingInformation;

  /** Reference to a report */
  report?: ReportReference;

  /** Indicator to ability to collapse/expand all child items. */
  showAllChildren?: boolean;
}

/**
 * A row of the report containing cell information.
 */
export interface ReportRow {
  /** Cells in a row. */
  cells?: ReportCell[];

  /** Indicator if the item is a real query result (e.g. not an ancestor item). */
  isRealResult?: boolean;

  /** Reference data of an underlying item of a row. */
  itemRef?: ReportItemReference;

  /**
   * Item's level in the tracker outline.
   * @format int32
   */
  outlineLevel?: number;
}

/**
 * Repository type choice field
 */
export type RepositoryChoiceField = AbstractField & { multipleValues?: boolean; referenceType?: string };

/**
 * Reference to a Repository
 */
export type RepositoryReference = AbstractReference;

/**
 * Settings for a resizeable column definition.
 */
export interface ResizableReportColumnSettings {
  /**
   * Index of the column in the report table.
   * @format int32
   * @example 0
   */
  columnIndex: number;

  /**
   * Width of the column in percentage.
   * @format double
   * @example 43.2
   */
  columnWidthPercentage?: number;

  /** Reference to a field of a specific tracker */
  field: FieldReference;
}

export interface ResourceForbiddenException {
  message?: string;
  resourceUri?: string;
}

export interface ResourceNotFoundException {
  message?: string;
  resourceUri?: string;
}

export interface ResourceUnauthorizedException {
  message?: string;
  resourceUri?: string;
}

export interface RestException {
  message?: string;
  resourceUri?: string;
}

/**
 * Project role reference field
 */
export type ReviewMemberReferenceField = AbstractField;

export interface Role {
  /** Description of a role */
  description?: string;

  /** Format of a role's description */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Name of the entity */
  name?: string;
}

/**
 * Reference to a role
 */
export type RoleReference = AbstractReference;

/**
 * Model that contains permissions connected to roles
 */
export interface RoleWithPermissions {
  /** Reference to a role */
  role?: RoleReference;

  /** Permission for the role */
  trackerPermissions?: TrackerPermissionReference[];
}

/**
 * Settings for a simple report.
 */
export interface SimpleReportSettings {
  /** Access permissions for the report. */
  addedPermissions?: ReportPermission[];

  /**
   * CbQL query string of the report.
   * @example priority='Normal'
   */
  cbQl: string;

  /** Column definitions. */
  columns: ResizableReportColumnSettings[];

  /**
   * Description of the report.
   * @example Normal priority items.
   */
  description: string;

  /**
   * Name of the report.
   * @example My first query
   */
  name: string;

  /**
   * Id of a report
   * @format int32
   * @example 1
   */
  reportId?: number;

  /**
   * Indicator to ability to collapse/expand all child items.
   * @example false
   */
  showAllChildren?: boolean;

  /**
   * Indicator to show the ancestors of a result item.
   * @example true
   */
  showAncestors?: boolean;

  /**
   * Indicator to show the descendants of a result item.
   * @example false
   */
  showDescendants?: boolean;
}

/**
 * Basic properties of system status
 */
export interface SystemStatus {
  /** System mode */
  systemMode?: "NORMAL" | "MAINTENANCE";
}

/**
 * Table field
 */
export type TableField = AbstractField & { columns?: AbstractField[] };

/**
 * Value container of a table field
 */
export type TableFieldValue = AbstractFieldValue & { values?: AbstractFieldValue[][] };

/**
 * Multiple Test Runs
 */
export interface TestRunResult {
  testRuns?: TrackerItem[];
}

/**
 * Text field
 */
export type TextField = AbstractField & { max?: number; min?: number };

/**
 * Value container of a text field
 */
export type TextFieldValue = AbstractFieldValue & { value?: string };

export interface TooManyRequestsException {
  message?: string;
  resourceUri?: string;

  /** @format int64 */
  retryAfterSecond?: number;
}

/**
 * Settings to filter items
 */
export interface TraceabilityInitialLevelFilter {
  /** cbQL */
  cbQL: string;

  /**
   * Snapshot view of given baseline
   * @format int32
   */
  historyBaselineId?: number;

  /**
   * Snapshot view of given date
   * @format date-time
   */
  historyDate?: string;

  /** Show ancestor items */
  showAncestorItems?: boolean;

  /** Show descendant items */
  showDescendantItems?: boolean;
}

/**
 * Traceability Item
 */
export interface TraceabilityItem {
  /** children */
  children?: TraceabilityItem[];
  "incoming association"?: TrackerItemRevision[];
  "incoming reference"?: TrackerItemRevision[];

  /** incoming associations */
  incomingAssociations?: TrackerItemRevision[];

  /** incoming references */
  incomingReferences?: TrackerItemRevision[];

  /** Tracker item revision identifier */
  itemRevision?: TrackerItemRevision;
  "outgoing association"?: TrackerItemRevision[];
  "outgoing reference"?: TrackerItemRevision[];

  /** outgoing association */
  outgoingAssociations?: TrackerItemRevision[];

  /** outgoing reference */
  outgoingReferences?: TrackerItemRevision[];
}

/**
 * Traceability level filter
 */
export interface TraceabilityLevelFilter {
  /** cbQL */
  cbQL: string;

  /** Show folders and information */
  foldersAndInformation?: boolean;

  /**
   * History Baseline Id - Snapshot view of the given baseline
   * @format int32
   */
  historyBaselineId?: number;

  /**
   * History Date - Snapshot view of the given date
   * @format date-time
   */
  historyDate?: string;

  /** Show incoming association */
  incomingAssociation?: boolean;

  /** Show incoming references */
  incomingReference?: boolean;

  /** Show outgoing association */
  outgoingAssociation?: boolean;

  /** Show outgoing references */
  outgoingReference?: boolean;

  /** Previous Level Items */
  previousLevelItems?: TrackerItemRevision[];
}

/**
 * Traceability result
 */
export interface TraceabilityResult {
  /** limit warnings */
  limitWarnings?: string;

  /** traceability items */
  traceabilityItems?: TraceabilityItem[];
}

/**
 * Basic properties of a codebeamer tracker
 */
export interface Tracker {
  /** Indicator if the tracker can be used as a template */
  availableAsTemplate?: boolean;

  /** Color of the tracker */
  color?: string;

  /**
   * The date when the entity was created
   * @format date-time
   */
  createdAt?: string;

  /** Reference to a user */
  createdBy?: UserReference;

  /** Default Outline should show Ancestor Items or not */
  defaultShowAncestorItems: boolean;

  /** Default Outline should show Descendant Items or not */
  defaultShowDescendantItems: boolean;

  /** Indicator if the tracker is deleted */
  deleted: boolean;

  /** Description of the entity */
  description?: string;

  /** Description format of the entity */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";

  /** Indicator if the tracker is hidden */
  hidden: boolean;

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Keyname of a tracker */
  keyName?: string;

  /**
   * The date when the entity was modified
   * @format date-time
   */
  modifiedAt?: string;

  /** Reference to a user */
  modifiedBy?: UserReference;

  /** Name of the entity */
  name?: string;

  /** If true, then the only way to create new referring items is through workflow actions */
  onlyWorkflowCanCreateNewReferringItem: boolean;

  /** Reference to a project */
  project?: ProjectReference;

  /** If the tracker is shared in a WorkingSet */
  sharedInWorkingSet?: boolean;

  /** Reference to a tracker */
  templateTracker?: TrackerReference;

  /** Reference to a tracker type */
  type?: TrackerTypeReference;

  /** If true, then every transition will be executed immediately (if possible) without opening an editor for the item */
  usingQuickTransitions: boolean;

  /** Should transitions and workflow actions be available in the tracker or not */
  usingWorkflow: boolean;

  /**
   * Version of a tracker
   * @format int32
   */
  version?: number;
}

/**
 * Reference to a tracker baseline
 */
export type TrackerBaselineReference = AbstractReference;

/**
 * Tracker type choice field
 */
export type TrackerChoiceField = AbstractField & { multipleValues?: boolean; referenceType?: string };

/**
 * Tracker field permissions
 */
export interface TrackerFieldPermissions {
  /** Permissions for the given field */
  fieldPermissions?: TrackerFieldStatusPermissions[];

  /** Reference to a field of a specific tracker */
  fieldReference?: FieldReference;
}

/**
 * Field permissions by role for specific status
 */
export interface TrackerFieldStatusPermissions {
  /** Access permissions by role */
  permissions?: AccessPermission[];

  /** Reference to a choice option */
  status?: ChoiceOptionReference;
}

/**
 * All field permissions by role for specific status
 */
export interface TrackerFieldsStatusPermissions {
  /** Permissions */
  permissions?: TrackerFieldPermissions[];
}

export interface TrackerFilteringRequest {
  /**
   * True to also show removed trackers.
   * @example false
   */
  deleted?: boolean;

  /**
   * True to also show hidden trackers.
   * @example false
   */
  hidden?: boolean;

  /** Filter by project key name */
  keyName?: string;

  /** List of tracker type references, to only show trackers of these types. */
  types?: TrackerTypeReference[];
}

/**
 * Basic properties of a codebeamer tracker item
 */
export interface TrackerItem {
  /**
   * Accrued work time of a tracker item in milliseconds
   * @format int64
   */
  accruedMillis?: number;

  /** Areas of a tracker item */
  areas?: AbstractReference[];

  /**
   * Assignee date of a tracker item
   * @format date-time
   */
  assignedAt?: string;

  /** Assignees of a tracker item */
  assignedTo?: AbstractReference[];

  /** Categories of a tracker item */
  categories?: AbstractReference[];

  /** Children of a tracker item */
  children?: TrackerItemReference[];

  /**
   * Close date of a tracker item
   * @format date-time
   */
  closedAt?: string;

  /** Comment in the tracker item */
  comments?: CommentReference[];

  /**
   * The date when the entity was created
   * @format date-time
   */
  createdAt?: string;

  /** Reference to a user */
  createdBy?: UserReference;

  /** Custom field of a tracker item */
  customFields?: AbstractFieldValue[];

  /** Description of the entity */
  description?: string;

  /** Description format of the entity */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";

  /**
   * End date of a tracker item
   * @format date-time
   */
  endDate?: string;

  /**
   * Estimated work time of a tracker item in milliseconds
   * @format int64
   */
  estimatedMillis?: number;

  /** Reference to an item */
  formality?: AbstractReference;

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /**
   * The date when the entity was modified
   * @format date-time
   */
  modifiedAt?: string;

  /** Reference to a user */
  modifiedBy?: UserReference;

  /** Name of the entity */
  name?: string;

  /**
   * Ordinal of a tracker item
   * @format int32
   */
  ordinal?: number;

  /** Owners of a tracker item */
  owners?: AbstractReference[];

  /** Reference to a tracker item */
  parent?: TrackerItemReference;

  /** Platforms of a tracker item */
  platforms?: AbstractReference[];

  /** Reference to an item */
  priority?: AbstractReference;

  /** Reference to an item */
  releaseMethod?: AbstractReference;

  /** Resolutions of a tracker item */
  resolutions?: AbstractReference[];

  /** Severities of a tracker item */
  severities?: AbstractReference[];

  /**
   * Spent work time of a tracker item in milliseconds
   * @format int64
   */
  spentMillis?: number;

  /**
   * Start date of a tracker item
   * @format date-time
   */
  startDate?: string;

  /** Reference to an item */
  status?: AbstractReference;

  /**
   * Story points of a tracker item
   * @format int32
   */
  storyPoints?: number;

  /** Subjects of a tracker item */
  subjects?: AbstractReference[];

  /** Tags of the tracker item */
  tags?: Label[];

  /** Teams of a tracker item */
  teams?: AbstractReference[];

  /** Reference to a tracker */
  tracker?: TrackerReference;

  /** Type name of a tracker item */
  typeName?: string;

  /**
   * Version of a tracker item
   * @format int32
   */
  version?: number;

  /** Versions of a tracker item */
  versions?: AbstractReference[];
}

/**
 * Request data to retrieve tracker item attachments.
 */
export type TrackerItemAttachmentRequest = TrackerItemsRequest & {
  baselineId?: number;
  excludeFilter?: boolean;
  extensions?: string[];
  mimeTypes?: string[];
};

/**
 * Reference to an item
 */
export interface TrackerItemChange {
  /** Reference to a field of a specific tracker */
  field?: FieldReference;

  /** Name of the field */
  name?: string;

  /** Value container of a field */
  newValue?: AbstractFieldValue;

  /** Value container of a field */
  oldValue?: AbstractFieldValue;

  /** Change model type */
  type?: string;
}

/**
 * Reference to a child item in the tracker outline.
 */
export interface TrackerItemChildReference {
  /**
   * Ordinal in the tracker outline.
   * @format int32
   * @min 0
   * @example 0
   */
  index: number;

  /** Reference to a tracker item */
  itemReference: TrackerItemReference;
}

/**
 * Tracker item type choice field
 */
export type TrackerItemChoiceField = AbstractField & { multipleValues?: boolean; referenceType?: string };

export interface TrackerItemField {
  /** Fields which can be modified */
  editableFields?: AbstractFieldValue[];

  /** Table fields which can be modified */
  editableTableFields?: TableFieldValue[];

  /** Fields which are not writable in the current state */
  readOnlyFields?: AbstractFieldValue[];

  /** Table fields which are not writable in the current state */
  readOnlyTableFields?: TableFieldValue[];
}

/**
 * Accessibilities of fields
 */
export interface TrackerItemFieldAccessibility {
  /** Field is editable */
  editable?: boolean;

  /** Reference to a field of a specific tracker */
  field?: FieldReference;

  /** Field is mandatory */
  mandatory?: boolean;

  /** Field is visible */
  visible?: boolean;
}

export interface TrackerItemFieldAccessibilityList {
  /** Accessibilities of fields */
  fields?: TrackerItemFieldAccessibility[];
}

/**
 * Tracker item history containing all versions of an item.
 */
export interface TrackerItemHistory {
  /** List of version changes. */
  versions?: TrackerItemHistoryRevision[];
}

/**
 * Revision history entry.
 */
export interface TrackerItemHistoryRevision {
  /** Changes happened between the previous and current revision. */
  changes?: TrackerItemChange[];

  /** Tracker item revision identifier */
  itemRevision?: TrackerItemRevision;

  /**
   * The date when the entity was modified
   * @format date-time
   */
  modifiedAt?: string;

  /** Reference to a user */
  modifiedBy?: UserReference;
}

/**
 * Reference to a tracker item
 */
export type TrackerItemReference = AbstractReference & { referenceData?: TrackerItemReferenceData };

/**
 * Properties of a tracker item reference
 */
export interface TrackerItemReferenceData {
  /** Type of suspect propagation */
  suspectPropagation?: "DO_NOT_PROPAGATE" | "PROPAGATE" | "REVERSE" | "BIDIRECTIONAL";
}

/**
 * One page of tracker item references.
 */
export interface TrackerItemReferenceSearchResult {
  /** Found tracker item references */
  itemRefs?: TrackerItemReference[];

  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;
}

/**
 * References to a tracker item
 */
export interface TrackerItemRelationsResult {
  /** References and associations to the item */
  downstreamReferences?: DownstreamTrackerItemReference[];

  /** References and associations to the item */
  incomingAssociations?: IncomingTrackerItemAssociation[];

  /** Tracker item revision identifier */
  itemId?: TrackerItemRevision;

  /** References and associations to the item */
  outgoingAssociations?: OutgoingTrackerItemAssociation[];

  /** References and associations to the item */
  upstreamReferences?: UpstreamTrackerItemReference[];
}

/**
 * A tracker item review instance including its reviewers and their decisions
 */
export interface TrackerItemReview {
  /** The configuration from which the review was created */
  config?: TrackerItemReviewConfig;

  /** Whether the review is approved or rejected */
  result?: "APPROVED" | "REJECTED" | "UNDECIDED";

  /** List of reviewers, and their votes */
  reviewers?: TrackerItemReviewVote[];

  /** Tracker item revision identifier */
  trackerItem?: TrackerItemRevision;
}

/**
 * The configuration from which the review was created
 */
export interface TrackerItemReviewConfig {
  /**
   * Number of approvals after which the review is considered approved
   * @format int32
   */
  requiredApprovals?: number;

  /**
   * Number of rejections after which the review is considered rejected
   * @format int32
   */
  requiredRejections?: number;

  /** Whether the user has to provide its credentials to vote */
  requiredSignature?: "NONE" | "PASSWORD" | "USERNAME_AND_PASSWORD";

  /** Whether the reviewers have to chose in which of their roles do they want to vote */
  roleRequired?: boolean;
}

/**
 * A tracker item review instance including its reviewers and their decisions
 */
export interface TrackerItemReviewExport {
  /** List of reviewers and their votes */
  reviewers?: TrackerItemReviewVoteExport[];

  /**
   * Version of the Tracker Item at the time of the review
   * @format int32
   */
  trackerItemVersion?: number;
}

/**
 * A tracker item review instance including its reviewers and their decisions
 */
export interface TrackerItemReviewVote {
  /** Reference to a role */
  asRole?: RoleReference;

  /** The result of this particular vote */
  decision?: "APPROVED" | "REJECTED" | "UNDECIDED";

  /**
   * Date and time of the vote
   * @format date-time
   */
  reviewedAt?: string;

  /** Reference to a user */
  user?: UserReference;
}

/**
 * A reviewer and its vote for a particular Tracker Item Review instance
 */
export interface TrackerItemReviewVoteExport {
  /** What the reviewer voted for */
  decision?: string;

  /** First name of the reviewer */
  firstName?: string;

  /** Last name of the reviewer */
  lastName?: string;

  /**
   * Time at when the review was performed
   * @format date-time
   */
  reviewedAt?: string;

  /** Name of the role which the reviewer chose to use to vote */
  roleName?: string;

  /** Username of the user who voted */
  userName?: string;
}

/**
 * Tracker item revision identifier
 */
export interface TrackerItemRevision {
  /**
   * Tracker item id
   * @format int32
   */
  id?: number;

  /**
   * Tracker item version
   * @format int32
   */
  version?: number;
}

/**
 * Change item for a tracker item field row.
 */
export type TrackerItemRowChange = TrackerItemChange & { rowNumber?: number };

export interface TrackerItemSearchRequest {
  /**
   * Baseline on which the query is applied.
   * @format int32
   * @example 1234
   */
  baselineId?: number;

  /**
   * Index of the page
   * @format int32
   * @example 1
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   * @example 25
   */
  pageSize?: number;

  /**
   * CbQL query for the requested items
   * @example priority='Normal'
   */
  queryString: string;
}

/**
 * One page of tracker items.
 */
export interface TrackerItemSearchResult {
  /** Found tracker items */
  items?: TrackerItem[];

  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;
}

/**
 * A Tracker Item with all of its corresponding Tracker Item Reviews
 */
export interface TrackerItemWithTrackerItemReviewsExport {
  /** Basic properties of a codebeamer tracker item */
  trackerItem?: TrackerItem;

  /** List of Tracker Item Reviews */
  trackerItemReviews?: TrackerItemReviewExport[];
}

/**
 * Request model for multiple items.
 */
export interface TrackerItemsRequest {
  /** Item references. */
  items?: TrackerItemReference[];

  /** Type of a ItemsRequest */
  type?: string;
}

export interface TrackerPermission {
  /** Description of the permission */
  description?: string;

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Variable name of the permission */
  label?: string;

  /** Name of the entity */
  name?: string;
}

/**
 * Reference to a tracker permission
 */
export type TrackerPermissionReference = AbstractReference;

/**
 * Reference to a tracker
 */
export type TrackerReference = AbstractReference;

/**
 * Settings of a report on a tracker.
 */
export interface TrackerReportSettings {
  /**
   * CbQL query string of the report.
   * @example priority='Normal'
   */
  cbQl: string;

  /** Column definitions. */
  columns: ResizableReportColumnSettings[];

  /**
   * Description of the report.
   * @example Normal priority items.
   */
  description: string;

  /**
   * Public report indicator.
   * @example true
   */
  isPublic: boolean;

  /**
   * Name of the report.
   * @example My first query
   */
  name: string;

  /** Reference level setting for Intelligent Table View. */
  referenceLevelSettings?: ReportReferenceLevelSettings[];

  /**
   * Rendering method for Intelligent Table View.
   * @example table
   */
  renderingMethod?: "disabled" | "table" | "tree";

  /**
   * Id of a report
   * @format int32
   * @example 1
   */
  reportId?: number;

  /**
   * Indicator to ability to collapse/expand all child items.
   * @example false
   */
  showAllChildren?: boolean;

  /**
   * Indicator to show the ancestors of a result item.
   * @example true
   */
  showAncestors?: boolean;

  /**
   * Indicator to show the descendants of a result item.
   * @example false
   */
  showDescendants?: boolean;

  /** Reference to a tracker */
  tracker: TrackerReference;
}

/**
 * One page of trackers.
 */
export interface TrackerSearchResult {
  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;

  /** Found tracker items */
  trackers?: Tracker[];
}

export interface TrackerType {
  /** True if tracker type is branchable */
  branchable?: boolean;

  /** Color of a tracker type */
  color?: string;

  /** True if tracker type has document view */
  docEditView?: boolean;

  /** Editor URL of a tracker type */
  editorUrl?: string;

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Item icon URL of a tracker type */
  itemIconUrl?: string;

  /** Name of the entity */
  name?: string;

  /** True if outline is enabled */
  outline?: boolean;

  /** Tracker icon URL of a tracker type */
  trackerIconUrl?: string;

  /** URL link format of a tracker type */
  urlLinkFormat?: string;

  /** Internal/variable name of a tracker type */
  varName?: string;
}

/**
 * Reference to a tracker type
 */
export type TrackerTypeReference = AbstractReference;

export interface UpdateAttachment {
  /** @format binary */
  content?: File;

  /** Description */
  description?: string;

  /** Format of description */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";
}

/**
 * Request model to update Test Run's result for a Test Case
 */
export interface UpdateTestCaseRunRequest {
  /** Optional conclusion text */
  conclusion?: string;

  /** Optional field values to set on the Test Run */
  customFields?: AbstractFieldValue[];

  /** Optional reference list of Bugs attached to the Test result */
  reportedBugReferences?: TrackerItemReference[];

  /** Result of the test case */
  result: "PASSED" | "FAILED" | "BLOCKED";

  /**
   * Optional runtime in seconds
   * @format int32
   */
  runTime?: number;

  /** Reference to a tracker item */
  testCaseReference: TrackerItemReference;
}

/**
 * Model to contain Test Case run update request models
 */
export interface UpdateTestRunRequest {
  /** The propagation of the result is enabled for parent Test Run or not */
  parentResultPropagation?: boolean;

  /** List of update Test Case run request models */
  updateRequestModels: UpdateTestCaseRunRequest[];
}

/**
 * Tracker item child update request
 */
export interface UpdateTrackerItemChildrenRequest {
  /** Child items to update */
  children?: TrackerItemReference[];
}

/**
 * Update fields of a tracker item
 */
export interface UpdateTrackerItemField {
  /** Fields of a tracker item */
  fieldValues?: AbstractFieldValue[];

  /** Fields of a tracker item */
  tableValues?: TableFieldValue[];
}

/**
 * Update fields of a tracker item and provide the itemId as well
 */
export interface UpdateTrackerItemFieldWithItemId {
  /** Fields of a tracker item */
  fieldValues?: AbstractFieldValue[];

  /**
   * Id of a tracker item
   * @format int32
   */
  itemId?: number;

  /** Fields of a tracker item */
  tableValues?: TableFieldValue[];
}

export interface UpdateTrackerItemTableField {
  /** Table rows of a tracker table item */
  rows?: AbstractFieldValue[][];
}

export interface UploadAttachment {
  /**
   * Attachments of a comment
   * @format binary
   */
  attachments?: File;
}

/**
 * Reference to other tracker item
 */
export type UpstreamTrackerItemReference = AbstractTrackerItemReference;

/**
 * Url field
 */
export type UrlField = AbstractField;

/**
 * Value container of an url field
 */
export type UrlFieldValue = AbstractFieldValue & { value?: string };

/**
 * Properties of a codebeamer user
 */
export interface User {
  /** Address of a user */
  address?: string;

  /** City of a user */
  city?: string;

  /** Company of a user */
  company?: string;

  /** Country of a user in ISO 3166-1 alpha-2 format */
  country?: string;

  /** Date format of a user */
  dateFormat?: string;

  /** Email of a user */
  email?: string;

  /** First name of a user */
  firstName?: string;

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Language of a user in ISO 639-1 format */
  language?: string;

  /**
   * Last login date of a user
   * @format date-time
   */
  lastLoginDate?: string;

  /** Last name of a user */
  lastName?: string;

  /** Name of the entity */
  name?: string;

  /** Phone number of a user */
  phone?: string;

  /**
   * Registration date of a user
   * @format date-time
   */
  registryDate?: string;

  /** Skills of a user */
  skills?: string;

  /** State / providence of a user */
  state?: string;

  /** Status of a user */
  status?: "ACTIVATED" | "DISABLED" | "INACTIVATION";

  /**
   * Time zone of a user
   * @example America/New_York
   */
  timeZone?: string;

  /** Title of a user */
  title?: string;

  /** Zip of a user */
  zip?: string;
}

/**
 * User item type choice field
 */
export type UserChoiceField = AbstractField & { multipleValues?: boolean; referenceType?: string };

export interface UserFilteringRequest {
  /**
   * Email of the user
   * @example john.doe@codebeamer.com
   */
  email?: string;

  /**
   * First name of the user
   * @example John
   */
  firstName?: string;

  /**
   * Last name of the user
   * @example Doe
   */
  lastName?: string;

  /**
   * Name of the user
   * @example John Doe
   */
  name?: string;

  /**
   * Id of the project where the user is a member
   * @format int32
   */
  projectId?: number;

  /** Status of the user */
  userStatus?: "ACTIVATED" | "DISABLED" | "INACTIVATION";
}

/**
 * Group of a codebeamer user
 */
export interface UserGroup {
  /**
   * The date when the entity was created
   * @format date-time
   */
  createdAt?: string;

  /** Reference to a user */
  createdBy?: UserReference;

  /** Description of a user group */
  description?: string;

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /**
   * The date when the entity was modified
   * @format date-time
   */
  modifiedAt?: string;

  /** Reference to a user */
  modifiedBy?: UserReference;

  /** Name of the entity */
  name?: string;
}

/**
 * Reference to a user group
 */
export type UserGroupReference = AbstractReference;

/**
 * Reference to a user
 */
export type UserReference = AbstractReference & { email?: string };

/**
 * Paginated search result of users
 */
export interface UserReferenceSearchResult {
  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;

  /** Found users */
  users?: UserReference[];
}

/**
 * Paginated search result of users
 */
export interface UserSearchResult {
  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;

  /** Found users */
  users?: User[];
}

/**
 * Paginated search result of outline wiki pages
 */
export interface WikiOutlineSearchResult {
  /** Found outline wiki pages */
  outlineWikiPages?: OutlineWiki[];

  /**
   * Index of the page
   * @format int32
   */
  page?: number;

  /**
   * Size of the found page
   * @format int32
   */
  pageSize?: number;

  /**
   * Number of matched tracker items by the search criteria
   * @format int32
   */
  total?: number;
}

/**
 * Wiki page details
 */
export interface WikiPage {
  /** Summary of the changes in this wiki page version */
  changeComment?: string;

  /** Child pages of the current Wiki page */
  childPages?: WikiPageReference[];

  /** Comments/attachments associated with the wiki page */
  comments?: AttachmentReference[];

  /**
   * The date when the entity was created
   * @format date-time
   */
  createdAt?: string;

  /** Reference to a user */
  createdBy?: UserReference;

  /** Description of the entity */
  description?: string;

  /** Description format of the entity */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Content markup of the wiki page */
  markup?: string;

  /**
   * The date when the entity was modified
   * @format date-time
   */
  modifiedAt?: string;

  /** Reference to a user */
  modifiedBy?: UserReference;

  /** Name of the entity */
  name?: string;

  /** Reference to an item */
  parent?: AbstractReference;

  /** Reference to a project */
  project?: ProjectReference;

  /**
   * Version of the wiki page
   * @format int32
   */
  version?: number;
}

/**
 * Reference to a wiki page
 */
export type WikiPageReference = AbstractReference;

/**
 * Request model to render a wiki page in a specific context
 */
export interface WikiRenderRequest {
  /**
   * Id of the entity used as rendering context
   * @format int32
   */
  contextId?: number;

  /**
   * Version of the entity used as rendering context
   * @format int32
   */
  contextVersion?: number;

  /**
   * Wiki markup to render as HTML
   * @example Hello __World__!
   */
  markup: string;

  /** Type of the entity used as rendering context */
  renderingContextType?: "TRACKER_ITEM" | "WIKI";
}

/**
 * Wiki text field
 */
export type WikiTextField = AbstractField & { max?: number; min?: number };

/**
 * Value container of a wiki text field
 */
export type WikiTextFieldValue = AbstractFieldValue & { value?: string };

/**
 * A transition in the workflow
 */
export interface WorkflowTransition {
  /** Description of the entity */
  description?: string;

  /** Description format of the entity */
  descriptionFormat?: "PlainText" | "Html" | "Wiki";

  /** Reference to a choice option */
  fromStatus?: ChoiceOptionReference;

  /** Indicator if the transition is hidden */
  hidden?: boolean;

  /**
   * Id of the entity
   * @format int32
   * @min 0
   */
  id?: number;

  /** Name of the entity */
  name?: string;

  /** Access permissions of the transition */
  permissions?: AccessPermission[];

  /** Reference to a choice option */
  toStatus: ChoiceOptionReference;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8080/cb/api";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title codebeamer swagger API
 * @version 3.0
 * @baseUrl http://localhost:8080/cb/api
 * @externalDocs https://codebeamer.com/cb/wiki/11375767
 * @contact codeBeamer (https://codebeamer.com)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v3 = {
    /**
     * No description
     *
     * @tags Association
     * @name CreateAssociation
     * @summary Create a new association
     * @request POST:/v3/associations
     * @secure
     */
    createAssociation: (data: Association, params: RequestParams = {}) =>
      this.request<Association, RestException | ResourceForbiddenException | TooManyRequestsException>({
        path: `/v3/associations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Association
     * @name GetAvailableAssociationTypes
     * @summary Get available association types
     * @request GET:/v3/associations/types
     * @secure
     */
    getAvailableAssociationTypes: (params: RequestParams = {}) =>
      this.request<AssociationType[], RestException | ResourceForbiddenException | TooManyRequestsException>({
        path: `/v3/associations/types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Association
     * @name GetAssociationType
     * @summary Get association type by id
     * @request GET:/v3/associations/types/{associationTypeId}
     * @secure
     */
    getAssociationType: (associationTypeId: number, params: RequestParams = {}) =>
      this.request<
        AssociationType,
        RestException | ResourceForbiddenException | ResourceNotFoundException | TooManyRequestsException
      >({
        path: `/v3/associations/types/${associationTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Association
     * @name DeleteAssociation
     * @summary Delete association
     * @request DELETE:/v3/associations/{associationId}
     * @secure
     */
    deleteAssociation: (associationId: number, params: RequestParams = {}) =>
      this.request<
        void,
        RestException | ResourceForbiddenException | ResourceNotFoundException | TooManyRequestsException
      >({
        path: `/v3/associations/${associationId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Association
     * @name GetAssociation
     * @summary Get an association by id
     * @request GET:/v3/associations/{associationId}
     * @secure
     */
    getAssociation: (associationId: number, params: RequestParams = {}) =>
      this.request<
        Association,
        RestException | ResourceForbiddenException | ResourceNotFoundException | TooManyRequestsException
      >({
        path: `/v3/associations/${associationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Association
     * @name UpdateAssociation
     * @summary Update association settings
     * @request PUT:/v3/associations/{associationId}
     * @secure
     */
    updateAssociation: (associationId: number, data: Association, params: RequestParams = {}) =>
      this.request<
        Association,
        RestException | ResourceForbiddenException | ResourceNotFoundException | TooManyRequestsException
      >({
        path: `/v3/associations/${associationId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Association
     * @name GetAssociationHistory
     * @summary Returns the change history of the specified association
     * @request GET:/v3/associations/{associationId}/history
     * @secure
     */
    getAssociationHistory: (
      associationId: number,
      query?: { page?: number; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        ArtifactRevisionSearchResult,
        RestException | ArtifactRevisionSearchResult | TooManyRequestsException
      >({
        path: `/v3/associations/${associationId}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment
     * @name DeleteAttachment
     * @summary Deletes an attachment
     * @request DELETE:/v3/attachments/{attachmentId}
     * @secure
     */
    deleteAttachment: (attachmentId: number, params: RequestParams = {}) =>
      this.request<
        void,
        | RestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/attachments/${attachmentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment
     * @name GetAttachment
     * @summary Get attachment by id
     * @request GET:/v3/attachments/{attachmentId}
     * @secure
     */
    getAttachment: (attachmentId: number, query?: { version?: number }, params: RequestParams = {}) =>
      this.request<Attachment, RestException | Attachment | TooManyRequestsException>({
        path: `/v3/attachments/${attachmentId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment
     * @name GetAttachmentContent
     * @summary Get content of an attachment by id
     * @request GET:/v3/attachments/{attachmentId}/content
     * @secure
     */
    getAttachmentContent: (attachmentId: number, query?: { version?: number }, params: RequestParams = {}) =>
      this.request<
        File,
        | RestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/attachments/${attachmentId}/content`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment
     * @name UpdateAttachment
     * @summary Update attachment
     * @request PUT:/v3/attachments/{attachmentId}/content
     * @secure
     */
    updateAttachment: (attachmentId: number, data: UpdateAttachment, params: RequestParams = {}) =>
      this.request<Attachment, RestException | Attachment | TooManyRequestsException>({
        path: `/v3/attachments/${attachmentId}/content`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment
     * @name GetAttachmentHistory
     * @summary Returns the change history of the specified attachment
     * @request GET:/v3/attachments/{attachmentId}/history
     * @secure
     */
    getAttachmentHistory: (
      attachmentId: number,
      query?: { page?: number; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        ArtifactRevisionSearchResult,
        | BadRequestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/attachments/${attachmentId}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attachment
     * @name RestoreAttachment
     * @summary Restore attachment to previous version
     * @request PUT:/v3/attachments/{attachmentId}/restore
     * @secure
     */
    restoreAttachment: (attachmentId: number, query: { version: number }, params: RequestParams = {}) =>
      this.request<Attachment, RestException | Attachment | TooManyRequestsException>({
        path: `/v3/attachments/${attachmentId}/restore`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Baseline
     * @name CreateBaseline
     * @summary Create a project or tracker baseline
     * @request POST:/v3/baselines
     * @secure
     */
    createBaseline: (data: CreateBaselineRequest, params: RequestParams = {}) =>
      this.request<
        Baseline,
        | BadRequestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/baselines`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description API can be used for finding a tracker item by a branch id
     *
     * @tags Branches
     * @name GetTrackerItemOnBranch
     * @summary Get tracker item on branch
     * @request GET:/v3/branches/{branchId}/item
     * @secure
     */
    getTrackerItemOnBranch: (branchId: number, query: { sourceItemId: number }, params: RequestParams = {}) =>
      this.request<TrackerItem, RestException | TrackerItem | TooManyRequestsException>({
        path: `/v3/branches/${branchId}/item`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployment
     * @name UploadDeployment
     * @summary Start a deployment process
     * @request POST:/v3/deployment
     * @secure
     */
    uploadDeployment: (data: DeploymentModel, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/deployment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployment
     * @name ExportForDeployment
     * @summary Export projects for deployment
     * @request POST:/v3/deployment/export
     * @secure
     */
    exportForDeployment: (data: ExportForDeploymentRequest, params: RequestParams = {}) =>
      this.request<BackgroundJobReference, RestException | BackgroundJobReference | TooManyRequestsException>({
        path: `/v3/deployment/export`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description API can be used for fetching basic information of tracker items
     *
     * @tags Export
     * @name GetTrackerItems
     * @summary Get tracker items
     * @request POST:/v3/export/items
     * @secure
     */
    getTrackerItems: (data: TrackerItemsRequest, query?: { baselineId?: number }, params: RequestParams = {}) =>
      this.request<TrackerItem[], RestException | TrackerItem[] | TooManyRequestsException>({
        path: `/v3/export/items`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Export
     * @name BatchGetTrackerItemReviews
     * @summary Get tracker item reviews by a list of tracker item IDs
     * @request POST:/v3/export/tracker-item-reviews
     * @secure
     */
    batchGetTrackerItemReviews: (data: BatchGetTrackerItemReviewsRequest, params: RequestParams = {}) =>
      this.request<
        TrackerItemWithTrackerItemReviewsExport[],
        RestException | TrackerItemWithTrackerItemReviewsExport[] | TooManyRequestsException
      >({
        path: `/v3/export/tracker-item-reviews`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's attachment
     * @name GetTrackerItemsAttachmentContents
     * @summary Get attachments of tracker items matching the extension or mime type filters
     * @request POST:/v3/items/attachments/content
     * @secure
     */
    getTrackerItemsAttachmentContents: (data: TrackerItemAttachmentRequest, params: RequestParams = {}) =>
      this.request<File, RestException | void | TooManyRequestsException>({
        path: `/v3/items/attachments/content`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name BulkUpdateTrackerItemFields
     * @summary Bulk update fields of a tracker item
     * @request PUT:/v3/items/fields
     * @secure
     */
    bulkUpdateTrackerItemFields: (
      data: UpdateTrackerItemFieldWithItemId[],
      query?: { atomic?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<BulkOperationResponse, RestException | BulkOperationResponse | TooManyRequestsException>({
        path: `/v3/items/fields`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name FindTrackerItems
     * @summary Get tracker items by cbQL query string
     * @request GET:/v3/items/query
     * @secure
     */
    findTrackerItems: (
      query: { baselineId?: number; page?: number; pageSize?: number; queryString: string },
      params: RequestParams = {},
    ) =>
      this.request<TrackerItemSearchResult, RestException | TrackerItemSearchResult | TooManyRequestsException>({
        path: `/v3/items/query`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description API can be called with a complex cbQL string to find tracker items
     *
     * @tags Tracker item
     * @name FindTrackerItemsByCbQl
     * @summary Get tracker items by cbQL query string
     * @request POST:/v3/items/query
     * @secure
     */
    findTrackerItemsByCbQl: (data: TrackerItemSearchRequest, params: RequestParams = {}) =>
      this.request<TrackerItemSearchResult, RestException | TrackerItemSearchResult | TooManyRequestsException>({
        path: `/v3/items/query`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description API can be used for fetching basic information of tracker items at a specific baseline version
     *
     * @tags Tracker item
     * @name GetBaselineTrackerItemsRelations
     * @summary Get tracker items for a baseline version
     * @request POST:/v3/items/relations
     * @secure
     */
    getBaselineTrackerItemsRelations: (
      data: TrackerItemsRequest,
      query?: { baselineId?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        TrackerItemRelationsResult[],
        RestException | TrackerItemRelationsResult[] | TooManyRequestsException
      >({
        path: `/v3/items/relations`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name DeleteTrackerItem
     * @summary Move tracker item to trash
     * @request DELETE:/v3/items/{itemId}
     * @secure
     */
    deleteTrackerItem: (itemId: number, params: RequestParams = {}) =>
      this.request<TrackerItem, RestException | TrackerItem | TooManyRequestsException>({
        path: `/v3/items/${itemId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description API can be used for fetching basic information of a tracker item
     *
     * @tags Tracker item
     * @name GetTrackerItem
     * @summary Get basic tracker item
     * @request GET:/v3/items/{itemId}
     * @secure
     */
    getTrackerItem: (itemId: number, query?: { version?: number; baselineId?: number }, params: RequestParams = {}) =>
      this.request<TrackerItem, RestException | TrackerItem | TooManyRequestsException>({
        path: `/v3/items/${itemId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name UpdateTrackerItem
     * @summary Update tracker item
     * @request PUT:/v3/items/{itemId}
     * @secure
     */
    updateTrackerItem: (
      itemId: number,
      data: TrackerItem,
      query?: { referenceItemId?: number; position?: "BEFORE" | "AFTER" | "BELOW" },
      params: RequestParams = {},
    ) =>
      this.request<TrackerItem, RestException | TrackerItem | TooManyRequestsException>({
        path: `/v3/items/${itemId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's attachment
     * @name DeleteTrackerItemAttachments
     * @summary Delete attachments of tracker item
     * @request DELETE:/v3/items/{itemId}/attachments
     * @secure
     */
    deleteTrackerItemAttachments: (itemId: number, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/items/${itemId}/attachments`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's attachment
     * @name GetTrackerItemAttachments
     * @summary Get attachments of tracker item
     * @request GET:/v3/items/{itemId}/attachments
     * @secure
     */
    getTrackerItemAttachments: (itemId: number, query?: { fileName?: string }, params: RequestParams = {}) =>
      this.request<AttachmentSearchResult, RestException | AttachmentSearchResult | TooManyRequestsException>({
        path: `/v3/items/${itemId}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's attachment
     * @name UploadTrackerItemAttachment
     * @summary Upload an attachment to a tracker item
     * @request POST:/v3/items/{itemId}/attachments
     * @secure
     */
    uploadTrackerItemAttachment: (itemId: number, data: UploadAttachment, params: RequestParams = {}) =>
      this.request<Attachment[], RestException | Attachment[] | TooManyRequestsException>({
        path: `/v3/items/${itemId}/attachments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's attachment
     * @name GetTrackerItemAttachmentContents
     * @summary Get attachments of a tracker item
     * @request GET:/v3/items/{itemId}/attachments/content
     * @secure
     */
    getTrackerItemAttachmentContents: (itemId: number, params: RequestParams = {}) =>
      this.request<File, RestException | void | TooManyRequestsException>({
        path: `/v3/items/${itemId}/attachments/content`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's attachment
     * @name DeleteTrackerItemAttachment
     * @summary Delete attachment of tracker item by id
     * @request DELETE:/v3/items/{itemId}/attachments/{attachmentId}
     * @secure
     */
    deleteTrackerItemAttachment: (
      itemId: number,
      attachmentId: number,
      query?: { deleteAttachmentGroup?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<Attachment, RestException | Attachment | TooManyRequestsException>({
        path: `/v3/items/${itemId}/attachments/${attachmentId}`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's attachment
     * @name GetTrackerItemAttachment
     * @summary Get attachment of tracker item by id
     * @request GET:/v3/items/{itemId}/attachments/{attachmentId}
     * @secure
     */
    getTrackerItemAttachment: (itemId: number, attachmentId: number, params: RequestParams = {}) =>
      this.request<Attachment, RestException | Attachment | TooManyRequestsException>({
        path: `/v3/items/${itemId}/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's attachment
     * @name GetTrackerItemAttachmentContent
     * @summary Get content of an attachment of tracker item by id
     * @request GET:/v3/items/{itemId}/attachments/{attachmentId}/content
     * @secure
     */
    getTrackerItemAttachmentContent: (itemId: number, attachmentId: number, params: RequestParams = {}) =>
      this.request<
        File,
        RestException | ResourceForbiddenException | ResourceNotFoundException | TooManyRequestsException
      >({
        path: `/v3/items/${itemId}/attachments/${attachmentId}/content`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's attachment
     * @name UpdateAttachmentOfTrackerItem
     * @summary Update content of attachment of tracker item
     * @request PUT:/v3/items/{itemId}/attachments/{attachmentId}/content
     * @secure
     */
    updateAttachmentOfTrackerItem: (
      itemId: number,
      attachmentId: number,
      data: UpdateAttachment,
      params: RequestParams = {},
    ) =>
      this.request<Attachment, RestException | Attachment | TooManyRequestsException>({
        path: `/v3/items/${itemId}/attachments/${attachmentId}/content`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name FindTrackerItemChildren
     * @summary Get child items of a tracker item
     * @request GET:/v3/items/{itemId}/children
     * @secure
     */
    findTrackerItemChildren: (
      itemId: number,
      query?: { page?: number; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        TrackerItemReferenceSearchResult,
        | BadRequestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/items/${itemId}/children`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name PatchChildrenOfTrackerItem
     * @summary Patch the child item list of a tracker item
     * @request PATCH:/v3/items/{itemId}/children
     * @secure
     */
    patchChildrenOfTrackerItem: (
      itemId: number,
      query: { mode: "INSERT" | "REPLACE" | "REMOVE" },
      data: TrackerItemChildReference,
      params: RequestParams = {},
    ) =>
      this.request<
        TrackerItemChildReference,
        | BadRequestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/items/${itemId}/children`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name AddChildToTrackerItem
     * @summary Add a child item to a tracker item
     * @request POST:/v3/items/{itemId}/children
     * @secure
     */
    addChildToTrackerItem: (itemId: number, data: TrackerItemRevision, params: RequestParams = {}) =>
      this.request<
        TrackerItemChildReference,
        | BadRequestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/items/${itemId}/children`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name ReplaceChildrenOfTrackerItem
     * @summary Replace the child item list of a tracker item
     * @request PUT:/v3/items/{itemId}/children
     * @secure
     */
    replaceChildrenOfTrackerItem: (
      itemId: number,
      data: UpdateTrackerItemChildrenRequest,
      query?: { resultPageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        TrackerItemReferenceSearchResult,
        | BadRequestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/items/${itemId}/children`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's comment
     * @name DeleteTrackerItemComments
     * @summary Delete comments of tracker item by item id
     * @request DELETE:/v3/items/{itemId}/comments
     * @secure
     */
    deleteTrackerItemComments: (itemId: number, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/items/${itemId}/comments`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's comment
     * @name GetTrackerItemComments
     * @summary Get comments of tracker item
     * @request GET:/v3/items/{itemId}/comments
     * @secure
     */
    getTrackerItemComments: (itemId: number, params: RequestParams = {}) =>
      this.request<Comment[], RestException | Comment[] | TooManyRequestsException>({
        path: `/v3/items/${itemId}/comments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's comment
     * @name CommentOnTrackerItem
     * @summary Comment on a tracker item
     * @request POST:/v3/items/{itemId}/comments
     * @secure
     */
    commentOnTrackerItem: (itemId: number, data: PostComment, params: RequestParams = {}) =>
      this.request<Comment, RestException | Comment | TooManyRequestsException>({
        path: `/v3/items/${itemId}/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's comment
     * @name DeleteTrackerItemComment
     * @summary Delete comment of tracker item by id
     * @request DELETE:/v3/items/{itemId}/comments/{commentId}
     * @secure
     */
    deleteTrackerItemComment: (itemId: number, commentId: number, params: RequestParams = {}) =>
      this.request<Comment, RestException | Comment | TooManyRequestsException>({
        path: `/v3/items/${itemId}/comments/${commentId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's comment
     * @name GetTrackerItemComment
     * @summary Get comment of tracker item by id
     * @request GET:/v3/items/{itemId}/comments/{commentId}
     * @secure
     */
    getTrackerItemComment: (itemId: number, commentId: number, params: RequestParams = {}) =>
      this.request<Comment, RestException | Comment | TooManyRequestsException>({
        path: `/v3/items/${itemId}/comments/${commentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's comment
     * @name ReplyOnCommentOfTrackerItem
     * @summary Reply on a comment of a tracker item
     * @request POST:/v3/items/{itemId}/comments/{commentId}
     * @secure
     */
    replyOnCommentOfTrackerItem: (itemId: number, commentId: number, data: PostComment, params: RequestParams = {}) =>
      this.request<Comment, RestException | Comment | TooManyRequestsException>({
        path: `/v3/items/${itemId}/comments/${commentId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item's comment
     * @name EditCommentOnTrackerItem
     * @summary Edit comment on a tracker item
     * @request PUT:/v3/items/{itemId}/comments/{commentId}
     * @secure
     */
    editCommentOnTrackerItem: (itemId: number, commentId: number, data: EditComment, params: RequestParams = {}) =>
      this.request<Comment, RestException | Comment | TooManyRequestsException>({
        path: `/v3/items/${itemId}/comments/${commentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name GetTrackerItemFields
     * @summary Get fields of a tracker item
     * @request GET:/v3/items/{itemId}/fields
     * @secure
     */
    getTrackerItemFields: (itemId: number, params: RequestParams = {}) =>
      this.request<TrackerItemField, RestException | TrackerItemField | TooManyRequestsException>({
        path: `/v3/items/${itemId}/fields`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name UpdateCustomFieldTrackerItem
     * @summary Update fields of a tracker item
     * @request PUT:/v3/items/{itemId}/fields
     * @secure
     */
    updateCustomFieldTrackerItem: (
      itemId: number,
      data: UpdateTrackerItemField,
      query?: { quietMode?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<TrackerItem, RestException | TrackerItem | TooManyRequestsException>({
        path: `/v3/items/${itemId}/fields`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name GetItemAccessibility
     * @summary Get a tracker item fields accessibility
     * @request GET:/v3/items/{itemId}/fields/accessibility
     * @secure
     */
    getItemAccessibility: (itemId: number, query?: { targetStatusId?: number }, params: RequestParams = {}) =>
      this.request<
        TrackerItemFieldAccessibilityList,
        RestException | TrackerItemFieldAccessibilityList | TooManyRequestsException
      >({
        path: `/v3/items/${itemId}/fields/accessibility`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name UpdateTableFieldTrackerItem
     * @summary Update table field of tracker item
     * @request PUT:/v3/items/{itemId}/fields/tables/{tableFieldId}
     * @secure
     */
    updateTableFieldTrackerItem: (
      itemId: number,
      tableFieldId: number,
      data: UpdateTrackerItemTableField,
      params: RequestParams = {},
    ) =>
      this.request<TrackerItem, RestException | TrackerItem | TooManyRequestsException>({
        path: `/v3/items/${itemId}/fields/tables/${tableFieldId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name GetChoiceOptions
     * @summary Get the options of a choice field of tracker
     * @request GET:/v3/items/{itemId}/fields/{fieldId}/options
     * @secure
     */
    getChoiceOptions: (
      itemId: number,
      fieldId: number,
      query?: { page?: number; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<ReferenceSearchResult, RestException | ReferenceSearchResult | TooManyRequestsException>({
        path: `/v3/items/${itemId}/fields/${fieldId}/options`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description API can be used for fetching basic information of a tracker item
     *
     * @tags Tracker item
     * @name GetTrackerItemHistory
     * @summary Get tracker item history
     * @request GET:/v3/items/{itemId}/history
     * @secure
     */
    getTrackerItemHistory: (itemId: number, params: RequestParams = {}) =>
      this.request<TrackerItemHistory, RestException | TrackerItemHistory | TooManyRequestsException>({
        path: `/v3/items/${itemId}/history`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name UnlockTrackerItem
     * @summary Unlock a tracker item
     * @request DELETE:/v3/items/{itemId}/lock
     * @secure
     */
    unlockTrackerItem: (itemId: number, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/items/${itemId}/lock`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name CheckTrackerItemLock
     * @summary Check whether a tracker item is locked, and if it is, retrieve the details of the lock
     * @request GET:/v3/items/{itemId}/lock
     * @secure
     */
    checkTrackerItemLock: (itemId: number, params: RequestParams = {}) =>
      this.request<LockInfo, RestException | LockInfo | TooManyRequestsException>({
        path: `/v3/items/${itemId}/lock`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name LockTrackerItem
     * @summary Put a soft lock on a tracker item
     * @request PUT:/v3/items/{itemId}/lock
     * @secure
     */
    lockTrackerItem: (itemId: number, data: LockRequest, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/items/${itemId}/lock`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description API can be used for fetching basic information of tracker items at a specific baseline version
     *
     * @tags Tracker item
     * @name GetBaselineTrackerItemRelations
     * @summary Get tracker items for a baseline version
     * @request GET:/v3/items/{itemId}/relations
     * @secure
     */
    getBaselineTrackerItemRelations: (itemId: number, query?: { baselineId?: number }, params: RequestParams = {}) =>
      this.request<TrackerItemRelationsResult, RestException | TrackerItemRelationsResult | TooManyRequestsException>({
        path: `/v3/items/${itemId}/relations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name GetTrackerItemReviews
     * @summary Get all Tracker Item Reviews for a particular Tracker Item
     * @request GET:/v3/items/{itemId}/reviews
     * @secure
     */
    getTrackerItemReviews: (itemId: number, params: RequestParams = {}) =>
      this.request<TrackerItemReview[], RestException | TrackerItemReview[] | TooManyRequestsException>({
        path: `/v3/items/${itemId}/reviews`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description API can be used for getting available transitions for a tracker item
     *
     * @tags Tracker item
     * @name GetTrackerItemTransitions
     * @summary Get available transitions for a tracker item
     * @request GET:/v3/items/{itemId}/transitions
     * @secure
     */
    getTrackerItemTransitions: (itemId: number, params: RequestParams = {}) =>
      this.request<WorkflowTransition[], RestException | WorkflowTransition[] | TooManyRequestsException>({
        path: `/v3/items/${itemId}/transitions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Background job
     * @name GetBackgroundJob
     * @summary Retrieve background job information
     * @request GET:/v3/job/{jobId}
     * @secure
     */
    getBackgroundJob: (jobId: number, params: RequestParams = {}) =>
      this.request<BackgroundJob, RestException | BackgroundJob | TooManyRequestsException>({
        path: `/v3/job/${jobId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description An endpoint for migrating attachments from a preconfigured source directory.
     *
     * @tags Migration
     * @name MigrateAttachments
     * @summary Migrate attachments
     * @request POST:/v3/migration/attachment
     * @secure
     */
    migrateAttachments: (data: AttachmentMigrationRequest, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/migration/attachment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjects
     * @summary Get projects
     * @request GET:/v3/projects
     * @secure
     */
    getProjects: (params: RequestParams = {}) =>
      this.request<ProjectReference[], RestException | ProjectReference[] | TooManyRequestsException>({
        path: `/v3/projects`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The configuration file needs to be uploaded to codebeamer Documents
     *
     * @tags Project
     * @name DeployConfiguration
     * @summary Deploy a project configuration to a Project
     * @request POST:/v3/projects/deploy
     * @secure
     */
    deployConfiguration: (data: DeployProject, params: RequestParams = {}) =>
      this.request<Project, RestException | Project | TooManyRequestsException>({
        path: `/v3/projects/deploy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name SearchProjects
     * @summary Search projects by given criteria
     * @request POST:/v3/projects/search
     * @secure
     */
    searchProjects: (data: ProjectFilteringRequest, params: RequestParams = {}) =>
      this.request<ProjectSearchResult, RestException | ProjectSearchResult | TooManyRequestsException>({
        path: `/v3/projects/search`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectById
     * @summary Get project
     * @request GET:/v3/projects/{projectId}
     * @secure
     */
    getProjectById: (projectId: number, params: RequestParams = {}) =>
      this.request<Project, RestException | Project | TooManyRequestsException>({
        path: `/v3/projects/${projectId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Export
     * @name Export
     * @summary Exports the specified project to a zip file
     * @request POST:/v3/projects/{projectId}/content
     * @secure
     */
    export: (projectId: number, data: ExportProject, params: RequestParams = {}) =>
      this.request<File, RestException | void | TooManyRequestsException>({
        path: `/v3/projects/${projectId}/content`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetMembersOfProject
     * @summary Get all members of a project
     * @request GET:/v3/projects/{projectId}/members
     * @secure
     */
    getMembersOfProject: (
      projectId: number,
      query?: { page?: number; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<MemberReferenceSearchResult, RestException | MemberReferenceSearchResult | TooManyRequestsException>(
        {
          path: `/v3/projects/${projectId}/members`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectRolesOfMember
     * @summary Get all roles the user has on a project
     * @request GET:/v3/projects/{projectId}/members/{userId}/permissions
     * @secure
     */
    getProjectRolesOfMember: (projectId: number, userId: number, params: RequestParams = {}) =>
      this.request<ProjectMemberPermissions, RestException | ProjectMemberPermissions | TooManyRequestsException>({
        path: `/v3/projects/${projectId}/members/${userId}/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetTrackers
     * @summary Get trackers
     * @request GET:/v3/projects/{projectId}/trackers
     * @secure
     */
    getTrackers: (projectId: number, params: RequestParams = {}) =>
      this.request<TrackerReference[], RestException | TrackerReference[] | TooManyRequestsException>({
        path: `/v3/projects/${projectId}/trackers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name CreateTracker
     * @summary Create a tracker
     * @request POST:/v3/projects/{projectId}/trackers
     * @secure
     */
    createTracker: (projectId: number, data: Tracker, query?: { templateId?: number }, params: RequestParams = {}) =>
      this.request<Tracker, RestException | Tracker | TooManyRequestsException>({
        path: `/v3/projects/${projectId}/trackers`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name SearchAllTrackersInProject
     * @summary Get the list of all trackers in a project
     * @request POST:/v3/projects/{projectId}/trackers/search
     * @secure
     */
    searchAllTrackersInProject: (projectId: number, data: TrackerFilteringRequest, params: RequestParams = {}) =>
      this.request<TrackerSearchResult, RestException | TrackerSearchResult | TooManyRequestsException>({
        path: `/v3/projects/${projectId}/trackers/search`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name RenderWikiMarkup
     * @summary Render a wiki page as HTML in a specific context
     * @request POST:/v3/projects/{projectId}/wiki2html
     * @secure
     */
    renderWikiMarkup: (projectId: number, data: WikiRenderRequest, params: RequestParams = {}) =>
      this.request<string, RestException | string | TooManyRequestsException>({
        path: `/v3/projects/${projectId}/wiki2html`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetTopLevelWikiPages
     * @summary Get wiki pages of a project
     * @request GET:/v3/projects/{projectId}/wikipages
     * @secure
     */
    getTopLevelWikiPages: (projectId: number, params: RequestParams = {}) =>
      this.request<
        WikiOutlineSearchResult,
        | RestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/projects/${projectId}/wikipages`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Report
     * @name CreateReport
     * @summary Create a report
     * @request POST:/v3/reports
     * @secure
     */
    createReport: (data: SimpleReportSettings, params: RequestParams = {}) =>
      this.request<SimpleReportSettings, RestException | SimpleReportSettings | TooManyRequestsException>({
        path: `/v3/reports`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Report
     * @name UpdateReport
     * @summary Update report settings
     * @request PUT:/v3/reports/{reportId}
     * @secure
     */
    updateReport: (reportId: number, data: SimpleReportSettings, params: RequestParams = {}) =>
      this.request<SimpleReportSettings, RestException | SimpleReportSettings | TooManyRequestsException>({
        path: `/v3/reports/${reportId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Report
     * @name GetReportItemsById
     * @summary Get a report items by id of the report
     * @request GET:/v3/reports/{reportId}/items
     * @secure
     */
    getReportItemsById: (reportId: number, query?: { page?: number; pageSize?: number }, params: RequestParams = {}) =>
      this.request<ReportItemResult, RestException | ReportItemResult | TooManyRequestsException>({
        path: `/v3/reports/${reportId}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Report
     * @name GetReportById
     * @summary Get a report results by id of the report
     * @request GET:/v3/reports/{reportId}/results
     * @secure
     */
    getReportById: (reportId: number, query?: { page?: number; pageSize?: number }, params: RequestParams = {}) =>
      this.request<ReportResult, RestException | ReportResult | TooManyRequestsException>({
        path: `/v3/reports/${reportId}/results`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name GetRoles
     * @summary Get roles
     * @request GET:/v3/roles
     * @secure
     */
    getRoles: (params: RequestParams = {}) =>
      this.request<RoleReference[], RestException | RoleReference[] | TooManyRequestsException>({
        path: `/v3/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name GetRole
     * @summary Get role
     * @request GET:/v3/roles/{roleId}
     * @secure
     */
    getRole: (roleId: number, params: RequestParams = {}) =>
      this.request<Role, RestException | Role | TooManyRequestsException>({
        path: `/v3/roles/${roleId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags System
     * @name GetSystemStatus
     * @summary Get system maintenance status
     * @request GET:/v3/system/maintenance
     * @secure
     */
    getSystemStatus: (params: RequestParams = {}) =>
      this.request<
        SystemStatus,
        RestException | ResourceUnauthorizedException | ResourceForbiddenException | TooManyRequestsException
      >({
        path: `/v3/system/maintenance`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags System
     * @name SetSystemStatus
     * @summary Set system maintenance status
     * @request PUT:/v3/system/maintenance
     * @secure
     */
    setSystemStatus: (data: MaintenanceMode, params: RequestParams = {}) =>
      this.request<
        SystemStatus,
        BadRequestException | ResourceUnauthorizedException | ResourceForbiddenException | TooManyRequestsException
      >({
        path: `/v3/system/maintenance`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test Management
     * @name AutoApplyStepReuses
     * @summary Find duplicate TestSteps in a set of TestCases and converting duplicates to Reuses
     * @request POST:/v3/testcases/autoApplyStepReuses
     * @secure
     */
    autoApplyStepReuses: (data: AutoApplyTestStepReuses, params: RequestParams = {}) =>
      this.request<TrackerItemReference[], RestException | ResourceUnauthorizedException | TooManyRequestsException>({
        path: `/v3/testcases/autoApplyStepReuses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test run
     * @name UpdateTestRunResult
     * @summary Update result of a Test Run
     * @request PUT:/v3/testruns/{testRunId}
     * @secure
     */
    updateTestRunResult: (testRunId: number, data: UpdateTestRunRequest, params: RequestParams = {}) =>
      this.request<
        TrackerItem,
        | BadRequestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/testruns/${testRunId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get traceability initial ids!
     *
     * @tags Traceability
     * @name GetTraceabilityInitialItemIds
     * @summary Get initial ids
     * @request POST:/v3/traceability/items
     * @secure
     */
    getTraceabilityInitialItemIds: (
      data: TraceabilityInitialLevelFilter,
      query?: { pageSize?: number; pageNo?: number },
      params: RequestParams = {},
    ) =>
      this.request<TraceabilityItem[], RestException | TraceabilityItem[] | TooManyRequestsException>({
        path: `/v3/traceability/items`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get traceability item ids!
     *
     * @tags Traceability
     * @name GetTraceabilityLevelItemIds
     * @summary Get traceability level item ids
     * @request POST:/v3/traceability/relations
     * @secure
     */
    getTraceabilityLevelItemIds: (
      data: TraceabilityLevelFilter,
      query?: { itemsOnLevel?: number; itemsFromPreviousItem?: number },
      params: RequestParams = {},
    ) =>
      this.request<TraceabilityResult, RestException | TraceabilityResult | TooManyRequestsException>({
        path: `/v3/traceability/relations`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker permission
     * @name GetTrackerPermissions
     * @summary Get available tracker permissions
     * @request GET:/v3/trackers/permissions
     * @secure
     */
    getTrackerPermissions: (params: RequestParams = {}) =>
      this.request<
        TrackerPermissionReference[],
        RestException | TrackerPermissionReference[] | TooManyRequestsException
      >({
        path: `/v3/trackers/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker permission
     * @name GetTrackerPermission
     * @summary Get the immutable definition of a tracker permission
     * @request GET:/v3/trackers/permissions/{trackerPermissionId}
     * @secure
     */
    getTrackerPermission: (trackerPermissionId: number, params: RequestParams = {}) =>
      this.request<TrackerPermission, RestException | TrackerPermission | TooManyRequestsException>({
        path: `/v3/trackers/permissions/${trackerPermissionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetTrackerTypes
     * @summary Get the list of tracker types
     * @request GET:/v3/trackers/types
     * @secure
     */
    getTrackerTypes: (query?: { outline?: "ENABLED" | "DISABLED" | "ANY" }, params: RequestParams = {}) =>
      this.request<TrackerTypeReference[], RestException | TrackerTypeReference[] | TooManyRequestsException>({
        path: `/v3/trackers/types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetTrackerType
     * @summary Get the immutable definition of a tracker type
     * @request GET:/v3/trackers/types/{trackerTypeId}
     * @secure
     */
    getTrackerType: (trackerTypeId: number, params: RequestParams = {}) =>
      this.request<TrackerType, RestException | TrackerType | TooManyRequestsException>({
        path: `/v3/trackers/types/${trackerTypeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description For multiple test sets please use trackers/{testRunTrackerId}/testruns/generatefromtestset endpoint.
     *
     * @tags Test run
     * @name CreateTestRunForTestCase
     * @summary Create a new test run for test cases or test sets
     * @request POST:/v3/trackers/{testRunTrackerId}/testruns
     * @secure
     */
    createTestRunForTestCase: (testRunTrackerId: number, data: CreateTestRunRequest, params: RequestParams = {}) =>
      this.request<
        TrackerItem,
        | ResourceUnauthorizedException
        | BadRequestException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
        | InternalServerErrorException
      >({
        path: `/v3/trackers/${testRunTrackerId}/testruns`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test run
     * @name CreateTestRunForTestSets
     * @summary Create a new test run for test cases or test sets
     * @request POST:/v3/trackers/{testRunTrackerId}/testruns/generatefromtestset
     * @secure
     */
    createTestRunForTestSets: (
      testRunTrackerId: number,
      data: CreateTestRunFromTestSetsRequest,
      params: RequestParams = {},
    ) =>
      this.request<
        TestRunResult,
        | ResourceUnauthorizedException
        | BadRequestException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
        | InternalServerErrorException
      >({
        path: `/v3/trackers/${testRunTrackerId}/testruns/generatefromtestset`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name DeleteTracker
     * @summary Deletes a tracker
     * @request DELETE:/v3/trackers/{trackerId}
     * @secure
     */
    deleteTracker: (trackerId: number, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetTracker
     * @summary Get tracker
     * @request GET:/v3/trackers/{trackerId}
     * @secure
     */
    getTracker: (trackerId: number, params: RequestParams = {}) =>
      this.request<Tracker, RestException | Tracker | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name UpdateTracker
     * @summary Updates a specific tracker
     * @request PUT:/v3/trackers/{trackerId}
     * @secure
     */
    updateTracker: (trackerId: number, data: Tracker, params: RequestParams = {}) =>
      this.request<Tracker, RestException | Tracker | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetTrackerBaselines
     * @summary Get baselines of a specific tracker
     * @request GET:/v3/trackers/{trackerId}/baselines
     * @secure
     */
    getTrackerBaselines: (trackerId: number, params: RequestParams = {}) =>
      this.request<ReferenceSearchResult, RestException | ReferenceSearchResult | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/baselines`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name FindTrackerChildren
     * @summary Get child items of a tracker item
     * @request GET:/v3/trackers/{trackerId}/children
     * @secure
     */
    findTrackerChildren: (
      trackerId: number,
      query?: { page?: number; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        TrackerItemReferenceSearchResult,
        | BadRequestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/trackers/${trackerId}/children`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name PatchChildrenOfTracker
     * @summary Patch the child item list of a tracker item
     * @request PATCH:/v3/trackers/{trackerId}/children
     * @secure
     */
    patchChildrenOfTracker: (
      trackerId: number,
      data: TrackerItemChildReference,
      query?: { mode?: "INSERT" },
      params: RequestParams = {},
    ) =>
      this.request<
        TrackerItemChildReference,
        | BadRequestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/trackers/${trackerId}/children`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name AddChildToTracker
     * @summary Add a child item to a tracker item
     * @request POST:/v3/trackers/{trackerId}/children
     * @secure
     */
    addChildToTracker: (trackerId: number, data: TrackerItemRevision, params: RequestParams = {}) =>
      this.request<
        TrackerItemChildReference,
        | BadRequestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/trackers/${trackerId}/children`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name ReplaceChildrenOfTracker
     * @summary Reorder the child item list of a tracker
     * @request PUT:/v3/trackers/{trackerId}/children
     * @secure
     */
    replaceChildrenOfTracker: (
      trackerId: number,
      data: UpdateTrackerItemChildrenRequest,
      query?: { resultPageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        TrackerItemReferenceSearchResult,
        | BadRequestException
        | ResourceUnauthorizedException
        | ResourceForbiddenException
        | ResourceNotFoundException
        | TooManyRequestsException
      >({
        path: `/v3/trackers/${trackerId}/children`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetTrackerFields
     * @summary Get fields of tracker
     * @request GET:/v3/trackers/{trackerId}/fields
     * @secure
     */
    getTrackerFields: (trackerId: number, params: RequestParams = {}) =>
      this.request<FieldReference[], RestException | FieldReference[] | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/fields`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetTrackerFieldsPermissions
     * @summary Get permissions of all fields of a tracker
     * @request GET:/v3/trackers/{trackerId}/fields/permissions
     * @secure
     */
    getTrackerFieldsPermissions: (trackerId: number, query?: { statusId?: number }, params: RequestParams = {}) =>
      this.request<
        TrackerFieldsStatusPermissions,
        RestException | TrackerFieldsStatusPermissions | TooManyRequestsException
      >({
        path: `/v3/trackers/${trackerId}/fields/permissions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetTrackerField
     * @summary Get field of tracker
     * @request GET:/v3/trackers/{trackerId}/fields/{fieldId}
     * @secure
     */
    getTrackerField: (trackerId: number, fieldId: number, params: RequestParams = {}) =>
      this.request<AbstractField, RestException | AbstractField | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/fields/${fieldId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetChoiceOption
     * @summary Get option of a choice field of tracker
     * @request GET:/v3/trackers/{trackerId}/fields/{fieldId}/options/{optionId}
     * @secure
     */
    getChoiceOption: (trackerId: number, fieldId: number, optionId: number, params: RequestParams = {}) =>
      this.request<ChoiceOptionReference, RestException | ChoiceOptionReference | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/fields/${fieldId}/options/${optionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetTrackerFieldPermissions
     * @summary Get permissions of tracker field
     * @request GET:/v3/trackers/{trackerId}/fields/{fieldId}/permissions
     * @secure
     */
    getTrackerFieldPermissions: (
      trackerId: number,
      fieldId: number,
      query?: { statusId?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        TrackerFieldStatusPermissions[],
        RestException | TrackerFieldStatusPermissions[] | TooManyRequestsException
      >({
        path: `/v3/trackers/${trackerId}/fields/${fieldId}/permissions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name UpdateTrackerIcon
     * @summary Upload a tracker icon
     * @request PUT:/v3/trackers/{trackerId}/icon
     * @secure
     */
    updateTrackerIcon: (trackerId: number, data: { icon: File }, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/icon`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetItemsByTracker
     * @summary Get items in a specific tracker
     * @request GET:/v3/trackers/{trackerId}/items
     * @secure
     */
    getItemsByTracker: (trackerId: number, query?: { page?: number; pageSize?: number }, params: RequestParams = {}) =>
      this.request<
        TrackerItemReferenceSearchResult,
        RestException | TrackerItemReferenceSearchResult | TooManyRequestsException
      >({
        path: `/v3/trackers/${trackerId}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker item
     * @name CreateTrackerItem
     * @summary Create a tracker item
     * @request POST:/v3/trackers/{trackerId}/items
     * @secure
     */
    createTrackerItem: (
      trackerId: number,
      data: TrackerItem,
      query?: { parentItemId?: number; referenceItemId?: number; position?: "BEFORE" | "AFTER" | "BELOW" },
      params: RequestParams = {},
    ) =>
      this.request<TrackerItem, RestException | TrackerItem | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/items`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetTrackerOutline
     * @summary Get outline of a specific tracker
     * @request GET:/v3/trackers/{trackerId}/outline
     * @secure
     */
    getTrackerOutline: (
      trackerId: number,
      query?: { parentItemId?: number; resultDepthFilter?: number },
      params: RequestParams = {},
    ) =>
      this.request<OutlineItemSearchResult, RestException | OutlineItemSearchResult | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/outline`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description API can be used to list tracker permissions per roles, filtering is possible by user, user and on of the user's role, or just by role
     *
     * @tags Tracker permission
     * @name GetTrackerPermissionsWithRoles
     * @summary List tracker permissions per role
     * @request GET:/v3/trackers/{trackerId}/permissions
     * @secure
     */
    getTrackerPermissionsWithRoles: (
      trackerId: number,
      query?: { userId?: number; roleId?: number },
      params: RequestParams = {},
    ) =>
      this.request<RoleWithPermissions[], RestException | RoleWithPermissions[] | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/permissions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker report
     * @name GetTrackerReports
     * @summary Get all reports of a specific tracker
     * @request GET:/v3/trackers/{trackerId}/reports
     * @secure
     */
    getTrackerReports: (trackerId: number, params: RequestParams = {}) =>
      this.request<ReportReference[], RestException | ReportReference[] | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/reports`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker report
     * @name CreateTrackerReport
     * @summary Creates a report of a specific tracker
     * @request POST:/v3/trackers/{trackerId}/reports
     * @secure
     */
    createTrackerReport: (trackerId: number, data: TrackerReportSettings, params: RequestParams = {}) =>
      this.request<TrackerReportSettings, RestException | TrackerReportSettings | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/reports`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker report
     * @name DeleteTrackerReport
     * @summary Deletes a report of a specific tracker
     * @request DELETE:/v3/trackers/{trackerId}/reports/{reportId}
     * @secure
     */
    deleteTrackerReport: (trackerId: number, reportId: number, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/reports/${reportId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker report
     * @name UpdateTrackerReport
     * @summary Updates a report of a specific tracker
     * @request PUT:/v3/trackers/{trackerId}/reports/{reportId}
     * @secure
     */
    updateTrackerReport: (
      trackerId: number,
      reportId: number,
      data: TrackerReportSettings,
      params: RequestParams = {},
    ) =>
      this.request<TrackerReportSettings, RestException | TrackerReportSettings | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/reports/${reportId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker report
     * @name GetTrackerReportItems
     * @summary Get report items of a specific tracker view
     * @request GET:/v3/trackers/{trackerId}/reports/{reportId}/items
     * @secure
     */
    getTrackerReportItems: (
      trackerId: number,
      reportId: number,
      query?: { page?: number; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<ReportItemResult, RestException | ReportItemResult | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/reports/${reportId}/items`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker report
     * @name GetTrackerReport
     * @summary Get a report of a specific tracker
     * @request GET:/v3/trackers/{trackerId}/reports/{reportId}/results
     * @secure
     */
    getTrackerReport: (
      trackerId: number,
      reportId: number,
      query?: { page?: number; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<ReportResult, RestException | ReportResult | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/reports/${reportId}/results`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker permission
     * @name RemovePermissions
     * @summary Removes all tracker permissions from a specific role
     * @request DELETE:/v3/trackers/{trackerId}/roles/{roleId}/permissions
     * @secure
     */
    removePermissions: (trackerId: number, roleId: number, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/roles/${roleId}/permissions`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker permission
     * @name UpdatePermission
     * @summary Set the tracker permissions for a specific role
     * @request PUT:/v3/trackers/{trackerId}/roles/{roleId}/permissions
     * @secure
     */
    updatePermission: (trackerId: number, roleId: number, data: PermissionIdsRequest, params: RequestParams = {}) =>
      this.request<RoleWithPermissions[], RestException | RoleWithPermissions[] | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/roles/${roleId}/permissions`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetTrackerSchema
     * @summary Get the schema of a tracker
     * @request GET:/v3/trackers/{trackerId}/schema
     * @secure
     */
    getTrackerSchema: (trackerId: number, params: RequestParams = {}) =>
      this.request<AbstractField[], RestException | AbstractField[] | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/schema`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tracker
     * @name GetTrackerTransitions
     * @summary Get all transitions of a specific tracker
     * @request GET:/v3/trackers/{trackerId}/transitions
     * @secure
     */
    getTrackerTransitions: (trackerId: number, query?: { fromStatusId?: number }, params: RequestParams = {}) =>
      this.request<WorkflowTransition[], RestException | WorkflowTransition[] | TooManyRequestsException>({
        path: `/v3/trackers/${trackerId}/transitions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name GetUsers
     * @summary Get users
     * @request GET:/v3/users
     * @secure
     */
    getUsers: (
      query?: { page?: number; pageSize?: number; groupId?: number; queryString?: string },
      params: RequestParams = {},
    ) =>
      this.request<UserReferenceSearchResult, RestException | UserReferenceSearchResult | TooManyRequestsException>({
        path: `/v3/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name GetUserByEmail
     * @summary Get user by email address
     * @request GET:/v3/users/findByEmail
     * @secure
     */
    getUserByEmail: (query: { email: string }, params: RequestParams = {}) =>
      this.request<User, RestException | User | TooManyRequestsException>({
        path: `/v3/users/findByEmail`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name GetUserByName
     * @summary Get user by name
     * @request GET:/v3/users/findByName
     * @secure
     */
    getUserByName: (query: { name: string }, params: RequestParams = {}) =>
      this.request<User, RestException | User | TooManyRequestsException>({
        path: `/v3/users/findByName`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Group
     * @name GetGroups
     * @summary Get user groups
     * @request GET:/v3/users/groups
     * @secure
     */
    getGroups: (params: RequestParams = {}) =>
      this.request<UserGroupReference[], RestException | UserGroupReference[] | TooManyRequestsException>({
        path: `/v3/users/groups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Group
     * @name GetGroup
     * @summary Get user group
     * @request GET:/v3/users/groups/{groupId}
     * @secure
     */
    getGroup: (groupId: number, params: RequestParams = {}) =>
      this.request<UserGroup, RestException | UserGroup | TooManyRequestsException>({
        path: `/v3/users/groups/${groupId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Group
     * @name GetGroupMembers
     * @summary Get all members of a user group
     * @request GET:/v3/users/groups/{groupId}/members
     * @secure
     */
    getGroupMembers: (groupId: number, query?: { page?: number; pageSize?: number }, params: RequestParams = {}) =>
      this.request<UserReferenceSearchResult, RestException | UserReferenceSearchResult | TooManyRequestsException>({
        path: `/v3/users/groups/${groupId}/members`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name SearchUsers
     * @summary Search users
     * @request POST:/v3/users/search
     * @secure
     */
    searchUsers: (
      data: UserFilteringRequest,
      query?: { page?: number; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<UserSearchResult, RestException | UserSearchResult | TooManyRequestsException>({
        path: `/v3/users/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name GetUser
     * @summary Get user
     * @request GET:/v3/users/{userId}
     * @secure
     */
    getUser: (userId: number, params: RequestParams = {}) =>
      this.request<User, RestException | User | TooManyRequestsException>({
        path: `/v3/users/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name CreateWikiPage
     * @summary Create a new wiki page
     * @request POST:/v3/wikipages
     * @secure
     */
    createWikiPage: (data: WikiPage, params: RequestParams = {}) =>
      this.request<WikiPage, RestException | WikiPage | TooManyRequestsException>({
        path: `/v3/wikipages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name UpdateWikiPage
     * @summary Update and/or move a wiki page
     * @request PUT:/v3/wikipages/{itemId}
     * @secure
     */
    updateWikiPage: (itemId: number, data: WikiPage, params: RequestParams = {}) =>
      this.request<WikiPage, RestException | WikiPage | TooManyRequestsException>({
        path: `/v3/wikipages/${itemId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name DeleteWikiPage
     * @summary Delete a wiki page by its ID
     * @request DELETE:/v3/wikipages/{wikiId}
     * @secure
     */
    deleteWikiPage: (wikiId: number, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/wikipages/${wikiId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name GetWikiPage
     * @summary Get wiki page
     * @request GET:/v3/wikipages/{wikiId}
     * @secure
     */
    getWikiPage: (wikiId: number, query?: { version?: number }, params: RequestParams = {}) =>
      this.request<WikiPage, RestException | WikiPage | TooManyRequestsException>({
        path: `/v3/wikipages/${wikiId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki's comment
     * @name GetAttachmentByName
     * @summary Get attachment of wiki page by file name
     * @request GET:/v3/wikipages/{wikiId}/attachments
     * @secure
     */
    getAttachmentByName: (wikiId: number, query: { fileName: string }, params: RequestParams = {}) =>
      this.request<Attachment, RestException | Attachment | TooManyRequestsException>({
        path: `/v3/wikipages/${wikiId}/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki's comment
     * @name CommentOnWiki
     * @summary Comment on a wiki page
     * @request POST:/v3/wikipages/{wikiId}/comments
     * @secure
     */
    commentOnWiki: (wikiId: number, data: PostComment, params: RequestParams = {}) =>
      this.request<AttachmentReference[], RestException | AttachmentReference[] | TooManyRequestsException>({
        path: `/v3/wikipages/${wikiId}/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name GetWikiPageHistory
     * @summary Returns the change history of the specified wiki page
     * @request GET:/v3/wikipages/{wikiId}/history
     * @secure
     */
    getWikiPageHistory: (wikiId: number, query?: { page?: number; pageSize?: number }, params: RequestParams = {}) =>
      this.request<
        ArtifactRevisionSearchResult,
        RestException | ArtifactRevisionSearchResult | TooManyRequestsException
      >({
        path: `/v3/wikipages/${wikiId}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name RenderWikiPage
     * @summary Render a wiki page as HTML
     * @request GET:/v3/wikipages/{wikiId}/html
     * @secure
     */
    renderWikiPage: (wikiId: number, query?: { version?: number }, params: RequestParams = {}) =>
      this.request<string, RestException | string | TooManyRequestsException>({
        path: `/v3/wikipages/${wikiId}/html`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name UnlockWikiPage
     * @summary Unlock a wiki page
     * @request DELETE:/v3/wikipages/{wikiId}/lock
     * @secure
     */
    unlockWikiPage: (wikiId: number, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/wikipages/${wikiId}/lock`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name CheckWikiPageLock
     * @summary Check whether a wiki page is locked, and if it is, retrieve the details of the lock
     * @request GET:/v3/wikipages/{wikiId}/lock
     * @secure
     */
    checkWikiPageLock: (wikiId: number, params: RequestParams = {}) =>
      this.request<LockInfo, RestException | LockInfo | TooManyRequestsException>({
        path: `/v3/wikipages/${wikiId}/lock`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name LockWikiPage
     * @summary Lock a wiki page
     * @request PUT:/v3/wikipages/{wikiId}/lock
     * @secure
     */
    lockWikiPage: (wikiId: number, data: LockRequest, params: RequestParams = {}) =>
      this.request<void, RestException | void | TooManyRequestsException>({
        path: `/v3/wikipages/${wikiId}/lock`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name GetWikiPermissions
     * @summary Get permissions of a wiki page
     * @request GET:/v3/wikipages/{wikiId}/permissions
     * @secure
     */
    getWikiPermissions: (wikiId: number, params: RequestParams = {}) =>
      this.request<AccessPermission[], RestException | AccessPermission[] | TooManyRequestsException>({
        path: `/v3/wikipages/${wikiId}/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name SetWikiPermissions
     * @summary Set permissions of a wiki page
     * @request PUT:/v3/wikipages/{wikiId}/permissions
     * @secure
     */
    setWikiPermissions: (
      wikiId: number,
      data: AccessPermissionsRequest,
      query?: { recursive?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<AccessPermission[], RestException | AccessPermission[] | TooManyRequestsException>({
        path: `/v3/wikipages/${wikiId}/permissions`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Wiki
     * @name RestoreWikiPageContent
     * @summary Restores the content from a previous version of a wiki page
     * @request PUT:/v3/wikipages/{wikiId}/restorecontent
     * @secure
     */
    restoreWikiPageContent: (wikiId: number, query: { version: number }, params: RequestParams = {}) =>
      this.request<WikiPage, RestException | WikiPage | TooManyRequestsException>({
        path: `/v3/wikipages/${wikiId}/restorecontent`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
