import "../App.css";
import React from "react";
import { startPoll } from "../api";
import { useParams } from "react-router-dom";
function Poll() {
  const [isPollStarted, setStartPoll] = React.useState(false);
  const [pollLink, setPollLink] = React.useState("");
  const { task_id } = useParams();
  const userId = JSON.parse(localStorage.getItem("userData")).id;

  const createPollLink = (pollId) => {
    const pollData = {
      user_id: userId,
      task_id: task_id,
      poll_id: pollId,
    };
    const link = `http://localhost:3000/${btoa(JSON.stringify(pollData))}`;
    setPollLink(link);
  };

  const createPoll = async () => {
    const poll = await startPoll({
      tasks_id: task_id,
      users_id: userId,
      is_active: true,
    });
    setStartPoll(poll.is_active);
    createPollLink();
  };

  return (
    <div className="App">
      <header className="App-header">
        {isPollStarted && pollLink ? (
          <div>
            <p>Invite people to vote</p>
            <p>Copy link to invite people {pollLink}</p>
          </div>
        ) : (
          <>
            <p>Poll has not started yet, click here to start a poll</p>
            <button onClick={createPoll}>Start Poll</button>
          </>
        )}
      </header>
    </div>
  );
}

export default Poll;
