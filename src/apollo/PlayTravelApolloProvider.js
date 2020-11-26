import React from "react"
import { ApolloProvider } from "react-apollo";
import Routes from "../routes/Routes";
import PlayTravelApolloClient from "./PlayTravelApolloClient";


const PlayTravelApolloProvider = () => {
  return (
    <ApolloProvider client={PlayTravelApolloClient}>
      <Routes />
    </ApolloProvider >
  )
}

export default PlayTravelApolloProvider;