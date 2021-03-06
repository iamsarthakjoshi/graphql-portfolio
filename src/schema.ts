import { makeSchema } from '@nexus/schema';
import path from 'path';
import * as types from 'src/allTypes';

export const schema = makeSchema({
  types,
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  outputs: {
    schema: path.join(process.cwd(), 'src', 'generated', 'schema.gen.graphql'),
    typegen: path.join(process.cwd(), 'src', 'generated', 'nexusTypes.gen.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        alias: 'faces',
        source: path.join(process.cwd(), 'src', 'interfaces.ts'),
        typeMatch: (type) => new RegExp(`${type}Interface`),
      },
    ],
    backingTypeMap: {
      Date: 'Date',
      URL: 'URL',
    },
    debug: process.env.NODE_ENV === 'development',
  },
});
