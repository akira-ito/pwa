import { ApolloClient, InMemoryCache } from '@apollo/client';

function offsetFromCursor(cursor: string) {
  return cursor ? Number(atob(cursor)) : -1;
}

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        list: {
          keyArgs: ['_id'],
          read(existing, { args }) {
            console.log('read', existing, args);
            if (!existing || existing.ctx.search !== args?.name)
              return undefined;

            // const limit = args?.limit;
            // let offset = offsetFromCursor(args?.cursor);
            // if (offset < 0) offset = existing?.edges?.length ?? 0;

            // console.log(existing, limit, offset);
            // const res = existing?.edges?.slice(offset - limit, offset) ?? [];
            // if (res.length === 0) return undefined;
            // return { ...existing, edges: res };
            return existing;
          },
          merge(existing = [], incoming, { args, readField }) {
            console.log('merge', existing, incoming);

            let edgesMerged =
              existing?.ctx?.search === args?.name
                ? existing?.edges?.slice(0) ?? []
                : [];
            // merged = merged.concat(incoming.edges);

            let offset = offsetFromCursor(args?.cursor);
            if (offset < 0) offset = edgesMerged.length;
            for (let i = 0; i < incoming?.edges.length; ++i) {
              edgesMerged[offset + i] = incoming?.edges[i];
              // const id = readField<string>('_id', incoming?.edges[i]);
              // if (id) merged[id] = incoming?.edges[i];
            }
            return {
              ...incoming,
              edges: edgesMerged,
              ctx: { search: args?.name },
            };
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache,
});
