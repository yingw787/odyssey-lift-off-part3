import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { gql } from "../__generated__";
import { Layout, QueryResult } from "../components";

const Track = () => {
  const { trackId = "" } = useParams();
  return <Layout></Layout>
}

export default Track;
