import React from "react";
import { useParams } from "react-router";
import PollDetails from "./pollDetails";
import { Redirect } from "react-router";

export default function PollLink() {
  const { pollDetails } = useParams();
  if (localStorage.getItem("userData")) {
    return <PollDetails poll={JSON.parse(atob(pollDetails))}></PollDetails>;
  } else {
    localStorage.setItem("pollDetails", pollDetails);
    return <Redirect to={"/"} />;
  }
}
