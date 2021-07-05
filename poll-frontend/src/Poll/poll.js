import "../App.css";
import "./poll.css";
import React from "react";
import { startPoll } from "../api";
import { useParams } from "react-router-dom";
import { APP_URL } from "../api";

function Poll({ history, pollDetails = {} }) {
  const { task_id } = useParams();
  const userId = JSON.parse(localStorage.getItem("userData")).id;

  const createPollLink = (pollId) => {
    const pollData = {
      user_id: userId,
      task_id: task_id,
      poll_id: pollId,
    };
    const link = `${APP_URL}/poll-link/${btoa(JSON.stringify(pollData))}`;
    history.push({
      pathname: `/pollDetails/${task_id}`,
      pollDetails: pollData,
      link,
    });
  };

  const createPoll = async () => {
    const poll = await startPoll({
      tasks_id: task_id,
      users_id: userId,
      is_active: true,
    });
    createPollLink(poll.id);
  };

  return (
    <div className="poll-card start-poll-card">
      <p>Poll has not started yet</p>
      <button className="button" onClick={createPoll}>
        Start Poll
      </button>
    </div>
  );
}

export default Poll;
