import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateProfileInput = {
  birthdate?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  tin?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  profile: CreateProfileInput;
};

export type Login = {
  __typename?: 'Login';
  access_token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Login;
  register: User;
  removeUser: User;
  updateUser: User;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: CreateUserInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Profile = {
  __typename?: 'Profile';
  birthdate?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  tin?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  users: Array<User>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  password?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<CreateProfileInput>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  profile: Profile;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type RegisterUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id?: string | null, email: string, status?: string | null, profile: { __typename?: 'Profile', name: string } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id?: string | null, email: string, status?: string | null, profile: { __typename?: 'Profile', name: string, birthdate?: string | null } } };


export const RegisterUserDocument = gql`
    mutation RegisterUser($input: CreateUserInput!) {
  register(input: $input) {
    id
    email
    status
    profile {
      name
    }
  }
}
    `;

export function useRegisterUserMutation() {
  return Urql.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    status
    profile {
      name
      birthdate
    }
  }
}
    `;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};