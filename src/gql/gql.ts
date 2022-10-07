/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  fragment TrailItem on Trail {\n    id\n    title\n  }\n": types.TrailItemFragmentDoc,
    "\n  query allTrails {\n    trails {\n      id\n      ...TrailItem\n    }\n  } \n": types.AllTrailsDocument,
};

export function graphql(source: "\n  fragment TrailItem on Trail {\n    id\n    title\n  }\n"): (typeof documents)["\n  fragment TrailItem on Trail {\n    id\n    title\n  }\n"];
export function graphql(source: "\n  query allTrails {\n    trails {\n      id\n      ...TrailItem\n    }\n  } \n"): (typeof documents)["\n  query allTrails {\n    trails {\n      id\n      ...TrailItem\n    }\n  } \n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;