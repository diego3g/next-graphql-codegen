/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  complement: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  countryCode: Scalars['String'];
  foreignAddress?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  neighborhood: Scalars['String'];
  number: Scalars['String'];
  postalCode: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
};

export type BilletInput = {
  instructions: Scalars['String'];
};

export type Certificate = {
  __typename?: 'Certificate';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  language: Scalars['String'];
  student: User;
  theme: Scalars['String'];
  trail: Trail;
};

export type Challenge = {
  __typename?: 'Challenge';
  appliedCourses: Array<Course>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  instructionsUrl: Scalars['String'];
  level: ChallengeLevel;
  requirements: Scalars['String'];
  slug: Scalars['String'];
  submission?: Maybe<ChallengeSubmission>;
  tags: Array<ChallengeTag>;
  title: Scalars['String'];
  trail: Trail;
};

/** Available levels for challenges */
export enum ChallengeLevel {
  Advanced = 'ADVANCED',
  Basic = 'BASIC',
  Intermediate = 'INTERMEDIATE'
}

export type ChallengeSubmission = {
  __typename?: 'ChallengeSubmission';
  challenge: Challenge;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  student: User;
  submissionUrl: Scalars['String'];
};

export type ChallengeTag = {
  __typename?: 'ChallengeTag';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  mentionedUsers: Array<User>;
  reactions: PaginatedCommentReaction;
  viewerIsAuthor?: Maybe<Scalars['Boolean']>;
  viewerReaction?: Maybe<CommentReaction>;
};


export type CommentReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type CommentReaction = {
  __typename?: 'CommentReaction';
  author: User;
  id: Scalars['ID'];
  type: ReactionType;
};

export type Connection = {
  __typename?: 'Connection';
  author: User;
  id: Scalars['ID'];
  receiver: User;
  status: ConnectionStatus;
};

/** Available connection status */
export enum ConnectionStatus {
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export type Course = {
  __typename?: 'Course';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  educator: Educator;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastWatchedLesson?: Maybe<Lesson>;
  lessonGroups: Array<LessonGroup>;
  order: Scalars['Float'];
  slug: Scalars['String'];
  statistics?: Maybe<CourseStatistics>;
  title: Scalars['String'];
  trail: Trail;
  watchedPercentage?: Maybe<Scalars['Float']>;
};

export type CourseProgress = {
  __typename?: 'CourseProgress';
  completed: Scalars['Boolean'];
  slug: Scalars['String'];
};

export type CourseStatistics = {
  __typename?: 'CourseStatistics';
  duration: Scalars['Float'];
  totalLessons: Scalars['Float'];
};

export type CreateAddressInput = {
  city: Scalars['String'];
  complement: Scalars['String'];
  country?: InputMaybe<Scalars['String']>;
  countryCode: Scalars['String'];
  foreignAddress?: InputMaybe<Scalars['String']>;
  neighborhood: Scalars['String'];
  number: Scalars['String'];
  postalCode: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
};

export type CreateChallengeSubmissionInput = {
  challengeId: Scalars['String'];
  submissionUrl: Scalars['String'];
};

export type CreateCommentInput = {
  content: Scalars['String'];
  mentionedUsersIds?: InputMaybe<Array<Scalars['String']>>;
  postId: Scalars['String'];
};

export type CreateCommentReactionInput = {
  commentId: Scalars['String'];
  type: ReactionType;
};

export type CreateCustomerInput = {
  address: CreateAddressInput;
  atlasUserId?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fiscalDocument: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  thirdPartyFiscalDocument?: InputMaybe<Scalars['String']>;
};

export type CreateImpressionInput = {
  clicked?: InputMaybe<Scalars['Boolean']>;
  reference?: InputMaybe<Scalars['String']>;
  type: ImpressionType;
  videoId: Scalars['String'];
};

export type CreateLinkPostInput = {
  content: Scalars['String'];
  link: Scalars['String'];
  linkPreviewId?: InputMaybe<Scalars['String']>;
  mentionedUsersIds?: InputMaybe<Array<Scalars['String']>>;
  tagsIds: Array<Scalars['String']>;
};

export type CreatePlanInput = {
  extensionPlanId?: InputMaybe<Scalars['String']>;
  identifier: Scalars['String'];
  installmentMonths: Array<Scalars['Float']>;
  isPurchaseable: Scalars['Boolean'];
  isRecurrent: Scalars['Boolean'];
  priceInCents: Scalars['Float'];
  products: Array<CreateProductInput>;
  proviUrl?: InputMaybe<Scalars['String']>;
  recurrenceInterval: Scalars['Float'];
  recurrencePeriod: RecurrencePeriod;
  refundDays?: InputMaybe<Scalars['Float']>;
  slug: Scalars['String'];
  statementDescriptor?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreatePostReactionInput = {
  postId: Scalars['String'];
  type: ReactionType;
};

export type CreateProductInput = {
  cycles: Scalars['Float'];
  identifier: Scalars['String'];
  priceInCents: Scalars['Float'];
  quantity: Scalars['Float'];
  title: Scalars['String'];
};

export type CreateSignatureInput = {
  campaign?: InputMaybe<Scalars['String']>;
  couponCode?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<CreateCustomerInput>;
  /** One of these fields must be informed according to the chosen payment method */
  paymentInfo: PaymentTypes;
  paymentMethod: InvoicePaymentTypes;
  referral?: InputMaybe<Scalars['String']>;
  referralUserId?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  upsell?: InputMaybe<UpsellTypes>;
};

export type CreateStudentInput = {
  atlasUserId: Scalars['String'];
  email: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
};

export type Creator = {
  __typename?: 'Creator';
  about?: Maybe<Scalars['String']>;
  atlasUserId: Scalars['String'];
  avatarUrl?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  expertises: PaginatedExpertises;
  id: Scalars['ID'];
  isFollowingCreator: Scalars['Boolean'];
  name: Scalars['String'];
  occupation?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  videos: PaginatedVideos;
};


export type CreatorExpertisesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type CreatorVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type CreditCardInput = {
  installments: Scalars['Float'];
  paymentToken: Scalars['String'];
};

export type DefaultLinkPreview = LinkPreview & {
  __typename?: 'DefaultLinkPreview';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Discount = {
  __typename?: 'Discount';
  valueInCents: Scalars['Int'];
};

export type Educator = {
  __typename?: 'Educator';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  profileUrl: Scalars['String'];
  role: Scalars['String'];
  technologies: Array<Technology>;
};

export type Expertise = {
  __typename?: 'Expertise';
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type Feedback = {
  __typename?: 'Feedback';
  additionalInformation?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lesson: Lesson;
  stars: Scalars['Float'];
  student: User;
  time: Scalars['Float'];
};

export type GenerateLinkPreviewInput = {
  url: Scalars['String'];
};

export type GenerateLinkPreviewResult = {
  __typename?: 'GenerateLinkPreviewResult';
  value?: Maybe<LinkPreview>;
};

export type GithubLinkPreview = LinkPreview & {
  __typename?: 'GithubLinkPreview';
  avatarUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  forks?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  repositoryName?: Maybe<Scalars['String']>;
  repositoryOwner?: Maybe<Scalars['String']>;
  stars?: Maybe<Scalars['Float']>;
  url: Scalars['String'];
};

export type Impression = {
  __typename?: 'Impression';
  clicked?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  memberId: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  type: ImpressionType;
  videoId: Scalars['String'];
};

/** Available impression types */
export enum ImpressionType {
  Bookmark = 'BOOKMARK',
  Catalog = 'CATALOG',
  FollowingTags = 'FOLLOWING_TAGS',
  History = 'HISTORY',
  Playlist = 'PLAYLIST',
  Profile = 'PROFILE',
  Search = 'SEARCH',
  Tag = 'TAG'
}

export type Invoice = {
  __typename?: 'Invoice';
  amountInCents: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  currencyCode: Scalars['String'];
  externalTransactionId: Scalars['String'];
  id: Scalars['ID'];
  installmentsAmount: Scalars['Float'];
  metadata?: Maybe<Scalars['String']>;
  paymentEngine: Scalars['String'];
  paymentType: InvoicePaymentTypes;
  refundedAt?: Maybe<Scalars['DateTime']>;
  signature: Signature;
  status: InvoiceStatus;
};

/** Available invoice payment type status */
export enum InvoicePaymentTypes {
  Billet = 'BILLET',
  CreditCard = 'CREDIT_CARD',
  DebitCard = 'DEBIT_CARD',
  Financing = 'FINANCING',
  Pix = 'PIX',
  Scholarship = 'SCHOLARSHIP',
  Voucher = 'VOUCHER'
}

/** Available invoice status */
export enum InvoiceStatus {
  Canceled = 'CANCELED',
  Failed = 'FAILED',
  Paid = 'PAID',
  Pending = 'PENDING',
  Processed = 'PROCESSED',
  Refunded = 'REFUNDED',
  RefundRequested = 'REFUND_REQUESTED'
}

export type IsValidUsername = {
  __typename?: 'IsValidUsername';
  isValid: Scalars['Boolean'];
};

/** Job status */
export enum JobStatus {
  Employed = 'EMPLOYED',
  Freelancer = 'FREELANCER',
  Undefined = 'UNDEFINED',
  Unemployed = 'UNEMPLOYED'
}

export type LastWatchedLessons = {
  __typename?: 'LastWatchedLessons';
  lastLesson?: Maybe<Lesson>;
  lastLessonsByTrail?: Maybe<Array<LastWatchedLessonsByTrail>>;
};

export type LastWatchedLessonsByTrail = {
  __typename?: 'LastWatchedLessonsByTrail';
  lesson?: Maybe<Lesson>;
  trailSlug: Scalars['String'];
};

export type Lesson = {
  __typename?: 'Lesson';
  audioDescriptionVideoId?: Maybe<Scalars['String']>;
  course: Course;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  duration: Scalars['Float'];
  feedback?: Maybe<Feedback>;
  hasCaption: Scalars['Boolean'];
  id: Scalars['ID'];
  jupiterVideoId: Scalars['String'];
  lessonGroup: LessonGroup;
  order: Scalars['Float'];
  progress?: Maybe<LessonProgress>;
  signalLanguageVideoId?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  transcription?: Maybe<Transcription>;
};

export type LessonGroup = {
  __typename?: 'LessonGroup';
  course: Course;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lessons: Array<Lesson>;
  order: Scalars['Float'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type LessonProgress = {
  __typename?: 'LessonProgress';
  completed?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lesson: Lesson;
  manuallyCompleted?: Maybe<Scalars['Boolean']>;
  student: User;
  watchedPercentage?: Maybe<Scalars['Float']>;
  watchedSeconds?: Maybe<Scalars['Float']>;
};

export type LinkPost = Post & {
  __typename?: 'LinkPost';
  author: User;
  comments: PaginatedComment;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  link: Scalars['String'];
  linkPreview?: Maybe<LinkPreview>;
  mentionedUsers: Array<User>;
  reactions: PaginatedPostReaction;
  tags: Array<Tag>;
  viewerBookmark?: Maybe<UserPostBookmark>;
  viewerIsAuthor?: Maybe<Scalars['Boolean']>;
  viewerReaction?: Maybe<PostReaction>;
};


export type LinkPostCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type LinkPostReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type LinkPreview = {
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptConnection: Connection;
  cancelSignature: Scalars['Boolean'];
  createBookmark: Scalars['Boolean'];
  createChallengeSubmission: ChallengeSubmission;
  createComment: Comment;
  createCommentReaction: CommentReaction;
  createConnection: Connection;
  createCustomer: User;
  createLinkPost: LinkPost;
  createPlan: Plan;
  createPostReaction: PostReaction;
  createSignature: Signature;
  createStudent: User;
  declineConnection: Connection;
  deleteComment: Scalars['Boolean'];
  deleteCommentReaction: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  deletePostReaction: Scalars['Boolean'];
  followCreator: Scalars['Boolean'];
  followVideoTag: Scalars['Boolean'];
  generateLinkPreview?: Maybe<GenerateLinkPreviewResult>;
  impressions: Array<Impression>;
  markVideoAsWatched: Scalars['Boolean'];
  removeBookmark: Scalars['Boolean'];
  removePostFromBookmarks: Scalars['Boolean'];
  savePostToBookmarks: UserPostBookmark;
  unfollowCreator: Scalars['Boolean'];
  unfollowVideoTag: Scalars['Boolean'];
  unmarkVideoAsWatched: Scalars['Boolean'];
  updateComment: Comment;
  updateCustomer: User;
  updateLinkPost: LinkPost;
  updateUserBiography: User;
  updateUserProfile: User;
  upsertCustomerAddress: User;
  upsertFeedback: Feedback;
  upsertLessonProgress: LessonProgress;
};


export type MutationAcceptConnectionArgs = {
  id: Scalars['String'];
};


export type MutationCancelSignatureArgs = {
  signatureId: Scalars['String'];
};


export type MutationCreateBookmarkArgs = {
  id: Scalars['String'];
};


export type MutationCreateChallengeSubmissionArgs = {
  data: CreateChallengeSubmissionInput;
};


export type MutationCreateCommentArgs = {
  data: CreateCommentInput;
};


export type MutationCreateCommentReactionArgs = {
  data: CreateCommentReactionInput;
};


export type MutationCreateConnectionArgs = {
  userId: Scalars['String'];
};


export type MutationCreateCustomerArgs = {
  data: CreateCustomerInput;
};


export type MutationCreateLinkPostArgs = {
  data: CreateLinkPostInput;
};


export type MutationCreatePlanArgs = {
  data: CreatePlanInput;
};


export type MutationCreatePostReactionArgs = {
  data: CreatePostReactionInput;
};


export type MutationCreateSignatureArgs = {
  data: CreateSignatureInput;
};


export type MutationCreateStudentArgs = {
  data: CreateStudentInput;
};


export type MutationDeclineConnectionArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCommentReactionArgs = {
  id: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationDeletePostReactionArgs = {
  id: Scalars['String'];
};


export type MutationFollowCreatorArgs = {
  id: Scalars['String'];
};


export type MutationFollowVideoTagArgs = {
  id: Scalars['String'];
};


export type MutationGenerateLinkPreviewArgs = {
  data: GenerateLinkPreviewInput;
};


export type MutationImpressionsArgs = {
  data: Array<CreateImpressionInput>;
};


export type MutationMarkVideoAsWatchedArgs = {
  id: Scalars['String'];
};


export type MutationRemoveBookmarkArgs = {
  id: Scalars['String'];
};


export type MutationRemovePostFromBookmarksArgs = {
  userPostBookmarkId: Scalars['String'];
};


export type MutationSavePostToBookmarksArgs = {
  postId: Scalars['String'];
};


export type MutationUnfollowCreatorArgs = {
  id: Scalars['String'];
};


export type MutationUnfollowVideoTagArgs = {
  id: Scalars['String'];
};


export type MutationUnmarkVideoAsWatchedArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCommentArgs = {
  data: UpdateCommentInput;
};


export type MutationUpdateCustomerArgs = {
  data: UpdateCustomerInput;
};


export type MutationUpdateLinkPostArgs = {
  data: UpdateLinkPostInput;
};


export type MutationUpdateUserBiographyArgs = {
  data: UpdateUserBiographyInput;
};


export type MutationUpdateUserProfileArgs = {
  data: UpdateUserProfileInput;
};


export type MutationUpsertCustomerAddressArgs = {
  data: CreateAddressInput;
};


export type MutationUpsertFeedbackArgs = {
  data: UpsertFeedbackInput;
};


export type MutationUpsertLessonProgressArgs = {
  data: UpsertLessonProgressInput;
};

export type PaginatedChallenge = {
  __typename?: 'PaginatedChallenge';
  nodes?: Maybe<Array<Challenge>>;
  totalCount: Scalars['Int'];
};

export type PaginatedComment = {
  __typename?: 'PaginatedComment';
  nodes?: Maybe<Array<Comment>>;
  totalCount: Scalars['Int'];
};

export type PaginatedCommentReaction = {
  __typename?: 'PaginatedCommentReaction';
  nodes?: Maybe<Array<CommentReaction>>;
  totalCount: Scalars['Int'];
};

export type PaginatedConnection = {
  __typename?: 'PaginatedConnection';
  nodes?: Maybe<Array<Connection>>;
  totalCount: Scalars['Int'];
};

export type PaginatedCreators = {
  __typename?: 'PaginatedCreators';
  nodes?: Maybe<Array<Creator>>;
  totalCount: Scalars['Int'];
};

export type PaginatedExpertises = {
  __typename?: 'PaginatedExpertises';
  nodes?: Maybe<Array<Expertise>>;
  totalCount: Scalars['Int'];
};

export type PaginatedPost = {
  __typename?: 'PaginatedPost';
  nodes?: Maybe<Array<Post>>;
  totalCount: Scalars['Int'];
};

export type PaginatedPostReaction = {
  __typename?: 'PaginatedPostReaction';
  nodes?: Maybe<Array<PostReaction>>;
  totalCount: Scalars['Int'];
};

export type PaginatedTags = {
  __typename?: 'PaginatedTags';
  nodes?: Maybe<Array<Tag>>;
  totalCount: Scalars['Int'];
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  nodes?: Maybe<Array<User>>;
  totalCount: Scalars['Int'];
};

export type PaginatedVideoFiles = {
  __typename?: 'PaginatedVideoFiles';
  nodes?: Maybe<Array<VideoFile>>;
  totalCount: Scalars['Int'];
};

export type PaginatedVideoSections = {
  __typename?: 'PaginatedVideoSections';
  nodes?: Maybe<Array<VideoSection>>;
  totalCount: Scalars['Int'];
};

export type PaginatedVideoTag = {
  __typename?: 'PaginatedVideoTag';
  nodes?: Maybe<Array<VideoTag>>;
  totalCount: Scalars['Int'];
};

export type PaginatedVideos = {
  __typename?: 'PaginatedVideos';
  nodes?: Maybe<Array<Video>>;
  totalCount: Scalars['Int'];
};

export type PaymentTypes = {
  billet?: InputMaybe<BilletInput>;
  creditCard?: InputMaybe<CreditCardInput>;
  pix?: InputMaybe<PixInput>;
};

export type PixInput = {
  expiresInSeconds: Scalars['Float'];
};

export type Plan = {
  __typename?: 'Plan';
  extensionPlan?: Maybe<Plan>;
  extensionPlanId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  isPurchaseable: Scalars['Boolean'];
  isRecurrent: Scalars['Boolean'];
  priceInCents: Scalars['Float'];
  priceInCentsWithDiscount?: Maybe<Scalars['Float']>;
  products: Array<Product>;
  proviUrl?: Maybe<Scalars['String']>;
  recurrenceInterval: Scalars['Float'];
  recurrencePeriod: RecurrencePeriod;
  refundDays: Scalars['Float'];
  slug: Scalars['String'];
  statementDescriptor?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Playlist = {
  __typename?: 'Playlist';
  description: Scalars['String'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
  videos: PaginatedVideos;
};


export type PlaylistVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type Post = {
  author: User;
  comments: PaginatedComment;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  mentionedUsers: Array<User>;
  reactions: PaginatedPostReaction;
  tags: Array<Tag>;
  viewerBookmark?: Maybe<UserPostBookmark>;
  viewerIsAuthor?: Maybe<Scalars['Boolean']>;
  viewerReaction?: Maybe<PostReaction>;
};


export type PostCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type PostReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type PostReaction = {
  __typename?: 'PostReaction';
  author: User;
  id: Scalars['ID'];
  type: ReactionType;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  priceInCents: Scalars['Float'];
  title: Scalars['String'];
};

export type Progress = {
  __typename?: 'Progress';
  slug: Scalars['String'];
  totalOfProgress: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  accessedVideos: PaginatedVideos;
  bookmarksVideos: PaginatedVideos;
  certificate: Certificate;
  certificates: Array<Certificate>;
  challenge: Challenge;
  challenges: PaginatedChallenge;
  checkIfUsernameIsValid: IsValidUsername;
  comingSoonVideos: PaginatedVideos;
  comments: PaginatedComment;
  connections: PaginatedConnection;
  couponDiscount: Discount;
  course: Course;
  courseProgress: Array<CourseProgress>;
  coursesProgress: Array<Progress>;
  creator: Creator;
  creatorBySlug: Creator;
  creators: PaginatedCreators;
  creatorsWithExpertiseTheMemberIsInterestedIn: PaginatedCreators;
  currentStudent: User;
  followingCreators: PaginatedCreators;
  followingVideoTags: PaginatedVideoTag;
  freeVideos: PaginatedVideos;
  hintVideoTags: PaginatedVideoTag;
  hotVideoTags: PaginatedVideoTag;
  hotVideos: PaginatedVideos;
  invites: PaginatedConnection;
  isAuthenticated: Scalars['Boolean'];
  keepWatching: PaginatedVideos;
  maybeItsInMyInterest: PaginatedVideos;
  me: User;
  newVideos: PaginatedVideos;
  ok: Scalars['Boolean'];
  plan: Plan;
  playlist: Playlist;
  playlistByVideoId: Playlist;
  post: Post;
  posts: PaginatedPost;
  recentVideos: PaginatedVideos;
  tags: PaginatedTags;
  trail: Trail;
  trailProgress: Array<Progress>;
  trails: Array<Trail>;
  user: User;
  users: PaginatedUsers;
  video: Video;
  videoBySlug: Video;
  videoTag: VideoTag;
  videoTagBySlug: VideoTag;
  videoTags: PaginatedVideoTag;
  videos: PaginatedVideos;
  videosByTagSlug: PaginatedVideos;
  videosTaggedWithTagsThatTheMemberFollows: PaginatedVideos;
  watchedVideos: PaginatedVideos;
  worthCheckingOut: PaginatedVideos;
};


export type QueryAccessedVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryBookmarksVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryCertificateArgs = {
  certificateId: Scalars['String'];
};


export type QueryChallengeArgs = {
  slug: Scalars['String'];
};


export type QueryChallengesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchLevels?: InputMaybe<Array<ChallengeLevel>>;
  searchTags?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryCheckIfUsernameIsValidArgs = {
  username?: InputMaybe<Scalars['String']>;
};


export type QueryComingSoonVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['String']>;
};


export type QueryConnectionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryCouponDiscountArgs = {
  coupon: Scalars['String'];
  planSlug: Scalars['String'];
};


export type QueryCourseArgs = {
  slug: Scalars['String'];
};


export type QueryCourseProgressArgs = {
  courseSlug: Scalars['String'];
};


export type QueryCoursesProgressArgs = {
  trailSlug: Scalars['String'];
};


export type QueryCreatorArgs = {
  id: Scalars['String'];
};


export type QueryCreatorBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryCreatorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryCreatorsWithExpertiseTheMemberIsInterestedInArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryFollowingCreatorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryFollowingVideoTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryFreeVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryHintVideoTagsArgs = {
  interests: Array<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryHotVideoTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryHotVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryInvitesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryKeepWatchingArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMaybeItsInMyInterestArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryNewVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryPlanArgs = {
  slug: Scalars['String'];
};


export type QueryPlaylistArgs = {
  id: Scalars['String'];
};


export type QueryPlaylistByVideoIdArgs = {
  id: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};


export type QueryPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryRecentVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryTrailArgs = {
  slug: Scalars['String'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryVideoArgs = {
  id: Scalars['String'];
};


export type QueryVideoBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryVideoTagArgs = {
  id: Scalars['String'];
};


export type QueryVideoTagBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryVideoTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryVideosByTagSlugArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  slug: Scalars['String'];
};


export type QueryVideosTaggedWithTagsThatTheMemberFollowsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryWatchedVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryWorthCheckingOutArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/** Available reaction types */
export enum ReactionType {
  Like = 'LIKE'
}

/** Available recurrence period */
export enum RecurrencePeriod {
  Monthly = 'MONTHLY',
  Semiannual = 'SEMIANNUAL',
  Yearly = 'YEARLY'
}

export type Signature = {
  __typename?: 'Signature';
  amountInCents: Scalars['Float'];
  campaign?: Maybe<Scalars['String']>;
  coupon?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currencyCode: Scalars['String'];
  customer: User;
  discountInCents: Scalars['Float'];
  id: Scalars['ID'];
  invoice: Invoice;
  metadata?: Maybe<Scalars['JSON']>;
  plan: Plan;
  refundableUntil?: Maybe<Scalars['DateTime']>;
  status: SignatureStatus;
};

/** Available signature status */
export enum SignatureStatus {
  Canceled = 'CANCELED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  RecurrencyPaused = 'RECURRENCY_PAUSED',
  Refunded = 'REFUNDED',
  Succeeded = 'SUCCEEDED'
}

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type Technology = {
  __typename?: 'Technology';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type Trail = {
  __typename?: 'Trail';
  about: Scalars['String'];
  additionalInfo?: Maybe<Scalars['String']>;
  courses: Array<Course>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  educators: Array<Educator>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  order: Scalars['Float'];
  previewVideoId: Scalars['String'];
  requirements: Scalars['String'];
  slug: Scalars['String'];
  startsAt: Scalars['DateTime'];
  statistics?: Maybe<TrailStatistics>;
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type TrailStatistics = {
  __typename?: 'TrailStatistics';
  duration: Scalars['Float'];
  totalLessons: Scalars['Float'];
};

export type Transcription = {
  __typename?: 'Transcription';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lesson: Lesson;
  transcription: Scalars['JSON'];
};

export type UpdateCommentInput = {
  content: Scalars['String'];
  id: Scalars['String'];
  mentionedUsersIds: Array<Scalars['String']>;
};

export type UpdateCustomerInput = {
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type UpdateLinkPostInput = {
  content: Scalars['String'];
  id: Scalars['String'];
  mentionedUsersIds: Array<Scalars['String']>;
  tagsIds: Array<Scalars['String']>;
};

export type UpdateUserBiographyInput = {
  about?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  linkedin?: InputMaybe<Scalars['String']>;
};

export type UpdateUserProfileInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  jobStatus?: InputMaybe<JobStatus>;
  name?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpsellTypes = {
  type: Scalars['String'];
};

export type UpsertFeedbackInput = {
  additionalInformation?: InputMaybe<Scalars['String']>;
  lessonId: Scalars['String'];
  stars: Scalars['Float'];
  time: Scalars['Float'];
};

export type UpsertLessonProgressInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  lessonId: Scalars['String'];
  manuallyCompleted?: InputMaybe<Scalars['Boolean']>;
  watchedPercentage?: InputMaybe<Scalars['Float']>;
  watchedSeconds?: InputMaybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']>;
  acceptedConnections: PaginatedConnection;
  address?: Maybe<Address>;
  atlasUserId: Scalars['String'];
  avatarUrl?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  fiscalDocument?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  jobStatus?: Maybe<JobStatus>;
  lastWatchedLessons?: Maybe<LastWatchedLessons>;
  linkedin?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  occupation?: Maybe<Scalars['String']>;
  pendingConnections: PaginatedConnection;
  phone?: Maybe<Scalars['String']>;
  postBookmarks?: Maybe<Array<UserPostBookmark>>;
  posts: PaginatedPost;
  signatures: Array<Signature>;
  state?: Maybe<Scalars['String']>;
  thirdPartyFiscalDocument?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type UserAcceptedConnectionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserPendingConnectionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type UserPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type UserPostBookmark = {
  __typename?: 'UserPostBookmark';
  id: Scalars['ID'];
  post: Post;
  user: User;
};

export type Video = {
  __typename?: 'Video';
  creator: Creator;
  description: Scalars['String'];
  files: PaginatedVideoFiles;
  id: Scalars['ID'];
  isBookmarkVideo: Scalars['Boolean'];
  isFree: Scalars['Boolean'];
  isPartOfPlaylist: Scalars['Boolean'];
  isWatchedVideo: Scalars['Boolean'];
  jupiterVideoId: Scalars['String'];
  releasedAt: Scalars['DateTime'];
  sections: PaginatedVideoSections;
  slug: Scalars['String'];
  tags: PaginatedVideoTag;
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
};


export type VideoFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type VideoSectionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type VideoTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type VideoFile = {
  __typename?: 'VideoFile';
  file: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  videoId: Scalars['String'];
};

export type VideoLinkPreview = LinkPreview & {
  __typename?: 'VideoLinkPreview';
  embedUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  siteName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type VideoProgress = {
  __typename?: 'VideoProgress';
  id: Scalars['ID'];
  memberId: Scalars['String'];
  videoId: Scalars['String'];
};

export type VideoSection = {
  __typename?: 'VideoSection';
  id: Scalars['ID'];
  time: Scalars['Float'];
  title: Scalars['String'];
};

export type VideoTag = {
  __typename?: 'VideoTag';
  followersCount: Scalars['Float'];
  id: Scalars['ID'];
  isFollowingVideoTag: Scalars['Boolean'];
  slug: Scalars['String'];
  title: Scalars['String'];
  videos: PaginatedVideos;
};


export type VideoTagVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type VideoTagFollower = {
  __typename?: 'VideoTagFollower';
  id: Scalars['ID'];
  memberId: Scalars['String'];
};

export type TrailItemFragment = { __typename?: 'Trail', id: string, title: string } & { ' $fragmentName': 'TrailItemFragment' };

export type AllTrailsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTrailsQuery = { __typename?: 'Query', trails: Array<(
    { __typename?: 'Trail', id: string }
    & { ' $fragmentRefs': { 'TrailItemFragment': TrailItemFragment } }
  )> };

export const TrailItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TrailItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trail"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<TrailItemFragment, unknown>;
export const AllTrailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allTrails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TrailItem"}}]}}]}},...TrailItemFragmentDoc.definitions]} as unknown as DocumentNode<AllTrailsQuery, AllTrailsQueryVariables>;