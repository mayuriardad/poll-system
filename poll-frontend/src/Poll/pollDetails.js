import "../App.css";
import "./poll.css";
import React, { useEffect, useRef, useState } from "react";
import { assignVote, getVotes } from "../api";
import { useLocation, useParams } from "react-router-dom";
import consumer from "../channels/consumer";
import UserEstimateTable from "./UserEstimateTable";
import EstimateCountTable from "./EstimateCountTable";
import copytoClipboard from "../utils";
import TaskDetails from "./TaskDetails";

const estimateNumbers = [0, 0.5, 1, 2, 3, 5, 8, 13];

function PollDetails({ poll = {} }) {
  const { link, pollDetails = {} } = useLocation();
  const [votes, setVotes] = useState([]);
  const [estimate, setEstimate] = useState(0);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);
  const { task_id } = useParams();
  const [voteCount, setVoteCount] = useState(() => {
    return estimateNumbers.map((est) => ({ estimate: est, count: 0 }));
  });

  const updateEstimateCount = (votes) => {
    let estVotes = votes.reduce((obj, vote) => {
      if (!obj[vote.estimate]) {
        obj[vote.estimate] = 0;
      }
      obj[vote.estimate] += 1;
      return obj;
    }, {});
    const newVoteCount = voteCount.map((vc) => ({
      estimate: vc.estimate,
      count: estVotes[vc.estimate] || 0,
    }));
    setVoteCount(newVoteCount);
  };

  useEffect(() => {
    updateEstimateCount(votes);
  }, [votes]);

  let pollData = pollDetails;
  if (poll.poll_id) {
    pollData = poll;
  }
  if (pollData.poll_id) {
    consumer.subscriptions.create(
      {
        channel: "PollChannel",
        polls_id: pollData.poll_id,
      },
      {
        received(data) {
          setVotes(data);
        },
      }
    );
  }

  useEffect(() => {
    getVotes(pollData.poll_id).then((votes) => setVotes(votes));
  }, [pollData.poll_id]);

  const linkInput = useRef();
  const userId = JSON.parse(localStorage.getItem("userData")).id;

  const vote = async () => {
    const vote = await assignVote({
      polls_id: pollData.poll_id,
      users_id: userId,
      estimate: estimate,
    });
    if (vote) {
      setIsDisabled(true);
    }
  };

  function onClickCopy() {
    copytoClipboard("poll_link", () => setIsLinkCopied(true));
  }

  return (
    <>
      <header className="dashboard-header">
        <h1>Poll Details</h1>
      </header>
      <div className="poll-card">
        <TaskDetails id={task_id} />
        {link && (
          <div className="invite-section">
            <h4>Share Link</h4>
            <input
              id="poll_link"
              ref={linkInput}
              className="input-field"
              disabled
              value={link}
            ></input>
            <div>
              <button
                className="copy-link-btn"
                onClick={onClickCopy}
                type="button"
              >
                {isLinkCopied ? "copied" : "copy link"}
              </button>
            </div>
          </div>
        )}
        <div className="table-wrapper">
          <UserEstimateTable votes={votes} />
          <EstimateCountTable voteCount={voteCount} />
        </div>
        <div className="vote-section">
          <h4>Select Estimate:</h4>
          <div className="select-wrapper">
            <select
              value={estimate}
              className="input-select"
              name="cars"
              id="cars"
              onChange={(event) => setEstimate(event.target.value)}
            >
              <option defaultValue value="0">
                0
              </option>
              <option value="0.5">1/2</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="8">8</option>
              <option value="13">13</option>
            </select>
          </div>
          <button
            disabled={isDisabled}
            className={`button vote-btn ${isDisabled ? "disabled" : ""}`}
            onClick={vote}
          >
            Vote
          </button>
        </div>
      </div>
    </>
  );
}

export default PollDetails;
