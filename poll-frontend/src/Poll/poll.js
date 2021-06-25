import "../App.css";
import "./poll.css";
import React, { useRef } from "react";
import { assignVote, startPoll } from "../api";
import { useParams } from "react-router-dom";
import consumer from "../channels/consumer";
function Poll() {
  const [isPollStarted, setStartPoll] = React.useState(false);
  const [pollId, setPollId] = React.useState("");

  const [pollLink, setPollLink] = React.useState("");
  const linkInput = useRef();
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

  const vote = async () => {
    const vote = await assignVote({
      polls_id: pollId,
      users_id: userId,
      estimate: 5,
    });
    console.log(vote);
  };

  const createPoll = async () => {
    const poll = await startPoll({
      tasks_id: task_id,
      users_id: userId,
      is_active: true,
    });
    consumer.subscriptions.create(
      {
        channel: "PollChannel",
        poll_id: poll.id,
      },
      {
        received(data) {
          console.log(data, "received data");
        },
      }
    );

    setStartPoll(poll.is_active);
    createPollLink(poll.id);
    setPollId(poll.id);
  };

  function copytoClipboard() {
    const str = document.getElementById("poll_link").value;
    debugger;
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    // el.style.position = "absolute";
    // el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    // var copyText = document.getElementById("poll_link");
    // // const copyText = linkInput.current;
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */

    // document.execCommand("copy");
    // console.log("coped", copyText.value);
  }
  return (
    <div className="poll-card">
      {/* <button onClick={vote}>vote</button> */}
      {isPollStarted && pollLink ? (
        <>
          <div className="invite-section">
            <h5>Share Link</h5>
            <input
              id="poll_link"
              ref={linkInput}
              className="input-field"
              disabled
              value={pollLink}
            ></input>
            <div>
              <button
                className="copy-link-btn"
                onClick={copytoClipboard}
                type="button"
              >
                copy link
              </button>
            </div>
          </div>
          <div className="grid">
            <span>
              <strong>User</strong>
            </span>
            <span>
              <strong>Estimate</strong>
            </span>
            <span className="grid-item"> User 1 </span>
            <span className="grid-item"> 5 </span>
            <span className="grid-item"> User 1 </span>
            <span className="grid-item"> 5 </span>
            <span className="grid-item"> User 1 </span>
            <span className="grid-item"> 5 </span>
            <span className="grid-item"> User 1 </span>
            <span className="grid-item"> 5 </span>
            <span className="grid-item"> User 1 </span>
            <span className="grid-item"> 5 </span>
            <span className="grid-item"> User 1 </span>
            <span className="grid-item"> 5 </span>
            <span className="grid-item"> User 1 </span>
            <span className="grid-item"> 5 </span>
            <span className="grid-item"> User 1 </span>
            <span className="grid-item"> 5 </span>
            <span className="grid-item"> User 1 </span>
            <span className="grid-item"> 5 </span>
            <span className="grid-item"> User 1 </span>
            <span className="grid-item"> 5 </span>
          </div>
        </>
      ) : (
        <>
          <p>Poll has not started yet</p>
          <button className="button" onClick={createPoll}>
            Start Poll
          </button>
        </>
      )}
    </div>
  );
}

export default Poll;
