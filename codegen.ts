import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://alpaca.rocketseat.com.br/router',
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
    './src/gql/schema.graphql': {
      plugins: ['schema-ast']
    }
  },
}
 
export default config