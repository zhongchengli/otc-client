import { InMemoryCache } from "apollo-cache-inmemory"
import ApolloClient from "apollo-client"
import { HttpLink } from "apollo-link-http"


// configure an ApolloClient
const PlayTravelApolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
})

export default PlayTravelApolloClient

