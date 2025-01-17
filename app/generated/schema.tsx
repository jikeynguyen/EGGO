import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
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
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  JSONObject: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type AlternativeSearchOptions = {
  limit: Scalars['Float']['input'];
};

export type BetaCustomer = {
  __typename?: 'BetaCustomer';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Booking = {
  __typename?: 'Booking';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  playgroundUnit: PlaygroundUnit;
  review?: Maybe<Review>;
  status: Scalars['String']['output'];
  timeRange: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BulkCreatePlaygroundUnitInput = {
  capacity: Scalars['Float']['input'];
  defaultPrice: Scalars['Float']['input'];
  labelIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  name: Scalars['String']['input'];
  playgroundId: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
  startNumber?: InputMaybe<Scalars['Float']['input']>;
};

export type ChangePasswordFinderInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['DateTime']['output'];
  expireAt: Scalars['DateTime']['output'];
  finders: Array<Finder>;
  game: Game;
  id: Scalars['Int']['output'];
  messages: Array<Message>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateBetaCustomerInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateBookingInput = {
  endTime: Scalars['DateTime']['input'];
  playgroundUnitId: Scalars['Float']['input'];
  startTime: Scalars['DateTime']['input'];
};

export type CreateFinderInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGameInput = {
  address: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  genders: Array<Gender>;
  latitude: Scalars['Float']['input'];
  levels: Array<GameLevel>;
  longitude: Scalars['Float']['input'];
  maxParticipants: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  startTime: Scalars['DateTime']['input'];
  type: PlaygroundType;
};

export type CreateLabelInput = {
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreatePlaygroundInput = {
  address: Scalars['String']['input'];
  closeHour: Scalars['Float']['input'];
  coverImageId?: InputMaybe<Scalars['Float']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  openDates: Array<Scalars['String']['input']>;
  openHour: Scalars['Float']['input'];
  phone: Scalars['String']['input'];
  timeSlotUnit: Scalars['Float']['input'];
  type: PlaygroundType;
};

export type CreatePlaygroundUnitInput = {
  capacity: Scalars['Float']['input'];
  defaultPrice: Scalars['Float']['input'];
  labelIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  name: Scalars['String']['input'];
  playgroundId: Scalars['Float']['input'];
};

export type CreateProviderInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateReviewInput = {
  content: Scalars['String']['input'];
  playgroundId: Scalars['Float']['input'];
  rating: Scalars['Float']['input'];
};

export type DateTimeOperations = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FilterInput = {
  createdAt?: InputMaybe<DateTimeOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type Filters = {
  from: Scalars['DateTime']['input'];
  to: Scalars['DateTime']['input'];
};

export type FindAvailablePlaygroundInput = {
  filters?: InputMaybe<Filters>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  radius: Scalars['Float']['input'];
  type: PlaygroundType;
};

export type FindPlaygroundWithinRangeInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  radius: Scalars['Float']['input'];
};

export type Finder = {
  __typename?: 'Finder';
  billingPlan: Scalars['String']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  chats: Array<Chat>;
  createdAt: Scalars['DateTime']['output'];
  dob?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  games: Array<Game>;
  hostedGames: Array<Game>;
  id: Scalars['Int']['output'];
  lastMessageRead: Array<LastMessageRead>;
  lastName: Scalars['String']['output'];
  messages: Array<Message>;
  metrics: Array<FinderMetric>;
  phone?: Maybe<Scalars['String']['output']>;
  readMessages: Array<Message>;
  socialId: Scalars['String']['output'];
  socialProvider: SocialProvider;
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FinderMetric = {
  __typename?: 'FinderMetric';
  createdAt: Scalars['DateTime']['output'];
  finder: Finder;
  id: Scalars['Int']['output'];
  json?: Maybe<Scalars['JSONObject']['output']>;
  metric: Metric;
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type Game = {
  __typename?: 'Game';
  address: Scalars['String']['output'];
  chat?: Maybe<Chat>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endTime: Scalars['DateTime']['output'];
  genders: Array<Gender>;
  host: Finder;
  id: Scalars['Int']['output'];
  lastMessageAt?: Maybe<Scalars['DateTime']['output']>;
  lastMessageRead?: Maybe<Array<LastMessageRead>>;
  levels: Array<GameLevel>;
  location: GeometryPoint;
  maxParticipants: Scalars['Int']['output'];
  messages: Array<Message>;
  name: Scalars['String']['output'];
  participants: Array<Finder>;
  startTime: Scalars['DateTime']['output'];
  status: GameStatus;
  timeRange: Scalars['String']['output'];
  type: PlaygroundType;
  updatedAt: Scalars['DateTime']['output'];
  userInteractions: Array<UserInteraction>;
};

export enum GameLevel {
  Advanced = 'ADVANCED',
  Beginner = 'BEGINNER',
  Intermediate = 'INTERMEDIATE',
  Pro = 'PRO',
  Rookie = 'ROOKIE',
  UpperIntermediate = 'UPPER_INTERMEDIATE',
}

export enum GameStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Ongoing = 'ONGOING',
  Pending = 'PENDING',
  Ready = 'READY',
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
}

export type GeometryPoint = {
  __typename?: 'GeometryPoint';
  coordinates: Array<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

/** Input for authenticating with Google. */
export type GoogleAuthenticatorInput = {
  accessToken: Scalars['String']['input'];
};

export type HeadlessFinder = {
  __typename?: 'HeadlessFinder';
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HeadlessGame = {
  __typename?: 'HeadlessGame';
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endTime: Scalars['DateTime']['output'];
  genders: Array<Gender>;
  host: Finder;
  id: Scalars['Int']['output'];
  levels: Array<GameLevel>;
  location: GeometryPoint;
  maxParticipants: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  participants: Array<Finder>;
  startTime: Scalars['DateTime']['output'];
  type: PlaygroundType;
};

export type HeadlessPaginatePlaygroundUnitFilter = {
  capacity?: InputMaybe<NumberOperations>;
  createdAt?: InputMaybe<DateTimeOperations>;
  defaultPrice?: InputMaybe<NumberOperations>;
  labelId?: InputMaybe<NumberOperations>;
  name?: InputMaybe<StringOperations>;
  playgroundId?: InputMaybe<NumberOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type HeadlessPaginatePlaygroundUnitOptions = {
  filter?: InputMaybe<HeadlessPaginatePlaygroundUnitFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type HeadlessPaginatePlaygroundUnits = {
  __typename?: 'HeadlessPaginatePlaygroundUnits';
  items: Array<HeadlessPlaygroundUnit>;
  total: Scalars['Int']['output'];
};

export type HeadlessPlayground = {
  __typename?: 'HeadlessPlayground';
  address: Scalars['String']['output'];
  closeHour: Scalars['Float']['output'];
  coverImg?: Maybe<Image>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  openHour: Scalars['Float']['output'];
  phone: Scalars['String']['output'];
  timeSlotUnit: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type HeadlessPlaygroundUnit = {
  __typename?: 'HeadlessPlaygroundUnit';
  capacity: Scalars['Float']['output'];
  defaultPrice: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  labels?: Maybe<Array<Label>>;
  name: Scalars['String']['output'];
};

export type Image = {
  __typename?: 'Image';
  createdAt: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageCloudId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  variants?: Maybe<Array<Scalars['String']['output']>>;
};

export type ImageFilter = {
  createdAt?: InputMaybe<DateTimeOperations>;
  filename?: InputMaybe<StringOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type Label = {
  __typename?: 'Label';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LabelFilter = {
  code?: InputMaybe<StringOperations>;
  createdAt?: InputMaybe<DateTimeOperations>;
  name?: InputMaybe<StringOperations>;
  providerId?: InputMaybe<NumberOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type LastMessageRead = {
  __typename?: 'LastMessageRead';
  createdAt: Scalars['DateTime']['output'];
  finder?: Maybe<Finder>;
  game: Game;
  id: Scalars['Int']['output'];
  lastRead?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Message = {
  __typename?: 'Message';
  chat: Chat;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  finder: Finder;
  game: Game;
  id: Scalars['Int']['output'];
  readers: Finder;
  updatedAt: Scalars['DateTime']['output'];
};

export type Metric = {
  __typename?: 'Metric';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  sportType?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  values: FinderMetric;
};

export type MetricFilter = {
  code?: InputMaybe<StringOperations>;
  createdAt?: InputMaybe<DateTimeOperations>;
  name?: InputMaybe<StringOperations>;
  sportType?: InputMaybe<StringOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptAGame: Scalars['Boolean']['output'];
  addParticipant: Game;
  authenticate: UserSession;
  bulkCreatePlaygroundUnits: Scalars['Boolean']['output'];
  bulkUpdatePlaygroundUnits: Scalars['Boolean']['output'];
  cancelReservation: Scalars['Boolean']['output'];
  changePassword: Finder;
  createBetaCustomer: BetaCustomer;
  createBooking: Booking;
  createFinderMetric: FinderMetric;
  createGame: Game;
  createLabel: Label;
  createPlayground: Playground;
  createPlaygroundUnit: PlaygroundUnit;
  createRandomGame: Game;
  createReservation: Booking;
  createReview: Review;
  deleteBooking: Booking;
  deleteImage: Image;
  deleteLabel: Scalars['Boolean']['output'];
  deleteMessage: Scalars['Boolean']['output'];
  deleteMyProfile: Scalars['Boolean']['output'];
  deletePlayground: Scalars['Boolean']['output'];
  deletePlaygroundUnit: Scalars['Boolean']['output'];
  deleteReview: Scalars['Boolean']['output'];
  leaveAGame: Scalars['Boolean']['output'];
  loginFinder: UserSession;
  loginProvider: UserSession;
  logoutFinder: Scalars['Boolean']['output'];
  logoutProvider: Scalars['Boolean']['output'];
  markAllMessagesAsRead: Scalars['Boolean']['output'];
  markMessageAsRead: Scalars['Boolean']['output'];
  readChatChannel: Scalars['Boolean']['output'];
  registerFinder: Finder;
  registerProvider: Provider;
  reindexGames: Scalars['Boolean']['output'];
  rejectAGame: Scalars['Boolean']['output'];
  requestResetPassword: Scalars['Boolean']['output'];
  requestVerifyFinder: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  restoreLabel: Scalars['Boolean']['output'];
  sendMessage: Message;
  suggestPlayground: SuggestPlayground;
  updateFinderMetric: FinderMetric;
  updateLabel: Label;
  updateMyProfile: Finder;
  updatePlayground: Playground;
  updatePlaygroundUnit: PlaygroundUnit;
  uploadMultiple: Array<Image>;
  uploadSingle: Image;
  upsertFinderMetrics: Scalars['Boolean']['output'];
  verifyFinder: UserSession;
};

export type MutationAcceptAGameArgs = {
  gameId: Scalars['Float']['input'];
};

export type MutationAddParticipantArgs = {
  gameId: Scalars['Float']['input'];
  participantId: Scalars['Float']['input'];
};

export type MutationAuthenticateArgs = {
  google?: InputMaybe<GoogleAuthenticatorInput>;
};

export type MutationBulkCreatePlaygroundUnitsArgs = {
  input: BulkCreatePlaygroundUnitInput;
};

export type MutationBulkUpdatePlaygroundUnitsArgs = {
  input: Array<UpdatePlaygroundUnitInput>;
};

export type MutationCancelReservationArgs = {
  bookingId: Scalars['Float']['input'];
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordFinderInput;
};

export type MutationCreateBetaCustomerArgs = {
  createBetaCustomerInput: CreateBetaCustomerInput;
};

export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput;
};

export type MutationCreateFinderMetricArgs = {
  metricId: Scalars['Float']['input'];
  value: Scalars['String']['input'];
};

export type MutationCreateGameArgs = {
  createGameInput: CreateGameInput;
};

export type MutationCreateLabelArgs = {
  input: CreateLabelInput;
};

export type MutationCreatePlaygroundArgs = {
  input: CreatePlaygroundInput;
};

export type MutationCreatePlaygroundUnitArgs = {
  input: CreatePlaygroundUnitInput;
};

export type MutationCreateReservationArgs = {
  input: CreateBookingInput;
};

export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};

export type MutationDeleteBookingArgs = {
  id: Scalars['Int']['input'];
};

export type MutationDeleteImageArgs = {
  id: Scalars['Float']['input'];
};

export type MutationDeleteLabelArgs = {
  id: Scalars['Float']['input'];
};

export type MutationDeleteMessageArgs = {
  gameId: Scalars['Float']['input'];
  id: Scalars['Float']['input'];
};

export type MutationDeletePlaygroundArgs = {
  id: Scalars['Float']['input'];
};

export type MutationDeletePlaygroundUnitArgs = {
  id: Scalars['Float']['input'];
};

export type MutationDeleteReviewArgs = {
  reviewId: Scalars['Float']['input'];
};

export type MutationLeaveAGameArgs = {
  gameId: Scalars['Float']['input'];
};

export type MutationLoginFinderArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationLoginProviderArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationMarkAllMessagesAsReadArgs = {
  gameId: Scalars['Float']['input'];
};

export type MutationMarkMessageAsReadArgs = {
  gameId: Scalars['Float']['input'];
  id: Scalars['Float']['input'];
};

export type MutationReadChatChannelArgs = {
  gameId: Scalars['Float']['input'];
};

export type MutationRegisterFinderArgs = {
  registerFinderInput: CreateFinderInput;
};

export type MutationRegisterProviderArgs = {
  registerProviderInput: CreateProviderInput;
};

export type MutationRejectAGameArgs = {
  gameId: Scalars['Float']['input'];
};

export type MutationRequestResetPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type MutationRestoreLabelArgs = {
  id: Scalars['Float']['input'];
};

export type MutationSendMessageArgs = {
  content: Scalars['String']['input'];
  gameId: Scalars['Float']['input'];
};

export type MutationSuggestPlaygroundArgs = {
  suggestPlaygroundInput: SuggestPlaygroundInput;
};

export type MutationUpdateFinderMetricArgs = {
  id: Scalars['Float']['input'];
  value: Scalars['String']['input'];
};

export type MutationUpdateLabelArgs = {
  id: Scalars['Float']['input'];
  input: UpdateLabelInput;
};

export type MutationUpdateMyProfileArgs = {
  input: UpdateFinderInput;
};

export type MutationUpdatePlaygroundArgs = {
  id: Scalars['Float']['input'];
  input: UpdatePlaygroundInput;
};

export type MutationUpdatePlaygroundUnitArgs = {
  id: Scalars['Float']['input'];
  input: UpdatePlaygroundUnitInput;
};

export type MutationUploadMultipleArgs = {
  files: Array<Scalars['Upload']['input']>;
};

export type MutationUploadSingleArgs = {
  file: Scalars['Upload']['input'];
};

export type MutationUpsertFinderMetricsArgs = {
  metrics: Array<UpsertFinderMetricInput>;
};

export type MutationVerifyFinderArgs = {
  token: Scalars['String']['input'];
};

export type MyGamesFilter = {
  address?: InputMaybe<StringOperations>;
  createdAt?: InputMaybe<DateTimeOperations>;
  endTime?: InputMaybe<DateTimeOperations>;
  startTime?: InputMaybe<DateTimeOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type NumberOperations = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PaginateImageOptions = {
  filter?: InputMaybe<ImageFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginateImages = {
  __typename?: 'PaginateImages';
  items: Array<Image>;
  total: Scalars['Int']['output'];
};

export type PaginateLabelOptions = {
  filter?: InputMaybe<LabelFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginateLabels = {
  __typename?: 'PaginateLabels';
  items: Array<Label>;
  total: Scalars['Int']['output'];
};

export type PaginateMessageOptions = {
  filter?: InputMaybe<FilterInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginateMessages = {
  __typename?: 'PaginateMessages';
  items: Array<Message>;
  total: Scalars['Int']['output'];
};

export type PaginateMetricOptions = {
  filter?: InputMaybe<MetricFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginateMetrics = {
  __typename?: 'PaginateMetrics';
  items: Array<Metric>;
  total: Scalars['Int']['output'];
};

export type PaginateMyGames = {
  __typename?: 'PaginateMyGames';
  items: Array<Game>;
  total: Scalars['Int']['output'];
};

export type PaginateMyGamesOptions = {
  filter?: InputMaybe<MyGamesFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginatePlaygroundFilter = {
  createdAt?: InputMaybe<DateTimeOperations>;
  name?: InputMaybe<StringOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type PaginatePlaygroundOptions = {
  filter?: InputMaybe<PaginatePlaygroundFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginatePlaygroundUnitOptions = {
  filter?: InputMaybe<PlaygroundUnitFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginatePlaygroundUnits = {
  __typename?: 'PaginatePlaygroundUnits';
  items: Array<PlaygroundUnit>;
  total: Scalars['Int']['output'];
};

export type PaginatePlaygrounds = {
  __typename?: 'PaginatePlaygrounds';
  items: Array<Playground>;
  total: Scalars['Int']['output'];
};

export type Playground = {
  __typename?: 'Playground';
  address: Scalars['String']['output'];
  closeHour: Scalars['Float']['output'];
  coverImg?: Maybe<Image>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  location: GeometryPoint;
  name: Scalars['String']['output'];
  openDates: Array<Scalars['String']['output']>;
  openHour: Scalars['Float']['output'];
  phone: Scalars['String']['output'];
  provider: Provider;
  rating: Scalars['Float']['output'];
  reviews?: Maybe<Array<Review>>;
  timeSlotUnit: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  units?: Maybe<Array<PlaygroundUnit>>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum PlaygroundType {
  Badminton = 'BADMINTON',
  Basketball = 'BASKETBALL',
  Billiard = 'BILLIARD',
  Pickleball = 'PICKLEBALL',
  Soccer = 'SOCCER',
  TableTennis = 'TABLE_TENNIS',
  Tennis = 'TENNIS',
  Volleyball = 'VOLLEYBALL',
}

export type PlaygroundUnit = {
  __typename?: 'PlaygroundUnit';
  bookings?: Maybe<Array<Booking>>;
  capacity: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  defaultPrice: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  labels?: Maybe<Array<Label>>;
  name: Scalars['String']['output'];
  playground: Playground;
  updatedAt: Scalars['DateTime']['output'];
};

export type PlaygroundUnitFilter = {
  capacity?: InputMaybe<NumberOperations>;
  createdAt?: InputMaybe<DateTimeOperations>;
  defaultPrice?: InputMaybe<NumberOperations>;
  labelId?: InputMaybe<NumberOperations>;
  name?: InputMaybe<StringOperations>;
  playgroundId?: InputMaybe<NumberOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type Provider = {
  __typename?: 'Provider';
  billingPlan: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  availablePlayground: Array<Playground>;
  betaCustomerCount: Scalars['Float']['output'];
  checkResetPassword: Scalars['Boolean']['output'];
  countFinder: Scalars['Float']['output'];
  findGames: Array<Game>;
  findPlaygroundsWithinRange: Array<Playground>;
  findSuggestPlaygroundsBySearchText: Array<SuggestPlayground>;
  getFinderByUsername: HeadlessFinder;
  headlessGame: HeadlessGame;
  headlessPaginatePlaygroundUnit: HeadlessPaginatePlaygroundUnits;
  headlessPlayground: HeadlessPlayground;
  image: Image;
  label: Label;
  meFinder: UserSession;
  meProvider: UserSession;
  message: Message;
  /** Allowed  fields: firstName, lastName, phone, dob, bio, email, username, verifiedAt */
  myFinderProfile: Finder;
  myGames: PaginateMyGames;
  myMetrics: Array<FinderMetric>;
  paginateImages: PaginateImages;
  paginateLabels: PaginateLabels;
  paginateMessages: PaginateMessages;
  paginateMetrics: PaginateMetrics;
  paginatePlaygroundUnits: PaginatePlaygroundUnits;
  paginatePlaygrounds: PaginatePlaygrounds;
  playground: Playground;
  playgroundUnit: PlaygroundUnit;
  playgrounds: Array<Playground>;
  provider: Provider;
  review: Review;
  userInteraction: Array<UserInteraction>;
};

export type QueryAvailablePlaygroundArgs = {
  findAvailablePlaygroundInput: FindAvailablePlaygroundInput;
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryCheckResetPasswordArgs = {
  token: Scalars['String']['input'];
};

export type QueryFindGamesArgs = {
  options: AlternativeSearchOptions;
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryFindPlaygroundsWithinRangeArgs = {
  input: FindPlaygroundWithinRangeInput;
};

export type QueryFindSuggestPlaygroundsBySearchTextArgs = {
  searchText: Scalars['String']['input'];
};

export type QueryGetFinderByUsernameArgs = {
  username: Scalars['String']['input'];
};

export type QueryHeadlessGameArgs = {
  id: Scalars['Float']['input'];
};

export type QueryHeadlessPaginatePlaygroundUnitArgs = {
  options?: InputMaybe<HeadlessPaginatePlaygroundUnitOptions>;
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryHeadlessPlaygroundArgs = {
  id: Scalars['Float']['input'];
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryImageArgs = {
  id: Scalars['Float']['input'];
};

export type QueryLabelArgs = {
  id: Scalars['Float']['input'];
};

export type QueryMessageArgs = {
  gameId: Scalars['Float']['input'];
  id: Scalars['Float']['input'];
};

export type QueryMyGamesArgs = {
  options: PaginateMyGamesOptions;
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryMyMetricsArgs = {
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryPaginateImagesArgs = {
  options: PaginateImageOptions;
};

export type QueryPaginateLabelsArgs = {
  options: PaginateLabelOptions;
};

export type QueryPaginateMessagesArgs = {
  gameId: Scalars['Float']['input'];
  options: PaginateMessageOptions;
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryPaginateMetricsArgs = {
  options?: InputMaybe<PaginateMetricOptions>;
};

export type QueryPaginatePlaygroundUnitsArgs = {
  options?: InputMaybe<PaginatePlaygroundUnitOptions>;
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryPaginatePlaygroundsArgs = {
  options: PaginatePlaygroundOptions;
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryPlaygroundArgs = {
  id: Scalars['Float']['input'];
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryPlaygroundUnitArgs = {
  id: Scalars['Float']['input'];
};

export type QueryPlaygroundsArgs = {
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryProviderArgs = {
  id: Scalars['Float']['input'];
};

export type QueryReviewArgs = {
  playgroundId: Scalars['Float']['input'];
};

export type Review = {
  __typename?: 'Review';
  booking: Booking;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  playground: Playground;
  rating: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum SocialProvider {
  Google = 'google',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type SortOrderInput = {
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StringOperations = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  MESSAGE_CREATED: Message;
};

export type SubscriptionMessage_CreatedArgs = {
  gameId: Scalars['Int']['input'];
};

export type SuggestPlayground = {
  __typename?: 'SuggestPlayground';
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SuggestPlaygroundInput = {
  address: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type UpdateFinderInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLabelInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePlaygroundInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  closeHour?: InputMaybe<Scalars['Float']['input']>;
  coverImageId?: InputMaybe<Scalars['Float']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  openDates?: InputMaybe<Array<Scalars['String']['input']>>;
  openHour?: InputMaybe<Scalars['Float']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  timeSlotUnit?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<PlaygroundType>;
};

export type UpdatePlaygroundUnitInput = {
  capacity?: InputMaybe<Scalars['Float']['input']>;
  defaultPrice?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['Int']['input'];
  labelIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpsertFinderMetricInput = {
  json?: InputMaybe<Scalars['JSONObject']['input']>;
  metricId: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type UserInteraction = {
  __typename?: 'UserInteraction';
  createdAt: Scalars['DateTime']['output'];
  expiredAt: Scalars['DateTime']['output'];
  finderId: Scalars['Int']['output'];
  game: Game;
  gameId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  interactionType: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserSession = {
  __typename?: 'UserSession';
  billingPlan: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  jwt: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateBetaCustomerMutationVariables = Exact<{
  createBetaCustomerInput: CreateBetaCustomerInput;
}>;

export type CreateBetaCustomerMutation = {
  __typename?: 'Mutation';
  createBetaCustomer: { __typename?: 'BetaCustomer'; id: number };
};

export type BetaCustomerCountQueryVariables = Exact<{ [key: string]: never }>;

export type BetaCustomerCountQuery = {
  __typename?: 'Query';
  betaCustomerCount: number;
};

export type RegisterFinderMutationVariables = Exact<{
  registerFinderInput: CreateFinderInput;
}>;

export type RegisterFinderMutation = {
  __typename?: 'Mutation';
  registerFinder: { __typename?: 'Finder'; id: number };
};

export type LoginFinderMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type LoginFinderMutation = {
  __typename?: 'Mutation';
  loginFinder: { __typename?: 'UserSession'; id: number };
};

export type AuthenticateMutationVariables = Exact<{
  google?: InputMaybe<GoogleAuthenticatorInput>;
}>;

export type AuthenticateMutation = {
  __typename?: 'Mutation';
  authenticate: { __typename?: 'UserSession'; id: number };
};

export type VerifyFinderMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;

export type VerifyFinderMutation = {
  __typename?: 'Mutation';
  verifyFinder: {
    __typename?: 'UserSession';
    lastName: string;
    firstName: string;
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation'; logoutFinder: boolean };

export type RequestResetPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;

export type RequestResetPasswordMutation = {
  __typename?: 'Mutation';
  requestResetPassword: boolean;
};

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type ResetPasswordMutation = {
  __typename?: 'Mutation';
  resetPassword: boolean;
};

export type RequestVerifyFinderMutationVariables = Exact<{
  [key: string]: never;
}>;

export type RequestVerifyFinderMutation = {
  __typename?: 'Mutation';
  requestVerifyFinder: boolean;
};

export type MeFinderQueryVariables = Exact<{ [key: string]: never }>;

export type MeFinderQuery = {
  __typename?: 'Query';
  meFinder: {
    __typename?: 'UserSession';
    id: number;
    firstName: string;
    lastName: string;
    username?: string | null;
    verified?: boolean | null;
    jwt: string;
  };
};

export type GetFinderByUsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;

export type GetFinderByUsernameQuery = {
  __typename?: 'Query';
  getFinderByUsername: {
    __typename?: 'HeadlessFinder';
    id: number;
    firstName: string;
    lastName: string;
    username?: string | null;
    verifiedAt?: any | null;
  };
};

export type CountFinderQueryVariables = Exact<{ [key: string]: never }>;

export type CountFinderQuery = { __typename?: 'Query'; countFinder: number };

export type MyFinderProfileQueryVariables = Exact<{ [key: string]: never }>;

export type MyFinderProfileQuery = {
  __typename?: 'Query';
  myFinderProfile: {
    __typename?: 'Finder';
    email: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    username?: string | null;
    dob?: any | null;
    bio?: string | null;
    verifiedAt?: any | null;
  };
};

export type UpdateMyProfileMutationVariables = Exact<{
  input: UpdateFinderInput;
}>;

export type UpdateMyProfileMutation = {
  __typename?: 'Mutation';
  updateMyProfile: {
    __typename?: 'Finder';
    email: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    username?: string | null;
    dob?: any | null;
    bio?: string | null;
  };
};

export type CreateGameMutationVariables = Exact<{
  createGameInput: CreateGameInput;
}>;

export type CreateGameMutation = {
  __typename?: 'Mutation';
  createGame: { __typename?: 'Game'; id: number };
};

export type AcceptAGameMutationVariables = Exact<{
  gameId: Scalars['Float']['input'];
}>;

export type AcceptAGameMutation = {
  __typename?: 'Mutation';
  acceptAGame: boolean;
};

export type RejectAGameMutationVariables = Exact<{
  gameId: Scalars['Float']['input'];
}>;

export type RejectAGameMutation = {
  __typename?: 'Mutation';
  rejectAGame: boolean;
};

export type FindGamesQueryVariables = Exact<{
  relations?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
  options: AlternativeSearchOptions;
}>;

export type FindGamesQuery = {
  __typename?: 'Query';
  findGames: Array<{
    __typename?: 'Game';
    address: string;
    description?: string | null;
    genders: Array<Gender>;
    id: number;
    name: string;
    levels: Array<GameLevel>;
    maxParticipants: number;
    type: PlaygroundType;
    createdAt: any;
    startTime: any;
    endTime: any;
    location: { __typename?: 'GeometryPoint'; coordinates: Array<number> };
    host: {
      __typename?: 'Finder';
      lastName: string;
      firstName: string;
      username?: string | null;
      id: number;
    };
    participants: Array<{
      __typename?: 'Finder';
      id: number;
      lastName: string;
      firstName: string;
      username?: string | null;
    }>;
  }>;
};

export type MyGamesQueryVariables = Exact<{
  options: PaginateMyGamesOptions;
  relations?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
}>;

export type MyGamesQuery = {
  __typename?: 'Query';
  myGames: {
    __typename?: 'PaginateMyGames';
    total: number;
    items: Array<{
      __typename?: 'Game';
      id: number;
      endTime: any;
      address: string;
      name: string;
      startTime: any;
      type: PlaygroundType;
      status: GameStatus;
      lastMessageAt?: any | null;
      host: {
        __typename?: 'Finder';
        id: number;
        firstName: string;
        lastName: string;
        username?: string | null;
      };
      lastMessageRead?: Array<{
        __typename?: 'LastMessageRead';
        lastRead?: any | null;
        finder?: { __typename?: 'Finder'; id: number } | null;
      }> | null;
    }>;
  };
};

export type HeadlessGameQueryVariables = Exact<{
  headlessGameId: Scalars['Float']['input'];
}>;

export type HeadlessGameQuery = {
  __typename?: 'Query';
  headlessGame: {
    __typename?: 'HeadlessGame';
    address: string;
    description?: string | null;
    genders: Array<Gender>;
    id: number;
    name: string;
    levels: Array<GameLevel>;
    maxParticipants: number;
    type: PlaygroundType;
    createdAt: any;
    startTime: any;
    endTime: any;
    location: { __typename?: 'GeometryPoint'; coordinates: Array<number> };
    host: {
      __typename?: 'Finder';
      lastName: string;
      firstName: string;
      username?: string | null;
      id: number;
    };
    participants: Array<{
      __typename?: 'Finder';
      id: number;
      lastName: string;
      firstName: string;
      username?: string | null;
    }>;
  };
};

export type SendMessageMutationVariables = Exact<{
  gameId: Scalars['Float']['input'];
  content: Scalars['String']['input'];
}>;

export type SendMessageMutation = {
  __typename?: 'Mutation';
  sendMessage: { __typename?: 'Message'; id: number };
};

export type MarkMessageAsReadMutationVariables = Exact<{
  gameId: Scalars['Float']['input'];
  markMessageAsReadId: Scalars['Float']['input'];
}>;

export type MarkMessageAsReadMutation = {
  __typename?: 'Mutation';
  markMessageAsRead: boolean;
};

export type MarkAllMessagesAsReadMutationVariables = Exact<{
  gameId: Scalars['Float']['input'];
}>;

export type MarkAllMessagesAsReadMutation = {
  __typename?: 'Mutation';
  markAllMessagesAsRead: boolean;
};

export type ReadChatChannelMutationVariables = Exact<{
  gameId: Scalars['Float']['input'];
}>;

export type ReadChatChannelMutation = {
  __typename?: 'Mutation';
  readChatChannel: boolean;
};

export type PaginateMessagesQueryVariables = Exact<{
  gameId: Scalars['Float']['input'];
  options: PaginateMessageOptions;
  relations?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
}>;

export type PaginateMessagesQuery = {
  __typename?: 'Query';
  paginateMessages: {
    __typename?: 'PaginateMessages';
    total: number;
    items: Array<{
      __typename?: 'Message';
      id: number;
      content: string;
      createdAt: any;
      finder: {
        __typename?: 'Finder';
        id: number;
        firstName: string;
        lastName: string;
        username?: string | null;
      };
    }>;
  };
};

export type Message_CreatedSubscriptionVariables = Exact<{
  gameId: Scalars['Int']['input'];
}>;

export type Message_CreatedSubscription = {
  __typename?: 'Subscription';
  MESSAGE_CREATED: {
    __typename?: 'Message';
    id: number;
    content: string;
    finder: {
      __typename?: 'Finder';
      id: number;
      firstName: string;
      lastName: string;
      username?: string | null;
    };
  };
};

export type UpsertFinderMetricMutationVariables = Exact<{
  metrics: Array<UpsertFinderMetricInput> | UpsertFinderMetricInput;
}>;

export type UpsertFinderMetricMutation = {
  __typename?: 'Mutation';
  upsertFinderMetrics: boolean;
};

export type CreateFinderMetricMutationVariables = Exact<{
  metricId: Scalars['Float']['input'];
  value: Scalars['String']['input'];
}>;

export type CreateFinderMetricMutation = {
  __typename?: 'Mutation';
  createFinderMetric: {
    __typename?: 'FinderMetric';
    id: number;
    value: string;
    metric: { __typename?: 'Metric'; code: string; sportType?: string | null };
  };
};

export type FinderMetricsQueryVariables = Exact<{ [key: string]: never }>;

export type FinderMetricsQuery = {
  __typename?: 'Query';
  paginateMetrics: {
    __typename?: 'PaginateMetrics';
    total: number;
    items: Array<{
      __typename?: 'Metric';
      id: number;
      name: string;
      sportType?: string | null;
      code: string;
    }>;
  };
};

export type MyMetricsQueryVariables = Exact<{
  relations?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
}>;

export type MyMetricsQuery = {
  __typename?: 'Query';
  myMetrics: Array<{
    __typename?: 'FinderMetric';
    id: number;
    value: string;
    json?: any | null;
    metric: {
      __typename?: 'Metric';
      name: string;
      code: string;
      id: number;
      sportType?: string | null;
    };
  }>;
};

export type PaginateMetricsQueryVariables = Exact<{ [key: string]: never }>;

export type PaginateMetricsQuery = {
  __typename?: 'Query';
  paginateMetrics: {
    __typename?: 'PaginateMetrics';
    total: number;
    items: Array<{
      __typename?: 'Metric';
      code: string;
      id: number;
      name: string;
      sportType?: string | null;
    }>;
  };
};

export type HeadlessPaginatePlaygroundUnitQueryVariables = Exact<{
  options?: InputMaybe<HeadlessPaginatePlaygroundUnitOptions>;
  relations?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
}>;

export type HeadlessPaginatePlaygroundUnitQuery = {
  __typename?: 'Query';
  headlessPaginatePlaygroundUnit: {
    __typename?: 'HeadlessPaginatePlaygroundUnits';
    total: number;
    items: Array<{
      __typename?: 'HeadlessPlaygroundUnit';
      id: number;
      name: string;
      defaultPrice: number;
      capacity: number;
      labels?: Array<{ __typename?: 'Label'; id: number; name: string }> | null;
    }>;
  };
};

export type AvailablePlaygroundQueryVariables = Exact<{
  findAvailablePlaygroundInput: FindAvailablePlaygroundInput;
}>;

export type AvailablePlaygroundQuery = {
  __typename?: 'Query';
  availablePlayground: Array<{
    __typename?: 'Playground';
    id: number;
    name: string;
    type: string;
    address: string;
    location: { __typename?: 'GeometryPoint'; coordinates: Array<number> };
  }>;
};

export type HeadlessPlaygroundQueryVariables = Exact<{
  headlessPlaygroundId: Scalars['Float']['input'];
  relations?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
}>;

export type HeadlessPlaygroundQuery = {
  __typename?: 'Query';
  headlessPlayground: {
    __typename?: 'HeadlessPlayground';
    id: number;
    address: string;
    name: string;
    timeSlotUnit: number;
    type: string;
    closeHour: number;
    openHour: number;
    phone: string;
    coverImg?: {
      __typename?: 'Image';
      id: number;
      variants?: Array<string> | null;
    } | null;
  };
};

export type SuggestPlaygroundMutationVariables = Exact<{
  suggestPlaygroundInput: SuggestPlaygroundInput;
}>;

export type SuggestPlaygroundMutation = {
  __typename?: 'Mutation';
  suggestPlayground: { __typename?: 'SuggestPlayground'; id: number };
};

export type FindSuggestPlaygroundsBySearchTextQueryVariables = Exact<{
  searchText: Scalars['String']['input'];
}>;

export type FindSuggestPlaygroundsBySearchTextQuery = {
  __typename?: 'Query';
  findSuggestPlaygroundsBySearchText: Array<{
    __typename?: 'SuggestPlayground';
    name: string;
    id: number;
    type: string;
    address: string;
  }>;
};

export type UserInteractionQueryVariables = Exact<{ [key: string]: never }>;

export type UserInteractionQuery = {
  __typename?: 'Query';
  userInteraction: Array<{
    __typename?: 'UserInteraction';
    id: number;
    interactionType: string;
    game: {
      __typename?: 'Game';
      id: number;
      name: string;
      type: PlaygroundType;
    };
  }>;
};

export const CreateBetaCustomerDocument = gql`
  mutation CreateBetaCustomer(
    $createBetaCustomerInput: CreateBetaCustomerInput!
  ) {
    createBetaCustomer(createBetaCustomerInput: $createBetaCustomerInput) {
      id
    }
  }
`;
export type CreateBetaCustomerMutationFn = Apollo.MutationFunction<
  CreateBetaCustomerMutation,
  CreateBetaCustomerMutationVariables
>;
export type CreateBetaCustomerComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateBetaCustomerMutation,
    CreateBetaCustomerMutationVariables
  >,
  'mutation'
>;

export const CreateBetaCustomerComponent = (
  props: CreateBetaCustomerComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateBetaCustomerMutation,
    CreateBetaCustomerMutationVariables
  >
    mutation={CreateBetaCustomerDocument}
    {...props}
  />
);

/**
 * __useCreateBetaCustomerMutation__
 *
 * To run a mutation, you first call `useCreateBetaCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBetaCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBetaCustomerMutation, { data, loading, error }] = useCreateBetaCustomerMutation({
 *   variables: {
 *      createBetaCustomerInput: // value for 'createBetaCustomerInput'
 *   },
 * });
 */
export function useCreateBetaCustomerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBetaCustomerMutation,
    CreateBetaCustomerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateBetaCustomerMutation,
    CreateBetaCustomerMutationVariables
  >(CreateBetaCustomerDocument, options);
}
export type CreateBetaCustomerMutationHookResult = ReturnType<
  typeof useCreateBetaCustomerMutation
>;
export type CreateBetaCustomerMutationResult =
  Apollo.MutationResult<CreateBetaCustomerMutation>;
export type CreateBetaCustomerMutationOptions = Apollo.BaseMutationOptions<
  CreateBetaCustomerMutation,
  CreateBetaCustomerMutationVariables
>;
export const BetaCustomerCountDocument = gql`
  query BetaCustomerCount {
    betaCustomerCount
  }
`;
export type BetaCustomerCountComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    BetaCustomerCountQuery,
    BetaCustomerCountQueryVariables
  >,
  'query'
>;

export const BetaCustomerCountComponent = (
  props: BetaCustomerCountComponentProps
) => (
  <ApolloReactComponents.Query<
    BetaCustomerCountQuery,
    BetaCustomerCountQueryVariables
  >
    query={BetaCustomerCountDocument}
    {...props}
  />
);

/**
 * __useBetaCustomerCountQuery__
 *
 * To run a query within a React component, call `useBetaCustomerCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useBetaCustomerCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBetaCustomerCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useBetaCustomerCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BetaCustomerCountQuery,
    BetaCustomerCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BetaCustomerCountQuery,
    BetaCustomerCountQueryVariables
  >(BetaCustomerCountDocument, options);
}
export function useBetaCustomerCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BetaCustomerCountQuery,
    BetaCustomerCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BetaCustomerCountQuery,
    BetaCustomerCountQueryVariables
  >(BetaCustomerCountDocument, options);
}
export function useBetaCustomerCountSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    BetaCustomerCountQuery,
    BetaCustomerCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    BetaCustomerCountQuery,
    BetaCustomerCountQueryVariables
  >(BetaCustomerCountDocument, options);
}
export type BetaCustomerCountQueryHookResult = ReturnType<
  typeof useBetaCustomerCountQuery
>;
export type BetaCustomerCountLazyQueryHookResult = ReturnType<
  typeof useBetaCustomerCountLazyQuery
>;
export type BetaCustomerCountSuspenseQueryHookResult = ReturnType<
  typeof useBetaCustomerCountSuspenseQuery
>;
export type BetaCustomerCountQueryResult = Apollo.QueryResult<
  BetaCustomerCountQuery,
  BetaCustomerCountQueryVariables
>;
export const RegisterFinderDocument = gql`
  mutation RegisterFinder($registerFinderInput: CreateFinderInput!) {
    registerFinder(registerFinderInput: $registerFinderInput) {
      id
    }
  }
`;
export type RegisterFinderMutationFn = Apollo.MutationFunction<
  RegisterFinderMutation,
  RegisterFinderMutationVariables
>;
export type RegisterFinderComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    RegisterFinderMutation,
    RegisterFinderMutationVariables
  >,
  'mutation'
>;

export const RegisterFinderComponent = (
  props: RegisterFinderComponentProps
) => (
  <ApolloReactComponents.Mutation<
    RegisterFinderMutation,
    RegisterFinderMutationVariables
  >
    mutation={RegisterFinderDocument}
    {...props}
  />
);

/**
 * __useRegisterFinderMutation__
 *
 * To run a mutation, you first call `useRegisterFinderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterFinderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerFinderMutation, { data, loading, error }] = useRegisterFinderMutation({
 *   variables: {
 *      registerFinderInput: // value for 'registerFinderInput'
 *   },
 * });
 */
export function useRegisterFinderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterFinderMutation,
    RegisterFinderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterFinderMutation,
    RegisterFinderMutationVariables
  >(RegisterFinderDocument, options);
}
export type RegisterFinderMutationHookResult = ReturnType<
  typeof useRegisterFinderMutation
>;
export type RegisterFinderMutationResult =
  Apollo.MutationResult<RegisterFinderMutation>;
export type RegisterFinderMutationOptions = Apollo.BaseMutationOptions<
  RegisterFinderMutation,
  RegisterFinderMutationVariables
>;
export const LoginFinderDocument = gql`
  mutation LoginFinder($email: String!, $password: String!) {
    loginFinder(email: $email, password: $password) {
      id
    }
  }
`;
export type LoginFinderMutationFn = Apollo.MutationFunction<
  LoginFinderMutation,
  LoginFinderMutationVariables
>;
export type LoginFinderComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    LoginFinderMutation,
    LoginFinderMutationVariables
  >,
  'mutation'
>;

export const LoginFinderComponent = (props: LoginFinderComponentProps) => (
  <ApolloReactComponents.Mutation<
    LoginFinderMutation,
    LoginFinderMutationVariables
  >
    mutation={LoginFinderDocument}
    {...props}
  />
);

/**
 * __useLoginFinderMutation__
 *
 * To run a mutation, you first call `useLoginFinderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginFinderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginFinderMutation, { data, loading, error }] = useLoginFinderMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginFinderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginFinderMutation,
    LoginFinderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginFinderMutation, LoginFinderMutationVariables>(
    LoginFinderDocument,
    options
  );
}
export type LoginFinderMutationHookResult = ReturnType<
  typeof useLoginFinderMutation
>;
export type LoginFinderMutationResult =
  Apollo.MutationResult<LoginFinderMutation>;
export type LoginFinderMutationOptions = Apollo.BaseMutationOptions<
  LoginFinderMutation,
  LoginFinderMutationVariables
>;
export const AuthenticateDocument = gql`
  mutation Authenticate($google: GoogleAuthenticatorInput) {
    authenticate(google: $google) {
      id
    }
  }
`;
export type AuthenticateMutationFn = Apollo.MutationFunction<
  AuthenticateMutation,
  AuthenticateMutationVariables
>;
export type AuthenticateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >,
  'mutation'
>;

export const AuthenticateComponent = (props: AuthenticateComponentProps) => (
  <ApolloReactComponents.Mutation<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >
    mutation={AuthenticateDocument}
    {...props}
  />
);

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      google: // value for 'google'
 *   },
 * });
 */
export function useAuthenticateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >(AuthenticateDocument, options);
}
export type AuthenticateMutationHookResult = ReturnType<
  typeof useAuthenticateMutation
>;
export type AuthenticateMutationResult =
  Apollo.MutationResult<AuthenticateMutation>;
export type AuthenticateMutationOptions = Apollo.BaseMutationOptions<
  AuthenticateMutation,
  AuthenticateMutationVariables
>;
export const VerifyFinderDocument = gql`
  mutation VerifyFinder($token: String!) {
    verifyFinder(token: $token) {
      lastName
      firstName
    }
  }
`;
export type VerifyFinderMutationFn = Apollo.MutationFunction<
  VerifyFinderMutation,
  VerifyFinderMutationVariables
>;
export type VerifyFinderComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    VerifyFinderMutation,
    VerifyFinderMutationVariables
  >,
  'mutation'
>;

export const VerifyFinderComponent = (props: VerifyFinderComponentProps) => (
  <ApolloReactComponents.Mutation<
    VerifyFinderMutation,
    VerifyFinderMutationVariables
  >
    mutation={VerifyFinderDocument}
    {...props}
  />
);

/**
 * __useVerifyFinderMutation__
 *
 * To run a mutation, you first call `useVerifyFinderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyFinderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyFinderMutation, { data, loading, error }] = useVerifyFinderMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyFinderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyFinderMutation,
    VerifyFinderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    VerifyFinderMutation,
    VerifyFinderMutationVariables
  >(VerifyFinderDocument, options);
}
export type VerifyFinderMutationHookResult = ReturnType<
  typeof useVerifyFinderMutation
>;
export type VerifyFinderMutationResult =
  Apollo.MutationResult<VerifyFinderMutation>;
export type VerifyFinderMutationOptions = Apollo.BaseMutationOptions<
  VerifyFinderMutation,
  VerifyFinderMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout {
    logoutFinder
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;
export type LogoutComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    LogoutMutation,
    LogoutMutationVariables
  >,
  'mutation'
>;

export const LogoutComponent = (props: LogoutComponentProps) => (
  <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables>
    mutation={LogoutDocument}
    {...props}
  />
);

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const RequestResetPasswordDocument = gql`
  mutation RequestResetPassword($email: String!) {
    requestResetPassword(email: $email)
  }
`;
export type RequestResetPasswordMutationFn = Apollo.MutationFunction<
  RequestResetPasswordMutation,
  RequestResetPasswordMutationVariables
>;
export type RequestResetPasswordComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    RequestResetPasswordMutation,
    RequestResetPasswordMutationVariables
  >,
  'mutation'
>;

export const RequestResetPasswordComponent = (
  props: RequestResetPasswordComponentProps
) => (
  <ApolloReactComponents.Mutation<
    RequestResetPasswordMutation,
    RequestResetPasswordMutationVariables
  >
    mutation={RequestResetPasswordDocument}
    {...props}
  />
);

/**
 * __useRequestResetPasswordMutation__
 *
 * To run a mutation, you first call `useRequestResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetPasswordMutation, { data, loading, error }] = useRequestResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RequestResetPasswordMutation,
    RequestResetPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RequestResetPasswordMutation,
    RequestResetPasswordMutationVariables
  >(RequestResetPasswordDocument, options);
}
export type RequestResetPasswordMutationHookResult = ReturnType<
  typeof useRequestResetPasswordMutation
>;
export type RequestResetPasswordMutationResult =
  Apollo.MutationResult<RequestResetPasswordMutation>;
export type RequestResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  RequestResetPasswordMutation,
  RequestResetPasswordMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation ResetPassword($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password)
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export type ResetPasswordComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >,
  'mutation'
>;

export const ResetPasswordComponent = (props: ResetPasswordComponentProps) => (
  <ApolloReactComponents.Mutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
    mutation={ResetPasswordDocument}
    {...props}
  />
);

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const RequestVerifyFinderDocument = gql`
  mutation RequestVerifyFinder {
    requestVerifyFinder
  }
`;
export type RequestVerifyFinderMutationFn = Apollo.MutationFunction<
  RequestVerifyFinderMutation,
  RequestVerifyFinderMutationVariables
>;
export type RequestVerifyFinderComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    RequestVerifyFinderMutation,
    RequestVerifyFinderMutationVariables
  >,
  'mutation'
>;

export const RequestVerifyFinderComponent = (
  props: RequestVerifyFinderComponentProps
) => (
  <ApolloReactComponents.Mutation<
    RequestVerifyFinderMutation,
    RequestVerifyFinderMutationVariables
  >
    mutation={RequestVerifyFinderDocument}
    {...props}
  />
);

/**
 * __useRequestVerifyFinderMutation__
 *
 * To run a mutation, you first call `useRequestVerifyFinderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestVerifyFinderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestVerifyFinderMutation, { data, loading, error }] = useRequestVerifyFinderMutation({
 *   variables: {
 *   },
 * });
 */
export function useRequestVerifyFinderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RequestVerifyFinderMutation,
    RequestVerifyFinderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RequestVerifyFinderMutation,
    RequestVerifyFinderMutationVariables
  >(RequestVerifyFinderDocument, options);
}
export type RequestVerifyFinderMutationHookResult = ReturnType<
  typeof useRequestVerifyFinderMutation
>;
export type RequestVerifyFinderMutationResult =
  Apollo.MutationResult<RequestVerifyFinderMutation>;
export type RequestVerifyFinderMutationOptions = Apollo.BaseMutationOptions<
  RequestVerifyFinderMutation,
  RequestVerifyFinderMutationVariables
>;
export const MeFinderDocument = gql`
  query MeFinder {
    meFinder {
      id
      firstName
      lastName
      username
      verified
      jwt
    }
  }
`;
export type MeFinderComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    MeFinderQuery,
    MeFinderQueryVariables
  >,
  'query'
>;

export const MeFinderComponent = (props: MeFinderComponentProps) => (
  <ApolloReactComponents.Query<MeFinderQuery, MeFinderQueryVariables>
    query={MeFinderDocument}
    {...props}
  />
);

/**
 * __useMeFinderQuery__
 *
 * To run a query within a React component, call `useMeFinderQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeFinderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeFinderQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeFinderQuery(
  baseOptions?: Apollo.QueryHookOptions<MeFinderQuery, MeFinderQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeFinderQuery, MeFinderQueryVariables>(
    MeFinderDocument,
    options
  );
}
export function useMeFinderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeFinderQuery,
    MeFinderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeFinderQuery, MeFinderQueryVariables>(
    MeFinderDocument,
    options
  );
}
export function useMeFinderSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    MeFinderQuery,
    MeFinderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MeFinderQuery, MeFinderQueryVariables>(
    MeFinderDocument,
    options
  );
}
export type MeFinderQueryHookResult = ReturnType<typeof useMeFinderQuery>;
export type MeFinderLazyQueryHookResult = ReturnType<
  typeof useMeFinderLazyQuery
>;
export type MeFinderSuspenseQueryHookResult = ReturnType<
  typeof useMeFinderSuspenseQuery
>;
export type MeFinderQueryResult = Apollo.QueryResult<
  MeFinderQuery,
  MeFinderQueryVariables
>;
export const GetFinderByUsernameDocument = gql`
  query GetFinderByUsername($username: String!) {
    getFinderByUsername(username: $username) {
      id
      firstName
      lastName
      username
      verifiedAt
    }
  }
`;
export type GetFinderByUsernameComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetFinderByUsernameQuery,
    GetFinderByUsernameQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetFinderByUsernameQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetFinderByUsernameComponent = (
  props: GetFinderByUsernameComponentProps
) => (
  <ApolloReactComponents.Query<
    GetFinderByUsernameQuery,
    GetFinderByUsernameQueryVariables
  >
    query={GetFinderByUsernameDocument}
    {...props}
  />
);

/**
 * __useGetFinderByUsernameQuery__
 *
 * To run a query within a React component, call `useGetFinderByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFinderByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFinderByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetFinderByUsernameQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFinderByUsernameQuery,
    GetFinderByUsernameQueryVariables
  > &
    (
      | { variables: GetFinderByUsernameQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFinderByUsernameQuery,
    GetFinderByUsernameQueryVariables
  >(GetFinderByUsernameDocument, options);
}
export function useGetFinderByUsernameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFinderByUsernameQuery,
    GetFinderByUsernameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFinderByUsernameQuery,
    GetFinderByUsernameQueryVariables
  >(GetFinderByUsernameDocument, options);
}
export function useGetFinderByUsernameSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetFinderByUsernameQuery,
    GetFinderByUsernameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetFinderByUsernameQuery,
    GetFinderByUsernameQueryVariables
  >(GetFinderByUsernameDocument, options);
}
export type GetFinderByUsernameQueryHookResult = ReturnType<
  typeof useGetFinderByUsernameQuery
>;
export type GetFinderByUsernameLazyQueryHookResult = ReturnType<
  typeof useGetFinderByUsernameLazyQuery
>;
export type GetFinderByUsernameSuspenseQueryHookResult = ReturnType<
  typeof useGetFinderByUsernameSuspenseQuery
>;
export type GetFinderByUsernameQueryResult = Apollo.QueryResult<
  GetFinderByUsernameQuery,
  GetFinderByUsernameQueryVariables
>;
export const CountFinderDocument = gql`
  query CountFinder {
    countFinder
  }
`;
export type CountFinderComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    CountFinderQuery,
    CountFinderQueryVariables
  >,
  'query'
>;

export const CountFinderComponent = (props: CountFinderComponentProps) => (
  <ApolloReactComponents.Query<CountFinderQuery, CountFinderQueryVariables>
    query={CountFinderDocument}
    {...props}
  />
);

/**
 * __useCountFinderQuery__
 *
 * To run a query within a React component, call `useCountFinderQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountFinderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountFinderQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountFinderQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CountFinderQuery,
    CountFinderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CountFinderQuery, CountFinderQueryVariables>(
    CountFinderDocument,
    options
  );
}
export function useCountFinderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CountFinderQuery,
    CountFinderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CountFinderQuery, CountFinderQueryVariables>(
    CountFinderDocument,
    options
  );
}
export function useCountFinderSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CountFinderQuery,
    CountFinderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<CountFinderQuery, CountFinderQueryVariables>(
    CountFinderDocument,
    options
  );
}
export type CountFinderQueryHookResult = ReturnType<typeof useCountFinderQuery>;
export type CountFinderLazyQueryHookResult = ReturnType<
  typeof useCountFinderLazyQuery
>;
export type CountFinderSuspenseQueryHookResult = ReturnType<
  typeof useCountFinderSuspenseQuery
>;
export type CountFinderQueryResult = Apollo.QueryResult<
  CountFinderQuery,
  CountFinderQueryVariables
>;
export const MyFinderProfileDocument = gql`
  query MyFinderProfile {
    myFinderProfile {
      email
      firstName
      lastName
      phone
      username
      dob
      bio
      verifiedAt
    }
  }
`;
export type MyFinderProfileComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    MyFinderProfileQuery,
    MyFinderProfileQueryVariables
  >,
  'query'
>;

export const MyFinderProfileComponent = (
  props: MyFinderProfileComponentProps
) => (
  <ApolloReactComponents.Query<
    MyFinderProfileQuery,
    MyFinderProfileQueryVariables
  >
    query={MyFinderProfileDocument}
    {...props}
  />
);

/**
 * __useMyFinderProfileQuery__
 *
 * To run a query within a React component, call `useMyFinderProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFinderProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFinderProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyFinderProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MyFinderProfileQuery,
    MyFinderProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyFinderProfileQuery, MyFinderProfileQueryVariables>(
    MyFinderProfileDocument,
    options
  );
}
export function useMyFinderProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyFinderProfileQuery,
    MyFinderProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MyFinderProfileQuery,
    MyFinderProfileQueryVariables
  >(MyFinderProfileDocument, options);
}
export function useMyFinderProfileSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    MyFinderProfileQuery,
    MyFinderProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    MyFinderProfileQuery,
    MyFinderProfileQueryVariables
  >(MyFinderProfileDocument, options);
}
export type MyFinderProfileQueryHookResult = ReturnType<
  typeof useMyFinderProfileQuery
>;
export type MyFinderProfileLazyQueryHookResult = ReturnType<
  typeof useMyFinderProfileLazyQuery
>;
export type MyFinderProfileSuspenseQueryHookResult = ReturnType<
  typeof useMyFinderProfileSuspenseQuery
>;
export type MyFinderProfileQueryResult = Apollo.QueryResult<
  MyFinderProfileQuery,
  MyFinderProfileQueryVariables
>;
export const UpdateMyProfileDocument = gql`
  mutation UpdateMyProfile($input: UpdateFinderInput!) {
    updateMyProfile(input: $input) {
      email
      firstName
      lastName
      phone
      username
      dob
      bio
    }
  }
`;
export type UpdateMyProfileMutationFn = Apollo.MutationFunction<
  UpdateMyProfileMutation,
  UpdateMyProfileMutationVariables
>;
export type UpdateMyProfileComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateMyProfileMutation,
    UpdateMyProfileMutationVariables
  >,
  'mutation'
>;

export const UpdateMyProfileComponent = (
  props: UpdateMyProfileComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateMyProfileMutation,
    UpdateMyProfileMutationVariables
  >
    mutation={UpdateMyProfileDocument}
    {...props}
  />
);

/**
 * __useUpdateMyProfileMutation__
 *
 * To run a mutation, you first call `useUpdateMyProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyProfileMutation, { data, loading, error }] = useUpdateMyProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMyProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMyProfileMutation,
    UpdateMyProfileMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateMyProfileMutation,
    UpdateMyProfileMutationVariables
  >(UpdateMyProfileDocument, options);
}
export type UpdateMyProfileMutationHookResult = ReturnType<
  typeof useUpdateMyProfileMutation
>;
export type UpdateMyProfileMutationResult =
  Apollo.MutationResult<UpdateMyProfileMutation>;
export type UpdateMyProfileMutationOptions = Apollo.BaseMutationOptions<
  UpdateMyProfileMutation,
  UpdateMyProfileMutationVariables
>;
export const CreateGameDocument = gql`
  mutation CreateGame($createGameInput: CreateGameInput!) {
    createGame(createGameInput: $createGameInput) {
      id
    }
  }
`;
export type CreateGameMutationFn = Apollo.MutationFunction<
  CreateGameMutation,
  CreateGameMutationVariables
>;
export type CreateGameComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateGameMutation,
    CreateGameMutationVariables
  >,
  'mutation'
>;

export const CreateGameComponent = (props: CreateGameComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreateGameMutation,
    CreateGameMutationVariables
  >
    mutation={CreateGameDocument}
    {...props}
  />
);

/**
 * __useCreateGameMutation__
 *
 * To run a mutation, you first call `useCreateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGameMutation, { data, loading, error }] = useCreateGameMutation({
 *   variables: {
 *      createGameInput: // value for 'createGameInput'
 *   },
 * });
 */
export function useCreateGameMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateGameMutation,
    CreateGameMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateGameMutation, CreateGameMutationVariables>(
    CreateGameDocument,
    options
  );
}
export type CreateGameMutationHookResult = ReturnType<
  typeof useCreateGameMutation
>;
export type CreateGameMutationResult =
  Apollo.MutationResult<CreateGameMutation>;
export type CreateGameMutationOptions = Apollo.BaseMutationOptions<
  CreateGameMutation,
  CreateGameMutationVariables
>;
export const AcceptAGameDocument = gql`
  mutation AcceptAGame($gameId: Float!) {
    acceptAGame(gameId: $gameId)
  }
`;
export type AcceptAGameMutationFn = Apollo.MutationFunction<
  AcceptAGameMutation,
  AcceptAGameMutationVariables
>;
export type AcceptAGameComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AcceptAGameMutation,
    AcceptAGameMutationVariables
  >,
  'mutation'
>;

export const AcceptAGameComponent = (props: AcceptAGameComponentProps) => (
  <ApolloReactComponents.Mutation<
    AcceptAGameMutation,
    AcceptAGameMutationVariables
  >
    mutation={AcceptAGameDocument}
    {...props}
  />
);

/**
 * __useAcceptAGameMutation__
 *
 * To run a mutation, you first call `useAcceptAGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptAGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptAGameMutation, { data, loading, error }] = useAcceptAGameMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useAcceptAGameMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AcceptAGameMutation,
    AcceptAGameMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AcceptAGameMutation, AcceptAGameMutationVariables>(
    AcceptAGameDocument,
    options
  );
}
export type AcceptAGameMutationHookResult = ReturnType<
  typeof useAcceptAGameMutation
>;
export type AcceptAGameMutationResult =
  Apollo.MutationResult<AcceptAGameMutation>;
export type AcceptAGameMutationOptions = Apollo.BaseMutationOptions<
  AcceptAGameMutation,
  AcceptAGameMutationVariables
>;
export const RejectAGameDocument = gql`
  mutation RejectAGame($gameId: Float!) {
    rejectAGame(gameId: $gameId)
  }
`;
export type RejectAGameMutationFn = Apollo.MutationFunction<
  RejectAGameMutation,
  RejectAGameMutationVariables
>;
export type RejectAGameComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    RejectAGameMutation,
    RejectAGameMutationVariables
  >,
  'mutation'
>;

export const RejectAGameComponent = (props: RejectAGameComponentProps) => (
  <ApolloReactComponents.Mutation<
    RejectAGameMutation,
    RejectAGameMutationVariables
  >
    mutation={RejectAGameDocument}
    {...props}
  />
);

/**
 * __useRejectAGameMutation__
 *
 * To run a mutation, you first call `useRejectAGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectAGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectAGameMutation, { data, loading, error }] = useRejectAGameMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useRejectAGameMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RejectAGameMutation,
    RejectAGameMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RejectAGameMutation, RejectAGameMutationVariables>(
    RejectAGameDocument,
    options
  );
}
export type RejectAGameMutationHookResult = ReturnType<
  typeof useRejectAGameMutation
>;
export type RejectAGameMutationResult =
  Apollo.MutationResult<RejectAGameMutation>;
export type RejectAGameMutationOptions = Apollo.BaseMutationOptions<
  RejectAGameMutation,
  RejectAGameMutationVariables
>;
export const FindGamesDocument = gql`
  query FindGames($relations: [String!], $options: AlternativeSearchOptions!) {
    findGames(relations: $relations, options: $options) {
      address
      description
      genders
      id
      name
      location {
        coordinates
      }
      host {
        lastName
        firstName
        username
        id
      }
      levels
      maxParticipants
      participants {
        id
        lastName
        firstName
        username
      }
      type
      createdAt
      startTime
      endTime
    }
  }
`;
export type FindGamesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FindGamesQuery,
    FindGamesQueryVariables
  >,
  'query'
> &
  ({ variables: FindGamesQueryVariables; skip?: boolean } | { skip: boolean });

export const FindGamesComponent = (props: FindGamesComponentProps) => (
  <ApolloReactComponents.Query<FindGamesQuery, FindGamesQueryVariables>
    query={FindGamesDocument}
    {...props}
  />
);

/**
 * __useFindGamesQuery__
 *
 * To run a query within a React component, call `useFindGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGamesQuery({
 *   variables: {
 *      relations: // value for 'relations'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useFindGamesQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindGamesQuery,
    FindGamesQueryVariables
  > &
    ({ variables: FindGamesQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindGamesQuery, FindGamesQueryVariables>(
    FindGamesDocument,
    options
  );
}
export function useFindGamesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindGamesQuery,
    FindGamesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindGamesQuery, FindGamesQueryVariables>(
    FindGamesDocument,
    options
  );
}
export function useFindGamesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    FindGamesQuery,
    FindGamesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FindGamesQuery, FindGamesQueryVariables>(
    FindGamesDocument,
    options
  );
}
export type FindGamesQueryHookResult = ReturnType<typeof useFindGamesQuery>;
export type FindGamesLazyQueryHookResult = ReturnType<
  typeof useFindGamesLazyQuery
>;
export type FindGamesSuspenseQueryHookResult = ReturnType<
  typeof useFindGamesSuspenseQuery
>;
export type FindGamesQueryResult = Apollo.QueryResult<
  FindGamesQuery,
  FindGamesQueryVariables
>;
export const MyGamesDocument = gql`
  query MyGames($options: PaginateMyGamesOptions!, $relations: [String!]) {
    myGames(options: $options, relations: $relations) {
      items {
        id
        endTime
        address
        name
        host {
          id
          firstName
          lastName
          username
        }
        startTime
        type
        status
        lastMessageAt
        lastMessageRead {
          lastRead
          finder {
            id
          }
        }
      }
      total
    }
  }
`;
export type MyGamesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    MyGamesQuery,
    MyGamesQueryVariables
  >,
  'query'
> &
  ({ variables: MyGamesQueryVariables; skip?: boolean } | { skip: boolean });

export const MyGamesComponent = (props: MyGamesComponentProps) => (
  <ApolloReactComponents.Query<MyGamesQuery, MyGamesQueryVariables>
    query={MyGamesDocument}
    {...props}
  />
);

/**
 * __useMyGamesQuery__
 *
 * To run a query within a React component, call `useMyGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyGamesQuery({
 *   variables: {
 *      options: // value for 'options'
 *      relations: // value for 'relations'
 *   },
 * });
 */
export function useMyGamesQuery(
  baseOptions: Apollo.QueryHookOptions<MyGamesQuery, MyGamesQueryVariables> &
    ({ variables: MyGamesQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyGamesQuery, MyGamesQueryVariables>(
    MyGamesDocument,
    options
  );
}
export function useMyGamesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyGamesQuery, MyGamesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyGamesQuery, MyGamesQueryVariables>(
    MyGamesDocument,
    options
  );
}
export function useMyGamesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    MyGamesQuery,
    MyGamesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MyGamesQuery, MyGamesQueryVariables>(
    MyGamesDocument,
    options
  );
}
export type MyGamesQueryHookResult = ReturnType<typeof useMyGamesQuery>;
export type MyGamesLazyQueryHookResult = ReturnType<typeof useMyGamesLazyQuery>;
export type MyGamesSuspenseQueryHookResult = ReturnType<
  typeof useMyGamesSuspenseQuery
>;
export type MyGamesQueryResult = Apollo.QueryResult<
  MyGamesQuery,
  MyGamesQueryVariables
>;
export const HeadlessGameDocument = gql`
  query HeadlessGame($headlessGameId: Float!) {
    headlessGame(id: $headlessGameId) {
      address
      description
      genders
      id
      name
      location {
        coordinates
      }
      host {
        lastName
        firstName
        username
        id
      }
      levels
      maxParticipants
      participants {
        id
        lastName
        firstName
        username
      }
      type
      createdAt
      startTime
      endTime
    }
  }
`;
export type HeadlessGameComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    HeadlessGameQuery,
    HeadlessGameQueryVariables
  >,
  'query'
> &
  (
    | { variables: HeadlessGameQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const HeadlessGameComponent = (props: HeadlessGameComponentProps) => (
  <ApolloReactComponents.Query<HeadlessGameQuery, HeadlessGameQueryVariables>
    query={HeadlessGameDocument}
    {...props}
  />
);

/**
 * __useHeadlessGameQuery__
 *
 * To run a query within a React component, call `useHeadlessGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeadlessGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeadlessGameQuery({
 *   variables: {
 *      headlessGameId: // value for 'headlessGameId'
 *   },
 * });
 */
export function useHeadlessGameQuery(
  baseOptions: Apollo.QueryHookOptions<
    HeadlessGameQuery,
    HeadlessGameQueryVariables
  > &
    (
      | { variables: HeadlessGameQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HeadlessGameQuery, HeadlessGameQueryVariables>(
    HeadlessGameDocument,
    options
  );
}
export function useHeadlessGameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HeadlessGameQuery,
    HeadlessGameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HeadlessGameQuery, HeadlessGameQueryVariables>(
    HeadlessGameDocument,
    options
  );
}
export function useHeadlessGameSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    HeadlessGameQuery,
    HeadlessGameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<HeadlessGameQuery, HeadlessGameQueryVariables>(
    HeadlessGameDocument,
    options
  );
}
export type HeadlessGameQueryHookResult = ReturnType<
  typeof useHeadlessGameQuery
>;
export type HeadlessGameLazyQueryHookResult = ReturnType<
  typeof useHeadlessGameLazyQuery
>;
export type HeadlessGameSuspenseQueryHookResult = ReturnType<
  typeof useHeadlessGameSuspenseQuery
>;
export type HeadlessGameQueryResult = Apollo.QueryResult<
  HeadlessGameQuery,
  HeadlessGameQueryVariables
>;
export const SendMessageDocument = gql`
  mutation SendMessage($gameId: Float!, $content: String!) {
    sendMessage(gameId: $gameId, content: $content) {
      id
    }
  }
`;
export type SendMessageMutationFn = Apollo.MutationFunction<
  SendMessageMutation,
  SendMessageMutationVariables
>;
export type SendMessageComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    SendMessageMutation,
    SendMessageMutationVariables
  >,
  'mutation'
>;

export const SendMessageComponent = (props: SendMessageComponentProps) => (
  <ApolloReactComponents.Mutation<
    SendMessageMutation,
    SendMessageMutationVariables
  >
    mutation={SendMessageDocument}
    {...props}
  />
);

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useSendMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendMessageMutation,
    SendMessageMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(
    SendMessageDocument,
    options
  );
}
export type SendMessageMutationHookResult = ReturnType<
  typeof useSendMessageMutation
>;
export type SendMessageMutationResult =
  Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<
  SendMessageMutation,
  SendMessageMutationVariables
>;
export const MarkMessageAsReadDocument = gql`
  mutation MarkMessageAsRead($gameId: Float!, $markMessageAsReadId: Float!) {
    markMessageAsRead(gameId: $gameId, id: $markMessageAsReadId)
  }
`;
export type MarkMessageAsReadMutationFn = Apollo.MutationFunction<
  MarkMessageAsReadMutation,
  MarkMessageAsReadMutationVariables
>;
export type MarkMessageAsReadComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    MarkMessageAsReadMutation,
    MarkMessageAsReadMutationVariables
  >,
  'mutation'
>;

export const MarkMessageAsReadComponent = (
  props: MarkMessageAsReadComponentProps
) => (
  <ApolloReactComponents.Mutation<
    MarkMessageAsReadMutation,
    MarkMessageAsReadMutationVariables
  >
    mutation={MarkMessageAsReadDocument}
    {...props}
  />
);

/**
 * __useMarkMessageAsReadMutation__
 *
 * To run a mutation, you first call `useMarkMessageAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkMessageAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markMessageAsReadMutation, { data, loading, error }] = useMarkMessageAsReadMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      markMessageAsReadId: // value for 'markMessageAsReadId'
 *   },
 * });
 */
export function useMarkMessageAsReadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkMessageAsReadMutation,
    MarkMessageAsReadMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MarkMessageAsReadMutation,
    MarkMessageAsReadMutationVariables
  >(MarkMessageAsReadDocument, options);
}
export type MarkMessageAsReadMutationHookResult = ReturnType<
  typeof useMarkMessageAsReadMutation
>;
export type MarkMessageAsReadMutationResult =
  Apollo.MutationResult<MarkMessageAsReadMutation>;
export type MarkMessageAsReadMutationOptions = Apollo.BaseMutationOptions<
  MarkMessageAsReadMutation,
  MarkMessageAsReadMutationVariables
>;
export const MarkAllMessagesAsReadDocument = gql`
  mutation MarkAllMessagesAsRead($gameId: Float!) {
    markAllMessagesAsRead(gameId: $gameId)
  }
`;
export type MarkAllMessagesAsReadMutationFn = Apollo.MutationFunction<
  MarkAllMessagesAsReadMutation,
  MarkAllMessagesAsReadMutationVariables
>;
export type MarkAllMessagesAsReadComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    MarkAllMessagesAsReadMutation,
    MarkAllMessagesAsReadMutationVariables
  >,
  'mutation'
>;

export const MarkAllMessagesAsReadComponent = (
  props: MarkAllMessagesAsReadComponentProps
) => (
  <ApolloReactComponents.Mutation<
    MarkAllMessagesAsReadMutation,
    MarkAllMessagesAsReadMutationVariables
  >
    mutation={MarkAllMessagesAsReadDocument}
    {...props}
  />
);

/**
 * __useMarkAllMessagesAsReadMutation__
 *
 * To run a mutation, you first call `useMarkAllMessagesAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAllMessagesAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAllMessagesAsReadMutation, { data, loading, error }] = useMarkAllMessagesAsReadMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useMarkAllMessagesAsReadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkAllMessagesAsReadMutation,
    MarkAllMessagesAsReadMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MarkAllMessagesAsReadMutation,
    MarkAllMessagesAsReadMutationVariables
  >(MarkAllMessagesAsReadDocument, options);
}
export type MarkAllMessagesAsReadMutationHookResult = ReturnType<
  typeof useMarkAllMessagesAsReadMutation
>;
export type MarkAllMessagesAsReadMutationResult =
  Apollo.MutationResult<MarkAllMessagesAsReadMutation>;
export type MarkAllMessagesAsReadMutationOptions = Apollo.BaseMutationOptions<
  MarkAllMessagesAsReadMutation,
  MarkAllMessagesAsReadMutationVariables
>;
export const ReadChatChannelDocument = gql`
  mutation ReadChatChannel($gameId: Float!) {
    readChatChannel(gameId: $gameId)
  }
`;
export type ReadChatChannelMutationFn = Apollo.MutationFunction<
  ReadChatChannelMutation,
  ReadChatChannelMutationVariables
>;
export type ReadChatChannelComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    ReadChatChannelMutation,
    ReadChatChannelMutationVariables
  >,
  'mutation'
>;

export const ReadChatChannelComponent = (
  props: ReadChatChannelComponentProps
) => (
  <ApolloReactComponents.Mutation<
    ReadChatChannelMutation,
    ReadChatChannelMutationVariables
  >
    mutation={ReadChatChannelDocument}
    {...props}
  />
);

/**
 * __useReadChatChannelMutation__
 *
 * To run a mutation, you first call `useReadChatChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadChatChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readChatChannelMutation, { data, loading, error }] = useReadChatChannelMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useReadChatChannelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ReadChatChannelMutation,
    ReadChatChannelMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ReadChatChannelMutation,
    ReadChatChannelMutationVariables
  >(ReadChatChannelDocument, options);
}
export type ReadChatChannelMutationHookResult = ReturnType<
  typeof useReadChatChannelMutation
>;
export type ReadChatChannelMutationResult =
  Apollo.MutationResult<ReadChatChannelMutation>;
export type ReadChatChannelMutationOptions = Apollo.BaseMutationOptions<
  ReadChatChannelMutation,
  ReadChatChannelMutationVariables
>;
export const PaginateMessagesDocument = gql`
  query PaginateMessages(
    $gameId: Float!
    $options: PaginateMessageOptions!
    $relations: [String!]
  ) {
    paginateMessages(
      gameId: $gameId
      options: $options
      relations: $relations
    ) {
      items {
        id
        content
        finder {
          id
          firstName
          lastName
          username
        }
        createdAt
      }
      total
    }
  }
`;
export type PaginateMessagesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    PaginateMessagesQuery,
    PaginateMessagesQueryVariables
  >,
  'query'
> &
  (
    | { variables: PaginateMessagesQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const PaginateMessagesComponent = (
  props: PaginateMessagesComponentProps
) => (
  <ApolloReactComponents.Query<
    PaginateMessagesQuery,
    PaginateMessagesQueryVariables
  >
    query={PaginateMessagesDocument}
    {...props}
  />
);

/**
 * __usePaginateMessagesQuery__
 *
 * To run a query within a React component, call `usePaginateMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginateMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginateMessagesQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      options: // value for 'options'
 *      relations: // value for 'relations'
 *   },
 * });
 */
export function usePaginateMessagesQuery(
  baseOptions: Apollo.QueryHookOptions<
    PaginateMessagesQuery,
    PaginateMessagesQueryVariables
  > &
    (
      | { variables: PaginateMessagesQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PaginateMessagesQuery, PaginateMessagesQueryVariables>(
    PaginateMessagesDocument,
    options
  );
}
export function usePaginateMessagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaginateMessagesQuery,
    PaginateMessagesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaginateMessagesQuery,
    PaginateMessagesQueryVariables
  >(PaginateMessagesDocument, options);
}
export function usePaginateMessagesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PaginateMessagesQuery,
    PaginateMessagesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PaginateMessagesQuery,
    PaginateMessagesQueryVariables
  >(PaginateMessagesDocument, options);
}
export type PaginateMessagesQueryHookResult = ReturnType<
  typeof usePaginateMessagesQuery
>;
export type PaginateMessagesLazyQueryHookResult = ReturnType<
  typeof usePaginateMessagesLazyQuery
>;
export type PaginateMessagesSuspenseQueryHookResult = ReturnType<
  typeof usePaginateMessagesSuspenseQuery
>;
export type PaginateMessagesQueryResult = Apollo.QueryResult<
  PaginateMessagesQuery,
  PaginateMessagesQueryVariables
>;
export const Message_CreatedDocument = gql`
  subscription MESSAGE_CREATED($gameId: Int!) {
    MESSAGE_CREATED(gameId: $gameId) {
      id
      content
      finder {
        id
        firstName
        lastName
        username
      }
    }
  }
`;
export type Message_CreatedComponentProps = Omit<
  ApolloReactComponents.SubscriptionComponentOptions<
    Message_CreatedSubscription,
    Message_CreatedSubscriptionVariables
  >,
  'subscription'
>;

export const Message_CreatedComponent = (
  props: Message_CreatedComponentProps
) => (
  <ApolloReactComponents.Subscription<
    Message_CreatedSubscription,
    Message_CreatedSubscriptionVariables
  >
    subscription={Message_CreatedDocument}
    {...props}
  />
);

/**
 * __useMessage_CreatedSubscription__
 *
 * To run a query within a React component, call `useMessage_CreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessage_CreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessage_CreatedSubscription({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useMessage_CreatedSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    Message_CreatedSubscription,
    Message_CreatedSubscriptionVariables
  > &
    (
      | { variables: Message_CreatedSubscriptionVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    Message_CreatedSubscription,
    Message_CreatedSubscriptionVariables
  >(Message_CreatedDocument, options);
}
export type Message_CreatedSubscriptionHookResult = ReturnType<
  typeof useMessage_CreatedSubscription
>;
export type Message_CreatedSubscriptionResult =
  Apollo.SubscriptionResult<Message_CreatedSubscription>;
export const UpsertFinderMetricDocument = gql`
  mutation UpsertFinderMetric($metrics: [UpsertFinderMetricInput!]!) {
    upsertFinderMetrics(metrics: $metrics)
  }
`;
export type UpsertFinderMetricMutationFn = Apollo.MutationFunction<
  UpsertFinderMetricMutation,
  UpsertFinderMetricMutationVariables
>;
export type UpsertFinderMetricComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpsertFinderMetricMutation,
    UpsertFinderMetricMutationVariables
  >,
  'mutation'
>;

export const UpsertFinderMetricComponent = (
  props: UpsertFinderMetricComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpsertFinderMetricMutation,
    UpsertFinderMetricMutationVariables
  >
    mutation={UpsertFinderMetricDocument}
    {...props}
  />
);

/**
 * __useUpsertFinderMetricMutation__
 *
 * To run a mutation, you first call `useUpsertFinderMetricMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertFinderMetricMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertFinderMetricMutation, { data, loading, error }] = useUpsertFinderMetricMutation({
 *   variables: {
 *      metrics: // value for 'metrics'
 *   },
 * });
 */
export function useUpsertFinderMetricMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertFinderMetricMutation,
    UpsertFinderMetricMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertFinderMetricMutation,
    UpsertFinderMetricMutationVariables
  >(UpsertFinderMetricDocument, options);
}
export type UpsertFinderMetricMutationHookResult = ReturnType<
  typeof useUpsertFinderMetricMutation
>;
export type UpsertFinderMetricMutationResult =
  Apollo.MutationResult<UpsertFinderMetricMutation>;
export type UpsertFinderMetricMutationOptions = Apollo.BaseMutationOptions<
  UpsertFinderMetricMutation,
  UpsertFinderMetricMutationVariables
>;
export const CreateFinderMetricDocument = gql`
  mutation CreateFinderMetric($metricId: Float!, $value: String!) {
    createFinderMetric(metricId: $metricId, value: $value) {
      id
      metric {
        code
        sportType
      }
      value
    }
  }
`;
export type CreateFinderMetricMutationFn = Apollo.MutationFunction<
  CreateFinderMetricMutation,
  CreateFinderMetricMutationVariables
>;
export type CreateFinderMetricComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateFinderMetricMutation,
    CreateFinderMetricMutationVariables
  >,
  'mutation'
>;

export const CreateFinderMetricComponent = (
  props: CreateFinderMetricComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateFinderMetricMutation,
    CreateFinderMetricMutationVariables
  >
    mutation={CreateFinderMetricDocument}
    {...props}
  />
);

/**
 * __useCreateFinderMetricMutation__
 *
 * To run a mutation, you first call `useCreateFinderMetricMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFinderMetricMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFinderMetricMutation, { data, loading, error }] = useCreateFinderMetricMutation({
 *   variables: {
 *      metricId: // value for 'metricId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useCreateFinderMetricMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateFinderMetricMutation,
    CreateFinderMetricMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateFinderMetricMutation,
    CreateFinderMetricMutationVariables
  >(CreateFinderMetricDocument, options);
}
export type CreateFinderMetricMutationHookResult = ReturnType<
  typeof useCreateFinderMetricMutation
>;
export type CreateFinderMetricMutationResult =
  Apollo.MutationResult<CreateFinderMetricMutation>;
export type CreateFinderMetricMutationOptions = Apollo.BaseMutationOptions<
  CreateFinderMetricMutation,
  CreateFinderMetricMutationVariables
>;
export const FinderMetricsDocument = gql`
  query FinderMetrics {
    paginateMetrics {
      total
      items {
        id
        name
        sportType
        code
      }
    }
  }
`;
export type FinderMetricsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FinderMetricsQuery,
    FinderMetricsQueryVariables
  >,
  'query'
>;

export const FinderMetricsComponent = (props: FinderMetricsComponentProps) => (
  <ApolloReactComponents.Query<FinderMetricsQuery, FinderMetricsQueryVariables>
    query={FinderMetricsDocument}
    {...props}
  />
);

/**
 * __useFinderMetricsQuery__
 *
 * To run a query within a React component, call `useFinderMetricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFinderMetricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFinderMetricsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFinderMetricsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FinderMetricsQuery,
    FinderMetricsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FinderMetricsQuery, FinderMetricsQueryVariables>(
    FinderMetricsDocument,
    options
  );
}
export function useFinderMetricsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FinderMetricsQuery,
    FinderMetricsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FinderMetricsQuery, FinderMetricsQueryVariables>(
    FinderMetricsDocument,
    options
  );
}
export function useFinderMetricsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    FinderMetricsQuery,
    FinderMetricsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    FinderMetricsQuery,
    FinderMetricsQueryVariables
  >(FinderMetricsDocument, options);
}
export type FinderMetricsQueryHookResult = ReturnType<
  typeof useFinderMetricsQuery
>;
export type FinderMetricsLazyQueryHookResult = ReturnType<
  typeof useFinderMetricsLazyQuery
>;
export type FinderMetricsSuspenseQueryHookResult = ReturnType<
  typeof useFinderMetricsSuspenseQuery
>;
export type FinderMetricsQueryResult = Apollo.QueryResult<
  FinderMetricsQuery,
  FinderMetricsQueryVariables
>;
export const MyMetricsDocument = gql`
  query MyMetrics($relations: [String!]) {
    myMetrics(relations: $relations) {
      id
      metric {
        name
        code
        id
        sportType
      }
      value
      json
    }
  }
`;
export type MyMetricsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    MyMetricsQuery,
    MyMetricsQueryVariables
  >,
  'query'
>;

export const MyMetricsComponent = (props: MyMetricsComponentProps) => (
  <ApolloReactComponents.Query<MyMetricsQuery, MyMetricsQueryVariables>
    query={MyMetricsDocument}
    {...props}
  />
);

/**
 * __useMyMetricsQuery__
 *
 * To run a query within a React component, call `useMyMetricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyMetricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyMetricsQuery({
 *   variables: {
 *      relations: // value for 'relations'
 *   },
 * });
 */
export function useMyMetricsQuery(
  baseOptions?: Apollo.QueryHookOptions<MyMetricsQuery, MyMetricsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyMetricsQuery, MyMetricsQueryVariables>(
    MyMetricsDocument,
    options
  );
}
export function useMyMetricsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyMetricsQuery,
    MyMetricsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyMetricsQuery, MyMetricsQueryVariables>(
    MyMetricsDocument,
    options
  );
}
export function useMyMetricsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    MyMetricsQuery,
    MyMetricsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MyMetricsQuery, MyMetricsQueryVariables>(
    MyMetricsDocument,
    options
  );
}
export type MyMetricsQueryHookResult = ReturnType<typeof useMyMetricsQuery>;
export type MyMetricsLazyQueryHookResult = ReturnType<
  typeof useMyMetricsLazyQuery
>;
export type MyMetricsSuspenseQueryHookResult = ReturnType<
  typeof useMyMetricsSuspenseQuery
>;
export type MyMetricsQueryResult = Apollo.QueryResult<
  MyMetricsQuery,
  MyMetricsQueryVariables
>;
export const PaginateMetricsDocument = gql`
  query PaginateMetrics {
    paginateMetrics {
      total
      items {
        code
        id
        name
        sportType
      }
    }
  }
`;
export type PaginateMetricsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    PaginateMetricsQuery,
    PaginateMetricsQueryVariables
  >,
  'query'
>;

export const PaginateMetricsComponent = (
  props: PaginateMetricsComponentProps
) => (
  <ApolloReactComponents.Query<
    PaginateMetricsQuery,
    PaginateMetricsQueryVariables
  >
    query={PaginateMetricsDocument}
    {...props}
  />
);

/**
 * __usePaginateMetricsQuery__
 *
 * To run a query within a React component, call `usePaginateMetricsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginateMetricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginateMetricsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaginateMetricsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaginateMetricsQuery,
    PaginateMetricsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PaginateMetricsQuery, PaginateMetricsQueryVariables>(
    PaginateMetricsDocument,
    options
  );
}
export function usePaginateMetricsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaginateMetricsQuery,
    PaginateMetricsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaginateMetricsQuery,
    PaginateMetricsQueryVariables
  >(PaginateMetricsDocument, options);
}
export function usePaginateMetricsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PaginateMetricsQuery,
    PaginateMetricsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PaginateMetricsQuery,
    PaginateMetricsQueryVariables
  >(PaginateMetricsDocument, options);
}
export type PaginateMetricsQueryHookResult = ReturnType<
  typeof usePaginateMetricsQuery
>;
export type PaginateMetricsLazyQueryHookResult = ReturnType<
  typeof usePaginateMetricsLazyQuery
>;
export type PaginateMetricsSuspenseQueryHookResult = ReturnType<
  typeof usePaginateMetricsSuspenseQuery
>;
export type PaginateMetricsQueryResult = Apollo.QueryResult<
  PaginateMetricsQuery,
  PaginateMetricsQueryVariables
>;
export const HeadlessPaginatePlaygroundUnitDocument = gql`
  query HeadlessPaginatePlaygroundUnit(
    $options: HeadlessPaginatePlaygroundUnitOptions
    $relations: [String!]
  ) {
    headlessPaginatePlaygroundUnit(options: $options, relations: $relations) {
      total
      items {
        id
        name
        labels {
          id
          name
        }
        defaultPrice
        capacity
      }
    }
  }
`;
export type HeadlessPaginatePlaygroundUnitComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    HeadlessPaginatePlaygroundUnitQuery,
    HeadlessPaginatePlaygroundUnitQueryVariables
  >,
  'query'
>;

export const HeadlessPaginatePlaygroundUnitComponent = (
  props: HeadlessPaginatePlaygroundUnitComponentProps
) => (
  <ApolloReactComponents.Query<
    HeadlessPaginatePlaygroundUnitQuery,
    HeadlessPaginatePlaygroundUnitQueryVariables
  >
    query={HeadlessPaginatePlaygroundUnitDocument}
    {...props}
  />
);

/**
 * __useHeadlessPaginatePlaygroundUnitQuery__
 *
 * To run a query within a React component, call `useHeadlessPaginatePlaygroundUnitQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeadlessPaginatePlaygroundUnitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeadlessPaginatePlaygroundUnitQuery({
 *   variables: {
 *      options: // value for 'options'
 *      relations: // value for 'relations'
 *   },
 * });
 */
export function useHeadlessPaginatePlaygroundUnitQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HeadlessPaginatePlaygroundUnitQuery,
    HeadlessPaginatePlaygroundUnitQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HeadlessPaginatePlaygroundUnitQuery,
    HeadlessPaginatePlaygroundUnitQueryVariables
  >(HeadlessPaginatePlaygroundUnitDocument, options);
}
export function useHeadlessPaginatePlaygroundUnitLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HeadlessPaginatePlaygroundUnitQuery,
    HeadlessPaginatePlaygroundUnitQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HeadlessPaginatePlaygroundUnitQuery,
    HeadlessPaginatePlaygroundUnitQueryVariables
  >(HeadlessPaginatePlaygroundUnitDocument, options);
}
export function useHeadlessPaginatePlaygroundUnitSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    HeadlessPaginatePlaygroundUnitQuery,
    HeadlessPaginatePlaygroundUnitQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    HeadlessPaginatePlaygroundUnitQuery,
    HeadlessPaginatePlaygroundUnitQueryVariables
  >(HeadlessPaginatePlaygroundUnitDocument, options);
}
export type HeadlessPaginatePlaygroundUnitQueryHookResult = ReturnType<
  typeof useHeadlessPaginatePlaygroundUnitQuery
>;
export type HeadlessPaginatePlaygroundUnitLazyQueryHookResult = ReturnType<
  typeof useHeadlessPaginatePlaygroundUnitLazyQuery
>;
export type HeadlessPaginatePlaygroundUnitSuspenseQueryHookResult = ReturnType<
  typeof useHeadlessPaginatePlaygroundUnitSuspenseQuery
>;
export type HeadlessPaginatePlaygroundUnitQueryResult = Apollo.QueryResult<
  HeadlessPaginatePlaygroundUnitQuery,
  HeadlessPaginatePlaygroundUnitQueryVariables
>;
export const AvailablePlaygroundDocument = gql`
  query AvailablePlayground(
    $findAvailablePlaygroundInput: FindAvailablePlaygroundInput!
  ) {
    availablePlayground(
      findAvailablePlaygroundInput: $findAvailablePlaygroundInput
    ) {
      id
      name
      type
      address
      location {
        coordinates
      }
    }
  }
`;
export type AvailablePlaygroundComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    AvailablePlaygroundQuery,
    AvailablePlaygroundQueryVariables
  >,
  'query'
> &
  (
    | { variables: AvailablePlaygroundQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const AvailablePlaygroundComponent = (
  props: AvailablePlaygroundComponentProps
) => (
  <ApolloReactComponents.Query<
    AvailablePlaygroundQuery,
    AvailablePlaygroundQueryVariables
  >
    query={AvailablePlaygroundDocument}
    {...props}
  />
);

/**
 * __useAvailablePlaygroundQuery__
 *
 * To run a query within a React component, call `useAvailablePlaygroundQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailablePlaygroundQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailablePlaygroundQuery({
 *   variables: {
 *      findAvailablePlaygroundInput: // value for 'findAvailablePlaygroundInput'
 *   },
 * });
 */
export function useAvailablePlaygroundQuery(
  baseOptions: Apollo.QueryHookOptions<
    AvailablePlaygroundQuery,
    AvailablePlaygroundQueryVariables
  > &
    (
      | { variables: AvailablePlaygroundQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AvailablePlaygroundQuery,
    AvailablePlaygroundQueryVariables
  >(AvailablePlaygroundDocument, options);
}
export function useAvailablePlaygroundLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AvailablePlaygroundQuery,
    AvailablePlaygroundQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AvailablePlaygroundQuery,
    AvailablePlaygroundQueryVariables
  >(AvailablePlaygroundDocument, options);
}
export function useAvailablePlaygroundSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AvailablePlaygroundQuery,
    AvailablePlaygroundQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    AvailablePlaygroundQuery,
    AvailablePlaygroundQueryVariables
  >(AvailablePlaygroundDocument, options);
}
export type AvailablePlaygroundQueryHookResult = ReturnType<
  typeof useAvailablePlaygroundQuery
>;
export type AvailablePlaygroundLazyQueryHookResult = ReturnType<
  typeof useAvailablePlaygroundLazyQuery
>;
export type AvailablePlaygroundSuspenseQueryHookResult = ReturnType<
  typeof useAvailablePlaygroundSuspenseQuery
>;
export type AvailablePlaygroundQueryResult = Apollo.QueryResult<
  AvailablePlaygroundQuery,
  AvailablePlaygroundQueryVariables
>;
export const HeadlessPlaygroundDocument = gql`
  query HeadlessPlayground(
    $headlessPlaygroundId: Float!
    $relations: [String!]
  ) {
    headlessPlayground(id: $headlessPlaygroundId, relations: $relations) {
      id
      coverImg {
        id
        variants
      }
      address
      name
      timeSlotUnit
      type
      closeHour
      openHour
      phone
    }
  }
`;
export type HeadlessPlaygroundComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    HeadlessPlaygroundQuery,
    HeadlessPlaygroundQueryVariables
  >,
  'query'
> &
  (
    | { variables: HeadlessPlaygroundQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const HeadlessPlaygroundComponent = (
  props: HeadlessPlaygroundComponentProps
) => (
  <ApolloReactComponents.Query<
    HeadlessPlaygroundQuery,
    HeadlessPlaygroundQueryVariables
  >
    query={HeadlessPlaygroundDocument}
    {...props}
  />
);

/**
 * __useHeadlessPlaygroundQuery__
 *
 * To run a query within a React component, call `useHeadlessPlaygroundQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeadlessPlaygroundQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeadlessPlaygroundQuery({
 *   variables: {
 *      headlessPlaygroundId: // value for 'headlessPlaygroundId'
 *      relations: // value for 'relations'
 *   },
 * });
 */
export function useHeadlessPlaygroundQuery(
  baseOptions: Apollo.QueryHookOptions<
    HeadlessPlaygroundQuery,
    HeadlessPlaygroundQueryVariables
  > &
    (
      | { variables: HeadlessPlaygroundQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    HeadlessPlaygroundQuery,
    HeadlessPlaygroundQueryVariables
  >(HeadlessPlaygroundDocument, options);
}
export function useHeadlessPlaygroundLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HeadlessPlaygroundQuery,
    HeadlessPlaygroundQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HeadlessPlaygroundQuery,
    HeadlessPlaygroundQueryVariables
  >(HeadlessPlaygroundDocument, options);
}
export function useHeadlessPlaygroundSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    HeadlessPlaygroundQuery,
    HeadlessPlaygroundQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    HeadlessPlaygroundQuery,
    HeadlessPlaygroundQueryVariables
  >(HeadlessPlaygroundDocument, options);
}
export type HeadlessPlaygroundQueryHookResult = ReturnType<
  typeof useHeadlessPlaygroundQuery
>;
export type HeadlessPlaygroundLazyQueryHookResult = ReturnType<
  typeof useHeadlessPlaygroundLazyQuery
>;
export type HeadlessPlaygroundSuspenseQueryHookResult = ReturnType<
  typeof useHeadlessPlaygroundSuspenseQuery
>;
export type HeadlessPlaygroundQueryResult = Apollo.QueryResult<
  HeadlessPlaygroundQuery,
  HeadlessPlaygroundQueryVariables
>;
export const SuggestPlaygroundDocument = gql`
  mutation SuggestPlayground($suggestPlaygroundInput: SuggestPlaygroundInput!) {
    suggestPlayground(suggestPlaygroundInput: $suggestPlaygroundInput) {
      id
    }
  }
`;
export type SuggestPlaygroundMutationFn = Apollo.MutationFunction<
  SuggestPlaygroundMutation,
  SuggestPlaygroundMutationVariables
>;
export type SuggestPlaygroundComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    SuggestPlaygroundMutation,
    SuggestPlaygroundMutationVariables
  >,
  'mutation'
>;

export const SuggestPlaygroundComponent = (
  props: SuggestPlaygroundComponentProps
) => (
  <ApolloReactComponents.Mutation<
    SuggestPlaygroundMutation,
    SuggestPlaygroundMutationVariables
  >
    mutation={SuggestPlaygroundDocument}
    {...props}
  />
);

/**
 * __useSuggestPlaygroundMutation__
 *
 * To run a mutation, you first call `useSuggestPlaygroundMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSuggestPlaygroundMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [suggestPlaygroundMutation, { data, loading, error }] = useSuggestPlaygroundMutation({
 *   variables: {
 *      suggestPlaygroundInput: // value for 'suggestPlaygroundInput'
 *   },
 * });
 */
export function useSuggestPlaygroundMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SuggestPlaygroundMutation,
    SuggestPlaygroundMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SuggestPlaygroundMutation,
    SuggestPlaygroundMutationVariables
  >(SuggestPlaygroundDocument, options);
}
export type SuggestPlaygroundMutationHookResult = ReturnType<
  typeof useSuggestPlaygroundMutation
>;
export type SuggestPlaygroundMutationResult =
  Apollo.MutationResult<SuggestPlaygroundMutation>;
export type SuggestPlaygroundMutationOptions = Apollo.BaseMutationOptions<
  SuggestPlaygroundMutation,
  SuggestPlaygroundMutationVariables
>;
export const FindSuggestPlaygroundsBySearchTextDocument = gql`
  query FindSuggestPlaygroundsBySearchText($searchText: String!) {
    findSuggestPlaygroundsBySearchText(searchText: $searchText) {
      name
      id
      type
      address
    }
  }
`;
export type FindSuggestPlaygroundsBySearchTextComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    FindSuggestPlaygroundsBySearchTextQuery,
    FindSuggestPlaygroundsBySearchTextQueryVariables
  >,
  'query'
> &
  (
    | {
        variables: FindSuggestPlaygroundsBySearchTextQueryVariables;
        skip?: boolean;
      }
    | { skip: boolean }
  );

export const FindSuggestPlaygroundsBySearchTextComponent = (
  props: FindSuggestPlaygroundsBySearchTextComponentProps
) => (
  <ApolloReactComponents.Query<
    FindSuggestPlaygroundsBySearchTextQuery,
    FindSuggestPlaygroundsBySearchTextQueryVariables
  >
    query={FindSuggestPlaygroundsBySearchTextDocument}
    {...props}
  />
);

/**
 * __useFindSuggestPlaygroundsBySearchTextQuery__
 *
 * To run a query within a React component, call `useFindSuggestPlaygroundsBySearchTextQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSuggestPlaygroundsBySearchTextQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSuggestPlaygroundsBySearchTextQuery({
 *   variables: {
 *      searchText: // value for 'searchText'
 *   },
 * });
 */
export function useFindSuggestPlaygroundsBySearchTextQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindSuggestPlaygroundsBySearchTextQuery,
    FindSuggestPlaygroundsBySearchTextQueryVariables
  > &
    (
      | {
          variables: FindSuggestPlaygroundsBySearchTextQueryVariables;
          skip?: boolean;
        }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FindSuggestPlaygroundsBySearchTextQuery,
    FindSuggestPlaygroundsBySearchTextQueryVariables
  >(FindSuggestPlaygroundsBySearchTextDocument, options);
}
export function useFindSuggestPlaygroundsBySearchTextLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindSuggestPlaygroundsBySearchTextQuery,
    FindSuggestPlaygroundsBySearchTextQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FindSuggestPlaygroundsBySearchTextQuery,
    FindSuggestPlaygroundsBySearchTextQueryVariables
  >(FindSuggestPlaygroundsBySearchTextDocument, options);
}
export function useFindSuggestPlaygroundsBySearchTextSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    FindSuggestPlaygroundsBySearchTextQuery,
    FindSuggestPlaygroundsBySearchTextQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    FindSuggestPlaygroundsBySearchTextQuery,
    FindSuggestPlaygroundsBySearchTextQueryVariables
  >(FindSuggestPlaygroundsBySearchTextDocument, options);
}
export type FindSuggestPlaygroundsBySearchTextQueryHookResult = ReturnType<
  typeof useFindSuggestPlaygroundsBySearchTextQuery
>;
export type FindSuggestPlaygroundsBySearchTextLazyQueryHookResult = ReturnType<
  typeof useFindSuggestPlaygroundsBySearchTextLazyQuery
>;
export type FindSuggestPlaygroundsBySearchTextSuspenseQueryHookResult =
  ReturnType<typeof useFindSuggestPlaygroundsBySearchTextSuspenseQuery>;
export type FindSuggestPlaygroundsBySearchTextQueryResult = Apollo.QueryResult<
  FindSuggestPlaygroundsBySearchTextQuery,
  FindSuggestPlaygroundsBySearchTextQueryVariables
>;
export const UserInteractionDocument = gql`
  query UserInteraction {
    userInteraction {
      id
      interactionType
      game {
        id
        name
        type
      }
    }
  }
`;
export type UserInteractionComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    UserInteractionQuery,
    UserInteractionQueryVariables
  >,
  'query'
>;

export const UserInteractionComponent = (
  props: UserInteractionComponentProps
) => (
  <ApolloReactComponents.Query<
    UserInteractionQuery,
    UserInteractionQueryVariables
  >
    query={UserInteractionDocument}
    {...props}
  />
);

/**
 * __useUserInteractionQuery__
 *
 * To run a query within a React component, call `useUserInteractionQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInteractionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInteractionQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserInteractionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserInteractionQuery,
    UserInteractionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserInteractionQuery, UserInteractionQueryVariables>(
    UserInteractionDocument,
    options
  );
}
export function useUserInteractionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserInteractionQuery,
    UserInteractionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    UserInteractionQuery,
    UserInteractionQueryVariables
  >(UserInteractionDocument, options);
}
export function useUserInteractionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UserInteractionQuery,
    UserInteractionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    UserInteractionQuery,
    UserInteractionQueryVariables
  >(UserInteractionDocument, options);
}
export type UserInteractionQueryHookResult = ReturnType<
  typeof useUserInteractionQuery
>;
export type UserInteractionLazyQueryHookResult = ReturnType<
  typeof useUserInteractionLazyQuery
>;
export type UserInteractionSuspenseQueryHookResult = ReturnType<
  typeof useUserInteractionSuspenseQuery
>;
export type UserInteractionQueryResult = Apollo.QueryResult<
  UserInteractionQuery,
  UserInteractionQueryVariables
>;
