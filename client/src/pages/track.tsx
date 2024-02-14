import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { gql } from "../__generated__";
import { Layout, QueryResult } from "../components";

export const GET_TRACK = gql(`
query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    numberOfViews
    modules {
      id
      title
      length
    }
    description
  }
}
`);

const Track = () => {
  const { trackId = "" } = useParams();
  return <Layout></Layout>;
};

export default Track;
